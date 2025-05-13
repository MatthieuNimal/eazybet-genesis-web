
import React from "react";
import { Gift, Ticket, Medal } from "lucide-react";

const BetaSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Une opportunité <span className="gradient-text">unique</span>
        </h2>
        
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Les meilleurs joueurs ayant le plus de diamants recevront :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card text-center py-12">
            <div className="bg-eazybet-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Gift className="text-eazybet-purple h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Airdrop gratuit</h3>
            <p className="text-gray-300">
              Un airdrop gratuit de tokens $EZBC directement dans ton wallet
            </p>
          </div>
          
          <div className="feature-card text-center py-12">
            <div className="bg-eazybet-pink/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Ticket className="text-eazybet-pink h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Accès prioritaire</h3>
            <p className="text-gray-300">
              Un accès prioritaire à la vente privée avec un prix préférentiel
            </p>
          </div>
          
          <div className="feature-card text-center py-12">
            <div className="bg-eazybet-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Medal className="text-eazybet-purple h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Récompenses uniques</h3>
            <p className="text-gray-300">
              Des NFTs exclusifs et des avantages spéciaux dans l'application
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-bold gradient-text mb-2">
            EZBC est une énorme opportunité Web3
          </p>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Un token lié à un vrai usage, dans un secteur grand public, avec une communauté early engagée
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaSection;
