import { Button } from "@/components/ui/button";

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
                    backgroundImage: "url('/assets/home/header.jpg')",
                }}
            >
                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="relative z-10 w-full max-w-2xl mx-auto px-4 md:px-8">
                <div className="bg-white/0 p-8 md:p-12 shadow-xl border-16 border-white/95">
                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center leading-tight text-balance">
                        {heading}
                    </h1>

                    {/* Paragraph */}
                    <p className="text-base md:text-lg text-gray-700 text-center mt-4 md:mt-6 leading-relaxed text-pretty">
                        {paragraph}
                    </p>

                    <div className="flex justify-center mt-8">
                        <a href={buttonLink}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full px-8 transition-all duration-300 transform hover:scale-105"
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
