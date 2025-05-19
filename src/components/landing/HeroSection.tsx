
import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  heroHeading: string;
  heroSubheading: string;
  accessApp: string;
}

const HeroSection = ({ heroHeading, heroSubheading, accessApp }: HeroSectionProps) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 flex flex-col items-center px-4">
      <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 md:mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 md:mb-10 leading-tight animate-fade-in">
          <span className="gradient-text tracking-wide font-poppins">{heroHeading}</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto" 
           dangerouslySetInnerHTML={{ __html: heroSubheading.replace('<span>', '<span class="gradient-text font-semibold">').replace('</span>', '</span>') }}>
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-6 sm:mb-8 md:mb-10 animate-fade-in">
        <a 
          href="https://www.eazybetcoinapp.com" 
          className="glow-button flex items-center gap-2 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-bold text-base sm:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {accessApp} <ArrowRight size={16} className="sm:w-5 sm:h-5" />
        </a>
      </div>
      
      <div className="max-w-5xl w-full mx-auto text-center">
        <div className="w-full rounded-2xl overflow-hidden mb-8 sm:mb-10 md:mb-12 border border-eazybet-purple/30 shadow-xl animate-pulse-glow">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/JF4ixqc5apA?si=WZyQFri4veuNNzSR"
            title="EazyBet presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
