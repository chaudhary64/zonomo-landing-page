import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import SilkPlaneWrapper from "@/components/SilkPlaneWrapper";
import HowitWorks from "./../components/HowitWorks";
import WhyChooseUs from "./../components/WhyChooseUs";
import FAQ from "@/components/Faq";
import AIFeatures from "@/components/features";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <WhyChooseUs />
      <AIFeatures />
      <HowitWorks />
      <FAQ />
      <SilkPlaneWrapper />
      <Footer />
    </>
  );
}
