import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  // Background stars matching image ambient layout
  const twinklingStars = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 1,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 4,
    }));
  }, []);

  return (
    <section id="about" className="about-section relative">
      {/* ===== BACKGROUND GRID & STARS ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="about-grid" />
        <div className="about-nebula-cyan" />
        <div className="about-nebula-purple" />

        {twinklingStars.map((star) => (
          <motion.div
            key={star.id}
            className="about-star absolute"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ===== TOP SECTION SUBTITLE & TITLE ===== */}
      <div className="about-header-wrapper">
        <h1 className="about-section-title">
          About <span>Me</span>
        </h1>
        <div className="title-underline-bar"></div>
      </div>

      {/* ===== MAIN CONTENT LAYOUT ===== */}
      <div className="about-container">
        
        {/* LEFT COLUMN: BIO & METRICS */}
        <div className="about-left">
          <h2 className="about-hero-name">
            Hi, I'm <span className="highlight-cyan">Kishore E</span>
          </h2>
          <h3 className="about-sub-hero">
            Full Stack Developer & AI Enthusiast
          </h3>

          <div className="about-description">
            <p>
              I build <span className="highlight-cyan">modern</span>,{" "}
              <span className="highlight-cyan">scalable</span>, and{" "}
              <span className="highlight-purple">intelligent web applications</span> that
              solve real-world problems and deliver <span className="highlight-purple">seamless user
              experiences</span>.
            </p>
          </div>

          <hr className="about-divider" />

          {/* DETAILED FEATURES LIST */}
          <div className="about-features-list">
            <div className="feature-item">
              <div className="feature-icon-box">
                <code className="feature-icon-code">&lt;/&gt;</code>
              </div>
              <p className="feature-text">
                I specialize in <span className="highlight-cyan font-bold">React</span>,{" "}
                <span className="highlight-cyan font-bold">Node.js</span>,{" "}
                <span className="highlight-purple font-bold">Java</span>,{" "}
                <span className="highlight-purple font-bold">TensorFlow</span>, and{" "}
                <span className="highlight-cyan font-bold">AI APIs</span> to build end-to-end solutions — from intuitive frontends to powerful backends and intelligent systems.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <span className="feature-icon-brain">🧠</span>
              </div>
              <p className="feature-text">
                I enjoy solving algorithmic challenges, exploring new technologies, and turning ideas into{" "}
                <span className="highlight-purple font-bold">clean</span>,{" "}
                <span className="highlight-purple font-bold">efficient</span>, and{" "}
                <span className="highlight-purple font-bold">impactful</span> digital products.
              </p>
            </div>
          </div>

          {/* METRIC BOX CARDS */}
          <div className="metrics-grid-layout">
            <div className="square-metric-card">
              <span className="card-number txt-cyan">200+</span>
              <span className="card-label">DSA PROBLEMS SOLVED</span>
            </div>

            <div className="square-metric-card">
              <span className="card-number txt-purple">10+</span>
              <span className="card-label">PROJECTS BUILT</span>
            </div>

            <div className="square-metric-card">
              <span className="card-number txt-cyan">AI</span>
              <span className="card-label">SYSTEMS BUILT</span>
            </div>
          </div>

          {/* RESUME ACTION BUTTON */}
          <div className="about-action-area">
            <a href="#resume" className="resume-download-btn">
              <span>VIEW RESUME</span>
              <svg className="download-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: ORBIT CONSTELLATION MAP */}
        <div className="constellation-wrapper">
          <div className="constellation-container">
            <svg viewBox="0 0 500 500" className="constellation-svg">
              {/* Radial Orbit Tracks */}
              <circle cx="250" cy="250" r="85" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 5" />
              <circle cx="250" cy="250" r="150" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 5" />
              <circle cx="250" cy="250" r="215" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 6" />

              {/* Central Static Core: KISHORE.OS */}
              <g className="core-system">
                <circle cx="250" cy="250" r="34" fill="#0b0813" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" />
                <circle cx="250" cy="250" r="28" fill="none" stroke="rgba(0,217,255,0.2)" strokeWidth="1" />
                <text x="250" y="254" textAnchor="middle" className="core-text">KISHORE.OS</text>
              </g>

              {/* Planet 1: Node.js (Left - Middle Orbit) */}
              <g className="planet-node" onMouseEnter={() => setHoveredPlanet("node")} onMouseLeave={() => setHoveredPlanet(null)}>
                <circle cx="100" cy="250" r="8" fill="#43F77C" className="glow-node" />
                <text x="100" y="275" textAnchor="middle" className="planet-label">Node.js</text>
              </g>

              {/* Planet 2: React (Right - Middle Orbit) */}
              <g className="planet-react" onMouseEnter={() => setHoveredPlanet("react")} onMouseLeave={() => setHoveredPlanet(null)}>
                <circle cx="400" cy="250" r="8" fill="#00D9FF" className="glow-react" />
                <text x="400" y="275" textAnchor="middle" className="planet-label">React</text>
              </g>

              {/* Planet 3: AI APIs (Top Left - Outer Orbit) */}
              <g className="planet-ai" onMouseEnter={() => setHoveredPlanet("ai")} onMouseLeave={() => setHoveredPlanet(null)}>
                <circle cx="170" cy="80" r="7" fill="#8B5CF6" className="glow-ai" />
                <text x="170" y="105" textAnchor="middle" className="planet-label">AI APIs</text>
              </g>

              {/* Planet 4: Java (Top Right - Outer Orbit) */}
              <g className="planet-java" onMouseEnter={() => setHoveredPlanet("java")} onMouseLeave={() => setHoveredPlanet(null)}>
                <circle cx="370" cy="130" r="7" fill="#F97316" className="glow-java" />
                <text x="370" y="155" textAnchor="middle" className="planet-label">Java</text>
              </g>

              {/* Planet 5: TensorFlow (Bottom Left - Outer Orbit) */}
              <g className="planet-tf" onMouseEnter={() => setHoveredPlanet("tf")} onMouseLeave={() => setHoveredPlanet(null)}>
                <circle cx="160" cy="410" r="7" fill="#FF3366" className="glow-tf" />
                <text x="160" y="435" textAnchor="middle" className="planet-label">TensorFlow</text>
              </g>

              {/* Planet 6: Cloud (Bottom Right - Outer Orbit) */}
              <g className="planet-cloud" onMouseEnter={() => setHoveredPlanet("cloud")} onMouseLeave={() => setHoveredPlanet(null)}>
                <circle cx="390" cy="380" r="8" fill="#00D9FF" className="glow-cloud" />
                <text x="390" y="405" textAnchor="middle" className="planet-label">Cloud</text>
              </g>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}