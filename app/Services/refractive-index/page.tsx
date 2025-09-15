"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const RefractiveIndex = () => {
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
      {/* Hero Section with Service Information */}
      <div className="h-[80vh] to-black text-white relative overflow-hidden">
        <div ref={backgroundImageRef} className="absolute inset-0 h-full">
          <img
            src="/ai4.jpg"
            alt="Refractive Index Guide"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0 opacity-90">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "-0.5s" }}
          ></div>
          ></div>
        </div> */}

        {/* Main Content */}
        <div className="relative z-10 container max-w-[1490px] mx-auto px-4 py-12 h-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-4">

              {/* Service Title */}
              <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent whitespace-nowrap">
                  REFRACTIVE INDEX
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  GUIDE
                </span>
              </h1>

              {/* Service Description */}
              <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
                Complete guide to understanding refractive index values and
                their impact on lens thickness, weight, and optical performance
                for superior vision correction.
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
                    src="/ai4.jpg"
                    alt="Refractive Index Technology"
                    width={200}
                    height={300}
                    className="object-contain h-[300px] w-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Service Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-white/30">15</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1.74</div>
                    <div className="text-xs ">Max Index</div>
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
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1
                className="text-6xl md:text-8xl font-bold mb-6 
 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent"
              >
                Understanding Refractive Index
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Master the science behind lens performance and make informed
                decisions about your vision correction
              </p>
            </div>

            {/* Index Comparison Chart */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {[
                {
                  index: "1.50",
                  thickness: "100%",
                  material: "CR-39",
                  color: "from-gray-800 to-gray-700",
                },
                {
                  index: "1.56",
                  thickness: "85%",
                  material: "Mid-Index",
                  color: "from-gray-600 to-gray-500",
                },
                {
                  index: "1.67",
                  thickness: "70%",
                  material: "High-Index",
                  color: "from-gray-400 to-gray-300",
                },
                {
                  index: "1.74",
                  thickness: "55%",
                  material: "Ultra-Thin",
                  color: "from-gray-200 to-white",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all duration-500 transform hover:scale-105"
                >
                  <div className="backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                    {/* Index Number */}
                    <div className="text-4xl font-bold mb-4 text-center">
                      <span
                        className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                      >
                        {item.index}
                      </span>
                    </div>

                    {/* Material Type */}
                    <h3 className="text-xl font-bold mb-4 text-center text-white">
                      {item.material}
                    </h3>

                    {/* Thickness Indicator */}
                    <div className="flex-grow flex flex-col justify-center">
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-gray-300">
                          {item.thickness}
                        </div>
                        <div className="text-sm text-gray-400">
                          Relative Thickness
                        </div>
                      </div>

                      {/* Visual Thickness Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                        <div
                          className={`bg-gradient-to-r ${item.color} h-4 rounded-full transition-all duration-1000`}
                          style={{ width: item.thickness }}
                        ></div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="text-sm text-gray-300 text-center">
                      {index === 0 && "Standard thickness"}
                      {index === 1 && "Good balance"}
                      {index === 2 && "Significantly thinner"}
                      {index === 3 && "Ultra-thin & light"}
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

export default RefractiveIndex;
