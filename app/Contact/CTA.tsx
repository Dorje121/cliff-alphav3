"use client";

import Image from "next/image";
import React from "react";

const BrighterFutureSection: React.FC = () => {
    return (
        <>
            {/* CTA Section */}
            <div className="mt-20 text-center">
                <div className="bg-transparent backdrop-blur-sm rounded-2xl p-12 ">
                    <h3 className="text-3xl font-bold font-ramro mb-4 text-white">
                        Ready to Experience Perfect Vision?
                    </h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Discover our complete range of premium eyewear solutions designed
                        for your lifestyle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/Services"
                            className="px-8 py-3 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                        >
                            Explore Our Products
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrighterFutureSection;
