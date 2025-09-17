"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import TextWithTexture from "@/components/textwithgoldentexture";

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
      id: "scratch",
      icon: "/svgs/scratchresistance.svg",
      title: "Scratch Resistance",
      benefits: ["Better Durability", "Protect Against Scratches"],
    },    
    {
      id: "clear",
      icon: "/svgs/clearvision.svg",
      title: "Clear Vision Reduced Reflection",
      benefits: ["Clearer and Sharper Image", "Better Aesthetics"],
    },
    {
      id: "slippery",
      icon: "/svgs/superslippery.svg",
      title: "Super Hydrophobic Coating",
      benefits: [
        "Easy to Clean",
        "Repels Dust and Water",
        "Prolonged Cleanliness",
      ],
    },
    {
      id: "bluelight",
      icon: "/svgs/bluelight.svg",
      title: "Blue Light Protection",
      benefits: [
        "Blocks harmful blue rays",
        "Allows beneficial blue light",
        "Better sleep cycle/ maintain circadian rhythm",
      ],
    },
    {
      id: "uv",
      icon: "/svgs/uvprotection.svg",
      title: "UV Protection",
      benefits: ["As Recommended by WHO up to 400nm"],
    },
    {
      id: "glare",
      icon: "/svgs/glareprotection.svg",
      title: "Glare Protection",
      benefits: ["Reduces eye strain", "Improves visual comfort"],
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
              <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight">
                <TextWithTexture
                  text="Cliff Blue Safe"
                  className="text-5xl md:text-7xl mt-12 font-bold leading-tight capitalize"
                />
                <TextWithTexture
                  text="UV Lenses"
                  className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent capitalize"
                />
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Complete blue light protection lenses for modern digital
                lifestyle. Advanced UV filtering technology protects your eyes
                from harmful blue light emitted by digital screens.
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <Link href="/Contact" className="group relative inline-block">
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
                </Link>
              </div>
            </div>

            {/* Right Content - Enhanced Visual */}
            <div className="lg:w-1/2 relative">
              <div className="relative flex justify-center lg:justify-end lg:ml-2">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl w-[28rem]">
                  <Image
                    src="/newimage/alibaba.avif"
                    alt="Cliff Blue Safe UV Technology"
                    width={200}
                    height={300}
                    className="object-cover h-[300px] w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 backdrop-blur-lg bg-white/20 rounded-2xl flex items-center justify-center shadow-lg ">
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold text-[#DFC65F] drop-shadow-lg">2400</div>
                    <div className="text-xs text-gray-200 mt-1 tracking-wider">MRP</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    

      <div className="min-h-screen text-white overflow-visible py-8">
        <div className="relative max-w-[1500px] mx-auto p-4 py-8 sm:py-12 lg:py-16">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Title & Features */}
            <div className="lg:col-span-2">
              {/* Title Section */}
              <div className="mb-12 pl-2">
                <span className="text-sm uppercase tracking-wider text-yellow-400 font-medium">Premium Lens Technology</span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
                  <span className="text-white">CLIFF </span>
                  <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                    BLUE SAFE UV
                  </span>
                </h1>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={feature.id}
                    className="text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-2">
                      {feature.title}
                    </h3>
                    {feature.benefits.length === 1 ? (
                      <p className="text-gray-300">{feature.benefits[0]}</p>
                    ) : (
                      <ul className="space-y-1">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-gray-300">
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Recommendations & Specifications */}
            <div className="lg:col-span-1">
              {/* Right Side - Combined Sticky Container */}
              <div className="sticky top-20 space-y-6 lg:pl-4">
                {/* Recommended For */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-lg shadow-2xl">
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

                {/* Power Range Table */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-lg shadow-2xl">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
                    POWER RANGE
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-white/10 backdrop-blur-sm">
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
                            className="border border-white/20 p-2 text-center text-white font-bold bg-white/10 backdrop-blur-sm"
                          >
                            1.56
                          </td>
                          <td className="border border-white/10 p-2 text-center text-gray-200 text-sm">
                            0.00 to -8.00
                          </td>
                          <td className="border border-white/10 p-2 text-center text-gray-200 text-sm">
                            0.00 to -3.00
                          </td>
                          <td
                            rowSpan={2}
                            className="border border-white/20 p-2 text-center text-white font-bold bg-white/10 backdrop-blur-sm"
                          >
                            2450
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-white/10 p-2 text-center text-gray-200 text-sm">
                            0.00 to +4.00
                          </td>
                          <td className="border border-white/10 p-2 text-center text-gray-200 text-sm">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                Advanced Blue Light Protection
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the perfect blend of style and protection with our cutting-edge lens technology
            </p>
          </div>
          
          <div className="relative max-w-[1470px] mx-auto w-full">
            <div className="relative w-full h-[700px]">
              <Image
                src="/pageimg/safe.png"
                alt="Cliff Blue Safe UV Technology"
                width={1000}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
             
            </div>
          </div>
        </div>
      </div>

      <BackToServicesButton />
    </>
  );
};

export default CliffBlueSafeLenses;
