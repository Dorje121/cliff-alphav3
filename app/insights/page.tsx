"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { blogPosts, BlogPost } from "@/lib/blogData";

export default function InsightsPage() {
  // Get the first 3 featured posts
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFD700] mb-6">
            Insights & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest in lens technology, eye health, and vision science through our expert insights and cutting-edge research.
          </p>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredPosts.map((post: BlogPost) => (
            <Link 
              href={`/insights/${post.slug}`} 
              key={post.slug}
              className="group block"
            >
              <div className="bg-[#322b00]/50 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#FFD700]/50 h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {post.content.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                      </p>
                    </div>
                    <div className="flex justify-end mb-4">
                      <span className="inline-flex items-center text-[#FFD700] text-sm font-medium group-hover:underline">
                        Read Article
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-3 border border-[#FFD700]/30">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          width={32}
                          height={32}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-sm font-medium text-white">{post.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}