import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Coming__Soon = ({ isAppear, setAppear }) => {
  return (
    <AnimatePresence>
      {isAppear && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <section className="flex flex-col items-center justify-center text-center w-full h-full">
            <motion.div
              className="bg-indigo-100 border border-indigo-300 rounded-2xl p-8 shadow-xl w-full max-w-3xl sm:p-16 relative"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            >
              {/* Cross Button */}
              <button
                onClick={() => setAppear(false)}
                aria-label="Close"
                className="absolute top-4 right-4 text-indigo-700 hover:text-red-500 text-3xl font-bold focus:outline-none cursor-pointer"
                style={{ lineHeight: 1 }}
              >
                &times;
              </button>
              <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 sm:text-5xl md:text-6xl sm:mb-8">
                We&rsquo;ll be live soon!
              </h1>
              <p className="text-lg text-gray-700 mb-8 sm:text-xl md:text-2xl sm:mb-10">
                We&rsquo;ll be available on both App Store and Play Store.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-8 w-full max-w-xs sm:max-w-lg md:max-w-xl mx-auto">
                <Image
                  src="/badges/ios-donwload.webp"
                  alt="App Store"
                  width={200}
                  height={70}
                  className="h-auto max-w-[180px] sm:max-w-[200px] md:max-w-[220px] drop-shadow-lg"
                  style={{ height: "auto" }}
                  priority
                />
                <Image
                  src="/badges/android-download.webp"
                  alt="Play Store"
                  width={200}
                  height={70}
                  className="h-auto max-w-[180px] sm:max-w-[200px] md:max-w-[220px] drop-shadow-lg"
                  style={{ height: "auto" }}
                  priority
                />
              </div>
            </motion.div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Coming__Soon;
