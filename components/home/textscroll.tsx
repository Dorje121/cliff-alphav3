"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

gsap.registerPlugin(ScrollTrigger);

export default function TextScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const width = textRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    
    gsap.set(textRef.current, { x: '30%' });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%", 
        scrub: 2,
        pin: true,
        anticipatePin: 1,
      }
    });
    
    
    tl.to(textRef.current, {
      x: 0,
      duration: 0.3, 
      ease: "power1.out"
    })
    
   
    
    .to(textRef.current, {
      x: () => {
        
        const neededMovement = width - viewportWidth;
      
        const movementFactor = neededMovement > viewportWidth ? 0.7 : 0.4;
        return -Math.min(neededMovement, viewportWidth * movementFactor);
      },
      duration: 1, 
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-screen flex items-center justify-center overflow-hidden bg-black ${montserrat.variable} font-sans`}
    >
      <div
        ref={textRef}
        className="whitespace-nowrap text-[#FFD700] text-[10vw] md:text-[14vw] tracking-wider font-montserrat"
        style={{
          fontVariationSettings: '"wght" 700, "opsz" 100',
          fontFeatureSettings: '"liga" 1, "calt" 1',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
      >
        See the World Differently Together
      </div>
    </section>
  );
}
