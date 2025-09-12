"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import TexturedTitle from "./TexturedTitle";

const Hero = () => {
  const textRefs = useRef<HTMLSpanElement[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate text lines with stagger
    gsap.from(textRefs.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Animate image
    gsap.from(imageRef.current, {
      opacity: 0,
      y: -200,
      scale: 0.9,
      duration: 3,
      delay: 0.5,
      ease: "bounce.out",
    });
  }, []);

  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center px-8 py-16 md:px-24">
      <div className="flex flex-col max-w-7xl mx-auto md:flex-row md:justify-around md:items-start">
        <div className="mt-20">
          <div className="mb-4">
            <TexturedTitle 
              text="Design." 
              fontSize="clamp(3rem, 8vw, 5rem)"
              className="block mb-2"
            />
          </div>
          <div className="mb-4">
            <TexturedTitle 
              text="Precision." 
              fontSize="clamp(3rem, 8vw, 5rem)"
              className="block mb-2"
            />
          </div>
          <div>
            <TexturedTitle 
              text="Cliff Eyewear." 
              fontSize="clamp(3rem, 8vw, 5rem)"
              className="block opacity-80"
            />
          </div>
        </div>

        <div
          ref={imageRef}
          className="mt-10 ml-70 md:mt-0 md:max-w-md opacity-70"
        >
          <Image src="/lense.svg" alt="Eyewear lens" width={520} height={200} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
