
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
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center"
            dangerouslySetInnerHTML={{ __html: uniqueOpportunity.replace('<span>', '<span class="gradient-text">').replace('</span>', '</span>') }}>
        </h2>
        
        <p className="text-xl text-center text-white mb-16 max-w-3xl mx-auto font-medium">
          {bestPlayersWillReceive}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card text-center py-12 hover:shadow-[0_0_30px_rgba(155,135,245,0.5)] transform transition-all duration-300 hover:-translate-y-2">
            <div className="bg-eazybet-purple/30 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(155,135,245,0.3)]">
              <Gift className="text-eazybet-purple h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">{freeAirdrop}</h3>
            <p className="text-white text-lg font-medium bg-black/70 px-5 py-4 rounded-xl backdrop-blur-sm border border-eazybet-purple/30 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
              {freeAirdropDesc}
            </p>
          </div>
          
          <div className="feature-card text-center py-12 hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] transform transition-all duration-300 hover:-translate-y-2">
            <div className="bg-eazybet-pink/30 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.3)]">
              <Ticket className="text-eazybet-pink h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">{priorityAccess}</h3>
            <p className="text-white text-lg font-medium bg-black/70 px-5 py-4 rounded-xl backdrop-blur-sm border border-eazybet-pink/30 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
              {priorityAccessDesc}
            </p>
          </div>
          
          <div className="feature-card text-center py-12 hover:shadow-[0_0_30px_rgba(155,135,245,0.5)] transform transition-all duration-300 hover:-translate-y-2">
            <div className="bg-eazybet-purple/30 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(155,135,245,0.3)]">
              <Medal className="text-eazybet-purple h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">{uniqueRewards}</h3>
            <p className="text-white text-lg font-medium bg-black/70 px-5 py-4 rounded-xl backdrop-blur-sm border border-eazybet-purple/30 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
              {uniqueRewardsDesc}
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center p-8 bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(155,135,245,0.3)]">
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
