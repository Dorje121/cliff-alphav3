"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextWithTexture from "../../components/textwithgoldentexture";

gsap.registerPlugin(ScrollTrigger);

const Achievement: React.FC = () => {
    // Updated types: allow null in the array
    const leftBoxesRef = useRef<(HTMLDivElement | null)[]>([]);
    const rightBoxesRef = useRef<(HTMLDivElement | null)[]>([]);
    const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

    // Clear refs to avoid duplicates
    leftBoxesRef.current = [];
    rightBoxesRef.current = [];
    countersRef.current = [];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate left boxes
            leftBoxesRef.current.forEach((box, i) => {
                if (!box) return; // guard
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
                if (counter) {
                    gsap.fromTo(
                        counter,
                        { innerText: 0 },
                        {
                            innerText: parseInt(counter.dataset.value!),
                            duration: 2,
                            snap: { innerText: 1 },
                            ease: "power1.out",
                            scrollTrigger: {
                                trigger: box,
                                start: "top 80%",
                                toggleActions: "play reverse play reverse",
                            },
                        }
                    );
                }
            });

            // Animate right boxes
            rightBoxesRef.current.forEach((box, i) => {
                if (!box) return;
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
                if (counter) {
                    gsap.fromTo(
                        counter,
                        { innerText: 0 },
                        {
                            innerText: parseInt(counter.dataset.value!),
                            duration: 2,
                            snap: { innerText: 1 },
                            ease: "power1.out",
                            scrollTrigger: {
                                trigger: box,
                                start: "top 80%",
                                toggleActions: "play reverse play reverse",
                            },
                        }
                    );
                }
            });
        });

        return () => ctx.revert(); // cleanup only this section
    }, []);

    // Helper function to safely push refs
    const pushLeftRef = (el: HTMLDivElement | null) => {
        if (el && !leftBoxesRef.current.includes(el)) leftBoxesRef.current.push(el);
    };
    const pushRightRef = (el: HTMLDivElement | null) => {
        if (el && !rightBoxesRef.current.includes(el)) rightBoxesRef.current.push(el);
    };
    const pushCounterRef = (el: HTMLSpanElement | null) => {
        if (el) countersRef.current.push(el);
    };

    return (
        <section className="bg-black text-white py-20">

            <h2>
                <TextWithTexture text="Our Achievements" className=" text-4xl md:text-5xl sm:text-6xl px-5 sm::px-0 font-bold mb-12  text-center" />
            </h2>



            <div className="parent w-full flex justify-center items-start flex-wrap gap-12">
                {/* Left Side */}
                <div className="left w-full md:w-[45%] flex flex-col items-end  gap-10">
                    {[
                        { value: "20", label: "Years of Excellence", mt: '0' },
                        { value: "15", label: "Lens Technology", mt: '5' },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`box w-[100%] h-[300px] bg-[#18181B]  rounded-3xl p-6 mt-${item.mt}`}
                            ref={pushLeftRef}
                        >
                            <div className={`flex flex-col justify-between h-full `}>
                                <div className="flex items-start gap-2">
                                    <span className="count text-6xl font-semibold" data-value={item.value} ref={pushCounterRef}>
                                        0
                                    </span>
                                    <div className="square text-4xl">+</div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className="empty w-[30%]  hidden md:block"></div>
                                    <span style={
                                        {
                                            backgroundImage: `url('/texture/texture.png')`
                                        }
                                    } className="head text-transparent bg-clip-text bg-center bg-cover text-2xl sm:text-3xl md:text-3xl xl:text-[3rem] font-thin text-right w-[70%] shrink-0">{item.label}</span>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side */}
                <div className="right w-full md:w-[45%] flex flex-col items-start gap-10 mt-10 md:mt-0">
                    {[
                        { value: "50000", label: "Happy Customers", suffix: "+", mt: '16' },
                        { value: "99", label: "Satisfaction Rate", suffix: "%", mt: '5' },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`box  w-[100%] h-[300px] bg-[#18181B] rounded-3xl p-6  mt-${item.mt}`}
                            ref={pushRightRef}
                        >
                            <div className="flex flex-col justify-between h-full">
                                <div className="flex items-start gap-2">
                                    <span className="count text-4xl sm:text-6xl font-semibold" data-value={item.value} ref={pushCounterRef}>
                                        0
                                    </span>
                                    <div className="square text-4xl">{item.suffix}</div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className="empty w-[30%] hidden md:block"></div>
                                    <span style={
                                        {
                                            backgroundImage: `url('/texture/texture.png')`
                                        }
                                    } className="head text-transparent bg-clip-text bg-center bg-cover text-2xl sm:text-3xl md:text-3xl xl:text-[3rem] font-thin text-right w-[70%] ">{item.label}</span>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievement;
