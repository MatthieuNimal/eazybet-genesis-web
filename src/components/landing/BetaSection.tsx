
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
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-eazybet-purple/10 to-eazybet-pink/10 opacity-50 blur-3xl"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center"
            dangerouslySetInnerHTML={{ __html: uniqueOpportunity.replace('<span>', '<span class="gradient-text">').replace('</span>', '</span>') }}>
        </h2>
        
        <p className="text-xl text-center text-white mb-16 max-w-3xl mx-auto font-medium">
          {bestPlayersWillReceive}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glassmorphism text-center py-12 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(155,135,245,0.3)]">
            <div className="bg-gradient-to-br from-eazybet-purple to-eazybet-purple/60 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Gift className="text-white h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">{freeAirdrop}</h3>
            <p className="text-white text-lg font-medium px-5">
              {freeAirdropDesc}
            </p>
          </div>
          
          <div className="glassmorphism text-center py-12 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(217,70,239,0.3)]">
            <div className="bg-gradient-to-br from-eazybet-pink to-eazybet-pink/60 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Ticket className="text-white h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">{priorityAccess}</h3>
            <p className="text-white text-lg font-medium px-5">
              {priorityAccessDesc}
            </p>
          </div>
          
          <div className="glassmorphism text-center py-12 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(155,135,245,0.3)]">
            <div className="bg-gradient-to-br from-eazybet-blue to-eazybet-blue/60 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Medal className="text-white h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">{uniqueRewards}</h3>
            <p className="text-white text-lg font-medium px-5">
              {uniqueRewardsDesc}
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center p-8 glassmorphism rounded-2xl">
          <p className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            {hugeOpportunity}
          </p>
          <p className="text-lg md:text-xl text-white font-medium max-w-3xl mx-auto">
            {opportunityDesc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaSection;
