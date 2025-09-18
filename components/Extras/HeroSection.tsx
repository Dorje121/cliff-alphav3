"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroSectionProps {
  videoSrc: string;
  title1: string;
  title2: string;
  description: string;
  imageSrc: string;
  serviceNumber: string;
  buttonText: string;
  buttonLink: string;
}

export default function HeroSection({
  videoSrc,
  title1,
  title2,
  description,
  imageSrc,
  serviceNumber,
  buttonText,
  buttonLink,
}: HeroSectionProps) {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animate image: Scale down and fade in
    gsap.from(imageRef.current, {
      scale: 2,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={sectionRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <Image
          fill
          ref={imageRef}
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center text-center px-4">
          <span className="text-golden text-lg mb-2">Service {serviceNumber}</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title1} <span className="text-golden">{title2}</span>
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8">{description}</p>
          <Link 
            href={buttonLink}
            className="bg-golden text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
          >
            {buttonText}
          </Link>
        </div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          <Image
            src={imageSrc}
            alt={`${title1} ${title2}`}
            fill
            className="object-cover"
            priority
          />
        </video>
      </div>
    </div>
  );
}
