"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MacbookScroll } from "./../../components/ui/macbook-scroll";
import Teams from './../../components/Team';
import TypewriterEffectSmoothDemo from './../../components/typerAbt';
import StickyScrollRevealDemo from './../../components/FeatAbt';
import { StickyScroll } from './../../components/ui/sticky-scroll-reveal';

// Content for the sticky scrol
const stickyScrollContent = [
  {
    title: "Pre-Launch Traction",
    description: "We’ve already pre-listed 1000+ early customers and onboarded 200+ verified service professionals across categories like electricians, cleaners, yoga trainers, and elder care who are background-checked and highly rated by previous customers.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1551603635-c4cbd9424fce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHNjaGVkdWxlfGVufDB8fDB8fHww"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Mobile App Launch – August 2025",
    description: "No hidden fees, no surprise charges. Following MVP release, we’ll launch our mobile app to make Zonomo even more accessible and convenient for all users.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
         <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKaGbDE6g6ISHUBdae4HWFW5lehCGY8GOOg&s"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
      
    ),
  },
  {
    title: "Expanding to Tier-2 Cities",
    description: "Emergency repairs can't wait. Our network of professionals ensures rapid response times with most urgent requests handled within 30 minutes, keeping your home running smoothly.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://plus.unsplash.com/premium_photo-1697730421382-bc8dd92f83ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGNpdGllcyUyMGluZGlhfGVufDB8fDB8fHww"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "AI Upgrade + Smart Scheduling",
    description: "Our intelligent service-matching and scheduling system will continue evolving, making it faster and easier to find the right professional in real-time.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1662468353771-b177773cc281?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVwZGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
];

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

  return (
    <>
      <div className="bg-white overflow-hidden">
        {/* Hero Section with Enhanced Visual Elements */}
        <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-teal-50">

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
                Zonomo is India's trusted home service marketplace connecting
                users with verified professionals for electrician, plumbing,
                cleaning, fitness, and elderly care services. With zero
                middlemen and transparent pricing, we make home services fast,
                reliable, and affordable
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
                    className="flex flex-col items-center p-2 sm:p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 min-w-[70px] sm:min-w-[80px] cursor-pointer"
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
                className="relative ml-auto w-[600px] h-[600px] max-w-2xl"
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
                      <source src="/videoes/missionvid.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Minimal play button indicator */}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sticky Scroll Section */}
        <section className="relative">
          {/* Section Header */}
          <div className="relative px-3 mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8 py-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-4"
            >
              What's Next for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500">
                Zonomo?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto font-inter"
            >
              Discover what makes us India's most trusted home service platform
            </motion.p>
          </div>
          
          <StickyScroll content={stickyScrollContent} />
        </section>

        {/* Stats Section with Enhanced Visual Appeal */}
        <TypewriterEffectSmoothDemo/>
        
        <Teams/>
      </div>
      
    </>
  );
}

export default About;