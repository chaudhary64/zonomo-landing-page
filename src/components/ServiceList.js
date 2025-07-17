"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Shield } from "lucide-react";
import Link from "next/link";
export default function ServiceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const services = [
    {
      id: 1,
      slug: "plumbing-service",
      image: "/images/plumber.jpg",
      title: "Plumbing Services",
      description:
        "Professional plumbing repairs, installations, and emergency services available 24/7 for all your needs.",
      price: "₹399",
      rating: 4.8,
      verified: true,
      link: "/services/plumbing-services",
    },
    {
      id: 2,
      slug: "healthcare-service",
      image: "/images/medical-examination-service-1.jpg",
      title: "Healthcare Services",
      description:
        "Comprehensive healthcare services with certified medical professionals and modern equipment.",
      price: "₹299",
      rating: 4.9,
      verified: true,
      link: "/services/healthcare-services",
    },
    {
      id: 3,
      slug: "cleaning-service",
      image: "/images/vacuum-cleaning.jpg",
      title: "Cleaning Services",
      description:
        "Professional home and office cleaning services with eco-friendly products and equipment.",
      price: "₹499",
      rating: 4.5,
      verified: true,
      link: "/services/cleaning-services",
    },
    {
      id: 4,
      slug: "AC-service",
      image: "/images/ac-repairs.jpg",
      title: "AC Repair Services",
      description:
        "Fast and reliable air conditioning repair and maintenance services for all brands and models.",
      price: "₹399",
      rating: 4.6,
      verified: true,
      link: "/services/ac-services",
    },
    {
      id: 5,
      slug: "electrician-service",
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=200&fit=crop",
      title: "Electrician Services",
      description:
        "Licensed electricians for all electrical needs, installations, and safety inspections.",
      price: "₹400",
      rating: 4.8,
      verified: true,
      link: "/services/electrician-services",
    },
    {
      id: 6,
      slug: "pet-service",
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=200&fit=crop",
      title: "Pet Care Services",
      description:
        "Loving pet care services including grooming, walking, sitting, and veterinary consultations.",
      price: "₹499",
      rating: 4.7,
      verified: true,
      link: "/services/pet-services",
    },
  ];

  const cardsPerView = Math.min(4, services.length);
  const maxIndex = services.length - cardsPerView;

  // Memoized slide functions
  const nextSlide = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [maxIndex]);

  const goToSlide = useCallback((index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  // Optimized animation frame handling
  const animate = useCallback(() => {
    if (sliderRef.current) {
      const translateX = -currentIndex * (100 / cardsPerView);
      sliderRef.current.style.transform = `translateX(${translateX}%)`;
    }
    animationRef.current = requestAnimationFrame(animate);
  }, [currentIndex, cardsPerView]);

  // Auto-play and animation setup
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 5000);
      return () => {
        clearInterval(interval);
        cancelAnimationFrame(animationRef.current);
      };
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate, isAutoPlaying, maxIndex]);

  // Touch event handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
  };

  // Optimized star rendering
  const renderStars = useCallback((rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <Star
            className="w-4 h-4 fill-yellow-400 text-yellow-400 absolute top-0 left-0"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-[60vh]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Services</h1>
        <p className="text-gray-600">
          Professional quality services at competitive prices
        </p>
      </div>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 transform disabled:opacity-30 disabled:cursor-not-allowed opacity-0 group-hover:opacity-100"
          aria-label="Previous services"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Cards Container */}
        <div
          className="mx-4 md:mx-16 overflow-hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={sliderRef}
            className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform"
            style={{ width: `${services.length * (100 / cardsPerView)}%` }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-none w-full md:w-72 cursor-pointer"
              >
                <Link href={service.link}>
                  <div className="h-full p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="relative h-40">
                      <Image
                        className="rounded-md h-full w-full object-cover"
                        src={service.image}
                        alt={service.title}
                        fill
                        loading="lazy"
                        decoding="async"
                      />
                      {service.verified && (
                        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
                          <Shield className="w-4 h-4 text-gray-800" />
                        </div>
                      )}
                    </div>

                    <div className="mt-3">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-gray-900 text-lg font-semibold line-clamp-1">
                          {service.title}
                        </h3>
                        {/* <span className="text-gray-700 text-lg font-bold whitespace-nowrap">
                          {service.price}
                        </span> */}
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {renderStars(service.rating)}
                        </div>
                        <span className="text-sm text-gray-600 font-medium">
                          {service.rating}
                        </span>
                        {service.verified && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                            Verified
                          </span>
                        )}
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 transform disabled:opacity-30 disabled:cursor-not-allowed opacity-0 group-hover:opacity-100"
          aria-label="Next services"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Mobile Arrows */}
      <div className="md:hidden flex justify-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-all disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-all disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-500 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
