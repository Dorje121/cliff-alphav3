"use client";
import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { gsap } from "gsap";
import HeroSection from "@/components/Services/heropage";
import Image from "next/image";
import { useParams, notFound } from 'next/navigation';

// Define the technology data type
type Technology = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  video?: string;
  technology?: {
    title: string;
    description: string;
    benefits: Array<{ title: string; description: string }>;
  };
};

const technologyData: Record<string, Technology> = {
  'digital-ray-path-technology': {
    id: '01',
    slug: 'digital-ray-path-technology',
    title: 'Digital Ray Path Technology™',
    subtitle: 'Precision Vision Engineering',
    description: 'Advanced digital lens design that provides superior visual clarity and comfort for all your vision needs.',
    features: [
      'Advanced digital lens design',
      'Wider field of vision',
      'Reduced eye strain',
      'Enhanced visual clarity',
      'Personalized optimization'
    ],
    benefits: [
      'Sharper vision at all distances',
      'Reduced peripheral distortion',
      'Improved contrast and clarity',
      'Enhanced comfort for extended wear',
      'Personalized to your prescription'
    ],
    image: '/homeimage/smart.png',
    technology: {
      title: 'Digital Ray Path Technology',
      description: 'Our Digital Ray Path Technology uses advanced algorithms to calculate the precise path of light through the lens, ensuring optimal focus and clarity at every point.',
      benefits: [
        { title: 'Enhanced Precision', description: 'Digital surfacing for accurate vision correction' },
        { title: 'Wider Viewing Area', description: 'Expanded clear zones for better peripheral vision' },
        { title: 'Reduced Distortion', description: 'Minimized peripheral distortion for natural vision' }
      ]
    }
  },
  'smart-add-technology': {
    id: '02',
    slug: 'smart-add-technology',
    title: 'Smart Add Technology™',
    subtitle: 'Adaptive Vision Solution',
    description: 'Intelligent lens technology that automatically adapts to different lighting conditions for optimal vision in any environment.',
    features: [
      'Light-adaptive technology',
      'Seamless transition between distances',
      'Reduced eye fatigue',
      'Enhanced depth perception',
      'Wider reading zones'
    ],
    benefits: [
      'Smooth vision at all distances',
      'Reduced need for multiple pairs',
      'Enhanced comfort for digital device use',
      'Natural vision experience',
      'Ideal for active lifestyles'
    ],
    image: '/homeimage/raypath.png',
    technology: {
      title: 'Smart Add Technology',
      description: 'Our Smart Add Technology dynamically adjusts the lens power to provide clear vision at all distances, with smooth transitions between near, intermediate, and distance vision.',
      benefits: [
        { title: 'Adaptive Focus', description: 'Automatically adjusts to different viewing distances' },
        { title: 'Wider Viewing Zones', description: 'Expanded areas for comfortable vision at all distances' },
        { title: 'Faster Adaptation', description: 'Reduced adaptation time for new wearers' }
      ]
    }
  },
  'personalization-parameters': {
    id: '03',
    slug: 'personalization-parameters',
    title: 'Personalization Parameters',
    subtitle: 'Tailored Vision Experience',
    description: 'Customizable lens parameters that adapt to your unique visual needs and lifestyle requirements.',
    features: [
      'Customizable lens design',
      'Personalized fitting parameters',
      'Enhanced visual comfort',
      'Optimized for specific activities',
      'Tailored to individual preferences'
    ],
    benefits: [
      'Vision optimized for your lifestyle',
      'Reduced adaptation time',
      'Enhanced visual comfort',
      'Personalized visual experience',
      'Ideal for specific visual needs'
    ],
    image: '/homeimage/personal.png',
    technology: {
      title: 'Personalization Technology',
      description: 'Our Personalization Parameters technology allows for precise customization of lens parameters to match your unique visual requirements and lifestyle needs.',
      benefits: [
        { title: 'Custom Fit', description: 'Tailored to your specific visual needs' },
        { title: 'Enhanced Comfort', description: 'Reduced eye strain and fatigue' },
        { title: 'Optimized Performance', description: 'Better vision for specific activities' }
      ]
    }
  },
  'automatic-corridor-select-insect-optimization': {
    id: '04',
    slug: 'automatic-corridor-select-insect-optimization',
    title: 'Automatic Corridor Select & Insect Optimization',
    subtitle: 'Intelligent Vision Enhancement',
    description: 'Advanced technology that automatically adjusts focus for different vision corridors while minimizing distractions from small visual obstacles.',
    features: [
      'Automatic focus adjustment',
      'Enhanced visual clarity in all conditions',
      'Reduced visual distractions',
      'Optimized for both near and distance vision',
      'Improved contrast and sharpness'
    ],
    benefits: [
      'Sharper vision across all distances',
      'Reduced eye strain in complex visual environments',
      'Enhanced focus on important details',
      'Improved visual comfort during extended use',
      'Better performance in various lighting conditions'
    ],
    image: '/homeimage/auto.png',
    technology: {
      title: 'Corridor & Insect Optimization',
      description: 'Our Automatic Corridor Select & Insect Optimization technology intelligently manages visual focus areas while filtering out visual noise, providing clearer, more comfortable vision in any situation.',
      benefits: [
        { title: 'Adaptive Focus Zones', description: 'Automatically adjusts to different viewing distances' },
        { title: 'Visual Noise Reduction', description: 'Minimizes distractions from small, irrelevant details' },
        { title: 'Enhanced Clarity', description: 'Provides sharper vision in all lighting conditions' }
      ]
    }
  },
  'psicoptix-technology': {
    id: '05',
    slug: 'psicoptix-technology',
    title: 'Psicoptix Technology™',
    subtitle: 'Blue Light Protection',
    description: 'Advanced lens technology that helps protect your eyes from harmful blue light emitted by digital screens while maintaining visual clarity and comfort.',
    features: [
      'Blue light filtering',
      'Reduced digital eye strain',
      'Enhanced contrast and clarity',
      'Minimal color distortion',
      'Comfortable for extended screen time'
    ],
    benefits: [
      'Reduced eye fatigue during screen use',
      'Improved sleep quality',
      'Enhanced visual comfort',
      'Protection against harmful blue light',
      'Suitable for all digital devices'
    ],
    image: '/homeimage/technology.png',
    technology: {
      title: 'Psicoptix Technology',
      description: 'Our Psicoptix Technology is specifically designed to filter harmful blue light while maintaining true color perception, ensuring comfortable viewing during extended screen time.',
      benefits: [
        { title: 'Blue Light Protection', description: 'Filters harmful blue-violet light' },
        { title: 'Visual Comfort', description: 'Reduces eye strain and fatigue' },
        { title: 'True Color', description: 'Maintains natural color perception' }
      ]
    }
  },
  'cdt-continuum-design-8k-definition': {
    id: '06',
    slug: 'cdt-continuum-design-8k-definition',
    title: 'CDT® (Continuum Design) 8K Definition',
    subtitle: 'Ultra-High Definition Vision',
    description: 'Experience crystal-clear vision with our advanced 8K definition lens technology, providing unparalleled sharpness and clarity in all lighting conditions.',
    features: [
      '8K ultra-high definition',
      'Enhanced contrast and clarity',
      'Wider field of view',
      'Reduced glare and reflections',
      'Improved night vision'
    ],
    benefits: [
      'Sharper, clearer vision',
      'Enhanced depth perception',
      'Reduced eye strain',
      'Better performance in low light',
      'More natural vision'
    ],
    image: '/homeimage/8k.png',
    technology: {
      title: '8K Definition Technology',
      description: 'Our CDT® (Continuum Design) 8K Definition technology provides superior visual acuity by optimizing light transmission and minimizing optical aberrations for crystal-clear vision.',
      benefits: [
        { title: 'Enhanced Resolution', description: 'Sharper, more detailed vision' },
        { title: 'Improved Contrast', description: 'Better distinction between colors and shades' },
        { title: 'Wider View', description: 'Expanded field of clear vision' }
      ]
    }
  },
  'wear-fit-customization': {
    id: '07',
    slug: 'wear-fit-customization',
    title: 'Wear Fit Customization',
    subtitle: 'Personalized Lens Design',
    description: 'Custom-tailored lenses that adapt to your unique facial measurements and wearing habits for optimal vision and comfort all day long.',
    features: [
      'Personalized fitting parameters',
      'Customized optical centers',
      'Optimized for your frame style',
      'Reduced peripheral distortion',
      'Enhanced visual comfort'
    ],
    benefits: [
      'Improved visual clarity',
      'Reduced eye strain',
      'Better frame fit',
      'Enhanced comfort for all-day wear',
      'Personalized visual experience'
    ],
    image: '/homeimage/wearfit.png',
    technology: {
      title: 'Wear Fit Technology',
      description: 'Our Wear Fit Customization technology takes into account your unique facial measurements, frame selection, and personal preferences to create lenses that are perfectly optimized for how you wear your glasses.',
      benefits: [
        { title: 'Custom Fit', description: 'Tailored to your unique measurements' },
        { title: 'Enhanced Comfort', description: 'Reduced pressure points and better weight distribution' },
        { title: 'Optimal Vision', description: 'Precise optical alignment for your eyes' }
      ]
    }
  },
  'thickness-control-technology': {
    id: '08',
    slug: 'thickness-control-technology',
    title: 'Thickness Control Technology',
    subtitle: 'Slim, Lightweight Lenses',
    description: 'Advanced lens technology that maintains optimal optical performance while keeping lenses thin, lightweight, and comfortable for all-day wear.',
    features: [
      'Reduced lens thickness',
      'Lighter weight',
      'Improved aesthetics',
      'Enhanced comfort',
      'Wider range of frame options'
    ],
    benefits: [
      'More comfortable to wear',
      'Better looking lenses',
      'Reduced lens weight',
      'Improved durability',
      'Wider selection of frame styles'
    ],
    image: '/technology.jpeg',
    technology: {
      title: 'Thickness Control',
      description: 'Our Thickness Control Technology uses advanced materials and precision engineering to create lenses that are up to 30% thinner and lighter than standard lenses, without compromising on optical quality or durability.',
      benefits: [
        { title: 'Slimmer Profile', description: 'Reduced edge thickness for a more attractive look' },
        { title: 'Lightweight', description: 'Up to 30% lighter than standard lenses' },
        { title: 'Durable', description: 'Maintains strength and clarity over time' }
      ]
    }
  }
};

const CliffTechnology = () => {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug || '';
  const [technology, setTechnology] = useState<Technology | null>(null);
  const backgroundImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Find the technology data based on the slug
    const techData = technologyData[slug as keyof typeof technologyData];
    
    if (techData) {
      setTechnology(techData);
    } else {
      // Handle 404 for unknown slugs
      notFound();
    }
  }, [slug]);

  useLayoutEffect(() => {
    if (!technology) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        backgroundImageRef.current,
        { scale: 1, rotation: 0 },
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
  }, [technology]);

  if (!technology) {
    return <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-pulse text-white text-lg">Loading technology details...</div>
    </div>;
  }

  return (
    <>
      <HeroSection
        title={technology.title}
        subtitle={technology.subtitle}
        description={technology.description}
        backgroundImage={technology.image}
        rightImage={technology.image}
        serviceNumber={technology.id}
        badgeTitle="TECH"
        badgeSubtitle={technology.technology?.title || 'INNOVATION'}
      />

      {/* Main Content Section */}
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        <div className="max-w-[1500px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">

          
          {/* Intro Paragraph */}
          <div className="w-full mb-16">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#FFD700]">
                {technology.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                {technology.description}
              </p>
            </div>
          </div>

          {/* Technology Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Technology Overview */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Technology <span className="text-[#FFD700]">Overview</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
                  {technology.technology?.description || technology.description}
                </p>
                
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                  <Image
                    src={technology.image}
                    alt={technology.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Key Features</h3>
                <ul className="space-y-3">
                  {technology.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#FFD700] mr-2">✓</span>
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technology Benefits */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Benefits of <span className="text-[#FFD700]">{technology.title}</span>
                </h2>
                
                <div className="space-y-6">
                  {technology.technology?.benefits?.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/20 p-6 rounded-xl border border-zinc-800 hover:border-[#FFD700]/30 transition-colors">
                      <h4 className="text-lg font-semibold text-[#FFD700] mb-2">{benefit.title}</h4>
                      <p className="text-zinc-300">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Benefits */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Additional Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {technology.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-zinc-900/40 to-zinc-800/10 p-4 rounded-lg border border-zinc-800">
                      <p className="text-sm text-zinc-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Features Grid */}
      <div className="w-full bg-gradient-to-b from-black to-zinc-900 py-16">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
          <div className="text-left mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-[#FFD700]">{technology.title.split('™')[0]}</span>
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl">
              Experience the difference with our advanced lens technology designed for your visual needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: "/svgs/clearvision.svg", 
                title: "Superior Clarity", 
                desc: "Experience crystal-clear vision with our advanced optical technology" 
              },
              { 
                icon: "/svgs/antireflective.svg", 
                title: "Reduced Eye Strain", 
                desc: "Designed to minimize eye fatigue during extended use" 
              },
              { 
                icon: "/svgs/uvprotection.svg", 
                title: "Full Protection", 
                desc: "100% UV protection and blue light filtering" 
              },
              { 
                icon: "/svgs/scratchresistance.svg", 
                title: "Durability", 
                desc: "Scratch-resistant and long-lasting performance" 
              },
              { 
                icon: "/svgs/bluelight.svg", 
                title: "Comfort", 
                desc: "Lightweight design for all-day comfort" 
              },
              { 
                icon: "/svgs/superslippery.svg", 
                title: "Adaptive Technology", 
                desc: "Automatically adjusts to different lighting conditions" 
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group flex flex-col p-6 bg-gradient-to-br from-zinc-900/40 to-zinc-800/10 rounded-xl border border-zinc-800 hover:border-[#FFD700]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#FFD700]/10 rounded-lg mr-4">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFD700]"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-zinc-300 text-sm sm:text-base pl-14">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Showcase Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="w-full mx-auto relative z-20">
              <div className="p-6 lg:p-10">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-center lg:text-left">
                  Advanced Optical Engineering
                </h2>
                <p className="text-zinc-300 max-w-2xl mx-auto lg:mx-0 mb-8 text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
                  Our cutting-edge technology portfolio represents decades of innovation in optical science, delivering unparalleled visual performance and comfort.
                </p>

                {/* Benefits list */}
                <div className="space-y-8">
                  {/* Benefit 1 */}
                  <div className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-4 mt-1 text-4xl sm:text-5xl">
                      1
                    </span>
                    <div>
                      <span className="text-white font-semibold block text-xl sm:text-2xl">
                        Enhanced Visual Processing
                      </span>
                      <span className="text-zinc-400 text-sm sm:text-base mt-1 block">
                        Merges optics with neuroscience for natural vision
                      </span>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-4 mt-1 text-4xl sm:text-5xl">
                      2
                    </span>
                    <div>
                      <span className="text-white font-semibold block text-xl sm:text-2xl">
                        Ultra-High Definition
                      </span>
                      <span className="text-zinc-400 text-sm sm:text-base mt-1 block">
                        8x more optical definition than standard lenses
                      </span>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex items-start">
                    <span className="text-[#FFD700] font-bold mr-4 mt-1 text-4xl sm:text-5xl">
                      3
                    </span>
                    <div>
                      <span className="text-white font-semibold block text-xl sm:text-2xl">
                        Perfect Fit Technology
                      </span>
                      <span className="text-zinc-400 text-sm sm:text-base mt-1 block">
                        Customized based on individual measurements
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative order-1 lg:order-none">
              <Image
                src="/imAGES/technology.png"
                alt="Cliff Technology Innovation"
                width={1200}
                height={800}
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl"
              />
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10 rounded-xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CliffTechnology;
