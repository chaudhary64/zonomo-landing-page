"use client";
import HeroSection from "@/components/Hero";
import Booking from "../components/Booking";
import WhyChooseUs from "./../components/WhyChooseUs";
import FAQ from "@/components/Faq";
import RoleCarousel from "@/components/TwoSection";
import Coming_Soon from "@/components/Coming_Soon";
import AIFeatures from "@/components/features/page";
import HeroParallaxDemo from './service-pro/page';
import ServiceProvidersSection from "@/components/parallex";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AIFeatures />
      <RoleCarousel />
      <HeroParallaxDemo/>
      <ServiceProvidersSection />
      <WhyChooseUs />
      <Booking />
      <FAQ />
      <Coming_Soon />
    </>
  );
}
