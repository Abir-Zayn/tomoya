import BgGradient from '@/components/common/bgGradient';
import DemoSection from '@/components/home/demo-section';
import HeroSection from '@/components/home/hero-section';
import HowItWorkSection from '@/components/home/how-it-works-section';
import PricingSection from '@/components/home/pricing-section';

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        {/* Hero Section */}
        <HeroSection />
        {/* Demo Section */}
        <DemoSection />
        <HowItWorkSection />
        {/* Pricing Section */}
        <PricingSection />
      </div>
    </div>
  );
}
