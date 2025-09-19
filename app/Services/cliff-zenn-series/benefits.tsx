"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const cards = sectionRef.current.querySelectorAll(".benefit-card");

        // Set initial hidden state
        gsap.set(cards, { opacity: 0, y: 40, scale: 0.95 });

        // Faster animation: reduced duration + stagger
        gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.15, // ⬅ slightly quicker one-by-one reveal
            duration: 0.6, // ⬅ faster fade + slide
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="px-4 sm:px-6 md:px-8 py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Clarity */}
                <div className="benefit-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                    <div className="text-5xl mb-4 mx-auto w-fit">
                        <svg
                            fill="none"
                            stroke="#FFD700"
                            strokeWidth={0.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-20 h-20"
                            viewBox="0 0 24 24"
                        >
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            <path d="M12 5v1M12 18v1M5 12H4M20 12h1" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-300">Clarity</h3>
                    <p className="text-gray-300">
                        Crystal clear vision with advanced lens technology for optimal visual performance
                    </p>
                </div>

                {/* Comfort */}
                <div className="benefit-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                    <div className="text-5xl mb-4 mx-auto w-fit">
                        <svg
                            className="w-20 h-20"
                            xmlns="http://www.w3.org/2000/svg"
                            strokeWidth={0.5}
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="#FFD700"
                                d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M84 108a8 8 0 1 1 8 8a8 8 0 0 1-8-8m96 0a4 4 0 0 1-4 4h-24a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4m-8.54 46c-9.55 16.52-25.39 26-43.46 26s-33.91-9.48-43.46-26a4 4 0 0 1 6.92-4c8.21 14.19 21.19 22 36.54 22s28.33-7.81 36.54-22a4 4 0 1 1 6.92 4"
                            />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-300">Comfort</h3>
                    <p className="text-gray-300">
                        All-day comfort with reduced eye strain and fatigue during extended use
                    </p>
                </div>

                {/* Digital Ready */}
                <div className="benefit-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                    <div className="text-5xl mb-4 mx-auto w-fit">
                        <svg
                            fill="none"
                            stroke="#FFD700"
                            strokeWidth={0.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-20 h-20"
                            viewBox="0 0 24 24"
                        >
                            <rect x="7" y="2" width="10" height="20" rx="2" />
                            <path d="M16 16l2 2 4-4" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-300">Digital Ready</h3>
                    <p className="text-gray-300">
                        Optimized for digital device usage with blue light protection
                    </p>
                </div>

                {/* Precised */}
                <div className="benefit-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                    <div className="text-5xl mb-4 mx-auto w-fit">
                        <svg
                            fill="none"
                            stroke="#FFD700"
                            strokeWidth={0.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-20 h-20"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="6" />
                            <circle cx="12" cy="12" r="2" />
                            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-300">Precised</h3>
                    <p className="text-gray-300">
                        Precision-crafted lenses for accurate vision correction in all conditions
                    </p>
                </div>

                {/* Personalized */}
                <div className="benefit-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                    <div className="text-5xl mb-4 mx-auto w-fit">
                        <svg
                            fill="none"
                            stroke="#FFD700"
                            strokeWidth={0.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-20 h-20"
                            viewBox="0 0 24 24"
                        >
                            <path d="M2 16s2 0 3 2c1 2 3 2 5 0 2-2 3-1 4 0 1 1 3 1 4-1 1-2 3-1 4 0" />
                            <path d="M8 13h.01M16 13h.01M6 10a2 2 0 1 1 4 0v1M14 10a2 2 0 1 1 4 0v1" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-300">Personalized</h3>
                    <p className="text-gray-300">
                        Customized to your unique visual needs and lifestyle requirements
                    </p>
                </div>

                {/* Durable */}
                <div className="benefit-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                    <div className="text-5xl mb-4 mx-auto w-fit">
                        <svg
                            fill="none"
                            stroke="#FFD700"
                            strokeWidth={0.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-20 h-20"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2l8 4v6c0 5-3.6 9.4-8 10-4.4-.6-8-5-8-10V6l8-4z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-300">Durable</h3>
                    <p className="text-gray-300">
                        Long-lasting quality with superior scratch and impact resistance
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
