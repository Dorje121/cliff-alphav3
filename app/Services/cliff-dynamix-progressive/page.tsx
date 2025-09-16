"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import TextWithTexture from "@/components/textwithgoldentexture";
import Feature from "./Feature";
import Diff from './diff'

const CliffDynamixProgressive = () => {
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
  // Lens specifications data from the provided chart
  const lensSpecs = [
    {
      type: "Clear",
      index: "1.50",
      powerRange: "(+6/-6)",
      cyl: "Upto 4",
      hc: "4125",
      nox: "5435",
      bluesafe: "6040",
    },
    {
      type: "Clear",
      index: "1.56",
      powerRange: "(+6/-10)",
      cyl: "Upto 4",
      hc: "5225",
      nox: "7415",
      bluesafe: "8240",
    },
    {
      type: "Clear",
      index: "1.60",
      powerRange: "(+6/-12)",
      cyl: "Upto 4",
      hc: "8515",
      nox: "10625",
      bluesafe: "11815",
    },
    {
      type: "Clear",
      index: "1.67",
      powerRange: "(+6/-15)",
      cyl: "Upto 4",
      hc: "17030",
      nox: "18050",
      bluesafe: "20055",
    },
    {
      type: "Photocrom",
      index: "1.56",
      powerRange: "(+6/-15)",
      cyl: "Upto 4",
      hc: "5765",
      nox: "7170",
      bluesafe: "7965",
    },
    {
      type: "Photocrom Plus",
      index: "1.56",
      powerRange: "(+6/-15)",
      cyl: "Upto 4",
      hc: "7140",
      nox: "8405",
      bluesafe: "9340",
    },
    {
      type: "Photocrom with Blue Shield",
      index: "1.56",
      powerRange: "(+6/-8)",
      cyl: "Upto 4",
      hc: "9340",
      nox: "11375",
      bluesafe: "12640",
    },
    {
      type: "Blue Shield",
      index: "1.56",
      powerRange: "(+6/-15)",
      cyl: "Upto 4",
      hc: "5490",
      nox: "6675",
      bluesafe: "7415",
    },
    {
      type: "Blue Shield",
      index: "1.60",
      powerRange: "(+6/-12)",
      cyl: "Upto 4",
      hc: "10440",
      nox: "12365",
      bluesafe: "13740",
    },
    {
      type: "Polarized",
      index: "1.50",
      powerRange: "(+6/-8.00)",
      cyl: "Upto 4",
      hc: "10990",
      nox: "11615",
      bluesafe: "12915",
    },
  ];

  const features = [
    "Scratch Resistance",
    "Low Reflection",
    "Super Hydrophobic Coating",
    "Blue Filter",
    "UV Protection",
    "Anti Glare Coating",
    "Photochromic",
  ];

  const technology = [
    "Balanced Process Design",
    "Continuum Design Technology (6K Definition)",
    "Wear Fit Customization",
    "AdaptEase Technology",
  ];

  const benefits = [
    "Superior Vision at all distance",
    "Ultra Clarity",
    "Optimized Fit",
    "Easy of Adaptation",
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

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-violet-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container max-w-[1490px] mx-auto px-4 py-12 h-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-4">

              {/* Service Title */}

              <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight capitalize">
                <TextWithTexture
                  text="DYNAMIX"
                  className="text-5xl md:text-7xl mt-12 font-bold leading-tight"
                />
                <TextWithTexture
                  text="PROGRESSIVE"
                  className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent"
                />
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Dynamic progressive lenses with superior adaptation and comfort,
                featuring advanced technology for optimal vision at all distances.
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full text-black font-semibold text-lg  transition-all duration-300 transform hover:scale-105">
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
                <div className=" relative rounded-3xl overflow-hidden border h-[300px] border-white/20 shadow-2xl w-[28rem]">
                  <Image
                    src="/c9.jpeg"
                    alt="Cliff Dynamix Progressive Technology"
                    fill
                    className="object-cover object-center w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">10</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-[#333841] rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">6K</div>
                    <div className="text-xs text-gray-300">Definition</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen  text-white overflow-hidden">
        <div className="w-full px-4">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/20 rounded-full filter blur-3xl animate-pulse delay-500"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse delay-1500"></div>
          </div>

          <div className="relative  py-8 sm:py-12 lg:py-16">

            <Diff />

            <Feature />

            {/* Specifications Table */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                Lens Specifications
              </h2>
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-md p-6 lg:p-8 backdrop-blur-sm border border-white/10 overflow-x-auto">
                <table className="w-full text-sm border-collapse rounded-3xl">
                  <thead>
                    <tr className="bg-gray-800/50">
                      <th className="text-left p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          PARTICULARS
                        </span>
                      </th>
                      <th className="text-center p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          INDEX{" "}
                        </span>
                      </th>
                      <th className="text-center p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          POWER RANGE{" "}
                        </span>
                      </th>
                      <th className="text-center p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          CYL{" "}
                        </span>
                      </th>
                      <th className="text-center p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          HC{" "}
                        </span>
                      </th>
                      <th className="text-center p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          NOX{" "}
                        </span>
                      </th>
                      <th className="text-center p-3 border border-gray-600 font-semibold">
                        <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                          BLUESAFE{" "}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lensSpecs.map((spec, index) => {
                      if (index == 0) {
                        return (
                          <tr
                            key={index}
                            className="hover:bg-gray-700/20 transition-colors"
                          >
                            <td className="p-3  text-gray-300 border border-gray-600">
                              {spec.type}
                            </td>
                            <td className="p-3 text-center text-gray-300 border border-gray-600">
                              {spec.index}
                            </td>
                            <td className="p-3 text-center text-gray-300 border border-gray-600">
                              {spec.powerRange}
                            </td>
                            <td className="p-3 text-center text-gray-300 border border-gray-600">
                              {spec.cyl}
                            </td>
                            <td className="p-3 text-center text-gray-300 border border-gray-600">
                              {spec.hc}
                            </td>
                            <td className="p-3 text-center text-gray-300 border border-gray-600">
                              {spec.nox}
                            </td>
                            <td className="p-3 text-center text-gray-300 border border-gray-600">
                              {spec.bluesafe}
                            </td>
                          </tr>
                        )
                      }

                      return (
                        <tr
                          key={index}
                          className="hover:bg-gray-700/20 transition-colors"
                        >
                          <td className="p-3  text-gray-300 border border-gray-600">
                            {spec.type}
                          </td>
                          <td className="p-3 text-center text-gray-300 border border-gray-600">
                            {spec.index}
                          </td>
                          <td className="p-3 text-center text-gray-300 border border-gray-600">
                            {spec.powerRange}
                          </td>
                          <td className="p-3 text-center text-gray-300 border border-gray-600">
                            {spec.cyl}
                          </td>
                          <td className="p-3 text-center text-gray-300 border border-gray-600">
                            {spec.hc}
                          </td>
                          <td className="p-3 text-center text-gray-300 border border-gray-600">
                            {spec.nox}
                          </td>
                          <td className="p-3 text-center text-gray-300 border border-gray-600">
                            {spec.bluesafe}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <div className="mt-4 flex justify-between items-center ">
                  <p className="text-xs text-gray-400">
                    Power mentioned is resultant power.
                  </p>
                  <p className="text-xs text-gray-400">
                    Addition: +1.00 to +3.00
                  </p>
                </div>
              </div>
            </div>

            {/* Recommended For Section */}
            <div className="mb-12 lg:mb-16">
              <div className=" rounded-3xl p-6 lg:p-8 backdrop-blur-sm ">

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Recommended For
                </h2>
                <div className="space-y-4 text-gray-300 ">
                  <div className="flex items-center justify-center space-x-3">

                    <span>
                      Regular progressive lens users seeking enhanced comfort
                      and performance
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">

                    <span>
                      Individuals needing customized vision support for all
                      distances - near, intermediate, and far
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">

                    <span>
                      Users who demand high-definition clarity with minimal
                      aberrations and
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">

                    <span>Those seeking comfortable throughout the day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToServicesButton />
    </>
  );
};

export default CliffDynamixProgressive;
