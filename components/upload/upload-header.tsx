import React from 'react';
import { Badge } from '../ui/badge';
import { Sparkles } from 'lucide-react';

function UploadHeader() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 ">
      <div className="rounded-full border border-indigo-600">
        <Badge
          variant={'secondary'}
          className="
            relative px-6 py-2 text-xl text-indigo-600 font-medium bg-transparent  rounded-full  group-hover:bg-gray-50
            transition-colors
          "
        >
          <Sparkles />
          <span>AI-Powered Content Creations.</span>
        </Badge>
      </div>
      <div
        className="capitalize text-3xl font-bold tracking-tight text-base 
          sm:text-4xl"
      >
        Start Uploading{'  '}
        <span className="relative inline-block">
          <span className="relative z-10 px-3 py-1">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-indigo-600">
              your PDF's
            </span>
          </span>
          <span
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 -rotate-2 rounded-xl transform -skew-y-1 animate-pulse"
            aria-hidden="true"
          ></span>
        </span>{' '}
      </div>
      <p>Upload your document and check what our AI Machine can do .</p>
    </div>
  );
}

export default UploadHeader;
