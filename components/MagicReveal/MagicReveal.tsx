"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MagicReveal() {
  const mainRef = useRef<HTMLDivElement>(null);
  const revealLayerRef = useRef<HTMLDivElement>(null);
  const revealLayerSecondRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
          //   markers: true,
        },
      });
      t.fromTo(
        revealLayerRef.current,
        {
          clipPath: "inset(100% 0% 0% 0%)",
          height: "50vh",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          height: "100vh",
        }
      );
      t.fromTo(
        revealLayerSecondRef.current,
        {
          clipPath: "circle(0% at 50% 59%)",
          borderRadius: "0%",
        },
        {
          clipPath: "circle(100% at 50% 59%)",
          borderRadius: "0%",
          ease: "none",
          duration: 1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative h-screen overflow-hidden">
      {/* Background blurred image */}
      {/* <div className="h-full w-full relative">
        <Image
          src="/didi.jpg"
          alt="Blurred Image"
          fill
          objectFit="cover"
          quality={100}
        />
      </div> */}

      {/* Revealed clear image layer */}
      <div ref={revealLayerRef} className="absolute bottom-0 left-0 right-0">
        <div className="relative w-full h-full">
          <Image
            src="/ai2.jpg"
            alt="Revealed Image"
            fill
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
      <div
        ref={revealLayerSecondRef}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src="/circle.png"
            alt="Revealed Image"
            fill
            objectFit="cover"
            quality={100}
          />
          <div className="absolute z-50 -bottom-1 h-32 w-full bg-gradient-to-b from-transparent to-black "></div>
        </div>
      </div>
    </div>
  );
}
