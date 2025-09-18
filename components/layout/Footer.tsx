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
        <div className="text-center mb-12 md:mb-0 w-1/2">
          <TextWithTexture
            text="STAY IN TOUCH"
            className="text-2xl sm:text-3xl md:text-6xl lg:text-8xl xl:text-9xl mt-4 md:mt-8 font-semibold font-family-playfair bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent text-center tracking-[0.2rem] sm:tracking-[0.5rem] md:tracking-[1rem] lg:tracking-[1.5rem] xl:tracking-[1.9rem]"
          />
        </div>

        {/* Navigation Links - Centered at Bottom */}
        <div className="flex justify-between flex-col lg:flex-row items-center w-full max-w-screen gap-8 lg:gap-0 mt-52">
          {/* Logo and CTA */}
          <div className="flex flex-row items-center justify-center mb-6 lg:mb-0">
            <Image
              src="/logo/FDA.png"
              alt="Cliff Eyewear Logo"
              width={160}
              height={120}
              className="object-cover"
            />
          </div>

          <ul className="flex flex-wrap justify-center uppercase items-center font-semibold gap-8 gap-y-4 py-4 text-center tracking-wide mb-6">
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
            <div className="flex items-center justify-center space-x-4 md:space-x-12">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18.36.75H5.64A4.89 4.89 0 0 0 .75 5.64v12.72c0 2.7 2.19 4.89 4.89 4.89h12.72c2.7 0 4.89-2.19 4.89-4.89V5.64c0-2.7-2.19-4.89-4.89-4.89"></path><path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></path><path strokeLinecap="round" strokeLinejoin="round" d="M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4"></path><path d="M16.635 7.625a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path></g></svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0"></path></svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"><path fill="currentColor" d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z"></path></svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 15 15"><path fill="currentColor" d="M8.599 7.5L7 8.566V6.434z"></path><path fill="currentColor" fillRule="evenodd" d="M1.506 1.773a28.6 28.6 0 0 1 11.988 0A1.905 1.905 0 0 1 15 3.636v7.728c0 .898-.628 1.675-1.506 1.863a28.6 28.6 0 0 1-11.988 0A1.905 1.905 0 0 1 0 11.364V3.636c0-.898.628-1.675 1.506-1.863m5.271 3.311A.5.5 0 0 0 6 5.5v4a.5.5 0 0 0 .777.416l3-2a.5.5 0 0 0 0-.832z" clipRule="evenodd"></path></svg>
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
                Made in USA
              </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
