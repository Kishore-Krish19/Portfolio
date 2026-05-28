import Home from "./components/Home";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import { useEffect } from "react";
import Antigravity from "./components/Antigravity";

function App() {

  //  Parallax Scroll Logic 
  useEffect(() => {
    const far = document.getElementById("layer-far");
    const mid = document.getElementById("layer-mid");
    const near = document.getElementById("layer-near");

    const handleScroll = () => {
      const y = window.scrollY;
      if (far) far.style.transform = `translateY(${y * 0.05}px)`;
      if (mid) mid.style.transform = `translateY(${y * 0.12}px)`;
      if (near) near.style.transform = `translateY(${y * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <Antigravity
          count={700}
          magnetRadius={6}
          ringRadius={3}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={0.25}
          lerpSpeed={0.08}
          color="#08defd"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="sphere"
          fieldStrength={10}
        />
      </div>

      {/* Background Layers */}
      <div className="space-galaxy"></div>
      <div className="space-stars"></div>
      <div className="space-layer far" id="layer-far"></div>
      <div className="space-layer mid" id="layer-mid"></div>
      <div className="space-layer near" id="layer-near"></div>

      <Navbar />
      <div className="page-3d">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        {/* <Resume /> */}
        <Contact />
      </div>

      <Footer />

    </>
  );
}

export default App;