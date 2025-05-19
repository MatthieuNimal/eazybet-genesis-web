
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
      <header className="container mx-auto px-4 py-5 flex items-center justify-between animate-fade-in">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/45a36e14-4147-468a-96a4-d04d25def9e6.png" 
            alt="EazyBet Logo" 
            className="h-12 md:h-16" 
          />
          <span className="ml-3 text-xl font-bold gradient-text">EazyBet</span>
        </div>
        
        <a 
          href="https://www.eazybetcoinapp.com" 
          className="glow-button flex items-center gap-2 px-6 py-2 rounded-full text-white font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started <ArrowRight size={16} />
        </a>
      </header>

      <div className="container mx-auto px-4 py-10">
        <div ref={addToRefs} className="reveal">
          <HeroSection />
        </div>
        
        {/* CTA after Hero Section */}
        <div className="text-center my-10 py-6">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-3xl border border-eazybet-purple/30 mx-auto max-w-3xl">
            <p className="text-xl md:text-2xl mb-6 gradient-text font-semibold">
              Seize the EazyBet opportunity now
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a 
                href="https://www.eazybetcoinapp.com" 
                className="glow-button px-6 py-3 rounded-full text-white font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Playing <ArrowRight size={16} className="inline ml-2" />
              </a>
              <a 
                href="https://t.me/eazybetcoin" 
                className="glow-button px-6 py-3 rounded-full text-white font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community <MessageSquare size={16} className="inline ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        <div ref={addToRefs} className="reveal">
          <ConceptSection />
        </div>
        
        {/* CTA after Concept Section */}
        <div className="text-center my-12 animate-pulse-glow">
          <a 
            href="https://www.eazybetcoinapp.com" 
            className="inline-block glow-button px-8 py-4 rounded-full text-white text-lg font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try For Free <ArrowRight size={18} className="inline ml-2" />
          </a>
        </div>
        
        <div ref={addToRefs} className="reveal">
          <TokenSection />
        </div>
        
        {/* CTA after Token Section */}
        <div className="my-16 text-center max-w-3xl mx-auto p-8 bg-gradient-card rounded-3xl border border-eazybet-purple/30">
          <h3 className="text-2xl font-bold mb-4">Ready to revolutionize sports betting?</h3>
          <p className="mb-6 text-gray-200">Join us to be among the first to enjoy the exclusive benefits of $EZBC.</p>
          <div className="flex justify-center">
            <a 
              href="https://x.com/eazybetcoin?s=21" 
              className="glow-button px-8 py-3 rounded-full text-white font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Our Updates <Twitter size={18} className="inline ml-2" />
            </a>
          </div>
        </div>
        
        <div ref={addToRefs} className="reveal">
          <VisionSection />
        </div>
        
        {/* CTA after Vision Section */}
        <div className="relative my-16 py-10">
          <div className="absolute inset-0 bg-gradient-to-r from-eazybet-purple/20 to-eazybet-pink/20 rounded-3xl blur-xl"></div>
          <div className="relative text-center max-w-3xl mx-auto p-8 rounded-3xl border border-white/10">
            <p className="text-2xl font-bold mb-6">Redefine your approach to sports betting</p>
            <a 
              href="https://www.eazybetcoinapp.com" 
              className="glow-button px-8 py-4 rounded-full text-white text-lg font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access the Application <ArrowRight size={18} className="inline ml-2" />
            </a>
          </div>
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
            href="https://www.eazybetcoinapp.com" 
            className="glow-button flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access the App <ArrowRight size={18} />
          </a>
          <a 
            href="https://t.me/eazybetcoin" 
            className="glow-button flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Telegram <MessageSquare size={18} />
          </a>
          <a 
            href="https://x.com/eazybetcoin?s=21" 
            className="glow-button flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on X (Twitter) <Twitter size={18} />
          </a>
        </div>
        
        <footer className="text-center text-sm text-gray-400 mt-16 pb-8">
          © 2025 EazyBet. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Index;
