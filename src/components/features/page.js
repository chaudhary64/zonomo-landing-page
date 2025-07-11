"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  RadialLinearScale,
  Filler,
} from "chart.js";
import {
  Line,
  Doughnut,
  Bar,
  Radar,
  Scatter,
  PolarArea,
} from "react-chartjs-2";
import { ShieldCheck } from "lucide-react";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
        <nav className="space-y-3 xl:space-y-4">
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



// Feature Section Component
const FeatureSection = ({ feature, index }) => {

    const mediaMap = {
    "Book Services By Command": {
    type: "video",
    src: "/videoes/phone.mp4",
  },
  "Trust & Reputation System": {
    type: "images",
    src: "/images/trust.jpg",
  },
  "Decentralized Service Marketplace": {
    type: "image",
    src: "/images/business.jpg",
  },
  "Revenue via Multi-Channel Streams": {
    type: "video",
    src: "/videoes/missionvid.mp4",
  },

  }

  const media = mediaMap[feature.title];

  const sectionRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      className="mb-16 sm:mb-20 lg:mb-24"
      id={`feature-${index}`}
    >
      {/* Feature Header */}
<div
  className={`relative rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-10 lg:mb-12 text-white ${
    media ? "h-[400px] sm:h-[400px]" : "bg-gradient-to-r " + feature.gradient + " p-6 sm:p-8 lg:p-12"
  }`}
>
  {media ? (
    <>
      {/* Render media */}
      {media.type === "video" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={media.src}
          alt={feature.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-16 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          {feature.title}
        </h2>
        <p className="text-lg sm:text-xl opacity-90 mb-6">{feature.subtitle}</p>
        <p className="text-base sm:text-lg opacity-95 leading-relaxed">{feature.description}</p>
      </div>
    </>
  ) : (
    // Default card for features without media
    <>
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
            <p className="text-base sm:text-lg lg:text-xl opacity-90">{feature.subtitle}</p>
          </div>
        </div>
        <p className="text-base sm:text-lg lg:text-xl opacity-95 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </>
  )}
</div>


      {/* How It Works Section */}
      <div className="mb-12 sm:mb-14 lg:mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center">
          <span className="bg-blue-100 rounded-lg p-2 sm:p-3 mb-3 sm:mb-0 sm:mr-4 self-start">
            🔧
          </span>
          <span>How It Works</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {feature.howItWorks.map((step, stepIndex) => (
            <div
              key={stepIndex}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-base sm:text-lg">
                    {stepIndex + 1}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
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

 
  // Feature data
  const features = [
    {
      title: "Book Services By Command",
      subtitle: "Book Services in seconds with AI",
      description:
        "With just a simple voice command, our AI understands what you need, finds the right service, slots according to you and books it for you — no forms, no hassle.",
      icon: <AIBrainIcon className="w-12 h-12 text-white" />,
      gradient: "from-indigo-800 to-gray-500",
      howItWorks: [
        {
          title: "Discover Services",
          description:
            "Users browse or ask the AI Assistant to help find the service they need — like plumbing, cleaning, or appliance repair. The assistant understands both voice and typed input.",
        },
        {
          title: "Tell the AI to Book",
          description:
            "Once the user says something like 'Book an electrician for tomorrow at 10AM,' the AI Assistant captures the full request using voice recognition and natural language understanding.",
        },
        {
          title: "Get Smart Suggestions",
          description:
            "Based on your request, AI shows a short list of the best-matched professionals — including ratings, availability, and estimated pricing — for review and confirmation.",
        },
        {
          title: "Seamless Confirmation & Payment",
          description:
            "Once you confirm the professional, you're smoothly guided to the checkout screen for payment and final scheduling — all in one frictionless voice-first flow.",
        },
      ],
    },
    {
  title: "Trust & Reputation System",
  subtitle: "Building Confidence Through Transparency & Verification",
  description:
    "Our platform prioritizes trust by ensuring every service provider is thoroughly verified and continuously evaluated. Ratings, reviews, identity checks, and performance metrics drive a reputation system that rewards consistency and quality, enhancing both user satisfaction and long-term engagement.",
      
    icon: <ShieldCheck className="w-12 h-12 text-white" />, // Choose any suitable icon
  gradient: "from-yellow-600 to-yellow-800",
  howItWorks: [
    {
      title: "Verified Identity & Credentials",
      description:
        "All professionals undergo multi-step verification including ID checks, certifications, and background validation to ensure authenticity and reliability.",
    },
    {
      title: "Transparent Ratings & Reviews",
      description:
        "Each service interaction is rated and reviewed by customers. This real-time feedback is public and helps users make confident choices.",
    },
    {
      title: "Reputation Score Engine",
      description:
        "An AI-driven score combines customer reviews, completion rates, response times, and complaint history to surface top-performing professionals.",
    },
    {
      title: "Trust Badges & Guarantees",
      description:
        "Top-rated professionals earn badges for excellence. Customers are also protected through service guarantees and secure payment channels.",
    },
  ],
},
    {
      title: "Decentralized Service Marketplace",
      subtitle: "Freedom to choose from verified professionals with transparent ratings and pricing",
      description:
      "Empowers verified professionals to operate independently with full control over their services, while maintaining platform-wide quality standards through automated checks and real-time feedback loops.",
      icon: <PredictiveIcon className="w-12 h-12 text-white" />,
      gradient: "from-[#4a5759] to-[#5e503f]",
      howItWorks:[
          {
          title: "Behavioral Tracking",
          description:
            "Analyzes customer touchpoints including browsing patterns, booking behaviors, and preferences to build detailed profiles with 200+ data points.",
          }
      ]
    },
    {
      title: "Revenue via Multi-Channel Streams",
      subtitle: "Loyalty-Driven Monetization and Scalable Profits",
       description:
    "Our platform generates revenue through diverse streams like subscriptions, featured placements, smart upselling, and AI-based personalization. Users enjoy fair pricing, reward programs, and transparency — while investors gain from layered monetization strategies.",
      icon: <NLPIcon className="w-12 h-12 text-white" />,
      gradient: "from-amber-600 to-amber-800",
      howItWorks: [
        
        {
          title: "Predictive Modeling",
          description:
            "Predicts future service needs, optimal booking times, price sensitivity, and churn risk using historical data with 95% accuracy.",
        },
      ],
      
    },
  ];

  //LOGIC OF SHOWING 2 IMAGES 2 VIDEOS


  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-clip"
      ref={containerRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

      <div className="mx-auto px-4 sm:px-6 relative z-10">
        {/* Sticky Navigation */}
        <StickyNavigation features={features} activeSection={activeSection} />

        {/* Main Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:ml-80 2xl:ml-96">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text text-transparent mb-4 sm:mb-6 lg:mb-8 font-poppins">
            What Sets Us Apart From The Competition
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter px-4">
            Experience the future of home services with our revolutionary
            platform that combines advanced AI technology, unmatched service
            quality, and customer-first innovation to deliver what no competitor
            can match.
          </p>
        </div>

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
