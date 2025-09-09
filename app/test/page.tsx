"use client";
import React from "react";
import Demo from "@/components/Demo";
import BgAttached from "@/components/bg-attachment/BgAttached";
import Glass from "@/components/Glass";
import MagicReveal from "@/components/MagicReveal/MagicReveal";
import Footer from "@/components/Footer";
import Loading from "@/components/PreLoader/Loading";
import Navbar from "@/components/Navbar";
import LandingVideo from "@/components/LandingVideo/LandingVideo";
import HomeList from "@/components/Services/HomeList";

const Page = () => {
  const [loading, setLoading] = React.useState(true);
  const [showPreloader, setShowPreloader] = React.useState(false);

  React.useEffect(() => {
    // Check if preloader has been shown in this session
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");

    if (!hasSeenPreloader) {
      setShowPreloader(true);
    } else {
      setLoading(false);
    }
  }, []);

  const playVideo = () => {
    setTimeout(() => {
      setLoading(false);
      // Mark preloader as seen in this session
      sessionStorage.setItem("hasSeenPreloader", "true");
    }, 9200);
  };

  return (
    <>
      {
        // loading && showPreloader ? (
        //   <Loading startVideo={playVideo} />
        // ) :
        <div className="relative">
          <Navbar />
          <LandingVideo />
          <div className="sticky top-0 z-0">
            <Glass />
          </div>
          <Demo />
          <MagicReveal />
          <HomeList />
          <BgAttached bgImage="/Divider/bgfixed.png" />
          <div className="z-20">
            <Footer />
          </div>
        </div>
      }
    </>
  );
};

export default Page;
