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

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem('cliff-has-visited');
    console.log('Has visited:', hasVisited);

    if (!hasVisited) {
      console.log('Showing landing page');
      setPageState('landing');
      setShowLayout(false);
    } else {
      console.log('Showing main content');
      setPageState('main');
      setShowLayout(true);
    }

    // Add keyboard shortcut to reset landing page for testing
    const handleKeyPress = (event: KeyboardEvent) => {
      // Press Ctrl+Shift+R to reset and show landing page again
      if (event.ctrlKey && event.shiftKey && event.key === 'R') {
        console.log('Resetting landing page...');
        sessionStorage.removeItem('cliff-has-visited');
        setPageState('landing');
        setShowLayout(false);
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleLandingComplete = () => {

    sessionStorage.setItem('cliff-has-visited', 'true');
    setShowLayout(true);


    setTimeout(() => {
      setPageState('main');
    }, 2000);
  };

  return (
    <div data-show-layout={showLayout}>
      <div className="visible relative">
        <LandingVideo />
      </div>
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
