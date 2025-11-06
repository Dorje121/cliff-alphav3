import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Icon } from "@iconify/react";

interface Feature {
  icon: string;
  label: string;
  description: string;
}

const coating = {
  id: "04",
  title: "PHOTO Z COATING",
  subtitle: "Adaptive Photochromic Technology",
  description: "Experience the future of lens technology with our Photo Z Coating, which automatically adjusts to changing light conditions for optimal vision and comfort in any environment.",
  small: "Photo Z Coating features advanced photochromic technology that adapts to varying light conditions, providing optimal vision and comfort whether you're indoors or outdoors. These lenses darken in bright sunlight and clear up in lower light, offering seamless transitions and UV protection throughout the day.",
  slug: "photo-z-coating",
  image: "/homeimage/photoZ.png",
  featureImage: "/homeimage/photoZ.png",
  alignment: "right",
  buttonText: "Learn More",
  whyChoose: {
    title: "Why Choose PHOTO Z COATING?",
    description: "Our Photo Z Coating combines cutting-edge photochromic technology with premium lens materials to deliver superior visual performance. Whether you're stepping outside on a sunny day or moving indoors, these lenses automatically adjust to provide the perfect tint level for any lighting condition.",
    features: [
      "Automatically adjusts to changing light conditions",
      "Provides 100% UV protection",
      "Reduces glare and eye strain",
      "Seamless transitions between indoors and outdoors"
    ]
  }
};

const features = [
  { 
    icon: "/svgs/photochromatic.svg",
    label: "Photo Chromatic Effect",
    description: "Automatically adjusts tint based on light conditions"
  },
  { 
    icon: "/svgs/antireflective.svg",
    label: "Anti-Reflection",
    description: "Reduces distracting reflections for better vision"
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
    description: "Reduces eye strain from digital screens"
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

export default function PhotoZPage() {
  return (
    <div className="min-h-screen bg-black text-[#FFD700] overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[94rem] w-full mx-auto px-4 pt-18">
          <Link
            href="/Coating"
            className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors bg-transparent"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Coatings
          </Link>
        </div>
      </div>

      <section className="relative h-[60vh] min-h-[450px] flex flex-col justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${coating.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-left w-full px-8">
          <h1 className="montserrat font-medium text-4xl md:text-6xl lg:text-7xl !text-white capitalize mb-6">
            {coating.title}
          </h1>
          <p className="text-xl md:text-2xl !text-yellow-400 max-w-4xl">
            {coating.subtitle}
          </p>
        </div>
      </section>

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

      <section className="w-full bg-black py-12">
        <div className="max-w-[1800px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl poppins text-white text-center mb-12">
            {coating.title} Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-2 sm:px-4 py-8">
            {features.map((feature, index) => (
              <div
                key={`feature-card-${index}`}
                className="flex flex-col h-full text-center bg-gradient-to-b from-zinc-900/50 to-zinc-900/10 p-6 rounded-xl border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex-shrink-0 flex items-center justify-center text-yellow-400">
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
                <p className="text-xs sm:text-sm text-gray-400 mt-auto">
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