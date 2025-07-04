"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded font-poppins">
              Z
            </div>
            <span className="font-semibold text-xl text-gray-900 font-poppins">
              Zonomo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-black font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
            >
              About us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-black font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
            >
              Services
            </Link>
            <Link
              href="/ai"
              className="text-gray-700 hover:text-black font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
            >
              AI
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-black font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
            >
              Contact us
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="text-gray-700 hover:text-black font-medium px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-inter"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-black text-white font-medium px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-poppins"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
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
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/ai"
                className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                AI
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-black font-medium py-3 px-2 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-center font-inter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-black text-white font-medium px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-center font-poppins"
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
