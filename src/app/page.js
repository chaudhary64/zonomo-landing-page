import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from '@/components/Hero';
import Slider from '@/components/UI/Slider';
import MostBookedSlider from "@/components/MostBookedSlider";
import SilkPlaneWrapper from "@/components/SilkPlaneWrapper";

export default function Home() {
  return (
    <>
      <HeroSection/>
      {/* <Slider/> */}
      {/* <Nav /> */}
      <MostBookedSlider />
      <SilkPlaneWrapper />
      <Footer />
    </>
  );
}
