"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Demo from "@/components/home/Demo";
import BgAttached from "@/components/home/BgAttached";
import LandingVideo from "@/components/home/hero";
import HomeList from "@/components/home/HomeList";
import CircleAttachment from "@/components/home/CircleAttachment";
import Blog from "@/components/home/Blog";
import LensDemo from "@/components/home/Focus";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('cliff-has-visited');
    
    if (!hasVisited) {
      // First visit - redirect to landing page
      localStorage.setItem('cliff-has-visited', 'true');
      router.push('/landing');
    } else {
      // Returning visitor - show main content
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white mt-4">Loading CLIFF Experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative">
        <LandingVideo />
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
