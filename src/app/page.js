"use client";
import HeroSection from "@/components/Hero";
import Booking from "../components/Booking";
import WhyChooseUs from "./../components/WhyChooseUs";
import FAQ from "@/components/Faq";
import RoleCarousel from "@/components/TwoSection";
import ServiceSlider from "./../components/ServiceList";
import Coming_Soon from "@/components/Coming_Soon";
import AIFeatures from "@/components/features/page";
// import { MacbookScroll } from './../components/ui/macbook-scroll';
export default function Home() {
  return (
    <>
      <HeroSection />
      <AIFeatures />
      <RoleCarousel />
      <ServiceSlider />
      <WhyChooseUs />
      <Booking />
      {/* <MacbookScroll/> */}
      <FAQ />
      <Coming_Soon />
    </>
  );
}
