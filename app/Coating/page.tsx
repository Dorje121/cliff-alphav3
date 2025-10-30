"use client";
import React from "react";
import CoatingContents from "@/contexts/coatingcontents";

const List = () => {
 
return (
  <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">
    {/* <section className="relative h-[60vh] min-h-[450px] flex flex-col justify-center items-start overflow-hidden">
     
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/videos/22222.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    
      <div className="relative z-10 text-left w-full px-8">
        <h1 className="montserrat font-medium text-4xl md:text-6xl lg:text-7xl !text-white capitalize mb-6">
          Cliff Coating
        </h1>
        <p className="text-xl md:text-2xl !text-yellow-400 max-w-4xl">
          Experience the perfect blend of style and protection with our advanced lens coatings. Engineered for clarity, durability, and visual comfort in any light condition.
        </p>
      </div>
       
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        >
          <source src="/videos/22222.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

       
        <div className="absolute inset-0 bg-black/60 z-[1]" />

      
        
      </section>  */}
       <section className="relative h-[60vh] min-h-[450px] flex flex-col justify-center items-center overflow-hidden">
        
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(/homeimage/herotechnology.avif)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 text-left w-full px-8">
          <h1 className="montserrat font-medium text-4xl md:text-6xl lg:text-7xl !text-white capitalize mb-6">
               Cliff Coating
          </h1>
          <p className="text-xl md:text-2xl !text-yellow-400 max-w-4xl">
             Experience the perfect blend of style and protection with our advanced lens coatings. Engineered for clarity, durability, and visual comfort in any light condition.
          </p>
        </div>
      </section>     
      <CoatingContents />
   

    </div>
  );
};

export default List;



