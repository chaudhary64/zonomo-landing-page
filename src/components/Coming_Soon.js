import React from "react";
import Image from "next/image";

const Coming_Soon = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center pb-20 px-4 sm:pb-32">
      <div className="bg-indigo-100 border border-indigo-300 rounded-2xl p-8 shadow-xl w-full max-w-3xl sm:p-16">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 sm:text-5xl md:text-6xl sm:mb-8">
          We&rsquo;ll be live soon!
        </h1>
        <p className="text-lg text-gray-700 mb-8 sm:text-xl md:text-2xl sm:mb-10">
          We&rsquo;ll be available on both App Store and Play Store.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-8 w-full max-w-xs sm:max-w-lg md:max-w-xl mx-auto">
          <Image
            src="/badges/ios-donwload.webp"
            alt="App Store"
            width={200}
            height={70}
            className="h-auto max-w-[180px] sm:max-w-[200px] md:max-w-[220px] drop-shadow-lg"
            style={{ height: "auto" }}
            priority
          />
          <Image
            src="/badges/android-download.webp"
            alt="Play Store"
            width={200}
            height={70}
            className="h-auto max-w-[180px] sm:max-w-[200px] md:max-w-[220px] drop-shadow-lg"
            style={{ height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Coming_Soon;
