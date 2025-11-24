import { Button } from "@/components/ui/button";
import bgHero from "@/assets/home/header.jpg";
interface HeroProps {
    heading?: string;
    paragraph?: string;
    buttonText?: string;
    buttonLink?: string;
}

export default function Hero({
    heading = "INVEST IN FARMING",
    paragraph = "Are you an investor looking to grow your money? Join us in helping farmers who are looking to start or expand their farm business.",
    buttonText = "Learn More >>",
    buttonLink = "#",
}: HeroProps) {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:  `url(${bgHero.src})`,
                }}
            >
                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="relative z-10 w-full max-w-2xl mx-auto px-6 md:px-8">
                <div className="bg-white/0 p-7 md:p-12 shadow-xl border-14 border-white/95 space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-[42px] my-2 lg:my-5 font-bold text-white text-center leading-tight">
                        {heading}
                    </h1>

                    <p className="text-base md:text-[20px] my-2 lg:my-4 text-white/90 text-center leading-relaxed font-semibold">
                        {paragraph}
                    </p>

                    <div className="flex justify-center my-4 lg:my-8">
                        <a href={buttonLink}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 md:px-12 md:py-6 py-4 transition-all duration-300 transform hover:scale-105 cursor-pointer text-lg lg:text-[20px] font-bold"
                            >
                                {buttonText}
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
