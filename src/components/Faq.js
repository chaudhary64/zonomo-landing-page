"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

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
  const [visibleItems, setVisibleItems] = useState(new Set());

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(
              (prev) => new Set([...prev, entry.target.dataset.id])
            );
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const items = document.querySelectorAll("[data-faq-item]");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id = "faq"className="py-16 bg-gradient-to-br from-gray-50 to-white sm:py-20 lg:py-24 min-h-screen">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full transform transition-all duration-500 opacity-0 translate-y-4 animate-fade-in shadow-lg"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="mr-2 animate-bounce">❓</span>
            <span className="font-inter">Frequently Asked Questions</span>
          </div>

          <h2
            className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl transform transition-all duration-500 opacity-0 translate-y-4 animate-fade-in font-poppins"
            style={{ animationDelay: "0.2s" }}
          >
            Got Questions?
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent animate-gradient font-playfair">
              We&apos;ve Got Answers
            </span>
          </h2>

          <p
            className="mt-6 text-lg leading-relaxed text-gray-600 transform transition-all duration-500 opacity-0 translate-y-4 animate-fade-in font-inter"
            style={{ animationDelay: "0.3s" }}
          >
            Everything you need to know about Zonomo&apos;s services and how we
            make urban services more accessible and convenient.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                data-faq-item
                data-id={faq.id}
                className={`border border-gray-200 rounded-2xl shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:border-blue-300 transform ${
                  visibleItems.has(faq.id.toString())
                    ? "opacity-100 translate-y-0 rotate-0"
                    : "opacity-0 translate-y-10 rotate-1"
                } ${
                  activeId === faq.id
                    ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300 shadow-lg"
                    : "bg-white"
                }`}
                style={{
                  transitionDelay: `${index * 0.08}s`,
                  willChange: "transform, opacity",
                }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-6 text-left rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-blue-800 transition-colors duration-300 font-poppins">
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 p-2 rounded-full transition-all duration-400 ease-out ${
                        activeId === faq.id
                          ? "rotate-180 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg scale-110"
                          : "rotate-0 bg-gray-100 group-hover:bg-blue-100 group-hover:scale-105"
                      }`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-colors duration-300 ${
                          activeId === faq.id
                            ? "text-white"
                            : "text-gray-600 group-hover:text-blue-600"
                        }`}
                      />
                    </div>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-out ${
                    activeId === faq.id
                      ? "max-h-96 opacity-100 transform translate-y-0"
                      : "max-h-0 opacity-0 transform -translate-y-4"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div
                      className={`pt-4 border-t border-gray-200 transition-all duration-300 ${
                        activeId === faq.id ? "animate-slide-in" : ""
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed font-inter">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar with gradient */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #2563eb, #7c3aed);
        }

        /* Enhanced hover effects */
        .group:hover .animate-bounce {
          animation: bounce 1s infinite;
        }

        /* Pulse effect for active items */
        .bg-gradient-to-r.from-blue-50 {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        /* Micro animations */
        @media (prefers-reduced-motion: no-preference) {
          * {
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
