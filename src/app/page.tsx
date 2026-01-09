"use client";

import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import HeroImages from "@/components/sections/hero-images";
import CounterSection from "@/components/sections/counter";
import FeaturesList from "@/components/sections/features-list";
import FeaturesGrid from "@/components/sections/features-grid";
import DownloadSection from "@/components/sections/download";
import FAQ from "@/components/sections/faq";
import CTABanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #0F2027 0%, #203A43 50%, #2C5364 100%)',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <HeroImages />
        <FeaturesList />
        <FeaturesGrid />
        <DownloadSection />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
