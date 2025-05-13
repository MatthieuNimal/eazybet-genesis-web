
import React from "react";
import { Ban, Coins, HeartPulse, Trophy } from "lucide-react";

const ConceptSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">EazyBet</span> est l'opposé radical des apps de paris sportifs classiques
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feature-card">
            <div className="flex items-center mb-4">
              <div className="bg-eazybet-purple/20 p-3 rounded-lg mr-4">
                <Ban className="text-eazybet-purple h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Zéro mise d'argent</h3>
            </div>
            <p className="text-gray-300">
              Contrairement aux paris classiques, tu n'as jamais besoin de déposer ou risquer ton argent réel.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="flex items-center mb-4">
              <div className="bg-eazybet-pink/20 p-3 rounded-lg mr-4">
                <Ban className="text-eazybet-pink h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Zéro risque financier</h3>
            </div>
            <p className="text-gray-300">
              Plus de stress lié aux pertes d'argent. Concentre-toi sur la stratégie et le plaisir du jeu.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="flex items-center mb-4">
              <div className="bg-eazybet-purple/20 p-3 rounded-lg mr-4">
                <HeartPulse className="text-eazybet-purple h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Zéro addiction</h3>
            </div>
            <p className="text-gray-300">
              Une expérience saine et responsable. Fini les pièges psychologiques des paris traditionnels.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="flex items-center mb-4">
              <div className="bg-eazybet-pink/20 p-3 rounded-lg mr-4">
                <Trophy className="text-eazybet-pink h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Des vraies récompenses</h3>
            </div>
            <p className="text-gray-300">
              Juste un jeu stratégique, fun et gratuit, qui récompense les meilleurs avec de véritables avantages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
