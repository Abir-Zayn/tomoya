import { BrainCircuit, FileOutput, FileText, MoveRight } from 'lucide-react';
import React, { ReactNode } from 'react';

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
  step: number;
};

const steps: Step[] = [
  {
    step: 1,
    icon: <FileText size={48} strokeWidth={1.5} />,
    label: 'Upload PDF',
    description:
      'Select and upload your PDF file from any device with a simple drag & drop.',
  },
  {
    step: 2,
    icon: <BrainCircuit size={48} strokeWidth={1.5} />,
    label: 'AI Analysis',
    description:
      'Our advanced AI processes your document and extracts key insights instantly.',
  },
  {
    step: 3,
    icon: <FileOutput size={48} strokeWidth={1.5} />,
    label: 'Get Summary',
    description:
      'Receive a beautifully formatted, concise summary ready to read',
  },
];

function HowItWorkSection() {
  return (
    <section className="relative overflow-hidden  py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Transform any PDF into an{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-indigo-600">
              easy-to-digest summary
            </span>{' '}
            in three simple steps
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform makes document summarization effortless and
            lightning-fast
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <StepItem {...step} />

              {/* Arrow connector for desktop - fixed positioning */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-8 xl:-right-10 transform -translate-y-1/2 z-10 items-center justify-center">
                  <div className="relative">
                    <MoveRight
                      size={32}
                      strokeWidth={2}
                      className="text-primary/50 hover:text-primary/80 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ icon, label, description, step }: Step) {
  return (
    <div className="relative group">
      {/* Card - removed shadows */}
      <div className="relative p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500 h-full">
        {/* Icon container */}
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 group-hover:from-primary/20 group-hover:via-accent/20 group-hover:to-secondary/20 transition-all duration-500">
          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {label}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default HowItWorkSection;
