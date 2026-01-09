"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[99] transition-all duration-500 ${
        isScrolled ? 'glass-card-strong py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 hex-clip bg-gradient-to-br from-[#58CC02] to-[#1CB0F6] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6e638708-7b5c-42f2-ae57-9360b8e0b380/AppIcon-1767425534524.png?width=100&height=100&resize=contain" 
                  alt="TerraRun Logo"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <span className="font-heading text-xl font-bold text-white tracking-wider">
                TERRA<span className="text-neon-green">RUN</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {['Home', 'Features', 'How It Works', 'Download'].map((item, index) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="font-body text-[15px] text-white/80 hover:text-neon-green transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-neon-green after:transition-all after:duration-300 hover:after:w-full"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

                <div className="flex items-center gap-4">
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1n-dmhKwbSKkd4XOdczXdthRyybDdjb2f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2 px-6 flex items-center gap-2 group"
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

          <button
            className="lg:hidden text-white p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-card p-6">
            <ul className="flex flex-col gap-4">
              {['Home', 'Features', 'How It Works', 'Download'].map((item, index) => (
                <li key={item} style={{ animationDelay: `${index * 0.05}s` }}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-body text-[16px] text-white/80 hover:text-neon-green transition-colors block py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-6">
              <a 
                href="https://drive.google.com/uc?export=download&id=1n-dmhKwbSKkd4XOdczXdthRyybDdjb2f"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center flex items-center gap-2 group"
                onClick={() => setIsMobileMenuOpen(false)}
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
      </div>
    </nav>
  );
};

export default Navbar;
