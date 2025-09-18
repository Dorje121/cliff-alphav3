"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react";
import TransitionLink from "@/components/PreLoader/TransitionLink";
import TextWithTexture from "@/components/textwithgoldentexture";

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
      <div className="relative pt-16 pb-4 px-4 sm:px-6 lg:px-8  mb-10">
        <div className=" mx-auto text-center ">

          <TextWithTexture text="Insights & Innovation" className="!h-26  text-5xl md:text-7xl font-bold  p-1" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-">
            Discover the latest in lens technology, eye health, and vision
            science through our expert insights and cutting-edge research.
          </p>
        </div>
      </div>


      {/* Blog Grid */}
      <div className="px-2 sm:px-4 pb-20 ">
        <div className="w-full mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <article
                  key={post.id}
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-md border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 w-full px-5">
                      <div className="flex justify-between items-center  w-full ">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white rounded-full text-xs font-medium border border-white/20">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-2 md:pb-4 min-h-[52%] md:h-[52%]">
                    <div className="p-4 md:p-6 pb-0  h-full flex justify-between flex-col ">
                      <div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-5 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400  ">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span className="">{formatDate(post.date)}</span>
                          </div>

                        </div>


                        <div className="flex items-center gap-1">
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
