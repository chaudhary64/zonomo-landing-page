"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import the Silk component with no SSR
const Silk = dynamic(() => import("./SilkPlane"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 animate-pulse">
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-400">Loading...</div>
      </div>
    </div>
  ),
});

const SilkPlaneWrapper = (props) => {
  return (
    <div className="px-6 py-8 h-52 w-full relative">
      {/* Use Suspense to handle loading state */}
      <Suspense
        fallback={
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 animate-pulse">
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-400">Loading...</div>
            </div>
          </div>
        }
      >
        <Silk {...props} />
      </Suspense>
      {/* Text at the center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center pointer-events-none px-4">
        <h1 className="text-white text-lg md:text-xl font-bold mb-3 drop-shadow-lg tracking-tight leading-tight sm:whitespace-nowrap whitespace-normal max-w-full">
          Your go-to place for everything from grooming to plumbing
        </h1>
        <button className="pointer-events-auto bg-white/20 backdrop-blur-md text-white font-medium px-6 py-2 rounded-lg border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-200 shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SilkPlaneWrapper;
