"use client";

import React from "react";

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

const LensTable: React.FC<{ title: string; data: typeof singleVisionData }> = ({ title, data }) => (
    <div className="mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
            {title}
        </h2>
        <div className="overflow-x-auto bg-gray-900/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="bg-gray-800/50">
                        {["Particulars", "Index", "Power Range", "Cyl", "Diameter", "HC", "NOX", "BLUESAFE"].map((head) => (
                            <th
                                key={head}
                                className="text-center p-3 border border-gray-600 font-semibold text-gray-200 text-sm"
                            >
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-700/20 transition-colors">
                            <td className="p-3 border border-gray-600 text-gray-300">{row.type}</td>
                            <td className="p-3 border border-gray-600 text-center text-gray-300">{row.index}</td>
                            <td className="p-3 border border-gray-600 text-center text-gray-300">{row.power}</td>
                            <td className="p-3 border border-gray-600 text-center text-gray-300">{row.cyl}</td>
                            <td className="p-3 border border-gray-600 text-center text-gray-300">{row.diameter}</td>
                            <td className="p-3 border border-gray-600 text-center text-gray-300">{row.hc}</td>
                            <td className="p-3 border border-gray-600 text-center text-gray-300">{row.nox}</td>
                            <td className="p-3 border border-gray-600 text-center text-gray-300">{row.bluesafe}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const CliffZennLenses: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-20 py-12">
            <LensTable title="CLIFF ZENN SINGLE VISION" data={singleVisionData} />
            <LensTable title="CLIFF ZENN PROGRESSIVE LENSES" data={progressiveData} />
        </div>
    );
};

export default CliffZennLenses;
