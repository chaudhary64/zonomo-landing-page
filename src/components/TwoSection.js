"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roleContent = [
  {
    role: 'Homeowner',
    title: 'Premium Services for Customers',
    description: 'Access our vetted network of 50,000+ professionals with guaranteed service quality and 24/7 support.',
    image: '/images/customer.jpg',
    cta: 'Book Elite Services',
    color: 'from-blue-500/20 to-blue-700/20',
    textColor: 'text-blue-400',
    stats: [
      { value: '98%', label: 'Satisfaction Rate' },
      { value: '30min', label: 'Average Response' },
      { value: '50K+', label: 'Verified Pros' }
    ]
  },
  {
    role: 'Property Manager',
    title: 'List Your Services',
    description: 'Streamline operations with our enterprise-grade platform managing 1000+ properties nationwide.',
    image: '/images/service.jpg',
    cta: 'Optimize Your Portfolio',
    color: 'from-emerald-500/20 to-emerald-700/20',
    textColor: 'text-emerald-400',
    stats: [
      { value: '40%', label: 'Cost Reduction' },
      { value: '24/7', label: 'Vendor Management' },
      { value: '5-Star', label: 'Tenant Ratings' }
    ]
  },
  {
    role: 'Service Professional',
    title: '6-Figure Earnings Potential',
    description: 'Join the elite 15% of professionals who earn $120K+/year through our premium client network.',
    image: '/images/business.jpg',
    cta: 'Apply for Partnership',
    color: 'from-violet-500/20 to-violet-700/20',
    textColor: 'text-violet-400',
    stats: [
      { value: '5X', label: 'More Bookings' },
      { value: '$120K+', label: 'Top Earners' },
      { value: '0%', label: 'Commission Fees' }
    ]
  }
];

export default function InvestorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roleContent.length);
        setIsTransitioning(false);
      }, 150);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = roleContent[currentIndex];

  // Eye-catching transition variants
  const imageVariants = {
    initial: { opacity: 0, scale: 1.1, rotate: 1 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.9, rotate: -1 }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 50, x: -30, rotateX: 10 },
    animate: { opacity: 1, y: 0, x: 0, rotateX: 0 },
    exit: { opacity: 0, y: -30, x: 30, rotateX: -10 }
  };

  return (
    <div className="relative py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-emerald-400 items-center">
              Ultimate Service Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-6xl mx-auto text-center">
            Where premium clients meet elite service professionals
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[600px] sm:h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
          
          {/* Background Images - Preloaded and Crossfaded */}
          <div className="absolute inset-0">
            {roleContent.map((content, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial={false}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 1.05,
                  rotate: index === currentIndex ? 0 : 2
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.65, 0.46, 0.45, 0.94],
                  scale: { duration: 1.4 },
                  rotate: { duration: 1.6 }
                }}
              >
                <img
                  src={content.image}
                  alt={content.role}
                  className="w-full h-full object-cover"
                  loading="eager"
                  style={{ willChange: 'transform' }}
                />
              </motion.div>
            ))}
          </div>

          {/* Static Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent pointer-events-none" />

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
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }}
                className="max-w-2xl"
              >
                <motion.span 
                  className={`inline-flex items-center px-4 py-2 bg-black/30 ${currentContent.textColor} rounded-full text-sm font-medium mb-6`}
                  initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-current rounded-full mr-2"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  PREMIUM {currentContent.role.toUpperCase()}
                </motion.span>

                <motion.h3 
                  className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
                >
                  {currentContent.title}
                </motion.h3>

                <motion.p 
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20, x: -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                >
                  {currentContent.description}
                </motion.p>

                {/* Stats */}
                <motion.div 
                  className="flex flex-wrap gap-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, staggerChildren: 0.1 }}
                >
                  {currentContent.stats.map((stat, i) => (
                    <motion.div 
                      key={i} 
                      className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-700"
                      initial={{ opacity: 0, scale: 0.5, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        delay: 0.8 + i * 0.15,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <motion.div 
                        className="text-2xl font-bold text-white"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.9 + i * 0.15 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-bold rounded-lg hover:from-slate-600 hover:to-slate-800 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg">
                    {currentContent.cta}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
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
                onClick={() => {
                  if (index !== currentIndex) {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsTransitioning(false);
                    }, 100);
                  }
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-white w-6' 
                    : 'bg-white/30 w-3 hover:bg-white/50'
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