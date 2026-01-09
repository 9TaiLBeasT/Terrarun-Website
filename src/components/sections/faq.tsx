"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "How does TerraRun track my movement?",
      answer: "TerraRun uses your phone's GPS to track your real-world movement. When you walk or run through a hexagonal territory zone, the app automatically registers your presence and begins the capture process."
    },
    {
      question: "How do I earn coins in the app?",
      answer: "Every step you take earns you coins! The more you walk, the more you earn. Bonus coins are awarded for capturing territories, completing daily missions, and climbing the leaderboard."
    },
    {
      question: "Can other players steal my territories?",
      answer: "Yes! TerraRun is a competitive game. Other players can attempt to capture your territories by walking through them. Use Shields from the shop to protect your most valuable hexes."
    },
    {
      question: "What can I do with the coins I earn?",
      answer: "Coins can be used to purchase power-ups like Energy Drinks (faster capture), Shields (territory protection), and Star Bonuses (coin multipliers). Future updates will include more items and potential cash-out options."
    },
    {
      question: "Is TerraRun free to play?",
      answer: "Yes! TerraRun is completely free to download and play. All game features are accessible without spending real money. Optional in-app purchases are available for players who want to accelerate their progress."
    },
    {
      question: "Does the app drain my battery?",
      answer: "We've optimized TerraRun for minimal battery usage. The app uses efficient GPS polling and can run in background mode. On average, expect 3-5% battery usage per hour of active gameplay."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1CB0F6]/5 rounded-full blur-[150px]" />
      
      <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '1200px' }}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 animate-fade-in">
            <HelpCircle className="w-4 h-4 text-electric-blue animate-bounce-soft" />
            <span className="font-body text-sm text-white/80">Got Questions?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
            Frequently <span className="text-electric-blue neon-text-blue">Asked</span>
          </h2>
          
          <p className="font-body text-[#AFAFAF] max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Everything you need to know about TerraRun and how to dominate the game.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-500 animate-slide-up hover-lift ${
                openIndex === index ? 'neon-glow-blue' : ''
              }`}
              style={{ animationDelay: `${0.2 + index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 flex items-center justify-between text-left group"
              >
                <span className="font-heading text-base md:text-lg text-white pr-4 group-hover:text-electric-blue transition-colors duration-300">
                  {item.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-[#1CB0F6]/20 rotate-180' : 'bg-white/10'
                }`}>
                  <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                    openIndex === index ? 'text-electric-blue' : 'text-white/60'
                  }`} />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-5 pb-5">
                  <p className="font-body text-[#AFAFAF] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
