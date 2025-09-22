"use client";
import TextWithTexture from '@/components/textwithgoldentexture';
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
    const techInfoRef = useRef<HTMLDivElement | null>(null);
    const techCardsRef = useRef<HTMLDivElement | null>(null);

    const benInfoRef = useRef<HTMLDivElement | null>(null);
    const benCardsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Technology Info (play once only)
        if (techInfoRef.current) {
            gsap.fromTo(
                techInfoRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: techInfoRef.current,
                        start: "top 80%",
                        end: "top -10%",
                        toggleActions: "play none none none", // play once only
                    },
                }
            );
        }

        // Technology Cards (reversible)
        if (techCardsRef.current) {
            gsap.fromTo(
                techCardsRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: techCardsRef.current,
                        start: "top 90%",
                        end: "top -10%",
                        toggleActions: "play reverse play reverse", // reversible
                    },
                }
            );
        }

        // Benefits Info (play once only)
        if (benInfoRef.current) {
            gsap.fromTo(
                benInfoRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: benInfoRef.current,
                        start: "top 90%",
                        end: "top -10%",
                        toggleActions: "play none none none", // play once only
                    },
                }
            );
        }

        // Benefits Cards (reversible)
        if (benCardsRef.current) {
            gsap.fromTo(
                benCardsRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: benCardsRef.current,
                        start: "top 80%",
                        end: "top -10%",
                        toggleActions: "play reverse play reverse", // reversible
                    },
                }
            );
        }
    }, []);

    return (
        <>
            <section className="px-4 sm:px-6 lg:px-12">
                <h1 className=" py-2 font-ramro text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center my-12 mt-20 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                    Advanced <br />Technology & Benefits
                </h1>

                {/* Technology */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
                    {/* Left Image */}
                    <div className="w-full lg:w-[45%] bg-black rounded-2xl relative overflow-hidden">
                        <div className="flex justify-center relative">
                            <img
                                src="/technology.jpeg"
                                alt="Blue Safe"
                                className="rounded-lg shadow-md max-h-[500px] md:max-h-[600px] object-contain relative z-10 w-full"
                            />
                            {/* Gradient overlays */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
                        </div>
                        <div
                            ref={techInfoRef}
                            className="info mt-6 sm:mt-10 px-4"
                        >
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 text-center relative z-10">
                                Technology
                            </h2>
                            <p className="text-zinc-400 text-sm sm:text-base text-center relative z-10 max-w-[450px] mx-auto">
                                Balanced Process Design, Continuum Design Technology, Wear Fit Customization, and AdaptEase Technology.
                            </p>
                        </div>
                    </div>

                    {/* Right Features */}
                    <div
                        ref={techCardsRef}
                        className="w-full lg:w-[55%]  flex justify-center items-center flex-wrap gap-6 sm:gap-10"
                    >
                        {[
                            { src: "/svgs/scratchresistance.svg", title: "Scratch Resistance", desc: "Durable and long-lasting" },
                            { src: "/svgs/antireflective.svg", title: "Low Reflection", desc: "Low glare and reflections" },
                            { src: "/svgs/easytoclean.svg", title: "Hydrophobic", desc: "Super Hydrophobic Coatings" },
                            { src: "/svgs/bluelight.svg", title: "Blue Filter", desc: "Protects eyes from screens" },
                        ].map((item, i) => (
                            <div key={i} className="text-center border border-gray-600 hover:border-gray-400 bg-[#161617] w-[250px] sm:w-[220px] md:w-[250px] p-4 rounded-md transition-all duration-300 ease-in-out max-h-[300px]">
                                <img src={item.src} alt={item.title} className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4" />
                                <h3 className="font-bold text-lg sm:text-xl text-white mb-2">{item.title}</h3>
                                <p className="text-zinc-300 text-sm sm:text-base">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <div className="my-20 lg:my-32 w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-16">
                    {/* Left Features */}
                    <div
                        ref={benCardsRef}
                        className="w-full lg:w-[55%] flex justify-center items-center flex-wrap gap-6 sm:gap-10"
                    >
                        {[
                            { src: "/svgs/uvprotection.svg", title: "UV Protection", desc: "UV 400, Anti-Reflective" },
                            { src: "/svgs/clearvision.svg", title: "Anti-Glare Coating", desc: "Anti-Glare Coating Lens" },
                            { src: "/svgs/easytoclean.svg", title: "Photochromic", desc: "Shade when exposed to light" },
                        ].map((item, i) => (
                            <div key={i} className="text-center border border-gray-600 hover:border-gray-400 bg-[#161617] w-[250px] sm:w-[220px] md:w-[250px] p-4 rounded-md transition-all duration-300 ease-in-out">
                                <img src={item.src} alt={item.title} className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4" />
                                <h3 className="font-bold text-lg sm:text-xl text-white mb-2">{item.title}</h3>
                                <p className="text-zinc-300 text-sm sm:text-base">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-[45%] bg-black rounded-2xl relative overflow-hidden flex flex-col justify-center">
                        <div className="flex justify-center relative">
                            <img
                                src="/benefits.jpeg"
                                alt="Drive Clear"
                                className="rounded-xl shadow-lg max-h-[500px] md:max-h-[600px] object-contain relative z-0 w-full"
                            />
                            {/* Gradient overlays */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10 rounded-xl"></div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10 rounded-xl"></div>
                        </div>
                        <div
                            ref={benInfoRef}
                            className="mt-6 sm:mt-10 px-4"
                        >
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 text-center relative z-20">
                                Benefits
                            </h2>
                            <p className="text-zinc-400 text-sm sm:text-base text-center relative max-w-[450px] mx-auto z-20 px-4">
                                Superior Vision at all distance, Ultra Clarity, Optimized Fit, Ease of Adaptation
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature;
