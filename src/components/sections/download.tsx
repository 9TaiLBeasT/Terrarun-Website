"use client";

import React from 'react';
import { Download, Star } from 'lucide-react';
import { screenshots } from '@/lib/screenshots';

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#58CC02]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1CB0F6]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '1200px' }}>
        <div className="glass-card-strong p-8 md:p-16 rounded-3xl relative overflow-hidden animate-scale-in">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10 animate-rotate-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <polygon points="100,10 180,50 180,130 100,170 20,130 20,50" fill="none" stroke="#58CC02" strokeWidth="2"/>
              <polygon points="100,30 160,60 160,120 100,150 40,120 40,60" fill="none" stroke="#1CB0F6" strokeWidth="1"/>
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 animate-fade-in">
                <Download className="w-4 h-4 text-neon-green animate-bounce-soft" />
                <span className="font-body text-sm text-white/80">Available Now</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
                Start Your <span className="text-neon-green neon-text">Conquest</span> Today
              </h2>

              <p className="font-body text-[#AFAFAF] mb-8 text-lg max-w-lg mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Download TerraRun for free and transform your daily walks into an epic adventure. 
                Available on iOS and Android.
              </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.terrarun.terrarun&pcampaignid=web_share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full sm:w-auto justify-center flex items-center gap-2 group"
                    >
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l-3.35 3.35L19.8 19.8l-5.302-7.093zM15.19 11.31l5.96-7.946-8.65 3.75-4.7 2.036 7.39 2.16zM20.95 18.7l1.066-1.42c.407-.542.407-1.277 0-1.82L15.917 10.5l4.437 5.92L20.95 18.7zM3.61 22.186l10.18-10.187L6.44 8.65 3.61 22.186z"/>
                      </svg>
                      Get on Google Play
                    </a>
                  </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-[#58CC02]/30 to-[#1CB0F6]/30 rounded-full blur-3xl animate-pulse" />
                <div className="relative flex items-end gap-4">
                  <div className="w-[160px] md:w-[180px] rounded-[24px] overflow-hidden transform -rotate-6 translate-y-8 opacity-80 border border-white/10 shadow-2xl animate-float-delayed hover-lift phone-mockup">
                    <img 
                      src={screenshots.leaderboard} 
                      alt="Leaderboard View" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-[200px] md:w-[220px] rounded-[28px] overflow-hidden z-10 border-2 border-[#58CC02]/30 shadow-2xl animate-float animate-pulse-glow phone-mockup" style={{ boxShadow: '0 0 60px rgba(88, 204, 2, 0.3)' }}>
                    <img 
                      src={screenshots.profile} 
                      alt="Profile View" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
