'use client'

import { FeatureCard } from './feature-card'
import image1 from '@/assets/home/field.jpg'
import image2 from '@/assets/home/rice.jpg'
export function WhoAreWeSection() {
    return (
        <section className="w-full py-16 mx-auto flex justify-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center h-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col justify-start space-y-6">
                        <h1 className="text-2xl md:text-3xl font-semibold text-[#272727] mt-[15px] mb-6">
                            Who Are We?
                        </h1>

                        <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground text-justify">
                            <p>
                                Farm To Market Philippines is an agri-tech platform where members can invest in farming to increase local food production and receive profits from their investments. Members can also sell their farm-related products through this platform.
                            </p>

                            <p>
                                Our country has vast farmlands that remain untapped because their owners lack sufficient funds to start farming. This has lead to food shortages and it forces our government to import farm products from foreign markets.
                            </p>

                            <p>
                                Our mission is to help our farmers by granting them loans to enable them to produce more food for our nation. The result will be very beneficial to everyone as food prices will be lower due to adequate supplies.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Feature Cards */}

                    <FeatureCard
                        title="INCREASE FOOD PRODUCTION"
                        imageSrc={image1.src}
                        imageAlt="Rice grains in burlap sack"
                    />

                    <FeatureCard
                        title="LEND MONEY TO FARMERS"
                        imageSrc={image2.src}
                        imageAlt="Rice paddy field"
                    />
                </div>
            </div>
        </section>
    )
}
