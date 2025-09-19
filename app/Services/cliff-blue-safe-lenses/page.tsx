"use client";
import BackToServicesButton from "@/components/Services/BackToServicesButton";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import HeroSection from "@/components/Services/heropage";

const LensTimelineSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      id: 1,
      title: "All-day Protection From UV & Filtering of Blue Light",
      desc: "Effortlessly filters UV and blue light, it offers you comfortable vision all day long, everyday.",
      active: true,
      image: "/newimage/bg.avif"
    },
    {
      id: 2,
      title: "Enhanced Aesthetics",
      desc: "Filter blue light without noticeable blue reflection, offering you an aesthetically-pleasing vision solution.",
      active: false,
      image: "/newimage/bluesafeuv.avif"
    },
    {
      id: 3,
      title: "Long-Lasting Clarity",
      desc: "Powered by Seecoat™ Next for a whole new level of lens protection and durability, tested and proven to withstand daily wear and tear.",
      active: false,
      image: "/newimage/img.avif"
    
    },
  ];

  useLayoutEffect(() => {
    // Only run on client side
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

      // Handle fixed positioning for image
      if (imageRef.current && timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const imageHeight = 320; // w-80 h-80 = 320px
        const offset = 128; // top-32 = 128px
        
        if (timelineRect.top <= offset && timelineRect.bottom > offset + imageHeight) {
          // Image should be fixed
          imageRef.current.style.position = 'fixed';
          imageRef.current.style.top = `${offset}px`;
          imageRef.current.style.left = `${timelineRect.left + timelineRect.width / 2 - 160}px`; // Center horizontally
          imageRef.current.style.width = '320px';
          imageRef.current.style.height = '320px';
        } else {
          // Image should be static
          imageRef.current.style.position = 'static';
          imageRef.current.style.top = 'auto';
          imageRef.current.style.left = 'auto';
          imageRef.current.style.width = 'auto';
          imageRef.current.style.height = 'auto';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-12">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <div className="sticky top-32 h-fit z-20">
            <motion.div
            key={currentImage}
            className="relative w-80 h-80 rounded-2xl shadow-2xl "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={features[currentImage].image}
              alt="Lens Protection"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
          </div>
        </div>

        {/* Right Side Timeline */}
        <div className="relative" ref={timelineRef}>
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
  const features = [
    {
      id: "scratch",
      icon: "/svgs/scratchresistance.svg",
      title: "Scratch Resistance",
      
    },    
    {
      id: "clear",
      icon: "/svgs/clearvision.svg",
      title: "Clear Vision Reduced Reflection",
     
    },
    {
      id: "slippery",
      icon: "/svgs/superslippery.svg",
      title: "Super Hydrophobic Coating",
     
    },
    {
      id: "bluelight",
      icon: "/svgs/bluelight.svg",
      title: "Blue Light Protection",
     
    },
    {
      id: "uv",
      icon: "/svgs/uvprotection.svg",
      title: "UV Protection",
   
    },
    {
      id: "glare",
      icon: "/svgs/glareprotection.svg",
      title: "Glare Protection",
      
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


      <div className="min-h-screen text-white overflow-visible py-8">
        <div className="relative max-w-[1500px] mx-auto p-4 py-8 sm:py-12 lg:py-16">
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        
            <div className="lg:col-span-2">
              
              <div className="mb-12 pl-2">
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl mt-2">
                  <span className="text-white">Premium Lens Technology </span>
                </h1>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={feature.id}
                    className="text-center"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={64}
                        height={64}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-2">
                      {feature.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Recommendations & Specifications */}
            <div className="lg:col-span-1">
              {/* Right Side - Combined Sticky Container */}
              <div className="sticky top-20 space-y-6 lg:pl-4">
                {/* Recommended For */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-lg shadow-2xl">
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
                <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-lg shadow-2xl">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
                    POWER RANGE
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-white/10 backdrop-blur-sm">
                          <th className="border border-gray-600 p-2 text-center text-white font-bold">
                            INDEX
                          </th>
                          <th className="border border-gray-600 p-2 text-center text-white font-bold">
                            SPH
                          </th>
                          <th className="border border-gray-600 p-2 text-center text-white font-bold">
                            CYL
                          </th>
                          <th className="border border-gray-600 p-2 text-center text-white font-bold">
                            MRP
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            rowSpan={2}
                            className="border border-white/20 p-2 text-center text-white font-bold bg-white/10 backdrop-blur-sm"
                          >
                            1.56
                          </td>
                          <td className="border border-white/10 p-2 text-center text-gray-200 text-sm">
                            0.00 to -8.00
                          </td>
                          <td className="border border-white/10 p-2 text-center text-gray-200 text-sm">
                            0.00 to -3.00
                          </td>
                          <td
                            rowSpan={2}
                            className="border border-white/20 p-2 text-center text-white font-bold bg-white/10 backdrop-blur-sm"
                          >
                            2450
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-white/10 p-2 text-center text-gray-200 text-sm">
                            0.00 to +4.00
                          </td>
                          <td className="border border-white/10 p-2 text-center text-gray-200 text-sm">
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


      <section>
        
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-snug">
              <span className="text-white">
              Enjoy the Purest Light <br /> Your Eyes Deserve 
              </span>
            </h2>
           
          </div>
     
        <LensTimelineSection />
      </section>

     

      {/* Image Section */}
      <div className="relative py-16 sm:py-20 bg-black">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-10 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-snug">
        <span className="text-white">
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
          width={1000}
          height={600}
          className="w-full h-full object-cover"
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
