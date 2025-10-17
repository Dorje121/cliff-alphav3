"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import HeroSection from "@/components/Services/heropage";

const ProgressiveMeasurementChart = () => {
  return (
    <>
      {/* Hero Section with Service Information */}
      <HeroSection
        title="PROGRESSIVE"
        subtitle="MEASUREMENT CHART"
        description="Comprehensive measurement guide for progressive lenses ensuring
                precise fitting, optimal visual zones, and superior comfort for
                every prescription."
        backgroundImage="/product/16.jpg"
        rightImage="/product/16.jpg"
        serviceNumber="14"
        badgeTitle="100%"
        badgeSubtitle="Accuracy"
      />

      {/* Additional Information Section */}
      <div className="min-h-screen  text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
        </div>

        {/* Content */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-screen mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-6xl py-6 font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                Progressive{" "}
                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                  Measurement Guide
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto">
                Master the art of progressive lens fitting with our
                comprehensive measurement chart and professional guidelines
              </p>
            </div>

            {/* Measurement Steps Chart */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  step: "01",
                  title: "Initial Assessment",
                  description: "Patient consultation and frame selection",
                },
                {
                  step: "02",
                  title: "Precise Measurements",
                  description:
                    "Pupil distance, segment height, and fitting cross",
                },
                {
                  step: "03",
                  title: "Final Verification",
                  description: "Quality check and fitting adjustment",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all duration-500 transform hover:scale-105"
                >
                  <div className="backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                    {/* Step Number */}
                    <div className="text-6xl font-bold mb-4 text-center opacity-20">
                      {item.step}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <div className="flex-grow flex flex-col justify-center">
                      <p className="text-zinc-300 text-center leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="chart">
          <h2 className="text-center text-3xl md:text-6xl py-6 font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
            Progressive{" "}
            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
              Measurement chart
            </span>
          </h2>
          <div className="h-fit md:h-[85vh] w-screen">
            <img className="rotate-90 md:rotate-0 w-full h-full object-center object-cover " src="/pageimg/measurement.png" alt="cliff measurement chart" />
          </div>
        </div>
      </div>

      <BackToServicesButton />
    </>
  );
};

export default ProgressiveMeasurementChart;
