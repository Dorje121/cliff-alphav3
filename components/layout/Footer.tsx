import React from "react";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TextWithTexture from "@/components/textwithgoldentexture";

const Footer = () => {
  return (
    <footer
      className="relative h-[100vh] backdrop-blur-sm flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/try.jpg)" }}
    >
      {/* Enhanced Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>

      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16 flex flex-col items-center justify-center h-full">
        {/* Main Title */}
        <div className="text-center mb-12 md:mb-20">

          <TextWithTexture text="STAY IN TOUCH" className="text-2xl sm:text-3xl md:text-6xl lg:text-8xl xl:text-9xl mt-4 md:mt-8 font-semibold font-family-playfair bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent text-center tracking-[0.2rem] sm:tracking-[0.5rem] md:tracking-[1rem] lg:tracking-[1.5rem] xl:tracking-[1.9rem]" />

        </div>

        {/* Navigation Links - Centered at Bottom */}
        <div className="flex justify-between flex-col lg:flex-row items-center w-full max-w-screen gap-8 lg:gap-0 ">
          {/* Logo and CTA */}
          <div className="flex flex-row items-center justify-center mb-6 lg:mb-0 ">
            <Image
              src="/logo/FDA.png"
              alt="Cliff Eyewear Logo"
              width={160}
              height={120}
              className="object-cover"
            />
            {/* <Link
              href="/Contact"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#b78908] to-[#E1AA12] text-white font-bold font-family-dm-sans text-lg hover:shadow-2xl hover:shadow-[#E1AA12]/30 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 hover:from-[#E1AA12] hover:to-[#b78908]"
            >
              Become a Cliff Dealer
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l9.2-9.2M17 17V7H7"
                />
              </svg>
            </Link> */}
          </div>

          <ul className="flex flex-wrap justify-center uppercase items-center font-semibold gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-4 py-4 text-center tracking-wide border-none mb-6 lg:mb-0">
            <li className="px-1 sm:px-2">
              <Link
                href="/"
                className="text-sm sm:text-base font-family-dm-sans text-gray-300 hover:text-[#E1AA12] transition-all duration-300 hover:scale-105 inline-block"
              >
                Home
              </Link>
            </li>
            <li className="px-1 sm:px-2">
              <Link
                href="/Services"
                className="text-sm sm:text-base font-family-dm-sans text-gray-300 hover:text-[#E1AA12] transition-all duration-300 hover:scale-105 inline-block"
              >
                Products
              </Link>
            </li>
            <li className="px-1 sm:px-2">
              <Link
                href="/AboutUs"
                className="text-sm sm:text-base font-family-dm-sans text-gray-300 hover:text-[#E1AA12] transition-all duration-300 hover:scale-105 inline-block"
              >
                About Us
              </Link>
            </li>
            <li className="px-1 sm:px-2">
              <Link
                href="/Blogs"
                className="text-sm sm:text-base font-family-dm-sans text-gray-300 hover:text-[#E1AA12] transition-all duration-300 hover:scale-105 inline-block"
              >
                Latest News
              </Link>
            </li>
            <li className="px-1 sm:px-2">
              <Link
                href="/Contact"
                className="text-sm sm:text-base font-family-dm-sans text-gray-300 hover:text-[#E1AA12] transition-all duration-300 hover:scale-105 inline-block"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Social Media */}
          <div className="flex flex-col items-center ">
            <div className="flex items-center justify-center space-x-6 sm:space-x-8 md:space-x-12">
              <a href="#">
                <Instagram
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-300 text-amber-400 sm:w-6 sm:h-6"
                />
              </a>
              <a href="#">
                <Facebook
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-300 text-amber-400 sm:w-6 sm:h-6"
                />
              </a>
              <a href="#">
                <Linkedin
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-300 text-amber-400 sm:w-6 sm:h-6"
                />
              </a>
              <a href="#">
                <Youtube
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-300 text-amber-400 sm:w-6 sm:h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full py-4 px-4 sm:px-6 border-t border-white/20 lg:absolute lg:bottom-4 mt-8 lg:mt-0">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-family-dm-sans text-sm sm:text-base text-center md:text-left">
              © 2025 Cliff Eyewear. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 text-sm sm:text-base text-gray-400 font-family-dm-sans text-center">
              <Link
                href="#"
                className="hover:text-[#E1AA12] transition-colors duration-300 px-2"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-[#E1AA12] transition-colors duration-300 px-2"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-[#E1AA12] transition-colors duration-300 px-2"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
