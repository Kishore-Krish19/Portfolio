import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import { useEffect } from "react";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const lines = document.querySelectorAll(".line-reveal");
    lines.forEach((line) => observer.observe(line));

    return () => observer.disconnect();
  }, []);

  // 3D Scroll Effect
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-3d");
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const center = window.innerHeight / 2;
            const distance = rect.top - center;

            const rotateX = distance * -0.04;
            const translateZ = distance * -0.15;

            section.style.transform = `
              rotateX(${rotateX}deg)
              translateZ(${translateZ}px)
            `;
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>

      {/* Background Layers */}
      <div className="space-galaxy"></div>
      <div className="space-stars"></div>
      <div className="space-layer far" id="layer-far"></div>
      <div className="space-layer mid" id="layer-mid"></div>
      <div className="space-layer near" id="layer-near"></div>

      {/* Navbar */}
      <Navbar />
      <div className="page-3d">
      {/* Wrapped sections */}
      <div className="fade-in"><Home /></div>
      <div className="fade-in"><About /></div>
      <div className="fade-in"><Skills /></div>
      <div className="fade-in"><Projects /></div>
      <div className="fade-in"><Resume /></div>
      <div className="fade-in"><Contact /></div>
      </div>
      
      {/* Footer */}
      <Footer />

    </>
  );
}

export default App;