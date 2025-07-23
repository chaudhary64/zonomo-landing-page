"use client";
import HeroSection from "@/components/Hero";
import Booking from "@/components/Booking";
import WhyChooseUs from "@/components/WhyChooseUs";
import Coming_Soon from "@/components/Coming_Soon";
import AIFeatures from "@/components/features/features";
import HeroParallaxDemo from "@/components/HeroParallaxDemo";
import ServiceProvidersSection from "@/components/parallex";
import { motion } from "framer-motion";
import FAQ from "@/components/faq/Faq";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AIFeatures />
      {/* Video */}
      <section className="min-h-screen flex items-center justify-center bg-white px-3 my-12 md:my-16 lg:my-24">
        <div className="relative max-w-5xl w-full rounded-xl overflow-hidden shadow-xl ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="aspect-video w-full"
          >
            <video
              src="/videos/zonomo.mp4" // Replace with your video path
              loop
              autoPlay
              muted
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
      <HeroParallaxDemo />
      <ServiceProvidersSection />
      <WhyChooseUs />
      <Booking />
      <FAQ />
      <Coming_Soon />
    </>
  );
}
