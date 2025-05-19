
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageSquare, Twitter } from "lucide-react";
import HeroSection from "@/components/landing/HeroSection";
import ConceptSection from "@/components/landing/ConceptSection";
import TokenSection from "@/components/landing/TokenSection";
import VisionSection from "@/components/landing/VisionSection";
import BetaSection from "@/components/landing/BetaSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { translations } from "@/translations";

const Index = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [language, setLanguage] = useState<string>("en");
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      revealRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const handleChangeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-gradient-main text-white overflow-hidden">
      {/* Header with Logo, Language Switcher and Button */}
      <header className="w-full px-4 sm:px-6 md:container mx-auto py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/45a36e14-4147-468a-96a4-d04d25def9e6.png" 
            alt="EazyBet Logo" 
            className="h-10 sm:h-12 md:h-16" 
          />
          <span className="ml-3 text-lg sm:text-xl font-bold gradient-text">EazyBet</span>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher 
            onChangeLanguage={handleChangeLanguage} 
            currentLanguage={language} 
          />
          <a 
            href="https://www.eazybetcoinapp.com" 
            className="glow-button flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 rounded-full text-white text-sm sm:text-base font-bold whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.getStarted} <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-10">
        <div ref={addToRefs} className="reveal">
          <HeroSection 
            heroHeading={t.heroHeading}
            heroSubheading={t.heroSubheading}
            accessApp={t.accessApp}
          />
        </div>
        
        {/* CTA after Hero Section */}
        <div className="text-center my-6 sm:my-8 md:my-10 py-4 sm:py-6">
          <div className="bg-black/50 backdrop-blur-sm p-4 sm:p-6 rounded-3xl border border-eazybet-purple/30 mx-auto max-w-3xl">
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 gradient-text font-semibold">
              {t.seizeOpportunity}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://www.eazybetcoinapp.com" 
                className="glow-button px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.startPlaying} <ArrowRight size={14} className="inline ml-1 sm:ml-2" />
              </a>
              <a 
                href="https://t.me/eazybetcoin" 
                className="glow-button px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.joinCommunity} <MessageSquare size={14} className="inline ml-1 sm:ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        <div ref={addToRefs} className="reveal">
          <ConceptSection 
            conceptHeading={t.conceptHeading}
            zeroMoneyStakes={t.zeroMoneyStakes}
            zeroMoneyDesc={t.zeroMoneyDesc}
            zeroRisk={t.zeroRisk}
            zeroRiskDesc={t.zeroRiskDesc}
            realRewards={t.realRewards}
            realRewardsDesc={t.realRewardsDesc}
          />
        </div>
        
        {/* CTA after Concept Section */}
        <div className="text-center my-8 sm:my-10 md:my-12 animate-pulse-glow">
          <a 
            href="https://www.eazybetcoinapp.com" 
            className="inline-block glow-button px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white text-base sm:text-lg font-bold border-0 shadow-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.tryForFree} <ArrowRight size={16} className="inline ml-1 sm:ml-2" />
          </a>
        </div>
        
        <div ref={addToRefs} className="reveal">
          <TokenSection 
            tokenHeading={t.tokenHeading}
            tokenSubheading={t.tokenSubheading}
            teamNFTs={t.teamNFTs}
            teamNFTsDesc={t.teamNFTsDesc}
            inGameBoosts={t.inGameBoosts}
            inGameBoostsDesc={t.inGameBoostsDesc}
            solanaBlockchain={t.solanaBlockchain}
            solanaDesc={t.solanaDesc}
          />
        </div>
        
        {/* CTA after Token Section */}
        <div className="my-10 sm:my-12 md:my-16 text-center max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-black/50 rounded-2xl sm:rounded-3xl border border-eazybet-purple/30 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{t.readyToRevolutionize}</h3>
          <p className="mb-4 sm:mb-6 text-white">{t.joinUsToBeFirst}</p>
          <div className="flex justify-center">
            <a 
              href="https://x.com/eazybetcoin?s=21" 
              className="glow-button px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-white font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.followUpdates} <Twitter size={16} className="inline ml-1 sm:ml-2" />
            </a>
          </div>
        </div>
        
        <div ref={addToRefs} className="reveal">
          <VisionSection 
            visionHeading={t.visionHeading}
            visionText1={t.visionText1}
            visionText2={t.visionText2}
            visionText3={t.visionText3}
          />
        </div>
        
        {/* CTA after Vision Section */}
        <div className="relative my-10 sm:my-12 md:my-16 py-6 sm:py-8 md:py-10">
          <div className="absolute inset-0 bg-gradient-to-r from-eazybet-purple/30 to-eazybet-pink/30 rounded-2xl sm:rounded-3xl blur-xl"></div>
          <div className="relative text-center max-w-3xl mx-auto p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/20 bg-black/60 shadow-lg backdrop-blur-md">
            <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">{t.redefineApproach}</p>
            <a 
              href="https://www.eazybetcoinapp.com" 
              className="glow-button px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-white text-base sm:text-lg font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.accessApplication} <ArrowRight size={16} className="inline ml-1 sm:ml-2" />
            </a>
          </div>
        </div>
        
        <div ref={addToRefs} className="reveal">
          <BetaSection 
            uniqueOpportunity={t.uniqueOpportunity}
            bestPlayersWillReceive={t.bestPlayersWillReceive}
            freeAirdrop={t.freeAirdrop}
            freeAirdropDesc={t.freeAirdropDesc}
            priorityAccess={t.priorityAccess}
            priorityAccessDesc={t.priorityAccessDesc}
            uniqueRewards={t.uniqueRewards}
            uniqueRewardsDesc={t.uniqueRewardsDesc}
            hugeOpportunity={t.hugeOpportunity}
            opportunityDesc={t.opportunityDesc}
          />
        </div>
        
        {/* CTA Buttons */}
        <div 
          ref={addToRefs} 
          className="reveal flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20 lg:mt-28 mb-10 sm:mb-16 bg-black/40 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        >
          <a 
            href="https://www.eazybetcoinapp.com" 
            className="glow-button flex items-center gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-white font-bold text-base sm:text-lg w-full sm:w-auto justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.accessApp} <ArrowRight size={16} className="sm:w-4 sm:h-5" />
          </a>
          <a 
            href="https://t.me/eazybetcoin" 
            className="glow-button flex items-center gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-white font-bold text-base sm:text-lg w-full sm:w-auto justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.joinTelegram} <MessageSquare size={16} className="sm:w-4 sm:h-5" />
          </a>
          <a 
            href="https://x.com/eazybetcoin?s=21" 
            className="glow-button flex items-center gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-white font-bold text-base sm:text-lg w-full sm:w-auto justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.followTwitter} <Twitter size={16} className="sm:w-4 sm:h-5" />
          </a>
        </div>
        
        <footer className="text-center mt-12 pb-6 sm:pb-8">
          <p className="text-white text-base sm:text-lg font-medium">{t.copyright}</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
