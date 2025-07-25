"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

const services = [
  {
    id: 1,
    title: "Home Cleaning",
    description: "Professional deep cleaning services for your home",
    icon: "🧼",
    thumbnail: "/images/cleaning.jpg",
    link: "/services/cleaning-services",
  },
  {
    id: 2,
    title: "Electrical Services",
    description: "Licensed electricians for all your electrical needs",
    icon: "🔌",
    thumbnail: "/images/electric.jpg",
    link: "/services/electrician-services",
  },
  {
    id: 3,
    title: "Plumbing",
    description: "Expert plumbers for repairs and installations",
    icon: "🚰",
    thumbnail: "/images/plumber.jpg",
    link: "/services/plumbing-services",
  },
  {
    id: 4,
    title: "AC-Repair",
    description: "Skilled services for AC services and AC maintenance",
    icon: "🛠️",
    thumbnail: "/images/ac-repairs.jpg",
    link: "/services/ac-services",
  },
  {
    id: 5,
    title: "Laundary",
    description: "Convenient laundry services with pickup and delivery",
    icon: "🖌️",
    thumbnail: "/images/laundry.jpg",
  },
  {
    id: 6,
    title: "Packers & Movers",
    description: "Reliable moving and packing services",
    icon: "🧳",
    thumbnail:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    link: "/services/movers-services",
  },
  {
    id: 7,
    title: "Pet Grooming",
    description: "Professional pet care and grooming services",
    icon: "🐶",
    thumbnail: "images/Pet_Service.jpg",
    link: "/services/pet-services",
  },
  {
    id: 9,
    title: "Healthcare",
    description: "Elderly care and nursing services",
    icon: "👨‍⚕️",
    thumbnail: "/images/healthCare.jpg",
    link: "/services/healthcare-services",
  },
  {
    id: 8,
    title: "Care Takers",
    description: "Professional care for elderly and disabled individuals",
    icon: "🧘",
    thumbnail: "images/Care.jpg",
    link: "/services/taker-services",
  },
  {
    id: 10,
    title: "Appliance Repair",
    description: "Expert technicians for home appliances",
    icon: "🔧",
    thumbnail: "/images/ac-repairs.jpg",
  },
  {
    id: 11,
    title: "Carpentory",
    description: "Custom furniture and carpentry services",
    icon: "🌱",
    thumbnail: "/images/wood.jpg",
    link: "/services/carpentory-services",
  },
  {
    id: 12,
    title: "Beauty Services",
    description: "Professional beauty and wellness treatments",
    icon: "💄",
    thumbnail: "/images/facial-massage.jpg",
    link: "/services/makeup-services",
  },
];

export default function HeroParallaxDemo() {
  return <HeroParallax products={services} />;
}
