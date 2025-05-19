
import React from "react";
import { Gift, Ticket, Medal } from "lucide-react";

interface BetaSectionProps {
  uniqueOpportunity: string;
  bestPlayersWillReceive: string;
  freeAirdrop: string;
  freeAirdropDesc: string;
  priorityAccess: string;
  priorityAccessDesc: string;
  uniqueRewards: string;
  uniqueRewardsDesc: string;
  hugeOpportunity: string;
  opportunityDesc: string;
}

const BetaSection = ({ 
  uniqueOpportunity,
  bestPlayersWillReceive,
  freeAirdrop,
  freeAirdropDesc,
  priorityAccess,
  priorityAccessDesc,
  uniqueRewards,
  uniqueRewardsDesc,
  hugeOpportunity,
  opportunityDesc
}: BetaSectionProps) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-eazybet-purple/10 to-eazybet-pink/10 opacity-50 blur-3xl"></div>
      <div className="max-w-5xl mx-auto relative z-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center"
            dangerouslySetInnerHTML={{ __html: uniqueOpportunity.replace('<span>', '<span class="gradient-text">').replace('</span>', '</span>') }}>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-center text-white mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto font-medium">
          {bestPlayersWillReceive}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glassmorphism text-center py-8 sm:py-10 md:py-12 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(155,135,245,0.3)]">
            <div className="bg-gradient-to-br from-eazybet-purple to-eazybet-purple/60 p-3 sm:p-4 rounded-full w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
              <Gift className="text-white h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">{freeAirdrop}</h3>
            <p className="text-white text-base sm:text-lg font-medium px-3 sm:px-5">
              {freeAirdropDesc}
            </p>
          </div>
          
          <div className="glassmorphism text-center py-8 sm:py-10 md:py-12 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(217,70,239,0.3)]">
            <div className="bg-gradient-to-br from-eazybet-pink to-eazybet-pink/60 p-3 sm:p-4 rounded-full w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
              <Ticket className="text-white h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">{priorityAccess}</h3>
            <p className="text-white text-base sm:text-lg font-medium px-3 sm:px-5">
              {priorityAccessDesc}
            </p>
          </div>
          
          <div className="glassmorphism text-center py-8 sm:py-10 md:py-12 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(155,135,245,0.3)] sm:col-span-2 md:col-span-1 sm:max-w-md md:max-w-none mx-auto w-full">
            <div className="bg-gradient-to-br from-eazybet-blue to-eazybet-blue/60 p-3 sm:p-4 rounded-full w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
              <Medal className="text-white h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">{uniqueRewards}</h3>
            <p className="text-white text-base sm:text-lg font-medium px-3 sm:px-5">
              {uniqueRewardsDesc}
            </p>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 md:mt-16 text-center p-4 sm:p-6 md:p-8 glassmorphism rounded-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-3 sm:mb-4">
            {hugeOpportunity}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white font-medium max-w-3xl mx-auto">
            {opportunityDesc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaSection;
