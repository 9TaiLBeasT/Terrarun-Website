"use client";

import React, { useRef, useState, useEffect } from 'react';
import { screenshots } from '@/lib/screenshots';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroImages = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(2);

  const screens = [
    { src: screenshots.territory, label: "Territory" },
    { src: screenshots.shop, label: "Shop" },
    { src: screenshots.map, label: "Map" },
    { src: screenshots.leaderboard, label: "Leaderboard" },
    { src: screenshots.profile, label: "Profile" },
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      const cardWidth = 280;
      const gap = 24;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(Math.max(index, 0), screens.length - 1));
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 280;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 280;
      const gap = 24;
      const containerWidth = scrollRef.current.clientWidth;
      const scrollPosition = (index * (cardWidth + gap)) - (containerWidth / 2) + (cardWidth / 2);
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      setTimeout(() => {
        scrollToIndex(2);
      }, 100);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section className="relative pb-16 -mt-16">
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-card-strong flex items-center justify-center transition-all duration-300 ${
            canScrollLeft ? 'opacity-100 hover:scale-110 hover:neon-glow' : 'opacity-30 cursor-not-allowed'
          }`}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={() => scroll('right')}
          className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-card-strong flex items-center justify-center transition-all duration-300 ${
            canScrollRight ? 'opacity-100 hover:scale-110 hover:neon-glow' : 'opacity-30 cursor-not-allowed'
          }`}
          disabled={!canScrollRight}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-8 md:px-16 py-8 scroll-smooth"
          style={{ 
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className="flex-shrink-0 w-[calc(50vw-180px)]" />
          
          {screens.map((screen, index) => (
            <div
              key={index}
              className={`flex-shrink-0 transition-all duration-500 cursor-pointer ${
                activeIndex === index 
                  ? 'scale-100 opacity-100' 
                  : 'scale-90 opacity-60 hover:opacity-80'
              }`}
              style={{ scrollSnapAlign: 'center' }}
              onClick={() => scrollToIndex(index)}
            >
              <div className={`relative ${activeIndex === index ? 'animate-float' : ''}`}>
                <div 
                  className={`w-[260px] md:w-[280px] rounded-[32px] overflow-hidden transition-all duration-500 ${
                    activeIndex === index 
                      ? 'border-2 border-[#58CC02]/50 shadow-2xl' 
                      : 'border border-white/10 shadow-xl'
                  }`}
                  style={{ 
                    boxShadow: activeIndex === index 
                      ? '0 0 60px rgba(88, 204, 2, 0.3), 0 25px 50px rgba(0,0,0,0.5)' 
                      : '0 10px 30px rgba(0,0,0,0.3)'
                  }}
                >
                  <img 
                    src={screen.src} 
                    alt={`${screen.label} View`} 
                    className="w-full h-auto"
                    draggable={false}
                  />
                </div>
                
                <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 ${
                  activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <span className="font-heading text-sm font-semibold text-neon-green px-4 py-1 glass-card rounded-full">
                    {screen.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex-shrink-0 w-[calc(50vw-180px)]" />
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index 
                  ? 'w-8 h-2 bg-neon-green' 
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroImages;
