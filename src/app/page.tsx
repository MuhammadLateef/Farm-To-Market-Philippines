import { Hero } from "@/components/Hero/index";
import { WhoAreWeSection } from '@/components/who-are-we/who-are-we-section'
import { HowItWorksSection } from '@/components/how-it-works/how-it-works-section'
import { BuyAndSellSection } from '@/components/Buy-and-Sell/by-and-sell-section'
export default function Home() {
  return (
    <main>
      <Hero />
      <WhoAreWeSection />
      <HowItWorksSection />
      <BuyAndSellSection />
      
    </main>
  );
}
