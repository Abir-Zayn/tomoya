import { Badge, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';

export default function HeroSection() {
  return (
    <section>
      <div className="">
        <div className="flex">
          <Badge>
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <p>Powered by AI</p>
          </Badge>
        </div>
        <h1>Transform PDF's into concise summaries.</h1>
        <h2>Get a beautiful </h2>
        <Button> Try Tomoya </Button>
      </div>
    </section>
  );
}
