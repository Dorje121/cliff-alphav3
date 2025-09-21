"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import HeroSection from "@/components/Services/heropage";
import Image from "next/image";

const CliffTechnology = () => {
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

      <HeroSection
        title="Cliff Technology"
        subtitle="Innovation"
        description="Cutting-edge optical technology and innovation solutions that push the boundaries of vision science and lens engineering."
        backgroundImage="/imAGES/technology.png"
        rightImage="/imAGES/technology.png"
        serviceNumber="08"
        badgeTitle="TECH"
        badgeSubtitle="INNOVATION"
      />

      {/* Main Content Section */}
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        <div className="max-w-[1500px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">

          {/* Intro Paragraph */}
          <div className="w-full mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                Cutting-edge optical technology and innovation solutions that push the boundaries of vision science and lens engineering.
                Our advanced technologies ensure superior visual performance, comfort, and precision for every user.
              </p>
            </div>
          </div>

          {/* Technology Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

            {/* Technology 1 - Psicoptix */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-[#FFD700] font-bold text-5xl">1</span>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-white">Psicoptix Technology</span>
                  <span className="text-[#FFD700]">™</span>
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Psicoptix™ Technology merges advanced optics with visual neuroscience to deliver sharper, natural, and adaptive vision - enhancing how the brain interprets images.
              </p>
              <div className="relative w-full ">
                <img
                  src="/product/1.jpg"
                  alt="Psicoptix Technology"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Technology 2 - CDT */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-[#FFD700] font-bold text-5xl">2</span>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-white">CDT® (Continuum Design)</span>
                  <span className="text-[#FFD700]"> 8K Definition</span>
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                CDT® (Continuum Design) 8K - Our advanced design ensures ultra-high resolution lenses (up to 8x more optical definition than standard Freeform) for superior clarity and wider visual fields.
              </p>
              <div className="relative w-full ">
                <img
                  src="/product/2.jpg"
                  alt="CDT Technology"
                  className="w-full h-auto object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = '/ee.jpg';
                    e.currentTarget.className = 'w-full h-auto object-cover rounded-xl';
                  }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-b from-gray-900/50 to-gray-900/10 p-4 rounded-xl border border-gray-800">
                  <p className="text-sm text-gray-300">Allows up to quadruple the density of points on the optical surface</p>
                </div>
                <div className="bg-gradient-to-b from-gray-900/50 to-gray-900/10 p-4 rounded-xl border border-gray-800">
                  <p className="text-sm text-gray-300">Conventional lenses with interpolation technology based on discontinuous points matrix</p>
                </div>
              </div>
            </div>

            {/* Technology 3 - WearFit */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-[#FFD700] font-bold text-5xl">3</span>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-white">WearFit</span>
                  <span className="text-[#FFD700]">™ Customization</span>
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                WearFit™ Customization - Lenses tailored for you based on your unique measurements like pupillary distance, vertex, panoramic and pantoscopic angles - for unmatched comfort and precision.
              </p>
              <div className="relative w-full ">
                <img
                  src="/product/3.jpg"
                  alt="WearFit Customization"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Technology 4 - Thickness Control */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-[#FFD700] font-bold text-5xl">4</span>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-white">Thickness Control</span>
                  <span className="text-[#FFD700]"> Technologies</span>
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Blending™ Thickness Optimization - Smart material blending that ensures slimmer lenses without compromising clarity and performance. <br /> -Cliff lens
              </p>
              <div className="relative w-full ">
                <img
                  src="/product/4.jpg"
                  alt="Thickness Control Technology"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Technology Features Grid */}
      <div className="w-full bg-black py-16">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Innovation <span className="text-[#FFD700]">Features</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Advanced technological features that set our lenses apart in the industry
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: "/svgs/clearvision.svg", title: "8K Definition", desc: "Ultra-high resolution optics" },
              { icon: "/svgs/bluelight.svg", title: "Visual Neuroscience", desc: "Brain-optimized vision" },
              { icon: "/svgs/antireflective.svg", title: "Customization", desc: "Personalized measurements" },
              { icon: "/svgs/scratchresistance.svg", title: "Thickness Control", desc: "Optimized lens profile" },
              { icon: "/svgs/uvprotection.svg", title: "Precision Technology", desc: "Advanced manufacturing" },
              { icon: "/svgs/superslippery.svg", title: "Adaptive Design", desc: "Smart material blending" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center p-4 sm:p-6 bg-gradient-to-b from-gray-900/50 to-gray-900/10 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 sm:w-16 h-12 sm:h-16 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-center text-white font-semibold text-sm sm:text-base mb-2">{feature.title}</h3>
                <p className="text-center text-gray-400 text-xs sm:text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Showcase Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full mx-auto relative z-20">
              <div className="p-6 lg:p-10">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-center lg:text-left">
                  Advanced Optical Engineering
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
                  Our cutting-edge technology portfolio represents decades of innovation in optical science, delivering unparalleled visual performance and comfort.
                </p>

                {/* Benefits list */}
                <div className="space-y-8">
                  {/* Benefit 1 */}
                  <div className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-4 mt-1 text-4xl sm:text-5xl">
                      1
                    </span>
                    <div>
                      <span className="text-white font-semibold block text-xl sm:text-2xl">
                        Enhanced Visual Processing
                      </span>
                      <span className="text-zinc-400 text-sm sm:text-base mt-1 block">
                        Merges optics with neuroscience for natural vision
                      </span>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-4 mt-1 text-4xl sm:text-5xl">
                      2
                    </span>
                    <div>
                      <span className="text-white font-semibold block text-xl sm:text-2xl">
                        Ultra-High Definition
                      </span>
                      <span className="text-zinc-400 text-sm sm:text-base mt-1 block">
                        8x more optical definition than standard lenses
                      </span>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-4 mt-1 text-4xl sm:text-5xl">
                      3
                    </span>
                    <div>
                      <span className="text-white font-semibold block text-xl sm:text-2xl">
                        Perfect Fit Technology
                      </span>
                      <span className="text-zinc-400 text-sm sm:text-base mt-1 block">
                        Customized based on individual measurements
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative order-1 lg:order-none">
              <Image
                src="/imAGES/technology.png"
                alt="Cliff Technology Innovation"
                width={1200}
                height={800}
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl"
              />
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10 rounded-xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>


      <BackToServicesButton />
    </>
  );
};

export default CliffTechnology;
