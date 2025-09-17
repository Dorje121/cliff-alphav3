"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Data from "./Data";
import Link from "next/link";
import TextWithTexture from "@/components/textwithgoldentexture";

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
        <div className="h-[90vh] to-black text-white relative overflow-hidden">


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


          {/* Main Content */}
          <div className="relative z-10 container max-w-[1490px] mx-auto px-4 py-12 h-full">
            <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
              {/* Left Content */}
              <div className="lg:w-1/2 space-y-4">
                {/* Service Title */}

                <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight capitalize">
                  <TextWithTexture
                    text="CLIFF ZENN"
                    className="text-5xl md:text-7xl mt-12 font-bold leading-tight"
                  />
                  <TextWithTexture
                    text="Progressive lenses"
                    className="uppercase bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent"
                  />
                </h1>


                {/* Service Description */}
                <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                  The most versatile design for Single Vision Lenses with 76% more
                  stability and better vision in all gaze directions.
                </p>


                {/* CTA Button */}
                <div className="pt-8">
                  <Link href="/Contact" className="group relative inline-block">
                    <button className="px-8 py-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full text-black font-semibold text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105">
                      <span className="relative z-10 flex items-center justify-center">
                        Contact Us
                        <svg
                          className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Content - Enhanced Visual */}
              <div className="lg:w-1/2 relative">
                <div className="relative flex justify-center lg:justify-end lg:ml-2">
                  {/* Main Image Container */}
                  <div className="relative rounded-3xl overflow-hidden border border-white/20 h-[300px] shadow-2xl w-[28rem]">
                    <Image
                      src="/ai0.jpg"
                      alt="Cliff Zenn Single Vision Collection"
                      fill
                      className="object-cover object-center w-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Service Number Overlay */}
                    <div className="absolute top-6 right-6">
                      <span className="text-6xl font-bold text-white/30">13</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">Zenn</div>
                      <div className="text-xs text-gray-400">Progressive lens</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


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
