"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import HeroSection from "@/components/Services/heropage";
import TableContain from "./tablecontain";
import ChartIndex from "./Chart";

const RefractiveIndex = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background image continuous motion animation
      gsap.fromTo(
        backgroundImageRef.current,
        {
          scale: 1,
          rotation: 0,
        },
        {
          scale: 1.1,
          rotation: 0.5,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section with Service Information */}
      <HeroSection
        title="REFRACTIVE INDEX"
        subtitle="GUIDE"
        description="Complete guide to understanding refractive index values and
                their impact on lens thickness, weight, and optical performance
                for superior vision correction."
        backgroundImage="/product/14.jpg"
        rightImage="/product/14.jpg"
        serviceNumber="12"
        badgeTitle="1.74"
        badgeSubtitle="Max Index"
      />

      <TableContain />
      <ChartIndex />
      <BackToServicesButton />
    </>
  );
};

export default RefractiveIndex;
