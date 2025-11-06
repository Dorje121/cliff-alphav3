"use client";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Technology, getTechnologyBySlug } from '../technology';
import { useParams } from 'next/navigation';
import { SpecsCarousel } from "@/components/ui/SpecsCarousel";
import HeroSection from "@/components/Services/heropage";
import { Target, Eye, Settings, User, Glasses } from 'lucide-react';

const CliffTechnology = () => {
  const { slug } = useParams();
  const [technology, setTechnology] = useState<Technology | null>(null);
  const [, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);
  const backgroundImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slug) return;
    
    const tech = getTechnologyBySlug(slug as string);
    if (!tech) {
      setError('Technology not found');
      setLoading(false);
      return;
    }
    
    setTechnology(tech);
    setLoading(false);
  }, [slug]);

  useLayoutEffect(() => {
    if (!backgroundImageRef.current) return;
    
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
        showBackButton={true}
        backButtonHref="/technology"
        backButtonText="Back to Technology"
      />

      {/* Main Content Section */}
      {slug === 'digital-ray-path-technology' && (
      <div className="min-h-screen bg-[#E5EAED] text-black montserrat overflow-hidden relative">

          <div className="w-full">

            

          </div>
            
          
          <div className="w-full px-4 py-8 md:py-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image on left - full width on mobile, larger on md+ */}
                <div className="w-full md:w-[65%] lg:w-[60%] xl:w-[58%]">
                  <Image
                    src="/embla/digitalray.png"
                    alt="Digital Ray-Path Technology"
                    width={900}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Text on right - slightly smaller on md+ */}
                <div className="w-full md:w-[35%] lg:w-[40%] xl:w-[42%] text-left">
                  <p className="text-lg md:text-xl leading-relaxed montserrat text-zinc-800 mb-8">
                    Digital Ray-Path® is based on the realistic simulation of the optical behaviour of the lens when it&apos;s placed in front of the wearer&apos;s eye. This simulation computes the oblique aberrations that have a negative impact on the lens visual performance. Oblique aberrations are reduced at every point on the lens, taking into account the rotation of the eye and the actual position of the lens.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed montserrat text-zinc-800 font-semibold">
                    Result of Digital Ray-Path®: A personalized digital lens completely optimized for each user.
                  </p>
                </div>
              </div>
            </div>

          
          </div>

          <div>
            {/* Explanation Text */}
            <div className="w-full pl-8 pr-8 py-20 bg-black  mx-auto mt-16">
              <h2 className="text-2xl md:text-3xl font-bold montserrat text-yellow-400 mb-6">
                How Digital Ray-Path® Technology Works
              </h2>
              <p className="text-base montserrat text-gray-300">
                Digital Ray-Path® computes the back surface of the lens through an optimization process that follows 3 different steps. The result is a fully personalized lens taking into account the wearer&apos;s prescription, physiological parameters and frame measurements.
              </p>
            </div>

            {/* Three Image Cards Section */}
            <div className="flex flex-col bg-black pl-8 pr-8 md:flex-row grid grid-cols-1 gap-4 md:grid-cols-3 gap-0">
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
                        
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
      

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
            
            {/* Specifications Carousel */}
            <div className="mt-16 mb-8 py-10">
              <h2 className="text-3xl font-bold text-[#FFD700] text-left mb-8"> Individual Personlization </h2>
             
            
              <SpecsCarousel />
            </div>
          </div>
        </div>
      </div> 
        )}  
    </>
  );
};

export default CliffTechnology;
