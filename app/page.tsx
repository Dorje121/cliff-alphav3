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
  const [pageState, setPageState] = useState<'loading' | 'landing' | 'main'>('loading');
  const [showLayout, setShowLayout] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('cliff-has-visited');
    console.log('Has visited:', hasVisited);
    
    // Temporarily force landing page to show for testing
    localStorage.removeItem('cliff-has-visited');
    
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
      {/* Show loading state while checking localStorage */}
      {pageState === 'loading' && (
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white mt-4">Loading CLIFF Experience...</p>
          </div>
        </div>
      )}

      {/* Show landing page */}
      {pageState === 'landing' && (
        <LandingPage onComplete={handleLandingComplete} />
      )}

      {/* Show main content */}
      {pageState === 'main' && (
        <div className="relative">
          <LandingVideo />
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
