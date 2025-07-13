import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden  py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-60"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000 opacity-60"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Enhanced header section */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              <Zap className="h-4 w-4" />
              <span>Ready to get started?</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Save Hours of{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Reading Time
              </span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who trust Tomoya to transform
              their document workflow.{' '}
              <span className="text-primary font-semibold">
                Start summarizing today!
              </span>
            </p>
          </div>

          {/* Fixed CTA button - resolved text visibility issue */}
          <div className="pt-6">
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground rounded-full px-16 py-8 text-xl font-medium transition-all duration-500 hover:scale-105 group min-w-[300px] shadow-2xl hover:shadow-primary/25"
            >
              <Link
                href="/#pricing"
                className="flex items-center justify-center gap-4 relative z-30"
              >
                <Sparkles className="h-6 w-6 animate-pulse relative z-40" />
                <span className="transition-transform duration-300 group-hover:translate-x-1 relative z-40">
                  Get Started Free
                </span>
                <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2 relative z-40" />

                {/* Enhanced gradient overlay - reduced opacity and z-index */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-80 transition-all duration-700 rounded-full z-10"></div>

                {/* Shimmer effect - reduced z-index */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 z-20"></div>
              </Link>
            </Button>
          </div>

          {/* Enhanced trust indicators */}
          <div className="pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>No setup required</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-400"></div>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
