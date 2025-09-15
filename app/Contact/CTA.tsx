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
                <div className="main mt-1 sm:mt-26 " >
                    <div className="parent flex justify-center items-center flex-col my-10">
                        <div className="r1 text-5xl sm:text-6xl text-center"> <span className="text-yellow-500">Creating</span> a Brighter Future</div>
                        <div className="r2 text-5xl sm:text-6xl text-center">Starting <span className="text-yellow-500">Today</span></div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center text-center px-10 sm:px-0 bg-cover bg-center w-60 mx-auto rounded-lg " style={{ backgroundImage: `url('${bg}')` }}>
                        <a
                            href="/Services"
                            className="px-8 py-3 text-black  rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
                        >
                            Explore Our Products
                        </a>
                    </div>
                    <div className="imgsect border mx-auto h-[300px] my-6 w-[80%]">
                        <div className="relative w-full max-w-[883px] mx-auto">

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default BrighterFutureSection;
