"use client";

import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 relative">
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="relative overflow-hidden rounded-3xl animate-scale-in hover-lift">
          <div className="absolute inset-0 bg-gradient-to-r from-[#58CC02] to-[#1CB0F6]" />
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
              <polygon points="0,200 100,100 200,150 300,50 400,120 400,200" fill="#0F2027"/>
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 opacity-20 animate-rotate-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <polygon points="100,10 180,50 180,130 100,170 20,130 20,50" fill="none" stroke="#0F2027" strokeWidth="3"/>
              <polygon points="100,30 160,60 160,120 100,150 40,120 40,60" fill="none" stroke="#0F2027" strokeWidth="2"/>
              <polygon points="100,50 140,70 140,110 100,130 60,110 60,70" fill="none" stroke="#0F2027" strokeWidth="1"/>
            </svg>
          </div>

          <div className="relative z-10 p-8 md:p-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-[#0F2027]/30 px-4 py-2 rounded-full mb-6 animate-fade-in">
                    <Zap className="w-4 h-4 text-[#FFD900] animate-pulse" />
                    <span className="font-body text-sm text-white">Join the Conquest</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2027] mb-4 animate-slide-up">
                    Ready To Conquer?
                  </h2>
                  
                  <p className="font-body text-[#0F2027]/80 text-lg max-w-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    Download TerraRun now and start building your territory empire. 
                    Your neighborhood awaits!
                  </p>
                </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-in-right">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.terrarun.terrarun&pcampaignid=web_share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 bg-[#0F2027] text-white px-8 py-4 rounded-xl font-heading font-bold text-base uppercase tracking-wide hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                    >
                      Get on Google Play
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
