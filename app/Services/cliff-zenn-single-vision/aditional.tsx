"use client";

import React from "react";

const AdditionalChargeSplit: React.FC = () => {
    const items = [
        { title: "TINT", price: "3840" },
        { title: "DIA 80", price: "3840" },
        { title: "DRIVE CLEAR", price: "2000" },
    ];

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-4xl bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
                {/* Header */}
                <div className="flex justify-between px-6 py-4 bg-gray-800 text-white font-bold text-lg">
                    <span>Additional Charge</span>
                    <span>MRP</span>
                </div>

                {/* Rows */}
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between px-6 py-5 border-b border-gray-700 text-white hover:bg-gray-800 transition"
                    >
                        <span>{item.title}</span>
                        <span className="font-semibold">{item.price}</span>
                    </div>
                ))}

                {/* Footer */}
                <p className="text-gray-400 text-sm text-center py-4">
                    Above mentioned charges are inclusive of VAT in NPR.
                </p>
            </div>
        </div>
    );
};

export default AdditionalChargeSplit;
