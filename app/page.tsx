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
    setShowLayout(true); // Show navbar and footer for main content
    setTimeout(() => {
      setPageState('main');
    }, 500);
  };

  return (
    <div data-show-layout={showLayout}>
      {/* Always preload hero section in background */}
      <div className={`${pageState === 'landing' ? 'invisible absolute' : 'visible relative'}`}>
        <LandingVideo />
      </div>

      {/* Show landing page */}
      {pageState === 'landing' && (
        <LandingPage onComplete={handleLandingComplete} />
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
