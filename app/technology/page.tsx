"use client";
import React from "react";

import TechDynamix from "@/contexts/dynamixseries";
import TechnologyZenn from "@/contexts/techzennseries";

const TechnologyPage = () => {
  return (
    <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">
      <section className="relative h-[80vh] min-h-[450px] flex flex-col justify-center items-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/homevideo/glass.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>                            
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        {/* Foreground Content */}
        <div className="relative z-10 w-full px-8 flex flex-col pt-80 items-center justify-center h-full">
          <div className="text-center">
            <h1 className="montserrat font-medium text-4xl md:text-6xl lg:text-7xl !text-white capitalize mb-6">
              Cliff Technology
            </h1>
            <p className="text-xl md:text-2xl !text-yellow-400 max-w-4xl mx-auto">
              We believe that great vision is more than just what you see it&apos;s how you experience the world. Guided by precision engineering and bold creativity, we continue to shape the future of display and optical technology.
            </p>
          </div>
        </div>
      </section> 

      {/* Content area divider */}
      <div className="relative bg-yellow-300/10 py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-1 h-16 bg-yellow-400 mx-auto"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl leading-12 text-yellow-300 mb-6">
            At the heart of Cliff&apos;s innovation lies cutting-edge optical
            technology, where precision engineering meets advanced materials.
            Our proprietary lens technology delivers unparalleled clarity,
            durability, and visual performance for the modern world.
          </h2>
        </div>
      </div>
      

      
      
     <div className="py-20"> 

     <TechDynamix />
     </div>
   
     <TechnologyZenn />   
    </div>
  );
};

export default TechnologyPage;
