'use client';
import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface UploadFormInputprops {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function UploadFormInput({ onSubmit }: UploadFormInputprops) {
  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="flex justify-end items-center gap-4">
        <input
          id="file"
          type="file"
          name="file"
          accept="application/pdf"
          className="flex-1 p-2 border rounded"
        />
        <Button> Upload your PDF</Button>
      </div>
    </form>
  );
}

export default UploadFormInput;
