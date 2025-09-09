/**
 * Custom hook for GSAP ScrollTrigger that works with Lenis smooth scroll and Next.js routing
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface UseScrollTriggerProps {
  trigger: React.RefObject<HTMLElement | null>;
  animation: (timeline: gsap.core.Timeline) => void;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  delay?: number;
}

export const useScrollTrigger = ({
  trigger,
  animation,
  start = "top 80%",
  end = "bottom 20%",
  scrub = true,
  delay = 300
}: UseScrollTriggerProps) => {
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const initRef = useRef<boolean>(false);

  useEffect(() => {
    if (!trigger.current || initRef.current) return;

    const triggerElement = trigger.current;
    
    const initializeScrollTrigger = () => {
      // Clean up any existing timeline
      if (tlRef.current) {
        tlRef.current.kill();
      }

      // Remove existing ScrollTriggers for this element
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === triggerElement) {
          st.kill();
        }
      });

      // Refresh ScrollTrigger calculations
      ScrollTrigger.refresh();

      // Create new timeline
      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start,
          end,
          scrub,
          invalidateOnRefresh: true,
          refreshPriority: -1,
          // Ensure compatibility with Lenis
          scroller: document.body,
        },
      });

      // Apply the animation
      animation(tlRef.current);
      initRef.current = true;
    };

    // Delay initialization to ensure Lenis and layout are ready
    const timer = setTimeout(initializeScrollTrigger, delay);

    return () => {
      clearTimeout(timer);
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
      // Clean up ScrollTriggers for this element
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === triggerElement) {
          st.kill();
        }
      });
      initRef.current = false;
    };
  }, [trigger, animation, start, end, scrub, delay]);

  return tlRef.current;
};

// Hook for refreshing ScrollTrigger on route changes
export const useScrollTriggerRefresh = () => {
  useEffect(() => {
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const laterRefreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(refreshTimer);
      clearTimeout(laterRefreshTimer);
    };
  }, []);
};
