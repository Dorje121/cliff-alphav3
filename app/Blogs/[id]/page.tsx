"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  ArrowLeft,
  Eye,
  User,
  Share2,
  BookOpen,
  Clock,
  Heart,
  Bookmark,
  Quote,
  Copy,
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
        <p class="text-xl leading-relaxed text-zinc-300 mb-8">
          The world of vision correction is undergoing a revolutionary transformation. With advances in materials science, digital manufacturing, and personalized medicine, we're witnessing the emergence of lens technologies that seemed impossible just a decade ago.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Adaptive Intelligence in Every Lens</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Our latest generation of smart lenses incorporates micro-sensors that continuously monitor environmental conditions and adjust accordingly. Whether you're transitioning from indoor lighting to bright sunlight, or moving between different visual tasks, these lenses adapt in real-time to provide optimal visual comfort.
        </p>

        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-lg text-zinc-300">
          "The future of vision correction isn't just about seeing clearly – it's about seeing intelligently."
        </blockquote>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Personalized Visual Experiences</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Using advanced biometric analysis and AI-driven customization, we can now create lenses that are uniquely tailored to each individual's visual patterns, lifestyle, and physiological characteristics. This level of personalization was unimaginable in traditional lens manufacturing.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-10 mb-4">Key Innovations Include:</h3>
        <ul class="list-disc list-inside space-y-3 text-zinc-300 mb-8">
          <li>Dynamic focal adjustment based on gaze tracking</li>
          <li>Automatic blue light filtering that adapts to screen time</li>
          <li>Enhanced contrast in low-light conditions</li>
          <li>Seamless integration with digital devices</li>
          <li>Self-cleaning nano-coating technology</li>
        </ul>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Science Behind the Innovation</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Our research team has spent over five years developing proprietary materials that can change their optical properties in response to various stimuli. These smart materials are embedded at the molecular level, ensuring durability while maintaining the highest optical clarity.
        </p>

        <p class="text-zinc-300 leading-relaxed mb-6">
          The manufacturing process involves precision layering techniques that build up the lens structure atom by atom, allowing for unprecedented control over the final optical properties. This level of precision ensures that each lens delivers consistent performance across its entire surface area.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Looking to the Future</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          As we continue to push the boundaries of what's possible in vision correction, we're exploring technologies like augmented reality integration, health monitoring capabilities, and even more advanced adaptive features that will make these lenses true extensions of human visual capability.
        </p>

        <p class="text-zinc-300 leading-relaxed">
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
        <p class="text-xl leading-relaxed text-zinc-300 mb-8">
          Progressive lenses represent one of the most significant advances in vision correction technology, offering a seamless solution for those who need multiple vision corrections in a single lens.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Understanding Progressive Lenses</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Unlike traditional bifocals or trifocals, progressive lenses provide a smooth transition between different vision zones, eliminating the visible lines that can be both aesthetically unappealing and functionally limiting.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-10 mb-4">Benefits of Progressive Lenses:</h3>
        <ul class="list-disc list-inside space-y-3 text-zinc-300 mb-8">
          <li>Seamless vision at all distances</li>
          <li>Natural appearance without visible lines</li>
          <li>Reduced eye strain during computer work</li>
          <li>Better peripheral vision</li>
          <li>Age-appropriate vision correction</li>
        </ul>

        <p class="text-zinc-300 leading-relaxed">
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
        <p class="text-xl leading-relaxed text-zinc-300 mb-8">
          The world of vision correction is undergoing a revolutionary transformation. With advances in materials science, digital manufacturing, and personalized medicine, we're witnessing the emergence of lens technologies that seemed impossible just a decade ago.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Adaptive Intelligence in Every Lens</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Our latest generation of smart lenses incorporates micro-sensors that continuously monitor environmental conditions and adjust accordingly. Whether you're transitioning from indoor lighting to bright sunlight, or moving between different visual tasks, these lenses adapt in real-time to provide optimal visual comfort.
        </p>

        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-lg text-zinc-300">
          "The future of vision correction isn't just about seeing clearly – it's about seeing intelligently."
        </blockquote>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Personalized Visual Experiences</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Using advanced biometric analysis and AI-driven customization, we can now create lenses that are uniquely tailored to each individual's visual patterns, lifestyle, and physiological characteristics. This level of personalization was unimaginable in traditional lens manufacturing.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-10 mb-4">Key Innovations Include:</h3>
        <ul class="list-disc list-inside space-y-3 text-zinc-300 mb-8">
          <li>Dynamic focal adjustment based on gaze tracking</li>
          <li>Automatic blue light filtering that adapts to screen time</li>
          <li>Enhanced contrast in low-light conditions</li>
          <li>Seamless integration with digital devices</li>
          <li>Self-cleaning nano-coating technology</li>
        </ul>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Science Behind the Innovation</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Our research team has spent over five years developing proprietary materials that can change their optical properties in response to various stimuli. These smart materials are embedded at the molecular level, ensuring durability while maintaining the highest optical clarity.
        </p>

        <p class="text-zinc-300 leading-relaxed mb-6">
          The manufacturing process involves precision layering techniques that build up the lens structure atom by atom, allowing for unprecedented control over the final optical properties. This level of precision ensures that each lens delivers consistent performance across its entire surface area.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Looking to the Future</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          As we continue to push the boundaries of what's possible in vision correction, we're exploring technologies like augmented reality integration, health monitoring capabilities, and even more advanced adaptive features that will make these lenses true extensions of human visual capability.
        </p>

        <p class="text-zinc-300 leading-relaxed">
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
        <p class="text-xl leading-relaxed text-zinc-300 mb-8">
          The world of vision correction is undergoing a revolutionary transformation. With advances in materials science, digital manufacturing, and personalized medicine, we're witnessing the emergence of lens technologies that seemed impossible just a decade ago.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Adaptive Intelligence in Every Lens</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Our latest generation of smart lenses incorporates micro-sensors that continuously monitor environmental conditions and adjust accordingly. Whether you're transitioning from indoor lighting to bright sunlight, or moving between different visual tasks, these lenses adapt in real-time to provide optimal visual comfort.
        </p>

        <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-lg text-zinc-300">
          "The future of vision correction isn't just about seeing clearly – it's about seeing intelligently."
        </blockquote>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Personalized Visual Experiences</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Using advanced biometric analysis and AI-driven customization, we can now create lenses that are uniquely tailored to each individual's visual patterns, lifestyle, and physiological characteristics. This level of personalization was unimaginable in traditional lens manufacturing.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-10 mb-4">Key Innovations Include:</h3>
        <ul class="list-disc list-inside space-y-3 text-zinc-300 mb-8">
          <li>Dynamic focal adjustment based on gaze tracking</li>
          <li>Automatic blue light filtering that adapts to screen time</li>
          <li>Enhanced contrast in low-light conditions</li>
          <li>Seamless integration with digital devices</li>
          <li>Self-cleaning nano-coating technology</li>
        </ul>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Science Behind the Innovation</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Our research team has spent over five years developing proprietary materials that can change their optical properties in response to various stimuli. These smart materials are embedded at the molecular level, ensuring durability while maintaining the highest optical clarity.
        </p>

        <p class="text-zinc-300 leading-relaxed mb-6">
          The manufacturing process involves precision layering techniques that build up the lens structure atom by atom, allowing for unprecedented control over the final optical properties. This level of precision ensures that each lens delivers consistent performance across its entire surface area.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Looking to the Future</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          As we continue to push the boundaries of what's possible in vision correction, we're exploring technologies like augmented reality integration, health monitoring capabilities, and even more advanced adaptive features that will make these lenses true extensions of human visual capability.
        </p>

        <p class="text-zinc-300 leading-relaxed">
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
        <p class="text-xl leading-relaxed text-zinc-300 mb-8">
          The world of vision correction is undergoing a revolutionary transformation. With advances in materials science, digital manufacturing, and personalized medicine, we're witnessing the emergence of lens technologies that seemed impossible just a decade ago.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Adaptive Intelligence in Every Lens</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Our latest generation of smart lenses incorporates micro-sensors that continuously monitor environmental conditions and adjust accordingly. Whether you're transitioning from indoor lighting to bright sunlight, or moving between different visual tasks, these lenses adapt in real-time to provide optimal visual comfort.
        </p>

        <blockquote class=" pl-6 my-8 italic text-lg text-zinc-300">
          "The future of vision correction isn't just about seeing clearly – it's about seeing intelligently."
        </blockquote>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Personalized Visual Experiences</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Using advanced biometric analysis and AI-driven customization, we can now create lenses that are uniquely tailored to each individual's visual patterns, lifestyle, and physiological characteristics. This level of personalization was unimaginable in traditional lens manufacturing.
        </p>

        <h3 class="text-2xl font-semibold text-white mt-10 mb-4">Key Innovations Include:</h3>
        <ul class="list-disc list-inside space-y-3 text-zinc-300 mb-8">
          <li>Dynamic focal adjustment based on gaze tracking</li>
          <li>Automatic blue light filtering that adapts to screen time</li>
          <li>Enhanced contrast in low-light conditions</li>
          <li>Seamless integration with digital devices</li>
          <li>Self-cleaning nano-coating technology</li>
        </ul>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">The Science Behind the Innovation</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          Our research team has spent over five years developing proprietary materials that can change their optical properties in response to various stimuli. These smart materials are embedded at the molecular level, ensuring durability while maintaining the highest optical clarity.
        </p>

        <p class="text-zinc-300 leading-relaxed mb-6">
          The manufacturing process involves precision layering techniques that build up the lens structure atom by atom, allowing for unprecedented control over the final optical properties. This level of precision ensures that each lens delivers consistent performance across its entire surface area.
        </p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Looking to the Future</h2>
        <p class="text-zinc-300 leading-relaxed mb-6">
          As we continue to push the boundaries of what's possible in vision correction, we're exploring technologies like augmented reality integration, health monitoring capabilities, and even more advanced adaptive features that will make these lenses true extensions of human visual capability.
        </p>

        <p class="text-zinc-300 leading-relaxed">
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
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const postId = parseInt(params.id as string);
  const post = blogPosts[postId];
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (!post) return;

    const ctx = gsap.context(() => {


      // Hero content animation
      const tl = gsap.timeline({ delay: 0.5 });
      tl.from(".hero-category", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(".hero-title", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6")
        .from(".hero-excerpt", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-meta", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.2")
        .from(".hero-actions", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.1");

      // Floating cards animation
      gsap.from(".floating-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".floating-cards",
          start: "top 80%",
        }
      });

      // Content reveal animation
      gsap.from(".content-section > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".content-section",
          start: "top 70%",
        }
      });

      // Sticky sidebar animation
      gsap.from(".sidebar-item", {
        x: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".article-sidebar",
          start: "top 60%",
        }
      });

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className=" rounded-2xl flex items-center justify-center mb-8">
            <h2 className="text-5xl lg:text-7xl font-semibold" >404</h2>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Article Not Found
          </h1>
          <p className="text-xl text-zinc-400 max-w-md mx-auto">
            The article you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <TransitionLink
            href="/Blogs"
            className="inline-flex items-center gap-3 text-white  py-4 rounded-2xl hover:text-yellow-500 transition-all duration-300 transform hover:scale-105"
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

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div ref={parallaxRef} className="absolute h-full w-full inset-0 ">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain  h-full w-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500/15 to-transparent rounded-full blur-lg animate-pulse delay-500" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <div className="hero-category mb-6">
            <span className="inline-flex items-center gap-2 px-6 py-2 text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-blue-300 ">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              {post.category}
            </span>
          </div>

          <h1 className="hero-title text-5xl max-w-4xl   font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              {post.title}
            </span>
          </h1>

          <p className="hero-excerpt text-xl md:text- text-zinc-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            {post.excerpt}
          </p>

          <div className="hero-meta flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-zinc-400">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Calendar size={18} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Eye size={18} />
              <span>{post.views.toLocaleString()} views</span>
            </div>
          </div>

          <div className="hero-actions flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${isLiked
                ? 'bg-red-500 border-red-500 text-white'
                : 'bg-white/10 border-white/20 text-white hover:bg-red-500/20 hover:border-red-500/50'
                }`}
            >
              <Heart size={18} className={isLiked ? 'fill-current' : ''} />
              Like
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${isBookmarked
                ? 'bg-yellow-500 border-yellow-500 text-black'
                : 'bg-white/10 border-white/20 text-white hover:bg-yellow-500/20 hover:border-yellow-500/50'
                }`}
            >
              <Bookmark size={18} className={isBookmarked ? 'fill-current' : ''} />
              Save
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>

      </section>

      {/* Main Content */}
      <div className="relative z-10 mt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Article Content */}
            <article className="lg:col-span-3">
              <div className="content-section bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-xl border border-zinc-700/30 rounded-3xl p-8 md:p-12">
                {/* Quote Highlight */}
                <div className="flex items-start gap-4 mb-12 p-6 bg-gradient-to-r from-amber-500/10 to-amber-500/10 border-l-4 border-amber-500 rounded-2xl">
                  <Quote size={24} className="text-amber-400 mt-1 flex-shrink-0" />
                  <blockquote className="text-xl text-zinc-300 italic leading-relaxed">
                    "The future of vision correction isn't just about seeing clearly – it's about seeing intelligently."
                  </blockquote>
                </div>

                {/* Content */}
                <div
                  className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-12 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-10 prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-zinc-300 prose-ul:space-y-3 prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-16 pt-8 border-t border-zinc-700/50">
                  <h3 className="text-lg font-semibold mb-6 text-white">Article Tags</h3>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 backdrop-blur-sm border border-zinc-600/30 text-zinc-300 rounded-full text-sm hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-zinc-700/50">
                  <h3 className="text-lg font-semibold mb-6 text-white">Share this article</h3>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2   transition-all duration-300"
                    >
                      <Copy size={18} />
                    </button>
                    <button className="flex items-center gap-2  transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.334 3.5a.75.75 0 0 0-.338 1.154l5.614 7.45l-5.915 6.345l-.044.051H6.03l4.83-5.179l3.712 4.928a.75.75 0 0 0 .337.251h4.422a.75.75 0 0 0 .336-1.154l-5.614-7.45L20.017 4.5h-2.05l-4.83 5.18l-3.714-4.928a.75.75 0 0 0-.337-.252zm10.88 13.548L6.431 5.952H8.45l9.114 12.095z" clipRule="evenodd"></path></svg>
                    </button>
                    <button className="flex items-center gap-2  transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20 20 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2"></path></svg>
                    </button>
                    <button className="flex items-center gap-2  transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"><path fill="currentColor" d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z"></path></svg>                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Enhanced Sidebar */}
            <aside className="lg:col-span-1 article-sidebar">
              <div className="sticky top-32 space-y-6">
                <div className="sidebar-item bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl border border-zinc-700/30 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="size-16 overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <img src={post.image} alt={post.author} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="font-semibold text-white mb-1">{post.author}</h3>
                    <p className="text-sm text-zinc-400 mb-4">Vision Technology Expert</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Specializing in advanced lens technologies and future vision solutions.
                    </p>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="sidebar-item bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl border border-zinc-700/30 rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {Object.values(blogPosts)
                      .filter((p) => p.id !== post.id)
                      .slice(0, 3)
                      .map((relatedPost) => (
                        <TransitionLink
                          key={relatedPost.id}
                          href={`/Blogs/${relatedPost.id}`}
                          className="block p-4 rounded-xl bg-gradient-to-r from-zinc-800/50 to-zinc-700/30 hover:from-blue-500/10 hover:to-purple-500/10 border border-zinc-700/30 hover:border-blue-500/30 transition-all duration-300 group"
                        >
                          <h4 className="font-medium text-sm text-white group-hover:text-blue-300 transition-colors line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center justify-between text-xs text-zinc-400">
                            <span>{relatedPost.readTime}</span>
                            <span>{relatedPost.category}</span>
                          </div>
                        </TransitionLink>
                      ))}
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="sidebar-item bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl border border-zinc-700/30 rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-4">Table of Contents</h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#adaptive-intelligence" className="block text-zinc-400 hover:text-blue-400 transition-colors py-1">
                      Adaptive Intelligence
                    </a>
                    <a href="#personalized-experiences" className="block text-zinc-400 hover:text-blue-400 transition-colors py-1">
                      Personalized Experiences
                    </a>
                    <a href="#key-innovations" className="block text-zinc-400 hover:text-blue-400 transition-colors py-1">
                      Key Innovations
                    </a>
                    <a href="#science-behind" className="block text-zinc-400 hover:text-blue-400 transition-colors py-1">
                      The Science Behind
                    </a>
                    <a href="#future-outlook" className="block text-zinc-400 hover:text-blue-400 transition-colors py-1">
                      Looking to the Future
                    </a>
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div className="h-32" />
    </div>
  );
}
