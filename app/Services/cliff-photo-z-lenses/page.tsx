"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import HeroSection from "@/components/Services/heropage";
import { Timeline } from "@/components/Services/cliffphotoz/timeline";

const CliffPhotoZLenses = () => {
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
      <HeroSection
        title="Cliff Photo-Z"
        subtitle="UV Lenses"
        description="Photochromic lenses that adapt to changing light conditions automatically, providing seamless comfort from indoor to outdoor environments."
        backgroundImage="/product/04.jpeg"
        rightImage="/product/04.jpeg"
        serviceNumber="04"
        badgeTitle="4800"
        badgeSubtitle="MRP"
      />

      <div className="py-8 bg-black border-t border-zinc-800">
        <div className="max-w-[1500px] mx-auto p-4">

          <div className="my-16">
            <div className="bg-gradient-to-br from-zinc-900/90 to-black/80 backdrop-blur-md rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-yellow-500/10">
              {/* Table Header with Gradient */}
              <div className=" border-b border-zinc-600/50 px-6 py-4">
                <h3 className="text-2xl font-bold text-white text-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-400 bg-clip-text text-transparent">
                    Cliff Photo-Z Pricing
                  </span>
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border-b border-zinc-600/50">
                      <th className="w-1/3 px-8 py-6 text-left">
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold text-white">INDEX</span>
                        </div>
                      </th>
                      <th className="w-1/3 px-8 py-6 text-center bg-gradient-to-br from-zinc-800/20 to-zinc-900/20">
                        <div className="space-y-2">
                          <div className="text-xl font-bold text-white">POWER RANGE</div>
                          <div className="flex justify-center gap-6">
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30">
                              SPH
                            </span>
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30">
                              CYL
                            </span>
                          </div>
                        </div>
                      </th>
                      <th className="w-1/3 px-8 py-6 text-center">
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-xl font-bold text-white">MRP</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-700/50 hover:bg-gradient-to-r hover:from-zinc-800/30 hover:to-zinc-900/30 transition-all duration-300 group">
                      <td className="w-1/3 px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-sm flex items-center justify-center border border-yellow-500/30 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-xl font-bold text-yellow-300">1.56</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-lg font-semibold text-white">Index 1.56</span>
                            <span className="text-sm text-zinc-400">Standard Quality</span>
                          </div>
                        </div>
                      </td>
                      <td className="w-1/3 px-8 py-6 text-center bg-gradient-to-br from-zinc-800/30 to-zinc-900/30">
                        <div className="space-y-3">
                          <div className="flex justify-center gap-8">
                            <div className="text-center">
                              <div className="text-lg font-semibold text-yellow-300">0.00 to -6.00</div>
                              <div className="text-xs text-zinc-500 uppercase tracking-wider">Spherical</div>
                            </div>
                            <div className="w-px bg-zinc-600"></div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-yellow-300">0.00 to -2.00</div>
                              <div className="text-xs text-zinc-500 uppercase tracking-wider">Cylindrical</div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="w-1/3 px-8 py-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <div className="text-3xl font-bold  ">
                            ₹4800
                          </div>
                          <div className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30">
                            Best Value
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>


            </div>
          </div>

        </div>
      </div>

      {/* Content Section - Ensure it appears below hero */}
      <div className="relative bg-black ">


        {/* Timeline Section */}
        <div className="py-20 bg-black border-t border-zinc-800 mt-8">
          <div className="max-w-7xl mx-auto px-4">
            {/* Inline TimelineDemo */}
            <div className="relative w-full">
              <div className="relative w-full">
                <Timeline data={[
                  {
                    title: "Scratch Resistance",
                    content: (
                      <div>
                        <p className="text-zinc-300 text-xl md:text-xl font-normal mb-8">
                          - Better Durability <br />
                          The coating is designed to provide better durability, ensuring your lenses last longer even with daily use.
                        </p>
                        <p className="text-zinc-300 text-xl md:text-xl font-normal mb-8">
                          - Protect Against Scratches <br />
                          It helps protect your lenses against scratches, keeping them clear and maintaining visual quality over time.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <Image src="/feature/scratch1.jpg" alt="scratch protection lens" width={500} height={500} className="rounded-lg border border-white/20 object-contain h-20 md:h-44 lg:h-60 w-full" />
                          <Image src="/feature/scratch2.jpg" alt="lens durability" width={500} height={500} className="rounded-lg border border-white/20 object-contain h-20 md:h-44 lg:h-60 w-full" />
                        </div>
                      </div>
                    ),
                    url: "/svgs/scratchresistance.svg"
                  },
                  {
                    title: "Low Reflection",
                    content: (
                      <div>
                        <p className="text-zinc-300 text-xl md:text-xl font-normal mb-8">
                          - Clearer Vision <br />
                          Reduces glare from screens, headlights, and bright lights, allowing more comfortable vision during day and night.
                        </p>
                        <p className="text-zinc-300 text-xl md:text-xl font-normal mb-8">
                          - Enhanced Aesthetics <br />
                          Minimizes distracting reflections on your lenses so your eyes remain visible and natural in photos and conversations.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <Image src="/feature/second1.jpg" alt="anti reflection lens" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                          <Image src="/feature/second2.jpg" alt="clear lens view" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                        </div>
                      </div>
                    ),
                    url: "/svgs/clearvision.svg"
                  },
                  {
                    title: "Super Hydrophobic Coating",
                    content: (
                      <div>
                        <p className="text-zinc-300 text-xl md:text-xl font-normal mb-8">
                          - Water Repellent <br />
                          Special nano-coating prevents water droplets from sticking, keeping your vision clear during rain or humidity.
                        </p>
                        <p className="text-zinc-300 text-xl md:text-xl font-normal mb-8">
                          - Easy Cleaning <br />
                          Resists fingerprints, dust, and smudges so lenses stay cleaner for longer with minimal maintenance.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <Image src="/feature/third1.jpg" alt="hydrophobic lens" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                          <Image src="/feature/third2.jpg" alt="water resistant lens" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                        </div>
                      </div>
                    ),
                    url: "/svgs/superslippery.svg"
                  },
                  {
                    title: "UV Protection",
                    content: (
                      <div>
                        <p className="text-zinc-300 text-xl md:text-xl font-normal mb-8">
                          - Eye Safety <br />
                          Blocks harmful UVA and UVB rays, reducing the risk of long-term eye conditions caused by sun exposure.
                        </p>
                        <p className="text-zinc-300 text-xl md:text-xl font-normal mb-8">
                          - Outdoor Comfort <br />
                          Provides comfortable vision in bright environments by filtering out invisible ultraviolet radiation.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <Image src="/feature/fourth1.jpg" alt="uv protection lens" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                          <Image src="/feature/fourth2.jpg" alt="sunlight lens protection" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                        </div>
                      </div>
                    ),
                    url: "/svgs/uvprotection.svg"
                  },
                  {
                    title: "Yellow Filter",
                    content: (
                      <div>
                        <p className="text-zinc-300 text-xl md:text-xl font-normal mb-8">
                          - Night Driving Clarity <br />
                          Reduces glare from oncoming headlights and streetlights, making night driving safer and more comfortable.
                        </p>
                        <p className="text-zinc-300 text-xl md:text-xl font-normal mb-8">
                          - Blue Light Balance <br />
                          Helps reduce eye strain from digital screens while enhancing contrast for sharper vision in low light.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <Image src="/feature/fifth1.jpg" alt="yellow filter lens" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                          <Image src="/feature/fifth2.jpg" alt="anti glare yellow lens" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
                        </div>
                      </div>
                    ),
                    url: "/svgs/glareprotection.svg"
                  }
                ]} />

              </div>
            </div>
          </div>
        </div>

      </div>
      <BackToServicesButton />
    </>
  );
};

export default CliffPhotoZLenses;
