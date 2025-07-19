"use client";

import Image from "next/image";
import PointerHighlight from "./ui/pointer-highlight";
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
      <div className="px-2 sm:px-4 mx-auto max-w-7xl lg:px-8">
        <motion.div
          className="text-center"
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-gray-900 font-poppins w-full flex justify-center">
            <PointerHighlight containerClassName="flex justify-center">
              <span className="inline-block text-center">Why Choose Us</span>
            </PointerHighlight>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600 sm:mt-8 font-inter">
            Pure marketplace, full control, and AI-powered matching for your
            perfect service experience
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 sm:gap-x-8 md:gap-x-0 mt-10 sm:mt-16 xl:mt-24"
          style={{
            perspective: "1000px",
            opacity: opacity,
          }}
        >
          {/* Top Row */}
          <motion.div
            className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 text-center"
            style={{
              opacity: topRow1Opacity,
              y: topRow1Y,
              x: topRow1X,
              scale: topRow1Scale,
              rotateY: topRow1RotateY,
            }}
          >
            <div
              className="h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url(/images/service-provider.png)" }}
              role="img"
              aria-label="Professional service provider illustration"
            />
            <h3 className="mt-8 sm:mt-10 text-lg sm:text-xl font-bold text-gray-900 font-poppins text-center">
              Choose Your Own Service Provider
            </h3>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 font-inter text-center">
              Unlike traditional platforms, you stay in control. Browse and pick
              from a list of verified professionals based on ratings, reviews,
              and expertise.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 text-center md:border-l md:border-gray-200"
            style={{
              opacity: topRow2Opacity,
              y: topRow2Y,
              x: topRow2X,
              scale: topRow2Scale,
              rotateY: topRow2RotateY,
            }}
          >
            <div
              className="h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url(/images/pricing.png)" }}
              role="img"
              aria-label="Flexible pricing icon"
            />
            <h3 className="mt-8 sm:mt-10 text-lg sm:text-xl font-bold text-gray-900 font-poppins text-center">
              Flexible Pricing
            </h3>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 font-inter text-center">
              We don&apos;t lock you into fixed packages. Zonomo allows
              transparent and competitive pricing, so you only pay for what you
              need.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 text-center md:border-l md:border-gray-200"
            style={{
              opacity: topRow3Opacity,
              y: topRow3Y,
              x: topRow3X,
              scale: topRow3Scale,
              rotateY: topRow3RotateY,
            }}
          >
            <div
              className="h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url(/images/matchmaking.png)" }}
              role="img"
              aria-label="AI-powered matching graphic"
            />
            <h3 className="mt-8 sm:mt-10 text-lg sm:text-xl font-bold text-gray-900 font-poppins text-center">
              AI-Powered Matching
            </h3>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 font-inter text-center">
              Powered by smart AI algorithms, Zonomo helps you find the right
              professional, at the right time, for the right job — boosting
              reliability and satisfaction.
            </p>
          </motion.div>
          {/* Bottom Row */}
          <motion.div
            className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 text-center md:border-t md:border-gray-200"
            style={{
              opacity: bottomRow1Opacity,
              y: bottomRow1Y,
              x: bottomRow1X,
              scale: bottomRow1Scale,
              rotateY: bottomRow1RotateY,
            }}
          >
            <div
              className="h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url(/images/support.png)" }}
              role="img"
              aria-label="Chat support icon"
            />
            <h3 className="mt-8 sm:mt-10 text-lg sm:text-xl font-bold text-gray-900 font-poppins text-center">
              Chat Support
            </h3>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 font-inter text-center">
              Get instant help through our chat support system. Connect with our
              team for assistance with bookings, service queries, and technical
              support anytime.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 text-center md:border-l md:border-gray-200 md:border-t"
            style={{
              opacity: bottomRow2Opacity,
              y: bottomRow2Y,
              x: bottomRow2X,
              scale: bottomRow2Scale,
              rotateY: bottomRow2RotateY,
            }}
          >
            <div
              className="h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url(/images/agency.png)" }}
              role="img"
              aria-label="No agency lock-ins symbol"
            />
            <h3 className="mt-8 sm:mt-10 text-lg sm:text-xl font-bold text-gray-900 font-poppins text-center">
              No Agency Lock-ins
            </h3>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 font-inter text-center">
              Zonomo is a pure marketplace. No middlemen, no bias. Connect
              directly with service providers and enjoy transparent transactions
              without agency interference.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 text-center md:border-l md:border-gray-200 md:border-t"
            style={{
              opacity: bottomRow3Opacity,
              y: bottomRow3Y,
              x: bottomRow3X,
              scale: bottomRow3Scale,
              rotateY: bottomRow3RotateY,
            }}
          >
            <div
              className="h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url(/images/offer.png)" }}
              role="img"
              aria-label="Exclusive offers for new users badge"
            />
            <h3 className="mt-8 sm:mt-10 text-lg sm:text-xl font-bold text-gray-900 font-poppins text-center">
              Exclusive Offers for New Users
            </h3>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-600 font-inter text-center">
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
