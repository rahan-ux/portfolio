import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhyFundaux from "@/components/WhyFundaux";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <WhyFundaux />
      </main>
      <Footer />
    </>
  );
}
