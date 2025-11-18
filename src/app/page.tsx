import Navbar from "@/components/Navbar/navbar";
import { Hero } from "@/components/Hero/index";
import { WhoAreWeSection } from '@/components/who-are-we/who-are-we-section'
import { HowItWorksSection } from '@/components/how-it-works/how-it-works-section'
import { BuyAndSellSection } from '@/components/Buy-and-Sell/by-and-sell-section'
import  Footer  from '@/components/footer/footer'
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoAreWeSection />
      <HowItWorksSection />
      <BuyAndSellSection />
      <Footer />
      
    </main>
  );
}
