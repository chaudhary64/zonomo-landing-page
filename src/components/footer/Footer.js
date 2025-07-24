import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo + Company Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            
            <span className="font-SpaceGrotesk font-extrabold text-lg lg:text-xl text-gray-900 tracking-wider uppercase">Zonomo</span>
          </div>
          <div>
            <h3 className="font-semibold mb-2 font-inter">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline font-inter">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-inter">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-inter">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-inter">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-inter">
                  Anti-discrimination policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-inter">
                  ESG Impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-inter">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* For Customers */}
        <div>
          <h3 className="font-semibold mb-2 font-inter">For customers</h3>
          <ul className="space-y-1">
            <li>
              <a href="#hitw" className="hover:underline font-inter">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-inter">
                Categories near you
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-inter">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* For Professionals */}
        <div>
          <h3 className="font-semibold mb-2 font-inter">For professionals</h3>
          <a href="#" className="hover:underline font-inter">
            Register as a professional
          </a>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-2 font-inter">Social links</h3>
          <div className="flex space-x-3 mb-4">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
          <div className="flex flex-col space-y-1.5">
            <a href="#">
              <Image
                src="/badges/ios-donwload.webp"
                alt="App Store"
                className="h-7"
                width={120}
                height={28}
              />
            </a>
            <a href="#">
              <Image
                src="/badges/android-download.webp"
                alt="Google Play"
                className="h-7"
                width={120}
                height={28}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 text-xs text-gray-500 py-4 px-6 text-center">
        <p className="font-inter">* As on June 30, 2025</p>
        <p className="font-inter">
          © Copyright 2025 Zonomo Ltd. All rights reserved. | CIN:
          XXXXXXXXXXXXXXXXXXXXX
        </p>
      </div>
    </footer>
  );
}
