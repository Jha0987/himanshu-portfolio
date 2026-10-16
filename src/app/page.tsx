import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ResearchPaper from "@/components/ResearchPaper";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Featured Projects with screenshot switcher */}
        <Projects />

        {/* Work Experience Timeline */}
        <Experience />

        {/* Academic Research Publication Showcase */}
        <ResearchPaper />

        {/* Technical Skills Toolkit */}
        <Skills />

        {/* Certifications & Recognitions */}
        <Certifications />

        {/* Connect & Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
