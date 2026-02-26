import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import About from "@/components/about";
import Events from "@/components/events";
import Team from "@/components/team";
import Projects from "@/components/projects";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import CustomCursor from "@/components/custom-cursor";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <Events />
      <Team />
      <Projects />
      <FAQ />
      <Footer />
    </>
  );
}
