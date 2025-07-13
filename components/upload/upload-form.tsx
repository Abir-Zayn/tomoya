'use client'; // Added this directive
import React from 'react';
import UploadFormInput from './upload-form-input';


function UploadForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');

    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;

    // validate file type
    // schema with ZOD
    // upload the file to UploadThing
    // parse the pdf using lang Chain
    // summarize the pdf using Gemini Studio
    // Save the summary to the database
    // redirect to the summary page
    if (!file || file.type !== 'application/pdf') {
      alert('Please upload a valid PDF file.');
      return;
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}

export default UploadForm;
