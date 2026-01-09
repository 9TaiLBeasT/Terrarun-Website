"use client";

import React from 'react';
import { Rocket, Users, Smartphone, RefreshCw, Target } from 'lucide-react';
import { screenshots } from '@/lib/screenshots';

const FeaturesGrid = () => {
  const features = [
    {
      icon: Rocket,
      title: "Energy Boosters",
      description: "Power up your capture speed with energy drinks from the shop.",
      color: "#58CC02"
    },
    {
      icon: Users,
      title: "Social Battles",
      description: "Challenge friends and compete on global leaderboards.",
      color: "#1CB0F6"
    },
    {
      icon: Smartphone,
      title: "GPS Tracking",
      description: "Real-time location tracking for accurate territory mapping.",
      color: "#FFD900"
    },
    {
      icon: RefreshCw,
      title: "Daily Missions",
      description: "Complete daily challenges for bonus coins and rare items.",
      color: "#58CC02"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#1CB0F6]/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '1200px' }}>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 animate-fade-in">
              <Target className="w-4 h-4 text-electric-blue animate-bounce-soft" />
              <span className="font-body text-sm text-white/80">Power-Ups & Items</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
              Level Up Your <span className="text-electric-blue neon-text-blue">Strategy</span>
            </h2>
            
            <p className="font-body text-[#AFAFAF] mb-10 text-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Use in-game items and power-ups to dominate the competition and expand your territory faster.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index} 
                    className="glass-card p-5 rounded-xl hover:scale-105 transition-all duration-500 group cursor-pointer hover-lift animate-slide-in-right"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div 
                      className="w-12 h-12 hex-clip flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${feature.color}20` }}
                    >
                      <Icon className="w-6 h-6 transition-all duration-300" style={{ color: feature.color }} />
                    </div>
                    <h5 className="font-heading text-base font-semibold text-white mb-2 group-hover:text-neon-green transition-colors">
                      {feature.title}
                    </h5>
                    <p className="font-body text-[#AFAFAF] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1CB0F6]/20 to-[#58CC02]/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative glass-card-strong p-4 rounded-[32px] neon-glow-blue">
                <div className="w-[260px] md:w-[280px] rounded-[28px] overflow-hidden border-2 border-[#1CB0F6]/20 animate-float-delayed phone-mockup" style={{ boxShadow: '0 0 40px rgba(28, 176, 246, 0.2)' }}>
                  <img 
                    src={screenshots.shop} 
                    alt="Shop View" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
