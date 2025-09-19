"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundImage,
  rightImage,
  serviceNumber,
  badgeTitle,
  badgeSubtitle
}: {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  rightImage: string;
  serviceNumber: string;
  badgeTitle: string;
  badgeSubtitle: string;
}) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <span className="text-sm uppercase tracking-wider text-yellow-400 font-medium mb-4 block">
              {subtitle}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">{title}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
              {description}
            </p>
            
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">{serviceNumber}</span>
                </div>
                <span className="text-sm uppercase tracking-widest text-gray-400">Service</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-xl p-4"
              >
                <span className="block text-white text-sm">Starting at</span>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-white">₹{badgeTitle}</span>
                  <span className="text-gray-300 text-sm ml-2">{badgeSubtitle}</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md h-96 lg:h-[500px]">
              <Image
                src={rightImage}
                alt={title}
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LensTimelineSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      id: 1,
      title: "All-day Protection From UV & Filtering of Blue Light",
      desc: "Effortlessly filters UV and blue light, it offers you comfortable vision all day long, everyday.",
      active: true,
      image: "/newimage/bluesafeuv.avif"
    },
    {
      id: 2,
      title: "Enhanced Aesthetics",
      desc: "Filter blue light without noticeable blue reflection, offering you an aesthetically-pleasing vision solution.",
      active: false,
      image: "/newimage/aesthetic.avif"
    },
    {
      id: 3,
      title: "Long-Lasting Clarity",
      desc: "Powered by Seecoat™ Next for a whole new level of lens protection and durability, tested and proven to withstand daily wear and tear.",
      active: false,
      image: "/newimage/clarity.avif"
    },
  ];

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineItems = timelineRef.current.querySelectorAll('[data-timeline-item]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top + window.scrollY;
        const itemBottom = rect.bottom + window.scrollY;
        
        if (scrollPosition >= itemTop && scrollPosition <= itemBottom) {
          setCurrentImage(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-12 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <motion.div
            key={currentImage}
            className="relative w-full max-w-md h-96 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={features[currentImage].image}
              alt="Lens Protection"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-zinc-800"></div>

          <div className="space-y-10 pl-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                data-timeline-item
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.4 }}
                className={`relative p-6 rounded-xl shadow-lg border transition-all duration-300 ${
                  currentImage === index
                    ? "bg-yellow-500/10 border-yellow-500/40"
                    : "bg-zinc-900/80 border-zinc-800 hover:bg-zinc-800"
                }`}
              >
                {/* Timeline Dot */}
                <span
                  className={`absolute -left-12 top-6 w-4 h-4 rounded-full border-2 ${
                    currentImage === index
                      ? "bg-yellow-500 border-yellow-500 shadow-yellow-500/70 shadow-lg"
                      : "bg-zinc-700 border-zinc-600"
                  }`}
                ></span>

                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CliffBlueSafeLenses = () => {
  const backgroundImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

  const features = [
    {
      id: "scratch",
      icon: "/svgs/scratchresistance.svg",
      title: "Scratch Resistance",
      benefits: ["Better Durability", "Protect Against Scratches"],
    },    
    {
      id: "clear",
      icon: "/svgs/clearvision.svg",
      title: "Clear Vision Reduced Reflection",
      benefits: ["Clearer and Sharper Image", "Better Aesthetics"],
    },
    {
      id: "slippery",
      icon: "/svgs/superslippery.svg",
      title: "Super Hydrophobic Coating",
      benefits: [
        "Easy to Clean",
        "Repels Dust and Water",
        "Prolonged Cleanliness",
      ],
    },
    {
      id: "bluelight",
      icon: "/svgs/bluelight.svg",
      title: "Blue Light Protection",
      benefits: [
        "Blocks harmful blue rays",
        "Allows beneficial blue light",
        "Better sleep cycle/ maintain circadian rhythm",
      ],
    },
    {
      id: "uv",
      icon: "/svgs/uvprotection.svg",
      title: "UV Protection",
      benefits: ["As Recommended by WHO up to 400nm"],
    },
    {
      id: "glare",
      icon: "/svgs/glareprotection.svg",
      title: "Glare Protection",
      benefits: ["Reduces eye strain", "Improves visual comfort"],
    },
  ];

  const recommendations = [
    "All day use purpose",
    "Digital gadget users",
    "Digital eye strain",
    "Computer vision syndrome (CVS)",
  ];

  return (
    <>
      <HeroSection
        title="Cliff Blue Safe"
        subtitle="UV Lenses"
        description="Complete blue light protection lenses for modern digital lifestyle. Advanced UV filtering technology protects your eyes from harmful blue light emitted by digital screens."
        backgroundImage="/newimage/alibaba.avif"
        rightImage="/newimage/alibaba.avif"
        serviceNumber="04"
        badgeTitle="2400"
        badgeSubtitle="MRP"
      /> 

      <div className="min-h-screen text-white overflow-visible py-8 bg-black">
        <div className="relative max-w-[1500px] mx-auto p-4 py-8 sm:py-12 lg:py-16">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Title & Features */}
            <div className="lg:col-span-2">
              {/* Title Section */}
              <div className="mb-12 pl-2">
                <span className="text-sm uppercase tracking-wider text-yellow-400 font-medium">Premium Lens Technology</span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
                  <span className="text-white">CLIFF </span>
                  <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                    BLUE SAFE UV
                  </span>
                </h1>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={feature.id}
                    className="text-center bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-yellow-500/30 transition-colors"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-zinc-800 rounded-full">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-2">
                      {feature.title}
                    </h3>
                    {feature.benefits.length === 1 ? (
                      <p className="text-gray-300">{feature.benefits[0]}</p>
                    ) : (
                      <ul className="space-y-1">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6 lg:pl-4">
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700 shadow-2xl">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                    Recommended For:
                  </h3>
                  <div className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-yellow-400">•</span>
                        <span className="text-gray-300 text-sm sm:text-base">
                          {rec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Power Range Table */}
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-700 shadow-2xl">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
                    POWER RANGE
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-zinc-800">
                          <th className="border border-zinc-700 p-2 text-center text-white font-bold">
                            INDEX
                          </th>
                          <th className="border border-zinc-700 p-2 text-center text-white font-bold">
                            SPH
                          </th>
                          <th className="border border-zinc-700 p-2 text-center text-white font-bold">
                            CYL
                          </th>
                          <th className="border border-zinc-700 p-2 text-center text-white font-bold">
                            MRP
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            rowSpan={2}
                            className="border border-zinc-700 p-2 text-center text-white font-bold bg-zinc-800"
                          >
                            1.56
                          </td>
                          <td className="border border-zinc-700 p-2 text-center text-gray-200 text-sm">
                            0.00 to -8.00
                          </td>
                          <td className="border border-zinc-700 p-2 text-center text-gray-200 text-sm">
                            0.00 to -3.00
                          </td>
                          <td
                            rowSpan={2}
                            className="border border-zinc-700 p-2 text-center text-white font-bold bg-zinc-800"
                          >
                            2450
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-zinc-700 p-2 text-center text-gray-200 text-sm">
                            0.00 to +4.00
                          </td>
                          <td className="border border-zinc-700 p-2 text-center text-gray-200 text-sm">
                            0.00 to -2.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-gray-400 mt-3 italic">
                    All listed powers are resultant; cross-compound is not
                    available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-snug">
              <span className="text-white">
              Enjoy the Purest Light <br /> Your Eyes Deserve 
              </span>
            </h2>
           
          </div>
          <LensTimelineSection />
        </div>
      </section>

      {/* Image Section */}
      <div className="relative py-16 sm:py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-snug">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                Advanced Blue Light Protection
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Experience the perfect blend of style and protection with our
              cutting-edge lens technology
            </p>
          </div>

          {/* Image */}
          <div className="relative max-w-[1470px] mx-auto w-full">
            <div className="relative w-full h-[250px] sm:h-[400px] md:h-[550px] lg:h-[700px] rounded-xl overflow-hidden">
              <Image
                src="/pageimg/safe.png"
                alt="Cliff Blue Safe UV Technology"
                fill
                className="object-cover"
              />
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>

      <BackToServicesButton />
    </>
  );
};

export default CliffBlueSafeLenses;