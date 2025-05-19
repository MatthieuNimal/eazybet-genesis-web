
import React from "react";

interface VisionSectionProps {
  visionHeading: string;
  visionText1: string;
  visionText2: string;
  visionText3: string;
}

const VisionSection = ({ 
  visionHeading,
  visionText1,
  visionText2,
  visionText3
}: VisionSectionProps) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -left-24 top-10 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-eazybet-purple blur-3xl"></div>
        <div className="absolute right-10 bottom-10 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-eazybet-pink blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10"
            dangerouslySetInnerHTML={{ __html: visionHeading.replace('<span>', '<span class="gradient-text">').replace('</span>', '</span>') }}>
        </h2>
        
        <div className="bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-md p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_10px_50px_rgba(155,135,245,0.2)]">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-6 md:mb-8 text-white font-medium">
            {visionText1}
          </p>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-6 md:mb-8 text-white font-medium">
            {visionText2}
          </p>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed gradient-text font-bold">
            {visionText3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
