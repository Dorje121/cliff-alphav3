"use client";
import React from "react";
import Demo from "@/components/Demo";
import BgAttached from "@/components/bg-attachment/BgAttached";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LandingVideo from "@/components/LandingVideo/LandingVideo";
import HomeList from "@/components/Services/HomeList";
// import MainDisplay from "@/components/test/MainDisplay";
import CircleAttachment from "@/components/bg-attachment/CircleAttachment";
import Blog from "@/components/BlogPost/Blog";
import LensDemo from "@/components/magicui/Focus";

const Page = () => {
  return (
    <div>
      <div className="relative">
        <LandingVideo />
        {/* <MainDisplay /> */}
        <Demo />
        <CircleAttachment />
        <HomeList />
        <BgAttached bgImage="/Divider/bgfixed.png" />
        <Blog />
        <LensDemo />
      </div>
    </div>
  );
};

export default Page;
