import { InvestmentForm } from "@/components/invest/investment-form"
import bgHero from "@/assets/home/header.jpg";
import Hero from '@/components/Hero';
import   HowItWorksSection   from "@/components/how-it-works/how-it-works-section";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero
        title="INVEST"
        subtitle=""
        backgroundImage={bgHero.src} // Path to your image
      />
      <div className="">
        <HowItWorksSection />
      </div>
      <div className="my-3 max-w-7xl mx-auto px-4 flex justify-center">
        <InvestmentForm />
      </div>
    </main>
  )
}
