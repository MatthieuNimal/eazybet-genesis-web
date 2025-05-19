
import React from "react";
import { Coins, Zap, LeafyGreen } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

interface TokenSectionProps {
  tokenHeading: string;
  tokenSubheading: string;
  teamNFTs: string;
  teamNFTsDesc: string;
  inGameBoosts: string;
  inGameBoostsDesc: string;
  solanaBlockchain: string;
  solanaDesc: string;
}

const TokenSection = ({ 
  tokenHeading,
  tokenSubheading,
  teamNFTs,
  teamNFTsDesc,
  inGameBoosts,
  inGameBoostsDesc,
  solanaBlockchain,
  solanaDesc
}: TokenSectionProps) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center"
            dangerouslySetInnerHTML={{ __html: tokenHeading.replace('<span>', '<span class="gradient-text">').replace('</span>', '</span>') }}>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-300 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          {tokenSubheading}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="feature-card h-full flex flex-col">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="bg-eazybet-purple/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Coins className="text-eazybet-purple h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{teamNFTs}</h3>
            </div>
            <p className="text-gray-300 flex-grow text-sm sm:text-base">
              {teamNFTsDesc}
            </p>
            <Card className="w-full mt-3 sm:mt-4 bg-transparent border-0 overflow-hidden">
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
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="bg-eazybet-pink/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Zap className="text-eazybet-pink h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{inGameBoosts}</h3>
            </div>
            <p className="text-gray-300 flex-grow text-sm sm:text-base">
              {inGameBoostsDesc}
            </p>
            <div className="w-full h-28 sm:h-32 md:h-40 bg-gradient-card rounded-lg mt-3 sm:mt-4 flex items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text animate-pulse">
                +25% XP
              </div>
            </div>
          </div>
          
          <div className="feature-card h-full flex flex-col sm:col-span-2 md:col-span-1 sm:max-w-md md:max-w-none mx-auto w-full">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="bg-eazybet-purple/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <LeafyGreen className="text-eazybet-purple h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{solanaBlockchain}</h3>
            </div>
            <p className="text-gray-300 flex-grow text-sm sm:text-base">
              {solanaDesc}
            </p>
            <div className="w-full h-28 sm:h-32 md:h-40 bg-gradient-card rounded-lg mt-3 sm:mt-4 flex items-center justify-center">
              <div className="animate-float">
                <svg width="80" height="80" viewBox="0 0 128 128" className="sm:w-24 sm:h-24 md:w-28 md:h-28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
