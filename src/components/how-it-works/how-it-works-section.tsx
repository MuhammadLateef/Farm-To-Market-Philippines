"use client";

import Image from "next/image";
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

export function HowItWorksSection() {
  return (
    <section className="w-full bg-white pb-20 ">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold  mt-10 md:mb-40 mb-20">
          How Does It Work?
        </h2>
      </div>

      {/* Green Background Section */}
      <div className="relative md:bg-[#20A20B] md:pb-0 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col bg-[#20A20B] sm:mt-0 mt-4 items-center p-6">
                {/* Icon Circle */}
                <div className="relative bg-white rounded-full w-28 h-28 md:w-50 md:h-50 flex items-center justify-center shadow-lg -mt-18 md:-mt-22 mb-6">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
                {/* Step Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 tracking-wide">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-white text-sm md:text-base opacity-90 leading-relaxed max-w-xs md:max-w-sm ">
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
