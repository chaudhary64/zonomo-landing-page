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
            Pure marketplace, full control, and AI-powered matching for your
            perfect service experience
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
                d="M23 1C10.85 1 1 10.85 1 23C1 35.15 10.85 45 23 45C35.15 45 45 35.15 45 23C45 10.85 35.15 1 23 1Z"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 15C19.13 15 16 18.13 16 22C16 25.87 19.13 29 23 29C26.87 29 30 25.87 30 22C30 18.13 26.87 15 23 15Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 38C10.5 33.5 16.5 31 23 31C29.5 31 35.5 33.5 38 38"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-poppins">
              Choose Your Own Service Provider
            </h3>
            <p className="mt-5 text-base text-gray-600 font-inter">
              Unlike traditional platforms, you stay in control. Browse and pick
              from a list of verified professionals based on ratings, reviews,
              and expertise.
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
            <svg
              className="mx-auto"
              width={46}
              height={46}
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 1C10.85 1 1 10.85 1 23C1 35.15 10.85 45 23 45C35.15 45 45 35.15 45 23C45 10.85 35.15 1 23 1Z"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 15V31"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M15 23H31"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
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
                $
              </text>
            </svg>

            <h3 className="mt-12 text-xl font-bold text-gray-900 font-poppins">
              Flexible Pricing
            </h3>

            <p className="mt-5 text-base text-gray-600 font-inter">
              We don&apos;t lock you into fixed packages. Zonomo allows
              transparent and competitive pricing, so you only pay for what you
              need.
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
              AI-Powered Matching
            </h3>
            <p className="mt-5 text-base text-gray-600 font-inter">
              Powered by smart AI algorithms, Zonomo helps you find the right
              professional, at the right time, for the right job — boosting
              reliability and satisfaction.
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
              Chat Support
            </h3>
            <p className="mt-5 text-base text-gray-600 font-inter">
              Get instant help through our chat support system. Connect with our
              team for assistance with bookings, service queries, and technical
              support anytime.
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
              height={46}
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 1C10.85 1 1 10.85 1 23C1 35.15 10.85 45 23 45C35.15 45 45 35.15 45 23C45 10.85 35.15 1 23 1Z"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 23L20 28L31 17"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M23 8V1"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M23 45V38"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M38 23H45"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M1 23H8"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-poppins">
              No Agency Lock-ins
            </h3>
            <p className="mt-5 text-base text-gray-600 font-inter">
              Zonomo is a pure marketplace. No middlemen, no bias. Connect
              directly with service providers and enjoy transparent transactions
              without agency interference.
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
              width={46}
              height={46}
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 1C10.85 1 1 10.85 1 23C1 35.15 10.85 45 23 45C35.15 45 45 35.15 45 23C45 10.85 35.15 1 23 1Z"
                stroke="#161616"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 20L23 13L30 20"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 13V28"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M16 28H30"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M23 33V36"
                stroke="#161616"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-poppins">
              Exclusive Offers for New Users
            </h3>
            <p className="mt-5 text-base text-gray-600 font-inter">
              Enjoy special discounts and loyalty rewards as a new user. Get the
              best deals on your first bookings and unlock ongoing benefits with
              our reward system.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
