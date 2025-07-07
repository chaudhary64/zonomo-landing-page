import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roleContent = [
  {
    role: "Homeowner",
    title: "Premium Services for Customers",
    description:
      "Access our vetted network of 50,000+ professionals with guaranteed service quality and 24/7 support.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    cta: "Book Elite Services",
    color: "from-blue-500/20 to-blue-700/20",
    textColor: "text-blue-400",
    stats: [
      { value: "98%", label: "Satisfaction Rate" },
      { value: "30min", label: "Average Response" },
      { value: "50K+", label: "Verified Pros" },
    ],
  },
  {
    role: "Property Manager",
    title: "List Your Services",
    description:
      "Streamline operations with our enterprise-grade platform managing 1000+ properties nationwide.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    cta: "Optimize Your Portfolio",
    color: "from-emerald-500/20 to-emerald-700/20",
    textColor: "text-emerald-400",
    stats: [
      { value: "40%", label: "Cost Reduction" },
      { value: "24/7", label: "Vendor Management" },
      { value: "5-Star", label: "Tenant Ratings" },
    ],
  },
  {
    role: "Service Professional",
    title: "6-Figure Earnings Potential",
    description:
      "Join the elite 15% of professionals who earn $120K+/year through our premium client network.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    cta: "Apply for Partnership",
    color: "from-violet-500/20 to-violet-700/20",
    textColor: "text-violet-400",
    stats: [
      { value: "5X", label: "More Bookings" },
      { value: "$120K+", label: "Top Earners" },
      { value: "0%", label: "Commission Fees" },
    ],
  },
];

export default function OptimizedCarousel() {
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
    const interval = setInterval(nextSlide, 5000);
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
    <div className="relative py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-emerald-400">
              Ultimate Service Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-6xl mx-auto text-center">
            Where premium clients meet elite service professionals
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[600px] sm:h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
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
                <img
                  src={currentContent.image}
                  alt={currentContent.role}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Static Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-end p-10 sm:p-16">
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
                className="max-w-2xl"
              >
                <motion.span
                  className={`inline-flex items-center px-4 py-2 bg-black/30 ${currentContent.textColor} rounded-full text-sm font-medium mb-6`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <span className="w-2 h-2 bg-current rounded-full mr-2" />
                  PREMIUM {currentContent.role.toUpperCase()}
                </motion.span>

                <motion.h3
                  className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  {currentContent.title}
                </motion.h3>

                <motion.p
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {currentContent.description}
                </motion.p>

                {/* Stats */}
                <motion.div
                  className="flex flex-wrap gap-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {currentContent.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-700"
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
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-bold rounded-lg hover:from-slate-600 hover:to-slate-800 transition-all duration-200 flex items-center justify-center transform hover:scale-105 shadow-lg">
                    {currentContent.cta}
                    <svg
                      className="w-5 h-5 ml-2"
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
                  <button className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white/20 hover:border-white/40 transition-all duration-200 transform hover:scale-105">
                    Learn More
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {roleContent.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? "bg-white w-6"
                    : "bg-white/30 w-3 hover:bg-white/50"
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
