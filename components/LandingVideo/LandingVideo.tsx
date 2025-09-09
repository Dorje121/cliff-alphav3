import React from "react";
import Link from "next/link";

import { Calendar, Clock, ArrowRight, Eye } from "lucide-react";
import TransitionLink from "@/components/PreLoader/TransitionLink";

const LandingVideo = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        src="/videos/fullv.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4 md:px-8  mx-auto">
        {/* Rating Section */}
        {/* <div className="mb-8 flex flex-col items-center">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 fill-yellow-400"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-lg font-semibold mb-1">4.9/5</div>
          <div className="text-sm text-gray-300">1,200+ Reviews</div>
        </div> */}

        <div className="flex flex-col w-full h-full  mb-12">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200  bg-clip-text text-transparent md:text-right lg:text-9xl font-playfair font-bold leading-tight">
            Cliff lens crafted{" "}
          </h1>

          <div className="flex flex-col md:flex-row">
            <h1 className="text-4xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent text-nowrap md:text-6xl lg:text-9xl font-playfair font-bold mb-6 leading-tight">
              Just for you
            </h1>

            {/* Subheading */}
            <p className="text-lg ml-6 md:text-xl text-wrap w-[100vw] lg:w-[25vw] text-left pt-15 px-4 font-dm-sans text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Cliff is a precision solution to modern vision challenges,
              crafting eyewear that enhances clarity and comfort
            </p>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* <Link
            href="/Services"
            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            Explore Collection
          </Link> */}
          <TransitionLink
            href="/Services"
            className="group/cta inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl border-2 border-white/50 rounded-full text-white font-semibold text-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
          >
            <span>View Our Products</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-500 group-hover/cta:translate-x-2 group-hover/cta:scale-110"
            />
          </TransitionLink>
        </div>
      </div>
    </div>
  );
};

export default LandingVideo;
