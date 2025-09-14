// file: app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroller from "@/components/lenis/SmoothScroller";
import { Suspense } from "react";
import PageTransitionProvider from "@/components/PreLoader/PageTransitionProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// The dynamic import for CustomCursor is REMOVED from this file

export const metadata: Metadata = {
  title: "Cliff Lens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased cursor-none`}
        style={{
          // Ensure smooth scrolling works with GSAP
          overflow: "auto",
          height: "100%",
        }}
      >
        <PageTransitionProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <SmoothScroller />
          </Suspense>
          <Navbar />
          {/* Use the new Client Component wrapper here */}
          <CustomCursor />
          {children}
          <Footer />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
