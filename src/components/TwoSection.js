import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const roleContent = [
  {
    role: "Homeowner",
    title: "Trusted Home Services in One Place",
    description:
      "Discover a growing network of professionals offering reliable services, transparent pricing, and customer-first support — all in a few simple taps.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    cta: "Explore Services",
    color: "from-blue-500/20 to-blue-700/20",
    textColor: "text-blue-400",
    stats: [
      { value: "Fast", label: "Booking Process" },
      { value: "Flexible", label: "Scheduling Options" },
      { value: "Secure", label: "AI Voice Command Bookings" },
    ],
  },
  {
    role: "Property Manager",
    title: "Simplify Your Service Operations",
    description:
      "Easily manage property-related services from one dashboard — built for efficiency, clarity, and control. Tailored for property managers and landlords.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    cta: "Start Managing",
    color: "from-emerald-500/20 to-emerald-700/20",
    textColor: "text-emerald-400",
    stats: [
      { value: "All-in-One", label: "Service Dashboard" },
      { value: "Custom", label: "Vendor Requests" },
      { value: "Instant", label: "Status Tracking" },
    ],
  },
  {
    role: "Service Professional",
    title: "Grow Your Local Business",
    description:
      "Join a platform designed to help professionals find new customers, manage jobs efficiently, and build a credible online presence — all with no upfront cost.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    cta: "Join the Network",
    color: "from-violet-500/20 to-violet-700/20",
    textColor: "text-violet-400",
    stats: [
      { value: "No Fees", label: "to Join" },
      { value: "More", label: "Local Visibility" },
      { value: "Tools", label: "to Manage Jobs" },
    ],
  },
];

export default function ResponsiveCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize current content to prevent unnecessary re-renders
  const currentContent = useMemo(
    () => roleContent[currentIndex],
    [currentIndex]
  );

  // Optimized interval with useCallback
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % roleContent.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Simplified animation variants with better performance
  const imageVariants = {
    initial: { opacity: 0, scale: 1.02 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleDotClick = useCallback(
    (index) => {
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    },
    [currentIndex]
  );

  return (
    <div className="relative py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-center leading-tight font-playfair">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-emerald-400">
              Ultimate Service Ecosystem
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-6xl mx-auto text-center px-2 sm:px-4 font-inter">
            Where premium clients meet elite service professionals
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl border border-gray-700">
          {/* Single Background Image with Crossfade */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-full h-full"
              >
                  <Image
                    src={currentContent.image}
                    alt={currentContent.role}
                    className="w-full h-full object-cover"
                    fill
                    loading="eager"
                  />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Static Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-end p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="max-w-full sm:max-w-2xl"
              >
                <motion.span
                  className={`inline-flex items-center px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-black/30 ${currentContent.textColor} rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3 md:mb-4 font-poppins`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-current rounded-full mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">PREMIUM </span>
                  {currentContent.role.toUpperCase()}
                </motion.span>

                <motion.h3
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight font-playfair"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  {currentContent.title}
                </motion.h3>

                <motion.p
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4 md:mb-6 line-clamp-2 sm:line-clamp-3 font-inter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {currentContent.description}
                </motion.p>

                {/* Stats - Mobile First Responsive Design */}
                <motion.div
                  className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6 font-poppins"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {currentContent.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      className="px-1 sm:px-2 md:px-3 py-1 sm:py-2 bg-black/30 backdrop-blur-sm rounded border border-gray-700 text-center min-w-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.4 + i * 0.05,
                        duration: 0.3,
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white truncate font-poppins">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-xs text-gray-400 uppercase tracking-wider leading-tight font-inter">
                        <span className="block">{stat.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <button className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-bold rounded sm:rounded-lg hover:from-slate-600 hover:to-slate-800 transition-all duration-200 flex items-center justify-center transform hover:scale-105 shadow-lg text-xs sm:text-sm md:text-base font-poppins">
                    <span className="truncate">{currentContent.cta}</span>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                  <button className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-transparent text-white font-bold rounded sm:rounded-lg border-2 border-white/20 hover:border-white/40 transition-all duration-200 transform hover:scale-105 text-xs sm:text-sm md:text-base font-poppins">
                    Learn More
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
            {roleContent.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 sm:h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? "bg-white w-4 sm:w-6"
                    : "bg-white/30 w-2 sm:w-3 hover:bg-white/50"
                }`}
                aria-label={`Show ${roleContent[index].role} content`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
