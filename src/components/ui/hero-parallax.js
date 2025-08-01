"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-36 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl text-white font-SpaceGrotesk">
        Connect & Grow <br /> With Zonomo
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-400 font-inter">
        Maximize Your Earnings with Zonomo – Keep 100% of Your Profits, Gain
        More Clients, and Grow Your Business on Your Terms. No Middlemen, Just
        More Opportunities and Faster Payments. Join Today!
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-50 w-60 sm:h-80 sm:w-[22rem] md:h-96 md:w-[30rem] relative shrink-0 overflow-hidden"
    >
      <Link
        href={product.link || "#"}
        className="block group-hover/product:shadow-2xl h-full w-full"
      >
        <div className="flex flex-col justify-end h-full w-full relative z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
          <h2 className="text-white text-lg sm:text-2xl font-bold mb-1">
            {product.title}
          </h2>
          <p className="text-white text-xs sm:text-sm font-semibold">
            {product.description}
          </p>
        </div>
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="cursor-pointer object-cover object-left-top absolute h-full w-full inset-0 group-hover/product:grayscale-0 z-0"
          alt={product.title}
          unoptimized
        />
      </Link>
    </motion.div>
  );
};

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 8);
  const thirdRow = products.slice(8, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "50%"]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 2], ["0%", "-50%"]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.5, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], ["-50%", "0%"]),
    springConfig
  );
  return (
    <div
      id="service-pro-main"
      ref={ref}
      className="pt-36 overflow-hidden bg-black antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5 mb-5 md:mb-10">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-5 md:mb-10 space-x-5">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
