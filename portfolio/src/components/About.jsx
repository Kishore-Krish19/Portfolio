import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";

export default function About() {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNode, setActiveNode] = useState(-1);
  const timelineRef = useRef(null);
  const rafRef = useRef(null);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;

    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      
      // Calculate active progress strictly within the bounds of the timeline block
      const totalHeight = rect.height;
      const entryPoint = windowH * 0.6; // Laser starts lighting up when timeline is 60% down the screen
      const scrolledIntoTimeline = entryPoint - rect.top;
      
      const progress = Math.min(1, Math.max(0, scrolledIntoTimeline / totalHeight));
      targetProgress.current = progress;

      // Precision active node detection based on physical node elements
      const nodes = timelineRef.current.querySelectorAll(".edu-node");
      let newActive = -1;
      nodes.forEach((node, i) => {
        const nodeTop = node.getBoundingClientRect().top;
        if (nodeTop < windowH * 0.65) {
          newActive = i;
        }
      });
      setActiveNode(newActive);
    };

    const animate = () => {
      currentProgress.current = lerp(currentProgress.current, targetProgress.current, 0.1);
      
      if (Math.abs(currentProgress.current - scrollProgress) > 0.0001) {
        setScrollProgress(currentProgress.current);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial calculation jumpstart
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollProgress]);

  const twinklingStars = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.8,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 4,
    }));
  }, []);

  const planets = {
    React: {
      name: "React",
      color: "#00D9FF",
      glowColor: "rgba(0,217,255,0.6)",
      cx: 340,
      cy: 250,
      orbitClass: "orbit-spin-cw-fast",
      counterClass: "counter-spin-cw-fast",
      sub: "Modern Frontend Systems",
      desc: "Crafting highly responsive, state-driven interfaces with pixel-perfect, elegant layouts.",
    },
    NodeJS: {
      name: "Node.js",
      color: "#43F77C",
      glowColor: "rgba(67,247,124,0.6)",
      cx: 160,
      cy: 250,
      orbitClass: "orbit-spin-cw-fast",
      counterClass: "counter-spin-cw-fast",
      sub: "Scalable Backend Services",
      desc: "Designing high-throughput, event-driven REST APIs and real-time microservices.",
    },
    Java: {
      name: "Java",
      color: "#F97316",
      glowColor: "rgba(249,115,22,0.6)",
      cx: 330,
      cy: 111.4,
      orbitClass: "orbit-spin-ccw",
      counterClass: "counter-spin-ccw",
      sub: "Enterprise Foundations",
      desc: "Building robust, object-oriented systems, high-performance algorithms, and secure backend engines.",
    },
    TensorFlow: {
      name: "TensorFlow",
      color: "#FF3366",
      glowColor: "rgba(255,51,102,0.6)",
      cx: 170,
      cy: 388.6,
      orbitClass: "orbit-spin-ccw",
      counterClass: "counter-spin-ccw",
      sub: "Deep Learning Models",
      desc: "Implementing custom neural networks, machine learning models, and computer vision systems.",
    },
    AI_APIs: {
      name: "AI APIs",
      color: "#8B5CF6",
      glowColor: "rgba(139,92,246,0.6)",
      cx: 135,
      cy: 50.8,
      orbitClass: "orbit-spin-cw",
      counterClass: "counter-spin-cw",
      sub: "Intelligent Integrations",
      desc: "Engineering autonomous LLM applications, retrieval-augmented systems (RAG), and agentic pipelines.",
    },
    Cloud: {
      name: "Cloud",
      color: "#00D9FF",
      glowColor: "rgba(0,217,255,0.6)",
      cx: 365,
      cy: 449.2,
      orbitClass: "orbit-spin-cw",
      counterClass: "counter-spin-cw",
      sub: "Scalable Cloud Systems",
      desc: "Deploying highly-available cloud infrastructure, automated CI/CD pipelines, and secure serverless clusters.",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const active = hoveredPlanet ? planets[hoveredPlanet] : null;

  return (
    <section id="about" className="about-section relative">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="about-grid" />
        <div className="about-nebula-cyan" />
        <div className="about-nebula-purple" />
        {twinklingStars.map((star) => (
          <motion.div
            key={star.id}
            className="about-star absolute"
            style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
            animate={{ opacity: [0.15, 0.75, 0.15], scale: [0.9, 1.2, 0.9] }}
            transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ===== SECTION LABEL + TITLE ===== */}
      <motion.div
        className="about-section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="about-headline">Personal <span className="gradient-text">Overview</span></h1>
        <div className="about-headline-bar" />
      </motion.div>

      {/* ===== MAIN LAYOUT ===== */}
      <div className="about-container">

        {/* ===== LEFT ===== */}
        <motion.div
          className="about-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="about-name" variants={itemVariants}>
            Hi, I'm <span className="gradient-text">Kishore E</span>
          </motion.h2>

          <motion.p className="about-role" variants={itemVariants}>
            Full Stack Developer &amp; AI Enthusiast
          </motion.p>

          <motion.div className="about-divider-line" variants={itemVariants} />

          <motion.p className="about-tagline" variants={itemVariants}>
            I build <strong className="cyan-text">modern</strong>,{" "}
            <strong className="cyan-text">scalable</strong>, and{" "}
            <strong className="purple-cyan-text">intelligent web applications</strong> that solve
            real-world problems and deliver{" "}
            <strong className="purple-text">seamless user experiences</strong>.
          </motion.p>

          {/* FEATURE PILLS */}
          <motion.div className="about-features" variants={itemVariants}>
            <div className="feature-pill">
              <span className="feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
              </span>
              <p>
                I specialize in <strong className="cyan-text">React</strong>,{" "}
                <strong className="cyan-text">Node.js</strong>,{" "}
                <strong className="cyan-text">Java</strong>,{" "}
                <strong className="cyan-text">TensorFlow</strong>, and{" "}
                <strong className="cyan-text">AI APIs</strong> to build end-to-end solutions —
                from intuitive frontends to powerful backends and intelligent systems.
              </p>
            </div>

            <div className="feature-pill">
              <span className="feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                </svg>
              </span>
              <p>
                I enjoy solving algorithmic challenges, exploring new technologies, and turning
                ideas into <strong className="cyan-text">clean</strong>,{" "}
                <strong className="cyan-text">efficient</strong>, and{" "}
                <strong className="purple-text">impactful</strong> digital products.
              </p>
            </div>
          </motion.div>

          {/* METRICS */}
          <motion.div className="metrics-container" variants={itemVariants}>
            <div className="metric-card">
              <span className="metric-number cyan">200+</span>
              <span className="metric-label">DSA PROBLEMS<br />SOLVED</span>
            </div>
            <div className="metric-card">
              <span className="metric-number purple">10+</span>
              <span className="metric-label">PROJECTS<br />BUILT</span>
            </div>
            <div className="metric-card">
              <span className="metric-number cyan">AI</span>
              <span className="metric-label">SYSTEMS<br />BUILT</span>
            </div>
          </motion.div>

          {/* BUTTON */}
          <motion.div className="about-buttons" variants={itemVariants}>
            <motion.button
              className="primary-btn"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Kishore_E_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              VIEW RESUME
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: 8 }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ===== RIGHT CONSTELLATION ===== */}
        <motion.div
          className="constellation-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="constellation-container">

            {/* Tooltip */}
            <AnimatePresence>
              {active && (
                <motion.div
                  className="planet-tooltip"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  style={{ borderColor: active.color + "40", boxShadow: `0 0 24px ${active.color}22` }}
                >
                  <p className="tooltip-name" style={{ color: active.color }}>{active.name}</p>
                  <p className="tooltip-sub">{active.sub}</p>
                  <p className="tooltip-desc">{active.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <svg
              viewBox="0 0 500 500"
              className={`constellation-svg ${hoveredPlanet ? "orbits-paused" : ""}`}
            >
              <defs>
                {/* Gradients for each planet */}
                <radialGradient id="reactGradient" cx="35%" cy="35%">
                  <stop offset="0%" stopColor="#7ffeff" />
                  <stop offset="100%" stopColor="#00A8C6" />
                </radialGradient>
                <radialGradient id="nodeGradient" cx="35%" cy="35%">
                  <stop offset="0%" stopColor="#9effc0" />
                  <stop offset="100%" stopColor="#22c55e" />
                </radialGradient>
                <radialGradient id="javaGradient" cx="35%" cy="35%">
                  <stop offset="0%" stopColor="#fcd34d" />
                  <stop offset="100%" stopColor="#ea580c" />
                </radialGradient>
                <radialGradient id="tfGradient" cx="35%" cy="35%">
                  <stop offset="0%" stopColor="#ff6b9d" />
                  <stop offset="100%" stopColor="#cc0033" />
                </radialGradient>
                <radialGradient id="aiGradient" cx="35%" cy="35%">
                  <stop offset="0%" stopColor="#c4b5fd" />
                  <stop offset="100%" stopColor="#6d28d9" />
                </radialGradient>
                <radialGradient id="cloudGradient" cx="35%" cy="35%">
                  <stop offset="0%" stopColor="#7ffeff" />
                  <stop offset="100%" stopColor="#00A8C6" />
                </radialGradient>
                {/* Center glow */}
                <radialGradient id="centerGradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#1a1a3e" />
                  <stop offset="100%" stopColor="#0d0d1f" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="glow-strong">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Orbit rings */}
              <circle cx="250" cy="250" r="90" fill="none" stroke="rgba(0,217,255,0.14)" strokeWidth="1" strokeDasharray="4 8" />
              <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(139,92,246,0.13)" strokeWidth="1" strokeDasharray="4 10" />
              <circle cx="250" cy="250" r="230" fill="none" stroke="rgba(0,217,255,0.09)" strokeWidth="1" strokeDasharray="5 12" />

              {/* Constellation lines between planets */}
              <g opacity="0.18" stroke="rgba(180,200,255,0.5)" strokeWidth="0.8">
                {/* Inner ring connections */}
                <line x1="340" y1="250" x2="160" y2="250" />
                {/* Mid ring connections */}
                <line x1="330" y1="111.4" x2="170" y2="388.6" />
                <line x1="330" y1="111.4" x2="340" y2="250" />
                <line x1="170" y1="388.6" x2="160" y2="250" />
                {/* Outer ring connections */}
                <line x1="135" y1="50.8" x2="330" y2="111.4" />
                <line x1="365" y1="449.2" x2="170" y2="388.6" />
                <line x1="135" y1="50.8" x2="160" y2="250" />
                <line x1="365" y1="449.2" x2="340" y2="250" />
              </g>

              {/* ===== CENTER PLANET (KISHORE.OS) ===== */}
              {/* Outer ring */}
              <circle cx="250" cy="250" r="52" fill="none" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" />
              {/* Orbital dot */}
              <g className="orbit-spin-cw" style={{ transformOrigin: "250px 250px" }}>
                <circle cx="302" cy="250" r="4" fill="#8B5CF6" opacity="0.9" filter="url(#glow)" />
              </g>
              {/* Core */}
              <circle cx="250" cy="250" r="44" fill="url(#centerGradient)" />
              <circle cx="250" cy="250" r="44" fill="none" stroke="rgba(139,92,246,0.7)" strokeWidth="1.5" />
              <circle cx="250" cy="250" r="38" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
              {/* Inner glow */}
              <circle cx="250" cy="250" r="30" fill="rgba(100,60,200,0.2)" />
              {/* Text */}
              <text x="250" y="247" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="700" letterSpacing="1.5" fontFamily="'Courier New', monospace">KISHORE</text>
              <text x="250" y="259" textAnchor="middle" fill="rgba(180,150,255,0.9)" fontSize="7.5" fontWeight="600" letterSpacing="2" fontFamily="'Courier New', monospace">.OS</text>

              {/* ===== REACT PLANET (inner ring, right) ===== */}
              <g
                className={planets.React.orbitClass}
                style={{ transformOrigin: "250px 250px" }}
                onMouseEnter={() => setHoveredPlanet("React")}
                onMouseLeave={() => setHoveredPlanet(null)}
              >
                <g className={planets.React.counterClass} style={{ transformOrigin: `${planets.React.cx}px ${planets.React.cy}px` }}>
                  <circle cx={planets.React.cx} cy={planets.React.cy} r="22" fill="rgba(0,217,255,0.08)" />
                  <circle cx={planets.React.cx} cy={planets.React.cy} r="16" fill="url(#reactGradient)" filter="url(#glow)" />
                  <circle cx={planets.React.cx} cy={planets.React.cy} r="16" fill="none" stroke="rgba(0,217,255,0.6)" strokeWidth="1" />
                  <text x={planets.React.cx} y={planets.React.cy + 30} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9.5" fontFamily="'Courier New', monospace" fontWeight="600">React</text>
                </g>
              </g>

              {/* ===== NODE.JS PLANET (inner ring, left) ===== */}
              <g
                className={planets.NodeJS.orbitClass}
                style={{ transformOrigin: "250px 250px" }}
                onMouseEnter={() => setHoveredPlanet("NodeJS")}
                onMouseLeave={() => setHoveredPlanet(null)}
              >
                <g className={planets.NodeJS.counterClass} style={{ transformOrigin: `${planets.NodeJS.cx}px ${planets.NodeJS.cy}px` }}>
                  <circle cx={planets.NodeJS.cx} cy={planets.NodeJS.cy} r="22" fill="rgba(67,247,124,0.08)" />
                  <circle cx={planets.NodeJS.cx} cy={planets.NodeJS.cy} r="16" fill="url(#nodeGradient)" filter="url(#glow)" />
                  <circle cx={planets.NodeJS.cx} cy={planets.NodeJS.cy} r="16" fill="none" stroke="rgba(67,247,124,0.6)" strokeWidth="1" />
                  <text x={planets.NodeJS.cx} y={planets.NodeJS.cy + 30} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9.5" fontFamily="'Courier New', monospace" fontWeight="600">Node.js</text>
                </g>
              </g>

              {/* ===== JAVA PLANET (mid ring, top-right) ===== */}
              <g
                className={planets.Java.orbitClass}
                style={{ transformOrigin: "250px 250px" }}
                onMouseEnter={() => setHoveredPlanet("Java")}
                onMouseLeave={() => setHoveredPlanet(null)}
              >
                <g className={planets.Java.counterClass} style={{ transformOrigin: `${planets.Java.cx}px ${planets.Java.cy}px` }}>
                  <circle cx={planets.Java.cx} cy={planets.Java.cy} r="24" fill="rgba(249,115,22,0.08)" />
                  <circle cx={planets.Java.cx} cy={planets.Java.cy} r="17" fill="url(#javaGradient)" filter="url(#glow)" />
                  <circle cx={planets.Java.cx} cy={planets.Java.cy} r="17" fill="none" stroke="rgba(249,115,22,0.6)" strokeWidth="1" />
                  <text x={planets.Java.cx + 22} y={planets.Java.cy + 4} textAnchor="start" fill="rgba(255,255,255,0.8)" fontSize="9.5" fontFamily="'Courier New', monospace" fontWeight="600">Java</text>
                </g>
              </g>

              {/* ===== TENSORFLOW PLANET (mid ring, bottom-left) ===== */}
              <g
                className={planets.TensorFlow.orbitClass}
                style={{ transformOrigin: "250px 250px" }}
                onMouseEnter={() => setHoveredPlanet("TensorFlow")}
                onMouseLeave={() => setHoveredPlanet(null)}
              >
                <g className={planets.TensorFlow.counterClass} style={{ transformOrigin: `${planets.TensorFlow.cx}px ${planets.TensorFlow.cy}px` }}>
                  <circle cx={planets.TensorFlow.cx} cy={planets.TensorFlow.cy} r="24" fill="rgba(255,51,102,0.08)" />
                  <circle cx={planets.TensorFlow.cx} cy={planets.TensorFlow.cy} r="17" fill="url(#tfGradient)" filter="url(#glow)" />
                  <circle cx={planets.TensorFlow.cx} cy={planets.TensorFlow.cy} r="17" fill="none" stroke="rgba(255,51,102,0.6)" strokeWidth="1" />
                  <text x={planets.TensorFlow.cx} y={planets.TensorFlow.cy + 32} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9.5" fontFamily="'Courier New', monospace" fontWeight="600">TensorFlow</text>
                </g>
              </g>

              {/* ===== AI APIs PLANET (outer ring, top-left) ===== */}
              <g
                className={planets.AI_APIs.orbitClass}
                style={{ transformOrigin: "250px 250px" }}
                onMouseEnter={() => setHoveredPlanet("AI_APIs")}
                onMouseLeave={() => setHoveredPlanet(null)}
              >
                <g className={planets.AI_APIs.counterClass} style={{ transformOrigin: `${planets.AI_APIs.cx}px ${planets.AI_APIs.cy}px` }}>
                  <circle cx={planets.AI_APIs.cx} cy={planets.AI_APIs.cy} r="22" fill="rgba(139,92,246,0.10)" />
                  <circle cx={planets.AI_APIs.cx} cy={planets.AI_APIs.cy} r="15" fill="url(#aiGradient)" filter="url(#glow)" />
                  <circle cx={planets.AI_APIs.cx} cy={planets.AI_APIs.cy} r="15" fill="none" stroke="rgba(139,92,246,0.6)" strokeWidth="1" />
                  <text x={planets.AI_APIs.cx} y={planets.AI_APIs.cy + 28} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9.5" fontFamily="'Courier New', monospace" fontWeight="600">AI APIs</text>
                </g>
              </g>

              {/* ===== CLOUD PLANET (outer ring, bottom-right) ===== */}
              <g
                className={planets.Cloud.orbitClass}
                style={{ transformOrigin: "250px 250px" }}
                onMouseEnter={() => setHoveredPlanet("Cloud")}
                onMouseLeave={() => setHoveredPlanet(null)}
              >
                <g className={planets.Cloud.counterClass} style={{ transformOrigin: `${planets.Cloud.cx}px ${planets.Cloud.cy}px` }}>
                  <circle cx={planets.Cloud.cx} cy={planets.Cloud.cy} r="22" fill="rgba(0,217,255,0.10)" />
                  <circle cx={planets.Cloud.cx} cy={planets.Cloud.cy} r="15" fill="url(#cloudGradient)" filter="url(#glow)" />
                  <circle cx={planets.Cloud.cx} cy={planets.Cloud.cy} r="15" fill="none" stroke="rgba(0,217,255,0.6)" strokeWidth="1" />
                  <text x={planets.Cloud.cx} y={planets.Cloud.cy + 28} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9.5" fontFamily="'Courier New', monospace" fontWeight="600">Cloud</text>
                </g>
              </g>

            </svg>
          </div>
        </motion.div>
      </div>

      {/* ===== EDUCATION TIMELINE ===== */}
      <div className="edu-section-wrapper">
        {/* Section heading */}
        <motion.div
          className="edu-heading-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="edu-eyebrow">// MISSION LOG</span>
          <h2 className="edu-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="edu-subtitle-text">Tracing the trajectory through the cosmos of knowledge</p>
          <div className="edu-title-bar" />
        </motion.div>

        {/* Timeline */}
        <div className="edu-timeline-outer" ref={timelineRef}>
          {/* Scroll-driven laser beam track */}
          <div className="edu-track-bg" />
          <div
            className="edu-track-beam"
            style={{ height: `${scrollProgress * 100}%` }}
          />
          {/* Glowing travel head */}
          <div
            className="edu-travel-head"
            style={{ top: `calc(${scrollProgress * 100}% - 6px)` }}
          />

          {/* ── Node 1 — B.E. CSE ── */}
          <div className={`edu-node ${activeNode >= 0 ? "edu-node--active" : ""}`}>
            <div className="edu-node-dot edu-dot--purple">
              <span className="edu-dot-pulse edu-pulse--purple" />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
            </div>
            <motion.div
              className="edu-card edu-card--purple"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="edu-card-glow edu-glow--purple" />
              <div className="edu-card-inner">
                <div className="edu-card-top">
                  <div>
                    <div className="edu-card-badge edu-badge--purple">CURRENT MISSION</div>
                    <h3 className="edu-card-title">B.E. Computer Science &amp; Engineering</h3>
                  </div>
                  <div className="edu-card-year edu-year--purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                    2023 – Present
                  </div>
                </div>
                <div className="edu-card-divider" />
                <div className="edu-card-detail">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>
                  <span>Government College of Engineering, Erode</span>
                </div>
                <div className="edu-card-award edu-award--purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                  CGPA: 8.45 &nbsp;·&nbsp; Till 5th Semester
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Node 2 — 12th Std ── */}
          <div className={`edu-node ${activeNode >= 1 ? "edu-node--active" : ""}`}>
            <div className="edu-node-dot edu-dot--cyan">
              <span className="edu-dot-pulse edu-pulse--cyan" />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
            </div>
            <motion.div
              className="edu-card edu-card--cyan"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="edu-card-glow edu-glow--cyan" />
              <div className="edu-card-inner">
                <div className="edu-card-top">
                  <div>
                    <div className="edu-card-badge edu-badge--cyan">ORBIT ACHIEVED</div>
                    <h3 className="edu-card-title">Higher Secondary — 12th Standard</h3>
                  </div>
                  <div className="edu-card-year edu-year--cyan">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                    Completed 2023
                  </div>
                </div>
                <div className="edu-card-divider" />
                <div className="edu-card-detail">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>
                  <span>Dharmapuri District Government Model School, Dharmapuri</span>
                </div>
                <div className="edu-card-award edu-award--cyan">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                  Percentage: 87.5%
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Node 3 — 10th Std ── */}
          <div className={`edu-node ${activeNode >= 2 ? "edu-node--active" : ""}`}>
            <div className="edu-node-dot edu-dot--emerald">
              <span className="edu-dot-pulse edu-pulse--emerald" />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
            </div>
            <motion.div
              className="edu-card edu-card--emerald"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="edu-card-glow edu-glow--emerald" />
              <div className="edu-card-inner">
                <div className="edu-card-top">
                  <div>
                    <div className="edu-card-badge edu-badge--emerald">LAUNCH POINT</div>
                    <h3 className="edu-card-title">Secondary School — 10th Standard</h3>
                  </div>
                  <div className="edu-card-year edu-year--emerald">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                    Completed 2021
                  </div>
                </div>
                <div className="edu-card-divider" />
                <div className="edu-card-detail">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>
                  <span>Government Boys Higher Secondary School, Kaveripattinam</span>
                </div>
                <div className="edu-card-award edu-award--emerald">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                  Percentage: 90%
                </div>
              </div>
            </motion.div>
          </div>

        </div>{/* end edu-timeline-outer */}
      </div>{/* end edu-section-wrapper */}
    </section>
  );
}
