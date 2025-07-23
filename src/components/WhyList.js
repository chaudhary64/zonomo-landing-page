"use client";

import React, { useEffect, useState, useMemo } from "react";

const ZonomoBenefits = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const benefits = useMemo(
    () => [
      {
        id: 1,
        icon: "💰",
        title: "No Agency Cuts",
        description:
          "Work independently and keep what you earn — no middlemen taking commissions.",
        color: "from-green-400 to-green-600",
        delay: 0,
      },
      {
        id: 2,
        icon: "🔍",
        title: "More Visibility",
        description:
          "Get discovered by high-intent users looking for your service in real-time.",
        color: "from-blue-400 to-blue-600",
        delay: 200,
      },
      {
        id: 3,
        icon: "📅",
        title: "Flexible Scheduling",
        description:
          "Work on your own terms — choose your working hours and availability.",
        color: "from-purple-400 to-purple-600",
        delay: 400,
      },
      {
        id: 4,
        icon: "💬",
        title: "Direct Client Communication",
        description:
          "Chat with clients, accept or reject requests, and build long-term customer relationships.",
        color: "from-orange-400 to-orange-600",
        delay: 600,
      },
      {
        id: 5,
        icon: "📈",
        title: "Growth Support",
        description:
          "Get access to reviews, ratings, and performance tools to help you grow your reputation.",
        color: "from-pink-400 to-pink-600",
        delay: 800,
      },
      {
        id: 6,
        icon: "💳",
        title: "Fast, Secure Payments",
        description: "Receive payments quickly and securely after each job.",
        color: "from-indigo-400 to-indigo-600",
        delay: 1000,
      },
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate cards one by one
            benefits.forEach((benefit, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, benefit.id]);
              }, benefit.delay);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("benefits-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [benefits]);

  return (
    <div
      id="benefits-section"
      className="bg-black py-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Why List on{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Zonomo?
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Joining Zonomo comes with exclusive benefits for professionals
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`transform transition-all duration-700 ease-out ${
                visibleCards.includes(benefit.id)
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-20 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${benefit.delay}ms` }}
            >
              <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${benefit.color}`}
                />

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-3xl shadow-2xl transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    {benefit.icon}
                  </div>

                  {/* Animated Ring */}
                  <div
                    className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500`}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed text-lg group-hover:text-white/80 transition-colors">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 delay-1200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white font-medium">
                Ready to get started?
              </span>
            </div>
          </div>

          <button className="group relative bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-3">
              Join Zonomo Today
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>

            {/* Button Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>

          <p className="text-white/50 mt-4 text-sm">
            No setup fees • No hidden charges • Start earning immediately
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-white/5 rounded-full animate-spin-slow" />
      <div
        className="absolute bottom-20 left-20 w-24 h-24 border border-white/5 rounded-full animate-spin-slow"
        style={{ animationDirection: "reverse" }}
      />

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ZonomoBenefits;
