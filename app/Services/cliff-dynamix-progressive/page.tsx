"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import TextWithTexture from "@/components/textwithgoldentexture";
import Feature from "./Feature";
import Diff from './diff'
import HeroSection from "@/components/Services/heropage";

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
      <section className="max-w-screen overflow-x-hidden">
        {/* Hero Section with Service Information */}
        <HeroSection
          title="DYNAMIX"
          subtitle="PROGRESSIVE"
          description="Dynamic progressive lenses with superior adaptation and comfort,
                  featuring advanced technology for optimal vision at all distances."
          backgroundImage="/c9.jpeg"
          rightImage="/c9.jpeg"
          serviceNumber="10"
          badgeTitle="6K"
          badgeSubtitle="Definition"
        />



        {/* Main Content */}
        <div className="min-h-screen  text-white overflow-hidden">
          <div className="w-full px-4 sm:px-6 md:px-7">


            <div className="relative  py-8 sm:py-12 lg:py-16">

              <Diff />

              <Feature />

              {/* Specifications Table */}
              <div className="mt-28 mb-12 lg:mb-16">
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

                      <span className="text-center">
                        Regular progressive lens users seeking enhanced comfort
                        and performance
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">

                      <span className="text-center">
                        Individuals needing customized vision support for all
                        distances - near, intermediate, and far
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">

                      <span className="text-center">
                        Users who demand high-definition clarity with minimal
                        aberrations and
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">

                      <span className="text-center">Those seeking comfortable throughout the day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BackToServicesButton />
      </section>
    </>
  );
};

export default CliffDynamixProgressive;
