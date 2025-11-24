"use client";

import Image from "next/image";

// Placeholder images - replace with your actual imports
import iconJoin from "@/assets/home/icon-join.png";
import iconTrack from "@/assets/home/icon-track.png";
import iconRoi from "@/assets/home/icon-roi.png";

const steps = [
  {
    id: 1,
    icon: iconJoin,
    title: "Invest With Us",
    description:
      "Partner with us by investing in our farms. We will use your investment to finance rice, corn and banana plantations, livestock farms, or to purchase farm machines.",
  },
  {
    id: 2,
    icon: iconTrack,
    title: "Track Profit",
    description:
      "Receive monthly updates regarding your investment. We will regularly send you information and photos of the farm where we invested your money in.",
  },
  {
    id: 3,
    icon: iconRoi,
    title: "Return of Investment",
    description:
      "Earn 5% of your investment every quarter. If you invest P10,000, you will receive P500 interest every 3 months and your investment after the 12th month.",
  },
];

function HowItWorksSection() {
  return (
    <section className="w-full bg-white pb-0">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-[32px] font-semibold text-[#272727] mt-12 sm:mt-16 mb-8 sm:mb-12 lg:mb-26">
          How Does It Work?
        </h2>
      </div>

      {/* Green Background Section */}
      <div className="relative sm:bg-[#20A20B] md:bg-[#20A20B] pb-6 md:pb-4 lg:pb-6">
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8 bg-[#20A20B] ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
              >
                {/* Icon Circle */}
                <div className="relative bg-white rounded-full flex items-center justify-center shadow-lg -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 mb-4 sm:mb-6">
                  <div className="relative lg:w-[195px] lg:h-[195px] ">
                    <Image
                      width={300}
                      height={300}
                      src={step.icon}
                      alt={step.title}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FFFFFF] mb-2 sm:mb-3 tracking-wide text-center">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-white text-sm lg:text-base text-center mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;