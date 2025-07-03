import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Slider from "@/components/UI/Slider";
import MostBookedSlider from "@/components/MostBookedSlider";
import SilkPlaneWrapper from "@/components/SilkPlaneWrapper";
import HowitWorks from "./../components/HowitWorks";
import WhyChooseUs from "./../components/WhyChooseUs";
import FAQ from "@/components/Faq";
import AIFeatures from "@/components/features";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <About />
      {/* <Slider/> */}
      {/* <MostBookedSlider /> */}
      <WhyChooseUs />
      <AIFeatures />
      <HowitWorks />
      <FAQ />
      <SilkPlaneWrapper />
      <Footer />
    </>
  );
}
