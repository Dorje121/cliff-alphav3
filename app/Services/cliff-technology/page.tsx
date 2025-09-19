"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
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

      {/* New Section with 4 alternating divs */}
      <div className="min-h-screen">
      
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
