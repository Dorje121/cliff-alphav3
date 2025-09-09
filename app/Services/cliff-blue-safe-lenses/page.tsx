"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const CliffBlueSafeLenses = () => {
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
  const features = [
    {
      icon: "/svgs/scratchresistance.svg",
      title: "Scratch Resistance",
      benefits: ["Better Durability", "Protect Against Scratches"],
    },
    {
      icon: "/svgs/antireflective.svg",
      title: "Low Reflection",
      benefits: ["Clearer and Sharper Image", "Better Aesthetics"],
    },
    {
      icon: "/svgs/easytoclean.svg",
      title: "Super Hydrophobic Coating",
      benefits: [
        "Easy to Clean",
        "Repels Dust and Water",
        "Prolonged Cleanliness",
      ],
    },
    {
      icon: "/svgs/bluelight.svg",
      title: "Blue Filter",
      benefits: [
        "Blocks harmful blue rays",
        "Allow beneficial blue rays to eye",
        "Better sleep cycle/ maintain circadian rhythm",
      ],
    },
    {
      icon: "/svgs/uvprotection.svg",
      title: "UV Protection",
      benefits: ["As Recommended by WHO upto 400nm"],
    },
  ];

  const recommendations = [
    "All day use purpose",
    "Digital gadget users",
    "Digital eye strain",
    "Computer vision syndrome (CVS)",
  ];

  return (
    <>
      {/* Hero Section with Service Information */}
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div ref={backgroundImageRef} className="absolute inset-0">
          <Image
            src="/c3.jpeg"
            alt="Cliff Blue Safe UV Lenses"
            fill
            className="object-cover opacity-20"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" /> */}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container max-w-screen mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 min-h-screen">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              {/* Service Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full  text-black text-lg font-medium border border-yellow-300/30">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Complete Blue Light Protection
                </span>
              </div>

              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  CLIFF BLUE SAFE
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  UV LENSES
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Complete blue light protection lenses for modern digital
                lifestyle, providing comprehensive eye protection and visual
                comfort.
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
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/c3.jpeg"
                    alt="Cliff Blue Safe UV Technology"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">04</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 w-32 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">UV</div>
                    <div className="text-xs text-gray-400">Protected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen  text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">CLIFF </span>
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  BLUE SAFE UV
                </span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-screen mx-auto">
            {/* Left Column - Features */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    initial={{
                      x: -50,
                      opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.5 }}
                    key={index}
                    className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain filter brightness-0 invert"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                          {feature.title}
                        </h3>
                        <div className="space-y-1">
                          {feature.benefits.map((benefit, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-gray-300"
                            >
                              <span className="text-yellow-400">-</span>
                              <span className="text-sm sm:text-base">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Recommendations & Specifications */}
            <div className="space-y-6">
              {/* Recommended For */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                    Recommended For:
                  </h3>
                  <div className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-yellow-400">•</span>
                        <span className="text-gray-300 text-sm sm:text-base">
                          {rec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Power Range Table */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
                    POWER RANGE
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-800/50">
                          <th className="border border-gray-600 p-2 text-center text-white font-bold">
                            INDEX
                          </th>
                          <th className="border border-gray-600 p-2 text-center text-white font-bold">
                            SPH
                          </th>
                          <th className="border border-gray-600 p-2 text-center text-white font-bold">
                            CYL
                          </th>
                          <th className="border border-gray-600 p-2 text-center text-white font-bold">
                            MRP
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            rowSpan={2}
                            className="border border-gray-600 p-2 text-center text-white font-bold bg-gray-800/30"
                          >
                            1.56
                          </td>
                          <td className="border border-gray-600 p-2 text-center text-gray-300 text-sm">
                            0.00 to -8.00
                          </td>
                          <td className="border border-gray-600 p-2 text-center text-gray-300 text-sm">
                            0.00 to -3.00
                          </td>
                          <td
                            rowSpan={2}
                            className="border border-gray-600 p-2 text-center text-white font-bold bg-gray-800/30"
                          >
                            2450
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-600 p-2 text-center text-gray-300 text-sm">
                            0.00 to +4.00
                          </td>
                          <td className="border border-gray-600 p-2 text-center text-gray-300 text-sm">
                            0.00 to -2.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-gray-400 mt-3 italic">
                    All listed powers are resultant; cross-compound is not
                    available.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <BackToServicesButton />
    </>
  );
};

export default CliffBlueSafeLenses;
