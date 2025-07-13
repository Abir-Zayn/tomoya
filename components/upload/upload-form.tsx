'use client';
import React, { useState } from 'react';
import UploadFormInput from './upload-form-input';
import { z } from 'zod';
import { useUploadThing } from '@/utils/uploadthing';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

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
  const router = useRouter();

  const { startUpload } = useUploadThing('pdfUploader', {
    onClientUploadComplete: () => {
      setIsUploading(false);

      // Success toast with custom icon and duration
      toast.success('Upload Successful!', {
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        description: 'Your PDF has been uploaded successfully.',
        duration: 5000, // 5 seconds
        position: 'top-center',
        className: 'border-green-500',
      });

      // Redirect to summaries page or dashboard after 1 second
      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    },
    onUploadError: (err) => {
      setIsUploading(false);
      setError(`Upload Failed: ${err.message}`);

      // Error toast with custom icon
      toast.error('Upload Failed', {
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
        description: err.message || 'Something went wrong during upload.',
        duration: 8000, // 8 seconds for errors so users have time to read
        position: 'top-center',
        className: 'border-red-500',
      });
    },
    onUploadBegin: () => {
      setIsUploading(true);
      setError(null);

      // Loading toast with spinner icon
      toast.loading('Uploading PDF...', {
        icon: <Loader2 className="h-5 w-5 animate-spin" />,
        description: 'Please wait while we process your file.',
        duration: Infinity, // Will be dismissed when upload completes or fails
        position: 'top-center',
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

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

    // Validate file type and size
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

    try {
      await startUpload([file]);
    } catch (err) {
      setError('Upload failed. Please try again.');
      setIsUploading(false);

      // General error toast
      toast.error('Upload Failed', {
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
        description: 'Something went wrong. Please try again.',
        duration: 8000,
        position: 'top-center',
        className: 'border-red-500',
      });
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
      {isUploading && (
        <div className="flex justify-center items-center gap-2 text-center p-4">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">
            Processing your document...
          </p>
        </div>
      )}
    </div>
  );
}

export default UploadForm;
