// pages/sell.tsx
import Hero from '@/components/Hero';
import bgHero from "@/assets/home/header.jpg";
import Link from 'next/link';
const SellPage = () => {
    return (
        <div>
            <Hero
                title="SELL"
                subtitle=""
                backgroundImage={bgHero.src} // Path to your image
            />
            <div className="w-full max-w-4xl mx-auto p-6 space-y-6 text-center    ">
                <div className="flex flex-col items-center space-y-8 mt-6">
                    <h2 className='text-3xl font-semibold'>Join for Free to Start Selling</h2>
                    <p className='text-base text-gray-600 mt-7'>If you are a farmer or a supplier of farm products, you can register to join for free by clicking the button below.</p>
                    <a href="#">
                        <button
                            className="
      md:text-3xl sm:text-2xl text-xl uppercase font-semibold text-white sm:px-14 px-18 py-4 rounded-full cursor-pointer my-6
      bg-gradient-to-b from-[#429929] to-[#519437]
      transition-all duration-300 ease-out
      hover:from-green-600 hover:to-green-800
      active:scale-95
    " >
                            Register for Free
                        </button>
                    </a>
                    <Link href="/my-account" className='my-2 hover:text-green-500 text-green-600'>Already a member? Click here to log in to your shop dashboard.</Link>
                </div>
            </div>
        </div>
    );
};

export default SellPage; 
