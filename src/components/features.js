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
    <div className="hidden xl:block sticky top-20 float-left w-72 2xl:w-80 mr-8 2xl:mr-12">
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
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
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
  const sectionRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      className="mb-16 sm:mb-20 lg:mb-24"
      id={`feature-${index}`}
    >
      {/* Feature Header */}
      <div
        className={`bg-gradient-to-r ${feature.gradient} rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-10 lg:mb-12 text-white relative overflow-hidden`}
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
              <p className="text-base sm:text-lg lg:text-xl opacity-90">
                {feature.subtitle}
              </p>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 leading-relaxed">
            {feature.description}
          </p>
        </div>
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

      {/* Technology & Architecture Section */}
      <div className="mb-12 sm:mb-14 lg:mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center">
          <span className="bg-green-100 rounded-lg p-2 sm:p-3 mb-3 sm:mb-0 sm:mr-4 self-start">
            ⚙️
          </span>
          <span>Technical Implementation</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Core Technologies
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {feature.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex items-center space-x-3 sm:space-x-4 bg-gray-50 rounded-lg p-3 sm:p-4 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
              System Architecture
            </h4>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-100">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                {feature.architecture}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-12 sm:mb-14 lg:mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center">
          <span className="bg-purple-100 rounded-lg p-2 sm:p-3 mb-3 sm:mb-0 sm:mr-4 self-start">
            🎯
          </span>
          <span>Key Benefits & Impact</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {feature.benefits.map((benefit, benefitIndex) => (
            <div
              key={benefitIndex}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics Section */}
      <div className="mb-12 sm:mb-14 lg:mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center">
          <span className="bg-amber-100 rounded-lg p-2 sm:p-3 mb-3 sm:mb-0 sm:mr-4 self-start">
            📊
          </span>
          <span>Performance Metrics & Analytics</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {/* Primary Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
              <div className="h-64 sm:h-72 lg:h-80">{feature.chart}</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            {feature.stats.map((stat, statIndex) => (
              <div
                key={statIndex}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 text-center border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Charts Section */}
        {feature.additionalCharts && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {feature.additionalCharts.map((chartData, chartIndex) => (
              <div
                key={chartIndex}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100"
              >
                <div className="h-64 sm:h-72 lg:h-80">{chartData.chart}</div>
                <div className="mt-3 sm:mt-4 text-center">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                    {chartData.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {chartData.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      {index < 3 && (
        <div className="flex items-center justify-center mt-16 sm:mt-18 lg:mt-20 mb-6 sm:mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-xs sm:max-w-lg"></div>
          <div className="mx-4 sm:mx-6 p-2 sm:p-3 bg-gray-100 rounded-full">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-xs sm:max-w-lg"></div>
        </div>
      )}
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

  // Chart configurations
  const smartMatchingChart = (
    <Line
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Match Accuracy (%)",
            data: [75, 82, 88, 92, 95, 97],
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            fill: true,
            tension: 0.4,
          },
          {
            label: "Customer Satisfaction (%)",
            data: [70, 78, 85, 90, 93, 96],
            borderColor: "#10B981",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "AI Matching Performance Over Time" },
        },
        scales: {
          y: { beginAtZero: true, max: 100 },
        },
      }}
    />
  );

  const serviceDistributionChart = (
    <Doughnut
      data={{
        labels: [
          "Cleaning",
          "Plumbing",
          "Electrical",
          "AC Repair",
          "Gardening",
          "Others",
        ],
        datasets: [
          {
            data: [30, 20, 15, 12, 13, 10],
            backgroundColor: [
              "#3B82F6",
              "#10B981",
              "#F59E0B",
              "#EF4444",
              "#8B5CF6",
              "#6B7280",
            ],
            borderWidth: 3,
            borderColor: "#fff",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "right" },
          title: { display: true, text: "Service Category Distribution" },
        },
      }}
    />
  );

  const matchingAccuracyScatter = (
    <Scatter
      data={{
        datasets: [
          {
            label: "Professional Experience vs Match Success",
            data: [
              { x: 1, y: 75 },
              { x: 2, y: 82 },
              { x: 3, y: 88 },
              { x: 4, y: 92 },
              { x: 5, y: 95 },
              { x: 6, y: 97 },
              { x: 7, y: 98 },
              { x: 8, y: 99 },
            ],
            backgroundColor: "rgba(59, 130, 246, 0.6)",
            borderColor: "#3B82F6",
            pointRadius: 8,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Experience Impact on Match Success Rate",
          },
        },
        scales: {
          x: { title: { display: true, text: "Years of Experience" } },
          y: {
            title: { display: true, text: "Match Success Rate (%)" },
            beginAtZero: true,
          },
        },
      }}
    />
  );

  const pricingChart = (
    <Doughnut
      data={{
        labels: [
          "Market Analysis",
          "Dynamic Factors",
          "Demand Prediction",
          "Competition",
          "Quality Score",
        ],
        datasets: [
          {
            data: [25, 20, 20, 15, 20],
            backgroundColor: [
              "#3B82F6",
              "#10B981",
              "#F59E0B",
              "#EF4444",
              "#8B5CF6",
            ],
            borderWidth: 2,
            borderColor: "#fff",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom" },
          title: { display: true, text: "Pricing Algorithm Components" },
        },
      }}
    />
  );

  const demandForecastChart = (
    <Line
      data={{
        labels: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
        datasets: [
          {
            label: "Weekday Demand",
            data: [20, 45, 60, 75, 90, 65],
            borderColor: "#10B981",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            fill: true,
            tension: 0.4,
          },
          {
            label: "Weekend Demand",
            data: [30, 70, 85, 95, 80, 55],
            borderColor: "#F59E0B",
            backgroundColor: "rgba(245, 158, 11, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top" },
          title: {
            display: true,
            text: "Service Demand Patterns Throughout the Day",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "Demand Level (%)" },
          },
        },
      }}
    />
  );

  const pricingOptimizationChart = (
    <Bar
      data={{
        labels: [
          "Peak Hours",
          "Regular Hours",
          "Off-Peak",
          "Weekend",
          "Holiday",
        ],
        datasets: [
          {
            label: "Traditional Pricing",
            data: [100, 100, 100, 100, 100],
            backgroundColor: "rgba(156, 163, 175, 0.8)",
          },
          {
            label: "AI Dynamic Pricing",
            data: [130, 100, 85, 120, 150],
            backgroundColor: "rgba(16, 185, 129, 0.8)",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top" },
          title: {
            display: true,
            text: "Dynamic vs Traditional Pricing Strategy",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "Price Index (%)" },
          },
        },
      }}
    />
  );

  const qualityChart = (
    <Bar
      data={{
        labels: [
          "Service Quality",
          "Timeliness",
          "Communication",
          "Professionalism",
          "Value",
        ],
        datasets: [
          {
            label: "Before AI",
            data: [3.2, 3.1, 2.8, 3.0, 2.9],
            backgroundColor: "rgba(156, 163, 175, 0.8)",
          },
          {
            label: "After AI",
            data: [4.7, 4.8, 4.6, 4.9, 4.5],
            backgroundColor: "rgba(59, 130, 246, 0.8)",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Quality Metrics Improvement" },
        },
        scales: {
          y: { beginAtZero: true, max: 5 },
        },
      }}
    />
  );

  const issuePreventionChart = (
    <PolarArea
      data={{
        labels: [
          "Late Arrivals",
          "Communication Issues",
          "Quality Problems",
          "Pricing Disputes",
          "Scope Changes",
        ],
        datasets: [
          {
            data: [85, 78, 92, 88, 75],
            backgroundColor: [
              "rgba(59, 130, 246, 0.8)",
              "rgba(16, 185, 129, 0.8)",
              "rgba(245, 158, 11, 0.8)",
              "rgba(239, 68, 68, 0.8)",
              "rgba(139, 92, 246, 0.8)",
            ],
            borderWidth: 2,
            borderColor: "#fff",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom" },
          title: { display: true, text: "Issue Prevention Success Rate (%)" },
        },
        scales: {
          r: { beginAtZero: true, max: 100 },
        },
      }}
    />
  );

  const qualityTrendChart = (
    <Line
      data={{
        labels: [
          "Q1 2024",
          "Q2 2024",
          "Q3 2024",
          "Q4 2024",
          "Q1 2025",
          "Q2 2025",
        ],
        datasets: [
          {
            label: "Overall Quality Score",
            data: [3.2, 3.8, 4.2, 4.5, 4.7, 4.8],
            borderColor: "#8B5CF6",
            backgroundColor: "rgba(139, 92, 246, 0.1)",
            fill: true,
            tension: 0.4,
          },
          {
            label: "Customer Complaints",
            data: [25, 18, 12, 8, 5, 3],
            borderColor: "#EF4444",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            fill: true,
            tension: 0.4,
            yAxisID: "y1",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Quality Improvement Over Time" },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 5,
            title: { display: true, text: "Quality Score (1-5)" },
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",
            max: 30,
            title: { display: true, text: "Complaints per 100 bookings" },
          },
        },
      }}
    />
  );

  const customerInsightsChart = (
    <Radar
      data={{
        labels: [
          "Booking Patterns",
          "Service Preferences",
          "Price Sensitivity",
          "Loyalty Factors",
          "Satisfaction Drivers",
        ],
        datasets: [
          {
            label: "Insight Accuracy",
            data: [95, 92, 88, 90, 94],
            borderColor: "#8B5CF6",
            backgroundColor: "rgba(139, 92, 246, 0.2)",
            pointBackgroundColor: "#8B5CF6",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#8B5CF6",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: { display: true, text: "Customer Insight Accuracy (%)" },
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
          },
        },
      }}
    />
  );

  const customerSegmentationChart = (
    <Doughnut
      data={{
        labels: [
          "Frequent Users",
          "Occasional Users",
          "Price-Sensitive",
          "Premium Seekers",
          "New Customers",
        ],
        datasets: [
          {
            data: [25, 30, 20, 15, 10],
            backgroundColor: [
              "#F59E0B",
              "#10B981",
              "#EF4444",
              "#8B5CF6",
              "#3B82F6",
            ],
            borderWidth: 3,
            borderColor: "#fff",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "right" },
          title: { display: true, text: "Customer Segmentation Analysis" },
        },
      }}
    />
  );

  const retentionChart = (
    <Bar
      data={{
        labels: [
          "Month 1",
          "Month 3",
          "Month 6",
          "Month 12",
          "Month 18",
          "Month 24",
        ],
        datasets: [
          {
            label: "Without AI Insights",
            data: [100, 65, 45, 25, 15, 10],
            backgroundColor: "rgba(156, 163, 175, 0.8)",
          },
          {
            label: "With AI Insights",
            data: [100, 85, 75, 60, 50, 45],
            backgroundColor: "rgba(245, 158, 11, 0.8)",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Customer Retention Comparison" },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: { display: true, text: "Retention Rate (%)" },
          },
        },
      }}
    />
  );

  const predictiveAccuracyChart = (
    <Scatter
      data={{
        datasets: [
          {
            label: "Predicted vs Actual Behavior",
            data: [
              { x: 20, y: 22 },
              { x: 35, y: 33 },
              { x: 50, y: 52 },
              { x: 65, y: 63 },
              { x: 80, y: 78 },
              { x: 95, y: 97 },
              { x: 75, y: 76 },
              { x: 40, y: 38 },
            ],
            backgroundColor: "rgba(245, 158, 11, 0.6)",
            borderColor: "#F59E0B",
            pointRadius: 8,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Prediction Accuracy: Predicted vs Actual Customer Behavior",
          },
        },
        scales: {
          x: { title: { display: true, text: "Predicted Behavior Score" } },
          y: { title: { display: true, text: "Actual Behavior Score" } },
        },
      }}
    />
  );

  // Feature data
  const features = [
    {
      title: "Smart Service Matching",
      subtitle: "AI-Powered Professional Matching",
      description:
        "Our advanced machine learning algorithms analyze customer requirements, professional expertise, location, and availability to create perfect matches. Using neural networks and collaborative filtering, we achieve 97% matching accuracy that continuously improves with each interaction.",
      icon: <AIBrainIcon className="w-12 h-12 text-white" />,
      gradient: "from-blue-600 to-blue-800",
      howItWorks: [
        {
          title: "Requirement Analysis",
          description:
            "AI analyzes service requests using NLP to extract requirements including urgency, budget, quality expectations, and specific technical needs from text and images.",
        },
        {
          title: "Professional Profiling",
          description:
            "Creates comprehensive profiles by analyzing skills, ratings, response times, specialty areas, and communication styles across 40+ competency areas.",
        },
        {
          title: "Intelligent Matching",
          description:
            "Considers 50+ factors including location, schedule compatibility, skill alignment, and past performance to generate ranked recommendations.",
        },
        {
          title: "Continuous Learning",
          description:
            "Uses reinforcement learning to improve accuracy by analyzing service outcomes, feedback patterns, and customer preferences.",
        },
      ],
      technologies: [
        "TensorFlow & PyTorch for Deep Learning Models",
        "Advanced Natural Language Processing (NLP) with BERT",
        "Collaborative Filtering & Matrix Factorization",
        "Real-time Data Processing with Apache Kafka",
        "Graph Neural Networks for Relationship Mapping",
        "Ensemble Learning Methods & XGBoost",
        "Geospatial Analysis with PostGIS",
        "Redis for Sub-second Response Caching",
      ],
      architecture:
        "Cloud-native microservices architecture with real-time data pipelines. Processes 1M+ data points daily using Apache Kafka for streaming, Redis for caching, and PostgreSQL with PostGIS for geospatial calculations.",
      benefits: [
        {
          icon: "🎯",
          title: "97% Match Accuracy",
          description:
            "Industry-leading precision in professional matching based on comprehensive analysis of customer needs and professional capabilities",
        },
        {
          icon: "⚡",
          title: "Sub-Second Response",
          description:
            "Lightning-fast recommendations delivered in under 300ms through optimized caching and parallel processing",
        },
        {
          icon: "📈",
          title: "40% Higher Satisfaction",
          description:
            "Dramatically improved customer satisfaction compared to traditional matching systems",
        },
        {
          icon: "🔄",
          title: "Self-Improving Algorithm",
          description:
            "Continuously learns from every interaction to improve future matching accuracy",
        },
      ],
      chart: smartMatchingChart,
      additionalCharts: [
        {
          chart: serviceDistributionChart,
          title: "Service Category Performance",
          description:
            "Distribution of successful matches across different home service categories",
        },
        {
          chart: matchingAccuracyScatter,
          title: "Experience vs Success Rate",
          description:
            "Correlation between professional experience and successful match outcomes",
        },
      ],
      stats: [
        { value: "97%", label: "Match Accuracy" },
        { value: "0.3s", label: "Response Time" },
        { value: "50+", label: "Factors Analyzed" },
        { value: "1M+", label: "Daily Data Points" },
      ],
    },
    {
      title: "Dynamic Pricing Engine",
      subtitle: "Real-time Market Intelligence & Optimization",
      description:
        "AI-powered pricing system that analyzes market conditions, demand patterns, and professional availability to provide fair, competitive pricing. Updates prices every 15 minutes based on real-time data to optimize revenue while maintaining customer satisfaction.",
      icon: <MLIcon className="w-12 h-12 text-white" />,
      gradient: "from-green-600 to-green-800",
      howItWorks: [
        {
          title: "Market Data Collection",
          description:
            "Continuously gathers pricing data from 200+ competitor platforms, local market rates, and economic indicators with updates every 5 minutes.",
        },
        {
          title: "Demand Forecasting",
          description:
            "Analyzes booking patterns, weather data, events, and economic trends to predict service demand up to 30 days with 92% accuracy.",
        },
        {
          title: "Availability Analysis",
          description:
            "Tracks professional availability, workload, and performance metrics to balance supply and demand for optimal pricing.",
        },
        {
          title: "Dynamic Optimization",
          description:
            "Automatically adjusts rates every 15 minutes based on real-time demand, competition, and availability while maintaining profit margins.",
        },
      ],
      technologies: [
        "Time Series Forecasting with LSTM & ARIMA Models",
        "Real-time Analytics with Apache Kafka & Storm",
        "Gradient Boosting Algorithms (XGBoost, LightGBM)",
        "Market Intelligence APIs & Web Scraping",
        "Redis for High-Speed Price Caching",
        "Predictive Analytics with Scikit-learn",
        "Economic Data Integration (GDP, CPI, Housing Index)",
        "A/B Testing Framework for Price Optimization",
      ],
      architecture:
        "Event-driven microservices with streaming data processing. Analyzes 500+ market variables in real-time using Apache Kafka, Redis caching, and handles 10,000+ price calculations per second.",
      benefits: [
        {
          icon: "💰",
          title: "Fair Pricing",
          description:
            "Ensures competitive prices for customers and professionals through market analysis and dynamic adjustments",
        },
        {
          icon: "📊",
          title: "Real-time Response",
          description:
            "Automatically adapts to market conditions and demand changes within 15-minute intervals",
        },
        {
          icon: "⚖️",
          title: "Revenue Optimization",
          description:
            "Maximizes platform revenue while maintaining customer satisfaction and fair compensation",
        },
        {
          icon: "🚀",
          title: "25% Revenue Growth",
          description:
            "Significant revenue increase through intelligent pricing strategies and demand-supply optimization",
        },
      ],
      chart: pricingChart,
      additionalCharts: [
        {
          chart: demandForecastChart,
          title: "Demand Pattern Analysis",
          description:
            "AI-predicted demand patterns throughout the day for optimal pricing decisions",
        },
        {
          chart: pricingOptimizationChart,
          title: "Dynamic vs Traditional Pricing",
          description:
            "Comparison of AI dynamic pricing strategy against traditional fixed pricing models",
        },
      ],
      stats: [
        { value: "15min", label: "Update Frequency" },
        { value: "500+", label: "Variables Tracked" },
        { value: "25%", label: "Revenue Increase" },
        { value: "92%", label: "Forecast Accuracy" },
      ],
    },
    {
      title: "Intelligent Quality Assurance",
      subtitle: "Automated Service Excellence & Issue Prevention",
      description:
        "Comprehensive AI system that monitors service quality in real-time, predicts potential issues, and implements proactive interventions. Uses computer vision, IoT integration, and behavioral analysis to maintain 98% quality scores while reducing complaints by 85%.",
      icon: <PredictiveIcon className="w-12 h-12 text-white" />,
      gradient: "from-purple-600 to-purple-800",
      howItWorks: [
        {
          title: "Real-time Monitoring",
          description:
            "Tracks service progress through GPS, check-ins, photo verification, and IoT sensors to ensure quality and progress.",
        },
        {
          title: "Predictive Detection",
          description:
            "Analyzes patterns from 100,000+ services to predict potential issues before they occur with 85% prevention success.",
        },
        {
          title: "Automated Interventions",
          description:
            "Triggers appropriate responses including notifications, coaching tips, customer updates, and support dispatch based on risk factors.",
        },
        {
          title: "Quality Scoring",
          description:
            "Generates comprehensive quality assessments using 30+ metrics including punctuality, communication, and customer sentiment.",
        },
      ],
      technologies: [
        "Computer Vision for Work Quality Assessment",
        "Sentiment Analysis with BERT & RoBERTa",
        "Anomaly Detection with Isolation Forest",
        "Real-time IoT Integration & Edge Computing",
        "Automated Workflow Engines with Apache Airflow",
        "Predictive Quality Modeling with Random Forest",
        "Natural Language Processing for Communication Analysis",
        "Mobile App SDK for Real-time Data Collection",
      ],
      architecture:
        "Edge computing with cloud-based ML models, processing real-time data from mobile apps, IoT devices, and GPS tracking. Handles 50,000+ quality data points per minute through specialized microservices.",
      benefits: [
        {
          icon: "🏆",
          title: "98% Quality Score",
          description:
            "Maintains consistently high service quality across all categories through continuous monitoring",
        },
        {
          icon: "🔍",
          title: "85% Issue Prevention",
          description:
            "Successfully identifies and prevents majority of potential service issues before they occur",
        },
        {
          icon: "📱",
          title: "Real-time Alerts",
          description:
            "Instant notifications and automated responses for quality deviations enable immediate action",
        },
        {
          icon: "🎓",
          title: "Professional Development",
          description:
            "AI-powered recommendations help professionals continuously improve their skills and service quality",
        },
      ],
      chart: qualityChart,
      additionalCharts: [
        {
          chart: issuePreventionChart,
          title: "Issue Prevention Success Rates",
          description:
            "AI system success in preventing different types of service issues before they occur",
        },
        {
          chart: qualityTrendChart,
          title: "Quality Improvement Timeline",
          description:
            "Overall service quality improvement and complaint reduction over time with AI implementation",
        },
      ],
      stats: [
        { value: "98%", label: "Quality Score" },
        { value: "85%", label: "Issues Prevented" },
        { value: "30+", label: "Quality Metrics" },
        { value: "50K+", label: "Data Points/Min" },
      ],
    },
    {
      title: "Predictive Customer Insights",
      subtitle: "Advanced Behavioral Analytics & Personalization",
      description:
        "Deep learning platform that analyzes customer behavior patterns, preferences, and lifecycle stages to deliver personalized experiences and predict future service needs. Increases customer retention by 60% through advanced segmentation and predictive modeling.",
      icon: <NLPIcon className="w-12 h-12 text-white" />,
      gradient: "from-amber-600 to-amber-800",
      howItWorks: [
        {
          title: "Behavioral Tracking",
          description:
            "Analyzes customer touchpoints including browsing patterns, booking behaviors, and preferences to build detailed profiles with 200+ data points.",
        },
        {
          title: "Predictive Modeling",
          description:
            "Predicts future service needs, optimal booking times, price sensitivity, and churn risk using historical data with 95% accuracy.",
        },
        {
          title: "Personalization Engine",
          description:
            "Creates unique experiences with customized recommendations, personalized pricing, and optimized communication timing.",
        },
        {
          title: "Lifecycle Management",
          description:
            "Identifies customer stages and implements targeted retention strategies including personalized offers and proactive suggestions.",
        },
      ],
      technologies: [
        "Deep Learning Neural Networks (CNN, RNN, LSTM)",
        "Customer Segmentation with K-means & DBSCAN",
        "Behavioral Pattern Recognition with Markov Chains",
        "Recommendation Systems with Matrix Factorization",
        "Churn Prediction with Gradient Boosting",
        "A/B Testing Automation with Multi-armed Bandits",
        "Real-time Personalization with Apache Spark",
        "Customer Data Platform (CDP) Integration",
      ],
      architecture:
        "Data lake architecture with real-time streaming analytics. Deep learning models process customer journey data using Apache Kafka for data ingestion and Spark for large-scale behavioral analysis.",
      benefits: [
        {
          icon: "🎯",
          title: "95% Prediction Accuracy",
          description:
            "Highly accurate predictions of customer needs and behaviors enable proactive service delivery",
        },
        {
          icon: "💝",
          title: "Personalized Experience",
          description:
            "Unique, tailored experiences based on individual preferences and behavior patterns",
        },
        {
          icon: "📈",
          title: "60% Higher Retention",
          description:
            "Significant improvement in customer retention through proactive engagement and personalized offers",
        },
        {
          icon: "🔮",
          title: "Proactive Service Delivery",
          description:
            "Anticipates customer needs before they express them, enabling seamless service suggestions",
        },
      ],
      chart: customerInsightsChart,
      additionalCharts: [
        {
          chart: customerSegmentationChart,
          title: "Customer Segmentation Analysis",
          description:
            "AI-driven customer segmentation for targeted marketing and personalized service delivery",
        },
        {
          chart: retentionChart,
          title: "Retention Impact Analysis",
          description:
            "Customer retention improvement comparison with and without AI-powered insights",
        },
        {
          chart: predictiveAccuracyChart,
          title: "Prediction Accuracy Validation",
          description:
            "Validation of AI prediction accuracy against actual customer behavior outcomes",
        },
      ],
      stats: [
        { value: "95%", label: "Prediction Accuracy" },
        { value: "60%", label: "Retention Increase" },
        { value: "1M+", label: "Data Points Daily" },
        { value: "200+", label: "Behavioral Metrics" },
      ],
    },
  ];

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
