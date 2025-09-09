"use client";
import { useState, useEffect } from "react";

interface UsePageTransitionOptions {
  minLoadTime?: number;
  maxLoadTime?: number;
}

export const usePageTransition = (options: UsePageTransitionOptions = {}) => {
  const { minLoadTime = 1500, maxLoadTime = 3000 } = options;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with some randomness to feel natural
    const loadTime = Math.random() * (maxLoadTime - minLoadTime) + minLoadTime;
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadTime);

    return () => clearTimeout(timer);
  }, [minLoadTime, maxLoadTime]);

  return { isLoading };
};

export const getRouteLoadingTime = (pathname: string): number => {
  // Different routes can have different loading times
  // This makes the loading feel more realistic
  
  if (pathname === "/") return 2000; // Home page
  if (pathname === "/Services") return 1800;
  if (pathname === "/test") return 1500;
  
  // Service pages might need more time to "load"
  if (pathname.includes("/Services/")) return 2200;
  
  // Default loading time
  return 1800;
};

export default usePageTransition;
