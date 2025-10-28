"use client";
import React, { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface TimeLoadingProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const TimeLoading: React.FC<TimeLoadingProps> = ({ isVisible, onComplete }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;
    
    // Check if this is a navbar navigation
    const isNavbarNavigation = sessionStorage.getItem('isNavbarNavigation') === 'true';
    
    if (isNavbarNavigation) {
      // Clear the flag for future navigations
      sessionStorage.removeItem('isNavbarNavigation');
      if (onComplete) onComplete();
      return;
    }
    
    document.body.style.overflow = "hidden";
    const el = overlayRef.current;
    if (!el) return;

    gsap.set(el, { yPercent: 100 });

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        document.body.style.overflow = "auto";
        onComplete?.();
      },
    });

    tl.to(el, {
      yPercent: -100,
      duration: 1.5,
    });

    return () => {
      document.body.style.overflow = "auto";
      tl.kill();
    };
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[99999] overflow-hidden pointer-events-none">
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black"
            style={{ willChange: "transform" }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default TimeLoading;
