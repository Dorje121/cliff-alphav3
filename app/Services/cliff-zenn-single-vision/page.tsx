"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Table from './table'
import TextWithTexture from "@/components/textwithgoldentexture";
import Link from "next/link";
import AdditionalChargePage from "./aditional";
import HeroSection from "@/components/Services/heropage";
const CliffZennSingleVision = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);



  return (
    <div className="min-h-screen  text-white">
      {/* Hero Section with Service Information */}
      <HeroSection
        title="CLIFF ZENN"
        subtitle="SINGLE VISION"
        description="Table data of Cliff zenn single vision and cliff zenn progressive lenses"
        backgroundImage="/ai1.jpg"
        rightImage="/ai1.jpg"
        serviceNumber="14"
        badgeTitle="Zenn"
        badgeSubtitle="single vision"
      />

      <Table />
      {/* <AdditionalChargePage /> */}

      <BackToServicesButton />
    </div>
  );
};

export default CliffZennSingleVision;
