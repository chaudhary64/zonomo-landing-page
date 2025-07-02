import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from '@/components/Hero';
import Slider from '@/components/UI/Slider';
import MostBookedSlider from "@/components/MostBookedSlider";
import SilkPlaneWrapper from "@/components/SilkPlaneWrapper";
import HowitWorks from './../components/HowitWorks';
import WhyChooseUs from './../components/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection/>
      {/* <Slider/> */}
      {/* <MostBookedSlider /> */}
      <WhyChooseUs/>
      <HowitWorks/>
      <SilkPlaneWrapper />
      <Footer />
    </>
  );
}
