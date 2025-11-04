'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronRight, Check, Star } from 'lucide-react';
import { div } from 'three/src/nodes/TSL.js';

// Lens images from public/lenses directory
const lensImages = [
  '/polarized/blue-pink.webp',
  '/polarized/blue.png',
  '/polarized/brown.png',
  '/polarized/flame-red.webp',
  '/polarized/gold.png',
  '/polarized/gray.png',
  '/polarized/green.png',
  '/polarized/image.png',
  '/polarized/maroon-brown.webp',
  '/polarized/mossgreen.png',
  '/polarized/neon pink.png',
  '/polarized/red-blue.webp',
  '/polarized/rose.png',
  '/polarized/silver.png'
];

// Function to get random lens images
const getRandomLensImages = (count: number) => {
  const shuffled = [...lensImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Use the first 5 images from lensImages for the carousel
const carouselImages = lensImages.slice(0, 5);
const photochromaticImages = [
  '/lenses/blue.png',
  '/lenses/brown.png',
  '/lenses/gray.png',
  '/lenses/pink.png',
  '/lenses/purple.png'
];

const blueshieldImages = [
  '/lenses/blue.png',  // Replace with actual blueshield images
  '/lenses/gray.png',
  '/lenses/brown.png'
];

const polarizedImages = [
  '/polarized/blue-pink.webp',
  '/polarized/blue.png',
  '/polarized/brown.png',
  '/polarized/flame-red.webp',
  '/polarized/gold.png'
];

interface LensType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  icon: string;
  techSpecs: string[];
  bestFor: string[];
}

const SpecialityLenses: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalSlides = carouselImages.length;
  const extendedSlides = [...carouselImages, ...carouselImages, ...carouselImages];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => {
        if (prev >= totalSlides * 2) {
          // Reset to first image without animation
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentSlide(1);
            // Force reflow
            void document.body.offsetHeight;
            setIsTransitioning(true);
          }, 10);
          return totalSlides;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const lensTypes = [
    {
      id: 'tint',
      title: 'Tinted Lenses',
      subtitle: 'Custom Visual Solutions',
      description: 'Professionally calibrated tinted lenses designed for specific visual needs and environmental conditions. Experience enhanced vision in any lighting situation with our premium tinted lens options.',
      features: [
        'Wide range of color options and densities',
        'Reduces light sensitivity (photophobia)',
        'Enhances contrast and depth perception',
        'Available with or without prescription',
        'Ideal for both medical and lifestyle needs'
      ],
      benefits: [
        'Significantly reduces glare and eye strain',
        'Improves visual comfort in bright conditions',
        'Helps with light-sensitive conditions',
        'Fully customizable to your specific requirements'
      ],
      image: '/lenses/blue.png',
      techSpecs: [
        'Precision Tint Technology',
        'Variable Light Transmission',
        'Enhanced Contrast Coating',
        'Medical Grade Options Available'
      ],
      bestFor: ['Light Sensitive Individuals', 'Outdoor Enthusiasts', 'Medical Use', 'Sports']
    },
    {
      id: 'blueshield',
      title: 'BlueShield',
      subtitle: 'Advanced Blue Light Protection',
      description: 'Specifically engineered for the digital age, BlueShield lenses filter harmful blue light while maintaining optimal visual clarity and color accuracy.',
      features: [
        'Blocks up to 40% of harmful blue light',
        'Reduces digital eye strain and fatigue',
        'Improves sleep quality by filtering sleep-disrupting blue light',
        'Maintains true color perception',
        'Ideal for digital device users and gamers'
      ],
      benefits: [
        'Reduces eye strain during prolonged screen time',
        'Helps maintain healthy sleep patterns',
        'Enhances visual comfort',
        'No color distortion'
      ],
      image: '/lenses/gray.png',
      techSpecs: [
        'Blue Light Filtering Technology',
        'Anti-Reflective Coating',
        'UV400 Protection',
        'Scratch-Resistant'
      ],
      bestFor: ['Office Workers', 'Gamers', 'Students', 'Digital Artists']
    },
    {
      id: 'photochrome',
      title: 'Photochromic',
      subtitle: 'Adaptive Light Technology',
      description: 'Intelligent lenses that automatically adapt to changing light conditions, providing optimal vision indoors and outdoors.',
      features: [
        'Automatically darken in sunlight',
        'Clear indoors, dark outdoors',
        'UV protection in all conditions',
        'Available in gray and brown tints',
        'Works with most lens materials'
      ],
      benefits: [
        'Convenient all-day wear',
        '100% UV protection',
        'Reduces the need for multiple pairs',
        'Seamless transition between indoors and outdoors'
      ],
      image: '/lenses/pink.png',
      techSpecs: [
        'Light Adaptive Molecules',
        'Rapid Transition Technology',
        'UV-Activated Tinting',
        'Temperature Stability'
      ],
      bestFor: ['Active Lifestyles', 'Commuters', 'Outdoor Professionals', 'Everyday Use']
    },
    {
      id: 'polarized',
      title: 'Polarized',
      subtitle: 'Superior Glare Elimination',
      description: 'Advanced polarized technology that eliminates reflective glare for enhanced visual comfort and safety in bright conditions.',
      features: [
        'Eliminates reflective glare from surfaces',
        'Enhances color and contrast',
        'Reduces eye strain in bright conditions',
        'Ideal for driving and outdoor sports',
        'Available in various colors'
      ],
      benefits: [
        'Improved visual comfort in bright light',
        'Enhanced safety during driving',
        'Better visibility in water and snow',
        'Reduced eye fatigue'
      ],
      image: '/lenses/driveclear.png',
      techSpecs: [
        'Polarizing Filter Layer',
        'Glare Elimination Technology',
        'Color Enhancement',
        'Impact Resistant'
      ],
      bestFor: ['Drivers', 'Fishermen', 'Skiers', 'Beach Goers']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Clean Hero Section */}
      <header className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="pt-24 pb-16">
            <div className="w-full max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl  text-white mb-4 leading-tight">
                Speciality <span className="text-[#FFD700]">Lenses</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                One lens. Every condition. Unmatched comfort.
              </p>
            </div>
          </div>
        </div>
        

        {/* Full-width Video Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="w-full h-[70vh] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg"
            >
              <source src="/homevideo/Bluesafe-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </header>

       {/* Lens Features Section - Moved below hero text */}
        <div className="relative py-16 overflow-hidden">
          {/* Background with blur */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm -z-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
             
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 max-w-[1800px] mx-auto">
                  <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-gray-900/70 w-full">
                    <h3 className="text-xl font-semibold text-white mb-3">Tinted Lenses</h3>
                    <p className="text-gray-400">Customizable Your Preferred Color</p>
                  </div>

                  {/* Photochromic Lenses */}
                  <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-gray-900/70 w-full">
                    <h3 className="text-xl font-semibold text-white mb-3">Photochromic Lenses</h3>
                    <p className="text-gray-400">Clear-to-Dark Transition</p>
                  </div>
                  
                  {/* Photo Z Lenses */}
                  <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-gray-900/70 w-full">
                    <h3 className="text-xl font-semibold text-white mb-3">Photo Z Lenses</h3>
                    <p className="text-gray-400">Advanced Photochromic</p>
                  </div>
                  
                  {/* Polarized Lenses */}
                  <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-gray-900/70 w-full">
                    <h3 className="text-xl font-semibold text-white mb-2">Polarized Lenses</h3>
                    <p className="text-gray-400">Glare Reduction</p>
                  </div>
              </div>
            </div>
          </div>
        </div>


        <section className="py-20 bg-black">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-9xl mx-auto">
              <div className="flex flex-col md:flex-row justify-left items-start md:items-center gap-8 mb-16">
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl monsterrat text-white mb-6"> Customized Tinted Lenses</h2>
                  <h3 className="text-2xl text-[#FFD700] md:text-3xl monsterrat mb-6">Protect your eyes from the sun.</h3>
                  <p className="text-xl text-gray-300 max-w-3xl">
                    Experience enhanced visual comfort and style with our premium tinted lenses, available in Gray, Black, Brown, Pink, and Green. Perfect for various lighting conditions and personal preferences.
                  </p>
                </div>
                <div className="w-full md:w-[32rem] h-[20rem] overflow-hidden">
                  <div className="relative w-full h-full">
                    <div 
                      className={`absolute inset-0 flex ${
                        isTransitioning ? 'transition-transform duration-1000 ease-in-out' : 'transition-none'
                      }`}
                      style={{ transform: `translateX(-${(currentSlide % totalSlides) * 100}%)` }}>
                      {extendedSlides.map((img, index) => {
                        console.log(`Loading image: ${img}`);
                        return (
                          <div key={index} className="flex-shrink-0 w-full h-full relative">
                            <Image
                              src={img}
                              alt={`Tinted Lens ${index + 1}`}
                              width={800}
                              height={800}
                              className="object-contain w-full h-full"
                              priority={index === 0}
                              onError={(e) => {
                                console.error(`Failed to load image: ${img}`, e);
                                const target = e.target as HTMLImageElement;
                                target.style.border = '2px solid red'; // Visual indicator for missing images
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                      {carouselImages.map((_, index) => {
                        // Calculate the position relative to the current slide to center the active dot
                        const isActive = (currentSlide % totalSlides) === index;
                        return (
                          <button 
                            key={index}
                            onClick={() => setCurrentSlide(index + totalSlides)}
                            className={`h-3 rounded-full transition-all duration-300 ${
                              isActive ? 'bg-white/80 w-6' : 'bg-white/40 w-3 hover:bg-white/60'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </section>

      {/* Blueshield Lenses Section */}
      <LensCarousel 
        images={blueshieldImages}
        title="Blueshield Lenses"
        subtitle="Advanced Blue Light Protection"
        description="Our Blueshield lenses filter harmful blue light from digital screens, reducing eye strain and improving sleep quality. Ideal for digital device users who spend long hours in front of screens."
        reverse={true}
      />

      {/* Polarized Lenses Section - Title left, images right */}
      <LensCarousel 
        images={polarizedImages}
        title="Polarized Lenses"
        subtitle="Superior Glare Reduction"
        description="Experience enhanced visual clarity with our polarized lenses that eliminate harsh glare from reflective surfaces. Perfect for driving, water sports, and outdoor activities in bright conditions."
        reverse={false}
      />

      {/* Photochromatic Lenses Section - Title right, images left */}
      <LensCarousel 
        images={photochromaticImages}
        title="Photochromatic Lenses"
        subtitle="Adapt to any light, anywhere."
        description="Experience the convenience of glasses that automatically adjust to changing light conditions. Our photochromatic lenses darken in bright sunlight and lighten in lower light, providing optimal vision in any environment."
        reverse={true}
      />
    </div>
  );
};

// Reusable Carousel Component
const LensCarousel = ({ 
  images, 
  title, 
  subtitle, 
  description, 
  reverse = false 
}: { 
  images: string[], 
  title: string, 
  subtitle: string, 
  description: string, 
  reverse?: boolean 
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalSlides = images.length;
  const extendedSlides = [...images, ...images, ...images];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => {
        if (prev >= totalSlides * 2) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentSlide(1);
            void document.body.offsetHeight;
            setIsTransitioning(true);
          }, 10);
          return totalSlides;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="py-20 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-9xl mx-auto">
          <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} justify-left items-start md:items-center gap-8 mb-16`}>
            <div className={`flex-1 ${title === 'Blueshield Lenses' ? 'pl-38' : ''} ${title === 'Photochromatic Lenses' ? 'pl-28' : ''}`}>
              <h2 className="text-4xl md:text-5xl monsterrat text-white mb-6">{title}</h2>
              <h3 className="text-2xl text-[#FFD700] md:text-3xl monsterrat mb-6">{subtitle}</h3>
              <p className="text-xl text-gray-300 max-w-3xl">
                {description}
              </p>
            </div>
            <div className="w-full md:w-[32rem] h-[20rem] overflow-hidden">
              <div className="relative w-full h-full">
                <div 
                  className={`absolute inset-0 flex ${
                    isTransitioning ? 'transition-transform duration-1000 ease-in-out' : 'transition-none'
                  }`}
                  style={{ transform: `translateX(-${(currentSlide % totalSlides) * 100}%)` }}>
                  {extendedSlides.map((img, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full relative">
                      <Image
                        src={img}
                        alt={`${title} ${index + 1}`}
                        width={800}
                        height={800}
                        className="object-contain w-full h-full"
                        priority={index === 0}
                        onError={(e) => {
                          console.error(`Failed to load image: ${img}`, e);
                          const target = e.target as HTMLImageElement;
                          target.style.border = '2px solid red';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                  {images.map((_, index) => {
                    const isActive = (currentSlide % totalSlides) === index;
                    return (
                      <button 
                        key={index}
                        onClick={() => setCurrentSlide(index + totalSlides)}
                        className={`h-3 rounded-full transition-all duration-300 ${
                          isActive ? 'bg-white/80 w-6' : 'bg-white/40 w-3 hover:bg-white/60'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialityLenses;