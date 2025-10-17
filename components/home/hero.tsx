import React from "react";
import TransitionLink from "@/components/PreLoader/TransitionLink";
import { ArrowRight } from "lucide-react";
import TextWithTexture from "@/components/textwithgoldentexture";

const LandingVideo = () => {
  return (
    <div className="relative min-h-screen flex items-end pb-8 justify-start overflow-hidden">
      {/* Video Background */}
      <video
        src="/videos/fullv.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      />
      {/* latest changes */}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Overlay */}
      <div className="relative z-10  text-white px-4 md:px-8">
        <div className="flex flex-col w-full h-full">
          {/* Main Heading */}

          <TextWithTexture
            text="Cliff lens crafted, Just for you"
            className="text-3xl md:text-4xl lg:text-8xl poppins font-bold leading-tight"
          />
          {/* <TextWithTexture
            text="Just for you"
            className="text-3xl md:text-4xl lg:text-6xl poppins font-bold leading-tight"
          /> */}
          {/* Subheading */}
          {/* <p className="text-lg pt-8 poppins text-zinc-300 py-8 max-w-2xl leading-relaxed">
            Cliff is a precision solution to modern vision challenges, crafting
            eyewear that enhances clarity and comfort
          </p> */}
        </div>

        {/* Action Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 ">
          <TransitionLink
            href="/Services"
            className="group/cta inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl border-2 border-white/50 rounded-full text-white font-semibold text-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
          >
            <span>Discover our products</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-500 group-hover/cta:translate-x-2 group-hover/cta:scale-110"
            />
          </TransitionLink>
        </div> */}
      </div>
    </div>
  );
};

export default LandingVideo;
