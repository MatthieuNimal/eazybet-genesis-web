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
      <header className="container mx-auto px-4 py-5 flex items-center justify-between animate-fade-in">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/45a36e14-4147-468a-96a4-d04d25def9e6.png" 
            alt="EazyBet Logo" 
            className="h-12 md:h-16" 
          />
          <span className="ml-3 text-xl font-bold gradient-text">EazyBet</span>
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher 
            onChangeLanguage={handleChangeLanguage} 
            currentLanguage={language} 
          />
          <a 
            href="https://www.eazybetcoinapp.com" 
            className="glow-button flex items-center gap-2 px-6 py-2 rounded-full text-white font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.getStarted} <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-10">
        <div ref={addToRefs} className="reveal">
          <HeroSection 
            heroHeading={t.heroHeading}
            heroSubheading={t.heroSubheading}
            accessApp={t.accessApp}
          />
        </div>
        
        {/* CTA after Hero Section */}
        <div className="text-center my-10 py-6">
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-3xl border border-eazybet-purple/30 mx-auto max-w-3xl">
            <p className="text-xl md:text-2xl mb-6 gradient-text font-semibold">
              {t.seizeOpportunity}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a 
                href="https://www.eazybetcoinapp.com" 
                className="glow-button px-6 py-3 rounded-full text-white font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.startPlaying} <ArrowRight size={16} className="inline ml-2" />
              </a>
              <a 
                href="https://t.me/eazybetcoin" 
                className="glow-button px-6 py-3 rounded-full text-white font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.joinCommunity} <MessageSquare size={16} className="inline ml-2" />
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
        <div className="text-center my-12 animate-pulse-glow">
          <a 
            href="https://www.eazybetcoinapp.com" 
            className="inline-block glow-button px-8 py-4 rounded-full text-white text-lg font-bold border-0 shadow-none bg-gradient-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.tryForFree} <ArrowRight size={18} className="inline ml-2" />
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
        <div className="my-16 text-center max-w-3xl mx-auto p-8 bg-black/50 rounded-3xl border border-eazybet-purple/30 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-white">{t.readyToRevolutionize}</h3>
          <p className="mb-6 text-white">{t.joinUsToBeFirst}</p>
          <div className="flex justify-center">
            <a 
              href="https://x.com/eazybetcoin?s=21" 
              className="glow-button px-8 py-3 rounded-full text-white font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.followUpdates} <Twitter size={18} className="inline ml-2" />
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
        <div className="relative my-16 py-10">
          <div className="absolute inset-0 bg-gradient-to-r from-eazybet-purple/30 to-eazybet-pink/30 rounded-3xl blur-xl"></div>
          <div className="relative text-center max-w-3xl mx-auto p-8 rounded-3xl border border-white/20 bg-black/60 shadow-lg backdrop-blur-md">
            <p className="text-2xl font-bold mb-6 gradient-text">{t.redefineApproach}</p>
            <a 
              href="https://www.eazybetcoinapp.com" 
              className="glow-button px-8 py-4 rounded-full text-white text-lg font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.accessApplication} <ArrowRight size={18} className="inline ml-2" />
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
          className="reveal flex flex-col md:flex-row justify-center items-center gap-6 mt-20 md:mt-28 mb-16 bg-black/40 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        >
          <a 
            href="https://www.eazybetcoinapp.com" 
            className="glow-button flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.accessApp} <ArrowRight size={18} />
          </a>
          <a 
            href="https://t.me/eazybetcoin" 
            className="glow-button flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.joinTelegram} <MessageSquare size={18} />
          </a>
          <a 
            href="https://x.com/eazybetcoin?s=21" 
            className="glow-button flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.followTwitter} <Twitter size={18} />
          </a>
        </div>
        
        <footer className="text-center mt-16 pb-8">
          <p className="text-white text-lg font-medium">{t.copyright}</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
