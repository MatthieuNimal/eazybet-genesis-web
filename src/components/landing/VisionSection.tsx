
import React from "react";

const VisionSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -left-24 top-10 w-64 h-64 rounded-full bg-eazybet-purple blur-3xl"></div>
        <div className="absolute right-10 bottom-10 w-80 h-80 rounded-full bg-eazybet-pink blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Notre <span className="gradient-text">Vision</span>
        </h2>
        
        <div className="bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-800">
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            Notre but est clair : défier l'industrie des paris sportifs, un système construit sur les pertes financières des joueurs.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            EazyBet prouve qu'on peut garder le fun et la compétition sans ruiner personne.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed gradient-text font-semibold">
            Le Web3 nous permet de récompenser les joueurs de manière saine, méritée et transparente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
