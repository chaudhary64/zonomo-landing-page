"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-[400px] bg-gray-100 p-8">
      <motion.div
        className="relative rounded-xl w-[220px] h-[300px] bg-gray-50 shadow-xl"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '2000px'
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Book content */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xl font-bold text-gray-800">Hello</p>
        </motion.div>

        {/* Book cover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl shadow-xl flex items-center justify-center cursor-pointer"
          style={{
            transformOrigin: 'left center',
            backfaceVisibility: 'hidden'
          }}
          animate={{
            rotateY: isHovered ? -80 : 0,
            boxShadow: isHovered 
              ? '2px 2px 15px rgba(0,0,0,0.3)' 
              : '1px 1px 12px rgba(0,0,0,0.2)'
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20
          }}
        >
          <motion.p 
            className="text-xl font-bold text-gray-800"
            animate={{
              scale: isHovered ? 0.9 : 1,
              opacity: isHovered ? 0.7 : 1
            }}
          >
            Hover Me
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;