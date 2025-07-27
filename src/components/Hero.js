"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const words = [
    "Revolutionizing",
    "Transforming",
    "Innovating",
    "Modernizing",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      className="relative bg-[#080505] min-h-[75vh] lg:min-h-[calc(100vh-3rem)]"
      aria-label="Hero section for Urban Services"
    >
      {/* Desktop Image */}
      <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
        <Image
          className="object-cover object-right-bottom w-full h-full opacity-80"
          src="/images/hero-img.jpg"
          alt="Smiling service professionals and happy customers representing Urban Services platform"
          fill
          priority
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <header className="absolute top-1/2 -translate-y-1/2 px-6 w-full max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight font-inter drop-shadow-xl">
          <span className="rotating-text-container text-purple-600">
            <span
              className={`rotating-word ${
                isAnimating ? "animate-out" : "animate-in"
              }`}
              aria-live="polite"
            >
              {words[currentWordIndex]}
            </span>
          </span>
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-white">Urban Services</span>
          </span>
        </h1>

        <p className="text-gray-100 text-xl sm:text-2xl max-w-2xl leading-relaxed font-inter mt-6 mb-2 drop-shadow-md font-semibold">
          Verified professionals. Instant quotes. AI-powered matching.
        </p>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed font-inter mb-10 drop-shadow-md">
          From doorstep repairs to healthcare, professional services to personal
          care – all services on one intelligent platform.
        </p>

        <nav aria-label="Hero section call to action">
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 pt-2">
            <Link href="#hitw">
              <button className="relative overflow-hidden group bg-white text-gray-800 px-6 py-3 hover:bg-gray-500 sm:px-8 sm:py-4 rounded-xl font-semibold border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 font-inter cursor-pointer">
                <span className="relative z-10">How It Works</span>
                <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </section>
  );
}
