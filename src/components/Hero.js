"use client";

import { useState, useEffect } from "react";

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
    <div className="relative bg-[#080505] min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
      {/* Desktop Image */}
      <div className="absolute inset-0 hidden lg:block">
        <img
          className="object-cover object-right-bottom w-full h-full opacity-80"
          src="/images/hero-img.jpg"
          alt="Urban Services Hero"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="absolute top-1/2 -translate-y-1/2 px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight font-poppins drop-shadow-xl">
          <span className="rotating-text-container">
            <span
              className={`rotating-word ${
                isAnimating ? "animate-out" : "animate-in"
              }`}
            >
              {words[currentWordIndex]}
            </span>
          </span>
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-white font-playfair">
              Urban Services
            </span>
          </span>
        </h1>

        {/* Word Indicators */}

        <p className="text-gray-200 text-lg sm:text-xl max-w-2xl leading-relaxed font-inter mt-6 mb-10 drop-shadow-md">
          From doorstep repairs to healthcare, professional services to personal
          care – all services on one intelligent platform. Connect with verified
          professionals, get instant quotes, and experience seamless service
          delivery.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 pt-2">
          <button className="relative overflow-hidden cursor-pointer group bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold font-poppins border border-purple-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <span className="relative z-10">Get Started</span>

            {/* Animated Shine Effect */}
            <span
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent
    opacity-0 group-hover:opacity-100
    transform -translate-x-full group-hover:translate-x-0
    transition-all duration-700 ease-in-out rotate-12 group-hover:rotate-0 pointer-events-none"
            ></span>
          </button>

          <button className="relative overflow-hidden group bg-white text-gray-800 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 font-poppins cursor-pointer">
            <span className="relative z-10">How It Works</span>
            <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
