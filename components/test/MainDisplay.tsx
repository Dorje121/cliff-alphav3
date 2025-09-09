"use client";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Glass from "@/components/Glass";
import { useGSAP } from "@gsap/react";

const MainDisplay = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Text + Image refs
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);
  const text4Ref = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Initialize Lenis smooth scrolling
  useLayoutEffect(() => {
    lenisRef.current = new Lenis({
      smoothWheel: true,
      syncTouch: true,
    });

    function raf(time: number) {
      lenisRef.current!.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Update ScrollTrigger to work with Lenis
    lenisRef.current?.on("scroll", ScrollTrigger.update);

    gsap.ticker.lagSmoothing(0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1, // Make scrub more responsive with Lenis
        pin: true,
        invalidateOnRefresh: true, // Better integration with Lenis
      },
    });

    tl.from(imgRef.current, { scale: 1.2, opacity: 0, duration: 1 }, 0);
    tl.from(overlayRef.current, { scale: 1.2, opacity: 0, duration: 1 }, 0);
    tl.fromTo(
      glassRef.current,
      { opacity: 0, y: -500, transformOrigin: "center center" },
      { opacity: 1, y: 0, duration: 3 }
    );

    tl.fromTo(
      text1Ref.current,
      { y: 100, opacity: 0, duration: 5 },
      { y: 0, opacity: 1, duration: 5 }
    );
    tl.to(text1Ref.current, { y: -200, opacity: 0, delay: 0.5 });

    tl.fromTo(
      text2Ref.current,
      { y: 100, opacity: 0, duration: 5 },
      { y: 0, opacity: 1, duration: 5 }
    );
    tl.to(text2Ref.current, { y: -200, opacity: 0, delay: 0.5 });

    tl.fromTo(
      text3Ref.current,
      { y: 100, opacity: 0, duration: 5 },
      { y: 0, opacity: 1, duration: 5 }
    );
    tl.to(text3Ref.current, { y: -200, opacity: 0, delay: 0.5 });

    tl.fromTo(
      text4Ref.current,
      { y: 100, opacity: 0, duration: 5 },
      { y: 0, opacity: 1, duration: 5 }
    );
    tl.to(text4Ref.current, { y: -200, opacity: 0, delay: 0.5 });

    // Animate image
    tl.to(imgRef.current, { scale: 1.5, opacity: 0, duration: 1 });

    return () => {
      lenisRef.current?.off("scroll", ScrollTrigger.update);
    };
  }, []);

  return (
    <div
      ref={mainRef}
      className="w-full h-screen relative flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-50">
        <div className="relative">
          <Image
            ref={imgRef}
            src="/test/bg.png"
            alt="Main Display"
            width={1920}
            height={1080}
            quality={100}
            className="object-cover w-full h-screen"
          />
          <div
            ref={overlayRef}
            className="absolute bg-gradient-to-b from-black to-transparent inset-0"
          />
        </div>
        <div ref={glassRef} className="z-50 absolute inset-0">
          <Glass />
        </div>
      </div>

      {/* Animated Texts */}
      <h1
        ref={text1Ref}
        className="absolute text-7xl text-center font-bold font-ramro text-white z-50"
      >
        Welcome to Cliff
      </h1>

      <h1
        ref={text2Ref}
        className="absolute text-7xl text-center font-bold font-ramro text-white z-50"
      >
        Solution
      </h1>

      <h1
        ref={text3Ref}
        className="absolute text-7xl text-center font-semibold font-ramro text-white z-50"
      >
        To
      </h1>

      <h1
        ref={text4Ref}
        className="absolute text-7xl text-center font-semibold font-ramro text-white z-50"
      >
        Your Problem
      </h1>
    </div>
  );
};

export default MainDisplay;
