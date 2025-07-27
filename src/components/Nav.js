"use client";

import { useState } from "react";
import Link from "next/link";
import Coming__Soon from "@/components/modal/Coming__Soon";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppear, setAppear] = useState(false);

  return (
    <>
      <nav
        className="bg-white sticky top-0 z-50 py-1"
        aria-label="Main Navigation"
      >
        <div className="mx-auto px-4">
          <div className="py-1 hidden xl:grid grid-cols-3 items-center">
            {/* Left Side Links */}
            <ul
              className="flex items-center space-x-4 justify-start"
              role="menubar"
            >
              <li role="none">
                <Link
                  href="/"
                  className="text-gray-800 hover:text-black hover:bg-violet-400 font-bold px-4 py-2 rounded-xl transition-all duration-200 font-SpaceGrotesk text-sm lg:text-base tracking-wide"
                  role="menuitem"
                >
                  Home
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/about"
                  className="text-gray-800 hover:text-black font-bold px-4 py-2 rounded-xl hover:bg-violet-400 transition-all duration-200 font-SpaceGrotesk text-sm lg:text-base tracking-wide"
                  role="menuitem"
                >
                  About us
                </Link>
              </li>
            </ul>
            {/* Center Logo */}
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/company/zonomo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
                aria-label="Zonomo LinkedIn"
              >
                <span className="font-SpecialGothic text-lg lg:text-xl text-gray-900 tracking-wider uppercase">
                  Zonomo
                </span>
              </a>
            </div>
            {/* Right Side Links */}
            <ul
              className="flex items-center space-x-4 justify-end"
              role="menubar"
            >
              <li role="none">
                <Link
                  href="#service-pro-main"
                  className="text-gray-800 hover:text-black font-bold px-4 py-2 rounded-xl hover:bg-violet-400 transition-all duration-200 font-SpaceGrotesk text-sm lg:text-base tracking-wide"
                  role="menuitem"
                >
                  Services
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/features"
                  className="text-gray-800 hover:text-black font-bold px-4 py-2 rounded-xl hover:bg-violet-400 transition-all duration-200 font-SpaceGrotesk text-sm lg:text-base tracking-wide"
                  role="menuitem"
                >
                  Features
                </Link>
              </li>
              <li role="none">
                <button
                  onClick={() => setAppear((prev) => !prev)}
                  className="shrink-0 bg-black text-white font-semibold px-4.5 py-1.5 rounded-full hover:bg-gray-800 transition-colors duration-200 text-center min-h-[2rem] min-w-[4.5rem] flex items-center justify-center text-xs lg:text-sm font-SpaceGrotesk cursor-pointer"
                  style={{ letterSpacing: "0.05em" }}
                  aria-label="Get Started"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
          {/* Mobile Nav: unchanged except for aria-labels */}
          <div className="flex items-center justify-between h-14 xl:hidden">
            {/* Logo for mobile */}
            <Link
              href="/"
              className="flex items-center space-x-2"
              aria-label="Zonomo Home"
            >
              <span className="font-SpaceGrotesk font-extrabold text-base text-gray-900 tracking-wider uppercase">
                Zonomo
              </span>
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-black hover:text-gray-950 hover:bg-violet-400 transition-colors duration-200 cursor-pointer"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
            <nav
              className="xl:hidden border-t border-gray-200 py-4"
              aria-label="Mobile Navigation"
            >
              <ul className="flex flex-col space-y-4" role="menu">
                <li role="none">
                  <Link
                    href="/"
                    className="text-gray-800 hover:text-black font-bold py-2 px-3 rounded-xl hover:bg-violet-400 transition-all duration-200 font-SpaceGrotesk text-sm tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    Home
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/about"
                    className="text-gray-800 hover:text-black font-bold py-2 px-3 rounded-xl hover:bg-violet-400 transition-all duration-200 font-SpaceGrotesk text-sm tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    About us
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="#service-pro-main"
                    className="text-gray-800 hover:text-black font-bold py-2 px-3 rounded-xl hover:bg-violet-400 transition-all duration-200 font-SpaceGrotesk text-sm tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    Services
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="#features"
                    className="text-gray-800 hover:text-black font-bold py-2 px-3 rounded-xl hover:bg-violet-400 transition-all duration-200 font-SpaceGrotesk text-sm tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    Features
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="#faq"
                    className="text-gray-800 hover:text-black font-bold py-2 px-3 rounded-xl hover:bg-violet-400 transition-all duration-200 font-SpaceGrotesk text-sm tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    FAQ
                  </Link>
                </li>
                <li
                  role="none"
                  className="flex flex-col space-y-3 pt-4 border-t border-gray-200"
                >
                  <button
                    onClick={() => setAppear((prev) => !prev)}
                    className="shrink-0 bg-black text-white font-bold px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors duration-200 text-center min-h-[2rem] min-w-[4.5rem] flex items-center justify-center text-xs lg:text-sm font-SpaceGrotesk shadow tracking-wider cursor-pointer"
                    style={{ letterSpacing: "0.04em" }}
                    aria-label="Get Started"
                  >
                    Get Started
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </nav>

      <Coming__Soon isAppear={isAppear} setAppear={setAppear} />
    </>
  );
}
