import { ContactForm } from "@/components/contact/contact-form"
import bgHero from "@/assets/home/header.jpg";
import Hero from '@/components/Hero';
import Image from "next/image";
import Logo1 from '../../assets/logo-med.png'
export default function Home() {
  return (
    <main className="bg-background">
      <Hero
        title="Contact Us"
        subtitle=""
        backgroundImage={bgHero.src} // Path to your image
      />
      <div className="grid grid-cols-1 md:grid-cols-2 my-2 max-w-7xl mx-auto px-4 md:px-8 gap-8">
        <div className="mb-5 flex flex-col items-center justify-center text-center">
          <Image width={200} height={200} src={Logo1.src} alt="logo-med" />
          {/* Main Heading */}
          <h1 className="text-2xl  font-semibold my-2 text-[#5F9040] ">
            Farm To Market Philippines
          </h1>
          <p className="  text-sm text-gray-500"> San Isidro, Zaragoza, Nueva Ecija, Philippines</p>
          <div className="my-4 text-gray-400">
            <h2 className="font-bold">Kylle Reyes</h2>
            <p className="text-sm">Managing Director</p>
            <p className="text-sm">Email: kylle@farmersph.com</p>
            <p className="text-sm">Phone: 09651986520</p>
          </div>
        </div>
        <div className="my-3 px-4 flex justify-center">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
