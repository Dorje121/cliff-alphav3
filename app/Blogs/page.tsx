"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react";
import TransitionLink from "@/components/PreLoader/TransitionLink";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
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
    excerpt:
      "Discover how our latest lens innovations are transforming the way people see the world, with cutting-edge technology that adapts to every lifestyle.",
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
    excerpt:
      "Everything you need to know about progressive lenses, from benefits to choosing the right type for your needs.",
    content: "Full article content here...",
    image: "/progreesive.png",
    date: "2024-03-12",
    readTime: "7 min read",
    category: "Education",
    author: "Mark Williams",
    views: 890,
  },
  {
    id: 3,
    title: "The Science Behind Blue Light Protection",
    excerpt:
      "Understanding how blue light affects your eyes and why our protective coatings are essential for digital wellness.",
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
    excerpt:
      "Explore the benefits of photochromic lenses that automatically adjust to changing light conditions.",
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
    excerpt:
      "Tips and insights for maintaining healthy vision while navigating our increasingly digital world.",
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
    excerpt:
      "How specialized lens technology is helping athletes perform at their peak with enhanced visual clarity.",
    content: "Full article content here...",
    image: "/ai4.jpg",
    date: "2024-03-02",
    readTime: "5 min read",
    category: "Sports",
    author: "Jessica Park",
    views: 445,
  },
];

const categories = [
  "All",
  "Technology",
  "Health",
  "Education",
  "Product",
  "Sports",
];

export default function BlogPage() {
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
    <div className="min-h-screen  text-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 p-1 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Insights & Innovation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the latest in lens technology, eye health, and vision
            science through our expert insights and cutting-edge research.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-gray-600 hover:border-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article */}
      {filteredPosts.some((post) => post.featured) && (
        <div className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Article
            </h2>
            {filteredPosts
              .filter((post) => post.featured)
              .map((post) => (
                <div
                  key={post.id}
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-80 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">Featured</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            {post.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye size={16} />
                            {post.views}
                          </div>
                        </div>
                      </div>
                      <TransitionLink
                        href={`/Blogs/${post.id}`}
                        className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors duration-300 group/link"
                      >
                        Read Full Article
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                        />
                      </TransitionLink>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <article
                  key={post.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-md border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white rounded-full text-xs font-medium border border-white/20">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        {post.views}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        By {post.author}
                      </span>
                      <TransitionLink
                        href={`/Blogs/${post.id}`}
                        className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors duration-300 group/link"
                      >
                        Read More
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                        />
                      </TransitionLink>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </article>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
