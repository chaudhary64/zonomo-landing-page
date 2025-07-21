"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, DrawSVGPlugin, ScrollTrigger);

function Booking() {
  useGSAP(() => {
    gsap.set("#how-it-works svg path", {
      drawSVG: "0%",
    });

    gsap.to("#how-it-works svg path", {
      drawSVG: "100%",
      scrollTrigger: {
        trigger: "#how-it-works",
        start: "top 90%",
        end: "bottom 55%",
        scrub: 1,
        // markers: true, // Enable markers for debugging
      },
    });
  }, []);

  return (
    <section id="hitw" className="py-10 bg-white sm:py-16 lg:py-20 mb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl font-poppins">
            Book Your Service in 5 Simple Steps
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 font-inter">
            Getting professional services has never been easier. Book trusted
            professionals for all your home service needs in just five simple
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
              {/* Adjusted path to reach closer to the first and last step circles */}
              <path
                d="M5 25 Q120 5 200 25 Q300 45 400 25 Q500 5 600 25 Q680 45 795 25"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-5 gap-x-8">
            {/* Step 1 */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700 font-poppins">
                  1
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10 font-poppins">
                Choose a Service
              </h3>
              <p className="mt-4 text-base text-gray-600 font-inter">
                Select from a wide range of home services — plumbing,
                electrician, cleaning, appliance repair, and more.
              </p>
            </div>
            {/* Step 2 */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700 font-poppins">
                  2
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10 font-poppins">
                Pick Your Professional
              </h3>
              <p className="mt-4 text-base text-gray-600 font-inter">
                Browse verified service providers, check ratings, reviews, and
                prices — and choose the one that fits your needs.
              </p>
            </div>
            {/* Step 3 */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700 font-poppins">
                  3
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10 font-poppins">
                Schedule a Visit
              </h3>
              <p className="mt-4 text-base text-gray-600 font-inter">
                Book the service instantly by selecting a convenient date and
                time that works for you.
              </p>
            </div>
            {/* Step 4 */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700 font-poppins">
                  4
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10 font-poppins">
                Get the Job Done
              </h3>
              <p className="mt-4 text-base text-gray-600 font-inter">
                A trusted professional arrives at your doorstep on time and gets
                the work done efficiently.
              </p>
            </div>
            {/* Step 5 */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700 font-poppins">
                  5
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10 font-poppins">
                Pay & Rate the Service
              </h3>
              <p className="mt-4 text-base text-gray-600 font-inter">
                Make a secure payment and leave a review — help others choose
                better while we improve for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
