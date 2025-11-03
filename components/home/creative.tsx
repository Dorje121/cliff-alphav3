"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Globe from "@/components/ui/globe";

export default function CircleAttachment() {
  const mainRef = useRef<HTMLDivElement>(null);
  // const revealLayerRef = useRef<HTMLDivElement>(null);
  const revealLayerSecondRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const t = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "+100%",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });
    // t.fromTo(
    //   revealLayerRef.current,
    //   {
    //     clipPath: "inset(100% 0% 0% 0%)",
    //     height: "50vh",
    //   },
    //   {
    //     clipPath: "inset(0% 0% 0% 0%)",
    //     ease: "none",
    //     height: "100vh",
    //   }
    // );
    t.fromTo(
      revealLayerSecondRef.current,
      {
        clipPath: "inset(0% 0% 0% 100%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        duration: 1,
      }
    );
  });

  return (
    <div ref={mainRef} className="relative h-[50dvh] md:h-dvh ">
      <div className="absolute  inset-0 z-50 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      {/* Background blurred image */}
      {/* <div className="h-full w-full relative">
        <Image
          src="/didi.jpg"
          alt="Blurred Image"
          fill
          objectFit="cover"
          quality={100}
        />
      </div> */}

      {/* Revealed clear image layer */}
      <div className="absolute inset-0 h-[50dvh] md:h-screen mt-10 overflow-hidden flex justify-end items-end">
        <div className="relative  w-full h-full">
          <Image
            src="/earth2.png"
            alt="Revealed Image"
            fill
            // objectFit="cover"
            quality={100}
            className="w-full h-full opacity-50 hover:opacity-100 transition-opacity duration-300 md:object-cover object-contain object-right transalte-y-50 -rotate-12"
          />
          {/* <div className="absolute z-50 -bottom-1 h-32 w-full bg-gradient-to-b from-transparent to-black "></div> */}
        </div>
      </div>
      <div
        ref={revealLayerSecondRef}
        className="absolute inset-0 h-[40dvh] md:h-screen mt-10 overflow-hidden flex justify-end items-end"
      >
          

          <div className="absolute top-15 left-14 z-50 w-96 h-96 md:w-96 md:h-96">
            <Image
              src="/homevideo/gifyearth.gif"
              alt="Earth Animation"
              width={400}
              height={400}
              className="w-full h-full object-contain opacity-30 hover:opacity-100 transition-opacity duration-300"
              unoptimized
              priority
            />
          </div>
        
         
        <div className="relative w-full h-full transalte-y-50">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src="/earth.jpg"
            alt="Revealed Image"
            fill
            quality={100}
            className="object-contain md:object-cover object-right transalte-y-50 -rotate-12"
          />
        </div>
 
       
      </div>
    </div>
  );
}
