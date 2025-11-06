"use client";

import React, { useEffect } from "react";
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import TextWithTexture from "@/components/textwithgoldentexture";
import Image from "next/image";

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
  slug: string;
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
    slug: "revolutionary-lens-technology-future-vision-correction",
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
    slug: "progressive-lenses-complete-guide-better-vision",
  },
  {
    id: 3,
    title: "The Science Behind Blue Light Protection",
    content: "Full article content here...",
    image: "/ai2.jpg",
    date: "2024-03-10",
    readTime: "4 min read",
    category: "Health",
    author: "Dr. Emily Chen",
    views: 756,
    slug: "science-behind-blue-light-protection",
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
    slug: "photochromic-lenses-adapting-every-environment",
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
    slug: "eye-health-digital-age",
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
    slug: "custom-lens-solutions-professional-athletes",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [filteredPosts, setFilteredPosts] = React.useState(blogPosts);

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === selectedCategory);
    setFilteredPosts(filtered);
  }, [selectedCategory]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-5 ">
        <div className="mx-auto text-left">
          <h2 className="text-4xl md:text-8xl font-medium montserrat text-[#FFD700]">
            Latest Technologies Update
          </h2>
          <p className="text-xl md:text-2xl text-[#FFD700] max-w-3xl leading-relaxed poppins">
            Discover the latest in lens technology, eye health, and vision
            science through our expert insights and cutting-edge research.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="px-5  pb-20">
        <div className="mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <div
                  className="group border border-black/20 sm:border-none relative overflow-hidden rounded-xl transition-all duration-700 hover:-translate-y-3 transform-gpu"
                  key={post.id}
                >
                  <Image
                    src={post.image}
                    height={1000}
                    width={1000}
                    alt="Cliff Lens"
                    className="h-64 object-cover"
                  />
                  {/* Premium glass morphism overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/50 backdrop-blur-[1px]"></div> */}

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col justify-between p-8">
                    {/* Top Section - Category & Meta */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-full flex flex-wrap justify-between items-center poppins">
                        <span className="inline-block px-4 py-2 bg-black/10 backdrop-blur-xl text-yellow-300 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-xs text-[#FFD700]">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye size={12} />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="mb-2">
                      <p className="text-sm text-[#FFD700]/80">By {post.author}</p>
                    </div>

                    {/* Bottom Section - Title & CTA */}
                    <div className="space-y-6">
                      <h3 className="text-lg md:text-2xl font-medium montserrat leading-tight text-[#FFD700] transition-all duration-500 line-clamp-3">
                        {post.title}
                      </h3>

                      <div className="flex items-center  justify-start">
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="group/cta inline-flex items-center gap-3 px-5 py-2 bg-black/10 hover:bg-black/20 backdrop-blur-xl border border-[#FFD700]   rounded-full text-black font-semibold text-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
                        >
                          <span className="text-[#FFD700]">Read Article</span>
                          <ArrowRight
                            size={16}
                            className="transition-transform duration-500 group-hover/cta:translate-x-2 group-hover/cta:scale-110 "
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Subtle animation lines */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-300"></div>
                </div>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-500 text-lg">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
