"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ServiceProvidersSection from "./../../components/parallex";
import CalltoAction from "./../../components/CTA";
import Image from "next/image";
// import LampDemo from "./../../components/CTA";
// import HeroParallax
import { HeroParallax } from './../../components/ui/hero-parallax';

export default function HeroParallaxDemo() {
  return <HeroParallax products={services} />;
}

const services = [
  {
    id: 1,
    title: "Home Cleaning",
    description: "Professional deep cleaning services for your home",
    icon: "🧼",
    thumbnail:
      "/images/cleaning.jpg",
    link: "https://zonomo-landing-page.vercel.app/services/cleaning-services",
  },
  {
    id: 2,
    title: "Electrical Services",
    description: "Licensed electricians for all your electrical needs",
    icon: "🔌",
    thumbnail:
      "/images/electric.jpg",
      link: "https://zonomo-landing-page.vercel.app/services/electrician-services"
  },
  {
    id: 3,
    title: "Plumbing",
    description: "Expert plumbers for repairs and installations",
    icon: "🚰",
    thumbnail:
      "/images/plumber.jpg",
        link: "https://zonomo-landing-page.vercel.app/services/plumbing-services",
  },
  {
    id: 4,
    title: "AC-Repair",
    description: "Skilled services for AC services and AC maintenance",
    icon: "🛠️",
    thumbnail:
      "/images/ac-repairs.jpg",
      link: "https://zonomo-landing-page.vercel.app/services/ac-services",
  },
  {
    id: 5,
    title: "Laundary",
    description: "Convenient laundry services with pickup and delivery",
    icon: "🖌️",
    thumbnail:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Packers & Movers",
    description: "Reliable moving and packing services",
    icon: "🧳",
    thumbnail:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    
  },
  {
    id: 7,
    title: "Pet Grooming",
    description: "Professional pet care and grooming services",
    icon: "🐶",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1664371206863-048681ac32c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
      link: "https://zonomo-landing-page.vercel.app/services/pet-services",
    },
    {
      id: 9,
      title: "Healthcare",
      description: "Elderly care and nursing services",
      icon: "👨‍⚕️",
      thumbnail:
        "/images/healthCare.jpg",
        link: "https://zonomo-landing-page.vercel.app/services/healthcare-services",
    },
  {
    id: 8,
    title: "Care Takers",
    description: "Professional care for elderly and disabled individuals",
    icon: "🧘",
    thumbnail:
      "images/Care.jpg",
      link: "https://zonomo-landing-page.vercel.app/services/taker-services",
  },
  {
    id: 10,
    title: "Appliance Repair",
    description: "Expert technicians for home appliances",
    icon: "🔧",
    thumbnail:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    title: "Carpentory",
    description: "Custom furniture and carpentry services",
    icon: "🌱",
    thumbnail:
      "/images/wood.jpg",
  },
  {
    id: 12,
    title: "Beauty Services",
    description: "Professional beauty and wellness treatments",
    icon: "💄",
    thumbnail:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8fHww",
      link: "https://zonomo-landing-page.vercel.app/services/makeup-services",
    
  },
];
// export const products = [
//   {
//     title: "Moonbeam",
//     link: "https://gomoonbeam.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
//   },
//   {
//     title: "Cursor",
//     link: "https://cursor.so",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/cursor.png",
//   },
//   {
//     title: "Rogue",
//     link: "https://userogue.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/rogue.png",
//   },

//   {
//     title: "Editorially",
//     link: "https://editorially.org",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/editorially.png",
//   },
//   {
//     title: "Editrix AI",
//     link: "https://editrix.ai",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/editrix.png",
//   },
//   {
//     title: "Pixel Perfect",
//     link: "https://app.pixelperfect.quest",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
//   },

//   {
//     title: "Algochurn",
//     link: "https://algochurn.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
//   },
//   {
//     title: "Aceternity UI",
//     link: "https://ui.aceternity.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
//   },
//   {
//     title: "Tailwind Master Kit",
//     link: "https://tailwindmasterkit.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
//   },
//   {
//     title: "SmartBridge",
//     link: "https://smartbridgetech.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
//   },
//   {
//     title: "Renderwork Studio",
//     link: "https://renderwork.studio",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
//   },

//   {
//     title: "Creme Digital",
//     link: "https://cremedigital.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
//   },
//   {
//     title: "Golden Bells Academy",
//     link: "https://goldenbellsacademy.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
//   },
//   {
//     title: "Invoker Labs",
//     link: "https://invoker.lol",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/invoker.png",
//   },
//   {
//     title: "E Free Invoice",
//     link: "https://efreeinvoice.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
//   },
// ];
