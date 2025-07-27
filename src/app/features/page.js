"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  RadialLinearScale,
  Filler,
} from "chart.js";
import { ShieldCheck } from "lucide-react";

// Register ChartJS components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  RadialLinearScale,
  Filler
);

// AI Brain SVG Component
const AIBrainIcon = ({ className = "w-16 h-16" }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Central Processing Unit */}
    <rect
      x="35"
      y="35"
      width="30"
      height="30"
      rx="6"
      fill="currentColor"
      opacity="0.9"
    />

    {/* Neural Network Nodes */}
    <circle cx="15" cy="25" r="4" fill="currentColor" opacity="0.8" />
    <circle cx="15" cy="50" r="4" fill="currentColor" opacity="0.8" />
    <circle cx="15" cy="75" r="4" fill="currentColor" opacity="0.8" />

    <circle cx="85" cy="25" r="4" fill="currentColor" opacity="0.8" />
    <circle cx="85" cy="50" r="4" fill="currentColor" opacity="0.8" />
    <circle cx="85" cy="75" r="4" fill="currentColor" opacity="0.8" />

    {/* Connection Lines */}
    <path
      d="M19 25L31 40M19 50L31 50M19 75L31 60"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.7"
    />
    <path
      d="M69 40L81 25M69 50L81 50M69 60L81 75"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.7"
    />

    {/* CPU Details */}
    <rect
      x="40"
      y="40"
      width="5"
      height="5"
      fill="currentColor"
      opacity="0.6"
    />
    <rect
      x="47"
      y="40"
      width="5"
      height="5"
      fill="currentColor"
      opacity="0.6"
    />
    <rect
      x="54"
      y="40"
      width="5"
      height="5"
      fill="currentColor"
      opacity="0.6"
    />
    <rect
      x="40"
      y="47"
      width="5"
      height="5"
      fill="currentColor"
      opacity="0.6"
    />
    <rect
      x="47"
      y="47"
      width="5"
      height="5"
      fill="currentColor"
      opacity="0.6"
    />
    <rect
      x="54"
      y="47"
      width="5"
      height="5"
      fill="currentColor"
      opacity="0.6"
    />
    <rect
      x="40"
      y="54"
      width="5"
      height="5"
      fill="currentColor"
      opacity="0.6"
    />
    <rect
      x="47"
      y="54"
      width="5"
      height="5"
      fill="currentColor"
      opacity="0.6"
    />
    <rect
      x="54"
      y="54"
      width="5"
      height="5"
      fill="currentColor"
      opacity="0.6"
    />

    {/* Data Flow Indicators */}
    <path
      d="M50 15L50 30"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M50 70L50 85"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.8"
    />

    {/* Arrow indicators */}
    <path
      d="M47 18L50 15L53 18"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
    <path
      d="M47 82L50 85L53 82"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />

    {/* Glowing effect */}
    <defs>
      <filter id="aiGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

// Machine Learning Icon
const MLIcon = ({ className = "w-16 h-16" }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
      opacity="0.7"
    />
    <circle cx="50" cy="30" r="8" fill="currentColor" />
    <circle cx="70" cy="50" r="6" fill="currentColor" opacity="0.8" />
    <circle cx="50" cy="70" r="7" fill="currentColor" opacity="0.9" />
    <circle cx="30" cy="50" r="5" fill="currentColor" opacity="0.6" />
    <path
      d="M50 30L70 50L50 70L30 50L50 30"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      opacity="0.8"
    />
    <defs>
      <filter id="mlGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

// Predictive Analytics Icon
const PredictiveIcon = ({ className = "w-16 h-16" }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 80L25 65L40 70L55 45L70 50L85 25"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="85" cy="25" r="4" fill="currentColor" />
    <path
      d="M75 15L85 25L75 35"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <rect x="8" y="78" width="4" height="4" fill="currentColor" opacity="0.8" />
    <rect
      x="23"
      y="63"
      width="4"
      height="4"
      fill="currentColor"
      opacity="0.8"
    />
    <rect
      x="38"
      y="68"
      width="4"
      height="4"
      fill="currentColor"
      opacity="0.8"
    />
    <defs>
      <filter id="predictiveGlow">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

// NLP Icon
const NLPIcon = ({ className = "w-16 h-16" }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="20"
      y="30"
      width="60"
      height="40"
      rx="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M30 45H70M30 55H65"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.9"
    />
    <circle cx="25" cy="25" r="3" fill="currentColor" opacity="0.8" />
    <circle cx="35" cy="20" r="2" fill="currentColor" opacity="0.9" />
    <circle cx="75" cy="22" r="2.5" fill="currentColor" opacity="0.7" />
    <path
      d="M22 25L28 30M33 20L37 25M72 22L78 27"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <defs>
      <filter id="nlpGlow">
        <feGaussianBlur stdDeviation="1" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

// Sticky Navigation Component
const StickyNavigation = ({ features, activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="hidden xl:block sticky top-20 float-left w-72 2xl:w-80 mr-8 2xl:mr-12"
      id="features"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 xl:p-6 shadow-2xl border border-gray-200">
        <h3 className="text-base xl:text-lg font-bold text-gray-900 mb-4 xl:mb-6 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          What Sets Us Apart
        </h3>
        <nav className="space-y-2 xl:space-y-3">
          {features.map((feature, index) => {
            const sectionId = `feature-${index}`;
            const isActive = activeSection === sectionId;

            return (
              <button
                key={index}
                onClick={() => scrollToSection(sectionId)}
                className={`w-full text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-blue-900 font-semibold"
                    : "text-gray-700 hover:text-blue-900"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <span
                    className={`font-bold text-base xl:text-lg ${
                      isActive ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {index + 1}.
                  </span>
                  <span className="text-sm xl:text-base leading-relaxed">
                    {feature.title}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

// Features data
const features = [
  {
    title: "Middleman Model – Zero Ownership, Full Control",
    subheading:
      "Directly connect with skilled professionals—no agencies, no middlemen. Full transparency and control for every service.",
    icon: <AIBrainIcon className="w-12 h-12 text-white" />,
    gradient: "from-indigo-800 to-blue-500",
    description: `Zonomo operates as a tech-enabled aggregator platform that connects customers directly with skilled professionals, without owning or operating any service agencies. This asset-light model significantly reduces operational costs and infrastructure overhead, enabling scalable growth. It also offers professionals greater independence and flexibility, while users benefit from lower pricing and more service choices—driving a win-win ecosystem.`,
  },
  {
    title: " Any Service. Anytime. Anywhere",
    subheading:
      "Access any service, anytime, anywhere. Trusted professionals brought to your doorstep—no matter your location.",
    icon: <ShieldCheck className="w-12 h-12 text-white" />,
    gradient: "from-yellow-600 to-orange-500",
    description: `Whether it’s electrical repair, house cleaning, grooming, appliance servicing, plumbing, or even at-home healthcare, Zonomo brings a wide spectrum of services to users’ doorsteps. The platform is designed to be location-agnostic, ensuring availability in metro cities, suburbs, and soon even tier-2 and tier-3 areas—anytime, any day. It’s a truly one-stop solution for all household and personal service needs.`,
  },
  {
    title: "AI-Powered Matching System",
    subheading:
      "Empowering professionals to operate independently. Platform-driven quality and reliability for every user.",
    icon: <MLIcon className="w-12 h-12 text-white" />,
    gradient: "from-[#4a5759] to-[#43aa8b]",
    description: `Zonomo leverages intelligent algorithms that assess user preferences, location, time availability, provider skill ratings, past service quality, and job type to auto-match users with the best-fit professionals. This reduces booking friction, saves time, and improves service satisfaction. The AI continuously learns and evolves with usage patterns to offer even better matching over time.`,
  },
  {
    title: "Dual Platform – Users & Service Professionals",
    subheading:
      "Distinct dashboards for users and pros. Book, manage, and track services or jobs with total transparency.",
    icon: <NLPIcon className="w-12 h-12 text-white" />,
    gradient: "from-amber-600 to-pink-500",
    description: `Zonomo provides two distinct, purpose-built dashboards—one for users and one for professionals.
1. User Dashboard: Book services, view upcoming bookings, track service status, chat with providers, rate services, and manage payments.
2. Professional Dashboard: Accept/decline jobs, set pricing, manage availability, receive payments, monitor reviews, and track performance.
This two-sided architecture ensures a seamless experience on both ends.`,
  },
  {
    title: "Zero Hiring Costs for Professionals",
    subheading:
      "No commissions, entry fees, or hidden costs. Professionals join, earn, and grow their business freely.",
    icon: <ShieldCheck className="w-12 h-12 text-white" />,
    gradient: "from-green-600 to-lime-500",
    description: `Unlike traditional agencies that charge commission, entry fees, or franchise royalties, Zonomo allows skilled
 individuals or freelancers to register and offer their services completely free of cost. This encourages
 greater participation, especially from underemployed yet talented individuals, giving them instant market
 access, control over pricing, and the ability to grow their business independently`,
  },
  {
    title: "End-to-End Chat & Negotiation System",
    subheading:
      "Chat directly with providers to clarify, negotiate, and finalize bookings—all within the app, instantly.",
    icon: <PredictiveIcon className="w-12 h-12 text-white" />,
    gradient: "from-purple-600 to-fuchsia-500",
    description: `Zonomo provides an in-app chat feature allowing real-time communication between customers and service
 providers. Users can clarify service details, negotiate prices, request modifications, and even schedule tasks
 —all without needing external apps or calls. This direct interaction eliminates miscommunication, improves
 satisfaction, and helps finalize service terms efficiently`,
  },
  {
    title: "Verified & Rated Professionals",
    subheading:
      "All professionals are KYC-verified and rated by real users. Book confidently with transparency and trust.",
    icon: <ShieldCheck className="w-12 h-12 text-white" />,
    gradient: "from-cyan-600 to-sky-500",
    description: `Every professional on Zonomo undergoes a thorough KYC and background verification process. Alongside, a
 transparent rating and review system helps maintain accountability and trust. Users can confidently book
 services by reviewing past customer feedback, response times, and overall service quality—fostering a safer,
 more reliable experience`,
  },
  {
    title: "Fast Booking & On-Time Service",
    subheading:
      "Book in minutes and get prompt, on-time service. Real-time updates and punctuality—always our promise.",
    icon: <MLIcon className="w-12 h-12 text-white" />,
    gradient: "from-red-600 to-orange-400",
    description: ` Zonomo is built for speed. Users can find, compare, and book professionals within minutes through an
 intuitive booking process. Real-time availability updates ensure bookings are accepted instantly, with service
 initiation typically occurring within hours. Promptness and punctuality are core metrics tracked to ensure
 consistent on-time delivery`,
  },
];

// Feature Section Component
const FeatureSection = ({ feature, index }) => {
  // Always use gradient backgrounds for all features, no media backgrounds
  const sectionRef = useRef(null);

  // Determine if this is the last feature
  const isLast = index === features.length - 1;

  return (
    <div
      ref={sectionRef}
      className={`${!isLast ? "mb-16 sm:mb-20 lg:mb-24" : ""}`}
      id={`feature-${index}`}
    >
      {/* Feature Header - always gradient background */}
      <div
        className={`relative rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-10 lg:mb-12 text-white bg-gradient-to-r ${feature.gradient} p-6 sm:p-8 lg:p-12`}
      >
        <div className="absolute top-0 right-0 opacity-5 sm:opacity-10 transform rotate-12 scale-100 sm:scale-150 -mr-8 sm:mr-0">
          {feature.icon}
        </div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
            <div className="bg-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm mr-0 sm:mr-6 mb-4 sm:mb-0 self-start">
              {feature.icon}
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {feature.title}
              </h2>
              {/* subtitle removed */}
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 leading-relaxed">
            {feature.subheading}
          </p>
        </div>
      </div>
      <div
        className={`${
          !isLast ? "mb-16 sm:mb-20 lg:mb-24" : ""
        } px-6 sm:px-8 lg:px-12`}
      >
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default function AIFeatures() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("feature-0");

  // Intersection Observer for tracking active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all feature sections
    const sections = document.querySelectorAll('[id^="feature-"]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section
      className="my-12 md:my-16 lg:my-24 relative overflow-x-clip"
      ref={containerRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

      {/* Main Header */}
      <div className="w-[90%] mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text text-transparent mb-4 sm:mb-6 lg:mb-8 font-inter">
          What Sets Us Apart From The Competition
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter px-4">
          Experience the future of home services with our revolutionary platform
          that combines advanced AI technology, unmatched service quality, and
          customer-first innovation to deliver what no competitor can match.
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 relative z-10">
        {/* Sticky Navigation */}
        <StickyNavigation features={features} activeSection={activeSection} />

        {/* Features Sections */}
        <div className="xl:ml-80 2xl:ml-96">
          {features.map((feature, index) => (
            <FeatureSection key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
