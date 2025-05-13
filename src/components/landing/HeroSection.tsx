
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
          Les paris sportifs. <span className="gradient-text">Réinventés.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Tu paries avec des jetons gratuits. Tu gagnes des diamants.
          <br />
          Si tu fais partie des meilleurs, tu reçois de la crypto réelle : <span className="gradient-text font-semibold">$EZBC</span>.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <a 
          href="https://www.eazybetcoinapp.com" 
          className="glow-button flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Accéder à l'app <ArrowRight size={18} />
        </a>
      </div>
      
      <div className="max-w-5xl w-full mx-auto text-center">
        {/* Video container - increased from max-w-4xl to max-w-5xl and added w-full */}
        <div className="w-full rounded-2xl overflow-hidden mb-12 border border-eazybet-purple/30 shadow-xl animate-pulse-glow">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/pSk730ronAM"
            title="EazyBet présentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
