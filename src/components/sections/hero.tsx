"use client";

import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#58CC02]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1CB0F6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 animate-rotate-slow">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <polygon 
              points="100,10 180,50 180,130 100,170 20,130 20,50" 
              fill="none" 
              stroke="#58CC02" 
              strokeWidth="0.5"
              opacity="0.3"
            />
            <polygon 
              points="100,30 160,60 160,120 100,150 40,120 40,60" 
              fill="none" 
              stroke="#1CB0F6" 
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>

      <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '1200px' }}>
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-[#58CC02] animate-pulse" />
            <span className="font-body text-sm text-white/80">Move-to-Earn Gaming</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="text-white">Walk.</span>{' '}
            <span className="text-neon-green neon-text animate-pulse-neon">Capture.</span>{' '}
            <span className="text-electric-blue neon-text-blue">Conquer.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-[#AFAFAF] mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Turn your neighborhood into a real-time strategy game. Every step earns coins. 
            Capture hexagonal territories. Compete on leaderboards.
          </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.terrarun.terrarun&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 group"
                >
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l-3.35 3.35L19.8 19.8l-5.302-7.093zM15.19 11.31l5.96-7.946-8.65 3.75-4.7 2.036 7.39 2.16zM20.95 18.7l1.066-1.42c.407-.542.407-1.277 0-1.82L15.917 10.5l4.437 5.92L20.95 18.7zM3.61 22.186l10.18-10.187L6.44 8.65 3.61 22.186z"/>
                  </svg>
                  Get on Google Play
                </a>
              </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
