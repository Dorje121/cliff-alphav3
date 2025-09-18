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
        backgroundImage="/imAGES/clear.webp"
        rightImage="/imAGES/clear.webp"
        serviceNumber="05"
        badgeTitle="4800"
        badgeSubtitle="MRP"
      />

      <div className="py-8 bg-black border-t border-gray-800">
        <div className="max-w-[1500px] mx-auto p-4">

        <div className="mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-xl font-bold">
                      INDEX
                    </th>
                    <th className="px-6 py-4 text-center text-xl font-bold bg-gray-700 text-white">
                      <div className="space-y-1">
                        <div>POWER RANGE</div>
                        <div className="flex justify-center gap-4">
                          <span>SPH</span>
                          <span>CYL</span>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-xl font-bold">
                      MRP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700 last:border-b-0">
                    <td className="px-6 py-4 text-xl font-semibold">1.56</td>
                    <td className="px-6 py-4 text-center bg-gray-700/50">
                      <div className="flex justify-center gap-8">
                        <span>0.00 to -6.00</span>
                        <span>0.00 to -2.00</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-xl font-bold">
                      4800
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center text-gray-400 py-8">
                   <p className="text-sm">
                    All listed powers are resultant; cross-compound is not available.
               </p>
                </div>
          </div>
        </div>

      </div>
      </div>
      
      {/* Content Section - Ensure it appears below hero */}
      <div className="relative bg-black ">


        {/* Timeline Section */}
        <div className="py-20 bg-black border-t border-gray-800 mt-8">
          <div className="max-w-7xl mx-auto px-4">
            {/* Inline TimelineDemo */}
            <div className="relative w-full">
              <div className="relative w-full">
                <Timeline data={[
                  {
                    title: "Scratch Resistance",
                    content: (
                      <div>
                        <p className="text-gray-300 text-xl md:text-xl font-normal mb-8">
                        - Better Durability <br />
                        The coating is designed to provide better durability, ensuring your lenses last longer even with daily use.
                        </p>
                        <p className="text-gray-300 text-xl md:text-xl font-normal mb-8">
                        -  Protect Against Scratches
                        <br />
                        It helps protect your lenses against scratches, keeping them clear and maintaining visual quality over time..
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <Image
                            src="/imAGES/scratch.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                          />
                          <Image
                              src="/imAGES/scratch.png"                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                          />
                         
                        </div>
                      </div>
                    ),
                  },
                  {
                    title: "Low Reflection",
                    content: (
                      <div>
                        <p className="text-gray-300 text-xl md:text-xl font-normal mb-8">
                        - Better Durability <br />
                        The coating is designed to provide better durability, ensuring your lenses last longer even with daily use.
                        </p>
                        <p className="text-gray-300 text-xl md:text-xl font-normal mb-8">
                        -  Protect Against Scratches
                        <br />
                        It helps protect your lenses against scratches, keeping them clear and maintaining visual quality over time..
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <Image
                            src="/images/clear.webp"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                          />
                          <Image
                            src="/images/clear.webp"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                          />
                        </div>
                      </div>
                    ),
                  },
                  {
                    title: "Super Hydrophobic Coating",
                    content: (
                      <div>
                        <p className="text-gray-300 text-xl md:text-xl font-normal mb-8">
                        - Better Durability <br />
                        The coating is designed to provide better durability, ensuring your lenses last longer even with daily use.
                        </p>
                        <p className="text-gray-300 text-xl md:text-xl font-normal mb-8">
                        -  Protect Against Scratches
                        <br />
                        It helps protect your lenses against scratches, keeping them clear and maintaining visual quality over time..
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <Image
                            src="/images/clear.webp"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                          />
                          <Image
                            src="/images/clear.webp"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                          />
                        </div>
                      </div>
                    ),
                  },
                  {
                    title: "UV Protection",
                    content: (
                      <div>
                        <p className="text-gray-300 text-xl md:text-xl font-normal mb-8">
                        - Better Durability <br />
                        The coating is designed to provide better durability, ensuring your lenses last longer even with daily use.
                        </p>
                        <p className="text-gray-300 text-xl md:text-xl font-normal mb-8">
                        -  Protect Against Scratches
                        <br />
                        It helps protect your lenses against scratches, keeping them clear and maintaining visual quality over time..
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <Image
                            src="/images/clear.webp"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                          />
                          <Image
                            src="/images/clear.webp"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                          />
                         
                        </div>
                      </div>
                    ),
                  },
                  {
                    title: "Blue Filter",
                    content: (
                      <div>
                        <p className="text-gray-300 text-xl md:text-xl font-normal mb-8">
                        - Better Durability <br />
                        The coating is designed to provide better durability, ensuring your lenses last longer even with daily use.
                        </p>
                        <p className="text-gray-300 text-xl md:text-xl font-normal mb-8">
                        -  Protect Against Scratches
                        <br />
                        It helps protect your lenses against scratches, keeping them clear and maintaining visual quality over time..
                        </p>
                       
                        <div className="grid grid-cols-2 gap-4">
                          <Image
                            src="/images/clear.webp"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                          />
                          <Image
                            src="/images/clear.webp"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                          />
                         
                        </div>
                      </div>
                    ),
                  },
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
