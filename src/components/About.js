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
    className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
  >
    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
      <span className="text-white text-2xl font-bold">{member.initials}</span>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
    <p className="text-gray-600 text-sm leading-relaxed">
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
    <div className="relative bg-white rounded-3xl p-8 mb-4 shadow-lg border border-blue-100 group-hover:shadow-2xl transition-all duration-500">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-3xl group-hover:from-blue-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>

      {/* Floating Icon */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white text-sm">📊</span>
      </div>

      <div className="relative">
        <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-3 group-hover:scale-110 transition-transform duration-300">
          {stat.number}
        </h3>
        <p className="text-gray-600 font-semibold text-lg">{stat.label}</p>

        {/* Progress Line */}
        <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
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
    className="flex items-start space-x-4"
  >
    <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">{value.icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {value.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{value.description}</p>
    </div>
  </motion.div>
);

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress into animation values
  const headerY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

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
    <div className="bg-white overflow-hidden" ref={ref}>
      {/* Hero Section with Enhanced Visual Elements */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-teal-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
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
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 mb-8 shadow-lg"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">
                Trusted by 50,000+ Customers
              </span>
            </motion.div>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl xl:text-6xl font-pj">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 animate-pulse">
                Our Story
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto"
            >
              We&apos;re revolutionizing the home services industry by
              connecting homeowners with trusted professionals through
              cutting-edge technology and unwavering commitment to quality.
            </motion.p>

            {/* Interactive Floating Icons */}
            <div className="flex justify-center space-x-8 mt-12">
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
                  className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-2xl mb-2">{item.icon}</span>
                  <span className="text-xs font-medium text-gray-600">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section with Enhanced Design */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Mission Card with Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
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
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To make quality home services accessible, reliable, and
                  stress-free for everyone. We believe that maintaining your
                  home shouldn&apos;t be a hassle – it should be simple,
                  transparent, and delivered by professionals you can trust.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you need AC repair, deep cleaning, healthcare
                  services, or personal care, we&apos;re here to connect you
                  with vetted professionals who take pride in their work.
                </p>

                {/* Mission Stats */}
                <div className="flex items-center space-x-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-500">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">100%</div>
                    <div className="text-sm text-gray-500">Verified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      30min
                    </div>
                    <div className="text-sm text-gray-500">Response</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Vision Card with Animated Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
              <div
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-transparent bg-clip-padding shadow-xl"
                style={{
                  background:
                    "linear-gradient(white, white) padding-box, linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899) border-box",
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To become the world&apos;s most trusted platform for home
                  services, where quality, convenience, and customer
                  satisfaction converge to create exceptional experiences.
                </p>

                {/* Animated Progress Circles */}
                <div className="flex items-center space-x-8 mt-8">
                  {[
                    { label: "Quality", progress: 95, color: "blue" },
                    { label: "Trust", progress: 98, color: "teal" },
                    { label: "Innovation", progress: 92, color: "purple" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="relative w-16 h-16 mx-auto mb-2">
                        <svg
                          className="w-16 h-16 transform -rotate-90"
                          viewBox="0 0 36 36"
                        >
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray={`${item.progress}, 100`}
                            className={`text-${item.color}-500`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-semibold text-gray-700">
                            {item.progress}%
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Visual Appeal */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tl from-teal-400/10 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full mb-6">
              <span className="text-blue-600 font-semibold text-sm">
                📈 Our Impact
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Thousands
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These numbers represent the trust our customers place in us and
              the quality of service our professional partners deliver every
              single day across the globe.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
            className="flex flex-wrap justify-center gap-6 mt-16"
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
                className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="text-2xl">{badge.icon}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {badge.title}
                  </div>
                  <div className="text-gray-500 text-xs">{badge.subtitle}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our
              customers and support our professional partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind our platform, working tirelessly
              to make home services better for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 border-2 border-dashed border-blue-200 hover:border-blue-300 transition-colors duration-300">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-12 min-h-[400px] flex flex-col items-center justify-center">
                  {/* Camera Icon */}
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-white"
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

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    The Complete Zonomo Team
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 max-w-2xl">
                    Our entire team working together to revolutionize home
                    services. A picture that captures the spirit of
                    collaboration and innovation that drives us forward.
                  </p>
                  <div className="text-blue-500 font-medium">
                    [Team Photo Placeholder - Replace with actual team image]
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a simple idea to a platform serving thousands of customers
              daily.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>

            <div className="space-y-12">
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
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who trust us for their home
              service needs. Quality professionals are just a click away.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-lg"
            >
              Get Started Today
              <svg
                className="w-5 h-5 ml-2"
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
