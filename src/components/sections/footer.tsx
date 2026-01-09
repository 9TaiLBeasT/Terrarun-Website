"use client";

import React from 'react';
import { Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
              <a href="#" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 hex-clip bg-gradient-to-br from-[#58CC02] to-[#1CB0F6] flex items-center justify-center overflow-hidden">
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
            <p className="font-body text-[#AFAFAF] text-sm mb-6 leading-relaxed">
              Transform your daily walks into epic territory conquests. 
              Every step counts in the battle for dominance.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: MessageCircle, href: "#" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href}
                    className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-[#58CC02]/20 hover:border-[#58CC02] transition-all"
                  >
                    <Icon className="w-5 h-5 text-white/70 hover:text-neon-green" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h6 className="font-heading text-base font-semibold text-white mb-6 uppercase tracking-wide">
              Quick Links
            </h6>
            <ul className="space-y-3">
              {['Home', 'Features', 'How It Works', 'Download', 'FAQ'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-body text-[#AFAFAF] text-sm hover:text-neon-green transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-[#AFAFAF] text-sm">
              © {currentYear} TerraRun. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;