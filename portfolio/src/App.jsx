import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import emailjs from "emailjs-com";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import { useEffect } from "react";

function App() {
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const tilt = document.getElementById("tilt-root");

    const handleMove = (e) => {
      if (!tilt) return;

      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;

      tilt.style.transform = `
      rotateY(${x}deg)
      rotateX(${y}deg)
    `;
    };

    const reset = () => {
      if (tilt) tilt.style.transform = "rotateX(0) rotateY(0)";
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <>
 
      {/* Space Background Layers */}
      <div className="space-galaxy"></div>
      <div className="space-stars"></div>
     
      <div className="space-layer far" id="layer-far"></div>
      <div className="space-layer mid" id="layer-mid"></div>
      <div className="space-layer near" id="layer-near"></div>
 

      <Navbar />
      {/* Home Section */}
      <Home />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Resume Section */}
      <Resume />

      {/* Contact Section */}
      <Contact />

      <Footer />

    </>
  );
}

export default App;
