"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  Calendar,
  ArrowLeft,
  Eye,
  Clock,
  Heart,
  Bookmark,
  Copy,
  Check,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

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
  authorImage: string;
  authorBio: string;
  views: number;
  tags: string[];
}

const blogPosts: Record<number, BlogPost> = {
  1: {
    id: 1,
    title: "Revolutionary Lens Technology: The Future of Vision Correction",
    excerpt: "Discover how our latest lens innovations are transforming the way people see the world with cutting-edge adaptive technology.",
    content: `
      <div class="w-full max-w-none">
        <p class="text-xl leading-relaxed text-gray-300 mb-8 font-light w-full">
          The world of vision correction is undergoing a revolutionary transformation. With advances in materials science, digital manufacturing, and personalized medicine, we're witnessing the emergence of lens technologies that seemed impossible just a decade ago.
        </p>

        <h2 class="text-3xl font-bold text-white mt-16 mb-8 border-l-4 border-blue-500 pl-6">Adaptive Intelligence in Every Lens</h2>
        <p class="text-gray-300 leading-relaxed mb-8 text-lg">
          Our latest generation of smart lenses incorporates micro-sensors that continuously monitor environmental conditions and adjust accordingly. Whether you're transitioning from indoor lighting to bright sunlight, or moving between different visual tasks, these lenses adapt in real-time to provide optimal visual comfort.
        </p>

        <div class="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-l-4 border-blue-500 p-8 my-12 rounded-r-lg">
          <Quote className="w-8 h-8 text-blue-400 mb-4" />
          <blockquote class="text-2xl font-light text-white leading-relaxed">
            &ldquo;The future of vision correction isn&apos;t just about seeing clearly &ndash; it&apos;s about seeing intelligently.&rdquo;
          </blockquote>
          <p class="text-gray-400 mt-4 text-sm">Dr. Sarah Johnson, Chief Innovation Officer</p>
        </div>

        <h2 class="text-3xl font-bold text-white mt-16 mb-8 border-l-4 border-blue-500 pl-6">Personalized Visual Experiences</h2>
        <p class="text-gray-300 leading-relaxed mb-8 text-lg">
          Using advanced biometric analysis and AI-driven customization, we can now create lenses that are uniquely tailored to each individual's visual patterns, lifestyle, and physiological characteristics.
        </p>

        <div class="grid md:grid-cols-2 gap-8 my-12">
          <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 class="text-xl font-semibold text-white mb-4">Dynamic Focal Adjustment</h3>
            <p class="text-gray-300">Real-time adjustment based on gaze tracking and environmental factors</p>
          </div>
          <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 class="text-xl font-semibold text-white mb-4">Smart Blue Light Filtering</h3>
            <p class="text-gray-300">Adaptive filtering that responds to screen time and ambient lighting</p>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-white mt-16 mb-8 border-l-4 border-blue-500 pl-6">The Science Behind Innovation</h2>
        <p class="text-gray-300 leading-relaxed mb-8 text-lg">
          Our research team has spent over five years developing proprietary materials that can change their optical properties in response to various stimuli. These smart materials ensure durability while maintaining the highest optical clarity.
        </p>
      </div>
    `,
    image: "/ai1.jpg",
    date: "2024-03-15",
    readTime: "6 min read",
    category: "Technology",
    author: "Dr. Sarah Johnson",
    authorImage: "/author1.jpg",
    authorBio: "Vision technology specialist with 15 years of experience in optical innovation and research.",
    views: 1250,
    tags: ["Innovation", "Technology", "Smart Lenses", "Future Vision"],
  },
  2: {
    id: 2,
    title: "Progressive Lenses: A Complete Guide to Better Vision",
    excerpt: "Everything you need to know about progressive lenses, from benefits to choosing the right type for your needs.",
    content: `
      <div class="w-full max-w-none">
        <p class="text-xl leading-relaxed text-gray-300 mb-8 font-light w-full">
          Progressive lenses represent one of the most significant advances in vision correction technology, offering a seamless solution for presbyopia.
        </p>
        
        <h2 class="text-3xl font-bold text-white mt-16 mb-8 border-l-4 border-blue-500 pl-6">Understanding Progressive Technology</h2>
        <p class="text-gray-300 leading-relaxed mb-8 text-lg">
          Unlike traditional bifocals, progressive lenses provide smooth transitions between distance, intermediate, and near vision zones.
        </p>
      </div>
    `,
    image: "/progressive.png",
    date: "2024-03-12",
    readTime: "7 min read",
    category: "Education",
    author: "Mark Williams",
    authorImage: "/author2.jpg",
    authorBio: "Optical specialist focusing on patient education and lens technology.",
    views: 890,
    tags: ["Progressive Lenses", "Vision Correction", "Eye Care"],
  },
};

export default function BlogPost() {
  const params = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const postId = parseInt(params.id as string);
  const post = blogPosts[postId];
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!post) return;

    const ctx = gsap.context(() => {
      // Subtle fade-in animations
      gsap.from(".animate-in", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Content reveal animation
      gsap.from(".content-block", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".content-section",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center space-y-8 max-w-md">
          <div className="text-6xl font-light text-gray-400">404</div>
          <h1 className="text-4xl font-bold text-white">Article Not Found</h1>
          <p className="text-gray-400 text-lg">
            The article you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/Blogs"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
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

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white w-full">
      <div className="w-full max-w-[100vw] overflow-x-hidden">
      {/* Back to Blogs Button */}
      <div className="fixed top-16 left-4 z-40">
        <Link
          href="/Technologies"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-black/80 backdrop-blur-lg border border-gray-800 rounded-full px-4 py-2 text-sm"
        >
          <ArrowLeft size={16} />
          <span>Back to Blogs</span>
        </Link>
      </div>

      {/* Hero Section - Human-Centric Design */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center pt-32 overflow-hidden">
        {/* Background with subtle noise */}
        <div className="absolute inset-0 bg-black">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-10"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]" />
        </div>
        
        <div className="relative z-10 w-full max-w-[90vw] mx-auto px-6 text-center">
          {/* Title */}
          <h1 className="animate-in text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <div className="max-w-4xl mx-auto mb-14">
            <p className="text-xl text-gray-300 leading-relaxed px-4">
              {post.excerpt}
            </p>
          </div>

          {/* Author, metadata, and action buttons */}
          <div className="animate-in flex flex-wrap items-center justify-center gap-6 text-gray-400 mb-10">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/30 group-hover:border-blue-400 transition-colors duration-300">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" />
              </div>
              <span className="text-white group-hover:text-blue-400 transition-colors duration-300">
                {post.author}
              </span>
            </div>
            
            <div className="h-6 w-px bg-gray-700" />
            
            <div className="flex items-center gap-2 group">
              <Calendar size={16} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:text-white transition-colors duration-300">
                {formatDate(post.date)}
              </span>
            </div>
            
            <div className="h-6 w-px bg-gray-700" />
            
            <div className="flex items-center gap-2 group">
              <Clock size={16} className="text-purple-400 group-hover:rotate-180 transition-transform duration-700" />
              <span className="group-hover:text-white transition-colors duration-300">
                {post.readTime}
              </span>
            </div>
            
            <div className="h-6 w-px bg-gray-700" />
            
            <div className="flex items-center gap-2 group">
              <Eye size={16} className="text-amber-400 group-hover:animate-pulse" />
              <span className="group-hover:text-white transition-colors duration-300">
                {post.views.toLocaleString()} views
              </span>
            </div>
            
            <div className="h-6 w-px bg-gray-700" />
            
            <div className="flex items-center gap-2 group">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-white'} transition-colors duration-300`}
              >
                <Heart size={16} className={isLiked ? 'fill-current' : ''} />
                <span className="text-sm">{isLiked ? "Liked" : "Like"}</span>
              </button>
            </div>
            
            <div className="h-6 w-px bg-gray-700" />
            
            <div className="flex items-center group">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${isBookmarked ? 'text-blue-500' : 'text-gray-400 hover:text-white'} transition-colors duration-300`}
              >
                <Bookmark size={16} className={isBookmarked ? 'fill-current' : ''}/>
                <span className="text-sm">{isBookmarked ? 'Saved' : 'Save'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Clean and Wide */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-12 md:px-8">
        <div className="w-full">
          {/* Article Content */}
          <article className="w-full">
            <div className="content-section">
              {/* Content Blocks */}
              <div 
                className="content-block"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="content-block mt-16 pt-8">
                <h3 className="text-lg font-semibold text-white mb-6">Topics</h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="content-block mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-6">Share this article</h3>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {isCopied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                    <span>{isCopied ? "Copied!" : "Copy Link"}</span>
                  </button>
                  <button
                    onClick={shareToTwitter}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    <Twitter size={18} />
                    <span>Twitter</span>
                  </button>
                  <button
                    onClick={shareToFacebook}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                  >
                    <Facebook size={18} />
                    <span>Facebook</span>
                  </button>
                  <button
                    onClick={shareToLinkedIn}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </button>
                </div>
              </div>

              {/* Author Bio */}
              {/* <div className="content-block mt-12 pt-8 border-t border-gray-800">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gray-700 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{post.author}</h3>
                    <p className="text-gray-400 leading-relaxed">{post.authorBio}</p>
                  </div>
                </div>
              </div> */}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
          
              {/* <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">In this article</h3>
                <nav className="space-y-3 text-sm">
                  {[
                    "Adaptive Intelligence",
                    "Personalized Experiences", 
                    "Key Innovations",
                    "Science Behind Innovation",
                    "Future Outlook"
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-gray-400 hover:text-blue-400 transition-colors py-2 border-b border-gray-800 last:border-b-0"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div> */}

            
              {/* <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Related reads</h3>
                <div className="space-y-4">
                  {Object.values(blogPosts)
                    .filter((p) => p.id !== post.id)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <TransitionLink
                        key={relatedPost.id}
                        href={`/Blogs/${relatedPost.id}`}
                        className="block group"
                      >
                        <div className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 group-hover:border-gray-600">
                          <h4 className="font-medium text-white group-hover:text-blue-300 transition-colors line-clamp-2 mb-2 text-sm">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center justify-between text-xs text-gray-400">
                            <span>{relatedPost.readTime}</span>
                            <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">
                              {relatedPost.category}
                            </span>
                          </div>
                        </div>
                      </TransitionLink>
                    ))}
                </div>
              </div> */}

              {/* Newsletter Signup */}
              {/* <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-6">
                <MessageCircle className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Stay updated</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest articles on vision technology and eye care.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div> */}
            </div>
          </aside>
        </div>
      </div>

      {/* Comments Section */}
      {/* <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8">Discussion (24)</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-semibold text-white">John Doe</span>
                  <span className="text-gray-500 text-sm">2 days ago</span>
                </div>
                <p className="text-gray-300">
                  Great insights on the future of lens technology. The adaptive features are particularly impressive!
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <h4 className="text-lg font-semibold text-white mb-4">Add your comment</h4>
            <textarea
              placeholder="Share your thoughts..."
              rows={4}
              className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
            />
            <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Post Comment
            </button>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}