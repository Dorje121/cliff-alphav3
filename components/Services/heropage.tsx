"use client";
import Image from "next/image";
import Link from "next/link";
import TextWithTexture from "@/components/textwithgoldentexture";

interface HeroSectionProps {
  videoSrc: string;
  title1: string; // Normal texture text
  title2: string; // Golden texture text
  description: string;
  imageSrc: string;
  serviceNumber?: string;
  buttonText?: string;
  buttonLink?: string;
  floatingTitle?: string;
  floatingSubtitle?: string;
}

export default function HeroSection({
  videoSrc,
  title1,
  title2,
  description,
  imageSrc,
  serviceNumber = "01",
  buttonText = "Contact Us",
  buttonLink = "/Contact",
  floatingTitle = "CLIFF",
  floatingSubtitle = "COATINGS",
}: HeroSectionProps) {
  return (
    <div className="h-[90vh] text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 h-full">
        <video
          src={videoSrc}
          className="w-full h-full object-cover opacity-70"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container max-w-[1490px] mx-auto px-4 py-12 h-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 h-full">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-4">
            <h1 className="text-5xl md:text-7xl mt-12 font-bold leading-tight">
              <TextWithTexture
                text={title1}
                className="text-5xl md:text-7xl font-bold leading-tight capitalize"
              />
              <TextWithTexture
                text={title2}
                className="bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent capitalize"
              />
            </h1>

            <p className="text-xl md:text-2xl bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent leading-relaxed max-w-2xl">
              {description}
            </p>

            {buttonLink && (
              <div className="pt-8">
                <Link href={buttonLink} className="group relative inline-block">
                  <button className="px-8 py-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 rounded-full text-black font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                    <span className="relative z-10 flex items-center justify-center">
                      {buttonText}
                      <svg
                        className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 relative">
            <div className="relative flex justify-center lg:justify-end lg:ml-2">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl w-[28rem]">
                <Image
                  src={imageSrc}
                  alt={`${title1} ${title2}`}
                  width={200}
                  height={300}
                  className="object-contain w-full h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-6 right-6">
                  <span className="text-6xl font-bold text-white/30">
                    {serviceNumber}
                  </span>
                </div>
              </div>

              {/* Floating Box */}
              <div className="absolute -bottom-6 left-1/4 w-32 h-32 backdrop-blur-lg bg-white/20 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-[#DFC65F] drop-shadow-lg">
                    {floatingTitle}
                  </div>
                  <div className="text-xs text-gray-200 mt-1 tracking-wider">
                    {floatingSubtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
