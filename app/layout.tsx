import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroller from "@/components/lenis/SmoothScroller";
import { Suspense } from "react";
import LayoutContent from "@/components/LayoutContent";
import PreloaderWrapper from "@/components/PreloaderWrapper";

const montserrat = localFont({
  src: "../public/Montserrat.ttf",
  display: "swap",
  variable: "--font-montserrat",
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
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased cursor-none`}
        style={{
          overflow: "auto",
          height: "100%",
        }}
      >
        <PreloaderWrapper />    
   
          <Suspense fallback={<div>Loading...</div>}>
            <SmoothScroller />
          </Suspense>
         
          <LayoutContent>
            
            {children}
        
          </LayoutContent>
    
      </body>
    </html>
  );
}
