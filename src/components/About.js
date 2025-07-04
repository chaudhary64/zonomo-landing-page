"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

// Team Member Card Component
const TeamMemberCard = ({ member, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300"
  >
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
      <span className="text-white text-lg sm:text-xl md:text-2xl font-bold font-poppins">
        {member.initials}
      </span>
    </div>
    <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 font-poppins">
      {member.name}
    </h3>
    <p className="text-blue-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm md:text-base font-inter">
      {member.role}
    </p>
    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-inter">
      {member.description}
    </p>
  </motion.div>
);

// Stats Counter Component with Enhanced Animation
const StatCard = ({ stat, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="text-center group"
  >
    <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-3 sm:mb-4 shadow-lg border border-blue-100 group-hover:shadow-2xl transition-all duration-500">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-2xl sm:rounded-3xl group-hover:from-blue-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>

      {/* Floating Icon */}
      <div className="absolute -top-2 sm:-top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white text-xs sm:text-sm">📊</span>
      </div>

      <div className="relative">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 font-poppins">
          {stat.number}
        </h3>
        <p className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg font-inter">
          {stat.label}
        </p>

        {/* Progress Line */}
        <div className="mt-3 sm:mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: delay + 0.5 }}
            className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

// Value Card Component
const ValueCard = ({ value, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="flex items-start space-x-3 sm:space-x-4"
  >
    <div className="bg-blue-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
      {value.icon}
    </div>
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 font-poppins">
        {value.title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-inter">
        {value.description}
      </p>
    </div>
  </motion.div>
);

function About() {
  const headerRef = useRef(null);

  // Separate useScroll for header animation
  const { scrollYProgress: headerScrollProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "center"],
  });

  // Transform scroll progress into animation values for header
  const headerY = useTransform(headerScrollProgress, [0, 1], [50, 0]);
  const headerOpacity = useTransform(headerScrollProgress, [0, 1], [0, 1]);

  // Transform values for Interactive Floating Icons
  const iconsY = useTransform(headerScrollProgress, [0, 1], [80, 0]);
  const iconsOpacity = useTransform(headerScrollProgress, [0, 1], [0, 1]);
  const iconsScale = useTransform(headerScrollProgress, [0, 1], [0.8, 1]);

  // Team data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      initials: "SJ",
      description:
        "Visionary leader with 15+ years in the service industry, passionate about connecting quality professionals with homeowners.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      initials: "MC",
      description:
        "Tech innovator focused on building seamless platforms that make booking home services effortless and reliable.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      initials: "ER",
      description:
        "Operations expert ensuring every service provider meets our high standards of quality and professionalism.",
    },
    {
      name: "David Thompson",
      role: "Customer Success Manager",
      initials: "DT",
      description:
        "Dedicated to ensuring every customer has an exceptional experience from booking to service completion.",
    },
  ];

  // Stats data
  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "5K+", label: "Trusted Professionals" },
    { number: "100+", label: "Cities Served" },
    { number: "4.9★", label: "Average Rating" },
  ];

  // Company values
  const values = [
    {
      title: "Quality First",
      description:
        "We rigorously vet every professional to ensure you receive top-quality service every time.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Reliability",
      description:
        "Count on us for dependable service providers who show up on time and get the job done right.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Transparency",
      description:
        "Clear pricing, honest reviews, and open communication throughout your service experience.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "Leveraging cutting-edge technology to make home services more accessible and convenient.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Enhanced Visual Elements */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          {/* <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl sm:blur-3xl"></div> */}
          {/* <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-teal-400/20 to-blue-400/20 rounded-full blur-xl sm:blur-3xl"></div> */}
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-100/30 to-teal-100/30 rounded-full blur-xl sm:blur-3xl"></div> */}
        </div>

        <div className="relative px-3 mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8">
          <motion.div
            ref={headerRef}
            className="text-center"
            style={{
              opacity: headerOpacity,
              y: headerY,
            }}
          >
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-3 py-2 sm:px-4 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6 sm:mb-8 shadow-lg"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-medium text-gray-700 font-inter">
                Trusted by 50,000+ Customers
              </span>
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 font-poppins">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 animate-pulse font-playfair">
                Our Story
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto font-inter px-2 sm:px-0"
            >
              We&apos;re revolutionizing the home services industry by
              connecting homeowners with trusted professionals through
              cutting-edge technology and unwavering commitment to quality.
            </motion.p>

            {/* Interactive Floating Icons */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-12 px-2 sm:px-0"
              style={{
                opacity: iconsOpacity,
                y: iconsY,
                scale: iconsScale,
              }}
            >
              {[
                { icon: "🏠", label: "Home Services" },
                { icon: "⚡", label: "Fast Response" },
                { icon: "🛡️", label: "Trusted Pros" },
                { icon: "⭐", label: "5-Star Quality" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center p-2 sm:p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 min-w-[70px] sm:min-w-[80px]"
                >
                  <span className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">
                    {item.icon}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-gray-600 font-inter text-center leading-tight">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section with Enhanced Design */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative px-3 mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Mission Card with Glow Effect */}
              <div className="absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-xl">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-poppins">
                    Our Mission
                  </h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 font-inter">
                  To make quality home services accessible, reliable, and
                  stress-free for everyone. We believe that maintaining your
                  home shouldn&apos;t be a hassle – it should be simple,
                  transparent, and delivered by professionals you can trust.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-inter">
                  Whether you need AC repair, deep cleaning, healthcare
                  services, or personal care, we&apos;re here to connect you
                  with vetted professionals who take pride in their work.
                </p>

                {/* Mission Stats */}
                <div className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-6 mt-6 sm:mt-8">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 font-poppins">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 font-inter">
                      Support
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-teal-600 font-poppins">
                      100%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 font-inter">
                      Verified
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600 font-poppins">
                      30min
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 font-inter">
                      Response
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative ml-auto w-[600px] h-[600px] max-w-2xl" // Added ml-auto and increased max-width
            >
              {/* Simplified Video Container without border */}
              <div className="relative bg-transparent rounded-xl sm:rounded-3xl overflow-hidden shadow-xl">
                {/* AI Video Player - Larger size */}
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[600px] object-cover rounded-2xl sm:rounded-3xl"
                  >
                    <source src="/images/missionvid.mp4" type="video/mp4" />
                    <source src="/images/missionvid.mp4" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Minimal play button indicator */}
                  
                </div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Visual Appeal */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-tl from-teal-400/10 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative px-3 mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full mb-4 sm:mb-6">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm font-inter">
                📈 Our Impact
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 font-playfair">
                Thousands
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter px-2 sm:px-0">
              These numbers represent the trust our customers place in us and
              the quality of service our professional partners deliver every
              single day across the globe.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} delay={index * 0.15} />
            ))}
          </div>

          {/* Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-10 sm:mt-12 lg:mt-16"
          >
            {[
              {
                icon: "🏆",
                title: "Industry Leader",
                subtitle: "2024 Excellence Award",
              },
              {
                icon: "⭐",
                title: "Top Rated",
                subtitle: "Customer Choice 2024",
              },
              { icon: "🛡️", title: "Verified", subtitle: "Trusted Platform" },
            ].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center space-x-2 sm:space-x-3 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl px-3 py-3 sm:px-4 sm:py-4 md:px-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="text-lg sm:text-xl md:text-2xl">
                  {badge.icon}
                </span>
                <div>
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm font-poppins">
                    {badge.title}
                  </div>
                  <div className="text-gray-500 text-[10px] sm:text-xs font-inter">
                    {badge.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="px-3 mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-poppins">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-inter px-2 sm:px-0">
              These principles guide everything we do and shape how we serve our
              customers and support our professional partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="px-3 mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-poppins">
              Meet Our Team
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-inter px-2 sm:px-0">
              The passionate individuals behind our platform, working tirelessly
              to make home services better for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} delay={index * 0.1} />
            ))}
          </div>

          {/* Team Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-dashed border-blue-200 hover:border-blue-300 transition-colors duration-300">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center">
                  {/* Camera Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    The Complete Zonomo Team
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-2xl px-2 sm:px-0">
                    Our entire team working together to revolutionize home
                    services. A picture that captures the spirit of
                    collaboration and innovation that drives us forward.
                  </p>
                  <div className="text-blue-500 font-medium text-xs sm:text-sm">
                    [Team Photo Placeholder - Replace with actual team image]
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="px-3 mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Journey
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
              From a simple idea to a platform serving thousands of customers
              daily.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2022",
                  title: "The Beginning",
                  description:
                    "                    Founded with a vision to simplify home services and connect homeowners with trusted professionals.",
                },
                {
                  year: "2023",
                  title: "Platform Launch",
                  description:
                    "Launched our technology platform with initial focus on AC repair and cleaning services in 5 cities.",
                },
                {
                  year: "2024",
                  title: "Rapid Expansion",
                  description:
                    "Expanded to 50+ cities and added healthcare, personal care, and specialized maintenance services.",
                },
                {
                  year: "2025",
                  title: "Innovation Focus",
                  description:
                    "Introducing AI-powered matching, predictive maintenance alerts, and enhanced customer experience features.",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0
                        ? "pr-4 sm:pr-6 lg:pr-8 text-right"
                        : "pl-4 sm:pl-6 lg:pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                      <span className="inline-block px-2 py-1 sm:px-3 text-xs sm:text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-3 sm:mb-4">
                        {milestone.year}
                      </span>
                      <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-2 sm:border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="px-3 mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
              Join thousands of satisfied customers who trust us for their home
              service needs. Quality professionals are just a click away.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold text-blue-600 bg-white rounded-lg sm:rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-lg"
            >
              Get Started Today
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
