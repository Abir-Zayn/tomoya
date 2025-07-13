import { cn } from '@/lib/utils';
import { ArrowRight, CheckIcon, Star, Zap } from 'lucide-react';
import Link from 'next/link';

// Define pricing plan structure with essential properties
type PriceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
};

// Static pricing plans data with features list
const plans: PriceType[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 10,
    description: 'Perfect for individuals needing quick summaries',
    items: [
      'Unlimited PDF Summaries',
      'Priority Support',
      '24/7 priority support',
      'Markdown Export',
    ],
    paymentLink: '#',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 20,
    description: 'Ideal for professionals needing advanced features',
    items: [
      'Everything in Basic',
      'Advanced Summarization',
      'Customizable Summaries',
      'API Access',
    ],
    paymentLink: '#',
  },
];

// Individual pricing card component with conditional styling
const PricingCard = ({
  name,
  price,
  description,
  items,
  id,
  paymentLink,
}: PriceType) => {
  // Check if current card is pro plan
  const isPro = id === 'pro';

  return (
    <div className="relative w-full max-w-lg">
      {/* Popular badge for Pro plan */}
      {isPro && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-purple-600 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
            <Star className="h-4 w-4 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      {/* Main card container with conditional pro styling */}
      <div
        className={cn(
          'relative flex flex-col h-full gap-6 p-8 rounded-2xl border border-border',
          isPro && 'border-purple-500 border-2'
        )}
      >
        {/* Header section with plan name and description */}
        <div>
          <h3 className="text-xl font-bold capitalize mb-2">{name}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {/* Price display with currency and billing period */}
        <div className="flex items-end gap-2">
          <span className="text-5xl font-extrabold tracking-tight">
            ${price}
          </span>
          <div className="flex flex-col mb-1">
            <span className="text-xs font-semibold uppercase">USD</span>
            <span className="text-xs text-muted-foreground">/month</span>
          </div>
        </div>

        {/* Features list with checkmarks and descriptions */}
        <ul className="space-y-3 flex-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckIcon size={18} className="text-green-500 flex-shrink-0" />
              <span className="text-sm text-foreground">{item}</span>
            </li>
          ))}
        </ul>

        {/* Subscribe button with different styles per plan */}
        <Link
          href={paymentLink}
          className={cn(
            'w-full rounded-full flex items-center justify-center gap-2 py-3 px-6 font-semibold transition-colors duration-300',
            isPro
              ? 'bg-gradient-to-r from-purple-800 to-rose-500 hover:from-rose-700 hover:to-rose-400 text-white'
              : 'border-2 border-indigo-600 text-indigo-600'
          )}
        >
          <span>Subscribe Now</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

// Main pricing section with header and cards grid
function PricingSection() {
  return (
    <section className="relative py-16 lg:py-32 overflow-hidden">
      {/* Enhanced background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-background to-purple-50/30 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-rose-100 rounded-full text-indigo-600 font-medium text-sm">
            <Zap className="h-4 w-4" />
            <span>Simple Pricing</span>
          </div>

          {/* Main heading with enhanced styling */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-indigo-600">
              Perfect Plan
            </span>
          </h2>

          {/* Enhanced description */}
          <div className="space-y-3">
            <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Select the plan that best fits your needs and start summarizing
              documents today
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              No hidden fees • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>

        {/* Enhanced cards container */}
        <div className="relative">
          {/* Responsive grid layout for pricing cards */}
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-6">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={cn(
                  'transform transition-all duration-300',
                  plan.id === 'pro' && 'lg:scale-105 lg:-translate-y-4'
                )}
              >
                <PricingCard {...plan} />
              </div>
            ))}
          </div>

          {/* Bottom trust indicators */}
          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Trusted by 10,000+ users</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-border rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>99.9% uptime guaranteed</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-border rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>SOC 2 Type II certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
