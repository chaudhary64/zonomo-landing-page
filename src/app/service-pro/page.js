"use client";
import React, { useRef, useState, useEffect } from "react";
import ServiceProvidersSection from "./../../components/parallex";
import CalltoAction from "./../../components/CTA";
import Image from "next/image";
import LampDemo  from "./../../components/CTA";
import {
  Check,
  Eye,
  Clock,
  MessageSquare,
  TrendingUp,
  CreditCard,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Home Cleaning",
    description: "Professional deep cleaning services for your home",
    icon: "🧼",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Electrical Services",
    description: "Licensed electricians for all your electrical needs",
    icon: "🔌",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Plumbing",
    description: "Expert plumbers for repairs and installations",
    icon: "🚰",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Carpentry",
    description: "Skilled carpenters for furniture and repairs",
    icon: "🛠️",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Painting Services",
    description: "Professional painters for interior and exterior",
    icon: "🖌️",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Packers & Movers",
    description: "Reliable moving and packing services",
    icon: "🧳",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    title: "Pet Grooming",
    description: "Professional pet care and grooming services",
    icon: "🐶",
    image:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    title: "Fitness Training",
    description: "Personal trainers and yoga instructors",
    icon: "🧘",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    title: "Healthcare",
    description: "Elderly care and nursing services",
    icon: "👨‍⚕️",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    title: "Appliance Repair",
    description: "Expert technicians for home appliances",
    icon: "🔧",
    image:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    title: "Gardening",
    description: "Landscaping and garden maintenance",
    icon: "🌱",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    title: "Beauty Services",
    description: "Professional beauty and wellness treatments",
    icon: "💄",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const ProductCard = ({ product, translate }) => {
  return (
    <div
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
      style={{
        transform: `translateX(${translate}px)`,
      }}
    >
      <div className="block group-hover/product:shadow-2xl">
        <Image
          src={product.image}
          height={600}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
          alt={product.title}
          priority={true}
        />
      </div>
      <div className="absolute inset-0 bg-black/60 rounded-lg opacity-0 group-hover/product:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover/product:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{product.icon}</span>
          <h2 className="text-white text-xl font-bold">{product.title}</h2>
        </div>
        <p className="text-white/80 text-sm opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
          {product.description}
        </p>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        Connect & Grow with <br />{" "}
        <span className="underline decoration-white/50">Zonomo</span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
        Maximize Your Earnings with Zonomo – Keep 100% of Your Profits, Gain
        More Clients, and Grow Your Business on Your Terms. No Middlemen, Just
        More Opportunities and Faster Payments. Join Today!
      </p>
    </div>
  );
};

const HeroParallax = ({ products }) => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [allServicesViewed, setAllServicesViewed] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showScrollPrompt, setShowScrollPrompt] = useState(true);

  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 12);

  // Calculate the height needed to view all services
  const totalServicesHeight = 300 * 3; // 3 rows of services
  const scrollThreshold = totalServicesHeight * 0.8; // 80% of services height

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const newScrollY = window.scrollY;

      if (!allServicesViewed && newScrollY < scrollThreshold) {
        setScrollY(newScrollY);
        setShowScrollPrompt(true);
      } else if (!allServicesViewed && newScrollY >= scrollThreshold) {
        setAllServicesViewed(true);
        setScrollY(scrollThreshold);
        setShowScrollPrompt(false);
        window.scrollTo({
          top: scrollThreshold,
          behavior: "smooth",
        });
      } else {
        setScrollY(newScrollY);
        setShowScrollPrompt(false);
      }
    };

    const handleWheel = (e) => {
      if (!allServicesViewed && window.scrollY >= scrollThreshold - 100) {
        e.preventDefault();
        setAllServicesViewed(true);
        setIsScrolling(true);
        window.scrollTo({
          top: scrollThreshold + 1,
          behavior: "smooth",
        });
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [allServicesViewed, isScrolling, scrollThreshold]);

  const parallaxOffset = scrollY * 0.5;
  const parallaxOffsetReverse = scrollY * -0.3;

  return (
    <div
      ref={containerRef}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      {/* First Row */}
      <div
        className="flex flex-row-reverse space-x-reverse space-x-20 mb-20"
        style={{
          transform: `translateX(${parallaxOffset}px) rotateX(${Math.max(
            15 - scrollY * 0.02,
            0
          )}deg) rotateZ(${Math.max(20 - scrollY * 0.03, 0)}deg)`,
          opacity: Math.min(0.2 + scrollY * 0.001, 1),
        }}
      >
        {firstRow.map((product) => (
          <ProductCard
            product={product}
            translate={parallaxOffset}
            key={product.id}
          />
        ))}
      </div>

      {/* Second Row */}
      <div
        className="flex flex-row mb-20 space-x-20"
        style={{
          transform: `translateX(${parallaxOffsetReverse}px) rotateX(${Math.max(
            15 - scrollY * 0.02,
            0
          )}deg) rotateZ(${Math.max(20 - scrollY * 0.03, 0)}deg)`,
          opacity: Math.min(0.2 + scrollY * 0.001, 1),
        }}
      >
        {secondRow.map((product) => (
          <ProductCard
            product={product}
            translate={parallaxOffsetReverse}
            key={product.id}
          />
        ))}
      </div>

      {/* Third Row */}
      <div
        className="flex flex-row-reverse space-x-reverse space-x-20"
        style={{
          transform: `translateX(${parallaxOffset}px) rotateX(${Math.max(
            15 - scrollY * 0.02,
            0
          )}deg) rotateZ(${Math.max(20 - scrollY * 0.03, 0)}deg)`,
          opacity: Math.min(0.2 + scrollY * 0.001, 1),
        }}
      >
        {thirdRow.map((product) => (
          <ProductCard
            product={product}
            translate={parallaxOffset}
            key={product.id}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      {showScrollPrompt && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-sm flex items-center gap-2 z-50 backdrop-blur-sm border border-white/20">
          <span>Scroll down to view services</span>
          <div className="animate-bounce">↓</div>
        </div>
      )}

      {/* Continue prompt */}
    </div>
  );
};

export default function ServicesHero() {
  return (
    <>
      <div className="bg-black min-h-screen ">
        <HeroParallax products={services} />

        {/* Customer CTA Section */}

        <ServiceProvidersSection />

        <LampDemo />
      </div>
    </>
  );
}
