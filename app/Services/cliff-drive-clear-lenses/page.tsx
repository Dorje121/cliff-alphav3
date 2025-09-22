"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import HeroSection from "@/components/Services/heropage";

const CliffDriveClearLenses = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  // Background Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
    });
    return () => ctx.revert();
  }, []);

  // Intersection Observer for list fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const featureCards = [
    {
      title: "Scratch Resistance",
      icon: "/svgs/scratchresistance.svg",
      benefits: ["• Better Durability", "• Protect Against Scratches"],
      textColor: "text-zinc-200",
    },
    {
      title: "Low Reflection",
      icon: "/svgs/clearvision.svg",
      benefits: ["• Clearer and Sharper Image", "• Better Aesthetics"],
      textColor: "text-zinc-200",
    },
    {
      title: "Super Hydrophobic Coating",
      icon: "/svgs/easytoclean.svg",
      benefits: [
        "• Easy to Clean",
        "• Repels Dust and Water",
        "• Prolonged Cleanliness",
      ],
      textColor: "text-zinc-200",
    },
    {
      title: "Blue Filter",
      icon: "/svgs/bluelight.svg",
      benefits: ["• Partially Filters Harmful Blue Rays"],
      textColor: "text-zinc-200",
    },
    {
      title: "UV Protection",
      icon: "/svgs/uvprotection.svg",
      benefits: ["• As Recommended by WHO upto 400nm"],
      textColor: "text-zinc-200",
    },
    {
      title: "Anti Glare Coating",
      icon: "/svgs/glareprotection.svg",
      benefits: [
        "• Reduce Distraction for reflection from Dashboard mirror",
        "• Comfortable Night Driving",
      ],
      textColor: "text-zinc-200",
    },
  ];

  const recommendedFor = [
    "All day use purpose",
    "Driving at Night",
    "Short term Digital Device use",
  ];

  return (
    <>

      <HeroSection
        title="Cliff Drive Clear"
        subtitle="UV Lenses"
        description="Specialized lenses optimized for driving and enhanced road visibility, ensuring safer and more comfortable driving experiences."
        backgroundImage="/product/5.jpg"
        rightImage="/product/5.jpg"
        serviceNumber="05"
        badgeTitle="4200"
        badgeSubtitle="MRP"
      />

      {/* Info Section with Fade-In List */}
      <section className="py-16 bg-black">
        <div className="max-w-[1500px] mx-auto p-4">
          <div className="flex flex-col md:flex-row justify-center items-center relative gap-8">

            {/* Image */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              <img
                src="/imAGES/pages.png"
                alt="Product Page"
                className="w-full max-w-[800px] h-auto rounded-lg shadow-lg object-cover"
              />
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
              <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 max-w-xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center md:text-left">
                Our Drive Clear UV
              </h3>
              <ul className="space-y-4 sm:space-y-6 text-zinc-300">
                {[
                  "Superior UV protection for safe driving",
                  "Crystal clear vision in all conditions",
                  "Anti-glare technology for night driving",
                  "Scratch-resistant coating",
                  "Water-repellent surface for easy cleaning",
                  "Reduced eye strain during long drives",
                  "Enhanced contrast for better road visibility",
                ].map((text, i) => (
                  <li
                    key={i}
                    ref={(el) => {
                      itemsRef.current[i] = el;
                    }}
                    className="flex items-start justify-start opacity-0 transform translate-y-4 transition-all duration-700 ease-out"
                  >
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span className="text-sm sm:text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* Features */}
      <div className="min-h-screen text-white overflow-hidden">
        <div className="relative max-w-[1500px] mx-auto p-4 py-2">
          <div className="text-center mb-16">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">CLIFF DRIVE </span>
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                CLEAR UV
              </span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto mb-8 px-4">
              Advanced lens technology designed for optimal driving experience
              and all-day protection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {featureCards.map((feature, index) => (
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                key={index}
              >
                <div className="bg-white/5 h-auto sm:h-40 rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className="w-14 sm:w-16 h-14 sm:h-16 brightness-0 invert"
                    />
                    <div className="flex-1">
                      <h3 className={`text-lg sm:text-xl font-bold mb-2 ${feature.textColor}`}>
                        {feature.title}
                      </h3>
                      <ul className="text-zinc-300 space-y-1 text-sm sm:text-base">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


          {/* Recommended */}
          <div className="bg-gradient-to-br from-zinc-800/30 to-zinc-700/30 rounded-2xl p-6 lg:p-8 mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-zinc-300 to-white bg-clip-text text-transparent">
              Recommended For:
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {recommendedFor.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
                  <span className="text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/70 rounded-3xl p-8 lg:p-10 backdrop-blur-md border border-zinc-700/50 shadow-2xl shadow-yellow-500/10">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Specifications
              </h3>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-2xl overflow-hidden border border-zinc-600/50 shadow-xl">
              {/* Table Header */}
              <div className=" border-b border-zinc-600/50 px-6 py-4">
                <h4 className="text-xl font-bold text-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-400 bg-clip-text text-transparent">
                    Cliff Drive Clear UV Pricing
                  </span>
                </h4>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-zinc-800/70 to-zinc-900/70 border-b border-zinc-600/50">
                      <th className="py-6 px-6 text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
                          <span className="text-xl font-bold text-white">INDEX</span>
                        </div>
                      </th>
                      <th className="py-6 px-6 text-center bg-gradient-to-br from-zinc-800/80 to-zinc-900/80">
                        <div className="space-y-3">
                          <div className="text-xl font-bold text-white">POWER RANGE</div>
                          <div className="flex justify-center gap-4">
                            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30">
                              SPH
                            </span>
                            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30">
                              CYL
                            </span>
                          </div>
                        </div>
                      </th>
                      <th className="py-6 px-6 text-center">
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-xl font-bold text-white">MRP</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-700/50 hover:bg-gradient-to-r hover:from-zinc-800/40 hover:to-zinc-900/40 transition-all duration-300 group">
                      <td className="py-6 px-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-14 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border border-yellow-500/30 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-xl font-bold text-yellow-300">1.60</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-lg font-semibold text-white">Index 1.60</span>
                            <span className="text-sm text-zinc-400">High Quality</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center bg-gradient-to-br from-zinc-800/30 to-zinc-900/30">
                        <div className="space-y-3">
                          <div className="flex justify-center gap-8">
                            <div className="text-center">
                              <div className="text-lg font-semibold text-yellow-300">0.00 to -8.00</div>
                              <div className="text-xs text-zinc-500 uppercase tracking-wider">Spherical</div>
                            </div>
                            <div className="w-px bg-zinc-600"></div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-orange-300">0.00 to -2.00</div>
                              <div className="text-xs text-zinc-500 uppercase tracking-wider">Cylindrical</div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <div className="text-3xl font-bold ">
                            ₹4200
                          </div>
                          <div className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30">
                            Premium Quality
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

      <BackToServicesButton />

      {/* Custom CSS */}
      <style jsx>{`
        .animate-fadeInUp {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </>
  );
};

export default CliffDriveClearLenses;
