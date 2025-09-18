"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import TextWithTexture from "@/components/textwithgoldentexture";
import HeroSection from "@/components/Services/heropage";

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

      {/* Main Content with Same Background as Cliff Coatings */}
      {/* <div className="min-h-screen text-white overflow-hidden">
       
        <div className="max-w-screen mx-auto">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-16">
          
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">CLIFF </span>
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  TECHNOLOGY
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Technologies that power every CLIFF progressive lens — crafted
                for comfort, clarity, and customization.
              </p>
            </div>

            
            <div className="space-y-20">
         
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 h-screen flex flex-col justify-center">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-gray-300">1.</span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                        Psicoptix Technology™
                      </span>
                    </h2>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Psicoptix™ Technology Merges advanced optics with visual
                    neuroscience to deliver sharper, natural, and adaptive
                    vision — mimicking how the brain interprets images.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-3 text-gray-300">
                      Key Benefits:
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>
                        • Advanced optics with visual neuroscience integration
                      </li>
                      <li>• Sharper and more natural vision</li>
                      <li>• Adaptive vision technology</li>
                      <li>• Brain-optimized image interpretation</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-500 to-gray-400 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl overflow-hidden">
                    <Image
                      src="/eyetest.jpg"
                      alt="Neural Optics Technology"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h4 className="text-xl font-semibold text-gray-300">
                      Neural Optics
                    </h4>
                    <p className="text-gray-400 mt-2">
                      Brain-synchronized vision processing
                    </p>
                  </div>
                </div>
              </div>

         
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2 space-y-6 h-screen flex flex-col justify-center">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-gray-300">2.</span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                        CDT™ (Continuum Design) 8K Definition
                      </span>
                    </h2>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    CDT™ (Continuum Design) 8K Our advanced design ensures
                    ultra-high resolution lenses (up to 8x more optical
                    definition than Standard Freeform) for superior clarity and
                    wider visual fields.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-gray-300 mb-2">
                        Allows up to quadruple
                      </h4>
                      <p className="text-sm text-gray-400">
                        the density of points on the optical surface
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-gray-300 mb-2">
                        Conventional lenses with
                      </h4>
                      <p className="text-sm text-gray-400">
                        Interpolation technology based on discontinuous points
                        only
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 relative">
                  <div className=" p-8 backdrop-blur-sm ">
                    <div className="grid grid-cols-4 gap-2 mb-6">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square bg-gradient-to-br from-gray-400 to-gray-500 rounded opacity-80 animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-gray-300">
                        8K Resolution
                      </h4>
                      <p className="text-gray-400 mt-2">
                        Ultra-high definition optics
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 h-screen flex flex-col justify-center">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-gray-300">3.</span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                        Wear Fit Customization
                      </span>
                    </h2>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    WearFit™ Customization Lenses tailored for you — based on
                    your unique measurements like pupillary distance, vertex,
                    panoramic and nasoscopic angles — for unmatched comfort and
                    precision.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                      <div className="text-2xl mb-2">📏</div>
                      <h4 className="font-semibold text-gray-300 mb-1">
                        Pupillary Distance
                      </h4>
                      <p className="text-sm text-gray-400">
                        Precise measurement
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                      <div className="text-2xl mb-2">📐</div>
                      <h4 className="font-semibold text-gray-300 mb-1">
                        Vertex & Angles
                      </h4>
                      <p className="text-sm text-gray-400">
                        Panoramic & Nasoscopic
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className=" rounded-2xl p-8 backdrop-blur-sm ">
                    <div className="relative">
                      <div className="w-62 h-62 mx-auto bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center relative overflow-hidden">
                        <Image
                          src="/ee.jpg"
                          alt="Face measurement visualization"
                          width={192}
                          height={192}
                          className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-4 border-2 border-white/30 rounded-full"></div>
                        <div className="absolute inset-8 border border-white/20 rounded-full"></div>

                        
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/40"></div>
                        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/40"></div>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <h4 className="text-xl font-semibold text-gray-300">
                        Custom Fit
                      </h4>
                      <p className="text-gray-400 mt-2">
                        Personalized measurements
                      </p>
                    </div>
                  </div>
                </div>
              </div>

                      
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4 ">
                    <span className="text-3xl font-bold text-gray-300">4.</span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                        Thickness Control Technologies
                      </span>
                    </h2>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Blending™ Thickness Optimization Smart material blending
                    that ensures slimmer lenses without compromising clarity and
                    performance.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-gray-300 mb-2">
                        Smart Material Blending
                      </h4>
                      <p className="text-sm text-gray-400">
                        Advanced material optimization for reduced thickness
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-gray-300 mb-2">
                        Maintained Performance
                      </h4>
                      <p className="text-sm text-gray-400">
                        No compromise on clarity and optical quality
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 relative">
                  <div className="p-8 backdrop-blur-sm">
                    <div className="space-y-4 h-screen flex flex-col justify-center">
                      
                      <div className="flex items-end space-x-4 justify-center">
                        <div className="text-center">
                          <div className="w-16 h-24 bg-gradient-to-t from-gray-600 to-gray-400 rounded-t-lg mb-2"></div>
                          <p className="text-xs text-gray-400">Standard</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-lg mb-2"></div>
                          <p className="text-xs text-gray-300">CLIFF</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="text-xl font-semibold text-gray-300">
                          Optimized Thickness
                        </h4>
                        <p className="text-gray-400 mt-2">Up to 40% thinner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* New Section with 4 alternating divs */}
      <div className="min-h-screen">
        {/* First div: black background, right side image, left side content */}
        {/* <div className="bg-black text-white py-20 ml-8">
          <div className="max-w-[1540px] mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">1. Psicoptix Technology ™</h2>
                <p className="text-lg text-gray-300">Psicoptix™ Technology Merges advanced optics with visual neuroscience to deliver sharper, natural, and adaptive vision - enhancing how the brain interprets images.</p>
              </div>
              <div className="relative right-24 ml-8">
                  <img
                    src="/lensepage/eye.png"
                    alt="Technology 1"
                    className="w-full h-full object-contain"
                  />
              </div>
            </div>
          </div>
        </div> */}
            <div className="relative min-h-[80dvh] bg-white text-white">


              <div className="absolute min-h-[80dvh] flex justify-end items-center overflow-hidden h-full inset-0 bg-black w-full"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 70%)",
                }}
              >
                <div className="relative -mt-24">
                    <img
                      src="/lensepage/eye.png"
                      alt="Technology 1"
                      className="w-full h-auto object-contain z-50"
                    />
                    
                  </div>
              </div>
              <div className="max-w-[1540px] min-h-[80dvh] pt-36  relative z-50 mx-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-50">
                  <div className="space-y-6 ml-8 -mt-6">
                    <h2 className="text-4xl font-bold">1. Psicoptix Technology ™</h2>
                    <p className="text-lg text-gray-300">
                      Psicoptix™ Technology Merges advanced optics with visual neuroscience to deliver sharper, natural, and adaptive vision - enhancing how the brain interprets images.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>

        {/* Second div: white background, left side image, right side content */}
        <div className="relative bg-white text-black">
          <div className="max-w-[1540px] mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative ">
                <div className="relative max-w-sm mx-auto aspect-square overflow-hidden">
                  <img
                    src="/lensepage/technology.jpg"
                    alt="Technology 2"
                    className="w-full h-full object-contain -mt-16"
                    onError={(e) => {
                      e.currentTarget.src = '/ee.jpg';
                      e.currentTarget.className = 'w-full h-full object-cover';
                    }}
                  />
                </div>
                
                <div className="absolute bottom-12 left-0 right-0 transform translate-y-1/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
                    <div className="bg-transparent rounded-none p-4">
                      <p className="text-lg">Allows up to quadruple the density of points on the optical surface</p>
                    </div>
                    <div className="bg-transparent rounded-none p-4">
                      <p className="text-lg">Conventional lenses with interpolation technology based on discontinuous points matrix</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[1500px] mx-auto px-4 space-y-6">
                <h2 className="text-3xl font-bold">2. CDT®(Continuum Design) 8K Definition</h2>
                <p className="text-lg">CDT® (Continuum Design) 8K Our advanced design ensures ultra-high resolution lenses (up to 8x more optical definition than standard Freeform) for superior clarity and wider visual fields.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third div: black background, right side image, left side content */}
        <div className="relative min-h-[80dvh] bg-white text-white">
          <div className="absolute min-h-[80dvh] flex justify-end items-center overflow-hidden h-full inset-0 bg-black w-full"
            style={{
              clipPath: "polygon(0 6%, 100% 0, 100% 100%, 0 60%)",
            }}
          >
            <div className="relative -mt-12">
              <img
                src="/lensepage/modal.png"
                alt="Technology 3"
                className="w-[90%] h-auto object-contain z-50"
              />
            </div>
          </div>
          <div className="max-w-[1540px] min-h-[80dvh] pt-36 relative z-50 mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-50">
              <div className="space-y-6 ml-8 -mt-6">
                <h2 className="text-4xl font-bold">3. Wear Fit Customization</h2>
                <p className="text-lg text-gray-300">WearFit™ Customization Lenses tailored for you based on your unique measurements like pupillary distance, vertex, panoramic and pantoscopic angles - for unmatched comfort and precision.</p>
              </div>
            </div>
          </div>
       
        </div>

        {/* Fourth div: white background, left side image, right side content */}
        <div className="bg-white text-black py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
              <div className="relative flex -mt-24 justify-center">
                  <img
                    src="/newimage/thikness.svg"
                    alt="Technology 4"
                    className="w-auto h-auto max-w-[400px] max-h-[300px] object-contain"
                  />
              </div>
              <div className="space-y-6 ml-12">
                <h2 className="text-4xl font-bold">4. Thickness Control Technologies</h2>
                <p className="text-lg text-gray-600 ">Blending™ Thickness Optimization Smart material blending that ensures slimmer lenses without compromising clarity and performance.</p>
              </div>
            </div>
          </div>
        </div>
   

      <BackToServicesButton />
    </>
  );
};

export default CliffTechnology;
