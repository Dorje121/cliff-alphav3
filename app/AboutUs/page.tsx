"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OurStory from './ourstory'
import Achievement from './achievement'
import TextWithTexture from "@/components/textwithgoldentexture";

gsap.registerPlugin(ScrollTrigger);

const AboutUsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );

    // Story section animation
    gsap.fromTo(
      storyRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
        },
      }
    );

    // Values animation
    gsap.fromTo(
      ".value-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
        },
      }
    );

    // Mission animation
    gsap.fromTo(
      missionRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
        },
      }
    );

    // Floating elements animation
    gsap.to(".floating-element", {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-white/3 to-gray-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-white/2 to-gray-400/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 px-8 md:px-24 relative">
          {/* Minimal floating elements */}
          <div className="absolute top-40 right-20 w-2 h-2 bg-white/60 rotate-45 animate-bounce delay-500 floating-element"></div>
          <div className="absolute top-60 right-40 w-3 h-3 bg-gray-400/60 rounded-full animate-bounce delay-1000 floating-element"></div>
          <div className="absolute top-80 right-60 w-1 h-1 bg-white/80 animate-bounce delay-1500 floating-element"></div>

          <div className="max-w-7xl mx-auto">
            <TextWithTexture text="About Cliff" className=" text-6xl md:text-8xl font-bold mb-8" />


            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed relative z-10">
                Pioneering the future of vision with precision-crafted lenses
                and innovative eyewear solutions.
              </p>
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-white/60 to-gray-600/60 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <OurStory />


        <Achievement />

        {/* Mission Statement */}
        <section ref={missionRef} className="py-20 px-8 md:px-24  relative">
          <div className="max-w-4xl mx-auto text-center relative">

            <h2>
              <TextWithTexture text="Our Mission" className=" text-4xl md:text-5xl sm:text-6xl font-bold mb-12  text-center" />
            </h2>
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 relative z-10">
                &ldquo;To provide every individual with the clearest, most
                comfortable vision possible through innovative lens technology
                and personalized eyewear solutions.&rdquo;
              </p>

            </div>

          </div>
        </section>
        {/* Core Values*/}

        <section ref={valuesRef} className="py-20 px-8 md:px-24 relative">
          {/* Minimal floating elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-gray-400/30 rounded-full animate-ping delay-500"></div>
            <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-ping delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto relative">

            <h2>
              <TextWithTexture text="Core Values" className=" text-4xl md:text-5xl sm:text-6xl font-bold mb-12  text-center" />
            </h2>
            <div className="flex justify-center items-start gap-2 flex-wrap">
              <div className="value-card group relative w-[300px] sm:w-[350px] min-h-[300px] shrink-0 ">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="absolute inset-0  bg-[#BFA84A]/10 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 group-hover:border-[#BFA84A] transition-all duration-300 w-full h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">


                    <svg className="w-6 h-6 text-white block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#BFA84A" d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10s10-4.486 10-10s-4.486-10-10-10M18 13h-6.75V6h2v5H18z" /></svg>
                  </div>


                  <h2>
                    <TextWithTexture text="Precision" className=" text-2xl font-bold  " />
                  </h2>

                  <p className="text-gray-300 leading-relaxed">
                    Every lens we craft meets the highest standards of optical
                    precision, ensuring perfect vision.
                  </p>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full"></div>
                </div>
              </div>

              <div className="value-card group relative w-[300px] sm:w-[350px] min-h-[300px] shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-gray-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="absolute inset-0 w-full h-full bg-[#BFA84A]/10 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 group-hover:border-[#BFA84A] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="#BFA84A"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>


                  <h2>
                    <TextWithTexture text="Innovation" className=" text-2xl font-bold mb-4" />
                  </h2>

                  <p className="text-gray-300 leading-relaxed">
                    We continuously invest in research and development to bring
                    you the latest advances in lens technology and design.
                  </p>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gray-400/40 rounded-full"></div>
                </div>
              </div>

              <div className="value-card group relative w-[300px] sm:w-[350px] min-h-[300px] shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-gray-700/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="absolute inset-0 w-full h-full bg-[#BFA84A]/10 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 group-hover:border-[#BFA84A] transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 hover:text-[#BFA84A]">
                    <svg
                      className="w-8 h-8 text-white hover:text-[#BFA84A]"
                      fill="#BFA84A"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </div>
                  <h2>
                    <TextWithTexture text="Care" className=" text-2xl font-bold mb-4" />
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Your vision health is our priority. We provide personalized
                    care and support throughout your eyewear journey.
                  </p>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>



      </div>
    </div>
  );
};

export default AboutUsPage;
