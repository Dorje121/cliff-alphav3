"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import GraphSec from './graph'
import Diff from './diff'
import TechBene from './Techbene'
import HeroSection from "@/components/Services/heropage";

const CliffZennSingleVision = () => {
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
        title="CLIFF ZENN"
        subtitle="SINGLE VISION"
        description="The most versatile design for Single Vision Lenses with 76% more
                stability and better vision in all gaze directions."
        backgroundImage="/product/11.jpg"
        rightImage="/product/11.jpg"
        serviceNumber="09"
        badgeTitle="Zenn"
        badgeSubtitle="Single Vision"
      />

      <GraphSec />
      <TechBene />
      <Diff />

      <BackToServicesButton />
    </>
  );
};

export default CliffZennSingleVision;
