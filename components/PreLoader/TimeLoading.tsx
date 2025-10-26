"use client";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import gsap from "gsap";

interface TimeLoadingProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const TimeLoading: React.FC<TimeLoadingProps> = ({ isVisible, onComplete }) => {
  const pathname = usePathname();
  const ellipseRef = useRef<SVGElement | null>(null);

  const getPageTitle = (path: string): { title: string; category: string } => {
    if (path === "/") return { title: "Home", category: "Welcome" };
    if (path === "/Services") return { title: "Products", category: "Our Solutions" };
    if (path === "/test") return { title: "Test", category: "Diagnostics" };
    if (path === "/AboutUs") return { title: "About Us", category: "Our Story" };
    if (path === "/Contact") return { title: "Contact", category: "Get in Touch" };
    if (path === "/Blogs") return { title: "Blogs", category: "Insights" };

    if (path.includes("cliff-blue-safe-coating"))
      return { title: "Blue Safe Coating", category: "Protective Solutions" };
    if (path.includes("cliff-blue-safe-lenses"))
      return { title: "Blue Safe Lenses", category: "Digital Protection" };
    if (path.includes("cliff-coatings"))
      return { title: "Premium Coatings", category: "Advanced Technology" };
    if (path.includes("cliff-drive-clear-lenses"))
      return { title: "Drive Clear Lenses", category: "Vision Enhancement" };
    if (path.includes("cliff-dynamix-progressive"))
      return { title: "Dynamix Progressive", category: "Progressive Solutions" };
    if (path.includes("cliff-photo-z-lenses"))
      return { title: "Photo Z Lenses", category: "Adaptive Technology" };
    if (path.includes("cliff-progressive-versatile"))
      return { title: "Progressive Versatile", category: "Multi-focal Solutions" };
    if (path.includes("cliff-single-vision-rx"))
      return { title: "Single Vision RX", category: "Prescription Lenses" };
    if (path.includes("cliff-technology"))
      return { title: "Technology", category: "Innovation Hub" };
    if (path.includes("cliff-tinted-lenses"))
      return { title: "Tinted Lenses", category: "Style & Protection" };
    if (path.includes("cliff-zenn-progressive-lenses"))
      return { title: "Zenn Progressive", category: "Premium Series" };
    if (path.includes("cliff-zenn-series"))
      return { title: "Zenn Series", category: "Signature Collection" };
    if (path.includes("cliff-zenn-single-vision"))
      return { title: "Zenn Single Vision", category: "Essential Series" };
    if (path.includes("progressive-measurement-chart"))
      return { title: "Measurement Chart", category: "Professional Tools" };
    if (path.includes("refractive-index"))
      return { title: "Refractive Index", category: "Technical Specifications" };

    return { title: "Loading", category: "Please Wait" };
  };

  const pageInfo = getPageTitle(pathname);

  useEffect(() => {
    if (!isVisible) return;
    document.body.style.overflow = "hidden";

    const el = ellipseRef.current;
    if (!el) return;

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        onComplete?.();
      },
    });

    // Initial ellipse setup (flat ellipse at bottom)
    gsap.set(el, {
      attr: { cx: 50, cy: 110, rx: 50, ry: 2 },
    });

    //OPENING ANIMATION 
    tl.to(el, {
      attr: { rx: 120, ry: 120, cy: 50 },
      duration: 1.5,
      ease: "power3.inOut",
    });

  

    //LOSING ANIMATION 
    tl.to(el, {
      attr: { cx: 50, cy: 110, rx: 50, ry: 2 }, 
      duration: 1.5,
      ease: "power3.inOut",
    });

    return () => {
      document.body.style.overflow = "auto";
      tl.kill();
    };
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0 }}
          className="fixed inset-0 z-[99999] pointer-events-auto flex items-center justify-center overflow-hidden bg-transparent"
        >
          <div className="absolute inset-0 pointer-events-none">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full h-full"
              aria-hidden
            >
              {/* The animated ellipse */}
              <ellipse
                ref={ellipseRef as any}
                cx={50}
                cy={110}
                rx={50}
                ry={2}
                fill="#0a0a0a"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimeLoading;
