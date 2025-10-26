"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import TransitionLink from "@/components/PreLoader/TransitionLink";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/Services", label: "Products" },
  { href: "/Coating", label: "Coatings" },
  { href: "/Technologies", label: "Technologies" },
  { href: "/Contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isInFirstSection, setIsInFirstSection] = useState(false);

  const closeMenu = (onCompleteCallback?: () => void) => {
    const menuLinks = gsap.utils.toArray(".menu-link");
    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
        if (onCompleteCallback) onCompleteCallback();
      },
    });

    // Fade out menu links
    tl.to(menuLinks, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.in",
    });

    // Fade out right panel image
    tl.to(
      ".lense",
      {
        opacity: 0,
        y: 50,
        duration: 0.4,
        ease: "power2.in",
      },
      "-=0.3"
    );

    // Shrink the white content layer into U-shape (mirrors opening)
    tl.to(
      menuRef.current,
      {
        clipPath: "ellipse(100% 0% at 50% 100%)",
        duration: 0.8,
        ease: "power3.inOut",
      },
      "-=0.2"
    );

    // Shrink the dark overlay into U-shape
    tl.to(
      overlayRef.current,
      {
        clipPath: "ellipse(100% 0% at 50% 100%)",
        duration: 0.8,
        ease: "power3.inOut",
      },
      "-=0.6"
    );
  };

  const handleLinkClick = (href: string) => {
    if (pathname === href) {
      closeMenu();
      return;
    }
    closeMenu();
  };

  const handleGoHome = () => closeMenu();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const menuLinks = gsap.utils.toArray(".menu-link");

      // Set initial state (U-shape at bottom)
      gsap.set([overlayRef.current, menuRef.current], {
        clipPath: "ellipse(100% 0% at 50% 100%)",
        display: "block",
      });
      gsap.set(menuLinks, { opacity: 0, y: 50 });
      gsap.set(".lense", { opacity: 0, y: 100 });

      const tl = gsap.timeline();

      // Animate overlay expanding
      tl.to(overlayRef.current, {
        clipPath: "ellipse(100% 150% at 50% 100%)",
        duration: 0.8,
        ease: "power3.inOut",
      });

      // Animate white content layer expanding
      tl.to(
        menuRef.current,
        {
          clipPath: "ellipse(100% 150% at 50% 100%)",
          duration: 0.8,
          ease: "power3.inOut",
        },
        "-=0.3"
      );

      // Fade in menu links
      tl.to(
        menuLinks,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      // Fade in right image
      tl.to(
        ".lense",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.7"
      );
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (overlayRef.current && menuRef.current) {
      gsap.set([overlayRef.current, menuRef.current], {
        clipPath: "ellipse(100% 0% at 50% 100%)",
        display: "block",
      });
    }
  }, []);

  // Scroll detection
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (
      pathname === "/Services/cliff-coatings" ||
      pathname === "/Services/cliff-blue-safe-coating"
    ) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const firstSectionHeight = window.innerHeight * 0.9;
        setIsInFirstSection(scrollPosition < firstSectionHeight);
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsInFirstSection(false);
    }
  }, [pathname]);

  const isTestProductPage = pathname === "/testProduct";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9999999999] transition-colors duration-300 ${
          isOpen
            ? "text-black"
            : isTestProductPage || isInFirstSection
            ? "text-white"
            : "text-white"
        }`}
      >
        <div className="max-w-[1500px] mx-auto p-4 flex items-center justify-between">
          {/* Logo */}
          <TransitionLink
            href="/"
            onClick={handleGoHome}
            className="relative flex items-center space-x-2 text-sm font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="106"
              height="33"
              viewBox="0 0 106 33"
              fill="currentColor"
            >
              <path
                d="M15.5938 6.19486L25.8391 16.4402C26.4047 17.0058 26.4049 17.9231 25.8391 18.4891C25.2733 19.0552 24.3558 19.0555 23.79 18.4894L14.57 9.26994L5.34606 18.4928C4.77999 19.0589 3.86243 19.0589 3.29662 18.4928C2.73055 17.9267 2.73055 17.0094 3.29662 16.4434L13.5446 6.19486C14.1104 5.62906 15.0277 5.62906 15.5935 6.19486H15.5938Z"
                fill={isTestProductPage ? "#FFFFFF" : "#FFD700"}
              />
              <path
                d="M29.9363 14.3917C29.3703 14.9575 28.4527 14.9575 27.8869 14.3917L17.6423 4.1471C17.0763 3.58104 17.0763 2.66347 17.6423 2.0974C18.2084 1.53133 19.126 1.53133 19.692 2.0974L29.9366 12.342C30.5027 12.908 30.5027 13.8259 29.9366 14.3917H29.9363Z"
                fill={isTestProductPage ? "#FFFFFF" : "#FFD700"}
              />
              <path
                d="M29.9392 20.537C30.5053 21.103 30.5053 22.0211 29.9392 22.5872L23.7875 28.7389C23.2217 29.3047 22.3044 29.3047 21.7386 28.7389L15.5908 22.5911C15.0244 22.0248 15.0244 21.1064 15.5908 20.5401C16.1571 19.9738 17.0752 19.9738 17.6415 20.5401L22.7647 25.6615L27.8895 20.537C28.4556 19.9709 29.3734 19.9706 29.9397 20.537H29.9392Z"
                fill={isTestProductPage ? "#FFFFFF" : "#FFD700"}
              />
              <path
                d="M15.5954 14.391C16.1609 14.9565 16.1609 15.8738 15.5951 16.4393L10.4711 21.562L15.5936 26.6844C16.1602 27.251 16.1602 28.1699 15.5936 28.7365C15.027 29.3031 14.1084 29.3031 13.5418 28.7365L7.39502 22.5898C6.83367 22.0284 6.82921 21.1208 7.38216 20.554L7.40866 20.5275L8.42275 19.5136L13.547 14.391C14.1126 13.8254 15.0296 13.8254 15.5954 14.391Z"
                fill={isTestProductPage ? "#FFFFFF" : "#FFD700"}
              />
              <path
                d="M45.2691 25.8995C42.957 25.8995 41.194 25.3747 39.9803 24.3249C38.7666 23.259 38.1602 21.693 38.1602 19.6265V14.3624C38.1602 12.2963 38.767 10.7381 39.9803 9.68868C41.194 8.62279 42.9567 8.08984 45.2691 8.08984C46.8761 8.08984 48.188 8.36042 49.205 8.90158C50.238 9.42631 51.058 10.2216 51.6648 11.2875L49.1803 13.0095C48.672 12.2224 48.1391 11.6566 47.5815 11.3121C47.0403 10.9677 46.2697 10.7956 45.2691 10.7956C44.0065 10.7956 43.0798 11.099 42.4894 11.7059C41.9154 12.2963 41.6284 13.1819 41.6284 14.3624V19.6265C41.6284 20.8074 41.9154 21.7008 42.4894 22.3077C43.0798 22.8981 44.0061 23.1933 45.2691 23.1933C46.3514 23.1933 47.1878 23.0131 47.7782 22.6522C48.385 22.2748 48.9262 21.6766 49.4016 20.8563L51.8615 22.6764C51.3367 23.4307 50.7956 24.0375 50.238 24.4966C49.6804 24.9556 48.9997 25.3083 48.1962 25.5542C47.4091 25.7838 46.4335 25.8987 45.2691 25.8987V25.8995ZM59.8243 25.6043C57.7254 25.6043 56.2165 25.1452 55.298 24.2267C54.3959 23.3083 53.9451 21.98 53.9451 20.242V8.38543H57.4134V20.242C57.4134 21.144 57.6104 21.8162 58.0038 22.2588C58.3971 22.685 59.004 22.8985 59.8239 22.8985H65.334V25.6043H59.8239H59.8243ZM68.0364 8.38543H71.5047V25.6043H68.0364V8.38543ZM75.0603 13.7477C75.0603 12.0093 75.5357 10.681 76.487 9.76295C77.438 8.84448 79.0044 8.38543 81.1854 8.38543H86.9414V11.0912H81.1854C80.2834 11.0912 79.6112 11.3043 79.1682 11.7309C78.742 12.1571 78.5285 12.8296 78.5285 13.7481V16.134H85.8587V18.8398H78.5285V25.6043H75.0603V13.7477ZM89.2811 13.7477C89.2811 12.0093 89.7566 10.681 90.7079 9.76295C91.6592 8.84448 93.2252 8.38543 95.4062 8.38543H101.162V11.0912H95.4062C94.5042 11.0912 93.8316 11.3043 93.389 11.7309C92.9628 12.1571 92.7493 12.8296 92.7493 13.7481V16.134H100.08V18.8398H92.7493V25.6043H89.2811V13.7477Z"
                fill={isTestProductPage ? "#FFFFFF" : "#FFD700"}
              />
            </svg>
          </TransitionLink>

          {/* Menu Button */}
          <button
            onClick={isOpen ? handleGoHome : () => setIsOpen(true)}
            className="relative flex items-center montserrat text-[#FFD700] space-x-2 cursor-pointer"
          >
            <span className="text-sm font-semibold uppercase">
              {isOpen ? "Close" : "Menu"}
            </span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Overlay + Menu */}
      {isOpen && (
        <>
          <div
            ref={overlayRef}
            className="fixed top-0 left-0 w-screen h-screen bg-[#EEF3F3] z-[99998] will-change-transform"
          />

          <div
            ref={menuRef}
            className="fixed top-0 left-0 w-screen h-screen bg-white !flex z-[99999] will-change-transform"
          >
            {/* Left panel (links) */}
            <div className="w-full md:w-11/12 h-full flex flex-col justify-center items-center md:text-left text-center md:items-start p-8 md:py-24 text-black">
              <div className="flex flex-col items-start group text-zinc-700 hover:text-zinc-200 space-y-2 xs:space-y-7 md:space-y-7 mx-10">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <TransitionLink
                      key={link.href}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`menu-link text-[2rem] xs:text-4xl md:text-6xl font-bold uppercase tracking-wide ${
                        isActive ? "" : " transition-colors duration-300"
                      } hover:text-zinc-800 transition-all duration-900`}
                    >
                      {link.label}
                    </TransitionLink>
                  );
                })}
              </div>
            </div>

            <div className=" md:-z-10 hidden lense md:flex w-1/2 justify-start items-end h-full relative">
            <Image
              src="/hand.jpg"
              alt="Decorative lens flare"
              height={1000}
              width={1000}
              className="w-[500px] h-fit object-contain transform -translate-x-28 translate-y-12"
            />
            </div>
          
          </div>
        </>
      )}
    </>
  );
} 