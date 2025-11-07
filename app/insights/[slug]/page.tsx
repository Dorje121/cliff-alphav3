"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

// Mock data for UI demonstration
const post = {
  slug: "sample-insight",
  title: "The Future of Lens Technology",
  date: "Nov 7, 2025",
  readTime: "5 min read",
  category: "Technology",
  author: "John Doe",
  authorBio: "Optical Engineer & Vision Specialist",
  authorImage: "/ai0.jpg",
  image: "/bluesafe/Bluesafe.jpg",
  content: `
    <p>This is a sample insight post about the latest advancements in lens technology. The content would be replaced with actual blog content in production.</p>
    <h2>Key Features</h2>
    <ul>
      <li>High-definition clarity</li>
      <li>Reduced eye strain</li>
      <li>Advanced blue light filtering</li>
    </ul>
    <p>More detailed content would go here...</p>
  `
};

export default function InsightPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="container pl-12 mx-auto px-4 pt-18">
        <Link 
          href="/insights" 
          className="inline-flex items-center text-[#FFD700] hover:underline mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Insights
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Sticky Author Section */}
        <div className="lg:w-1/4">
          <div className="sticky top-24">
            <div className="p-6 bg-black/30 rounded-xl border border-gray-800">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#FFD700]/30">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{post.author}</h3>
                <p className="text-[#FFD700] text-sm mb-4">{post.authorBio}</p>
                <div className="w-12 h-1 bg-[#FFD700] my-4"></div>
                <div className="text-gray-400 text-sm space-y-2">
                  <p className="flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </p>
                  <p className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Article Header */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-[#FFD700]/10 text-[#FFD700] rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">
              {post.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-[500px] rounded-xl overflow-hidden mb-12 border border-gray-800">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <article 
            className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-6
                      prose-headings:text-white prose-p:text-gray-300 prose-p:leading-7
                      prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
                      prose-h2:text-[#FFD700] prose-ul:list-disc prose-ul:pl-6
                      prose-li:mb-2 prose-li:marker:text-[#FFD700] prose-a:text-[#FFD700]
                      hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-[#FFD700]
                      prose-blockquote:pl-4 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>

      {/* Related Articles - Placeholder */}
      <div className="bg-black/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8">More Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-black/30 border border-gray-800 rounded-lg overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Image {item}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Related Insight {item}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Brief description of the related insight would appear here...
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-800 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 mr-3"></div>
                      <span className="text-sm text-gray-300">Author</span>
                    </div>
                    <span className="text-xs text-[#FFD700] bg-[#FFD700]/10 px-2 py-1 rounded-full">
                      5 min read
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
