import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StatItem {
    percentage: number;
    label: string;
    subLabel: string;
}

const stats: StatItem[] = [
    {
        percentage: 100,
        label: "Near Zone Easier to Find",
        subLabel: "With Cliff Zenn Progressive Lenses",
    },
    {
        percentage: 94,
        label: "Near Visual Quality Equal or Better",
        subLabel: "With Cliff Zenn Progressive Lenses",
    },
    {
        percentage: 83,
        label: "Easier Adaptation",
        subLabel: "With Cliff Zenn Progressive Lenses",
    },
];

const StatsSection: React.FC = () => {
    const circleRefs = useRef<SVGPathElement[]>([]); // Store refs for all circles

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        circleRefs.current.forEach((circle, index) => {
            if (!circle) return;

            const percentage = stats[index].percentage;
            const dashArray = `${percentage}, 100`;

            gsap.fromTo(
                circle,
                { strokeDasharray: "0, 100" },
                {
                    strokeDasharray: dashArray,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: circle,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse", // play on enter, reverse on leave
                    },
                }
            );
        });
    }, []);

    return (
        <section className="w-full my-20 mt-36 flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 bg-black">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center text-center max-w-[250px]"
                >
                    {/* Circle with percentage */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                        <svg viewBox="0 0 36 36" className="transform -rotate-90">
                            {/* Background Circle */}
                            <path
                                className="text-zinc-700"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            {/* Progress Circle */}
                            <path
                                ref={(el) => {
                                    if (el) circleRefs.current[index] = el;
                                }}
                                className="text-yellow-400"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeDasharray="0, 100" // Start with 0 progress
                                fill="none"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center font-bold text-xl md:text-2xl text-white">
                            {stat.percentage}%
                        </span>
                    </div>

                    {/* Labels */}
                    <p className="mt-3 font-semibold text-white text-sm md:text-base">
                        {stat.label}
                    </p>
                    <p className="text-xs md:text-sm text-zinc-400">{stat.subLabel}</p>
                </div>
            ))}
        </section>
    );
};

export default StatsSection;
