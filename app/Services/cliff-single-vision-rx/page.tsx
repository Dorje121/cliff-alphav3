"use client";

import { useState, useRef, useLayoutEffect } from "react";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import { gsap } from "gsap";
import TextWithTexture from "@/components/textwithgoldentexture";
import HeroSection from "@/components/Services/heropage";
import { ServerManagementTable } from "@/components/Services/table";

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

  const lensTypes = [
    {
      id: "clear",
      name: "Clear",
      description: "Standard clear lenses for everyday vision correction",
      features: [
        "Sharp edge-to-edge clarity",
        "Custom-crafted precision",
        "Superior optical performance",
      ],
    },
    {
      id: "photochromic",
      name: "Photochromic",
      description: "Adaptive lenses that darken in sunlight",
      features: [
        "UV-reactive technology",
        "Seamless indoor/outdoor transition",
        "100% UV protection",
      ],
    },
    {
      id: "photochromic-plus",
      name: "Photochromic Plus",
      description: "Enhanced photochromic with faster transitions",
      features: [
        "Faster activation",
        "Enhanced color perception",
        "Premium UV protection",
      ],
    },
    {
      id: "sunglass",
      name: "Sunglass",
      description: "Tinted lenses for permanent sun protection",
      features: ["Consistent tint", "Glare reduction", "Style versatility"],
    },
    {
      id: "blue-shield",
      name: "Blue Shield",
      description: "Digital eye strain protection",
      features: [
        "Blue light filtering",
        "Reduced digital fatigue",
        "Clear vision comfort",
      ],
    },
    {
      id: "polarized",
      name: "Polarized",
      description: "Premium glare elimination",
      features: [
        "Eliminates reflected glare",
        "Enhanced contrast",
        "Superior visual comfort",
      ],
    },
  ];

  const specifications = {
    indexOptions: ["1.50", "1.56", "1.60"],
    powerRange: "(+6/-6)",
    cylinder: "Upto 4",
    resistanceFeatures: [
      "Scratch Resistance",
      "Re-Reflection",
      "Super Hydrophobic Coating",
      "UV Filter",
      "Protection",
      "Anti-static Coating",
      "Photochromatic",
    ],
  };

  const currentLens =
    lensTypes.find((lens) => lens.id === selectedLens) || lensTypes[0];

  return (
    
      <div className="min-h-screen">
         <HeroSection
                                  title="Cliff Single Vision"
                                  subtitle="RX Lenses"
                                  description="Prescription single vision lenses for clear, focused sight with precise vision correction tailored to your unique needs."
                                  backgroundImage="/imAGES/singlevision.png"
                                  rightImage="/imAGES/singlevision.png"
                                  serviceNumber="09"
                                  badgeTitle="SINGLE"
                                  badgeSubtitle="VISION RX"
                  />
  
      {/* Grid Layout Section */}
      <div className="relative w-full bg-black -mt-6 md:-mt-2">
        <div className="max-w-[1500px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="py-8 md:py-16 lg:py-24">
              <div className="text-white space-y-6 max-w-lg">
                <p className="text-4xl font-bold leading-tight whitespace-nowrap">
                  Precision-engineered lenses for superior 
                  <br />
                  single vision correction.
                </p>
                <p className="text-xl text-gray-300">
                  A smart choice for clear, comfortable vision.
                </p>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3">•</span>
                    <span className="whitespace-nowrap">Slimmer, flatter design with outstanding optical performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3">•</span>
                    <span>Ensures sharp, edge-to-edge clarity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3">•</span>
                    <span className="whitespace-nowrap">Custom-crafted with precision back-surface freeform technology for optimal accuracy</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="flex items-center justify-center h-full">
              <div className="relative w-full h-[50vh] md:h-[70vh]">
                <Image
                  src="/imAGES/singlevision.png"
                  alt="Single Vision RX"
                  fill
                  className="object-contain opacity-100"
                  priority
                />
                <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
            


            
      
      <div className="w-full bg-black">
        <div className="w-full max-w-[1800px] mx-auto">
            <div className="flex flex-nowrap gap-10 w-max mx-auto">
            <div className="group flex flex-col items-center p-6 transition-all duration-300 hover:scale-105 w-[180px] flex-shrink-0">
                <Image 
                  src="/svgs/scratchresistance.svg" 
                  alt="Scratch Resistance" 
                  width={100}
                  height={100}
                  className="group-hover:scale-110 transition-transform duration-300 mb-4"
                />
              <h3 className="text-center text-white font-medium text-lg">Scratch Resistance</h3>
            </div>
            <div className="group flex flex-col items-center p-6 transition-all duration-300 hover:scale-105 w-[180px] flex-shrink-0">
                <Image 
                  src="/svgs/clearvision.svg" 
                  alt="Low Reflection" 
                  width={100}
                  height={100}
                  className="group-hover:scale-110 transition-transform duration-300 mb-4"
                />
              <h3 className="text-center text-white font-medium text-lg">Low Reflection</h3>
            </div>

            {/* Blue Filter */}
            <div className="group flex flex-col items-center p-6 transition-all duration-300 hover:scale-105 w-[180px] flex-shrink-0">
                <Image 
                  src="/svgs/bluelight.svg" 
                  alt="Blue Filter" 
                  width={100}
                  height={100}
                  className="group-hover:scale-110 transition-transform duration-300 mb-4"
                />
              <h3 className="text-center text-white font-medium text-lg">Blue Filter</h3>
            </div>
            {/* UV Protection */}
            <div className="group flex flex-col items-center p-6 transition-all duration-300 hover:scale-105 w-[180px] flex-shrink-0">
                <Image 
                  src="/svgs/uvprotection.svg" 
                  alt="UV Protection" 
                  width={100}
                  height={100}
                  className="group-hover:scale-110 transition-transform duration-300 mb-4"
                />
              <h3 className="text-center text-white font-medium text-lg">UV Protection</h3>
            </div>
            {/* Anti Glare */}
            <div className="group flex flex-col items-center p-6 transition-all duration-300 hover:scale-105 w-[180px] flex-shrink-0">
                <Image 
                  src="/svgs/glareprotection.svg" 
                  alt="Anti Glare" 
                  width={100}
                  height={100}
                  className="group-hover:scale-110 transition-transform duration-300 mb-4"
                />
              <h3 className="text-center text-white font-medium text-lg">Anti Glare</h3>
            </div>
            {/* Photochromatic */}
            <div className="group flex flex-col items-center p-6 transition-all duration-300 hover:scale-105 w-[180px] flex-shrink-0">
                <Image 
                  src="/svgs/photochromatic.svg" 
                  alt="Photochromatic" 
                  width={100}
                  height={100}
                  className="group-hover:scale-110 transition-transform duration-300 mb-4"
                />
              <h3 className="text-center text-white font-medium text-lg">Photochromatic</h3>
            </div>
            {/* Super Hydrophobic Coating */}
            <div className="group flex flex-col items-center p-5 transition-all duration-300 hover:scale-105 w-[180px] flex-shrink-0">
                <Image 
                  src="/svgs/superslippery.svg" 
                  alt="Super Hydrophobic Coating" 
                  width={100}
                  height={100}
                  className="group-hover:scale-110 transition-transform duration-300 mb-4"
                />
              <h3 className="text-center text-white font-medium text-lg">Super Hydrophobic</h3>
            </div>
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

      <section className="w-full h-screen bg-black pt-10 relative">
        <div className="absolute top-0 left-0 w-full h-1/11 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <Image
              src="/newimage/bg2.png"
              alt="Premium Lenses"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute right-0 top-[55%] -translate-y-1/2 w-[55%] h-2/3 pl-12">
              <Image
                src="https://lensfactory.com/cdn/shop/products/high-index-167-single-vision-lens__74395.1384221478.800.800_1080x.jpg"
                alt="Single Vision Lens"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Left Side Selectable Menu */}
          <div className="absolute top-8 left-8 z-50">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4 bg-black/80 backdrop-blur-md p-4 rounded-lg border border-white/10">
                {['Clear', 'Photocrom', 'Photocrom Plus', 'Photocrom with Blue Shield', 'Blue Shield', 'Polarized'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleLensSelect(item)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap ${
                      selectedLens === item 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/80 hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              
              {/* Lens Specifications Sidebar */}
              {showSpecs && (
                <div className="w-[42rem] bg-black/80 backdrop-blur-md p-6 rounded-lg border border-white/10 text-white">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">
                    {selectedLens} Lens Specifications
                  </h3>
                  <div className="text-sm">
                    <div className="grid grid-cols-6 gap-2 mb-2 text-xs text-white/70 font-medium">
                      <div>INDEX</div>
                      <div>POWER RANGE</div>
                      <div>CYL</div>
                      <div>HC</div>
                      <div>NOX</div>
                      <div>BLUESAFE</div>
                    </div>
                    <div className="space-y-2">
                      {selectedLens === 'Clear' && (
                        <>
                          <div className="grid grid-cols-6 gap-2">
                            <div>1.50</div>
                            <div>+6/-6</div>
                            <div>Upto 4</div>
                            <div>3500</div>
                            <div>5135</div>
                            <div>5740</div>
                          </div>
                          <div className="grid grid-cols-6 gap-2">
                            <div>1.56</div>
                            <div>+6/-10</div>
                            <div>Upto 4</div>
                            <div>4435</div>
                            <div>7005</div>
                            <div>7830</div>
                          </div>
                          <div className="grid grid-cols-6 gap-2">
                            <div>1.60</div>
                            <div>+6/-12</div>
                            <div>Upto 4</div>
                            <div>7240</div>
                            <div>9750</div>
                            <div>11220</div>
                          </div>
                          <div className="grid grid-cols-6 gap-2">
                            <div>1.67</div>
                            <div>+6/-15</div>
                            <div>Upto 4</div>
                            <div>14475</div>
                            <div>17050</div>
                            <div>19050</div>
                          </div>
                        </>
                      )}
                      {selectedLens === 'Photocrom' && (
                        <div className="grid grid-cols-6 gap-2">
                          <div>1.56</div>
                          <div>+6/-10.0</div>
                          <div>Upto 4</div>
                          <div>4905</div>
                          <div>6775</div>
                          <div>7570</div>
                        </div>
                      )}
                      {selectedLens === 'Photocrom Plus' && (
                        <div className="grid grid-cols-6 gap-2">
                          <div>1.56</div>
                          <div>+6/-8.0</div>
                          <div>Upto 4</div>
                          <div>6070</div>
                          <div>7940</div>
                          <div>8875</div>
                        </div>
                      )}
                      {selectedLens === 'Photocrom with Blue Shield' && (
                        <div className="grid grid-cols-6 gap-2">
                          <div>1.56</div>
                          <div>+6/-8.0</div>
                          <div>Upto 4</div>
                          <div>7940</div>
                          <div>10735</div>
                          <div>12000</div>
                        </div>
                      )}
                      {selectedLens === 'Blue Shield' && (
                        <>
                          <div className="grid grid-cols-6 gap-2">
                            <div>1.56</div>
                            <div>+6/-10.0</div>
                            <div>Upto 4</div>
                            <div>4675</div>
                            <div>6305</div>
                            <div>7050</div>
                          </div>
                          <div className="grid grid-cols-6 gap-2">
                            <div>1.60</div>
                            <div>+6/-10.0</div>
                            <div>Upto 4</div>
                            <div>8875</div>
                            <div>11670</div>
                            <div>13045</div>
                          </div>
                        </>
                      )}
                      {selectedLens === 'Polarized' && (
                        <div className="grid grid-cols-6 gap-2">
                          <div>1.50</div>
                          <div>+6/-8.00</div>
                          <div>Upto 4</div>
                          <div>9340</div>
                          <div>10980</div>
                          <div>12265</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            
          </div>
        </div>
      </section>


     

      {/* New Full Viewport Section */}
      <section className="w-full min-h-screen bg-black py-20 relative">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Lens Specifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed technical specifications and performance metrics for our Single Vision RX lenses
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <ServerManagementTable 
              title="Single Vision RX Lens Specifications"
              className="bg-black/50 backdrop-blur-md border-white/20"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CliffSingleVisionRX;
