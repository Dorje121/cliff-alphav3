"use client";
import React from "react";

const Lenstable = () => {
    const headers = ["Particulars", "Index", "Power", "Cyl", "Diameter", "HC", "NOX", "Bluesafe"];

    type LensSpec = {
        type: string;
        index: string;
        power: string;
        cyl: number;
        diameter: string;
        hc: number;
        nox: number;
        bluesafe: number;
    };

    const singleVisionData = [
        { type: "Clear", index: "1.50", power: "(+6/-6)", cyl: 4, diameter: "75/60", hc: 4490, nox: 6400, bluesafe: 7480 },
        { type: "Clear", index: "1.6", power: "(+6/-10)", cyl: 6, diameter: "75/60", hc: 7690, nox: 9605, bluesafe: 10890 },
        { type: "Clear", index: "1.67", power: "(+6/-10)", cyl: 6, diameter: "75/60", hc: 16655, nox: 18570, bluesafe: 20415 },
        { type: "Clear", index: "1.74", power: "(+6/-20)", cyl: 6, diameter: "75/60", hc: 33945, nox: 35860, bluesafe: 38785 },
        { type: "Photocrom", index: "1.56", power: "(+6/-8.0)", cyl: 4, diameter: "75/60", hc: 8325, nox: 10240, bluesafe: 11570 },
        { type: "Photocrom", index: "1.6", power: "(+6/-8.0)", cyl: 6, diameter: "75/60", hc: 17290, nox: 19215, bluesafe: 21100 },
        { type: "Photocrom", index: "1.74", power: "(+8/-15.0)", cyl: 4, diameter: "75/60", hc: 112070, nox: 113995, bluesafe: 121790 },
        { type: "Photo-Z", index: "1.5", power: "(+6/-8.0)", cyl: 4, diameter: "75/60", hc: 17290, nox: 19215, bluesafe: 21100 },
        { type: "Photo-Z", index: "1.6", power: "(+6/-12)", cyl: 6, diameter: "75/60", hc: 28820, nox: 30735, bluesafe: 33340 },
        { type: "Photo-Z", index: "1.67", power: "(+6/-12)", cyl: 6, diameter: "75/60", hc: 35220, nox: 37145, bluesafe: 40150 },
        { type: "Polarized", index: "1.5", power: "(+6/-6)", cyl: 4, diameter: "75/60", hc: 10240, nox: 12165, bluesafe: 13605 },
        { type: "Polarized", index: "1.6", power: "(+6/-12)", cyl: 4, diameter: "75/60", hc: 34585, nox: 36500, bluesafe: 39470 },
        { type: "Polarized", index: "1.67", power: "(+6/-12)", cyl: 4, diameter: "75/60", hc: 42260, nox: 44185, bluesafe: 47630 },
    ];

    const progressiveData = [
        { type: "Clear", index: "1.50", power: "(+6/-6)", cyl: 4, diameter: "75/60", hc: 8325, nox: 10240, bluesafe: 11570 },
        { type: "Clear", index: "1.6", power: "(+6/-10)", cyl: 6, diameter: "75/60", hc: 15365, nox: 17290, bluesafe: 19050 },
        { type: "Clear", index: "1.67", power: "(+6/-10)", cyl: 6, diameter: "75/60", hc: 21770, nox: 23695, bluesafe: 25860 },
        { type: "Photocrom", index: "1.5", power: "(+6/-10)", cyl: 4, diameter: "75/60", hc: 12165, nox: 14090, bluesafe: 15655 },
        { type: "Photocrom", index: "1.56", power: "(+6/-8.0)", cyl: 4, diameter: "75/60", hc: 12165, nox: 14090, bluesafe: 15655 },
        { type: "Photocrom", index: "1.6", power: "(+6/-8.0)", cyl: 6, diameter: "75/60", hc: 21130, nox: 23055, bluesafe: 25180 },
        { type: "Photo-Z", index: "1.5", power: "(+6/-8.0)", cyl: 4, diameter: "75/60", hc: 24970, nox: 26895, bluesafe: 29260 },
        { type: "Photo-Z", index: "1.60", power: "(+6/-12)", cyl: 6, diameter: "75/60", hc: 32660, nox: 34585, bluesafe: 37420 },
        { type: "Photo-Z", index: "1.67", power: "(+6/-12)", cyl: 6, diameter: "75/60", hc: 40985, nox: 42910, bluesafe: 46265 },
        { type: "Polarized", index: "1.5", power: "(+8/-0.8)", cyl: 4, diameter: "75/60", hc: 19215, nox: 21130, bluesafe: 23133 },
        { type: "Polarized", index: "1.6", power: "(-12/+8.0)", cyl: 4, diameter: "75/60", hc: 40350, nox: 42260, bluesafe: 45584 },
        { type: "Polarized", index: "1.67", power: "(-12/+8.0)", cyl: 4, diameter: "75/60", hc: 55075, nox: 56990, bluesafe: 61235 },
    ];


    const renderTable = (title: string, data: LensSpec[]) => (
        <div className="mb-12 w-full max-w-6xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2
                     bg-gradient-to-r from-white via-yellow-100 to-yellow-200
                     bg-clip-text text-transparent">
                {title}
            </h2>

            <div className="w-full overflow-x-auto">
                <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] bg-yellow-400 text-black rounded-md mb-4 shadow-md min-w-[800px]">
                    {headers.map(h => (
                        <div key={h} className="px-4 py-4 font-semibold text-center text-[0.9rem] sm:text-[1.1rem]">
                            {h}
                        </div>
                    ))}
                </div>

                <div className="space-y-3 min-w-[800px]">
                    {data.map((spec, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] rounded-md bg-[#1c1c1c] even:bg-[#222]
                         hover:bg-[#2a2a2a] shadow-md transition-colors text-gray-200 text-sm sm:text-base"
                        >
                            <div className="px-4 py-4">{spec.type}</div>
                            <div className="px-4 py-4 text-center">{spec.index}</div>
                            <div className="px-4 py-4 text-center">{spec.power}</div>
                            <div className="px-4 py-4 text-center">{spec.cyl}</div>
                            <div className="px-4 py-4 text-center">{spec.diameter}</div>
                            <div className="px-4 py-4 text-center">{spec.hc}</div>
                            <div className="px-4 py-4 text-center">{spec.nox}</div>
                            <div className="px-4 py-4 text-center">{spec.bluesafe}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row justify-between w-full text-zinc-400 text-xs px-2">
                <p>Power mentioned is resultant power.</p>
                <p>Addition: +1.00 to +3.00</p>
            </div>
        </div>
    );

    return (
        <section className="min-h-screen flex flex-col items-center py-12 px-4">
            {renderTable("Single Vision Lenses", singleVisionData)}
            {renderTable("Progressive Lenses", progressiveData)}
        </section>
    );
};

export default Lenstable;
