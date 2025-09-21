"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Chart = () => {
    const leftBoxes = useRef<HTMLDivElement[]>([]);
    const rightBoxes = useRef<HTMLDivElement[]>([]);

    leftBoxes.current = [];
    rightBoxes.current = [];

    const addToLeftRefs = (el: HTMLDivElement) => {
        if (el && !leftBoxes.current.includes(el)) leftBoxes.current.push(el);
    };

    const addToRightRefs = (el: HTMLDivElement) => {
        if (el && !rightBoxes.current.includes(el)) rightBoxes.current.push(el);
    };

    useLayoutEffect(() => {
        leftBoxes.current.forEach((box) => {
            gsap.fromTo(
                box,
                { x: -200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: box,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        });

        rightBoxes.current.forEach((box) => {
            gsap.fromTo(
                box,
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: box,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section className="px-4 sm:px-6 md:px-7 overflow-x-hidden">
            <div className="head">
                <h2 className="text-center mb-2 md:text-left mt-20 text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold !bg-gradient-to-r !from-white !via-yellow-100 !to-yellow-200 !bg-clip-text !text-transparent px-2">
                    Lens Index <span className="text-yellow-400">Chart </span>
                </h2>

                <p className="pl-2 w-full md:w-[60%] text-center md:text-left text-gray-300 mb-4 text-[1.1rem] sm:text-[1.4rem]">
                    {` High-index lenses primarily reduce the peripheral thickness in concave (minus power) lenses and the central thickness in convex (plus power) lenses.`}
                </p>
            </div>

            {/* Low Index Section */}
            <div className="contain my-32">
                <h1 className="py-2 font-ramro text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center my-12 mt-20 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                    Low Index
                </h1>
                <div className="parent w-full flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 flex-wrap">
                    <div
                        ref={addToLeftRefs}
                        className="box1 flex flex-col justify-between items-center bg-[#1D1D1F] w-full sm:w-[48.5%] h-[450px] p-4 rounded-md"
                    >
                        <div className="img w-full mx-auto h-[200px] mb-10">
                            <img
                                className="w-full h-full object-cover object-center"
                                src="/pageimg/nobgindex1.png"
                                alt="clifflens"
                            />
                        </div>
                        <div className="h-[200px] info flex flex-col justify-center items-center gap-4">
                            <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                                {`Low Index (Concave)`}
                            </h2>
                            <p className="text-center text-gray-500 text-xl">
                                Thicker at the edges, used for minus (nearsighted) prescriptions. Bulkier and heavier.
                            </p>
                        </div>
                    </div>

                    <div
                        ref={addToRightRefs}
                        className="box2 flex flex-col justify-between items-center bg-[#1D1D1F] w-full sm:w-[48.5%] h-[450px] p-4 rounded-md"
                    >
                        <div className="img w-full mx-auto h-[200px] mb-10">
                            <img
                                className="w-full h-full object-cover object-center"
                                src="/pageimg/nobgindex2.png"
                                alt="clifflens"
                            />
                        </div>
                        <div className="h-[200px] info flex flex-col justify-center items-center gap-4">
                            <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                                {`Low Index (Convex)`}
                            </h2>
                            <p className="text-center text-gray-500 text-xl">
                                Thicker at the center, used for plus (farsighted) prescriptions. Can look bulky.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* High Index Section */}
            <div className="contain my-16 sm:mt-52">
                <h1 className="py-2 font-ramro text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center my-12 mt-20 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                    High Index
                </h1>
                <div className="parent w-full flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 flex-wrap">
                    <div
                        ref={addToLeftRefs}
                        className="box1 flex flex-col justify-between items-center bg-[#1D1D1F] w-full sm:w-[48.5%] h-[450px] p-4 rounded-md"
                    >
                        <div className="img w-full mx-auto h-[200px] mb-10">
                            <img
                                className="w-full h-full object-cover object-center"
                                src="/pageimg/nobgindex3.png"
                                alt="clifflens"
                            />
                        </div>
                        <div className="h-[200px] info flex flex-col justify-center items-center gap-4">
                            <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                                {`High Index (Concave)`}
                            </h2>
                            <p className="text-center text-gray-500 text-xl">
                                Much thinner edges compared to low-index, lighter, better for strong minus prescriptions.
                            </p>
                        </div>
                    </div>

                    <div
                        ref={addToRightRefs}
                        className="box2 flex flex-col justify-between items-center bg-[#1D1D1F] w-full sm:w-[48.5%] h-[450px] p-4 rounded-md"
                    >
                        <div className="img w-full mx-auto h-[200px] mb-10">
                            <img
                                className="w-full h-full object-cover object-center"
                                src="/pageimg/nobgindex4.png"
                                alt="clifflens"
                            />
                        </div>
                        <div className="h-[200px] info flex flex-col justify-center items-center gap-4">
                            <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                                {`High Index (Convex)`}
                            </h2>
                            <p className="text-center text-gray-500 text-xl">
                                Thinner center than low-index, reduces bulge, looks more natural for strong plus prescriptions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chart;
