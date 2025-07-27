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
      },
    });
  }, []);

  return (
    <section
      id="hitw"
      className="bg-white mt-16 sm:mt-24 lg:mt-34 mb-0"
      aria-labelledby="booking-steps-title"
      role="region"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <header className="max-w-2xl mx-auto text-center">
          <h2
            id="booking-steps-title"
            className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl font-inter"
          >
            Book Your Service in 5 Simple Steps
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 font-inter">
            Getting professional services has never been easier. Book trusted
            professionals for all your home service needs in just five simple
            steps.
          </p>
        </header>
        <nav aria-label="How it works steps">
          <ol id="how-it-works" className="relative mt-12 lg:mt-20">
            <li
              className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"
              aria-hidden="true"
            >
              <svg
                className="w-full"
                viewBox="0 0 800 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Steps connector line"
                role="img"
              >
                <title>Steps connector line</title>
                <desc>
                  Curved dashed line connecting the five booking steps
                </desc>
                <path
                  d="M5 25 Q120 5 200 25 Q300 45 400 25 Q500 5 600 25 Q680 45 795 25"
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="8,8"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </li>
            <li
              className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-5 gap-x-8"
              style={{ listStyle: "none" }}
            >
              {/* Step 1 */}
              <article>
                <div
                  className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow"
                  aria-label="Step 1"
                >
                  <span className="text-xl font-semibold text-gray-700 font-inter">
                    1
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10 font-inter">
                  Choose a Service
                </h3>
                <p className="mt-4 text-base text-gray-600 font-inter">
                  Select from a wide range of home services — plumbing,
                  electrician, cleaning, appliance repair, and more.
                </p>
              </article>
              {/* Step 2 */}
              <article>
                <div
                  className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow"
                  aria-label="Step 2"
                >
                  <span className="text-xl font-semibold text-gray-700 font-inter">
                    2
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10 font-inter">
                  Pick Your Professional
                </h3>
                <p className="mt-4 text-base text-gray-600 font-inter">
                  Browse verified service providers, check ratings, reviews, and
                  prices — and choose the one that fits your needs.
                </p>
              </article>
              {/* Step 3 */}
              <article>
                <div
                  className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow"
                  aria-label="Step 3"
                >
                  <span className="text-xl font-semibold text-gray-700 font-inter">
                    3
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10 font-inter">
                  Schedule a Visit
                </h3>
                <p className="mt-4 text-base text-gray-600 font-inter">
                  Book the service instantly by selecting a convenient date and
                  time that works for you.
                </p>
              </article>
              {/* Step 4 */}
              <article>
                <div
                  className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow"
                  aria-label="Step 4"
                >
                  <span className="text-xl font-semibold text-gray-700 font-inter">
                    4
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10 font-inter">
                  Get the Job Done
                </h3>
                <p className="mt-4 text-base text-gray-600 font-inter">
                  A trusted professional arrives at your doorstep on time and
                  gets the work done efficiently.
                </p>
              </article>
              {/* Step 5 */}
              <article>
                <div
                  className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow"
                  aria-label="Step 5"
                >
                  <span className="text-xl font-semibold text-gray-700 font-inter">
                    5
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10 font-inter">
                  Pay & Rate the Service
                </h3>
                <p className="mt-4 text-base text-gray-600 font-inter">
                  Make a secure payment and leave a review — help others choose
                  better while we improve for you.
                </p>
              </article>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

export default Booking;
