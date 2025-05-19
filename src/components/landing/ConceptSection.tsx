
import React from "react";
import { Ban, Coins, Trophy } from "lucide-react";

interface ConceptSectionProps {
  conceptHeading: string;
  zeroMoneyStakes: string;
  zeroMoneyDesc: string;
  zeroRisk: string;
  zeroRiskDesc: string;
  realRewards: string;
  realRewardsDesc: string;
}

const ConceptSection = ({ 
  conceptHeading, 
  zeroMoneyStakes,
  zeroMoneyDesc,
  zeroRisk,
  zeroRiskDesc,
  realRewards,
  realRewardsDesc
}: ConceptSectionProps) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center"
            dangerouslySetInnerHTML={{ __html: conceptHeading.replace('<span>', '<span class="gradient-text">').replace('</span>', '</span>') }}>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="feature-card">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="bg-eazybet-purple/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Ban className="text-eazybet-purple h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{zeroMoneyStakes}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              {zeroMoneyDesc}
            </p>
          </div>
          
          <div className="feature-card">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="bg-eazybet-pink/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Ban className="text-eazybet-pink h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{zeroRisk}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              {zeroRiskDesc}
            </p>
          </div>
          
          <div className="feature-card">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="bg-eazybet-pink/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                <Trophy className="text-eazybet-pink h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{realRewards}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              {realRewardsDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
