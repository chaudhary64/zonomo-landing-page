"use client";

import {
  Check,
  Eye,
  Clock,
  MessageSquare,
  TrendingUp,
  CreditCard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useState, useEffect, useRef } from "react";

export default function ServiceProvidersSection() {
  const [showProvider, setShowProvider] = useState(true);
  const autoSwitchRef = useRef();

  // Autoswitch logic
  useEffect(() => {
    // Clear any previous interval
    if (autoSwitchRef.current) clearInterval(autoSwitchRef.current);
    autoSwitchRef.current = setInterval(() => {
      setShowProvider((prev) => !prev);
    }, 15000); // 10 seconds
    return () => clearInterval(autoSwitchRef.current);
  }, []);

  // Manual override resets timer
  const handleSwitch = (val) => {
    setShowProvider(val);
    if (autoSwitchRef.current) {
      clearInterval(autoSwitchRef.current);
      autoSwitchRef.current = setInterval(() => {
        setShowProvider((prev) => !prev);
      }, 15000);
    }
  };
  const providerData = {
    heading: "What Service Providers Get",
    description:
      "Joining Zonomo comes with exclusive benefits for professionals",
    providerBenefits: [
      {
        icon: Check,
        title: "No Agency Cuts",
        description:
          "Work independently and keep what you earn — no middlemen taking commissions.",
        color: "from-emerald-500 to-green-400",
      },
      {
        icon: Eye,
        title: "More Visibility",
        description:
          "Get discovered by high-intent users looking for your service in real-time.",
        color: "from-blue-500 to-cyan-400",
      },
      {
        icon: Clock,
        title: "Flexible Scheduling",
        description:
          "Work on your own terms — choose your working hours and availability.",
        color: "from-purple-500 to-pink-400",
      },
      {
        icon: MessageSquare,
        title: "Direct Communication",
        description:
          "Chat with clients, accept or reject requests, and build long-term relationships.",
        color: "from-orange-500 to-yellow-400",
      },
      {
        icon: TrendingUp,
        title: "Growth Support",
        description:
          "Get access to reviews, ratings, and tools to help grow your reputation.",
        color: "from-indigo-500 to-blue-400",
      },
      {
        icon: CreditCard,
        title: "Fast Payments",
        description: "Receive payments quickly and securely after each job.",
        color: "from-teal-500 to-emerald-400",
      },
    ],
  };

  const clientData = {
    heading: "What Clients Get",
    description:
      "Experience seamless service booking and peace of mind with Zonomo",
    clientBenefits: [
      {
        icon: Eye,
        title: "Verified Professionals",
        description:
          "Book only trusted, background-checked service providers for your needs.",
        color: "from-green-500 to-emerald-400",
      },
      {
        icon: Clock,
        title: "On-Demand Scheduling",
        description:
          "Choose your preferred time and get services when you need them.",
        color: "from-blue-500 to-cyan-400",
      },
      {
        icon: MessageSquare,
        title: "Direct Communication",
        description:
          "Chat directly with providers to clarify requirements and get updates.",
        color: "from-purple-500 to-pink-400",
      },
      {
        icon: CreditCard,
        title: "Secure Payments",
        description:
          "Pay safely through the platform with multiple payment options.",
        color: "from-yellow-500 to-orange-400",
      },
      {
        icon: Check,
        title: "Satisfaction Guarantee",
        description:
          "Enjoy quality assurance and support for every booking you make.",
        color: "from-indigo-500 to-blue-400",
      },
      {
        icon: TrendingUp,
        title: "Exclusive Offers",
        description:
          "Access special deals, discounts, and loyalty rewards as a valued client.",
        color: "from-teal-500 to-green-400",
      },
    ],
  };

  // Animation variants for fade/slide
  const listVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  // Select data based on toggle
  const activeData = showProvider ? providerData : clientData;
  const benefits = showProvider
    ? providerData.providerBenefits
    : clientData.clientBenefits;

  return (
    <section
      id="service-providers-section"
      className="bg-black text-white px-3 py-14 md:py-20 lg:py-40 flex items-start sm:items-center relative overflow-hidden"
      aria-labelledby="benefits-section-heading"
    >
      <div className="w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        {/* Toggle Indicator */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="flex gap-2 sm:gap-4 items-center bg-gray-800 rounded-full px-1.5 py-1.5 sm:px-2 sm:py-2 shadow-lg">
            <button
              className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300 focus:outline-none cursor-pointer ${
                showProvider
                  ? "bg-violet-500 text-black"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => handleSwitch(true)}
            >
              Service Providers
            </button>
            <span className="text-gray-400 font-bold text-base">|</span>
            <button
              className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300 focus:outline-none cursor-pointer ${
                !showProvider
                  ? "bg-violet-500 text-black"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => handleSwitch(false)}
            >
              Clients
            </button>
          </div>
        </div>

        {/* Animated Section Heading */}
        <header className="text-center mb-10 sm:mb-16 px-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.h2
              id="benefits-section-heading"
              key={activeData.heading}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-SpaceGrotesk"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {activeData.heading}
            </motion.h2>
          </AnimatePresence>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={activeData.description}
              className="text-base xs:text-lg sm:text-xl text-gray-300 max-w-full sm:max-w-3xl mx-auto leading-relaxed font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {activeData.description}
            </motion.p>
          </AnimatePresence>
        </header>

        {/* Animated Benefits List */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={showProvider ? "provider" : "client"}
            className="space-y-6 sm:space-y-8 max-w-full sm:max-w-2xl mx-auto"
            variants={listVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ staggerChildren: 0.2, duration: 0.5 }}
            aria-label={activeData.heading}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.li
                  key={index}
                  className="relative z-0 list-none"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.07 }}
                  exit={{ opacity: 0, y: -40 }}
                >
                  {/* Static Background */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.color} opacity-10`}
                  />

                  {/* Connection Line */}
                  {index < benefits.length - 1 && (
                    <div className="hidden xs:block absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-blue-500/50 to-transparent" />
                  )}

                  {/* Main Card */}
                  <article className="relative bg-gray-900/50 backdrop-blur-sm p-4 xs:p-6 sm:p-8 rounded-2xl border border-gray-700/50">
                    <div className="flex flex-col xs:flex-row items-start gap-4 xs:gap-6">
                      {/* Icon Container */}
                      <div className="relative shrink-0 mb-2 xs:mb-0">
                        <div
                          className={`w-12 h-12 xs:w-16 xs:h-16 rounded-xl bg-gradient-to-br ${benefit.color} p-0.5`}
                        >
                          <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                            <Icon
                              className="w-7 h-7 xs:w-8 xs:h-8 text-white"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 xs:mb-3 text-white font-inter">
                          {benefit.title}
                        </h3>
                        <p className="text-base xs:text-lg sm:text-lg leading-relaxed text-gray-200 font-inter">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
