"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import TextWithTexture from "@/components/textwithgoldentexture";
import Feature from "./Feature";
import Diff from './diff'
import HeroSection from "@/components/Services/heropage";
import LensTable from "./lenstable";

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


              <LensTable />

              {/* Recommended For Section */}
              <div className="mb-12 lg:mb-16">
                <div className=" rounded-3xl p-6 lg:p-8 backdrop-blur-sm ">

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                    Recommended For
                  </h2>
                  <div className="space-y-4 text-zinc-300 ">
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
