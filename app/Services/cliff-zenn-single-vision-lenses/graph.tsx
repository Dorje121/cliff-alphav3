"use client";
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { distance: 0, cliff: 0, standard: 0 },
    { distance: 2, cliff: 0.02, standard: 0.08 },
    { distance: 4, cliff: 0.04, standard: 0.15 },
    { distance: 6, cliff: 0.06, standard: 0.23 },
    { distance: 8, cliff: 0.08, standard: 0.30 },
    { distance: 10, cliff: 0.10, standard: 0.38 },
    { distance: 12, cliff: 0.12, standard: 0.45 },
    { distance: 14, cliff: 0.14, standard: 0.52 },
    { distance: 16, cliff: 0.16, standard: 0.58 },
];

export default function CliffZennPage() {
    return (
        <div className="min-h-screen w-full bg-black text-white px-4 sm:px-6 md:px-7">
            {/* Graph Section */}
            <section className="flex flex-col items-center justify-center bg-black px-2 sm:px-4 py-12 md:py-20">

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent px-2">
                    Oblique Errors in an Ophthalmic Lens
                </h2>

                <div className="w-full max-w-6xl h-[40vh] sm:h-[50vh] md:h-[60vh]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 10,
                                left: 10,
                                bottom: 40
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#444" />

                            <XAxis
                                dataKey="distance"
                                label={{
                                    value: "Distance to optical center (mm)",
                                    position: "bottom",
                                    offset: 0,
                                    fill: "#fff",
                                    style: {
                                        textAnchor: "middle",
                                        fontSize: "0.7rem",
                                    },
                                }}
                                tick={{
                                    fill: "#fff",
                                    fontSize: "0.7rem",
                                }}
                            />

                            <YAxis
                                label={{
                                    value: "Oblique Astigmatism (Diopters)",
                                    angle: -90,
                                    position: "insideLeft",
                                    fill: "#fff",
                                    style: {
                                        textAnchor: "middle",
                                        fontSize: "0.7rem",
                                    },
                                    offset: 10,
                                }}
                                tick={{
                                    fill: "#fff",
                                    fontSize: "0.7rem",
                                }}
                            />

                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#222",
                                    border: "none",
                                    borderRadius: "4px",
                                    fontSize: "0.875rem"
                                }}
                                cursor={{ stroke: "#555" }}
                            />

                            <Line
                                type="monotone"
                                dataKey="cliff"
                                stroke="#f59e0b"
                                strokeWidth={3}
                                name="CLIFF ZENN SV LENS"
                                dot={{ r: 3 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="standard"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                name="Standard SV Lens"
                                dot={{ r: 3 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <p className="max-w-3xl mt-6 text-center text-gray-300 px-4 text-sm sm:text-base">
                    The graph shows oblique errors for a –4.00 D single-vision lens, which increase
                    with stronger prescriptions. CLIFF ZENN SV lenses are 76% more stable than
                    conventional lenses for high prescriptions.
                </p>
            </section>
        </div>
    );
}