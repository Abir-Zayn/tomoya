import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';

export async function fetchExtractPdfText(fileURL: string) {
  console.log('fetchExtractPdfText called with URL:', fileURL);
  
  try {
    // download the PDF from the provided URL
    console.log('Fetching PDF from URL...');
    const response = await fetch(fileURL);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}`);
    }
    
    //Transforms the response into a Blob object for easier handling
    console.log('Converting response to blob...');
    const blob = await response.blob();

    // Converts the blob to an ArrayBuffer,
    // which is the raw binary data format needed by the PDF loader
    console.log('Converting blob to ArrayBuffer...');
    const arrayBuffer = await blob.arrayBuffer();

    //The loader processes the PDF and extracts content from each page
    console.log('Loading PDF with LangChain PDFLoader...');
    const loader = new PDFLoader(new Blob([arrayBuffer]));

    const docs = await loader.load();
    console.log('PDF loaded successfully. Number of pages:', docs.length);
    
    //combine all pages
    // A single string containing all the text content from the PDF
    const extractedText = docs.map((doc) => doc.pageContent).join('\n');
    console.log('Text extraction completed. Total length:', extractedText.length);
    
    return extractedText;
  } catch (error) {
    console.error('Error in fetchExtractPdfText:', error);
    throw error;
  }
}

// This file contains a utility function for extracting text content
// from PDF files using the LangChain library.
