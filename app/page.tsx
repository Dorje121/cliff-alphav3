"use client";
import React from "react";
import Demo from "@/components/home/Demo";
import BgAttached from "@/components/home/BgAttached";
import LandingVideo from "@/components/home/hero";
import HomeList from "@/components/home/HomeList";
// import MainDisplay from "@/components/test/MainDisplay";
import CircleAttachment from "@/components/home/CircleAttachment";
import Blog from "@/components/home/Blog";
import LensDemo from "@/components/home/Focus";

const Page = () => {
  return (
    <div>
      <div className="relative">
        <LandingVideo />
        {/* <MainDisplay /> */}
        <Demo />
        <CircleAttachment />
        <HomeList />
        <BgAttached bgVideo="/homevideo/BlueSafe-2.mp4" />
        <Blog />
        <LensDemo />
      </div>
    </div>
  );
};

export default Page;
