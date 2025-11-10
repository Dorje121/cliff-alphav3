import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Icon } from "@iconify/react";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";

interface Feature {
  icon: string;
  label: string;
  description: string;
}

const coating = {
  id: "03",
  title: "NOX COATING",
  subtitle: "Premium Optical Excellence",
  description: "Lenses are specially designed to provide superior optical clarity and enhanced visibility for safe driving in all conditions. These lenses reduce glare from headlights and streetlights, improve contrast and depth perception, and offer all-day visual comfort.",
  small: "Drive Clear Coating lenses are engineered for optimal driving performance, reducing glare from headlights and streetlights while enhancing contrast and visual clarity. Perfect for day and night driving, these lenses help reduce eye strain and improve reaction times for a safer driving experience.",
  slug: "nox-coating",
  image: "/homeimage/nox.jpg",
  featureImage: "/homeimage/nox.jpg",
  alignment: "left",
  buttonText: "Learn More",
  whyChoose: {
    title: "Why Choose NOX COATING?",
    description: "Our NOX Coating is specifically designed for drivers who demand the clearest vision possible in all lighting conditions. Experience reduced glare, enhanced contrast, and superior visual clarity that helps you stay safe on the road, day or night.",
    features: [
      "Reduces glare from headlights and streetlights",
      "Enhances contrast and depth perception",
      "Improves visibility in low-light conditions",
      "Reduces eye strain during long drives"
    ]
  }
};

const features: Feature[] = [
  {
    icon: "/svgs/antireflective.svg",
    label: "Anti-Reflection",
    description: "Reduces distracting reflections for safer driving"
  },
  {
    icon: "/svgs/uvprotection.svg",
    label: "UV Protection",
    description: "Blocks 100% of harmful UV rays"
  },
  {
    icon: "/svgs/scratchresistance.svg",
    label: "Scratch Resistant",
    description: "Durable coating resists daily wear and tear"
  },
  {
    icon: "/svgs/clearvision.svg",
    label: "Clear Vision",
    description: "Enhanced visual clarity in all conditions"
  },
  {
    icon: "/svgs/bluelight.svg",
    label: "Blue Light Protection",
    description: "Reduces eye strain from screens and headlights"
  },
  {
    icon: "/svgs/easytoclean.svg",
    label: "Hydrophobic",
    description: "Repels water and resists smudges"
  },
  {
    icon: "/svgs/glareprotection.svg",
    label: "Glare Protection",
    description: "Minimizes harsh reflections for better visibility"
  }
];

export default function NoxCoatingPage() {
  return (
    <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">

      {/* Hero Section */}
      <div className="h-[80vh] w-full mx-auto relative overflow-hidden">
        {/* Animated Background Image */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full"
          >
            <Image
              src={"/homeimage/nox.jpg"}
              alt={"Cliff Lens"}
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
        </div>

        {/* Static Content */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex flex-col justify-end items-center mx-auto pl-0 pr-8 py-8 font-poppins">
            <h1 className="text-4xl md:text-6xl font-medium montserrat text-[#FFD700] mb-4 leading-tight text-center">
              {coating.title}
            </h1>
            <p className="text-[#FFD700] text-xl leading-relaxed max-w-3xl text-center">
              {coating.subtitle}
            </p>
          </div>
        </div>
      </div>

       {/* Breadcrumb */}
      <div className="z-50 bg-black/80 backdrop-blur-sm py-3 border-b border-yellow-500/20">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Coating', href: '/Coating' },
            { label: 'Nox Coating' }
          ]}
          className="max-w-9xl mx-auto px-6 sm:px-6 lg:px-10"
        />
      </div>

      {/* Features Section */}
      <div className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {/* UV Protection */}
            <div className="flex flex-col items-center p-4">
              <div className="w-32 h-32 md:w-40 md:h-40 mb-4 flex items-center justify-center">
                <img 
                  src="/svgs/uvprotection.svg" 
                  alt="UV Protection" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[#FFD700] text-center text-lg md:text-xl font-medium">
                UV Protection
              </h3>
            </div>

            {/* Scratch Resistance */}
            <div className="flex flex-col items-center p-4">
              <div className="w-32 h-32 md:w-40 md:h-40 mb-4 flex items-center justify-center">
                <img 
                  src="/svgs/scratchresistance.svg" 
                  alt="Scratch Resistance" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[#FFD700] text-center text-lg md:text-xl font-medium">
                Scratch Resistance
              </h3>
            </div>

            {/* Clear Vision */}
            <div className="flex flex-col items-center p-4">
              <div className="w-32 h-32 md:w-40 md:h-40 mb-4 flex items-center justify-center">
                <img 
                  src="/svgs/clearvision.svg" 
                  alt="Clear Vision" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[#FFD700] text-center text-lg md:text-xl font-medium">
                Clear Vision
              </h3>
            </div>

            {/* Super Slippery Coating */}
            <div className="flex flex-col items-center p-4">
              <div className="w-32 h-32 md:w-40 md:h-40 mb-4 flex items-center justify-center">
                <img 
                  src="/svgs/superslippery.svg" 
                  alt="Super Slippery Coating" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[#FFD700] text-center text-lg md:text-xl font-medium">
                Super Slippery Coating
              </h3>
            </div>
          </div>
        </div>
      </div>

     

      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 w-full max-w-[95%] mx-auto">
          <div className="flex flex-col justify-center text-left">
            <h2 className="montserrat text-2xl md:text-4xl lg:text-5xl leading-snug">
              <span className="text-yellow-400">{coating.title}</span>{" "}
              {coating.description}
            </h2>
          </div>

          <div className="flex flex-col justify-center pt-20 text-left md:text-right">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl ml-auto">
              {coating.small}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-black py-20">
        <div className="max-w-[1800px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[400px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-black p-4 rounded-lg">
              <div className="relative w-full h-full max-w-[95%] max-h-[80%]">
                <Image
                  src={coating.featureImage}
                  alt={`${coating.title} Feature`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="text-white space-y-6 px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl montserrat">
                <span className="text-yellow-400">Why Choose</span>{" "}
                {coating.title}?
              </h2>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {coating.whyChoose.description}
              </p>

              <ul className="space-y-4 mt-8">
                {coating.whyChoose.features.map((feature, index) => (
                  <li key={`why-feature-${index}`} className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">✓</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

        {/* Explore More Lenses Section */}
      <section className="bg-black py-20">
         <div className="text-center mb-16">
          <h2 className="text-4xl montserrat text-[#FFD700] mb-4">Explore More Lense  Coatings</h2>          
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 group/cards py-8">
          {/* Card 1 */}
          <Link 
           
             href="/Coating/blue-safe" 
            className="block h-[35vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-20"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/5.jpg"
                alt="Photochromic Technology"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
             
                <div className="absolute inset-0 flex items-center">
                <div className="h-full flex items-center pl-6">
                  <h3 className="text-2xl md:text-3xl montserrat text-[#FFD700] text-left">Bluesafe Coating</h3>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link 
            href="/Coating/photoZ" 
            className="block h-[35vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/6.jpg"
                alt="UV Protection"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 flex items-center">
                <div className="h-full flex items-center pl-6">
                  <h3 className="text-2xl md:text-3xl montserrat text-[#FFD700] text-left">Photo Z Coating</h3>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link 
            href="/Coating/photo-z-uv" 
            className="block h-[35vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/7.jpg"
                alt="All-Day Comfort"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 flex items-center">
                <div className="h-full flex items-center pl-6">
                  <h3 className="text-2xl md:text-3xl montserrat text-[#FFD700] text-left">Photo Z UV Coating</h3>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link 
            href="/Coating/drive-clear" 
            className="block h-[35vh] w-full group overflow-hidden transition-all duration-500 ease-out group-hover/cards:opacity-50 hover:!opacity-100 hover:!blur-0"
          >
            <div className="relative h-full w-full">
              <Image
                src="/product/9.jpg"
                alt="Blue Shield"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 flex items-center">
                <div className="h-full flex items-center pl-6">
                  <h3 className="text-2xl md:text-3xl montserrat text-[#FFD700] text-left">Drive Clear Coating</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      
    </div>
  );
}