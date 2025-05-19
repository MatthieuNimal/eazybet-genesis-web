
import React from "react";
import { Gift, Ticket, Medal } from "lucide-react";

const BetaSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          A <span className="gradient-text">Unique</span> Opportunity
        </h2>
        
        <p className="text-xl text-center text-white mb-16 max-w-3xl mx-auto font-medium">
          The best players with the most diamonds will receive:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card text-center py-12 hover:shadow-[0_0_30px_rgba(155,135,245,0.5)] transform transition-all duration-300 hover:-translate-y-2">
            <div className="bg-eazybet-purple/30 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(155,135,245,0.3)]">
              <Gift className="text-eazybet-purple h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Free Airdrop</h3>
            <p className="text-white text-lg font-medium bg-black/70 px-5 py-4 rounded-xl backdrop-blur-sm border border-eazybet-purple/30 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
              A free airdrop of $EZBC tokens directly to your wallet
            </p>
          </div>
          
          <div className="feature-card text-center py-12 hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] transform transition-all duration-300 hover:-translate-y-2">
            <div className="bg-eazybet-pink/30 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.3)]">
              <Ticket className="text-eazybet-pink h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Priority Access</h3>
            <p className="text-white text-lg font-medium bg-black/70 px-5 py-4 rounded-xl backdrop-blur-sm border border-eazybet-pink/30 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
              Priority access to the private sale with preferential pricing
            </p>
          </div>
          
          <div className="feature-card text-center py-12 hover:shadow-[0_0_30px_rgba(155,135,245,0.5)] transform transition-all duration-300 hover:-translate-y-2">
            <div className="bg-eazybet-purple/30 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(155,135,245,0.3)]">
              <Medal className="text-eazybet-purple h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Unique Rewards</h3>
            <p className="text-white text-lg font-medium bg-black/70 px-5 py-4 rounded-xl backdrop-blur-sm border border-eazybet-purple/30 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
              Access to private communities and permanent benefits in the EazyBet ecosystem
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center p-8 bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(155,135,245,0.3)]">
          <p className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            EZBC is a huge Web3 opportunity
          </p>
          <p className="text-lg md:text-xl text-white font-medium max-w-3xl mx-auto">
            A token tied to real usage, in a mainstream sector, with an engaged early community
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaSection;
