"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React from "react";

const ProgressiveMeasurementChart = () => {
  return (
    <>
      {/* Hero Section with Service Information */}
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/progreesive.png"
            alt="Progressive Measurement Chart"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container max-w-screen mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 min-h-screen">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              {/* Service Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-400/20 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent text-lg font-medium border border-yellow-400/30">
                Measurement Guide
              </div>

              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  PROGRESSIVE
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  MEASUREMENT CHART
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Comprehensive measurement guide for progressive lenses ensuring
                precise fitting, optimal visual zones, and superior comfort for
                every prescription.
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105">
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
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/progreesive.png"
                    alt="Progressive Measurement Technology"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">14</span>
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="absolute -bottom-6 -left-6 w-32 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs ">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="min-h-screen  text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-screen mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl py-6 font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                Progressive{" "}
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Measurement Guide
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Master the art of progressive lens fitting with our
                comprehensive measurement chart and professional guidelines
              </p>
            </div>

            {/* Measurement Steps Chart */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  step: "01",
                  title: "Initial Assessment",
                  description: "Patient consultation and frame selection",
                },
                {
                  step: "02",
                  title: "Precise Measurements",
                  description:
                    "Pupil distance, segment height, and fitting cross",
                },
                {
                  step: "03",
                  title: "Final Verification",
                  description: "Quality check and fitting adjustment",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all duration-500 transform hover:scale-105"
                >
                  <div className="backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                    {/* Step Number */}
                    <div className="text-6xl font-bold mb-4 text-center opacity-20">
                      {item.step}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <div className="flex-grow flex flex-col justify-center">
                      <p className="text-gray-300 text-center leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BackToServicesButton />
    </>
  );
};

export default ProgressiveMeasurementChart;
