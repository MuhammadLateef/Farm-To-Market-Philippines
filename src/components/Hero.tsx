// components/Hero.tsx
import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div> 
      <div className="relative text-center text-white/90 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 uppercase tracking-wider">{title}</h1>
        {subtitle && <p className="text-xl">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Hero;
