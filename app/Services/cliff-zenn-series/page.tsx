"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import HeroSection from "@/components/Services/heropage";
import Benefits from "./benefits";

const CliffZennSeries = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background image continuous motion animation
      gsap.fromTo(
        backgroundImageRef.current,
        {
          scale: 1,
          rotation: 0,
        },
        {
          scale: 1.1,
          rotation: 0.5,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      {/* Hero Section with Service Information */}
      <HeroSection
        title="CLIFF ZENN"
        subtitle="SERIES"
        description="Premium lens series combining style with advanced optical
                performance for the most discerning vision needs."
        backgroundImage="/product/10.jpg"
        rightImage="/product/10.jpg"
        serviceNumber="08"
        badgeTitle="Zenn"
        badgeSubtitle="Premium"
      />



      <div className="min-h-screen  text-white overflow-hidden">
        {/* Animated Background */}
        <div className="max-w-screen mx-auto ">
          {/* Main Content */}
          <div className="relative z-10 px-4 sm:px-6 md:px-7 py-20  w-[100%]">
            {/* Hero Section with Statistics */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left Side - Statistics */}
              <div className=" h-full flex justify-between gap-10 items-start flex-col">

                <div className="mt-8">
                  <h2 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent sm:leading-relaxed">
                    Empower your vision to keep pace with a fast-moving, digital world.
                  </h2>
                  <p className="text-zinc-300 text-lg">
                    <span className="">
                      In an age where our eyes face countless hours of screens and devices, true clarity is more than sharp sight—it’s the confidence to stay focused, comfortable, and adaptable. The Cliff Zenn Series inspires you to embrace every challenge with lenses designed to protect and support your vision, so you can see—and live—without limits.
                    </span>

                  </p>
                </div>
                <div className="w-full   grid md:grid-cols-2 gap-10">
                  <div className="p-6  flex flex-col justify-center items-center gap-4  rounded-lg bg-zinc-900">
                    <div className="text-6xl font-bold text-white">+8h</div>
                    <div>
                      <div className="text-white text-[1.2rem] font-medium mb-2 text-center ">
                        We spend on average
                      </div>
                      <div className=" text-[1rem] text-zinc-400 mx-auto w-40 text-center">
                        each day in front of digital display
                      </div>
                    </div>
                  </div>



                  <div className="p-6  flex flex-col justify-center items-center gap-4   rounded-lg bg-zinc-900">
                    <div className="text-6xl font-bold text-white">+3</div>
                    <div>
                      <div className="text-white text-[1.2rem] font-medium mb-2 text-center">
                        We use on average
                      </div>
                      <div className="text-[1rem] text-zinc-400 mx-auto w-40 text-center">
                        different electric devices per day
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Side - Hero Image */}
              <div className=" w-full h-full">
                <div className="flex justify-center items-center relative w-full h-full">
                  <img className="object-cover object-center w-full h-full" src="/eye1-minii.webp" alt="eye" />

                  {/* Gradient overlay on top */}
                  <div className="absolute top-0 left-0 w-full h-[10%] bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
                </div>

              </div>
            </div>

            {/* Benefits Section */}
            <div className="text-center my-40">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed">
                  Benefits of CLIFF ZENN SERIES LENS
                </span>
              </h2>

              <Benefits />
            </div>
          </div>
        </div>
      </div>
      <BackToServicesButton />
    </>
  );
};

export default CliffZennSeries;
