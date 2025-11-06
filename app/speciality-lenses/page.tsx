'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import SpecialityLensesComponent from '@/contexts/specialitylenses';


const SpecialityLenses: React.FC = () => {
   return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-[80vh] min-h-[450px] flex flex-col justify-end pb-8 items-start overflow-hidden">
              <Image
               src="/cliffcoating/changable.gif"
               alt="Premium Tinted Lenses"
               fill
               className="object-cover"
               priority
              />

                          

       

        <div className="relative z-10 text-center w-full px-8">
          <h1 className="montserrat montserrat  text-[#FFD700] text-4xl md:text-6xl lg:text-7xl capitalize mb-6">
            Cliff Speciality Lenses
          </h1>
          <p className="text-lg md:text-xl text-[#FFD700]/80 max-w-3xl mx-auto">
            Discover our premium collection of lens coatings and optical
            solutions for superior vision and eye protection
          </p>
        </div>
        <div className="absolute inset-0 bg-black/60 z-[1]" />
        
      </section>

     

         <div className="relative pr-8 pl-8 z-10 text-center max-w-9xl mx-auto">

        <SpecialityLensesComponent/>
        </div>


    </div>
  );
};



export default SpecialityLenses;