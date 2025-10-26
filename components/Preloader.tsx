"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      const top = ".logo-top";
      const thirdLogo = ".logo-third"; // NEW: Third logo shows early
      const bottom = ".logo-bottom";
      const group = ".logo-group";

      const middleGroup = ".middle-logo-group";
      const middleMiddle = ".middle-logo-middle";
      const middleTop = ".middle-logo-top";
      const middleBottom = ".middle-logo-bottom";

      const leftGroup = ".left-logo-group";
      const leftTop = ".left-logo-top";
      const leftMiddle = ".left-logo-middle";
      const leftBottom = ".left-logo-bottom";

      const rightGroup1 = ".right-logo-group-1";
      const rightMiddle1 = ".right-logo-middle-1";
      const rightTop1 = ".right-logo-top-1";
      const rightBottom1 = ".right-logo-bottom-1";

      const rightGroup2 = ".right-logo-group-2";
      const rightMiddle2 = ".right-logo-middle-2";
      const rightTop2 = ".right-logo-top-2";
      const rightBottom2 = ".right-logo-bottom-2";

      // Selectors for first group's first middle and fourth logos
      const firstGroupFirstMiddle = ".first-group-first-middle"; // NEW: First middle shows with groups
      const firstGroupFourth = ".first-group-fourth";

      document.body.style.overflow = "hidden";

      // Animate only third logo, top, and bottom in first group (early)
      tl.fromTo(
        [top, thirdLogo, bottom], // CHANGED: Now animating third logo early instead of first middle
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
      );

      // Animate top and bottom logos (only in first group)
      tl.fromTo(
        [top, bottom],
        { opacity: 0, y: (i) => (i === 0 ? -30 : 30) },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0, ease: "power2.out" },
        "+=0.3"
      );

      // Move the first group to the left
      tl.to(group, {
        x: "-49vw",
        duration: 1,
        ease: "power3.inOut",
      });

      // Show all other groups INCLUDING first group's first middle and fourth logos
      const showGroups = gsap.timeline();

      // Animate first group's first middle and fourth logos along with left group
      showGroups.fromTo(
        [leftTop, leftMiddle, leftBottom, firstGroupFirstMiddle, firstGroupFourth], // CHANGED: firstGroupSecond to firstGroupFirstMiddle
        {
          opacity: 0,
          y: (i) => {
            // Handle the mixed array: first 3 are left group, last 2 are first group's positions
            if (i < 3) {
              return i === 0 ? -30 : i === 2 ? 30 : 0;
            } else {
              return 0; // For the first group's logos, no vertical movement
            }
          },
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0,
        },
        0
      );

      showGroups.fromTo(
        [middleTop, middleMiddle, middleBottom],
        {
          opacity: 0,
          y: (i) => (i === 0 ? -30 : i === 2 ? 30 : 0),
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0,
        },
        0
      );

      showGroups.fromTo(
        [rightTop1, rightMiddle1, rightBottom1],
        {
          opacity: 0,
          y: (i) => (i === 0 ? -30 : i === 2 ? 30 : 0),
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0,
        },
        0
      );

      showGroups.fromTo(
        [rightTop2, rightMiddle2, rightBottom2],
        {
          opacity: 0,
          y: (i) => (i === 0 ? -30 : i === 2 ? 30 : 0),
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0,
        },
        0
      );

      // Add showGroups to main timeline
      tl.add(showGroups);

      // Small pause after showing all groups
      tl.to({}, { duration: 0.5 });

      // Fade out everything except the third group's third logo
      tl.to(container.current, {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          if (container.current) {
            // Keep the third group's third logo visible
            const thirdGroupThirdLogo = container.current.querySelector<HTMLElement>('.right-logo-bottom-2');
            if (thirdGroupThirdLogo) {
              thirdGroupThirdLogo.style.opacity = '1';
            }
          }
        },
      });

      // After 1 second, fade out the third group's third logo and apply zoom effect
      tl.call(() => {
        const zoomWrapper = document.querySelector('.zoom-wrapper') as HTMLElement;
        if (zoomWrapper) {
          // Reset any transforms before starting the zoom
          gsap.set(zoomWrapper, {
            x: 0,
            y: 0,
            scale: 1,
            transformOrigin: 'center center',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            willChange: 'transform'
          });
          
          // Force reflow to ensure the reset takes effect
          void zoomWrapper.offsetWidth;
          
          // Apply the zoom animation
          gsap.to(zoomWrapper, {
            scale: 200,
            duration: 1.5,
            ease: 'power3.inOut',
            onStart: () => {
              // Ensure the wrapper is properly positioned
              zoomWrapper.style.transform = 'translate3d(0, 0, 0) scale(1)';
            },
            onUpdate: () => {
              // Force hardware acceleration and ensure smooth scaling
              zoomWrapper.style.transform = `translate3d(0, 0, 0) scale(${zoomWrapper._gsap.scale})`;
            },
            onComplete: () => {
              if (container.current) {
                container.current.style.display = "none";
                document.body.style.overflow = "auto";
              }
            }
          });
        }
      }, undefined, "+=1");
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
    >
      <div className="zoom-wrapper relative w-full h-full flex items-center justify-center">
        
        <div className="logo-group flex flex-col items-center top-0 bottom-0 justify-between h-[100vh] absolute left-1/2 transform translate-x-[-40%] z-10">
          <div className="logo-top opacity-0">
            <CliffLogo />
          </div>
          <div className="first-group-first-middle opacity-0">
            <CliffLogo />
          </div>
          <div className="logo-third opacity-0">
            <CliffLogo />
          </div>
          <div className="first-group-fourth opacity-0">  
                       <CliffLogo />
          </div>
          <div className="logo-bottom opacity-0">
            <CliffLogo />
          </div>
        </div>

        {/* Second Group */}
        <div className="left-logo-group flex flex-col items-center justify-between h-[100vh] absolute left-[15%] ml-[15%] transform -translate-x-1/2">
          <div className="left-logo-top opacity-0">
            <CliffLogo />
          </div>
          <div className="left-logo-middle opacity-0">
            <CliffLogo />
          </div>
          <div className="left-logo-middle opacity-0">
            <CliffLogo />
          </div>
          <div className="left-logo-middle opacity-0">
            <CliffLogo />
          </div>
          <div className="left-logo-bottom opacity-0">
            <CliffLogo />
          </div>
        </div>

        {/* Third Group */}
        <div className="middle-logo-group flex flex-col items-center justify-between h-[100vh] absolute left-[30%] ml-[22%] transform -translate-x-1/2">
          <div className="middle-logo-top opacity-0">
            <CliffLogo />
          </div>
          <div className="middle-logo-middle opacity-0">
            <CliffLogo />
          </div>
          <div className="middle-logo-bottom opacity-0">
            <CliffLogo />
          </div>
          <div className="middle-logo-bottom opacity-0">
            <CliffLogo />
          </div>
          <div className="middle-logo-bottom opacity-0">
            <CliffLogo />
          </div>
        </div>

        {/* Fourth Group */}
        <div className="right-logo-group-1 flex flex-col items-center justify-between h-[100vh] absolute right-[25%] transform translate-x-1/2">
          <div className="right-logo-top-1 opacity-0">
            <CliffLogo />
          </div>
          <div className="right-logo-middle-1 opacity-0">
            <CliffLogo />
          </div>
          <div className="right-logo-bottom-1 opacity-0">
            <CliffLogo />
          </div>
          <div className="right-logo-bottom-1 opacity-0">
            <CliffLogo />
          </div>
          <div className="right-logo-bottom-1 opacity-0">
            <CliffLogo />
          </div>
        </div>

        {/* Fifth Group */}
        <div className="right-logo-group-2 flex flex-col items-center justify-between h-[100vh] absolute right-[2%] transform translate-x-1/2">
          <div className="right-logo-top-2 opacity-0">
            <CliffLogo />
          </div>
          <div className="right-logo-middle-2 opacity-0">
            <CliffLogo />
          </div>
          <div className="right-logo-bottom-2 opacity-0">
            <CliffLogo />
          </div>
          <div className="right-logo-bottom-2 opacity-0">
            <CliffLogo />
          </div>
          <div className="right-logo-bottom-2 opacity-0">
            <CliffLogo />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable SVG (unchanged)
const CliffLogo = () => (
  <div className="w-full h-full flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 60"
      className="w-[w00px] h-[100px]"
      fill="#FFD700"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="scale(0.8) translate(10, 5)">
        <path d="M15.5938 6.19486L25.8391 16.4402C26.4047 17.0058 26.4049 17.9231 25.8391 18.4891C25.2733 19.0552 24.3558 19.0555 23.79 18.4894L14.57 9.26994L5.34606 18.4928C4.77999 19.0589 3.86243 19.0589 3.29662 18.4928C2.73055 17.9267 2.73055 17.0094 3.29662 16.4434L13.5446 6.19486C14.1104 5.62906 15.0277 5.62906 15.5935 6.19486H15.5938Z" />
        <path d="M29.9363 14.3917C29.3703 14.9575 28.4527 14.9575 27.8869 14.3917L17.6423 4.1471C17.0763 3.58104 17.0763 2.66347 17.6423 2.0974C18.2084 1.53133 19.126 1.53133 19.692 2.0974L29.9366 12.342C30.5027 12.908 30.5027 13.8259 29.9366 14.3917H29.9363Z" />
        <path d="M29.9392 20.537C30.5053 21.103 30.5053 22.0211 29.9392 22.5872L23.7875 28.7389C23.2217 29.3047 22.3044 29.3047 21.7386 28.7389L15.5908 22.5911C15.0244 22.0248 15.0244 21.1064 15.5908 20.5401C16.1571 19.9738 17.0752 19.9738 17.6415 20.5401L22.7647 25.6615L27.8895 20.537C28.4556 19.9709 29.3734 19.9706 29.9397 20.537H29.9392Z" />
        <path d="M15.5954 14.391C16.1609 14.9565 16.1609 15.8738 15.5951 16.4393L10.4711 21.562L15.5936 26.6844C16.1602 27.251 16.1602 28.1699 15.5936 28.7365C15.027 29.3031 14.1084 29.3031 13.5418 28.7365L7.39502 22.5898C6.83367 22.0284 6.82921 21.1208 7.38216 20.554L7.40866 20.5275L8.42275 19.5136L13.547 14.391C14.1126 13.8254 15.0296 13.8254 15.5954 14.391Z" />
        <path d="M45.2691 25.8995C42.957 25.8995 41.194 25.3747 39.9803 24.3249C38.7666 23.259 38.1602 21.693 38.1602 19.6265V14.3624C38.1602 12.2963 38.767 10.7381 39.9803 9.68868C41.194 8.62279 42.9567 8.08984 45.2691 8.08984C46.8761 8.08984 48.188 8.36042 49.205 8.90158C50.238 9.42631 51.058 10.2216 51.6648 11.2875L49.1803 13.0095C48.672 12.2224 48.1391 11.6566 47.5815 11.3121C47.0403 10.9677 46.2697 10.7956 45.2691 10.7956C44.0065 10.7956 43.0798 11.099 42.4894 11.7059C41.9154 12.2963 41.6284 13.1819 41.6284 14.3624V19.6265C41.6284 20.8074 41.9154 21.7008 42.4894 22.3077C43.0798 22.8981 44.0061 23.1933 45.2691 23.1933C46.3514 23.1933 47.1878 23.0131 47.7782 22.6522C48.385 22.2748 48.9262 21.6766 49.4016 20.8563L51.8615 22.6764C51.3367 23.4307 50.7956 24.0375 50.238 24.4966C49.6804 24.9556 48.9997 25.3083 48.1962 25.5542C47.4091 25.7838 46.4335 25.8987 45.2691 25.8987V25.8995ZM59.8243 25.6043C57.7254 25.6043 56.2165 25.1452 55.298 24.2267C54.3959 23.3083 53.9451 21.98 53.9451 20.242V8.38543H57.4134V20.242C57.4134 21.144 57.6104 21.8162 58.0038 22.2588C58.3971 22.685 59.004 22.8985 59.8239 22.8985H65.334V25.6043H59.8239H59.8243ZM68.0364 8.38543H71.5047V25.6043H68.0364V8.38543ZM75.0603 13.7477C75.0603 12.0093 75.5357 10.681 76.487 9.76295C77.438 8.84448 79.0044 8.38543 81.1854 8.38543H86.9414V11.0912H81.1854C80.2834 11.0912 79.6112 11.3043 79.1682 11.7309C78.742 12.1571 78.5285 12.8296 78.5285 13.7481V16.134H85.8587V18.8398H78.5285V25.6043H75.0603V13.7477ZM89.2811 13.7477C89.2811 12.0093 89.7566 10.681 90.7079 9.76295C91.6592 8.84448 93.2252 8.38543 95.4062 8.38543H101.162V11.0912H95.4062C94.5042 11.0912 93.8316 11.3043 93.389 11.7309C92.9628 12.1571 92.7493 12.8296 92.7493 13.7481V16.134H100.08V18.8398H92.7493V25.6043H89.2811V13.7477Z" />
      </g>
    </svg>
  </div>
);