"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, DrawSVGPlugin, ScrollTrigger);

function HowitWorks() {
  useGSAP(() => {
    gsap.set("#how-it-works svg path", {
      drawSVG: "0%",
    });

    gsap.to("#how-it-works svg path", {
      drawSVG: "100%",
      scrollTrigger: {
        trigger: "#how-it-works",
        start: "top 90%",
        end: "bottom 40%",
        scrub: 1,
        // markers: true, // Enable markers for debugging
      },
    });
  }, []);

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Getting professional services has never been easier. Book trusted
            professionals for all your home service needs in just three simple
            steps.
          </p>
        </div>
        <div id="how-it-works" className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <svg
              className="w-full"
              viewBox="0 0 800 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 25 Q200 5 400 25 T750 25"
                stroke="#D1D5DB"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Choose Your Service
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Browse through our wide range of home services - from AC repairs
                and cleaning to healthcare and personal care. Select what you
                need.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Book Trusted Professionals
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Get instant quotes from verified professionals near you. Compare
                prices, read reviews, and book the best service provider for
                your needs.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Enjoy Quality Service
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Relax while our professionals handle your service needs. Track
                progress in real-time and enjoy hassle-free, quality service at
                your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowitWorks;
