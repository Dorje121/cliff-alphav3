"use client";
import React from "react";
import ProductIcons from "@/contexts/producticons";
import ProductDropdown from "@/contexts/productdropdown";

const ProductsPage = () => {


  return (
    <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">
     
      <section className="relative h-[60vh] min-h-[450px] flex flex-col justify-center items-start overflow-hidden">
        
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

        
        <div className="relative z-10 text-left w-full px-8">
          <h1 className="montserrat font-medium text-4xl md:text-6xl lg:text-7xl !text-white capitalize mb-6">
            Cliff Products & Solutions
          </h1>
          <p className="text-lg md:text-xl !text-yellow-400 max-w-3xl">
            Discover our premium collection of lens coatings and optical solutions
            for superior vision and eye protection
          </p>
        </div>
      </section>
      <ProductIcons />
      <ProductDropdown />     
      
    
     
    </div>
  );
};

export default ProductsPage;
