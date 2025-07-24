"use client";

import { useState } from "react";
import Link from "next/link";
import Coming__Soon from "@/components/modal/Coming__Soon";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppear, setAppear] = useState(false);

  return (
    <>
      <nav className="bg-white sticky top-0 z-50">
        <div className="mx-auto px-4">
          <div className="hidden xl:grid grid-cols-3 items-center h-14">
            {/* Left Side Links */}
            <div className="flex items-center space-x-4 justify-start">
              <Link
                href="/"
                className="text-gray-800 hover:text-black hover:bg-violet-400 font-normal px-4 py-2 rounded-xl transition-all duration-200 font-special-gothic text-sm lg:text-base tracking-wide"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-800 hover:text-black font-normal px-4 py-2 rounded-xl hover:bg-violet-400 transition-all duration-200 font-special-gothic text-sm lg:text-base tracking-wide"
              >
                About us
              </Link>
            </div>
            {/* Center Logo */}
            <div className="flex justify-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-special-gothic font-extrabold text-lg lg:text-xl text-gray-900 tracking-wider uppercase">
                  Zonomo
                </span>
              </Link>
            </div>
            {/* Right Side Links */}
            <div className="flex items-center space-x-4 justify-end">
              <Link
                href="#service-pro-main"
                className="text-gray-800 hover:text-black font-normal px-4 py-2 rounded-xl hover:bg-violet-400 transition-all duration-200 font-special-gothic text-sm lg:text-base tracking-wide"
              >
                Services
              </Link>
              <Link
                href="/features"
                className="text-gray-800 hover:text-black font-normal px-4 py-2 rounded-xl hover:bg-violet-400 transition-all duration-200 font-special-gothic text-sm lg:text-base tracking-wide"
              >
                Features
              </Link>
              <button
                onClick={() => setAppear((prev) => !prev)}
                className="shrink-0 bg-black text-white font-semibold px-7 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 text-center min-h-[2.5rem] min-w-[6rem] flex items-center justify-center text-sm lg:text-base font-special-gothic cursor-pointer"
                style={{ letterSpacing: "0.05em" }}
              >
                Get Started
              </button>
            </div>
          </div>
          {/* Mobile Nav: unchanged */}
          <div className="flex items-center justify-between h-14 xl:hidden">
            {/* Logo for mobile */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-special-gothic font-extrabold text-base text-gray-900 tracking-wider uppercase">
                Zonomo
              </span>
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-violet-400 transition-colors duration-200"
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
            <div className="xl:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                {/* Home */}
                <Link
                  href="/"
                  className="text-gray-800 hover:text-black font-normal py-2 px-3 rounded-xl hover:bg-violet-400 transition-all duration-200 font-special-gothic text-sm tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                {/* About us */}
                <Link
                  href="/about"
                  className="text-gray-800 hover:text-black font-normal py-2 px-3 rounded-xl hover:bg-violet-400 transition-all duration-200 font-special-gothic text-sm tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </Link>
                {/* Services */}
                <Link
                  href="/service-pro"
                  className="text-gray-800 hover:text-black font-normal py-2 px-3 rounded-xl hover:bg-violet-400 transition-all duration-200 font-special-gothic text-sm tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                {/* Features */}
                <Link
                  href="#features"
                  className="text-gray-800 hover:text-black font-normal py-2 px-3 rounded-xl hover:bg-violet-400 transition-all duration-200 font-special-gothic text-sm tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                {/* FAQ */}
                <Link
                  href="#faq"
                  className="text-gray-800 hover:text-black font-normal py-2 px-3 rounded-xl hover:bg-violet-400 transition-all duration-200 font-special-gothic text-sm tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                {/* Get Started Button */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setAppear((prev) => !prev)}
                    className="shrink-0 bg-black text-white font-bold px-7 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 text-center min-h-[2.5rem] min-w-[6rem] flex items-center justify-center text-sm lg:text-base font-special-gothic shadow tracking-wider cursor-pointer"
                    style={{ letterSpacing: "0.04em" }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Coming__Soon isAppear={isAppear} setAppear={setAppear} />
    </>
  );
}
