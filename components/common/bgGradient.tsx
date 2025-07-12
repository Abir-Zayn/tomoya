import React from 'react';

function BgGradient({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative isolate ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40
      -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30
      "
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
          />
        </div>
      </div>
    </div>
  );
}

export default BgGradient;
