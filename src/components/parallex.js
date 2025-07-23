"use client";

import { useState, useEffect, useRef } from "react";
import {
  Check,
  Eye,
  Clock,
  MessageSquare,
  TrendingUp,
  CreditCard,
} from "lucide-react";

export default function ServiceProvidersSection() {
  const [currentBenefit, setCurrentBenefit] = useState(0);
  const sectionRef = useRef(null);
  const isScrolling = useRef(false);
  const [allowNormalScroll, setAllowNormalScroll] = useState(false);
  const [hasEnteredFromTop, setHasEnteredFromTop] = useState(false);
  const [lastScrollDirection, setLastScrollDirection] = useState(null);

  const benefits = [
    {
      icon: Check,
      title: "No Agency Cuts",
      description:
        "Work independently and keep what you earn — no middlemen taking commissions.",
      color: "from-emerald-500 to-green-400",
    },
    {
      icon: Eye,
      title: "More Visibility",
      description:
        "Get discovered by high-intent users looking for your service in real-time.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Work on your own terms — choose your working hours and availability.",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description:
        "Chat with clients, accept or reject requests, and build long-term relationships.",
      color: "from-orange-500 to-yellow-400",
    },
    {
      icon: TrendingUp,
      title: "Growth Support",
      description:
        "Get access to reviews, ratings, and tools to help grow your reputation.",
      color: "from-indigo-500 to-blue-400",
    },
    {
      icon: CreditCard,
      title: "Fast Payments",
      description: "Receive payments quickly and securely after each job.",
      color: "from-teal-500 to-emerald-400",
    },
  ];

  // Intersection Observer to detect entry direction
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const windowHeight = window.innerHeight;

            // Check if entering from top (section appearing from bottom of screen)
            if (rect.top < windowHeight && rect.top > 0) {
              setHasEnteredFromTop(true);
              setCurrentBenefit(0);
            }
            // If entering from bottom (coming back from below), show all benefits
            else if (rect.bottom > 0 && rect.top < 0) {
              setHasEnteredFromTop(false);
              setCurrentBenefit(benefits.length - 1);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [benefits.length]);

  useEffect(() => {
    const section = sectionRef.current;
    let touchStartY = 0;

    const handleWheel = (e) => {
      if (!section.contains(e.target)) return;

      const scrollDirection = e.deltaY > 0 ? "down" : "up";
      setLastScrollDirection(scrollDirection);

      // Only allow animation when coming from top
      if (!hasEnteredFromTop) {
        return;
      }

      // If all benefits are shown and scrolling down, allow normal scroll
      if (currentBenefit === benefits.length - 1 && e.deltaY > 0) {
        setAllowNormalScroll(true);
        return;
      }

      // If at first benefit and scrolling up, allow normal scroll
      if (currentBenefit === 0 && e.deltaY < 0) {
        setAllowNormalScroll(true);
        return;
      }

      e.preventDefault();

      if (isScrolling.current) return;

      isScrolling.current = true;
      setAllowNormalScroll(false);

      // Determine scroll direction
      if (e.deltaY > 0 && currentBenefit < benefits.length - 1) {
        setCurrentBenefit((prev) => prev + 1);
      } else if (e.deltaY < 0 && currentBenefit > 0) {
        setCurrentBenefit((prev) => prev - 1);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!section.contains(e.target)) return;

      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) < 50) return;

      // Only allow animation when coming from top
      if (!hasEnteredFromTop) {
        return;
      }

      // Allow normal scroll at boundaries
      if (currentBenefit === benefits.length - 1 && diff > 0) {
        setAllowNormalScroll(true);
        return;
      }
      if (currentBenefit === 0 && diff < 0) {
        setAllowNormalScroll(true);
        return;
      }

      e.preventDefault();

      if (isScrolling.current) return;

      isScrolling.current = true;
      setAllowNormalScroll(false);

      if (diff > 0 && currentBenefit < benefits.length - 1) {
        setCurrentBenefit((prev) => prev + 1);
      } else if (diff < 0 && currentBenefit > 0) {
        setCurrentBenefit((prev) => prev - 1);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" && currentBenefit < benefits.length - 1) {
        e.preventDefault();
        setCurrentBenefit((prev) => prev + 1);
      } else if (e.key === "ArrowUp" && currentBenefit > 0) {
        e.preventDefault();
        setCurrentBenefit((prev) => prev - 1);
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    section.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    section.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      section.removeEventListener("wheel", handleWheel);
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentBenefit, benefits.length, hasEnteredFromTop]);

  return (
    <div
      ref={sectionRef}
      id="service-providers-section"
      className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden"
      style={{
        scrollSnapAlign: allowNormalScroll ? "none" : "start",
        scrollSnapStop: allowNormalScroll ? "normal" : "always",
      }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What Service Providers Get
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Joining Zonomo comes with exclusive benefits for professionals
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-3">
            {benefits.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 transform ${
                  index <= currentBenefit
                    ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500/50"
                    : "bg-gray-700 scale-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Vertical Benefits Layout */}
        <div className="space-y-8 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isVisible = index <= currentBenefit;
            const isActive = index === currentBenefit;

            return (
              <div
                key={index}
                className={`relative transition-all duration-600 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 translate-x-20 scale-95"
                } ${isActive ? "z-10" : "z-0"}`}
                style={{
                  transitionDelay: isVisible
                    ? `${(index - currentBenefit + 1) * 50}ms`
                    : "0ms",
                }}
              >
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                    benefit.color
                  } opacity-0 transition-opacity duration-700 ${
                    isActive ? "opacity-10" : ""
                  }`}
                />

                {/* Connection Line */}
                {index < benefits.length - 1 && (
                  <div
                    className={`absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b transition-all duration-700 ${
                      isVisible
                        ? "from-blue-500/50 to-transparent"
                        : "from-transparent to-transparent"
                    }`}
                  />
                )}

                {/* Main Card */}
                <div
                  className={`relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-600 ${
                    isActive
                      ? "border-blue-500/50 shadow-2xl shadow-blue-500/10 scale-105"
                      : "border-gray-700/50 scale-100"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon Container */}
                    <div
                      className={`relative shrink-0 transition-all duration-500 ${
                        isActive ? "transform scale-110" : "transform scale-100"
                      }`}
                    >
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} p-0.5 transition-all duration-500`}
                      >
                        <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                          <Icon
                            className={`w-8 h-8 text-white transition-all duration-300 ${
                              isActive ? "scale-110" : "scale-100"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Pulse Effect */}
                      {isActive && (
                        <div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${benefit.color} opacity-20 animate-pulse`}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-2xl font-bold mb-3 transition-all duration-300 ${
                          isActive ? "text-white" : "text-gray-100"
                        }`}
                      >
                        {benefit.title}
                      </h3>
                      <p
                        className={`text-lg leading-relaxed transition-all duration-300 ${
                          isActive ? "text-gray-200" : "text-gray-400"
                        }`}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated Border */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/20 animate-pulse" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Hint */}
        <div className="text-center mt-12">
          <p
            className={`text-sm transition-all duration-300 ${
              currentBenefit < benefits.length - 1
                ? "text-gray-400 animate-bounce"
                : "text-green-400"
            }`}
          ></p>
        </div>
      </div>

      {/* Enhanced Vertical Scroll Indicator */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:block">
        <div className="flex flex-col items-center space-y-1">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`w-1 rounded-full transition-all duration-500 relative ${
                index === currentBenefit
                  ? "bg-blue-500 h-16 w-2"
                  : index < currentBenefit
                  ? "bg-blue-400/70 h-8"
                  : "bg-gray-700 h-4"
              }`}
            >
              {index === currentBenefit && (
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-b ${benefit.color} opacity-50 animate-pulse`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
