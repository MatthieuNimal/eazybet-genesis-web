
import React from "react";
import { Coins, Zap, LeafyGreen } from "lucide-react";

const TokenSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          La valeur du token <span className="gradient-text">$EZBC</span>
        </h2>
        
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          EZBC n'est pas qu'un token. C'est le symbole d'une vision : récompenser les joueurs sans jamais les mettre en danger. Une vraie utilité et une vraie communauté.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card h-full flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-eazybet-purple/20 p-3 rounded-lg mr-4">
                <Coins className="text-eazybet-purple h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">NFTs de teams</h3>
            </div>
            <p className="text-gray-300 flex-grow">
              Utilisable pour acheter des NFTs de cartes représentant des équipes de foot qui donnent des avantages dans le jeu.
            </p>
            <div className="w-full h-40 bg-gradient-card rounded-lg mt-4 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-70">
                <img 
                  src="https://placehold.co/600x400?text=NFT+Card" 
                  alt="NFT Card" 
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="feature-card h-full flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-eazybet-pink/20 p-3 rounded-lg mr-4">
                <Zap className="text-eazybet-pink h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Boosts in-game</h3>
            </div>
            <p className="text-gray-300 flex-grow">
              Chaque NFT donne des boosts réels dans le jeu comme de meilleures cotes, des bonus XP et autres avantages exclusifs.
            </p>
            <div className="w-full h-40 bg-gradient-card rounded-lg mt-4 flex items-center justify-center">
              <div className="text-5xl font-bold gradient-text animate-pulse">
                +25% XP
              </div>
            </div>
          </div>
          
          <div className="feature-card h-full flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-eazybet-purple/20 p-3 rounded-lg mr-4">
                <LeafyGreen className="text-eazybet-purple h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Blockchain Solana</h3>
            </div>
            <p className="text-gray-300 flex-grow">
              Le token est construit sur la blockchain Solana, rapide, éco-responsable, et spécialement conçue pour le gaming.
            </p>
            <div className="w-full h-40 bg-gradient-card rounded-lg mt-4 flex items-center justify-center">
              <div className="animate-float">
                <svg width="100" height="100" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M93.94 42.63H13.78c-1.75 0-2.63-2.01-1.4-3.37L23.72 28.05c0.78-0.84 1.9-1.31 3.07-1.31h80.15c1.75 0 2.63 2.01 1.4 3.37L97.01 41.32C96.22 42.16 95.1 42.63 93.94 42.63Z" fill="#9945FF"/>
                  <path d="M93.94 100.36H13.78c-1.75 0-2.63-2.01-1.4-3.37l11.35-11.21c0.78-0.84 1.9-1.31 3.07-1.31h80.15c1.75 0 2.63 2.01 1.4 3.37l-11.35 11.21C96.22 99.88 95.1 100.36 93.94 100.36Z" fill="#9945FF"/>
                  <path d="M93.94 71.5H13.78c-1.75 0-2.63-2.01-1.4-3.37l11.35-11.21c0.78-0.84 1.9-1.31 3.07-1.31h80.15c1.75 0 2.63 2.01 1.4 3.37L97.01 70.18C96.22 71.02 95.1 71.5 93.94 71.5Z" fill="#9945FF"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
