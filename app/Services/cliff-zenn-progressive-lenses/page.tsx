"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Data from "./Data";

gsap.registerPlugin(ScrollTrigger);

const CliffZennProgressiveLenses = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background video slow motion
      gsap.fromTo(
        backgroundImageRef.current,
        { scale: 1, rotation: 0 },
        {
          scale: 1.1,
          rotation: 0.5,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        }
      );

      // Animate left column cards
      gsap.utils.toArray<HTMLElement>(".left .card").forEach((card) => {
        gsap.from(card, {
          x: "-100%",
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

      // Animate right column cards
      gsap.utils.toArray<HTMLElement>(".right .card").forEach((card) => {
        gsap.from(card, {
          x: "100%",
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

      // Pin center column to stick until end of parent
      if (centerRef.current && parentRef.current) {
        ScrollTrigger.create({
          trigger: parentRef.current,
          start: "top top+=100", // start after some offset
          end: "bottom bottom", // stop at parent bottom
          pin: centerRef.current,
          pinSpacing: false, // keep layout spacing
          scrub: true, // smooth scroll effect
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="overflow-x-clip">
        {/* ================= Hero Section ================= */}
        <div className="h-[90vh] text-white relative overflow-hidden">
          <div ref={backgroundImageRef} className="absolute inset-0 h-full">
            <video
              src="/homevideo/hero.mp4"
              className="w-full h-full object-cover opacity-70"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 container max-w-[1490px] mx-auto px-4 py-12 h-full flex flex-col lg:flex-row items-center gap-10">
            {/* ... Hero Left + Right Content (same as before) */}
          </div>
        </div>

        {/* ================= Scroll Section ================= */}
        <section className="px-4 sm:px-6 md:px-7 my-10">
          <div
            ref={parentRef}
            className="parent relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {/* Left Column */}
            <div className="left flex flex-col justify-between space-y-20 lg:space-y-52 order-1">
              {[0, 1].map((_, i) => (
                <div
                  key={i}
                  className="card mt-10 py-4 h-[350px] md:h-[400px] rounded-md bg-zinc-900 flex flex-col justify-around items-center"
                >
                  <div className="img rounded-sm bg-amber-400 w-[80%] h-[160px] md:h-[200px] mx-auto" />
                  <h2 className="text-2xl md:text-3xl text-center bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent font-semibold">
                    Digital Ray Path Technology
                  </h2>
                  <p className="text-lg md:text-2xl text-center text-zinc-400 px-3">
                    enhances vision from center edge by compensating the lens
                    point-by-point
                  </p>
                </div>
              ))}
            </div>

            {/* Center Column */}
            <div className="center order-3 md:order-2" ref={centerRef}>
              <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent px-4">
                  Refined digital craftsmanship for evolving lifestyle.
                </h2>
                <div className="w-full h-[300px] md:h-[400px]">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="/pageimg/lensView.png"
                    alt="lensView"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="right flex flex-col justify-between space-y-20 lg:space-y-52 order-2 md:order-3">
              {[0, 1].map((_, i) => (
                <div
                  key={i}
                  className="card mt-10 py-4 h-[350px] md:h-[400px] rounded-md bg-zinc-900 flex flex-col justify-around items-center"
                >
                  <div className="img rounded-sm bg-amber-400 w-[80%] h-[160px] md:h-[200px] mx-auto" />
                  <h2 className="text-2xl md:text-3xl text-center bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent font-semibold">
                    Digital Ray Path Technology
                  </h2>
                  <p className="text-lg md:text-2xl text-center text-zinc-400 px-3">
                    enhances vision from center edge by compensating the lens
                    point-by-point
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Data />
        </section>

        <BackToServicesButton />
      </section>
    </>
  );
};

export default CliffZennProgressiveLenses;
