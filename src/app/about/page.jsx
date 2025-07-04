"use client";
import React, { useState } from "react";

const ComponentName = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-x-hidden bg-gray-50">
      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="#"
                className="flex rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
                  alt="Zonomo logo"
                />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                className="text-gray-900 focus:outline-none"
              >
                {expanded ? (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-opacity-50"
              >
                Features
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-opacity-50"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-opacity-50"
              >
                Automation
              </a>
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-opacity-50"
              >
                Customer Login
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600"
              >
                Sign up
              </a>
            </div>
          </div>

          {expanded && (
            <nav className="lg:hidden pt-6">
              <div className="px-1 pb-6">
                <div className="grid gap-y-5">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:bg-gray-100 rounded-xl px-4 py-2"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:bg-gray-100 rounded-xl px-4 py-2"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:bg-gray-100 rounded-xl px-4 py-2"
                  >
                    Automation
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:bg-gray-100 rounded-xl px-4 py-2"
                  >
                    Customer Login
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 mt-2 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600 font-inter">
              Smart email campaign builder, made for Developers
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Turn your visitors into profitable{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-xl opacity-30" />
                <span className="relative">business</span>
              </span>
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-5 mt-9">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600 sm:w-auto"
              >
                Get more customers
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 border-2 border-gray-400 rounded-xl hover:bg-gray-900 hover:text-white sm:mt-0 sm:w-auto"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M8.18 13.426C6.86 14.392 5 13.448 5 11.811V5.439C5 3.802 6.86 2.858 8.18 3.824L12.54 7.01C13.634 7.81 13.634 9.441 12.54 10.24L8.18 13.426Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Watch free demo
              </a>
            </div>

            <p className="mt-8 text-base text-gray-500">
              60 Days free trial · No credit card required
            </p>
          </div>
        </div>

        <div className="pb-12 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50" />
            <div className="relative mx-auto lg:max-w-6xl">
              <video
                className="transform scale-110 rounded-xl shadow-xl"
                src="/images/shimla.mp4" // Update this to your path
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentName;
