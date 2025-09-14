"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurStorySection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const storyText = [
        "Founded with a vision to revolutionize the eyewear industry, Cliff has been at the forefront of optical innovation for over two decades. What started as a small family business has grown into a trusted name in precision lens technology.",
        "Our journey began with a simple belief: everyone deserves crystal-clear vision that enhances their daily life. This philosophy drives us to continuously push the boundaries of what's possible in lens design and manufacturing.",
        "Today, we combine traditional craftsmanship with cutting-edge technology to create lenses that don’t just correct vision—they elevate it.",
    ];

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        // Inject text once
        contentRef.current!.innerHTML = storyText
            .map(line => `<p class="opacity-0 translate-y-6 mb-6">${line}</p>`)
            .join("");

        const paragraphs = contentRef.current!.querySelectorAll<HTMLParagraphElement>("p");

        // --- Create a GSAP context scoped to this component ---
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=1500",
                    scrub: true,
                    pin: true,
                },
            });

            tl.to(imageRef.current, { opacity: 0, scale: 1.05, duration: 1 }, 0)
                .fromTo(
                    headingRef.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1 },
                    0.2
                );

            paragraphs.forEach((p, i) => {
                tl.to(
                    p,
                    { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" },
                    0.5 + i * 0.2
                );
            });
        }, containerRef);

        // ❗ DO NOT call ScrollTrigger.refresh() or kill global triggers here

        return () => ctx.revert(); // cleans only animations inside this context
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen bg-black text-white">
            <div ref={imageRef} className="absolute inset-0 w-full h-full overflow-hidden">
                <Image src="/eyetest1.jpg" alt="Cliff Lens Craftsmanship" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-24">
                <h2
                    ref={headingRef}
                    className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-center"
                >
                    Our Story
                </h2>
                <div
                    ref={contentRef}
                    className="text-gray-300 text-xl leading-relaxed max-w-3xl text-center whitespace-pre-wrap"
                />
            </div>
        </section>
    );
};

export default OurStorySection;
