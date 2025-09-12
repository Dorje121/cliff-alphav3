"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievement = () => {
    const leftBoxesRef = useRef<HTMLDivElement[]>([]);
    const rightBoxesRef = useRef<HTMLDivElement[]>([]);
    const countersRef = useRef<HTMLSpanElement[]>([]);

    useEffect(() => {
        // Animate left boxes
        leftBoxesRef.current.forEach((box, i) => {
            gsap.from(box, {
                x: -100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: box,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
            });

            const counter = countersRef.current[i];
            gsap.fromTo(
                counter,
                { innerText: 0 },
                {
                    innerText: parseInt(counter.dataset.value!),
                    duration: 2,
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: box,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        });

        // Animate right boxes
        rightBoxesRef.current.forEach((box, i) => {
            gsap.from(box, {
                x: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: box,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
            });

            const counter = countersRef.current[i + leftBoxesRef.current.length];
            gsap.fromTo(
                counter,
                { innerText: 0 },
                {
                    innerText: parseInt(counter.dataset.value!),
                    duration: 2,
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: box,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section className="bg-black text-white py-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-center">
                Our Achievements
            </h1>
            <div className="parent w-[100%] flex justify-center items-center">
                {/* Left Side */}
                <div className="left w-[50%]">
                    <div
                        className="box1 w-[80%] h-[250px] bg-[#18181B] rounded-3xl mx-auto p-4"
                        ref={(el) => {
                            if (el) leftBoxesRef.current.push(el);
                        }}
                    >
                        <div className="contain w-[100%] h-[100%] flex flex-col justify-between">
                            <div className="flex justify-start items-start gap-2">
                                <span
                                    className="count text-6xl font-semibold"
                                    data-value="20"
                                    ref={(el) => {
                                        if (el) countersRef.current.push(el);
                                    }}
                                >
                                    0
                                </span>
                                <div className="square text-4xl">+</div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="w-[25%]"></div>
                                <span className="head text-5xl font-thin text-right inline-block">
                                    Years of Excellence
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="box2 w-[80%] h-[250px] bg-[#18181B] rounded-3xl mx-auto mt-26 p-4"
                        ref={(el) => {
                            if (el) leftBoxesRef.current.push(el);
                        }}
                    >
                        <div className="contain w-[100%] h-[100%] flex flex-col justify-between">
                            <div className="flex justify-start items-start gap-2">
                                <span
                                    className="count text-6xl font-semibold"
                                    data-value="15"
                                    ref={(el) => {
                                        if (el) countersRef.current.push(el);
                                    }}
                                >
                                    0
                                </span>
                                <div className="square text-4xl">+</div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="w-[25%]"></div>
                                <span className="head text-5xl font-thin text-right inline-block">
                                    Lens Technologies
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="right w-[50%]">
                    <div
                        className="box1 w-[80%] h-[250px] bg-[#18181B] rounded-3xl mx-auto mt-26 p-4"
                        ref={(el) => {
                            if (el) rightBoxesRef.current.push(el);
                        }}
                    >
                        <div className="contain w-[100%] h-[100%] flex flex-col justify-between rounded-lg">
                            <div className="flex justify-start items-start gap-2">
                                <span
                                    className="count text-6xl font-semibold"
                                    data-value="50000"
                                    ref={(el) => {
                                        if (el) countersRef.current.push(el);
                                    }}
                                >
                                    0
                                </span>
                                <div className="square text-4xl">+</div>
                            </div>
                            <div className="flex justify-center items-center    ">
                                <div className="w-[25%]"></div>
                                <span className="head text-5xl font-thin text-right inline-block">
                                    Happy Customers
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="box2 w-[80%] h-[250px] bg-[#18181B] rounded-3xl mx-auto mt-26 p-4"
                        ref={(el) => {
                            if (el) rightBoxesRef.current.push(el);
                        }}
                    >
                        <div className="contain w-[100%] h-[100%] flex flex-col justify-between">
                            <div className="flex justify-start items-start gap-2">
                                <span
                                    className="count text-6xl font-semibold"
                                    data-value="99"
                                    ref={(el) => {
                                        if (el) countersRef.current.push(el);
                                    }}
                                >
                                    0
                                </span>
                                <div className="square text-4xl">%</div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="w-[25%]"></div>
                                <span className="head text-5xl font-thin text-right inline-block">
                                    Satisfaction Rate
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default achievement;
