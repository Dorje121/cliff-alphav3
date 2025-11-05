"use client";
import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { gsap } from "gsap";
import HeroSection from "@/components/Services/heropage";
import Image from "next/image";
import { Skiper47 } from "@/components/ui/cardsswiper";
import { useParams, notFound } from 'next/navigation';
import { Target, Eye, Settings, User, Glasses } from 'lucide-react';

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
    subtitle: 'Better Vision at every point on the lens',
    description: 'Lenses calculated with this technology method provide a better visual experience regardless of the prescription or frame selected.',
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
      <div className="min-h-screen bg-black text-white montserrat overflow-hidden relative">
        {slug === 'digital-ray-path-technology' && (
          <div className="w-full px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <p className="text-lg md:text-xl leading-relaxed montserrat text-gray-300 mb-8">
                  Digital Ray-Path® is based on the realistic simulation of the optical behaviour of the lens when its placed in front of the wearer's eye. This simulation computes the oblique aberrations that have a negative impact on the lens visual performance. Oblique aberrations are reduced at every point on the lens, taking into account the rotation of the eye and the actual position of the lens.
                </p>
                <p className="text-lg md:text-xl leading-relaxed montserrat text-gray-300 font-semibold mb-12">
                  Result of Digital Ray-Path®: A personalized digital lens completely optimized for each user.
                </p>
              </div>
            </div>

            {/* Explanation Text */}
            <div className="w-full pl-5 pr-5 py-20  mx-auto mt-16">
              <h2 className="text-2xl md:text-3xl font-bold montserrat text-yellow-400 mb-6">
                How Digital Ray-Path® Technology Works
              </h2>
              <p className="text-base montserrat text-gray-300">
                Digital Ray-Path® computes the back surface of the lens through an optimization process that follows 3 different steps. The result is a fully personalized lens taking into account the wearer's prescription, physiological parameters and frame measurements.
              </p>
            </div>

            {/* Three Image Cards Section */}
            <div className="flex flex-col pl-5 pr-5 md:flex-row grid grid-cols-1 gap-4 md:grid-cols-3 gap-0">
               {/* Card 1 */}
                    <div className="bg-black rounded-sm overflow-hidden shadow-xl transition-transform">
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">Eye - Lens System</h3>
                      </div>
                      <div className="h-[18rem] overflow-hidden">
                        <Image
                          src="/homeimage/website.png"
                          alt="Precision Engineering"
                          width={400}
                          height={320}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className=" bg-black pt-4">
                        <p className="text-lg poppins text-gray-300">
                          Digital Ray-Path® prepares a simulation of the lens in front of the eye, considering all the information available from the wearer (like tilts, back vertex distance...).
                        </p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-black rounded-sm overflow-hidden shadow-xl transition-transform">
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">Space Object</h3>
                      </div>
                      <div className="h-[18rem] overflow-hidden">
                        <Image
                          src="/homeimage/website.png"
                          alt="Customized Vision"
                          width={400}
                          height={320}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className=" bg-black pt-4">
                        <p className="text-lg poppins text-gray-300">
                          Digital Ray-Path® understands which areas of
                          the lens are meant for distance, intermediate
                          or near vision. All this information is considered
                          during the optimization process.
                        </p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-black rounded-sm overflow-hidden shadow-xl transition-transform">
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">Ray Tracing</h3>
                      </div>
                      <div className="h-[18rem] overflow-hidden">
                        <Image
                          src="/homeimage/website.png"
                          alt="Enhanced Clarity"
                          width={400}
                          height={320}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className=" bg-black pt-4">
                        <p className="text-lg poppins text-gray-300">
                         Digital Ray-Path® simulates how the eye rotates
                          to look in different gaze directions and at
                          different distances. For each position of the
                          eye, it compensates the oblique aberrations of
                          the lens at that particular point.
                          Thousands of rays tracings are used to optimize
                          the back surface of the lens point by point to
                          minimize those undesired aberrations
                        </p>
                      </div>
                    </div>
                  </div>
          </div>
        )}

        {/* Benefits Section */}
        <div className="w-full py-16 bg-black">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                Benefits of Digital Ray Path Technology™
              </h2>
             
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/70 backdrop-blur-md p-6 rounded-lg transform transition-all duration-300 border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                    <Target className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400">GETTING RID OF OBLIQUE ABERRATION</h3>
                </div>
                <p className="text-gray-300">Every person needs different insets to maximize their
                binocular near visual fields. In Digital Ray-Path® lenses,
                the inset is exactly calculated for each wearer
                considering all the individual parameters.</p>
              </div>
              
              <div className="bg-black/70 backdrop-blur-md p-6 rounded-lg transform transition-all duration-300 border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                    <Eye className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400">ACHIEVING LARGER VISUAL FIELDS</h3>
                </div>
                <p className="text-gray-300">Getting rid of oblique aberrations is important both
                in single vision and progressive lenses. Thanks to
                Digital Ray-Path®, oblique aberrations are reduced
                everywhere on the lens, resulting in wider viewing
                areas with sharp and clear vision.</p>
              </div>
              
              <div className="bg-black/70 backdrop-blur-md p-6 rounded-lg transform transition-all duration-300 border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                    <Settings className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400">VARIABLE INSET OPTIMIZATION</h3>
                </div>
                <p className="text-gray-300">Every person needs different insets to maximize their
                binocular near visual fields. In Digital Ray-Path® lenses,
                the inset is exactly calculated for each wearer
                considering all the individual parameters.</p>
              </div>
              
              <div className="bg-black/70 backdrop-blur-md p-6 rounded-lg transform transition-all duration-300 border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                    <User className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400">PERSONALIZATION FOR HIGH PRESCRIPTIONS & SPORT FRAMES</h3>
                </div>
                <p className="text-gray-300">Every person needs different insets to maximize their
                binocular near visual fields. In Digital Ray-Path® lenses,
                the inset is exactly calculated for each wearer
                considering all the individual parameters.</p>
              </div>
              
              <div className="bg-black/70 backdrop-blur-md p-6 rounded-lg transform transition-all duration-300 border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                    <Glasses className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-400">FLEXIBILIDAD DE MONTURAS</h3>
                </div>
                <p className="text-gray-300">Digital Ray-Path® lenses, both progressive and
                single vision, provide excellent vision for any wearer
                regardless of the frame that is selected. In addition,
                Digital Ray Path® lenses can be calculated with</p>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  );
};

export default CliffTechnology;
