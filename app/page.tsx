"use client";
import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

import LandingVideo from "@/components/home/hero";
import CircleAttachment from "@/components/home/creative";
import Blog from "@/components/home/Blog";
import BlackTinted from "@/components/home/blackTinted";
// import HomeList from "@/components/home/HomeList";
// import LensDemo from "@/components/home/Focus";
// import WhiteFooter from "@/components/home/whitefoot";
// import AnimateSection from "@/components/home/animate";
import ScrollBackground from "@/components/home/scrollbg";
import Ourcoatings from "@/components/home/ourcoatings";
import HomeProducts from "@/components/home/homeproducts";
import HomeTechnology from "@/components/home/hometechnology";
import AboutSection from "@/components/home/aboutus";

const Page = () => {
  const [pageState, setPageState] = useState<"landing" | "main">("landing");
  const [showLayout, setShowLayout] = useState(true);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem("cliff-has-visited");
    console.log("Has visited:", hasVisited);

    if (!hasVisited) {
      console.log("Showing landing page");
      setPageState("landing");
      setShowLayout(false);
    } else {
      console.log("Showing main content");
      setPageState("main");
      setShowLayout(true);
    }

    // Add keyboard shortcut to reset landing page for testing
    const handleKeyPress = (event: KeyboardEvent) => {
      // Press Ctrl+Shift+R to reset and show landing page again
      if (event.ctrlKey && event.shiftKey && event.key === "R") {
        console.log("Resetting landing page...");
        sessionStorage.removeItem("cliff-has-visited");
        setPageState("landing");
        setShowLayout(false);
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div data-show-layout={showLayout}>
      <div className="visible relative">
        <LandingVideo />
      </div>

      {/* Show main content */}

      <div className="relative">
        <ScrollBackground />
        <AboutSection />
        {/* <TextScroll />  */}
        <CircleAttachment />

        <Ourcoatings />
        <HomeProducts />

        <HomeTechnology />
        <div id="blog" className="min-h-screen">
          <Blog />

          <BlackTinted />
        </div>
      </div>
    </div>
  );
};

export default Page;
