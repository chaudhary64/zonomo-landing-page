// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo + Company Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded">
              UC
            </div>
            <span className="font-semibold text-lg">Urban Company</span>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Anti-discrimination policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  ESG Impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* For Customers */}
        <div>
          <h3 className="font-semibold mb-2">For customers</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                UC reviews
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Categories near you
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* For Professionals */}
        <div>
          <h3 className="font-semibold mb-2">For professionals</h3>
          <a href="#" className="hover:underline">
            Register as a professional
          </a>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-2">Social links</h3>
          <div className="flex space-x-3 mb-4">
            <a href="#">
              <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
            </a>
            <a href="#">
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a href="#">
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
            <a href="#">
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="h-6 w-6"
              />
            </a>
          </div>
          <div className="space-y-2">
            <a href="#">
              <img
                src="/badges/appstore.png"
                alt="App Store"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="/badges/googleplay.png"
                alt="Google Play"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 text-xs text-gray-500 py-4 px-6 text-center">
        <p>* As on December 31, 2024</p>
        <p>
          © Copyright 2025 Urban Company Ltd. (formerly known as UrbanClap
          Technologies India Limited) All rights reserved. | CIN:
          U74140DL2014PTC274413
        </p>
      </div>
    </footer>
  );
}
