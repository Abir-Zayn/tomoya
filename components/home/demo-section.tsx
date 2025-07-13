import { Pizza } from 'lucide-react';
import React from 'react';

function DemoSection() {
  return (
    <section className="relative">
      <div
        className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6
      lg:px-8 lg:pt-12"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div
            style={{
              clipPath:
                'polygon(50%,0%, 61%, 35%, 68%, 57%,79%,91%,50%,70%,21%,91%,32%,57%,2%,35%,39%,35%,0%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 
          w-[36.12rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-br from-blue-500
        via-purple-500 to-cyan-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]
          "
          ></div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-muted/80 backdrop-blur-xs border border-border mb-4">
          <Pizza className="w-6 h-6 text-purple-500" />
        </div>

        <div className="text-center mb-16">
          <h3 className="font-bold text-2xl max-w-2xl mx-auto px-4 sm:px-6">
            Watch how Tomoya transform your large to Small scale of PDF into an
            <span className="bg-linear-to-r from-purple-500 to-blue-700 bg-clip-text text-transparent">
              {' '}
              easy-to-read summary!
            </span>
          </h3>
        </div>

        <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
          {/* View the Summarize doc*/}
        </div>
      </div>
    </section>
  );
}

export default DemoSection;
