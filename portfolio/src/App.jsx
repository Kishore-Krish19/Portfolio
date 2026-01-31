import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import { useEffect, useState } from "react"; // Added useState here

function App() {
  // 1. Define the loading state
  const [isLoading, setIsLoading] = useState(true);

  // 2. Parallax Scroll Logic (Your original code)
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

  // 3. Loading Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // 4. Fade-in Reveal Logic
  useEffect(() => {
    if (isLoading) return;

    const revealCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add class when it enters the screen
          entry.target.classList.add("active");
        } else {
          // REMOVE class when it leaves the screen so it can animate again
          entry.target.classList.remove("active");
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1, // Trigger as soon as 10% is visible
    });

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <>
      <div className={`loader-wrapper ${!isLoading ? "hidden" : ""}`}></div>

      {/* Background Layers */}
      <div className="space-galaxy"></div>
      <div className="space-stars"></div>
      <div className="space-layer far" id="layer-far"></div>
      <div className="space-layer mid" id="layer-mid"></div>
      <div className="space-layer near" id="layer-near"></div>

      <Navbar />

      {/* Wrapped sections */}
      <div className="reveal"><Home /></div>
      <div className="reveal"><About /></div>
      <div className="reveal"><Skills /></div>
      <div className="reveal"><Projects /></div>
      <div className="reveal"><Resume /></div>
      <div className="reveal"><Contact /></div>

      <Footer />
    </>
  );
}

export default App;