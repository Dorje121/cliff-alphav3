"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { getBlogPostBySlug } from "../blogData";

export default function BlogDarkLayout({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link 
            href="/blogs" 
            className="text-[#FFD700] hover:underline inline-flex items-center"
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
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white w-full px-4 md:px-10 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Sidebar */}
        <aside className="md:col-span-5 lg:col-span-4 flex flex-col gap-6 text-gray-300 sticky top-24 self-start h-[calc(100vh-8rem)] overflow-y-auto pr-8">
          <Link 
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
          </Link>
          <div className="flex items-start gap-4">
            <h4 className="text-sm uppercase text-gray-500 w-24 flex-shrink-0">Published</h4>
            <div className="flex flex-col">
              <span className="text-white font-medium">{post.date}</span>
              <div className="flex items-center text-gray-400 text-sm mt-1">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <h4 className="text-sm uppercase text-gray-500 w-24 flex-shrink-0">Category</h4>
            <span className="text-white font-medium">{post.category}</span>
          </div>

          <div className="flex items-start gap-6">
            <h4 className="text-sm uppercase text-gray-500 w-24 flex-shrink-0 pt-1">Author</h4>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full overflow-hidden ">
                <Image 
                  src={post.authorImage} 
                  alt={post.author} 
                  width={48} 
                  height={48} 
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div>
                <h4 className="font-medium text-white">{post.author}</h4>
                <p className="text-sm text-gray-400">{post.authorBio}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-7 lg:col-span-8 space-y-8">
          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-xl overflow-hidden">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover"
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
