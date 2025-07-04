"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import SilkPlaneWrapper from "@/components/SilkPlaneWrapper";
import HowitWorks from "./../components/HowitWorks";
import WhyChooseUs from "./../components/WhyChooseUs";
import FAQ from "@/components/Faq";
import AIFeatures from "@/components/features";
import dynamic from "next/dynamic";

// Dynamically import ContactUs with SSR disabled
const ContactUs = dynamic(() => import("@/components/ContactUs"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <AIFeatures />
      <WhyChooseUs />
      <HowitWorks />
      <FAQ />
      {/* <SilkPlaneWrapper /> */}
      <ContactUs />
      <Footer />
    </>
  );
}
