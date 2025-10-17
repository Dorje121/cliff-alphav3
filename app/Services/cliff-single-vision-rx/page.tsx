"use client";

import { useState, useRef, useLayoutEffect } from "react";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import { gsap } from "gsap";
import HeroSection from "@/components/Services/heropage";

const CliffSingleVisionRX: React.FC = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const [selectedLens, setSelectedLens] = useState<string>('Clear');
  const [showSpecs, setShowSpecs] = useState(true);

  const handleLensSelect = (lens: string) => {
    setSelectedLens(lens);
    setShowSpecs(['Clear', 'Photocrom', 'Photocrom Plus', 'Photocrom with Blue Shield', 'Blue Shield', 'Polarized'].includes(lens));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background image continuous motion animation
      gsap.fromTo(
        backgroundImageRef.current,
        {
          scale: 1,
          rotation: 0,
        },
        {
          scale: 1.1,
          rotation: 0.5,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        }
      );
    });

    return () => ctx.revert();
  }, []);



  return (

    <div className="min-h-screen">
      <HeroSection
        title="Cliff Single Vision"
        subtitle="RX Lenses"
        description="Prescription single vision lenses for clear, focused sight with precise vision correction tailored to your unique needs."
        backgroundImage="/product/7.jpg"
        rightImage="/product/7.jpg"
        serviceNumber="06"
        badgeTitle="SINGLE"
        badgeSubtitle="VISION RX"
      />

      {/* Grid Layout Section */}
      <div className="relative w-full bg-black -mt-6 md:-mt-2">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Left side - Content */}
            <div className="py-8 md:py-16 lg:py-24">
              <div className="text-white space-y-6 max-w-3xl mx-auto md:mx-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  <p>Precision engineered lenses for</p>
                  <p>superior single vision correction.</p>
                </div>
                <p className="text-lg sm:text-xl text-zinc-300">
                  A smart choice for clear, comfortable vision.
                </p>
                <ul className="space-y-3 sm:space-y-4 text-zinc-300 text-base sm:text-lg">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3">•</span>
                    <span>Slimmer, flatter design with outstanding optical performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3">•</span>
                    <span>Ensures sharp, edge-to-edge clarity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3">•</span>
                    <span>Custom-crafted with precision back-surface freeform technology for optimal accuracy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex items-center justify-center w-full">
              <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh]">
                <Image
                  src="/imAGES/singlevision.png"
                  alt="Single Vision RX"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute top-0 right-0 w-6 sm:w-8 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
              </div>
            </div>

          </div>
        </div>
      </div>




      <div className="w-full bg-black py-10">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:flex gap-4 sm:gap-8 sm:overflow-x-auto sm:scrollbar-hide py-4">

            {/* Feature Card */}
            {[
              { icon: "/svgs/scratchresistance.svg", title: "Scratch Resistance" },
              { icon: "/svgs/clearvision.svg", title: "Low Reflection" },
              { icon: "/svgs/bluelight.svg", title: "Blue Filter" },
              { icon: "/svgs/uvprotection.svg", title: "UV Protection" },
              { icon: "/svgs/glareprotection.svg", title: "Anti Glare" },
              { icon: "/svgs/photochromatic.svg", title: "Photochromatic" },
              { icon: "/svgs/superslippery.svg", title: "Super Hydrophobic" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center p-3 sm:p-6 w-full sm:w-44 flex-shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4 w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
                <h3 className="text-center text-white font-medium text-sm sm:text-base">{feature.title}</h3>
              </div>
            ))}

          </div>
        </div>
      </div>


      <section className="w-full bg-black relative py-16">
        <div className="relative w-full h-[70vh] mx-auto">
          <Image
            src="/pageimg/mm.jpg"
            alt="Premium Vision Clarity"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-1/11 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
          {/* Noise Texture Overlay with Black Tint */}
          <div className="absolute inset-0 bg-black/30">
            <div
              className="w-full h-full mix-blend-overlay opacity-30"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute top-16 left-8 text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              CLIFF
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-yellow-400">
              SINGLE VISION RX
            </h3>
          </div>

        </div>
      </section>

      <BackToServicesButton />

      <section className="w-full bg-black py-4 relative">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lens Specifications
            </h2>
            <p className="text-lg text-zinc-300">
              Complete technical specifications for all lens types
            </p>
          </div>

          {/* Performance Style Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-sm">
                  <th className="px-6 py-3 text-left font-bold uppercase tracking-wider rounded-l-lg">
                    Lens Type
                  </th>
                  <th className="px-6 py-3 text-left font-bold uppercase tracking-wider">
                    Index
                  </th>
                  <th className="px-6 py-3 text-left font-bold uppercase tracking-wider">
                    Power Range
                  </th>
                  <th className="px-6 py-3 text-left font-bold uppercase tracking-wider">
                    CYL
                  </th>
                  <th className="px-6 py-3 text-left font-bold uppercase tracking-wider">
                    HC
                  </th>
                  <th className="px-6 py-3 text-left font-bold uppercase tracking-wider">
                    NOX
                  </th>
                  <th className="px-6 py-3 text-left font-bold uppercase tracking-wider rounded-r-lg">
                    BLUESAFE
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr className="bg-zinc-900/80 hover:bg-zinc-800 transition-all rounded-lg shadow-md">
                  <td className="px-6 py-4 text-amber-400 font-semibold rounded-l-lg">Clear</td>
                  <td className="px-6 py-4">1.50</td>
                  <td className="px-6 py-4">+6/-6</td>
                  <td className="px-6 py-4">Upto 4</td>
                  <td className="px-6 py-4">3500</td>
                  <td className="px-6 py-4">5135</td>
                  <td className="px-6 py-4 rounded-r-lg">5740</td>
                </tr>

                <tr className="bg-white/20 hover:bg-zinc-800 transition-all rounded-lg shadow-md">
                  <td className="px-6 py-4 text-amber-400 font-semibold rounded-l-lg">Clear</td>
                  <td className="px-6 py-4">1.56</td>
                  <td className="px-6 py-4">+6/-10</td>
                  <td className="px-6 py-4">Upto 4</td>
                  <td className="px-6 py-4">4435</td>
                  <td className="px-6 py-4">7005</td>
                  <td className="px-6 py-4 rounded-r-lg">7830</td>
                </tr>

                <tr className="bg-zinc-900/80 hover:bg-zinc-800 transition-all rounded-lg shadow-md">
                  <td className="px-6 py-4 text-amber-400 font-semibold rounded-l-lg">Clear</td>
                  <td className="px-6 py-4 whitespace-nowrap">1.60</td>
                  <td className="px-6 py-4 whitespace-nowrap">+6/-12</td>
                  <td className="px-6 py-4 whitespace-nowrap">Upto 4</td>
                  <td className="px-6 py-4 whitespace-nowrap">7240</td>
                  <td className="px-6 py-4 whitespace-nowrap">9750</td>
                  <td className="px-6 py-4 rounded-r-lg">11220</td>
                </tr>

                <tr className="bg-white/20 hover:bg-zinc-800 transition-all rounded-lg shadow-md">
                  <td className="px-6 py-4 text-amber-400 font-semibold rounded-l-lg">Clear</td>
                  <td className="px-6 py-4 whitespace-nowrap">1.67</td>
                  <td className="px-6 py-4 whitespace-nowrap">+6/-15</td>
                  <td className="px-6 py-4 whitespace-nowrap">Upto 4</td>
                  <td className="px-6 py-4 whitespace-nowrap">14475</td>
                  <td className="px-6 py-4 whitespace-nowrap">17050</td>
                  <td className="px-6 py-4 rounded-r-lg">19050</td>
                </tr>

                {/* Photocrom */}
                <tr className="bg-zinc-900/80 hover:bg-zinc-800 transition-all rounded-lg shadow-md">
                  <td className="px-6 py-4 text-amber-400 font-semibold rounded-l-lg">Photocrom</td>
                  <td className="px-6 py-4 whitespace-nowrap">1.56</td>
                  <td className="px-6 py-4 whitespace-nowrap">+6/-10.0</td>
                  <td className="px-6 py-4 whitespace-nowrap">Upto 4</td>
                  <td className="px-6 py-4 whitespace-nowrap">4905</td>
                  <td className="px-6 py-4 whitespace-nowrap">6775</td>
                  <td className="px-6 py-4 rounded-r-lg">7570</td>
                </tr>

                {/* Photocrom Plus */}
                <tr className="bg-white/20 hover:bg-zinc-800 transition-all rounded-lg shadow-md">
                  <td className="px-6 py-4 text-amber-400 font-semibold rounded-l-lg">Photocrom Plus</td>
                  <td className="px-6 py-4 whitespace-nowrap">1.56</td>
                  <td className="px-6 py-4 whitespace-nowrap">+6/-8.0</td>
                  <td className="px-6 py-4 whitespace-nowrap">Upto 4</td>
                  <td className="px-6 py-4 whitespace-nowrap">6070</td>
                  <td className="px-6 py-4 whitespace-nowrap">7940</td>
                  <td className="px-6 py-4 rounded-r-lg">8875</td>
                </tr>

                {/* Photocrom with Blue Shield */}
                <tr className="bg-zinc-900/80 hover:bg-zinc-800 transition-all rounded-lg shadow-md">
                  <td className="px-6 py-4 text-amber-400 font-semibold rounded-l-lg">Photocrom with Blue Shield</td>
                  <td className="px-6 py-4 whitespace-nowrap">1.56</td>
                  <td className="px-6 py-4 whitespace-nowrap">+6/-8.0</td>
                  <td className="px-6 py-4 whitespace-nowrap">Upto 4</td>
                  <td className="px-6 py-4 whitespace-nowrap">7940</td>
                  <td className="px-6 py-4 whitespace-nowrap">10735</td>
                  <td className="px-6 py-4 rounded-r-lg">12000</td>
                </tr>

                {/* Blue Shield */}
                <tr className="bg-white/20 hover:bg-zinc-800 transition-all rounded-lg shadow-md">
                  <td className="px-6 py-4 text-amber-400 font-semibold rounded-l-lg">Blue Shield</td>
                  <td className="px-6 py-4 whitespace-nowrap">1.56</td>
                  <td className="px-6 py-4 whitespace-nowrap">+6/-10.0</td>
                  <td className="px-6 py-4 whitespace-nowrap">Upto 4</td>
                  <td className="px-6 py-4 whitespace-nowrap">4675</td>
                  <td className="px-6 py-4 whitespace-nowrap">6305</td>
                  <td className="px-6 py-4 rounded-r-lg">7050</td>
                </tr>
                <tr className="bg-zinc-900/80 hover:bg-zinc-800 transition-all rounded-lg shadow-md">
                  <td className="px-6 py-4 text-amber-400 font-semibold rounded-l-lg">Blue Shield</td>
                  <td className="px-6 py-4 whitespace-nowrap">1.60</td>
                  <td className="px-6 py-4 whitespace-nowrap">+6/-10.0</td>
                  <td className="px-6 py-4 whitespace-nowrap">Upto 4</td>
                  <td className="px-6 py-4 whitespace-nowrap">8875</td>
                  <td className="px-6 py-4 whitespace-nowrap">11670</td>
                  <td className="px-6 py-4 rounded-r-lg">13045</td>
                </tr>

                {/* Polarized */}
                <tr className="bg-white/20 hover:bg-zinc-800 transition-all rounded-lg shadow-md">
                  <td className="px-6 py-4 text-amber-400 font-semibold rounded-l-lg">Polarized</td>
                  <td className="px-6 py-4 whitespace-nowrap">1.50</td>
                  <td className="px-6 py-4 whitespace-nowrap">+6/-8.00</td>
                  <td className="px-6 py-4 whitespace-nowrap">Upto 4</td>
                  <td className="px-6 py-4 whitespace-nowrap">9340</td>
                  <td className="px-6 py-4 whitespace-nowrap">10980</td>
                  <td className="px-6 py-4 rounded-r-lg">12265</td>
                </tr>

                {/* Keep repeating same rows for all your lens data */}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CliffSingleVisionRX;
