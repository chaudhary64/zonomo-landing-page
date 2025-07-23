"use client";
import { X } from "lucide-react";
import Image from "next/image";

export default function PlayStore({ onClose }) {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-around text-sm border border-gray-300 rounded-md m-2 max-w-5xl w-full bg-white shadow-lg">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="cursor-pointer absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5 text-gray-500" />
      </button>

      <div className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
        <h2 className="md:text-4xl text-2xl font-semibold text-gray-800">
          Download Zonomo App
        </h2>
        <p className="text-gray-700 mt-2 w-3/4">
          Get instant access to professional electrical services right at your
          fingertips
        </p>

        <div className="mt-4 rounded-lg">
          <p className="text-gray-800 font-medium text-xl">
            Get services starting from ₹49
          </p>
        </div>
        <p className="text-[8px] text-gray-500 mt-1">
          *Terms & conditions apply. First-time user discount only.
        </p>
        <div className="mt-4 space-y-1 text-sm text-gray-600">
          <p className="flex items-center gap-1">
            <span className="text-green-500">✓</span> Book services in 30
            seconds
          </p>
          <p className="flex items-center gap-1">
            <span className="text-green-500">✓</span> Real-time technician
            tracking
          </p>
          <p className="flex items-center gap-1">
            <span className="text-green-500">✓</span> Secure in-app payments
          </p>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <button
            aria-label="googlePlayBtn"
            className="active:scale-95 transition-all"
            type="button"
          >
            <Image
              className="md:w-44 w-28"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/googlePlayBtn.svg"
              alt="Get on Google Play"
              width={176}
              height={56}
              priority={true}
            />
          </button>
          <button
            aria-label="appleStoreBtn"
            className="active:scale-95 transition-all"
            type="button"
          >
            <Image
              className="md:w-44 w-28"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/appleStoreBtn.svg"
              alt="Download on App Store"
              width={176}
              height={56}
              priority={true}
            />
          </button>
        </div>
      </div>

      <Image
        className="max-w-[375px] pt-10 md:p-0"
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/excitedWomenImage.png"
        alt="Happy customer using Zonomo app"
        width={375}
        height={375}
        priority={true}
      />
    </div>
  );
}
