import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "../globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroller from "@/components/lenis/SmoothScroller";
import { Suspense } from "react";
import PageTransitionProvider from "@/components/PreLoader/PageTransitionProvider";

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

export const metadata: Metadata = {
  title: "CLIFF - Premium Lens Technology",
  description: "Experience the future of vision with CLIFF premium lens technology",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased cursor-none`}
        style={{
          overflow: "auto",
          height: "100%",
        }}
      >
        <PageTransitionProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <SmoothScroller />
          </Suspense>
          <CustomCursor />
          {children}
          {/* No Navbar or Footer for landing page */}
        </PageTransitionProvider>
      </body>
    </html>
  );
}
