import React from "react";

const Lenstable = () => {
    const headers = ["Particulars", "Index", "Power", "Cyl", "HC", "NOX", "Bluesafe"];

    const lensSpecs = [
        { type: "Clear", index: "1.50", powerRange: "(+6/-6)", cyl: "Upto 4", hc: "4125", nox: "5435", bluesafe: "6040" },
        { type: "Clear", index: "1.56", powerRange: "(+6/-10)", cyl: "Upto 4", hc: "5225", nox: "7415", bluesafe: "8240" },
        { type: "Clear", index: "1.60", powerRange: "(+6/-12)", cyl: "Upto 4", hc: "8515", nox: "10625", bluesafe: "11815" },
        { type: "Clear", index: "1.67", powerRange: "(+6/-15)", cyl: "Upto 4", hc: "17030", nox: "18050", bluesafe: "20055" },
        { type: "Photocrom", index: "1.56", powerRange: "(+6/-15)", cyl: "Upto 4", hc: "5765", nox: "7170", bluesafe: "7965" },
        { type: "Photocrom Plus", index: "1.56", powerRange: "(+6/-15)", cyl: "Upto 4", hc: "7140", nox: "8405", bluesafe: "9340" },
        { type: "Photocrom with Blue Shield", index: "1.56", powerRange: "(+6/-8)", cyl: "Upto 4", hc: "9340", nox: "11375", bluesafe: "12640" },
        { type: "Blue Shield", index: "1.56", powerRange: "(+6/-15)", cyl: "Upto 4", hc: "5490", nox: "6675", bluesafe: "7415" },
        { type: "Blue Shield", index: "1.60", powerRange: "(+6/-12)", cyl: "Upto 4", hc: "10440", nox: "12365", bluesafe: "13740" },
        { type: "Polarized", index: "1.50", powerRange: "(+6/-8.00)", cyl: "Upto 4", hc: "10990", nox: "11615", bluesafe: "12915" },
    ];

    return (
        <section className="min-h-screen flex flex-col items-center py-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8
                     bg-gradient-to-r from-white via-yellow-100 to-yellow-200
                     bg-clip-text text-transparent">
                Lens Specifications
            </h2>

            {/* Table wrapper with horizontal scroll on small screens */}
            <div className="w-full max-w-6xl overflow-x-auto">
                {/* Header row */}
                <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr_1fr] bg-yellow-400 text-black rounded-md mb-4 shadow-md min-w-[700px]">
                    {headers.map(h => (
                        <div
                            key={h}
                            className="px-4 py-4 font-semibold text-center text-[0.9rem] sm:text-[1.1rem]"
                        >
                            {h}
                        </div>
                    ))}
                </div>

                {/* Data rows */}
                <div className="space-y-3 min-w-[700px]">
                    {lensSpecs.map((spec, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr_1fr] rounded-md bg-[#1c1c1c] even:bg-[#222]
                           hover:bg-[#2a2a2a] shadow-md transition-colors text-gray-200 text-sm sm:text-base"
                        >
                            <div className="px-4 py-4">{spec.type}</div>
                            <div className="px-4 py-4 text-center">{spec.index}</div>
                            <div className="px-4 py-4 text-center">{spec.powerRange}</div>
                            <div className="px-4 py-4 text-center">{spec.cyl}</div>
                            <div className="px-4 py-4 text-center">{spec.hc}</div>
                            <div className="px-4 py-4 text-center">{spec.nox}</div>
                            <div className="px-4 py-4 text-center">{spec.bluesafe}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row justify-between w-full max-w-6xl text-gray-400 text-xs px-2">
                <p>Power mentioned is resultant power.</p>
                <p>Addition: +1.00 to +3.00</p>
            </div>
        </section>
    );
};

export default Lenstable;
