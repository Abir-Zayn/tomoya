import { cn } from '@/lib/utils';
import { ArrowRight, ArrowRightIcon, CheckIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type PriceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 10,
    items: [
      'Unlimited PDF Summaries',
      'Priority Support',
      '24/7 priority support',
      'Markdown Export',
    ],
    paymentLink: '',
    priceId: '',
    description: 'Perfect for individuals needing quick summaries',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 20,
    items: [
      'Everything in Basic',
      'Advanced Summarization',
      'Customizable Summaries',
      'API Access',
    ],
    description: 'Ideal for professionals needing advanced features',
    paymentLink: '',
    priceId: '',
  },
];

const PricingCard = ({
  name,
  price,
  description,
  items,
  id,
  paymentLink,
}: PriceType) => {
  return (
    <div className="relative w-full max-w-lg">
      <div
        className={cn(
          'relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 rounded-xl border-[1px] border-gray-500/20 rounded-2xl',
          id === 'pro' && 'border-purple-500 gap-5 border-2'
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
            <p className="text-base-content/80 mt-2">{description}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <p className="text-5xl tracking-tight font-extrabold">$ {price}</p>
          <div className="flex flex-col justify-end mb-[4px]">
            <p className="text-xs uppercase font-semibold">USD</p>
            <p className="text-xs">/month</p>
          </div>
        </div>

        {/* Fixed the items list */}
        <ul className="space-y-2.5 leading-relaxed text-gray-700 flex-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckIcon size={18} className="text-green-500 shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-2 flex justify-center w-full">
          <Link
            href={paymentLink || '#'}
            className={cn(
              'w-full rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-800 to-rose-500 hover:from-rose-700 hover:to-rose-400 text-white py-3 px-6 font-semibold transition-all duration-300',
              id === 'pro'
                ? 'border-purple-100'
                : 'border-purple-500 from-blue-400 to-rose-500'
            )}
          >
            Subscribe Now <ArrowRightIcon size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

function PricingSection() {
  return (
    <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Choose Your{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Perfect Plan
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select the plan that best fits your needs and start summarizing
          documents today
        </p>
      </div>
      <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default PricingSection;
