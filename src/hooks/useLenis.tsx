
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis with maximum smoothness settings
    const lenis = new Lenis({
      duration: 3.2,
      easing: (t) => 1 - Math.pow(1 - t, 5),
      lerp: 0.03,
      wheelMultiplier: 0.6,
      touchMultiplier: 1.8,
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
