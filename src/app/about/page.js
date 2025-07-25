"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

import { TypewriterEffectSmooth } from "@/components/ui/typewritter-effect";
import Link from "next/link";

// Content for the sticky scrol
const stickyScrollContent = [
  {
    title: "Pre-Launch Traction",
    description:
      "We’ve already pre-listed 1000+ early customers and onboarded 200+ verified service professionals across categories like electricians, cleaners, yoga trainers, and elder care who are background-checked and highly rated by previous customers.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/Pre-Launch.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
          unoptimized
        />
      </div>
    ),
  },
  {
    title: "Mobile App Launch – August 2025",
    description:
      "No hidden fees, no surprise charges. Following MVP release, we’ll launch our mobile app to make Zonomo even more accessible and convenient for all users.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/Mobile-App-Launch.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
          unoptimized
        />
      </div>
    ),
  },
  {
    title: "Expanding to Tier-2 Cities",
    description:
      "Emergency repairs can't wait. Our network of professionals ensures rapid response times with most urgent requests handled within 30 minutes, keeping your home running smoothly.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/Expanding.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
          unoptimized
        />
      </div>
    ),
  },
  {
    title: "AI Upgrade + Smart Scheduling",
    description:
      "Our intelligent service-matching and scheduling system will continue evolving, making it faster and easier to find the right professional in real-time.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/AI-Upgrade.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
          unoptimized
        />
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

  const words = [
    {
      text: "Proudly",
    },
    {
      text: "Startup",
    },
    {
      text: "India",
    },
    {
      text: "Certified",
    },
    {
      text: "Platform. ",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

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

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 font-inter">
                About{" "}
                <span className="text-purple-600 font-inter">Our Story</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto font-inter px-2 sm:px-0"
              >
                Zonomo is India&apos;s trusted home service marketplace
                connecting users with verified professionals for electrician,
                plumbing, cleaning, fitness, and elderly care services. With
                zero middlemen and transparent pricing, we make home services
                fast, reliable, and affordable
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-inter">
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
                  <div className="aspect-w-18 aspect-h-9 w-full">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[600px] object-cover rounded-xl sm:rounded-3xl"
                    >
                      <source src="/videos/bgabt.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-inter mb-4"
            >
              What&apos;s Next for <span>Zonomo?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto font-inter"
            >
              Discover what makes us India&apos;s most trusted home service
              platform
            </motion.p>
          </div>

          <StickyScroll content={stickyScrollContent} />
        </section>

        {/* Stats Section with Enhanced Visual Appeal */}
        <div className="flex flex-col items-center justify-center min-h-[40rem]  ">
          <p className="text-black dark:text-black text-xs sm:text-base  ">
            recognized for innovation and impact in service-tech
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <Link href="/">
              <button className="cursor-pointer w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                Explore
              </button>
            </Link>

            <button className="w-40 cursor-pointer  h-10 rounded-xl bg-white text-black border border-black hover:bg-blue-300 text-sm">
              Download
            </button>
          </div>
        </div>

        {/* Team Section */}
        <section className="py-12 bg-white sm:py-16 lg:py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                Meet the Founding Team
              </h2>
            </div>

            <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
              <div>
                <Image
                  className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png"
                  alt="Shantanu Sharma - Founder"
                  width={176}
                  height={176}
                  unoptimized
                />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
                  Shantanu Sharma - Founder
                </p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">
                  Visionary behind Zonomo, driving the mission to simplify and
                  democratize home services across India.
                </p>
              </div>

              <div>
                <Image
                  className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png"
                  alt="Sparsh Saria – Chief Financial Officer (CFO)"
                  width={176}
                  height={176}
                  unoptimized
                />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
                  Sparsh Saria – Chief Financial Officer (CFO)
                </p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">
                  Leads Zonomo’s financial planning and strategy, ensuring
                  sustainable growth and cost-efficiency.
                </p>
              </div>

              <div>
                <Image
                  className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png"
                  alt="Ishanvi Verma – Tech Co-Founder"
                  width={176}
                  height={176}
                  unoptimized
                />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
                  Ishanvi Verma – Tech Co-Founder
                </p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">
                  Heads user experience and system design, creating smooth and
                  reliable booking flows for customers and professionals.
                </p>
              </div>

              <div>
                <Image
                  className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png"
                  alt="Rakshith Dasari – Tech Co-Founder"
                  width={176}
                  height={176}
                  unoptimized
                />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
                  Rakshith Dasari – Tech Co-Founder
                </p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">
                  Architect of Zonomo’s platform infrastructure, focused on
                  building a scalable and secure service marketplace.
                </p>
              </div>
            </div>

            <div className="mt-12 sm:mt-16">
              <svg
                className="w-auto h-4 mx-auto text-gray-300"
                viewBox="0 0 172 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
