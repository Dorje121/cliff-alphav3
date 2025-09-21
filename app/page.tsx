"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import Demo from "@/components/home/Demo";
import BgAttached from "@/components/home/BgAttached";
import LandingVideo from "@/components/home/hero";
import HomeList from "@/components/home/HomeList";
import CircleAttachment from "@/components/home/CircleAttachment";
import Blog from "@/components/home/Blog";
import LensDemo from "@/components/home/Focus";

const Page = () => {
  const [pageState, setPageState] = useState<'landing' | 'main'>('landing');
  const [showLayout, setShowLayout] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('cliff-has-visited');
    console.log('Has visited:', hasVisited);
    
    
    if (!hasVisited) {
      // First visit - show landing page
      console.log('Showing landing page');
      setPageState('landing');
      setShowLayout(false); // Hide navbar and footer
    } else {
      // Returning visitor - show main content directly
      console.log('Showing main content');
      setPageState('main');
      setShowLayout(true); // Show navbar and footer
    }
  }, []);

  const handleLandingComplete = () => {
    // Mark as visited and show main content
    localStorage.setItem('cliff-has-visited', 'true');
    setShowLayout(true); // Show navbar and footer immediately - visible behind shutter
    
    // Wait for shutter animation to complete (2 seconds) before removing landing page
    setTimeout(() => {
      setPageState('main');
    }, 2000);
  };

  return (
    <div data-show-layout={showLayout}>
      {/* Hero section always visible in background */}
      <div className="visible relative">
        <LandingVideo />
      </div>

      {/* Landing page overlays hero during animation */}
      {pageState === 'landing' && (
        <div className="fixed inset-0 z-[999999999999999]">
          <LandingPage onComplete={handleLandingComplete} />
        </div>
      )}

      {/* Show main content */}
      {pageState === 'main' && (
        <div className="relative">
          <Demo />
          <CircleAttachment />
          <HomeList />
          <BgAttached bgVideo="/homevideo/BlueSafe-2.mp4" />
          <Blog />
          <LensDemo />
        </div>
      )}
    </div>
  );
};

export default Page;
