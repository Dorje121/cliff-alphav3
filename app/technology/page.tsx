"use client";
import React from "react";
import HomeTechnology from "@/components/home/hometechnology";

const List = () => {
 

 



return (
  <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">
    <section className="relative h-screen flex flex-col justify-between items-center py-8 md:pb-16 overflow-hidden">
      {/* Background video */}
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
        {/* Background video */}
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

        {/* Overlay (optional for better text readability) */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        {/* Foreground Content */}
        <div className="relative z-[2] flex flex-col items-center justify-center h-full">
          <h1 className=" montserrat font-medium text-6xl capitalize text-center">
            Cliff Technology
          </h1>
        </div>

        
      </section>     
      <HomeTechnology />
    </div>
  );
};

export default List;



