"use client";
import React from "react";

import TechDynamix from "@/contexts/dynamixseries";
import TechnologyZenn from "@/contexts/techzennseries";

const TechnologyPage = () => {
  return (
    <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">
      <section className="relative h-[60vh] min-h-[450px] flex flex-col justify-center items-center overflow-hidden">
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
        <div className="relative z-10 text-left w-full px-8">
          <h1 className="montserrat font-medium text-4xl md:text-6xl lg:text-7xl !text-white capitalize mb-6">
            Cliff Technology
          </h1>
          <p className="text-xl md:text-2xl !text-yellow-400 max-w-4xl">
             We believe that great vision is more than just what you see it’s how you experience the world. Guided by precision engineering and bold creativity, we continue to shape the future of display and optical technology.
          </p>
        </div>
      </section> 
       {/* <section className="relative h-[60vh] min-h-[450px] flex flex-col justify-center items-center overflow-hidden">
      
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(/homeimage/herotechnology.avif)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

      
        <div className="relative z-10 text-left w-full px-8">
          <h1 className="montserrat font-medium text-4xl md:text-6xl lg:text-7xl !text-white capitalize mb-6">
            Cliff Technology
          </h1>
          <p className="text-xl md:text-2xl !text-yellow-400 max-w-4xl">
             We believe that great vision is more than just what you see it’s how you experience the world. Guided by precision engineering and bold creativity, we continue to shape the future of display and optical technology.
          </p>
        </div>
      </section>   */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 w-full px-8 md:px-16">
          
          {/* Left Side — Big Title */}
          <div className="flex flex-col justify-center text-left">
            <h1 className="montserrat text-2xl md:text-4xl lg:text-5xl leading-snug">
              Each pair of <span className="text-yellow-400">Cliff Lenses</span> is a fusion of craftsmanship and innovation custom-engineered to your lifestyle, offering precision, clarity, and aesthetic harmony beyond ordinary vision.
            </h1>
          </div>

          {/* Right Side — Supporting Text */}
          <div className="flex flex-col pt-48 justify-center text-left md:text-right">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-xl ml-auto">
              When you wear <span className="text-yellow-400">Cliff Lenses</span>, you experience the perfect balance of technology, expertise, and design delivering comfort, style, and sharp precision for every moment.
            </p>
          </div>
        </div>
      </section>

     <TechDynamix />
   
     <TechnologyZenn />   
    </div>
  );
};

export default TechnologyPage;
