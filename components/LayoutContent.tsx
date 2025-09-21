"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import CustomCursor from "./CustomCursor";

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const [showLayout, setShowLayout] = useState(true);

  useEffect(() => {
    // Check if the page has the data-show-layout attribute
    const checkLayoutVisibility = () => {
      const mainElement = document.querySelector('[data-show-layout]');
      if (mainElement) {
        const shouldShowLayout = mainElement.getAttribute('data-show-layout') === 'true';
        setShowLayout(shouldShowLayout);
      }
    };

    // Initial check
    checkLayoutVisibility();

    // Set up a MutationObserver to watch for changes to the data-show-layout attribute
    const observer = new MutationObserver(checkLayoutVisibility);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-show-layout']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {showLayout && <Navbar />}
      <CustomCursor />
    {children}
      {showLayout && <Footer />}
    </>
  );
}
