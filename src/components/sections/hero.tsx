'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const roles = ['Frontend Developer', 'Data Science Enthusiast', 'AI/ML Engineer', 'Freelancer', 'Tech Enthusiast'];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedRole((prev) => {
          if (prev.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            return '';
          }
          return currentRole.substring(0, prev.length - 1);
        });
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedRole((prev) => {
          if (prev.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1000);
            return prev;
          }
          return currentRole.substring(0, prev.length + 1);
        });
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center text-center overflow-hidden px-4"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex flex-col items-center gap-6">
        <div
          className={cn(
            'relative h-40 w-40 transition-all duration-700 ease-out',
            isMounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          )}
        >
          <Image
            src="/hero.png"
            alt="Jeeban's Avatar"
            width={160}
            height={160}
            className="rounded-full border-4 border-primary object-cover shadow-lg transition-transform duration-300 hover:scale-105 w-full h-full"
            data-ai-hint="friendly portrait"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1
            className={cn(
              'font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl transition-all duration-700 ease-out delay-200',
              isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
          >
            Hi, I&apos;m Jeeban
          </h1>
          <p className="font-headline text-2xl font-medium text-primary sm:text-3xl md:text-4xl h-[45px] flex items-center justify-center">
            <span className="inline-block">{displayedRole}</span>
            <span className="ml-2 inline-block w-1.5 h-8 bg-primary animate-blink" aria-hidden="true" />
          </p>
        </div>
        <p
          className={cn(
            'max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl transition-all duration-700 ease-out delay-400',
            isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          I build beautiful, responsive, and user-friendly websites that solve real-world problems.
        </p>
        <div
          className={cn(
            'flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-500',
            isMounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild>
            <Link href="#projects">My Work</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 animate-bounce text-primary" />
        </Link>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1.2s step-start infinite;
        }
      `}</style>
    </section>
  );
}
