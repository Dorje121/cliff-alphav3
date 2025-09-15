"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const CliffDriveClearLenses = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);

  // Feature Cards Data
  const featureCards = [
    {
      title: "Scratch Resistance",
      icon: "/svgs/scratchresistance.svg",
      benefits: ["• Better Durability", "• Protect Against Scratches"],
      bgColor: "from-gray-600/30 to-gray-500/30",
      textColor: "text-gray-200",
    },
    {
      title: "Low Reflection",
      icon: "/svgs/clearvision.svg",
      benefits: ["• Clearer and Sharper Image", "• Better Aesthetics"],
      bgColor: "from-gray-600/30 to-gray-500/30",
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
      bgColor: "from-gray-600/30 to-gray-500/30",
      textColor: "text-gray-200",
    },
    {
      title: "Blue Filter",
      icon: "/svgs/bluelight.svg",
      benefits: ["• Partially Filters Harmful Blue Rays"],
      bgColor: "from-blue-600/30 to-blue-500/30",
      textColor: "text-gray-200",
    },
    {
      title: "UV Protection",
      icon: "/svgs/uvprotection.svg",
      benefits: ["• As Recommended by WHO upto 400nm"],
      bgColor: "from-yellow-600/30 to-yellow-500/30",
      textColor: "text-gray-200",
    },
    {
      title: "Anti Glare Coating",
      icon: "/svgs/glareprotection.svg",
      benefits: [
        "• Reduce Distraction for reflection from Dashboard mirror",
        "• Comfortable Night Driving",
      ],
      bgColor: "from-purple-600/30 to-purple-500/30",
      textColor: "text-gray-200",
    },
  ];

  // Recommended For Data
  const recommendedFor = [
    "All day use purpose",
    "Driving at Night",
    "Short term Digital Device use",
  ];

  // Background Animation Elements Data
  const backgroundElements = [
    {
      position: "top-20 left-10",
      size: "w-72 h-72",
      color: "bg-green-600/20",
      delay: "",
    },
    {
      position: "bottom-20 right-10",
      size: "w-96 h-96",
      color: "bg-green-500/20",
      delay: "-1s",
    },
    {
      position: "top-1/2 left-1/2",
      size: "w-80 h-80",
      color: "bg-green-700/10",
      delay: "-0.5s",
    },
  ];

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
      <div className="h-[80vh] to-black text-white relative overflow-hidden">
        <div ref={backgroundImageRef} className="absolute inset-0 h-full">
          <img
            src="/c5.jpeg"
            alt="Cliff Drive Clear Lenses"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          {backgroundElements.map((element, index) => (
            <div
              key={index}
              className={`absolute ${element.position} ${element.size} ${element.color} rounded-full blur-3xl animate-pulse`}
              style={{ animationDelay: element.delay }}
            ></div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 container max-w-[1490px] mx-auto px-4 py-12 h-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-4">

              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent whitespace-nowrap">
                  CLIFF DRIVE
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  CLEAR LENSES
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Specialized lenses optimized for driving and enhanced road 
                visibility, ensuring safer and more comfortable driving 
                experiences.
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <button className="px-8 py-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full text-black font-semibold text-lg  transition-all duration-300 transform hover:scale-105">
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
              </div>
            </div>

            {/* Right Content - Enhanced Visual */}
            <div className="lg:w-1/2 relative">
              <div className="relative flex justify-center lg:justify-end lg:ml-2">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl w-[28rem]">
                  <Image
                    src="/c5.jpeg"
                    alt="Cliff Drive Clear Technology"
                    width={200}
                    height={300}
                    className="object-contain h-[300px] w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">06</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">Drive</div>
                    <div className="text-xs text-gray-400">Safe & Clear</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen  text-white overflow-hidden">
        <div className="max-w-screen mx-auto">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-white">CLIFF DRIVE </span>
                  <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                    CLEAR UV
                  </span>
                </div>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Advanced lens technology designed for optimal driving experience
                and all-day protection
              </p>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              {featureCards.map((feature, index) => (
                <motion.div
                  initial={{
                    x: -50,
                    opacity: 0,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                  key={index}
                >
                  <div
                    key={index}
                    className="bg-white/5 h-40 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={32}
                        height={32}
                        className="w-16 h-16 brightness-0 invert"
                      />
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-bold mb-2 ${feature.textColor}`}
                        >
                          {feature.title}
                        </h3>
                        <ul className="text-gray-300 space-y-1">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recommended For Section */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl p-6 lg:p-8 mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                Recommended For:
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {recommendedFor.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl"
                  >
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Table */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                Specifications
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="py-4 px-4 text-gray-300 font-semibold">
                        INDEX
                      </th>
                      <th className="py-4 px-4 text-center">
                        <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-4 py-2 rounded-lg font-bold">
                          POWER RANGE
                        </div>
                      </th>
                      <th className="py-4 px-4 text-gray-300 font-semibold text-right">
                        MRP
                      </th>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <th className="py-2 px-4"></th>
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
                      <th className="py-2 px-4"></th>
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
                        <span className="text-xl font-bold text-white">
                          4200
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-sm text-gray-400 text-center">
                All listed powers are resultant; cross-compound is not
                available.
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToServicesButton />
    </>
  );
};

export default CliffDriveClearLenses;
