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
      {/* Full screen background gradient - slightly increased opacity */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none"
      >
        {/* Main gradient overlay - increased opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-background to-secondary/6"></div>

        {/* Gradient shapes - increased opacity, no animations */}
        <div
          style={{
            clipPath:
              'polygon(50%,0%, 61%, 35%, 68%, 57%,79%,91%,50%,70%,21%,91%,32%,57%,2%,35%,39%,35%,0%)',
          }}
          className="absolute top-0 left-[calc(50%-20rem)] aspect-[1155/678] 
          w-[72rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-blue-500
          via-purple-500 to-cyan-500 opacity-5"
        />

        {/* Additional floating gradient orbs - increased opacity, no animations */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-gradient-to-br from-primary/4 to-secondary/4 rounded-full blur-3xl"></div>

        {/* Secondary gradient shape - increased opacity, no animations */}
        <div
          style={{
            clipPath:
              'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          }}
          className="absolute bottom-0 right-[calc(50%-15rem)] aspect-[1155/678] 
          w-[60rem] translate-x-1/2 rotate-[60deg] bg-gradient-to-tl from-pink-500
          via-blue-500 to-purple-500 opacity-4"
        />
      </div>
      {children}
    </div>
  );
}

export default BgGradient;
