"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "./blogData";
import { TransitionLink } from "@/components/ui/transitionlink";

// Format date to be more readable
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Get all unique categories from blogPosts
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

  // Filter posts when active category changes
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-9">
        <div className="mx-auto text-center">
          <h2 className="text-4xl md:text-8xl font-medium montserrat text-[#FFD700] opacity-100">
            Cliff Insights and Updates
          </h2>
          <p className="text-xl md:text-xl text-center text-[#FFD700]/80 max-w-3xl mx-auto leading-relaxed py-4 poppins opacity-100">
            Discover the latest in lens technology, eye health, and vision
            science through our expert insights and cutting-edge research.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 pb-12">
        {/* <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#FFD700] text-black"
                  : "bg-[#322b00]/50 text-[#FFD700] hover:bg-[#3a3200] border border-[#FFD700]/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Blog Grid */}
        <div className="w-full px-4 pb-20">
          <div className="mx-auto grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="border-2 border-yellow-900/30 bg-[#322b00]/50 relative overflow-hidden rounded-sm w-full h-full shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    fill
                    alt={post.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full px-6 py-8 xl:px-8 xl:py-10">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-full flex flex-wrap justify-between items-center poppins">
                        <div className="flex items-center gap-4 text-xs text-[#FFD700]">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 py-2">
                      <p className="text-sm text-[#FFD700]/80">By {post.author}</p>
                      <h3 className="text-lg md:text-xl font-medium montserrat leading-tight text-[#FFD700] transition-all duration-500 line-clamp-3">
                        {post.title}
                      </h3>
                    </div>
                    
                    <div className="mt-6 -mr-2 flex justify-end">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="group/cta inline-flex items-center gap-2 text-[#FFD700] font-medium text-sm transition-all duration-300 hover:text-[#FFD700]/80"
                      >
                        <span className="border-b border-transparent group-hover/cta:border-[#FFD700] transition-all duration-300">
                          Read Article
                        </span>
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover/cta:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
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
