import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700" aria-label="Site Footer">
      <nav
        className="max-w-7xl mx-auto px-6 py-10 sm:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm"
        aria-label="Footer Navigation"
      >
        {/* Logo + Company Section */}
        <section aria-labelledby="footer-company" className="">
          <div className="flex items-center space-x-2 mb-4">
            <span
              className="font-SpecialGothic text-lg lg:text-xl text-gray-900 tracking-wider uppercase"
              aria-label="Zonomo logo"
            >
              Zonomo
            </span>
          </div>
          <div>
            <h2 id="footer-company" className="font-semibold mb-2 font-inter">
              Company
            </h2>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/about"
                  className="hover:underline font-inter"
                  aria-label="About Zonomo"
                >
                  About us
                </Link>
              </li>
              <li>
                <span
                  className="font-inter cursor-not-allowed select-none"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  Investor Relations
                </span>
              </li>
              <li>
                <span
                  className="font-inter cursor-not-allowed select-none"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  Terms &amp; conditions
                </span>
              </li>
              <li>
                <span
                  className="font-inter cursor-not-allowed select-none"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  Privacy policy
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* For Customers */}
        <section aria-labelledby="footer-customers">
          <h2 id="footer-customers" className="font-semibold mb-2 font-inter">
            For customers
          </h2>
          <ul className="space-y-1">
            <li>
              <a
                href="#hitw"
                className="hover:underline font-inter"
                aria-label="How Zonomo works for customers"
              >
                How it works
              </a>
            </li>
            <li>
              <span
                className="font-inter cursor-not-allowed select-none"
                tabIndex="-1"
                aria-hidden="true"
              >
                Categories near you
              </span>
            </li>
            <li>
              <span
                className="font-inter cursor-not-allowed select-none"
                tabIndex="-1"
                aria-hidden="true"
              >
                Contact us
              </span>
            </li>
          </ul>
        </section>

        {/* For Professionals */}
        <section aria-labelledby="footer-professionals">
          <h2
            id="footer-professionals"
            className="font-semibold mb-2 font-inter"
          >
            For professionals
          </h2>
          <span
            className="font-inter cursor-not-allowed select-none"
            tabIndex="-1"
            aria-hidden="true"
          >
            Register as a professional
          </span>
        </section>

        {/* Social Links */}
        <section aria-labelledby="footer-social">
          <h2 id="footer-social" className="font-semibold mb-2 font-inter">
            Social links
          </h2>
          <ul className="flex space-x-3 mb-4" aria-label="Social media links">
            <li>
              <span
                className="cursor-not-allowed select-none"
                tabIndex="-1"
                aria-label="Twitter (coming soon)"
                aria-hidden="true"
              >
                <FaTwitter className="h-6 w-6" />
              </span>
            </li>
            <li>
              <span
                className="cursor-not-allowed select-none"
                tabIndex="-1"
                aria-label="Facebook (coming soon)"
                aria-hidden="true"
              >
                <FaFacebookF className="h-6 w-6" />
              </span>
            </li>
            <li>
              <span
                className="cursor-not-allowed select-none"
                tabIndex="-1"
                aria-label="Instagram (coming soon)"
                aria-hidden="true"
              >
                <FaInstagram className="h-6 w-6" />
              </span>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/zonomo/"
                className="text-gray-700 hover:text-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zonomo on LinkedIn"
                passHref
              >
                <FaLinkedinIn className="h-6 w-6" />
              </Link>
            </li>
          </ul>
          <div className="flex flex-col space-y-1.5">
            <Link href="#" aria-label="Download Zonomo on the App Store">
              <Image
                src="/badges/ios-donwload.webp"
                alt="Download Zonomo on the App Store"
                width={135}
                height={30}
              />
            </Link>
            <Link href="#" aria-label="Get Zonomo on Google Play">
              <Image
                src="/badges/android-download.webp"
                alt="Get Zonomo on Google Play"
                width={135}
                height={30}
              />
            </Link>
          </div>
        </section>
      </nav>

      <div className="border-t border-gray-200 text-xs text-gray-500 py-4 px-6 text-center">
        <p className="font-inter">* As on June 30, 2025</p>
        <p className="font-inter">
          &copy; Copyright 2025 Zonomo Ltd. All rights reserved. | CIN:
          XXXXXXXXXXXXXXXXXXXXX
        </p>
      </div>
    </footer>
  );
}
