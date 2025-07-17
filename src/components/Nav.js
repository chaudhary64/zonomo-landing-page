"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
            <Link
              href="/service-pro"
              className="text-gray-700 hover:text-black font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
            >
              Services
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/login"
              className="text-gray-700 hover:text-black font-medium px-3 py-1 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-inter min-h-[2.25rem] min-w-[5.5rem] flex items-center justify-center"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-black text-white font-medium px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-poppins min-h-[2.25rem] min-w-[5.5rem] flex items-center justify-center"
            >
              Sign Up
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
                href="/features"
                className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/service-pro"
                className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-black font-medium py-2 px-2 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-center font-inter min-h-[2.25rem] min-w-[5.5rem] flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-black text-white font-medium px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-center font-poppins min-h-[2.25rem] min-w-[5.5rem] flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
