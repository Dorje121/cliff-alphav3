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
        <section className="flex flex-col items-center py-16 px-4">
            <div className="w-full max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4
                         bg-gradient-to-r from-white via-yellow-100 to-yellow-200
                         bg-clip-text text-transparent">
                        Lens Specifications
                    </h2>
                    <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto">
                        Complete technical specifications for all lens types with detailed pricing information
                    </p>
                </div>

                {/* Modern Table Container */}
                <div className="bg-gradient-to-br from-zinc-900/90 to-black/80 backdrop-blur-md rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-yellow-500/10">
                    {/* Table Header with Gradient */}
                    <div className=" border-b border-zinc-600/50 px-6 py-6">
                        <h3 className="text-2xl font-bold text-center">
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                                Cliff Dynamix Progressive Pricing
                            </span>
                        </h3>
                    </div>

                    {/* Responsive Table Wrapper */}
                    <div className="overflow-x-auto scrollbar-custom">
                        <table className="w-full min-w-[800px]">
                            {/* Enhanced Table Header */}
                            <thead>
                                <tr className="bg-gradient-to-r from-zinc-800/70 to-zinc-900/70 border-b border-zinc-600/50">
                                    {headers.map((header, index) => (
                                        <th key={header} className={`py-6 px-6 ${index === 0 ? 'text-center' : 'text-right'}`}>
                                            <div className="flex items-center gap-3 "
                                                style={{
                                                    paddingLeft: index === 0 ? '' : '1.5rem',
                                                }}>

                                                <span className="text-lg font-bold text-white tracking-wide uppercase">
                                                    {header}
                                                </span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            {/* Enhanced Table Body */}
                            <tbody>
                                {lensSpecs.map((spec, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-zinc-700/30 hover:bg-gradient-to-r hover:from-zinc-800/30 hover:to-zinc-900/30 transition-all duration-300 group"
                                    >
                                        <td className="py-6 px-6">
                                            <div className="flex items-center gap-3">
                                                {/* <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-70 group-hover:opacity-100 transition-opacity"></div> */}
                                                <span className="text-white font-medium text-lg">{spec.type}</span>
                                            </div>
                                        </td>
                                        <td className="py-6 px-6 text-center">
                                            <span className="text-zinc-200 font-semibold text-lg bg-zinc-800/50 px-3 py-1 rounded-lg">
                                                {spec.index}
                                            </span>
                                        </td>
                                        <td className="py-6 px-6 text-center">
                                            <span className="text-zinc-200 font-medium text-lg">{spec.powerRange}</span>
                                        </td>
                                        <td className="py-6 px-6 text-center">
                                            <span className="text-zinc-200 font-medium text-lg">{spec.cyl}</span>
                                        </td>
                                        <td className="py-6 px-6 text-center">
                                            <span className="text-yellow-300 font-bold text-lg">{spec.hc}</span>
                                        </td>
                                        <td className="py-6 px-6 text-center">
                                            <span className="text-yellow-300 font-bold text-lg">{spec.nox}</span>
                                        </td>
                                        <td className="py-6 px-6 text-center">
                                            <span className="text-yellow-300 font-bold text-lg">{spec.bluesafe}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Enhanced Footer Notes */}

                </div>

                {/* Additional Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-2xl p-6 border border-zinc-700/50 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                            <h4 className="text-lg font-bold text-white">HC (Hard Coating)</h4>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                            Scratch-resistant coating for enhanced durability and lens protection.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-2xl p-6 border border-zinc-700/50 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                            <h4 className="text-lg font-bold text-white">NOX (Anti-Reflective)</h4>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                            Anti-reflective coating that reduces glare and improves visual clarity.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-2xl p-6 border border-zinc-700/50 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                            <h4 className="text-lg font-bold text-white">BlueSafe</h4>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                            Blue light protection coating for digital device usage comfort.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lenstable;
