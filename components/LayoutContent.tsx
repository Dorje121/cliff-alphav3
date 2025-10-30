"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import CustomCursor from "./CustomCursor";
import Faq from "../contexts/faq";

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  // Show layout by default
  const showLayout = true;

  return (
    <>
      {showLayout && <Navbar />}
      <CustomCursor />
    {children}
       {showLayout && <Faq />}
      {showLayout && <Footer />}
  
    </>
  );
}
