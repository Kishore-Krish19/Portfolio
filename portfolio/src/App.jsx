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
import { useEffect, useState, useCallback } from "react";
import Antigravity from "./components/Antigravity";
import MobileInfoScreen from "./components/MobileInfoScreen";
import MusicPlayer from "./components/MusicPlayer";
import { useDesktopScale } from "./adapt.js";


function App() {
  const [showMobileInfo, setShowMobileInfo] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Apply proportional desktop scaling
  useDesktopScale();

  // Mobile Device Check
  useEffect(() => {
    let timer;
    let removeTimer;

    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);

      if (isMobileDevice && !timer) {
        setShowMobileInfo(true);
        document.body.style.overflow = "hidden";

        timer = setTimeout(() => {
          setIsFadingOut(true);
          removeTimer = setTimeout(() => {
            setShowMobileInfo(false);
            document.body.style.overflow = "";
          }, 600);
        }, 2000);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      if (timer) clearTimeout(timer);
      if (removeTimer) clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  // Parallax Scroll Logic
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
      {showMobileInfo && <MobileInfoScreen isFadingOut={isFadingOut} />}

      <div style={{ position: 'fixed', top: 0, left: 0, width: 'calc(100% / var(--desktop-scale, 1))', height: 'calc(100% / var(--desktop-scale, 1))', zIndex: 1, pointerEvents: 'none' }}>
        <Antigravity
          count={isMobile ? 400 : 800}
          magnetRadius={isMobile ? 4 : 6}
          ringRadius={isMobile ? 2 : 3}
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
        <Home startAnimation={!showMobileInfo} />
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

      <MusicPlayer />

    </>
  );
}

export default App;
