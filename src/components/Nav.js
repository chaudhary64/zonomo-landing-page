"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const handleServicesClick = (e) => {
    // Only show loader for Services link
    if (e.currentTarget.href.includes("/service-pro")) {
      e.preventDefault();
      setShowLoader(true);
      // Navigate after showing loader
      setTimeout(() => {
        window.location.href = "/service-pro";
      }, 1000); // Match this duration with your GIF length
    }
  };

  return (
    <>
      {showLoader && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <img
            src="/images/Circles-menu-3.gif"
            alt="Loading..."
            className="w-32 h-32 mb-6 "
          />
        </div>
      )}
      <nav className="bg-white sticky top-0 z-50">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded font-poppins">
                Z
              </div>
              <span className="font-semibold text-lg text-gray-900 font-poppins">
                Zonomo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-black font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
              >
                Home
              </Link>
              <Link
                href="#features"
                className="text-gray-700 hover:text-black font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
              >
                Features
              </Link>
              <Link
                onClick={handleServicesClick}
                href="/service-pro"
                className="text-gray-700 hover:text-black font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
              >
                Services
              </Link>
              
              <Link
                href="/about"
                className="text-gray-700 hover:text-black font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
              >
                About us
              </Link>
              <Link
                href="#faq"
                className="text-gray-700 hover:text-black font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
              >
                FAQ
              </Link>
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden lg:flex items-center">
              <Link
                href="https://zonomo-draft-eight.vercel.app/"
                className="bg-black text-white font-medium px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-poppins min-h-[2.25rem] min-w-[5.5rem] flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#features"
                  className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/service-pro"
                  className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                  onClick={(e) => {
                    handleServicesClick(e);
                    setIsMenuOpen(false);
                  }}
                >
                  Services
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </Link>
                <Link
                  href="#faq"
                  className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <Link
                    href="https://zonomo-draft-eight.vercel.app/"
                    className="bg-black text-white font-medium px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-center font-poppins min-h-[2.25rem] min-w-[5.5rem] flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

/*
{loader && <div className="flex flex-col items-center justify-center h-screen px-4">
                          <img src="/images/Hourglass.gif" alt="Loading..." className="w-32 h-32 mb-6" />
                          <p className="text-lg font-semibold text-gray-600">Hold Tight, opening your services</p>
                        </div>}

*/
