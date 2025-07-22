"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
  {
    title: "Pre-Launch Traction",
    description:
      "We’ve already pre-listed 1000+ early customers and onboarded 200+ verified service professionals across categories like electricians, cleaners, yoga trainers, and elder care.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1551603635-c4cbd9424fce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHNjaGVkdWxlfGVufDB8fDB8fHww"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Mobile App Launch – August 2025",
    description:
      "Following MVP release, we’ll launch our mobile app to make Zonomo even more accessible and convenient for all users.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Expanding to Tier-2 Cities",
    description:
      "We aim to scale to cities like Jaipur, Lucknow, and Indore in Q4 2025, bringing affordable and trusted services to more households.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://plus.unsplash.com/premium_photo-1697730421382-bc8dd92f83ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGNpdGllcyUyMGluZGlhfGVufDB8fDB8fHww"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "AI Upgrade + Smart Scheduling",
    description:
      "Our intelligent service-matching and scheduling system will continue evolving, making it faster and easier to find the right professional in real-time.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1656936483959-5e5a7385bb66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHVwZGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-3 ">
      <StickyScroll content={content}
      autoScroll={true} />
    </div>
  );
}
