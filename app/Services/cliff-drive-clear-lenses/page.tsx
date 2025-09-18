"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import TextWithTexture from "@/components/textwithgoldentexture";
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
      textColor: "text-gray-200",
    },
    {
      title: "Low Reflection",
      icon: "/svgs/clearvision.svg",
      benefits: ["• Clearer and Sharper Image", "• Better Aesthetics"],
      textColor: "text-gray-200",
    },
    {
      title: "Super Hydrophobic Coating",
      icon: "/svgs/easytoclean.svg",
      benefits: [
        "• Easy to Clean",
        "• Repels Dust and Water",
        "• Prolonged Cleanliness",
      ],
      textColor: "text-gray-200",
    },
    {
      title: "Blue Filter",
      icon: "/svgs/bluelight.svg",
      benefits: ["• Partially Filters Harmful Blue Rays"],
      textColor: "text-gray-200",
    },
    {
      title: "UV Protection",
      icon: "/svgs/uvprotection.svg",
      benefits: ["• As Recommended by WHO upto 400nm"],
      textColor: "text-gray-200",
    },
    {
      title: "Anti Glare Coating",
      icon: "/svgs/glareprotection.svg",
      benefits: [
        "• Reduce Distraction for reflection from Dashboard mirror",
        "• Comfortable Night Driving",
      ],
      textColor: "text-gray-200",
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
                backgroundImage="/bluesafe/drive.png"
                rightImage="/bluesafe/drive.png"
                serviceNumber="06"
                badgeTitle="4200"
                badgeSubtitle="MRP"
              />

      {/* Info Section with Fade-In List */}
      <section className="py-16">
        <div className="max-w-[1500px] mx-auto p-4">
          <div className="flex justify-center relative">
            <img
              src="/imAGES/pages.png"
              alt="Product Page"
              className="w-[800px] h-[500px] rounded-lg shadow-lg object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
            <div className="absolute top-0 right-166 w-8 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
            <div className="mt-4 max-w-9xl mx-auto">
              <div className="grid grid-cols-1">
                <div className="text-left mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Drive Clear UV</h3>
                  <ul className="space-y-8 right-16 text-gray-300">
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
                        className="flex items-start justify-start opacity-0 transform translate-y-6 transition-all duration-900 ease-out"
                      >
                        <span className="text-green-400 mr-2">✓</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Advanced lens technology designed for optimal driving experience
              and all-day protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {featureCards.map((feature, index) => (
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                key={index}
              >
                <div className="bg-white/5 h-40 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className="w-16 h-16 brightness-0 invert"
                    />
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${feature.textColor}`}>
                        {feature.title}
                      </h3>
                      <ul className="text-gray-300 space-y-1">
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
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl p-6 lg:p-8 mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Recommended For:
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {recommendedFor.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Specifications
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="py-4 px-4 text-gray-300 font-semibold">INDEX</th>
                    <th className="py-4 px-4 text-center">
                      <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-4 py-2 rounded-lg font-bold">
                        POWER RANGE
                      </div>
                    </th>
                    <th className="py-4 px-4 text-gray-300 font-semibold text-right">MRP</th>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <th></th>
                    <th className="py-2 px-4">
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="bg-gray-800 text-white px-2 py-1 rounded text-sm font-medium">
                          SPH
                        </div>
                        <div className="bg-gray-800 text-white px-2 py-1 rounded text-sm font-medium">
                          CYL
                        </div>
                      </div>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-white font-medium">1.60</td>
                    <td className="py-4 px-4">
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="text-gray-300">0.00 to -8.00</div>
                        <div className="text-gray-300">0.00 to -2.00</div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-xl font-bold text-white">4200</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm text-gray-400 text-center">
              All listed powers are resultant; cross-compound is not available.
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
