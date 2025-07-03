"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

function WhyChooseUs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Current x:", latest);
  });

  // Transform scroll progress into animation values
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0, 1]);

  // Top row animations with staggering - starting earlier
  const topRow1Y = useTransform(scrollYProgress, [0.05, 0.3], [-40, 0]);
  const topRow1X = useTransform(scrollYProgress, [0.05, 0.3], [-20, 0]);
  const topRow1Scale = useTransform(scrollYProgress, [0.05, 0.3], [0.7, 1]);
  const topRow1RotateY = useTransform(scrollYProgress, [0.05, 0.3], [-10, 0]);
  const topRow1Opacity = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.25],
    [0, 0, 1]
  );

  const topRow2Y = useTransform(scrollYProgress, [0.1, 0.35], [-40, 0]);
  const topRow2X = useTransform(scrollYProgress, [0.1, 0.35], [-20, 0]);
  const topRow2Scale = useTransform(scrollYProgress, [0.1, 0.35], [0.7, 1]);
  const topRow2RotateY = useTransform(scrollYProgress, [0.1, 0.35], [-10, 0]);
  const topRow2Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    [0, 0, 1]
  );

  const topRow3Y = useTransform(scrollYProgress, [0.15, 0.4], [-40, 0]);
  const topRow3X = useTransform(scrollYProgress, [0.15, 0.4], [-20, 0]);
  const topRow3Scale = useTransform(scrollYProgress, [0.15, 0.4], [0.7, 1]);
  const topRow3RotateY = useTransform(scrollYProgress, [0.15, 0.4], [-10, 0]);
  const topRow3Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.35],
    [0, 0, 1]
  );

  // Bottom row animations with staggering - starting earlier
  const bottomRow1Y = useTransform(scrollYProgress, [0.25, 0.35], [80, 0]);
  const bottomRow1X = useTransform(scrollYProgress, [0.25, 0.35], [20, 0]);
  const bottomRow1Scale = useTransform(scrollYProgress, [0.25, 0.35], [0.6, 1]);
  const bottomRow1RotateY = useTransform(
    scrollYProgress,
    [0.25, 0.55],
    [10, 0]
  );
  const bottomRow1Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.45],
    [0, 0, 1]
  );

  const bottomRow2Y = useTransform(scrollYProgress, [0.3, 0.4], [80, 0]);
  const bottomRow2X = useTransform(scrollYProgress, [0.3, 0.4], [20, 0]);
  const bottomRow2Scale = useTransform(scrollYProgress, [0.3, 0.4], [0.6, 1]);
  const bottomRow2RotateY = useTransform(scrollYProgress, [0.3, 0.4], [10, 0]);
  const bottomRow2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 0, 1]
  );

  const bottomRow3Y = useTransform(scrollYProgress, [0.2, 0.2], [80, 0]);
  const bottomRow3X = useTransform(scrollYProgress, [0.1, 0.2], [20, 0]);
  const bottomRow3Scale = useTransform(scrollYProgress, [0.1, 0.5], [0.6, 1]);
  const bottomRow3RotateY = useTransform(
    scrollYProgress,
    [0.15, 0.65],
    [10, 0]
  );
  const bottomRow3Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.25],
    [0, 0, 1]
  );

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-20" ref={ref}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
        >
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-poppins">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-inter">
            Trusted professionals, guaranteed quality, and convenience at your
            doorstep
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24"
          style={{
            perspective: "1000px",
            opacity: opacity,
          }}
        >
          {/* Top Row */}
          <motion.div
            className="md:p-8 lg:p-14"
            style={{
              opacity: topRow1Opacity,
              y: topRow1Y,
              x: topRow1X,
              scale: topRow1Scale,
              rotateY: topRow1RotateY,
            }}
          >
            <svg
              className="mx-auto"
              width={46}
              height={46}
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-poppins">
              24/7 Support
            </h3>
            <p className="mt-5 text-base text-gray-600 font-inter">
              Round-the-clock customer support to help you with booking,
              scheduling, and any service-related queries. We&apos;re here
              whenever you need us.
            </p>
          </motion.div>

          <motion.div
            className="md:p-8 lg:p-14 md:border-l md:border-gray-200"
            style={{
              opacity: topRow2Opacity,
              y: topRow2Y,
              x: topRow2X,
              scale: topRow2Scale,
              rotateY: topRow2RotateY,
            }}
          >
            {/* AI SVG Icon */}
            <svg
              className="mx-auto"
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Chip Outer Border */}
              <rect
                x="12"
                y="12"
                width="40"
                height="40"
                rx="6"
                stroke="#161616"
                strokeWidth={2}
                fill="#F4F4F5"
              />

              {/* Internal circuit lines */}
              <path
                d="M32 20V44"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M20 32H44"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />

              {/* Pins around the chip */}
              <path
                d="M32 4V10"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M32 54V60"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M4 32H10"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M54 32H60"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M14 14L10 10"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M50 14L54 10"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M14 50L10 54"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M50 50L54 54"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />

              {/* AI Text Center */}
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="16"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                fill="#161616"
              >
                AI
              </text>
            </svg>

            <h3 className="mt-8 text-xl font-bold text-gray-900 font-poppins">
              Smart AI Assistant
            </h3>

            <p className="mt-5 text-base text-gray-600 font-inter">
              Just say the word—our smart assistant books your service, confirms
              the details, and gets you to checkout. Fast. Easy. Voice-powered.
            </p>
          </motion.div>

          <motion.div
            className="md:p-8 lg:p-14 md:border-l md:border-gray-200"
            style={{
              opacity: topRow3Opacity,
              y: topRow3Y,
              x: topRow3X,
              scale: topRow3Scale,
              rotateY: topRow3RotateY,
            }}
          >
            <svg
              className="mx-auto"
              width={42}
              height={42}
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41 1H1V41H41V1Z"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 7H7V20H18V7Z"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 26H7V35H18V26Z"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35 7H24V35H35V7Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-poppins">
              Easy Booking
            </h3>
            <p className="mt-5 text-base text-gray-600 font-inter">
              Simple 3-step booking process. Choose your service, select a
              professional, and schedule at your convenience. Book in minutes,
              not hours
            </p>
          </motion.div>
          {/* Bottom Row */}
          <motion.div
            className="md:p-8 lg:p-14 md:border-t md:border-gray-200"
            style={{
              opacity: bottomRow1Opacity,
              y: bottomRow1Y,
              x: bottomRow1X,
              scale: bottomRow1Scale,
              rotateY: bottomRow1RotateY,
            }}
          >
            <svg
              className="mx-auto"
              width={42}
              height={42}
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                fill="#D4D4D8"
              />
              <path
                d="M9 9H33"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 17H33"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 25H13V31H29V25H41"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-poppins">
              Wide Service Range
            </h3>
            <p className="mt-5 text-base text-gray-600 font-inter">
              From AC repairs and cleaning to healthcare and personal care
              services. All your home service needs covered under one platform.
            </p>
          </motion.div>
          <motion.div
            className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t"
            style={{
              opacity: bottomRow2Opacity,
              y: bottomRow2Y,
              x: bottomRow2X,
              scale: bottomRow2Scale,
              rotateY: bottomRow2RotateY,
            }}
          >
            <svg
              className="mx-auto"
              width={46}
              height={42}
              viewBox="0 0 46 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.562 18.4609C30.0511 17.9392 29.4292 17.5392 28.7426 17.2907C28.0559 17.0422 27.3221 16.9516 26.5956 17.0256C25.8692 17.0996 25.1687 17.3362 24.5462 17.718C23.9237 18.0998 23.3952 18.6169 23 19.2309C22.6049 18.6167 22.0764 18.0995 21.4539 17.7176C20.8315 17.3357 20.1309 17.099 19.4044 17.025C18.6779 16.951 17.944 17.0417 17.2573 17.2903C16.5706 17.5389 15.9488 17.939 15.438 18.4609C14.5163 19.4035 14.0002 20.6695 14.0002 21.9879C14.0002 23.3063 14.5163 24.5722 15.438 25.5149L23 33.1999L30.564 25.5159C31.485 24.5726 32.0004 23.3064 32 21.988C31.9997 20.6696 31.4835 19.4037 30.562 18.4609Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M41 41H5C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V1H17L22 9H45V37C45 38.0609 44.5786 39.0783 43.8284 39.8284C43.0783 40.5786 42.0609 41 41 41Z"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-poppins">
              Verified Professionals
            </h3>
            <p className="mt-5 text-base text-gray-600 font-inter">
              All service providers are thoroughly background-checked and
              verified. Read real reviews and ratings from previous customers
              before booking.
            </p>
          </motion.div>
          <motion.div
            className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t"
            style={{
              opacity: bottomRow3Opacity,
              y: bottomRow3Y,
              x: bottomRow3X,
              scale: bottomRow3Scale,
              rotateY: bottomRow3RotateY,
            }}
          >
            <svg
              className="mx-auto"
              width={44}
              height={44}
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 1C9.059 1 1 9.059 1 19H19V1Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-poppins">
              Guaranteed Satisfaction
            </h3>
            <p className="mt-5 text-base text-gray-600 font-inter">
              100% satisfaction guarantee on all services. If you&apos;re not
              happy with the service, we&apos;ll make it right or provide a full
              refund.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
