"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Eye,
  User,
  Share2,
  BookOpen,
} from "lucide-react";
import TransitionLink from "@/components/PreLoader/TransitionLink";

gsap.registerPlugin(ScrollTrigger);

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
  tags: string[];
}

// This would typically come from a CMS or API
const blogPosts: Record<number, BlogPost> = {
  1: {
    id: 1,
    title: "Revolutionary Lens Technology: The Future of Vision Correction",
    excerpt:
      "Discover how our latest lens innovations are transforming the way people see the world, with cutting-edge technology that adapts to every lifestyle.",
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="text-xl leading-relaxed text-gray-300 mb-8">
          The world of vision correction is undergoing a revolutionary transformation. With advances in materials science, digital manufacturing, and personalized medicine, we're witnessing the emergence of lens technologies that seemed impossible just a decade ago.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Adaptive Intelligence in Every Lens</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Our latest generation of smart lenses incorporates micro-sensors that continuously monitor environmental conditions and adjust accordingly. Whether you're transitioning from indoor lighting to bright sunlight, or moving between different visual tasks, these lenses adapt in real-time to provide optimal visual comfort.
        </p>

        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-lg text-gray-300">
          "The future of vision correction isn't just about seeing clearly – it's about seeing intelligently."
        </blockquote>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Personalized Visual Experiences</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Using advanced biometric analysis and AI-driven customization, we can now create lenses that are uniquely tailored to each individual's visual patterns, lifestyle, and physiological characteristics. This level of personalization was unimaginable in traditional lens manufacturing.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-10 mb-4">Key Innovations Include:</h3>
        <ul class="list-disc list-inside space-y-3 text-gray-300 mb-8">
          <li>Dynamic focal adjustment based on gaze tracking</li>
          <li>Automatic blue light filtering that adapts to screen time</li>
          <li>Enhanced contrast in low-light conditions</li>
          <li>Seamless integration with digital devices</li>
          <li>Self-cleaning nano-coating technology</li>
        </ul>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Science Behind the Innovation</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Our research team has spent over five years developing proprietary materials that can change their optical properties in response to various stimuli. These smart materials are embedded at the molecular level, ensuring durability while maintaining the highest optical clarity.
        </p>

        <p class="text-gray-300 leading-relaxed mb-6">
          The manufacturing process involves precision layering techniques that build up the lens structure atom by atom, allowing for unprecedented control over the final optical properties. This level of precision ensures that each lens delivers consistent performance across its entire surface area.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Looking to the Future</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          As we continue to push the boundaries of what's possible in vision correction, we're exploring technologies like augmented reality integration, health monitoring capabilities, and even more advanced adaptive features that will make these lenses true extensions of human visual capability.
        </p>

        <p class="text-gray-300 leading-relaxed">
          The future of vision is not just about correction – it's about enhancement, intelligence, and creating a seamless interface between human vision and the digital world around us.
        </p>
      </div>
    `,
    image: "/ai1.jpg",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Technology",
    author: "Dr. Sarah Johnson",
    views: 1250,
    tags: ["Innovation", "Technology", "Smart Lenses", "Future Vision"],
  },
  2: {
    id: 2,
    title: "Progressive Lenses: A Complete Guide to Better Vision",
    excerpt:
      "Everything you need to know about progressive lenses, from benefits to choosing the right type for your needs.",
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="text-xl leading-relaxed text-gray-300 mb-8">
          Progressive lenses represent one of the most significant advances in vision correction technology, offering a seamless solution for those who need multiple vision corrections in a single lens.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Understanding Progressive Lenses</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Unlike traditional bifocals or trifocals, progressive lenses provide a smooth transition between different vision zones, eliminating the visible lines that can be both aesthetically unappealing and functionally limiting.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-10 mb-4">Benefits of Progressive Lenses:</h3>
        <ul class="list-disc list-inside space-y-3 text-gray-300 mb-8">
          <li>Seamless vision at all distances</li>
          <li>Natural appearance without visible lines</li>
          <li>Reduced eye strain during computer work</li>
          <li>Better peripheral vision</li>
          <li>Age-appropriate vision correction</li>
        </ul>

        <p class="text-gray-300 leading-relaxed">
          Modern progressive lens technology has evolved to address the specific visual challenges of our digital age, providing optimal solutions for both traditional tasks and modern screen-based activities.
        </p>
      </div>
    `,
    image: "/progreesive.png",
    date: "2024-03-12",
    readTime: "7 min read",
    category: "Education",
    author: "Mark Williams",
    views: 890,
    tags: ["Progressive Lenses", "Vision Correction", "Presbyopia", "Eye Care"],
  },
  3: {
    id: 3,
    title: "Revolutionary Lens Technology: The Future of Vision Correction",
    excerpt:
      "Discover how our latest lens innovations are transforming the way people see the world, with cutting-edge technology that adapts to every lifestyle.",
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="text-xl leading-relaxed text-gray-300 mb-8">
          The world of vision correction is undergoing a revolutionary transformation. With advances in materials science, digital manufacturing, and personalized medicine, we're witnessing the emergence of lens technologies that seemed impossible just a decade ago.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Adaptive Intelligence in Every Lens</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Our latest generation of smart lenses incorporates micro-sensors that continuously monitor environmental conditions and adjust accordingly. Whether you're transitioning from indoor lighting to bright sunlight, or moving between different visual tasks, these lenses adapt in real-time to provide optimal visual comfort.
        </p>

        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-lg text-gray-300">
          "The future of vision correction isn't just about seeing clearly – it's about seeing intelligently."
        </blockquote>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Personalized Visual Experiences</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Using advanced biometric analysis and AI-driven customization, we can now create lenses that are uniquely tailored to each individual's visual patterns, lifestyle, and physiological characteristics. This level of personalization was unimaginable in traditional lens manufacturing.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-10 mb-4">Key Innovations Include:</h3>
        <ul class="list-disc list-inside space-y-3 text-gray-300 mb-8">
          <li>Dynamic focal adjustment based on gaze tracking</li>
          <li>Automatic blue light filtering that adapts to screen time</li>
          <li>Enhanced contrast in low-light conditions</li>
          <li>Seamless integration with digital devices</li>
          <li>Self-cleaning nano-coating technology</li>
        </ul>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Science Behind the Innovation</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Our research team has spent over five years developing proprietary materials that can change their optical properties in response to various stimuli. These smart materials are embedded at the molecular level, ensuring durability while maintaining the highest optical clarity.
        </p>

        <p class="text-gray-300 leading-relaxed mb-6">
          The manufacturing process involves precision layering techniques that build up the lens structure atom by atom, allowing for unprecedented control over the final optical properties. This level of precision ensures that each lens delivers consistent performance across its entire surface area.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Looking to the Future</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          As we continue to push the boundaries of what's possible in vision correction, we're exploring technologies like augmented reality integration, health monitoring capabilities, and even more advanced adaptive features that will make these lenses true extensions of human visual capability.
        </p>

        <p class="text-gray-300 leading-relaxed">
          The future of vision is not just about correction – it's about enhancement, intelligence, and creating a seamless interface between human vision and the digital world around us.
        </p>
      </div>
    `,
    image: "/ai1.jpg",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Technology",
    author: "Dr. Sarah Johnson",
    views: 1250,
    tags: ["Innovation", "Technology", "Smart Lenses", "Future Vision"],
  },
  4: {
    id: 4,
    title: "Revolutionary Lens Technology: The Future of Vision Correction",
    excerpt:
      "Discover how our latest lens innovations are transforming the way people see the world, with cutting-edge technology that adapts to every lifestyle.",
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="text-xl leading-relaxed text-gray-300 mb-8">
          The world of vision correction is undergoing a revolutionary transformation. With advances in materials science, digital manufacturing, and personalized medicine, we're witnessing the emergence of lens technologies that seemed impossible just a decade ago.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Adaptive Intelligence in Every Lens</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Our latest generation of smart lenses incorporates micro-sensors that continuously monitor environmental conditions and adjust accordingly. Whether you're transitioning from indoor lighting to bright sunlight, or moving between different visual tasks, these lenses adapt in real-time to provide optimal visual comfort.
        </p>

        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-lg text-gray-300">
          "The future of vision correction isn't just about seeing clearly – it's about seeing intelligently."
        </blockquote>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Personalized Visual Experiences</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Using advanced biometric analysis and AI-driven customization, we can now create lenses that are uniquely tailored to each individual's visual patterns, lifestyle, and physiological characteristics. This level of personalization was unimaginable in traditional lens manufacturing.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-10 mb-4">Key Innovations Include:</h3>
        <ul class="list-disc list-inside space-y-3 text-gray-300 mb-8">
          <li>Dynamic focal adjustment based on gaze tracking</li>
          <li>Automatic blue light filtering that adapts to screen time</li>
          <li>Enhanced contrast in low-light conditions</li>
          <li>Seamless integration with digital devices</li>
          <li>Self-cleaning nano-coating technology</li>
        </ul>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Science Behind the Innovation</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Our research team has spent over five years developing proprietary materials that can change their optical properties in response to various stimuli. These smart materials are embedded at the molecular level, ensuring durability while maintaining the highest optical clarity.
        </p>

        <p class="text-gray-300 leading-relaxed mb-6">
          The manufacturing process involves precision layering techniques that build up the lens structure atom by atom, allowing for unprecedented control over the final optical properties. This level of precision ensures that each lens delivers consistent performance across its entire surface area.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Looking to the Future</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          As we continue to push the boundaries of what's possible in vision correction, we're exploring technologies like augmented reality integration, health monitoring capabilities, and even more advanced adaptive features that will make these lenses true extensions of human visual capability.
        </p>

        <p class="text-gray-300 leading-relaxed">
          The future of vision is not just about correction – it's about enhancement, intelligence, and creating a seamless interface between human vision and the digital world around us.
        </p>
      </div>
    `,
    image: "/ai1.jpg",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Technology",
    author: "Dr. Sarah Johnson",
    views: 1250,
    tags: ["Innovation", "Technology", "Smart Lenses", "Future Vision"],
  },
  5: {
    id: 5,
    title: "Revolutionary Lens Technology: The Future of Vision Correction",
    excerpt:
      "Discover how our latest lens innovations are transforming the way people see the world, with cutting-edge technology that adapts to every lifestyle.",
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="text-xl leading-relaxed text-gray-300 mb-8">
          The world of vision correction is undergoing a revolutionary transformation. With advances in materials science, digital manufacturing, and personalized medicine, we're witnessing the emergence of lens technologies that seemed impossible just a decade ago.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Adaptive Intelligence in Every Lens</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Our latest generation of smart lenses incorporates micro-sensors that continuously monitor environmental conditions and adjust accordingly. Whether you're transitioning from indoor lighting to bright sunlight, or moving between different visual tasks, these lenses adapt in real-time to provide optimal visual comfort.
        </p>

        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-lg text-gray-300">
          "The future of vision correction isn't just about seeing clearly – it's about seeing intelligently."
        </blockquote>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Personalized Visual Experiences</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Using advanced biometric analysis and AI-driven customization, we can now create lenses that are uniquely tailored to each individual's visual patterns, lifestyle, and physiological characteristics. This level of personalization was unimaginable in traditional lens manufacturing.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-10 mb-4">Key Innovations Include:</h3>
        <ul class="list-disc list-inside space-y-3 text-gray-300 mb-8">
          <li>Dynamic focal adjustment based on gaze tracking</li>
          <li>Automatic blue light filtering that adapts to screen time</li>
          <li>Enhanced contrast in low-light conditions</li>
          <li>Seamless integration with digital devices</li>
          <li>Self-cleaning nano-coating technology</li>
        </ul>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Science Behind the Innovation</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          Our research team has spent over five years developing proprietary materials that can change their optical properties in response to various stimuli. These smart materials are embedded at the molecular level, ensuring durability while maintaining the highest optical clarity.
        </p>

        <p class="text-gray-300 leading-relaxed mb-6">
          The manufacturing process involves precision layering techniques that build up the lens structure atom by atom, allowing for unprecedented control over the final optical properties. This level of precision ensures that each lens delivers consistent performance across its entire surface area.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Looking to the Future</h2>
        <p class="text-gray-300 leading-relaxed mb-6">
          As we continue to push the boundaries of what's possible in vision correction, we're exploring technologies like augmented reality integration, health monitoring capabilities, and even more advanced adaptive features that will make these lenses true extensions of human visual capability.
        </p>

        <p class="text-gray-300 leading-relaxed">
          The future of vision is not just about correction – it's about enhancement, intelligence, and creating a seamless interface between human vision and the digital world around us.
        </p>
      </div>
    `,
    image: "/ai1.jpg",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Technology",
    author: "Dr. Sarah Johnson",
    views: 1250,
    tags: ["Innovation", "Technology", "Smart Lenses", "Future Vision"],
  },
};

export default function BlogPost() {
  const params = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const postId = parseInt(params.id as string);
  const post = blogPosts[postId];

  useEffect(() => {
    if (!post) return;

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(".post-hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
      });

      // Content animation
      gsap.from(".post-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".post-content",
          start: "top 80%",
        },
      });

      // Sidebar animation
      gsap.from(".post-sidebar > *", {
        x: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".post-sidebar",
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <TransitionLink
            href="/Blogs"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </TransitionLink>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <Navbar />

      {/* Hero Section */}
      <article className="pt-32">
        {/* Back Button */}
        <div className="px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-5xl mx-auto">
            <TransitionLink
              href="/Blogs"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Back to Blogs
            </TransitionLink>
          </div>
        </div>

        {/* Hero Content */}
        <div className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="post-hero-content">
              {/* Category and Meta */}
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  {post.category}
                </span>
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
                    {post.views} views
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">By {post.author}</p>
                  <p className="text-sm text-gray-400">
                    Vision Technology Expert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div
                  ref={contentRef}
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-16 pt-8 border-t border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share Section */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      Share this article
                    </h3>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                      <Share2 size={18} />
                      Share
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="post-sidebar sticky top-32 space-y-8">
                  {/* Reading Progress */}
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-md border border-gray-700/30 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen size={20} className="text-blue-400" />
                      <h3 className="font-semibold">Reading Info</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Read time:</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Views:</span>
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Published:</span>
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Related Articles */}
                  <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-md border border-gray-700/30 rounded-2xl p-6">
                    <h3 className="font-semibold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {Object.values(blogPosts)
                        .filter((p) => p.id !== post.id)
                        .slice(0, 2)
                        .map((relatedPost) => (
                          <TransitionLink
                            key={relatedPost.id}
                            href={`/Blogs/${relatedPost.id}`}
                            className="block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors group"
                          >
                            <h4 className="font-medium text-sm group-hover:text-blue-300 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
                              {relatedPost.readTime}
                            </p>
                          </TransitionLink>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
