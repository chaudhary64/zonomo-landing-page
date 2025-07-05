"use client";

export default function HeroSection() {
  return (
    <div className="relative bg-[#141414] min-h-[calc(100vh-4rem)]">
      {/* Desktop Image */}
      <div className="absolute inset-0 hidden lg:block">
        <img
          className="object-cover object-right-bottom w-full h-full opacity-80"
          src="/images/hero-img.jpg"
          alt="Urban Services Hero"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 px-6 bor border-red-500">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight font-poppins drop-shadow-xl">
          Revolutionizing <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-purple-500 font-playfair">
              Urban Services
            </span>
          </span>
        </h1>

        <p className="text-gray-200 text-lg sm:text-xl max-w-2xl leading-relaxed font-inter mt-6 mb-10 drop-shadow-md">
          From doorstep repairs to healthcare, professional services to personal
          care – all services on one intelligent platform. Connect with verified
          professionals, get instant quotes, and experience seamless service
          delivery.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 pt-2">
          <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 font-poppins cursor-pointer">
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>

          <button className="relative overflow-hidden group bg-white text-gray-800 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 font-poppins cursor-pointer">
            <span className="relative z-10">How It Works</span>
            <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="mt-10 lg:hidden">
        <img
          className="object-cover w-full h-64 rounded-xl opacity-90"
          src="/images/hero-img.jpg"
          alt="Urban Services Hero"
        />
      </div>
    </div>
  );
}
