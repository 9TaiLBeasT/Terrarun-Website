"use client";

import React from 'react';
import { Map, Coins, Shield, Zap } from 'lucide-react';
import { screenshots } from '@/lib/screenshots';

const FeaturesList = () => {
  const features = [
    {
      icon: Map,
      title: "Capture Territories",
      description: "Walk through hexagonal zones to claim them as your own. Build your empire one step at a time.",
      color: "#58CC02"
    },
    {
      icon: Coins,
      title: "Earn Real Rewards",
      description: "Every step converts to coins. Use them for boosters, shields, or cash out your earnings.",
      color: "#FFD900"
    },
    {
      icon: Shield,
      title: "Defend Your Land",
      description: "Protect your territories with shields and strategic placements against rival players.",
      color: "#1CB0F6"
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#58CC02]/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '1200px' }}>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 animate-fade-in">
              <Zap className="w-4 h-4 text-neon-green animate-pulse" />
              <span className="font-body text-sm text-white/80">Core Features</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
              Your <span className="gradient-text">Neighborhood</span> Is Now A Game
            </h2>
            
            <p className="font-body text-[#AFAFAF] mb-10 text-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Transform your daily walks into an exciting territory conquest game with real rewards.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index} 
                    className="glass-card p-5 rounded-xl hover:neon-glow transition-all duration-500 group hover-lift animate-slide-in-left"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 hex-clip flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${feature.color}20` }}
                      >
                        <Icon className="w-6 h-6 transition-all duration-300 group-hover:scale-110" style={{ color: feature.color }} />
                      </div>
                      <div>
                        <h5 className="font-heading text-lg font-semibold text-white mb-2 group-hover:text-neon-green transition-colors">
                          {feature.title}
                        </h5>
                        <p className="font-body text-[#AFAFAF] text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#58CC02]/20 to-[#1CB0F6]/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative glass-card-strong p-4 rounded-[32px]">
                <div className="w-[260px] md:w-[280px] rounded-[28px] overflow-hidden border-2 border-[#58CC02]/20 animate-float-slow phone-mockup" style={{ boxShadow: '0 0 40px rgba(88, 204, 2, 0.2)' }}>
                  <img 
                    src={screenshots.territory} 
                    alt="Territory View" 
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

export default FeaturesList;
