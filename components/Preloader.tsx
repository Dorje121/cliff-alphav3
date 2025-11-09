"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DotSpinner = () => (
  <div className="dot-spinner">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="dot-spinner__dot"></div>
    ))}
  </div>
);

export default function Preloader() {
  const container = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling during preloader
    document.body.style.overflow = "hidden";
    
    // Hide navbar contents initially
    const navbar = document.querySelector('header');
    if (navbar) {
      (navbar as HTMLElement).style.opacity = '0';
      (navbar as HTMLElement).style.pointerEvents = 'none';
      (navbar as HTMLElement).style.transition = 'opacity 0.5s ease';
    }
    
    if (!container.current || !spinnerRef.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" }
    });

    // Initial state
    gsap.set(spinnerRef.current, { opacity: 0, scale: 0.8 });

    // Fade in the spinner
    tl.to(spinnerRef.current, { 
      opacity: 1, 
      scale: 1, 
      duration: 0.8,
      ease: "power2.out"
    });

    // Function to handle page load completion
    const handlePageLoad = () => {
      if (!container.current) return;
      
      // Fade out the spinner
      tl.to(spinnerRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "power2.in"
      });

      // Fade in the page content
      const fadeInTween = tl.to("#__next > *:not(header)", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

      // Set up completion handler
      fadeInTween.eventCallback("onComplete", () => {
        if (container.current) {
          container.current.style.display = "none";
          document.body.style.overflow = "auto";
          
          // Show navbar contents after preloader
          const navbar = document.querySelector('header');
          if (navbar) {
            (navbar as HTMLElement).style.opacity = '1';
            (navbar as HTMLElement).style.pointerEvents = 'auto';
          }
        }
      });
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      // Wait for page to load
      window.addEventListener('load', handlePageLoad, { once: true });
    }

    return () => {
      window.removeEventListener('load', handlePageLoad);
      gsap.killTweensOf(spinnerRef.current);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9998] bg-black flex items-center justify-center"
    >
      <div ref={spinnerRef}>
        <DotSpinner />
      </div>
      <style jsx global>{`
        .dot-spinner {
          --uib-size: 2.8rem;
          --uib-speed: 0.9s;
          --uib-color: #FFD700;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: var(--uib-size);
          width: var(--uib-size);
        }

        .dot-spinner__dot {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 100%;
          width: 100%;
        }

        .dot-spinner__dot::before {
          content: '';
          height: 20%;
          width: 20%;
          border-radius: 50%;
          background-color: var(--uib-color);
          transform: scale(0);
          opacity: 0.8; /* Increased opacity for better visibility */
          animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.6); /* Gold glow effect */
        }

        .dot-spinner__dot:nth-child(2) {
          transform: rotate(45deg);
        }

        .dot-spinner__dot:nth-child(2)::before {
          animation-delay: calc(var(--uib-speed) * -0.875);
        }

        .dot-spinner__dot:nth-child(3) {
          transform: rotate(90deg);
        }

        .dot-spinner__dot:nth-child(3)::before {
          animation-delay: calc(var(--uib-speed) * -0.75);
        }

        .dot-spinner__dot:nth-child(4) {
          transform: rotate(135deg);
        }

        .dot-spinner__dot:nth-child(4)::before {
          animation-delay: calc(var(--uib-speed) * -0.625);
        }

        .dot-spinner__dot:nth-child(5) {
          transform: rotate(180deg);
        }

        .dot-spinner__dot:nth-child(5)::before {
          animation-delay: calc(var(--uib-speed) * -0.5);
        }

        .dot-spinner__dot:nth-child(6) {
          transform: rotate(225deg);
        }

        .dot-spinner__dot:nth-child(6)::before {
          animation-delay: calc(var(--uib-speed) * -0.375);
        }

        .dot-spinner__dot:nth-child(7) {
          transform: rotate(270deg);
        }

        .dot-spinner__dot:nth-child(7)::before {
          animation-delay: calc(var(--uib-speed) * -0.25);
        }

        .dot-spinner__dot:nth-child(8) {
          transform: rotate(315deg);
        }

        .dot-spinner__dot:nth-child(8)::before {
          animation-delay: calc(var(--uib-speed) * -0.125);
        }

        @keyframes pulse0112 {
          0%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}