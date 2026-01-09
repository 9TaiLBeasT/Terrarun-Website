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
                      href="https://drive.google.com/uc?export=download&id=19Di-Beirt7QpmlDSYF0tfmcyjmkr-NjY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full sm:w-auto justify-center flex items-center gap-2 group"
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
                      src={screenshots.map} 
                      alt="Map View" 
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
