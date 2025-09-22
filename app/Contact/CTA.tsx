"use client";

import Image from "next/image";
import React from "react";

const BrighterFutureSection: React.FC = () => {

    const bg = "/texture/texture.png"
    return (
        <>
            {/* CTA Section */}

            <section className="" style={{

            }}>
                <div className="main my-28 " >
                    <div className="parent flex justify-center items-center flex-col my-7">
                        <div className="r1 text-4xl sm:text-5xl md:text-6xl text-center"> <span className="text-yellow-500">Creating</span> a Brighter Future</div>
                        <div className="r2 text-4xl sm:text-5xl md:text-6xl text-center">Starting <span className="text-yellow-500">Today</span></div>
                    </div>
                    <div className="sub flex justify-center items-center mb-10 ">
                        <p className=" text-[1.1rem] sm:text-lg md:text-xl  text-zinc-400 text-center  sm:w-[60vw]">Experience vision from a higher vantage with Cliff. Our precision-crafted lenses bring every detail into razor-sharp focus, giving you clarity that inspires confidence and adventure. Step up to the edge—upgrade your view with Cliff today.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center text-center px-10 sm:px-0 bg-cover bg-center w-70 mx-auto rounded-lg  text-black cursor-pointer font-semibold space-x-2 bg-gradient-to-r from-yellow-200 to-yellow-600 transition-all duration-300 ease-in-out hover:bg-gradient-to-l" >
                        <a
                            href="/Services"
                            className="text-[1rem] text-white sm:text-lg px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300  ">
                            Explore  Products
                        </a>
                    </div>


                </div>
            </section>
        </>
    );
};

export default BrighterFutureSection;
