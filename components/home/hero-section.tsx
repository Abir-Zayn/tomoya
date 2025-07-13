import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 transition-all animate-in lg:px-12 max-w-6xl">
      {/* Background gradient */}

      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-10 px-4">
        {/* Badge with sparkles - enhanced with animation */}
        <div className="relative animate-fade-in-up">
          <Badge
            variant={'outline'}
            className="bg-background/80 backdrop-blur-md border-2 border-primary/30 text-foreground px-8 py-4 text-sm font-medium rounded-full hover:border-primary/60 hover:bg-primary/5 transition-all duration-500 shadow-lg hover:shadow-xl group"
          >
            <Sparkles className="h-4 w-4 mr-3 animate-spin-slow text-primary group-hover:animate-pulse" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
              Powered by AI
            </span>
          </Badge>
        </div>

        {/* Heading Text - enhanced with better responsive layout */}
        <div className="animate-fade-in-up delay-200">
          <h1 className="font-bold text-center max-w-5xl leading-tight">
            <span className="block lg:inline">Transform PDF's into</span>{' '}
            <span className="relative inline-block">
              <span className="relative z-10 px-3 py-1">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  concise
                </span>
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 -rotate-2 rounded-xl transform -skew-y-1 animate-pulse"
                aria-hidden="true"
              ></span>
            </span>{' '}
            <span className="block lg:inline">summaries.</span>
          </h1>
        </div>

        {/* Sub heading - changed to text-gray-600 */}
        <div className="animate-fade-in-up delay-400">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 max-w-4xl text-muted-foreground leading-relaxed">
            Get a beautiful summary reel of your document in{' '}
            <span className="text-primary font-semibold">seconds</span> with
            AI-powered intelligence
          </h2>
        </div>

        {/* Hero Section Button - fixed text visibility and font weight */}
        <div className="animate-fade-in-up delay-600 mt-12">
          <Button
            asChild
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground rounded-full px-16 py-8 text-lg font-normal shadow-2xl transition-all duration-700 hover:shadow-primary/25 hover:scale-110 group border-0 min-w-[250px]"
          >
            <Link
              href="/#pricing"
              className="flex items-center justify-center gap-4 relative z-20"
            >
              <span className="relative z-30 transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110 font-normal">
                Try Tomoya Free
              </span>
              <div className="relative z-30">
                <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-3 group-hover:scale-125" />
                <div className="absolute inset-0  group-hover:scale-150 transition-transform duration-700 z-10"></div>
              </div>
              {/* Enhanced gradient overlay - reduced z-index */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-90 transition-all duration-700 rounded-full z-10"></div>
              {/* Shimmer effect - reduced z-index */}
              <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-full z-10"></div>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
