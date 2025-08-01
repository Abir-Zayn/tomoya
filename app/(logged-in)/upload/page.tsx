import BgGradient from '@/components/common/bgGradient';
import { Badge } from '@/components/ui/badge';
import UploadForm from '@/components/upload/upload-form';
import UploadHeader from '@/components/upload/upload-header';

import React from 'react';

function page() {
  return (
    <section className="min-h-screen">
      <BgGradient />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <UploadHeader />
          <UploadForm />
        </div>
      </div>
    </section>
  );
}

export default page;
