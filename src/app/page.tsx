'use client';

import { Navbar } from '@/components/portfolio/Navbar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { JourneySection } from '@/components/portfolio/JourneySection';
import { CertificatesSection } from '@/components/portfolio/CertificatesSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-charcoal noise-overlay">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <CertificatesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
