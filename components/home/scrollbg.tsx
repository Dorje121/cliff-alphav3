"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollBackground() {
  // Set initial background to black
  useEffect(() => {
    document.body.style.backgroundColor = "black";
    
    const ctx = gsap.context(() => {

   


      // starting section
      ScrollTrigger.create({
        trigger: "#home-list",
        start: "top 0%",
        onEnter: () => {
          gsap.to("body", { 
            backgroundColor: "white", 
            duration: 0.9,
            overwrite: true
          });
        },
        onLeaveBack: () => {
          gsap.to("body", { 
            backgroundColor: "black", 
            duration: 0.6,
            overwrite: true
          });
        }
      });
      ScrollTrigger.create({
        trigger: "#home-list",
        start: "top 0%",
        onEnter: () => {
          gsap.to("body", { 
            backgroundColor: "white", 
            duration: 0.9,
            overwrite: true
          });
        },
        onLeaveBack: () => {
          gsap.to("body", { 
            backgroundColor: "black", 
            duration: 0.8,
            overwrite: true
          });
        }
      });

     

      // ending section section
      ScrollTrigger.create({
        trigger: "#blog",
        start: "center 30%", 
        end: "bottom top", 
        onEnter: () => {
          gsap.to("body", { 
            backgroundColor: "black", 
            duration: 0.8,
            overwrite: true
          });
        },
        onLeaveBack: () => {
          gsap.to("body", { 
            backgroundColor: "white", 
            duration: 0.8,
            overwrite: true
          });
        },
        onLeave: () => {
          gsap.to("body", {
            backgroundColor: "black",
            duration: 0.8,
            overwrite: true
          });
        },
        onEnterBack: () => {
          gsap.to("body", {
            backgroundColor: "black",
            duration: 0.8,
            overwrite: true
          });
        }
      });
    });

    return () => {
      ctx.revert();
      document.body.style.backgroundColor = "";
    };

    return () => ctx.revert();  //cleanup on unmount
  }, []);

  return null; 
}
