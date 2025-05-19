
import React from "react";
import { Gift, Ticket, Medal } from "lucide-react";

const BetaSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          A <span className="gradient-text">Unique</span> Opportunity
        </h2>
        
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          The best players with the most diamonds will receive:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card text-center py-12">
            <div className="bg-eazybet-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Gift className="text-eazybet-purple h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Free Airdrop</h3>
            <p className="text-gray-300">
              A free airdrop of $EZBC tokens directly to your wallet
            </p>
          </div>
          
          <div className="feature-card text-center py-12">
            <div className="bg-eazybet-pink/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Ticket className="text-eazybet-pink h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Priority Access</h3>
            <p className="text-gray-300">
              Priority access to the private sale with preferential pricing
            </p>
          </div>
          
          <div className="feature-card text-center py-12">
            <div className="bg-eazybet-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Medal className="text-eazybet-purple h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Unique Rewards</h3>
            <p className="text-gray-300">
              Access to private communities and permanent benefits in the EazyBet ecosystem
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-bold gradient-text mb-2">
            EZBC is a huge Web3 opportunity
          </p>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            A token tied to real usage, in a mainstream sector, with an engaged early community
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaSection;
