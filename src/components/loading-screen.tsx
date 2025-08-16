'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const greetings = ['Hello', 'नमस्ते', 'Bonjour', 'Hola', 'Ciao'];

export function LoadingScreen() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Stop the greeting loop once it's done
    if (index >= greetings.length) {
        return;
    }

    // Timer to fade in the current greeting
    const fadeInTimer = setTimeout(() => {
      setFade(true);
    }, 100); 
    
    // Timer to fade out the current greeting
    const fadeOutTimer = setTimeout(() => {
      setFade(false);
    }, 600);
    
    // Timer to move to the next greeting
    const nextGreetingTimer = setTimeout(() => {
      setIndex(prevIndex => prevIndex + 1);
    }, 700);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(nextGreetingTimer);
    };
  }, [index]);

  return (
    <div className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background"
      )}>
      <div className="font-headline text-4xl sm:text-6xl md:text-8xl font-bold text-foreground">
        {index < greetings.length && (
          <span
            className={cn(
              'transition-opacity duration-500',
              fade ? 'opacity-100' : 'opacity-0'
            )}
          >
            {greetings[index]}
          </span>
        )}
      </div>
    </div>
  );
}
