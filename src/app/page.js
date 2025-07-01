import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MostBookedSlider from "@/components/MostBookedSlider";
import SilkPlaneWrapper from "@/components/SilkPlaneWrapper";

export default function Home() {
  return (
    <>
      <Nav />
      <MostBookedSlider />
      <SilkPlaneWrapper />
      <Footer />
    </>
  );
}
