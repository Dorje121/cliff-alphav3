"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

export default function BlogDarkLayout() {
  const post = {
    title: "Advanced Insights into Progressive Lens Design",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    category: "Lenses",
    author: "Barb Malobabich",
    authorBio: "Professional Education Manager at IOT",
    authorImage: "/author.jpg",
    image: "/progressive-lens.jpg",
    content: `
      <p>Progressive lenses first became a reality in the early 20th century, driven by technological advancements that addressed the limitations of bifocal lenses. Breakthroughs came from early inventors in the 1900s-1920s, but it wasn't until the 1950s that commercial success followed. The development of early freeform technology marked a turning point, making progressive lens manufacturing easier and more accurate.</p>
      <p>This innovation has propelled progressive lenses forward, offering patients seamless multifocal corrections with greater clarity and convenience. This article explores the technical aspects of progressive lens design, modern advancements, and best practices for prescribing these lenses to patients.</p>
      <h2>Fundamentals of Progressive Lens Design</h2>
      <p>Understanding the optical principles behind progressive lenses is essential for both their manufacturing and effective prescription. These foundational concepts serve as the building blocks for creating innovative, high-performing lens designs that meet diverse patient needs.</p>
    `,
  };

  return (
    <div className="min-h-screen bg-black text-white w-full px-4 md:px-10 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Sidebar */}
        <aside className="md:col-span-5 lg:col-span-4 flex flex-col gap-6 text-gray-300 sticky top-24 self-start h-[calc(100vh-8rem)] overflow-y-auto pr-8">
          <a 
            href="/blogs" 
            className="w-full pl-4 pr-4 py-3 -ml-6 bg-black/50 hover:bg-black/70 transition-colors duration-300 flex items-center text-[#FFD700] border-l-4 border-transparent hover:border-[#FFD700]"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="font-medium">Back to Blogs</span>
          </a>
          <div className="flex items-start gap-4">
            <h4 className="text-sm uppercase text-gray-500 w-24 flex-shrink-0">Published</h4>
            <span className="text-white font-medium">{post.date}</span>
          </div>

          <div className="flex items-start gap-4">
            <h4 className="text-sm uppercase text-gray-500 w-24 flex-shrink-0">Category</h4>
            <span className="text-white font-medium">{post.category}</span>
          </div>

          <div className="flex items-start gap-6">
            <h4 className="text-sm uppercase text-gray-500 w-24 flex-shrink-0 pt-1">Author</h4>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600 flex-shrink-0">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div>
                <p className="font-semibold text-white text-lg">{post.author}</p>
                <p className="text-sm text-gray-400">{post.authorBio}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-7 lg:col-span-8 space-y-8">
          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover opacity-90"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-purple-400" />
              <span>{post.date}</span>
            </div>
            <div className="w-px h-4 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-purple-400" />
              <span>{post.readTime}</span>
            </div>
            <div className="w-px h-4 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-purple-400" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </main>
      </div>
    </div>
  );
}
