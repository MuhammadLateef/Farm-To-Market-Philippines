import Navbar from "@/components/Navbar/navbar";
import { Hero } from "@/components/Hero/index";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
        <p className="text-gray-600 mt-2">Helping our local farmers grow and succeed</p>
      </div>
    </main>
  );
}
