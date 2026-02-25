import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import ParticlesBackground from "./components/ui/ParticlesBackground";
import FloatingSocial from "./components/ui/FloatingSocial";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-indigo-50/30 text-gray-900 relative">
      <ParticlesBackground />
      <FloatingSocial />
      <ScrollToTop />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16 md:pt-20">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}