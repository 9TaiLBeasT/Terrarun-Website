"use client";

import React from 'react';
import { Footprints, MapPin, Trophy, Coins } from 'lucide-react';

const CounterSection = () => {
  const stats = [
    { icon: Footprints, value: "1.2B", label: "Steps Tracked", color: "#58CC02" },
    { icon: MapPin, value: "5M+", label: "Territories Captured", color: "#1CB0F6" },
    { icon: Trophy, value: "100K", label: "Daily Competitions", color: "#FFD900" },
    { icon: Coins, value: "$2M", label: "Rewards Earned", color: "#58CC02" }
  ];

  return (
    <section className="py-20 relative">
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="glass-card p-8 md:p-12 rounded-2xl animate-scale-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 hex-clip flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${stat.color}20` }}
                  >
                    <Icon className="w-8 h-8 transition-all duration-300 group-hover:scale-110" style={{ color: stat.color }} />
                  </div>
                  <div 
                    className="font-heading text-3xl md:text-4xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <p className="font-body text-sm text-[#AFAFAF]">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
