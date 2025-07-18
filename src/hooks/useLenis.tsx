
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis with ultra-smooth settings
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      lerp: 0.05,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);
};
