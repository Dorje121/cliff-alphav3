"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

interface TransitionAnimateProps {
  children: ReactNode;
}

const TransitionAnimate = ({ children }: TransitionAnimateProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return;
      overlayRef.current.innerHTML = "";
      blockRef.current = [];

      for (let i = 0; i < 20; i++) {
        const block = document.createElement("div");
        block.className = "block";
        overlayRef.current.appendChild(block);
        blockRef.current.push(block);
      }
    };

    createBlocks();
    gsap.set(blockRef.current, { scaleX: 0, transformOrigin: "left" });

    revealPage();

    const handleRouteChange = (url: string) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    };

    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link: any) => {
      const clickHandler = (e: Event) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        const href = new URL(target.href);
        if (href.pathname !== pathname) handleRouteChange(href.pathname);
      };
      link.addEventListener("click", clickHandler);
      link.clickHandler = clickHandler; // store for cleanup
    });

    return () => {
      links.forEach((link: any) => {
        if (link.clickHandler) link.removeEventListener("click", link.clickHandler);
      });
    };
  }, [router, pathname]);

  const coverPage = (url: string) => {
    const tl = gsap.timeline({
      onComplete: () => router.push(url),
    });

    tl.to(blockRef.current, {
      scaleX: 1,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "left",
    });
  };

  const revealPage = () => {
    gsap.set(blockRef.current, { scaleX: 1, transformOrigin: "right" });

    gsap.to(blockRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
      },
    });
  };

  return (
    <>
      <div ref={overlayRef} className="transition-overlay"></div>
      {children}
    </>
  );
};

export default TransitionAnimate;
