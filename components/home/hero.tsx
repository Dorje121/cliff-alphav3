import React from "react";
import TransitionLink from "@/components/PreLoader/TransitionLink";
import { ArrowRight } from "lucide-react";
import TextWithTexture from "@/components/textwithgoldentexture";

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
      <div className="relative z-10 text-center text-white px-4 md:px-8 mx-auto">
        <div className="flex flex-col w-full h-full mb-12">
          {/* Main Heading */}
          <TextWithTexture
            text="Cliff lens crafted"
            className="text-4xl sm:text-6xl lg:text-9xl font-playfair font-bold leading-tight"
          />

          <div className="flex flex-col lg:flex-row">
            <TextWithTexture
              text="Just for you"
              className="text-4xl md:text-6xl lg:text-9xl font-playfair font-bold mb-6 leading-tight"
            />

            {/* Subheading */}
            <p className="text-lg text-center ml-6 md:text-xl text-wrap w-[100vw] lg:w-[25vw] lg:text-left pt-15 px-4 font-dm-sans text-zinc-300 mb-8 max-w-2xl leading-relaxed">
              Cliff is a precision solution to modern vision challenges,
              crafting eyewear that enhances clarity and comfort
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
