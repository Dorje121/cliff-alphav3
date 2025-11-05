"use client";
import React from "react";

import TechDynamix from "@/contexts/dynamixseries";
import TechnologyZenn from "@/contexts/techzennseries";

const TechnologyPage = () => {
  return (
    <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">
      <section className="relative h-[100vh] min-h-[450px] flex flex-col justify-center items-center overflow-hidden">
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
      

     <TechDynamix />
   
     <TechnologyZenn />   
    </div>
  );
};

export default TechnologyPage;
