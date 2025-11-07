'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import SpecialityLensesComponent from '@/contexts/specialitylenses';
import { Preview } from '@/components/demo';
import { Icon } from "@iconify-icon/react";


const SpecialityLenses: React.FC = () => {
  const features = [
    {
      title: 'Premium Quality',
      description: 'High-performance lenses with advanced optical clarity and durability',
      icon: 'mdi:glasses',
      iconColor: 'text-yellow-400'
    },
    {
      title: 'UV Protection',
      description: 'Built-in protection against harmful UV rays for long-term eye health',
      icon: 'mdi:weather-sunny',
      iconColor: 'text-yellow-400'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored lens options to meet your specific vision needs',
      icon: 'mdi:eye-settings',
      iconColor: 'text-yellow-400'
    }
  ];

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

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-[#FFD700]/10 backdrop-blur-sm rounded-3xl p-8 border border-yellow-800/20 hover:border-yellow-400 transition-all duration-500 hover:bg-zinc-800/70"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <Icon
                    icon={feature.icon}
                    width="44"
                    height="44"
                    className={`${feature.iconColor || 'text-[#FFD700]'}`}
                  />
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300"></div>

                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-yellow-300/80 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


       <div className="relative bg-yellow-300/10 py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-1 h-16 bg-yellow-400 mx-auto"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl leading-12 text-yellow-300 mb-6">
            Designed for everyday clarity, Cliff Single Vision Lenses are
            optimized to your unique prescription and lifestyle. Enjoy sharper
            focus, wider vision, and the comfort your eyes deserve because
            every detail matters.
          </h2>
        </div>
      </div>

     

         <div className="relative pr-8 pl-8 z-10 text-center max-w-9xl mx-auto">

        <div className="relative z-10 pb-24">
        <SpecialityLensesComponent/>
        </div>

        <div className="relative z-10 text-center w-full max-w-9xl mx-auto pb-24 px-16 sm:px-6">
        <Preview/>
        </div>
    
        </div>


    </div>
  );
};



export default SpecialityLenses;