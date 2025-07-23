import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";

export default function Template({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
