"use client";
import React from "react";
import Image from "next/image";
import ZeenSeries from '@/components/pagecontents/zeenseries';

export default function ZennSeriesPage() {
  return (
    <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">
      {/* Hero Section */}
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        {/* Foreground Content */}
        <div className="relative z-[2] flex flex-col items-center justify-center h-full">
          <h1 className="montserrat font-medium text-6xl capitalize text-center">
            ZEEN Series
          </h1>
          <p className="text-xl mt-4 text-center max-w-2xl px-4">
            Premium lens series with advanced optical performance
          </p>
        </div>

        {/* Features Grid */}
        <div className="relative z-[2] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 px-2 sm:px-8 pb-8">
          {[
            {
              icon: "/svgs/antireflective.svg",
              title: "Crystal Clear",
              desc: "Exceptional clarity and sharpness",
            },
            {
              icon: "/svgs/scratchresistance.svg",
              title: "Durable",
              desc: "Built to last with premium materials",
            },
            {
              icon: "/svgs/bluelight.svg",
              title: "Blue Light Protection",
              desc: "Reduces digital eye strain",
            },
            {
              icon: "/svgs/uvprotection.svg",
              title: "UV Protection",
              desc: "100% UV blocking",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="text-center bg-gradient-to-b from-zinc-900/50 to-zinc-900/10 p-4 sm:p-6 rounded-xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                height={100}
                width={100}
                className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4"
              />
              <h3 className="font-semibold text-sm sm:text-md mb-1 sm:mb-2 uppercase">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ZEEN Series Content */}
      <main>
        <ZeenSeries />
      </main>
    </div>
  );
}
