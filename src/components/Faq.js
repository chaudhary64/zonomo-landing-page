"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    id: 1,
    question: "How do I book a service on Zonomo?",
    answer:
      "Booking a service is simple! Just browse our services, select what you need, choose your preferred time slot, and confirm your booking. Our verified professionals will be assigned to your request within minutes.",
  },
  {
    id: 2,
    question: "Are all service professionals verified and trusted?",
    answer:
      "Yes, absolutely! All our service professionals go through a rigorous verification process including background checks, skill assessments, and customer reviews. We only partner with trusted and experienced professionals.",
  },
  {
    id: 3,
    question: "What types of services does Zonomo offer?",
    answer:
      "We offer a wide range of urban services including AC repairs, home cleaning, laundry services, medical examinations, beauty treatments like facial massage, vacuum cleaning, plumbing, electrical work, and many more professional services.",
  },
  {
    id: 4,
    question: "How much do the services cost and how do I pay?",
    answer:
      "Service costs vary depending on the type and complexity of the service. You'll see transparent pricing before booking. We accept multiple payment methods including credit/debit cards, digital wallets, and cash on delivery.",
  },
  {
    id: 5,
    question: "Can I reschedule or cancel my booking?",
    answer:
      "Yes, you can reschedule or cancel your booking up to 2 hours before the scheduled time without any charges. For cancellations within 2 hours, a minimal cancellation fee may apply depending on the service.",
  },
  {
    id: 6,
    question: "What if I&apos;m not satisfied with the service?",
    answer:
      "Your satisfaction is our priority! If you&apos;re not happy with the service, you can report it through our app. We offer service guarantees, and if needed, we&apos;ll send another professional to redo the work at no extra cost.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white sm:py-20 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium bg-blue-100 text-blue-800 rounded-full"
          >
            <span className="mr-2">❓</span>
            Frequently Asked Questions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Got Questions?
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
              We&apos;ve Got Answers
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="mt-6 text-lg leading-relaxed text-gray-600"
          >
            Everything you need to know about Zonomo&apos;s services and how we make
            urban services more accessible and convenient.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.15, delay: 0.05 }}
                          className="pt-4 border-t border-gray-100"
                        >
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Still have questions?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.35 }}
              className="text-blue-100 mb-8 text-lg"
            >
              Our customer support team is here to help you 24/7
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Live Chat
              </motion.button>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FAQ;
