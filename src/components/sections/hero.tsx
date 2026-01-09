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
                  href="https://drive.google.com/uc?export=download&id=1n-dmhKwbSKkd4XOdczXdthRyybDdjb2f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 group"
                >
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download APK
                </a>
              </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
