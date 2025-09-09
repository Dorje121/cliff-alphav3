"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import Tempus from "@studio-freight/tempus";
import Lenis from "@studio-freight/lenis";
import { usePathname, useSearchParams } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroller() {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (lenis.current) {
      lenis.current.scrollTo(0, { immediate: true });
      // Refresh ScrollTrigger after route change
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [pathname, searchParams, lenis]);

  useLayoutEffect(() => {
    lenis.current = new Lenis({
      smoothWheel: true,
      syncTouch: true, // Better mobile experience
      // Customize other instance settings here
    });

    const resize = setInterval(() => {
      lenis.current!.resize();
      // Refresh ScrollTrigger on resize
      ScrollTrigger.refresh();
    }, 150);

    function onFrame(time: number) {
      lenis.current!.raf(time);
      // Update ScrollTrigger on each frame for better integration
      ScrollTrigger.update();
    }

    const unsubscribe = Tempus.add(onFrame);

    return () => {
      unsubscribe();
      clearInterval(resize);
      lenis.current!.destroy();
      lenis.current = null;
    };
  }, []);

  return null;
}
