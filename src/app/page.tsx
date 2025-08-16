'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { LoadingScreen } from '@/components/loading-screen';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ProjectsSection } from '@/components/sections/projects';
import { SkillsSection } from '@/components/sections/skills';
import { EducationSection } from '@/components/sections/education';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { BackgroundAnimation } from '@/components/background-animation';
import { FadeIn } from '@/components/fade-in';
import { ScrollToTop } from '@/components/scroll-to-top';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main className="relative z-10 mx-auto max-w-7xl">
        <FadeIn>
          <HeroSection />
        </FadeIn>
        <FadeIn>
          <AboutSection />
        </FadeIn>
        <FadeIn>
          <ProjectsSection />
        </FadeIn>
        <FadeIn>
          <SkillsSection />
        </FadeIn>
        <FadeIn>
          <EducationSection />
        </FadeIn>
        <FadeIn>
          <ContactSection />
        </FadeIn>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
