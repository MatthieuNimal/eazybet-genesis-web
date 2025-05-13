
import React, { useEffect, useRef } from "react";
import { ArrowRight, MessageSquare, Twitter } from "lucide-react";
import HeroSection from "@/components/landing/HeroSection";
import ConceptSection from "@/components/landing/ConceptSection";
import TokenSection from "@/components/landing/TokenSection";
import VisionSection from "@/components/landing/VisionSection";
import BetaSection from "@/components/landing/BetaSection";

const Index = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  return (
    <div className="min-h-screen bg-gradient-main text-white overflow-hidden">
      {/* Header with Logo and Button */}
      <header className="container mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/45a36e14-4147-468a-96a4-d04d25def9e6.png" 
            alt="EazyBet Logo" 
            className="h-12 md:h-16" 
          />
          <span className="ml-3 text-xl font-bold">EazyBet</span>
        </div>
        
        <a 
          href="https://www.eazybetcoinapp.com" 
          className="glow-button flex items-center gap-2 px-6 py-2 rounded-full text-white font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Commencer <ArrowRight size={16} />
        </a>
      </header>

      <div className="container mx-auto px-4 py-10">
        <div ref={addToRefs} className="reveal">
          <HeroSection />
        </div>
        
        <div ref={addToRefs} className="reveal">
          <ConceptSection />
        </div>
        
        <div ref={addToRefs} className="reveal">
          <TokenSection />
        </div>
        
        <div ref={addToRefs} className="reveal">
          <VisionSection />
        </div>
        
        <div ref={addToRefs} className="reveal">
          <BetaSection />
        </div>
        
        {/* CTA Buttons */}
        <div 
          ref={addToRefs} 
          className="reveal flex flex-col md:flex-row justify-center items-center gap-6 mt-16 md:mt-24 mb-10"
        >
          <a 
            href="#" 
            className="glow-button flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg"
          >
            Accéder à l'app <ArrowRight size={18} />
          </a>
          <a 
            href="#" 
            className="glow-button flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg"
          >
            Rejoindre le Telegram <MessageSquare size={18} />
          </a>
          <a 
            href="#" 
            className="glow-button flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg"
          >
            Suivre sur X (Twitter) <Twitter size={18} />
          </a>
        </div>
        
        <footer className="text-center text-sm text-gray-400 mt-16 pb-8">
          © 2025 EazyBet. Tous droits réservés.
        </footer>
      </div>
    </div>
  );
};

export default Index;
