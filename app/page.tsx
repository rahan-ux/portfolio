import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Commitments from "@/components/Commitments";
import Performance from "@/components/Performance";
import Framework from "@/components/Framework";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Commitments />
        <Performance />
        <Framework />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
