
import React from "react";
import { Coins, Zap, LeafyGreen } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const TokenSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          The value of the <span className="gradient-text">$EZBC</span> token
        </h2>
        
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          EZBC is not just a token. It's the symbol of a vision: rewarding players without ever putting them at risk. Real utility and a real community.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card h-full flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-eazybet-purple/20 p-3 rounded-lg mr-4">
                <Coins className="text-eazybet-purple h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Team NFTs</h3>
            </div>
            <p className="text-gray-300 flex-grow">
              Usable to purchase NFT cards representing football teams that provide in-game advantages.
            </p>
            <Card className="w-full mt-4 bg-transparent border-0 overflow-hidden">
              <CardContent className="p-0">
                <AspectRatio ratio={3/4} className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/4e1fbee7-6392-42ad-9395-41b51f9a0dda.png"
                    alt="Madrid NFT Card" 
                    className="object-cover h-full w-full"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
          
          <div className="feature-card h-full flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-eazybet-pink/20 p-3 rounded-lg mr-4">
                <Zap className="text-eazybet-pink h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">In-game Boosts</h3>
            </div>
            <p className="text-gray-300 flex-grow">
              Each NFT gives real in-game boosts like better odds, XP bonuses, and other exclusive advantages.
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
              <h3 className="text-xl font-bold">Solana Blockchain</h3>
            </div>
            <p className="text-gray-300 flex-grow">
              The token is built on the Solana blockchain, fast, eco-friendly, and specially designed for gaming.
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
