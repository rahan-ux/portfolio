import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Commitments from "@/components/Commitments";
import Services from "@/components/Services";
import Performance from "@/components/Performance";
import Framework from "@/components/Framework";
import WhyFundaux from "@/components/WhyFundaux";
import Founder from "@/components/Founder";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <About />
        <Commitments />
        <Services />
        <Performance />
        <Framework />
        <WhyFundaux />
        <Founder />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
