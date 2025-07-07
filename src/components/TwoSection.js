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
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % roleContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = roleContent[currentIndex];

  return (
    <div className="relative py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className=" mb-16">
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-emerald-400 items-center">Ultimate Service Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-6xl mx-auto text-center">
            Where premium clients meet elite service professionals
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[600px] sm:h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
          {/* Background Image with Crossfade */}
          <AnimatePresence custom={direction} mode='popLayout'>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ 
                opacity: { duration: 0.8 },
                x: { type: 'spring', stiffness: 300, damping: 30 }
              }}
              className="absolute inset-0"
            >
              <img 
                src={currentContent.image} 
                alt={currentContent.role}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0`} />
            </motion.div>
          </AnimatePresence>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-end p-10 sm:p-16">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl"
              >
                {/* Content remains same as before */}
                <span className={`inline-flex items-center px-4 py-2 bg-black/30 ${currentContent.textColor} rounded-full text-sm font-medium mb-6`}>
                  <span className="w-2 h-2 bg-current rounded-full mr-2 animate-pulse"></span>
                  PREMIUM {currentContent.role.toUpperCase()}
                </span>
                
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  {currentContent.title}
                </h3>
                
                <p className="text-xl text-gray-300 mb-8">
                  {currentContent.description}
                </p>

                {/* Performance Stats */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {currentContent.stats.map((stat, i) => (
                    <div key={i} className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-700">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`px-8 py-4 bg-gradient-to-r ${currentContent.color.replace('/20', '/80')} text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center`}>
                    {currentContent.cta}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {roleContent.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-white w-6' : 'bg-white/30'}`}
                aria-label={`Show ${roleContent[index].role} content`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}