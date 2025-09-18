"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Data from "./Data";
import Link from "next/link";
import TextWithTexture from "@/components/textwithgoldentexture";
import HeroSection from "@/components/Services/heropage";

gsap.registerPlugin(ScrollTrigger);

const CliffZennProgressiveLenses = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const leftCards = [
    {
      img: "/pageimg/wqw.png", // replace with your image
      title: "Digital Ray-Path® Technology",
      desc: "Enhances vision from center to edge by compensating the lens point-by-point",
    },

    {
      img: "/pageimg/per.png", // replace with your image
      title: "Personalization Parameters",
      desc: "Used for the calculation are specific for each individual wearer",
    },

  ];

  const rightCards = [
    {
      img: "/pageimg/nobgSmartadd.png", // replace with your image
      title: "Smart Add Technology",
      desc: "Improves lens performance against screen devices, optimizing the surface for better dynamic vision",
    },
    {
      img: "/pageimg/auto.png", // replace with your image
      title: "Automatic Corridor Selection & INSET",
      desc: "With Ultimate Freestyle progressive lenses the MFH is automatically calculated to deliver an unmatched visual experience",
    },
  ];


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
          start: "top top+=100",
          end: "bottom bottom",
          pin: centerRef.current,
          pinSpacing: false,
          scrub: true,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="overflow-x-clip">
        {/* ================= Hero Section ================= */}
        <HeroSection
          title="CLIFF ZENN"
          subtitle="PROGRESSIVE LENSES"
          description="The most versatile design for Single Vision Lenses with 76% more
                  stability and better vision in all gaze directions."
          backgroundImage="/ai0.jpg"
          rightImage="/ai0.jpg"
          serviceNumber="13"
          badgeTitle="Zenn"
          badgeSubtitle="Progressive lens"
        />




        {/* ================= Scroll Section ================= */}
        <section className="px-4 sm:px-6 md:px-7 my-10 ">
          <div
            ref={parentRef}
            className="parent relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {/* Left Column */}
            <div className="left flex flex-col justify-between order-1">
              {leftCards.map((card, i) => (
                <div
                  key={i}
                  className={`card  h-[350px] md:h-[400px] rounded-md bg-zinc-900 flex flex-col justify-around items-center mt-8 sm:mt-0 md:mt-20 `}
                >
                  <div className="img rounded-sm w-[94%] h-[160px] md:h-[200px] mx-auto overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl text-center bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent font-semibold">
                    {card.title}
                  </h2>
                  <p className="text-lg md:text-xl text-center text-zinc-400 px-3">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Column */}
            <div className="center mb-20 md:mb-0 order-3 md:order-2" ref={centerRef}>
              <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent px-4">
                  Refined digital craftsmanship for evolving lifestyle.
                </h2>
                <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-md">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="/pageimg/lensView.png"
                    alt="lensView"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="right flex flex-col justify-between space-y-20 lg:space-y-20 order-2 md:order-3">
              {rightCards.map((card, i) => (
                <div
                  key={i}
                  className={`card  h-[350px] md:h-[400px] rounded-md bg-zinc-900 flex flex-col justify-around items-center mt-8 sm:mt-0 md:mt-20  `}
                >
                  <div className="img rounded-sm w-[94%] h-[160px] md:h-[200px] mx-auto overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl text-center bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent font-semibold">
                    {card.title}
                  </h2>
                  <p className="text-lg md:text-xl text-center text-zinc-400 px-3">
                    {card.desc}
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
