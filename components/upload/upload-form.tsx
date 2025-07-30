'use client';
import React, { useState } from 'react';
import UploadFormInput from './upload-form-input';
import { z } from 'zod';
import { useUploadThing } from '@/utils/uploadthing';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { generatePdfSummary } from '@/actions/upload-actions';

const schema = z.object({
  file: z
    .instanceof(File, {
      message: 'Please upload a valid PDF file.',
    })
    .refine((file) => file.size <= 24 * 1024 * 1024, {
      message: 'File size must be less than 24MB',
    })
    .refine((file) => file.type === 'application/pdf', 'File must be a PDF'),
});

function UploadForm() {
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);

  const { startUpload } = useUploadThing('pdfUploader', {
    onClientUploadComplete: (res) => {
      setIsUploading(false);
      toast.dismiss();
      handleGenerateSummary(res);
    },
    onUploadError: (err) => {
      setIsUploading(false);
      toast.dismiss();
      setError(`Upload Failed: ${err.message}`);
      toast.error('Upload Failed', {
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
        description: err.message || 'Something went wrong during upload.',
        duration: 8000,
        position: 'top-center',
        className: 'border-red-500',
      });
    },
    onUploadBegin: () => {
      setIsUploading(true);
      setError(null);
      setSummary(null);
      toast.loading('Uploading PDF...', {
        icon: <Loader2 className="h-5 w-5 animate-spin" />,
        description: 'Please wait while we process your file.',
        duration: Infinity,
        position: 'top-center',
      });
    },
  });

  const handleGenerateSummary = async (res: any) => {
    if (!res || res.length === 0) return;

    setIsGeneratingSummary(true);
    toast.loading('Generating Summary...', {
      icon: <Loader2 className="h-5 w-5 animate-spin" />,
      description: 'AI is summarizing your document, please wait.',
      duration: Infinity,
      position: 'top-center',
    });

    try {
      const result = await generatePdfSummary(res);
      toast.dismiss();

      if (result.success && result.data) {
        setSummary(result.data.summary);
        console.log('Generated Summary:', result.data.summary);
        toast.success('Summary Generated!', {
          icon: <CheckCircle className="h-5 w-5 text-green-500" />,
          description: 'Your summary is ready below.',
          duration: 5000,
          position: 'top-center',
          className: 'border-green-500',
        });
      } else {
        const errorMessage = result.message || 'Failed to generate summary.';
        if (errorMessage.includes('Rate Limit Exceeded')) {
          toast.error('Rate Limit Exceeded', {
            icon: <AlertCircle className="h-5 w-5 text-yellow-500" />,
            description:
              'You have made too many requests. Please try again in a few minutes.',
            duration: 8000,
            position: 'top-center',
            className: 'border-yellow-500',
          });
        } else {
          toast.error('Summary Generation Failed', {
            icon: <AlertCircle className="h-5 w-5 text-red-500" />,
            description: errorMessage,
            duration: 8000,
            position: 'top-center',
            className: 'border-red-500',
          });
        }
        setSummary(null);
      }
    } catch (error: any) {
      toast.dismiss();
      setSummary(null);
      toast.error('An Unexpected Error Occurred', {
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
        description: 'Something went wrong. Please try again.',
        duration: 8000,
        position: 'top-center',
        className: 'border-red-500',
      });
    }
    setIsGeneratingSummary(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSummary(null);

    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;

    if (!file || file.name === '') {
      setError('Please select a file to upload');
      toast.error('No File Selected', {
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
        description: 'Please select a PDF file to upload.',
        duration: 5000,
        position: 'top-center',
      });
      return;
    }

    const validatedFields = schema.safeParse({ file });
    if (!validatedFields.success) {
      const errorMessage =
        validatedFields.error.flatten().fieldErrors.file?.[0] ||
        'Invalid file type or size';
      setError(errorMessage);
      toast.error('Validation Error', {
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
        description: errorMessage,
        duration: 5000,
        position: 'top-center',
        className: 'border-red-500',
      });
      return;
    }

    await startUpload([file]);
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
      {(isUploading || isGeneratingSummary) && (
        <div className="flex justify-center items-center gap-2 text-center p-4">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">
            {isUploading ? 'Processing your document...' : 'Generating summary...'}
          </p>
        </div>
      )}
      {summary && (
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Generated Summary</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
        </div>
      )}
    </div>
  );
}

export default UploadForm;