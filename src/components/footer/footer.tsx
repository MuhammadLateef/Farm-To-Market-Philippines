import Link from 'next/link'
import { Navigation } from './navigation'
import Image from 'next/image'
import Logo1 from '../../../public/assets/logo-med.png'
export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-[url('/assets/home/footer-bg.jpg')] md:bg-contain bg-cover bg-center bg-no-repeat ">
            {/* Header Section with Logo and Hero Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 md:my-24 md:py-24 py-16 my-16 text-center">

                {/* Logo */}
                <div className="mb-5">
                    <Image width={200} height={200} src={Logo1} alt="logo-med" />
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl font-medium mb-5">
                    OUR COMMITMENT TO THE NATION
                </h1>

                {/* Description */}
                <p className="max-w-6xl font-light text-center text-slate-600 leading-relaxed md:text-lg text-base">
                    Our goal is to support our local farmers so they can produce more food for our nation,
                    and then help them sell their products directly to the local market, making food more
                    affordable and accessible to everyone. We also believe that making the lives of our local
                    farmers better will encourage more people to engage in the farming business, and raise
                    awareness about the importance of agriculture.
                </p>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-white border-t border-slate-200 overflow-scroll">
                <Navigation />
            </nav>
        </div>

    )
}

