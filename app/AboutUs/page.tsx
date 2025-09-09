"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              About Cliff
            </h1>
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
        <section ref={storyRef} className="py-20 px-8 md:px-24 relative">
          {/* Subtle border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-gray-600 rotate-45 opacity-30"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <p>
                    Founded with a vision to revolutionize the eyewear industry,
                    Cliff has been at the forefront of optical innovation for
                    over two decades. What started as a small family business
                    has grown into a trusted name in precision lens technology.
                  </p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-gray-400/60 rounded-full"></div>
                  <p>
                    Our journey began with a simple belief: everyone deserves
                    crystal-clear vision that enhances their daily life. This
                    philosophy drives us to continuously push the boundaries of
                    what&apos;s possible in lens design and manufacturing.
                  </p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-white/40 rounded-full"></div>
                  <p>
                    Today, we combine traditional craftsmanship with
                    cutting-edge technology to create lenses that don&apos;t
                    just correct vision—they elevate it.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="relative aspect-square  flex items-center justify-center  transition-all duration-300">
                <Image
                  src="/eyetest.jpg"
                  alt="Cliff lens craftsmanship"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section ref={missionRef} className="py-20 px-8 md:px-24  relative">
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 relative z-10">
                &ldquo;To provide every individual with the clearest, most
                comfortable vision possible through innovative lens technology
                and personalized eyewear solutions.&rdquo;
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg"></div>
            </div>
            <div className="relative inline-block">
              <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-gray-600/60 mx-auto"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section ref={valuesRef} className="py-20 px-8 md:px-24 relative">
          {/* Minimal floating elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-gray-400/30 rounded-full animate-ping delay-500"></div>
            <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-ping delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="value-card group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 group-hover:border-gray-500/70 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-300">
                    Precision
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every lens we craft meets the highest standards of optical
                    precision, ensuring perfect vision correction for our
                    customers.
                  </p>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full"></div>
                </div>
              </div>

              <div className="value-card group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-gray-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 group-hover:border-gray-400/70 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-300">
                    Innovation
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We continuously invest in research and development to bring
                    you the latest advances in lens technology and design.
                  </p>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gray-400/40 rounded-full"></div>
                </div>
              </div>

              <div className="value-card group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-gray-700/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 group-hover:border-gray-300/70 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">
                    Care
                  </h3>
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

        {/* Team Section */}
        <section
          ref={teamRef}
          className="py-20 px-8 md:px-24 bg-gradient-to-r from-gray-900/90 via-gray-800/50 to-gray-900/90 relative"
        >
          {/* Neon grid background */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                linear-gradient(cyan 1px, transparent 1px),
                linear-gradient(90deg, cyan 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Expert Team
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="relative w-32 h-32 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-full mx-auto flex items-center justify-center border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-all duration-300">
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      OT
                    </span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-300">
                  Optical Technicians
                </h3>
                <p className="text-gray-400">
                  Certified professionals with decades of experience in lens
                  crafting and optical science.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="relative w-32 h-32 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-full mx-auto flex items-center justify-center border-2 border-emerald-400/50 group-hover:border-emerald-400 transition-all duration-300">
                    <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                      RD
                    </span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-emerald-300">
                  R&D Specialists
                </h3>
                <p className="text-gray-400">
                  Leading researchers developing the next generation of lens
                  technology and materials.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="relative w-32 h-32 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-full mx-auto flex items-center justify-center border-2 border-purple-400/50 group-hover:border-purple-400 transition-all duration-300">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      CS
                    </span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-600"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-300">
                  Customer Specialists
                </h3>
                <p className="text-gray-400">
                  Dedicated support team ensuring you find the perfect lens
                  solution for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 px-8 md:px-24 relative">
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-spin-slow-reverse"></div>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="relative inline-block">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    20+
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Years of Excellence
                </p>
              </div>
              <div className="group">
                <div className="relative inline-block">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    50K+
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-blue-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Happy Customers
                </p>
              </div>
              <div className="group">
                <div className="relative inline-block">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    15+
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Lens Technologies
                </p>
              </div>
              <div className="group">
                <div className="relative inline-block">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    99%
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-red-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
