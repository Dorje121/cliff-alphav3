"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

gsap.registerPlugin(ScrollTrigger);

export default function TextScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    const textWidth = text.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    const rightPadding = 40; 
    const totalScrollDistance = textWidth - viewportWidth + rightPadding;

    // Set initial position with hardware acceleration
    gsap.set(text, {
      x: 0,
      force3D: true,
      willChange: "transform",
    });

    // Smooth scroll animation with improved performance
    const ctx = gsap.context(() => {
      gsap.to(text, {
        x: -totalScrollDistance,
        ease: "sine.inOut",
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScrollDistance * 1.5}`, 
          scrub: 0.8, 
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
          
            requestAnimationFrame(() => {
              if (text) {
                const progress = self.progress;
                const x = -totalScrollDistance * progress;
                text.style.transform = `translate3d(${x}px, 0, 0)`;
              }
            });
          }
        },
      });
    }, section);

    // Cleanup
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-black"
      style={{
        padding: '2rem 0 2rem 5vw',
        fontFamily: 'var(--font-montserrat, sans-serif)'
      }}
    >
      <div
        ref={textRef}
        className="whitespace-nowrap text-[#FFD700] text-[8vw] md:text-[16vw] montserrat tracking-wider"
        style={{
          willChange: "transform",
          transform: "translate3d(0,0,0)",
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 500,
          fontFeatureSettings: '"liga" 1, "calt" 1',
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          lineHeight: "1.1",
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          paddingRight: '40px' 
        }}
      >
        See the World Differently Together
      </div>
    </section>
  );
}
