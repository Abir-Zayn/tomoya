'use client';
import React, { useRef } from 'react';
import { Button } from '../ui/button';

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function UploadFormInput({ onSubmit }: UploadFormInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
        <input
          id="file"
          type="file"
          name="file"
          ref={fileInputRef}
          accept="application/pdf"
          className="flex-1 p-2 border rounded w-full"
          required
        />
        <Button type="submit">Upload your PDF</Button>
      </div>
    </form>
  );
}

export default UploadFormInput;
