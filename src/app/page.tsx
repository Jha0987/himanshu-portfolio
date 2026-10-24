import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Impact from "@/components/Impact";
import Showcase from "@/components/Showcase";
import Voice from "@/components/Voice";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionToggle from "@/components/MotionToggle";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import SceneBackdrop from "@/components/SceneBackdrop";

export default function Home() {
  return (
    <>
      <ScrollRevealProvider />

      <a href="#work" className="skip-link">
        Skip to main content
      </a>

      {/* Persistent Backdrop Scene matching reference */}
      <SceneBackdrop />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Proof Strip */}
        <ProofStrip />

        {/* 01 / About Section */}
        <About />

        {/* 02 / Selected Work */}
        <Projects />

        {/* 03 / Expertise / How I Think & Work */}
        <Skills />

        {/* 04 / Impact Stage */}
        <Impact />

        {/* 05 / Research & Verified Credentials */}
        <Showcase />

        {/* 06 / Technical Depth & Practices */}
        <Voice />

        {/* 07 / Journey & Career Timeline */}
        <Experience />

        {/* 08 / Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Motion accessibility toggle */}
      <MotionToggle />
    </>
  );
}
