import React from "react";
import Image from "next/image";

const Coming_Soon = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-4 sm:py-16">
      <div className="bg-indigo-100 border border-indigo-300 rounded-lg p-5 shadow-md w-full max-w-md sm:max-w-xl sm:p-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-3 sm:text-4xl md:text-5xl sm:mb-4">
          We&rsquo;ll be live soon!
        </h1>
        <p className="text-base text-gray-700 mb-5 sm:text-lg md:text-xl sm:mb-6">
          We&rsquo;ll be available on both App Store and Play Store.
        </p>
        <div className="flex justify-center gap-4 mt-4 sm:gap-6 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto">
          <div className="flex-1 flex justify-center">
            <Image
              src="/badges/ios-donwload.webp"
              alt="App Store"
              width={100}
              height={40}
              className="w-full h-auto max-w-[110px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]"
              style={{ height: "auto" }}
              priority
            />
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/badges/android-download.webp"
              alt="Play Store"
              width={100}
              height={40}
              className="w-full h-auto max-w-[110px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]"
              style={{ height: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coming_Soon;
