"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import HeroSection from "@/components/Services/heropage";

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
      <HeroSection
        title="REFRACTIVE INDEX"
        subtitle="GUIDE"
        description="Complete guide to understanding refractive index values and
                their impact on lens thickness, weight, and optical performance
                for superior vision correction."
        backgroundImage="/ai4.jpg"
        rightImage="/ai4.jpg"
        serviceNumber="15"
        badgeTitle="1.74"
        badgeSubtitle="Max Index"
      />



      {/* Additional Information Section */}
      <div className="min-h-screen  text-white relative overflow-hidden">
        {/* Animated Background */  }
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
