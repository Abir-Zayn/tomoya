import { Summary_system_prompt } from '@/utils/prompts';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const generateSummaryFromGemini = async (pdfText: string) => {
  console.log(
    'generateSummaryFromGemini called with text length:',
    pdfText?.length || 0
  );

  if (!pdfText || pdfText.trim().length === 0) {
    throw new Error('PDF text is empty or invalid');
  }

  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash', //gemini flash model
      generationConfig: {
        maxOutputTokens: 1500,
        temperature: 0.6,
      },
    });

    const prompt = `${Summary_system_prompt}\n
        Transform this PDF text into a concise summary,
        focusing on the system prompt and the key points:
        \n${pdfText}`;

    console.log('Sending request to Gemini AI...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summaryText = response.text();

    console.log('Generated Summary:', summaryText);
    return summaryText;
  } catch (error: any) {
    if (error?.status == 429) {
      return 'Rate Limit Exceeded. Please try again in a few minutes.';
    }
    console.error('Gemini API Error:', error);
    throw error;
  }
};
