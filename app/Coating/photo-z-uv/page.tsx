import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Icon } from "@iconify/react";
import Breadcrumb from "@/components/Breadcrumb";

interface Feature {
  icon: string;
  label: string;
  description: string;
}

const coating = {
  id: "03", 
  title: "PHOTOZ UV",
  subtitle: "Advanced Photochromatic UV Protection",
  description: "Intelligent lenses that automatically adapt to changing light conditions while providing complete UV protection. These lenses darken in bright sunlight and become clear indoors, offering seamless comfort and optimal vision throughout your day.",
  small: "PHOTOZ UV lenses are the perfect choice for those who move frequently between indoors and outdoors. With advanced photochromatic technology and 100% UV protection, these lenses provide automatic light adaptation while safeguarding your eyes from harmful ultraviolet rays.",
  slug: "photoz-uv",
  image: "/bluesafe/photoz.jpg",
  featureImage: "/cliffcoating/photoZ.jpg",
  alignment: "left",
  buttonText: "Learn More",
  whyChoose: {
    title: "Why Choose PHOTOZ UV?",
    description: "Our PHOTOZ UV coating combines cutting-edge photochromatic technology with complete UV protection. Experience the convenience of lenses that automatically adjust to light conditions while keeping your eyes safe from harmful radiation. Perfect for active lifestyles and outdoor enthusiasts.",
    features: [
      "Automatically darkens in sunlight and clears indoors",
      "Blocks 100% of harmful UVA and UVB rays",
      "Seamless adaptation to changing light conditions",
      "Reduces the need for multiple pairs of glasses"
    ]
  }
};

const features: Feature[] = [
  { 
    icon: "mdi:weather-sunny",
    label: "Adaptive Tint",
    description: "Automatically adjusts from clear to dark in response to UV light"
  },
  { 
    icon: "mdi:shield-sun",
    label: "100% UV Protection",
    description: "Complete protection against harmful UVA and UVB rays"
  },
  { 
    icon: "mdi:shield-check",
    label: "Scratch Resistant",
    description: "Durable coating resists daily wear and tear"
  },
  { 
    icon: "mdi:weather-sunset",
    label: "Photochromatic",
    description: "Intelligent light adaptation for optimal comfort"
  },
  { 
    icon: "mdi:lightning-bolt",
    label: "Quick Transition",
    description: "Fast adaptation between light and dark conditions"
  },
  { 
    icon: "mdi:weather-partly-cloudy",
    label: "All-Weather",
    description: "Performs reliably in various weather conditions"
  },
  { 
    icon: "mdi:eye-check",
    label: "Eye Protection",
    description: "Comprehensive protection from UV damage"
  },
  { 
    icon: "mdi:check-circle",
    label: "Convenience",
    description: "Eliminates the need for separate sunglasses"
  }
];

export default function PhotozUvPage() {
  return (
    <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">
      {/* <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[94rem] w-full mx-auto px-4 pt-18">
          <Link
            href="/Coating"
            className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors bg-transparent"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Coatings
          </Link>
        </div>
      </div> */}

      <section className="relative h-[60vh] min-h-[450px] flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={coating.image}
            alt="Photoz UV Coating"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-left w-full px-8">
          <h1 className="montserrat poppins text-4xl md:text-6xl lg:text-7xl !text-white capitalize mb-6">
            {coating.title}
          </h1>
          <p className="text-xl md:text-2xl !text-[#FFD700] max-w-4xl">
            {coating.subtitle}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
            <div className="z-50 bg-black/80 backdrop-blur-sm py-3 border-b border-yellow-500/20">
              <Breadcrumb 
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Coating', href: '/Coating' },
                  { label: 'Photoz UV Coating' }
                ]}
                className="max-w-9xl mx-auto px-6 sm:px-6 lg:px-10"
              />
            </div>

      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 w-full max-w-[95%] mx-auto">
          <div className="flex flex-col justify-center text-left">
            <h2 className="montserrat poppins text-2xl md:text-4xl lg:text-5xl leading-snug">
              <span className="text-[#FFD700]">{coating.title}</span>{" "}
              {coating.description}
            </h2>
          </div>

          <div className="flex flex-col justify-center pt-20 text-left md:text-right">
            <p className="text-base md:text-lg lg:text-xl text-[#FFD700] max-w-2xl ml-auto">
              {coating.small}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-black py-20">
        <div className="max-w-[1800px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[400px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-black p-4 rounded-lg overflow-hidden">
              <Image
                src={coating.featureImage}
                alt={`${coating.title} Feature`}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="text-white space-y-6 px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl montserrat poppins">
                <span className="text-[#FFD700]">{coating.title}</span>{" "}
                {coating.title}?
              </h2>

              <p className="text-lg md:text-xl text-[#FFD700] leading-relaxed">
                {coating.whyChoose.description}
              </p>

              <ul className="space-y-4 mt-8">
                {coating.whyChoose.features.map((feature, index) => (
                  <li key={`why-feature-${index}`} className="flex items-start">
                    <span className="text-[#FFD700] mr-3 mt-1">✓</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-black py-12">
        <div className="max-w-[1800px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl poppins text-[#FFD700] text-center mb-12">
            {coating.title} Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 sm:px-4 py-8">
            {features.map((feature, index) => (
              <div
                key={`feature-card-${index}`}
                className="flex flex-col h-full text-center bg-gradient-to-b from-zinc-900/50 to-zinc-900/10 p-6 rounded-xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex-shrink-0 flex items-center justify-center text-[#FFD700]">
                  {feature.icon.startsWith("/") ? (
                    <Image
                      src={feature.icon}
                      alt={feature.label}
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Icon icon={feature.icon} className="w-full h-full" />
                  )}
                </div>
                <h3 className="font-semibold text-sm sm:text-md mb-2 uppercase">
                  {feature.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#FFD700] mt-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}