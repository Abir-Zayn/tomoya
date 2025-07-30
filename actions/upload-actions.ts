'use server';

import { getData } from '@/lib/db';
import { generateSummaryFromGemini } from '@/lib/geminiai';
import { fetchExtractPdfText } from '@/lib/langchain';
import { auth } from '@clerk/nextjs/server';

interface PdfSummaryType {
  userId: string;
  originalFileUrl: string;
  summaryText: string;
  title: string;
  fileName: string;
}

export async function generatePdfSummary(
  uploadResponse: {
    key: string;
    url: string;
    name: string;
    size: number;
  }[]
) {
  if (!uploadResponse || uploadResponse.length === 0) {
    console.error('Invalid upload response:', uploadResponse);
    return {
      success: false,
      message: 'Invalid upload response.',
      data: null,
    };
  }

  const { url: pdfUrl } = uploadResponse[0];

  if (!pdfUrl) {
    console.error('PDF URL is missing in the upload response.');
    return {
      success: false,
      message: 'PDF URL is missing.',
      data: null,
    };
  }

  console.log(`Processing PDF from URL: ${pdfUrl}`);

  let pdfText;
  try {
    console.log('Starting PDF text extraction...');
    pdfText = await fetchExtractPdfText(pdfUrl);
    console.log(
      'PDF text extracted successfully. Length:',
      pdfText?.length || 0
    );
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    return {
      success: false,
      message:
        'Failed to extract text from PDF. The file might be corrupted or inaccessible.',
      data: null,
    };
  }

  if (!pdfText) {
    return {
      success: false,
      message: 'Extracted PDF text is empty.',
      data: null,
    };
  }

  try {
    console.log('Starting summary generation with Gemini AI...');
    const summary = await generateSummaryFromGemini(pdfText);
    console.log(
      'Summary generation completed. Summary length:',
      summary?.length || 0
    );

    if (!summary) {
      console.error('Summary is null or undefined');
      return {
        success: false,
        message: 'Failed to generate summary from AI.',
        data: null,
      };
    }
    if (summary === 'Rate Limit Exceeded. Please try again in a few minutes.') {
      console.warn('Rate limit exceeded for Gemini AI');
      return {
        success: false,
        message: summary,
        data: null,
      };
    }

    console.log('Summary generated successfully!');
    return {
      success: true,
      message: 'Summary generated successfully',
      data: { summary },
    };
  } catch (error) {
    console.error('Error generating summary from Gemini:', error);
    let errorMessage = 'An unknown error occurred during summary generation.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      success: false,
      message: errorMessage,
      data: null,
    };
  }
}

async function savePdfSummary({
  userId,
  originalFileUrl,
  summaryText,
  title,
  fileName,
}: PdfSummaryType) {
  //sql inserting pdf summary
  try {
    const sql = await getData(); // getDbConnection
    await sql`
    INSERT INTO pdf_summaries (
    user_id, 
    orginial_file_url, 
    summary_text, 
    title,
    file_name,
    
    )VALUES(
     ${userId},
     ${originalFileUrl},
     ${summaryText},
     ${title},
     ${fileName}
    );
    
    `;
  } catch (error) {
    console.error('Error saving PDF summary:', error);
    throw error;
  }
}

export async function storePdfSummaryAction({
  originalFileUrl,
  summaryText,
  title,
  fileName,
}: PdfSummaryType) {
  //user is logged in and has userId

  // savePdfSummary

  //savePdfSummary()

  try {
    const { userId } = await auth();

    let save_summary;

    // Handle the case where userId is not available
    if (!userId) {
      return {
        success: false,
        message: 'User is not authenticated.',
        data: null,
      };
    }

    save_summary = await savePdfSummary({
      userId,
      originalFileUrl,
      summaryText,
      title,
      fileName,
    });
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'Error while saving PDF summary',
      data: null,
    };
  }
}
