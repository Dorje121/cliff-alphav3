

// import { gsap } from "gsap";
// import { Icon } from "@iconify/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const HomeTechnology = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const subtitleRef = useRef<HTMLParagraphElement>(null);

//   const categories = [
//     {
//       id: "01",
//       title: "Psicoptix Technology™",
//       subtitle: "Advanced Progressive Technology",
//       description: "Complete blue light protection lenses for modern digital lifestyle and visibility",
//       slug: "cliff-dynamic",
//       image: "/homeimage/nox.jpg",
//       alignment: "left",
//       buttonText: "Explore Series"
//     },
//     {
//       id: "02", 
//       title: "CDT® (Continuum Design) 8K Definition",
//       subtitle: "Premium Optical Excellence",
//       description: "Photochromic lenses that adapt to changing light conditions automatically",
//       slug: "cliff-zenn-series",
//       image: "/product/03.jpeg",
//       alignment: "right",
//       buttonText: "Learn More"
//     },
//     {
//       id: "03", 
//       title: "Wear Fit Customization",
//       subtitle: "Premium Optical Excellence",
//       description: "Specialized lenses optimized for driving and enhanced road visibility",
//       slug: "cliff-zenn-series",
//       image: "/product/5.jpg",
//       alignment: "left",
//       buttonText: "Learn More"
//     },
//     {
//       id: "04", 
//       title: "Thikness Control Technology",
//       subtitle: "Premium Optical Excellence",
//       description: "Multi-focal progressive lenses for seamless vision at all distances and visibility",
//       slug: "cliff-zenn-series",
//       image: "/bluesafe/photoz.jpg",
//       alignment: "right",
//       buttonText: "Learn More"
//     }
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Title animation - works both directions
//       gsap.fromTo(titleRef.current, 
//         { opacity: 0, y: 100 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             toggleActions: "play reverse play reverse", // Changed this line
//           }
//         }
//       );

//       // Subtitle animation - works both directions
//       gsap.fromTo(subtitleRef.current,
//         { opacity: 0, y: 80 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.2,
//           delay: 0.5,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: subtitleRef.current,
//             start: "top 80%",
//             toggleActions: "play reverse play reverse", // Changed this line
//           }
//         }
//       );

//       // Category sections animation
//       gsap.utils.toArray(".category-section").forEach((section: any, index) => {
//         const content = section.querySelector(".category-content");
//         const contentWrapper = section.querySelector(".content-wrapper");
//         const imageContainer = section.querySelector(".category-image");

//         // Content wrapper animation - works both directions
//         gsap.fromTo(contentWrapper,
//           { y: -150, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: section,
//               start: "top 70%",
//               toggleActions: "play reverse play", // Changed this line
//             }
//           }
//         );

//         // Content children animation - works both directions
//         gsap.fromTo(content.children,
//           { opacity: 0, y: 30 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             stagger: 0.15,
//             delay: 0.3,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: content,
//               start: "top 70%",
//               toggleActions: "play reverse play reverse", // Changed this line
//             }
//           }
//         );

//         // Enhanced image animation with specific directions for each category
//         // First and third categories come from right to left, others from left to right
//         const isRightToLeft = index === 0 || index === 2; // First and third categories
//         const initialRotation = isRightToLeft ? 25 : -25;
//         const initialX = isRightToLeft ? 300 : -300;
        
//         gsap.fromTo(imageContainer,
//           {
//             rotation: initialRotation,
//             x: initialX,
//             opacity: 0,
//             scale: 0.9
//           },
//           {
//             rotation: 0,
//             x: 0,
//             opacity: 1,
//             scale: 1,
//             duration: 1.4,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: imageContainer,
//               start: "top 75%",
//               toggleActions: "play reverse play reverse", // Changed this line
//             }
//           }
//         );
//       });

//       // Button hover animations (these don't need scroll trigger changes)
//       const buttons = document.querySelectorAll('.category-button');
//       buttons.forEach(button => {
//         button.addEventListener('mouseenter', () => {
//           gsap.to(button, { y: -2, duration: 0.3, ease: "power2.out" });
//         });
        
//         button.addEventListener('mouseleave', () => {
//           gsap.to(button, { y: 0, duration: 0.3, ease: "power2.out" });
//         });
//       });

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={sectionRef} className="min-h-screen bg-black text-[#FFD700] overflow-hidden w-full">
//       <div className="w-full mx-auto py-6 md:py-8 lg:py-16 px-4 md:px-8">
//         {/* Header Section */}
//         <div className="mb-8 md:mb-16">
//           <div className="flex mb-4 md:mb-6">
//             <h2 
//               ref={titleRef}
//               className="text-4xl md:text-8xl font-medium montserrat text-[#FFD700]"
//             >
//              Cliff Technologies
//             </h2>
//           </div>
//           <p 
//             ref={subtitleRef}
//             className="text-lg md:text-xl text-[#FFD700]/80 max-w-4xl poppins leading-relaxed"
//           >
//              Discover our comprehensive range of premium optical solutions, advanced lens technologies, and professional services designed to enhance your vision experience.
//           </p>
//         </div>

//         {/* Categories Grid */}
//         <div className="space-y-28 py-8 lg:space-y-36">
//           {categories.map((category, index) => (
//             <div
//               key={category.id}
//               className={`category-section flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
//                 category.alignment === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
//               }`}
//             >
//               {/* Content */}
//               <div className="content-wrapper flex-1">
//                 <div className="category-content space-y-6 lg:space-y-8">
//                   <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium montserrat text-white">
//                     {category.title}
//                   </h3>
                  
//                   <p className="text-lg md:text-xl text-[#FFD700]/90 leading-relaxed poppins mb-6">
//                     {category.description}
//                   </p>

//                   <TransitionLink
//                     href={`/technology`}
//                     className="category-button group relative inline-flex items-center px-6 py-3 bg-amber-400/10 border border-amber-400/30 rounded-2xl text-amber-400 font-semibold poppins overflow-hidden"
//                   >
//                     <span className="mr-3">{category.buttonText}</span>
//                     <div className="relative w-5 h-5">
//                       <Icon 
//                         icon="mage:arrow-up" 
//                         width="20" 
//                         height="20" 
//                         className="absolute rotate-45 transition-all duration-500 group-hover:-translate-y-6 group-hover:opacity-0"
//                       />
//                       <Icon 
//                         icon="mage:arrow-up" 
//                         width="20" 
//                         height="20" 
//                         className="absolute rotate-45 transition-all duration-500 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
//                       />
//                     </div>
//                   </TransitionLink>
//                 </div>
//               </div>

//               {/* Image */}
//               <div className="category-image flex-1 relative">
//                 <div className="category-image-inner relative rounded-3xl overflow-hidden h-[400px] lg:h-[450px]">
//                   <Image
//                     src={category.image}
//                     alt={category.title}
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover rounded-3xl"
//                     priority
//                   />
//                 </div>
//                 <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/10 to-transparent rounded-2xl -z-10 blur-xl opacity-50"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeTechnology;





"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Technology = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const services = [
    {
      id: "01",
      title: "Psicoptix Technology™",
      description:
        "Psicoptix Technology™ helps protect your eyes from harmful blue light. It keeps your vision clear and comfortable while using phones, computers, or any digital screen.",
      slug: "psicoptix-technology",
      image: "/homeimage/technology.png",
    },
    {
      id: "02",
      title: "CDT® (Continuum Design) 8K Definition",
      description:
        "This technology uses advanced light-sensitive technology to give you sharp vision and balanced brightness in every environment.",
      slug: "cdt-continuum-design-8k-definition",
      image: "/homeimage/8k.png",
    },
    {
      id: "03",
      title: "Wear Fit Customization",
      description:
        "With Wear Fit Customization, each lens is shaped to match how you wear your glasses, offering clearer vision and improved safety while driving day or night.",
      slug: "wear-fit-customization",
      image: "/homeimage/wearfit.png",
    },
    {
      id: "04",
      title: "Thickness Control Technology",
      description:
        "With Thickness Control Technology, each lens is made to stay slim and balanced, offering smooth vision from near to far without extra weight.",
      slug: "thickness-control-technology",
      image: "/technology.jpeg",
    },
   
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
     
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const isLeftCard = index % 2 === 0; 
        const directionX = isLeftCard ? -100 : 100;
        
        gsap.fromTo(card,
          {
            opacity: 0,
            x: directionX,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen text-black overflow-hidden w-full"
    >
      <div className="w-full mx-auto shrink-0 py-4 md:py-6 lg:py-8 relative px-3 md:px-6">
        <div className="mb-8 md:mb-16">
          <div className="flex mb-4 md:mb-6">
            <h2
              ref={titleRef}
              className="w-full text-4xl text-center md:text-8xl font-medium montserrat text-[#FFD700]"
            >
              Cliff Technologies
            </h2>
          </div>

          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-[#FFD700]/80 max-w-3xl mx-auto text-center poppins leading-relaxed"
          >
            Discover our comprehensive range of premium optical solutions,
            advanced lens technologies, and professional services designed to
            enhance your vision experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-0 relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => addToRefs(el, index)}
              className={`h-full ${
                parseInt(service.id) % 2 === 0 ? "mt-16" : ""
              }`}
            >
              <Link
                href={`/technology/${service.slug}`}
                className="cursor-pointer block group rounded-lg md:rounded-lg bg-[#322b00]/50 border border-yellow-900/30"
              >
                <div className="relative overflow-hidden h-full">
                  {/* Mobile Layout */}
                  <div className="block md:hidden h-full w-full relative">
                    <div className="absolute inset-0 w-full h-full">
                      <div className="absolute left-0 top-0 bottom-0 w-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover rounded-lg"
                          style={{ objectPosition: "left" }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                    </div>
                    <div className="relative z-20 w-full h-full flex flex-col justify-end p-4 pr-6">
                      <h3 className="text-xl font-bold mb-1 montserrat text-white group-hover:text-amber-400">
                        {service.title}
                      </h3>
                      <p className="text-zinc-300 group-hover:text-white leading-relaxed text-xs mb-2 poppins">
                        {service.description}
                      </p>
                      <Link
                        href={`/technology/${service.slug}`}
                        className="inline-flex items-center text-amber-400 font-medium group-hover:text-white text-sm poppins"
                      >
                        <span className="mr-2">Learn More</span>
                        <svg
                          className="w-4 h-4"
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
                      </Link>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex p-4 items-stretch h-full">
                    <div className="w-[280px] flex-shrink-0 mr-6">
                      <div className="relative overflow-hidden rounded-lg group h-[220px] w-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                      </div>
                    </div>

                    <div className="flex-1 py-3 pr-4 flex flex-col">
                      <h3 className="text-xl xl:text-2xl font-bold mb-2 montserrat text-white group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-amber-200 group-hover:text-white leading-relaxed text-sm xl:text-base poppins mb-4">
                        {service.description}
                      </p>
                      <div className="mt-auto pt-3 flex justify-end">
                        <div className="inline-flex items-center text-amber-400 text-sm font-medium group-hover:text-white transition-colors duration-300">
                          <span className="mr-1">Learn More</span>
                          <Icon
                            icon="mage:external-link"
                            width="16"
                            height="16"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;



