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

  
    gsap.set([section, text], {
      force3D: true,
      backfaceVisibility: 'hidden',
      willChange: 'transform'
    });

    const textWidth = text.scrollWidth;
    const viewportWidth = window.innerWidth;
    const rightPadding = 40;
    const totalScrollDistance = textWidth - viewportWidth + rightPadding;

    const proxy = document.createElement('div');
    proxy.style.position = 'absolute';
    proxy.style.visibility = 'hidden';
    document.body.appendChild(proxy);

    const ctx = gsap.context(() => {
      const updateX = (x: number) => {
        requestAnimationFrame(() => {
          gsap.set(text, {
            x: x,
            force3D: true,
            onComplete: () => {
              text.offsetHeight;
            }
          });
        });
      };

      gsap.to(proxy, {
        x: -totalScrollDistance,
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalScrollDistance * 1.5}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (!text) return;
            const progress = self.progress;
            const x = -totalScrollDistance * progress;
            updateX(x);
          },
          onEnter: () => {
            text.style.willChange = 'transform';
          },
          onLeaveBack: () => {
            text.style.willChange = 'auto';
          }
        }
      });
    }, section);

    return () => {
      document.body.removeChild(proxy);
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-black"
      style={{
        padding: "2rem 0 2rem 5vw",
        fontFamily: "var(--font-montserrat, sans-serif)",
        position: "relative",
        isolation: "isolate",
        backgroundImage: 'url("/homevideo/earth.gif")',
        backgroundSize: "60%",
        backgroundPosition: "center 0%",
        backgroundRepeat: "no-repeat",
        transform: 'translate3d(0,0,0)',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />

      <div className="relative w-full h-full flex items-center pt-[45vh] z-10">
        <div
          ref={textRef}
          className="whitespace-nowrap text-[#FFD700] text-[8vw] md:text-[16vw] tracking-wider"
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            paddingRight: '40px',
            transform: 'translate3d(0,0,0)',
            willChange: 'transform',
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 500,
            lineHeight: '1.1',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'antialiased',
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
            pointerEvents: 'auto',
            filter: 'drop-shadow(0 0 2px rgba(255, 215, 0, 0.5))',
          }}
          onMouseEnter={(e) => {
            // Prevent hover state from affecting the animation
            e.currentTarget.style.willChange = 'auto';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.willChange = 'transform';
          }}
        >
          <span style={{
            display: 'inline-block',
            transform: 'translateZ(0.1px)',
            backfaceVisibility: 'hidden',
            willChange: 'transform',
          }}>
            See the World Differently Together
          </span>
        </div>
      </div>
    </section>
  );
}
