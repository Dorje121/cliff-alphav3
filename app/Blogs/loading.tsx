import React from "react";

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      {/* Header Skeleton */}
      <div className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            {/* Hero Section Skeleton */}
            <div className="text-center mb-20">
              <div className="h-16 bg-zinc-800 rounded-lg mx-auto mb-6 max-w-4xl"></div>
              <div className="h-6 bg-zinc-800 rounded mx-auto mb-4 max-w-2xl"></div>
              <div className="h-6 bg-zinc-800 rounded mx-auto max-w-xl"></div>
            </div>

            {/* Filter Skeleton */}
            <div className="flex justify-center gap-4 mb-16">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-12 w-24 bg-zinc-800 rounded-full"
                ></div>
              ))}
            </div>

            {/* Featured Article Skeleton */}
            <div className="mb-20">
              <div className="h-8 bg-zinc-800 rounded mx-auto mb-8 w-48"></div>
              <div className="bg-zinc-800/50 rounded-3xl p-8 grid md:grid-cols-2 gap-8">
                <div className="h-80 bg-zinc-700 rounded-xl"></div>
                <div className="space-y-4">
                  <div className="h-6 bg-zinc-700 rounded w-20"></div>
                  <div className="h-8 bg-zinc-700 rounded"></div>
                  <div className="h-4 bg-zinc-700 rounded"></div>
                  <div className="h-4 bg-zinc-700 rounded w-3/4"></div>
                  <div className="h-4 bg-zinc-700 rounded w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Blog Grid Skeleton */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-zinc-800/50 rounded-2xl overflow-hidden"
                >
                  <div className="h-48 bg-zinc-700"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-zinc-700 rounded"></div>
                    <div className="h-4 bg-zinc-700 rounded"></div>
                    <div className="h-4 bg-zinc-700 rounded w-3/4"></div>
                    <div className="flex justify-between">
                      <div className="h-4 bg-zinc-700 rounded w-24"></div>
                      <div className="h-4 bg-zinc-700 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
