// // components/CustomCursor.tsx
// "use client";
// import React, { useEffect } from "react";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useMotionTemplate,
// } from "framer-motion";

// const CustomCursor: React.FC = () => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const springConfig = { stiffness: 500, damping: 30, mass: 0.5 };
//   const smoothMouseX = useSpring(mouseX, springConfig);
//   const smoothMouseY = useSpring(mouseY, springConfig);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [mouseX, mouseY]);

//   const isMobile = () => {
//     if (typeof window === 'undefined') return false;
//     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
//   };

//   if (isMobile()) {
//     return null;
//   }


//   const transform = useMotionTemplate`translate3d(${smoothMouseX}px, ${smoothMouseY}px, 0) translate3d(-50%, -50%, 0)`;

//     return (
//       <motion.div
//       style={{ transform }}
//       id="custom-cursor"
      
//       className="fixed top-0 left-0 z-[9999999999999999999] w-10 h-10 bg-white rounded-full pointer-events-none mix-blend-difference"
//     />
//   );
// };

// export default CustomCursor;




"use client";
import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 500, damping: 30, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ✅ Ensure the native cursor is visible
    document.body.style.cursor = "default";
    document.documentElement.style.cursor = "default";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const isMobile = () =>
    typeof window !== "undefined" &&
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
      window.innerWidth <= 768);

  if (isMobile()) return null;

  const transform = useMotionTemplate`translate3d(${smoothMouseX}px, ${smoothMouseY}px, 0) translate3d(-50%, -50%, 0)`;

  return (
    <motion.div
      style={{ transform }}
      id="custom-cursor"
      className="fixed top-0 left-0 z-[9999999999999999999] w-10 h-10 bg-white rounded-full pointer-events-none mix-blend-difference"
    />
  );
};

export default CustomCursor;
