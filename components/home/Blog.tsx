"use client";

import React, { useEffect, useRef } from "react";
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react";
import { TransitionLink } from "../ui/transitionlink";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  views: number;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Revolutionary Lens Technology: The Future of Vision Correction",
    content: "Full article content here...",
    image: "/ai1.jpg",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Technology",
    author: "Dr. Sarah Johnson",
    views: 1250,
    featured: true,
  },
  {
    id: 2,
    title: "Progressive Lenses: A Complete Guide to Better Vision",
    content: "Full article content here...",
    image: "/ai1.jpg",
    date: "2024-03-12",
    readTime: "7 min read",
    category: "Education",
    author: "Mark Williams",
    views: 890,
  },
  {
    id: 3,
    title: "The Science Behind Blue Light Protection/How to Protect Your Eyes",
    content: "Full article content here...",
    image: "/ai2.jpg",
    date: "2024-03-10",
    readTime: "4 min read",
    category: "Health",
    author: "Dr. Emily Chen",
    views: 756,
  },
  {
    id: 4,
    title: "Photochromic Lenses: Adapting to Every Environment",
    content: "Full article content here...",
    image: "/ai3.jpg",
    date: "2024-03-08",
    readTime: "6 min read",
    category: "Product",
    author: "Alex Rivera",
    views: 632,
  },
  {
    id: 5,
    title: "Eye Health in the Digital Age",
    content: "Full article content here...",
    image: "/eyetest.jpg",
    date: "2024-03-05",
    readTime: "8 min read",
    category: "Health",
    author: "Dr. Michael Brown",
    views: 1100,
  },
  {
    id: 6,
    title: "Custom Lens Solutions for Professional Athletes",
    content: "Full article content here...",
    image: "/ai4.jpg",
    date: "2024-03-02",
    readTime: "5 min read",
    category: "Sports",
    author: "Jessica Park",
    views: 445,
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [filteredPosts, setFilteredPosts] = React.useState(blogPosts);
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === selectedCategory);
    setFilteredPosts(filtered);
  }, [selectedCategory]);

  useEffect(() => {
    
    if (typeof window === 'undefined') return;

   
    if (heroTitleRef.current) {
      gsap.to(heroTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out"
      });
    }

   
    if (heroSubtitleRef.current) {
      gsap.to(heroSubtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power2.out"
      });
    }
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div ref={sectionRef} className="min-h-screen">
      <div className="relative pt-32 pb-20 px-9 ">
        <div className="mx-auto text-center">
          <h2
            ref={heroTitleRef}
            className="text-4xl md:text-8xl font-medium montserrat text-[#FFD700] opacity-0 translate-y-8"
          >
            Cliff Insights and Updates
          </h2>
          <p
            ref={heroSubtitleRef}
            className="text-xl md:text-xl text-center text-[#FFD700]/80 max-w-3xl mx-auto leading-relaxed py-4 poppins opacity-0 translate-y-8"
          >
            Discover the latest in lens technology, eye health, and vision
            science through our expert insights and cutting-edge research.
          </p>
        </div>
      </div>

      <div className="w-full px-4 pb-20">
        <div className="mx-auto grid w-full max-w-[94rem] grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.4fr_1.4fr_1.4fr_1fr] gap-2 md:gap-2 px-4">
          {filteredPosts
            .filter((post) => !post.featured)
            .slice(0, 3)
            .map((post) => (
              <div
                className="border-2 border-yellow-900/30 bg-[#322b00]/50 relative overflow-hidden rounded-sm w-full h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                key={post.id}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    fill
                    alt={post.title}
                    className="object-cover"
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 py-8 xl:px-8 xl:py-10">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-full flex flex-wrap justify-between items-center poppins">
                        {/* <span className="inline-block px-4 py-2 bg-black/10 backdrop-blur-xl text-yellow-300 rounded-full text-xs font-semibold">
                          {post.category}
                        </span> */}
                        <div className="flex items-center gap-8 text-xs text-[#FFD700]">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye size={16} />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 py-6">
                      <h3 className="text-lg md:text-2xl font-medium montserrat leading-tight text-[#FFD700] transition-all duration-500 line-clamp-3">
                        {post.title}
                      </h3>
                    </div>
                    <div className="mt-auto pt-4 -mr-2 flex justify-end">
                      <TransitionLink
                        href={`/Technologies/${post.id}`}
                        className="group/cta inline-flex items-center gap-2 text-[#FFD700] font-medium text-sm transition-all duration-300 hover:text-[#FFD700]/80"
                      >
                        <span className="border-b border-transparent group-hover/cta:border-[#FFD700] transition-all duration-300">
                          Read Article
                        </span>
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover/cta:translate-x-1"
                        />
                      </TransitionLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <div className="border-2 border-yellow-500/30 bg-[#322b00]/50 relative overflow-hidden rounded-sm w-full max-w-[300px] h-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-2xl font-medium montserrat text-[#FFD700] mb-4">
              Explore More
            </h3>
            <p className="text-[#FFD700]/80 mb-6 max-w-xs">
              Discover more articles and insights in our blog
            </p>
            <TransitionLink
              href="/Technologies"
              className="group/cta inline-flex items-center gap-2 px-6 py-3 bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-semibold rounded-full text-sm transition-all duration-300 "
            >
              <span>View All Articles</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </TransitionLink>
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 col-span-3">
              <p className="text-[#FFD700] text-lg">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
