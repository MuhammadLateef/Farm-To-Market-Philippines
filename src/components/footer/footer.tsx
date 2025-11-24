import Link from 'next/link'
import { Navigation } from './navigation'
import Image from 'next/image'
import Logo1 from '../../assets/logo-med.png'
import bgFooter from "../../assets/home/footer-bg.jpg"
export default function Home() {
    return (
        <div className="flex flex-col h-auto bg-cover bg-center bg-no-repeat " style={{
            backgroundImage: `url(${bgFooter.src})`,
        }}>
            {/* Header Section with Logo and Hero Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 md:my-6 md:py-18 py-6 my-6 text-center">

                {/* Logo */}
                <div className="mb-5">
                    <Image width={200} height={200} src={Logo1} className='lg:w-[188px] lg:h-[188px] sm:w-[140px] sm:h-[140px] w-[100px] h-[100px]' alt="logo-med" />
                </div>

                {/* Main Heading */}
                <h1 className="text-xl sm:text-2xl md:text-[32px] font-semibold mb-5">
                    OUR COMMITMENT TO THE NATION
                </h1>

                {/* Description */}
                <p className="max-w-6xl font-normal text-center text-slate-600 leading-relaxed text-sm sm:text-[15px]">
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

