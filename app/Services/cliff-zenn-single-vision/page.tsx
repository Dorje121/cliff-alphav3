"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import React, { useRef } from "react";
import Table from './table'
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
        backgroundImage="/product/13.jpg"
        rightImage="/product/13.jpg"
        serviceNumber="13"
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
