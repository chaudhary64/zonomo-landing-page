"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Booking from "../components/Booking";
import WhyChooseUs from "./../components/WhyChooseUs";
import FAQ from "@/components/Faq";
import AIFeatures from "@/components/features/page";
import dynamic from "next/dynamic";
import RoleCarousel from "@/components/TwoSection";
// Dynamically import ContactUs with SSR disabled
const ContactUs = dynamic(() => import("@/components/contact/page"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <RoleCarousel />
      <AIFeatures />
      <WhyChooseUs />
      <Booking />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
}
