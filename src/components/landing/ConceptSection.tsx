
import React from "react";
import { Ban, Coins, Trophy } from "lucide-react";

const ConceptSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">EazyBet</span> is the radical opposite of traditional sports betting apps
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="flex items-center mb-4">
              <div className="bg-eazybet-purple/20 p-3 rounded-lg mr-4">
                <Ban className="text-eazybet-purple h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Zero Money Stakes</h3>
            </div>
            <p className="text-gray-300">
              Unlike traditional betting, you never need to deposit or risk your real money.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="flex items-center mb-4">
              <div className="bg-eazybet-pink/20 p-3 rounded-lg mr-4">
                <Ban className="text-eazybet-pink h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Zero Financial Risk</h3>
            </div>
            <p className="text-gray-300">
              No more stress from money losses. Focus on strategy and the fun of the game.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="flex items-center mb-4">
              <div className="bg-eazybet-pink/20 p-3 rounded-lg mr-4">
                <Trophy className="text-eazybet-pink h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Real Rewards</h3>
            </div>
            <p className="text-gray-300">
              Just a strategic, fun and free game that rewards the best with real benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
