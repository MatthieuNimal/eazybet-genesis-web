
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
    <section className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -left-24 top-10 w-64 h-64 rounded-full bg-eazybet-purple blur-3xl"></div>
        <div className="absolute right-10 bottom-10 w-80 h-80 rounded-full bg-eazybet-pink blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-10"
            dangerouslySetInnerHTML={{ __html: visionHeading.replace('<span>', '<span class="gradient-text">').replace('</span>', '</span>') }}>
        </h2>
        
        <div className="bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_10px_50px_rgba(155,135,245,0.2)]">
          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white font-medium">
            {visionText1}
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white font-medium">
            {visionText2}
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed gradient-text font-bold">
            {visionText3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
