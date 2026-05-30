import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import "./Projects.css";

// React Icons matching your exact Skills module ecosystem
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava,
  FaBrain, FaSitemap, FaNodeJs, FaLightbulb, FaGithub, FaExternalLinkAlt,
  FaChevronLeft, FaChevronRight, FaTh, FaPlay, FaTimes
} from "react-icons/fa";
import {
  SiSpringboot, SiMysql, SiTailwindcss, SiHuggingface,
  SiTypescript, SiGooglegemini, SiVite
} from "react-icons/si";

// Re-using your exact CustomPythonIcon path from Skills.jsx
const CustomPythonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48" width="16px" height="16px" style={{ transform: 'scale(1.2)' }}>
    <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z" /><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z" />
  </svg>
);

// Map technology string labels to respective React Icons and exact color definitions
const ProjectTechMap = {
  "HTML": { icon: <FaHtml5 />, color: "#E34F26" },
  "CSS": { icon: <FaCss3Alt />, color: "#1572B6" },
  "JavaScript": { icon: <FaJs />, color: "#F7DF1E" },
  "Java": { icon: <FaJava />, color: "#982130" },
  "JavaFX": { icon: <FaSitemap />, color: "#3A44C4" },
  "Spring Boot": { icon: <SiSpringboot />, color: "#6DB33F" },
  "MySQL": { icon: <SiMysql />, color: "#4479A1" },
  "React.js": { icon: <FaReact />, color: "#08defd" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#06B6D4" },
  "Node.js": { icon: <FaNodeJs />, color: "#339939" },
  "Python": { icon: <CustomPythonIcon />, color: "inherit" },
  "NLP": { icon: <SiHuggingface />, color: "#FFD21E" },
  "Machine Learning": { icon: <FaBrain />, color: "#A855F7" },
  "Data Structures": { icon: <FaSitemap />, color: "#3B82F6" },
  "Recursion": { icon: <FaLightbulb />, color: "#FFD700" },
  "TypeScript": { icon: <SiTypescript />, color: "#3178C6" },
  "Gemini AI": { icon: <SiGooglegemini />, color: "#8E75FF" },
  "Vite": { icon: <SiVite />, color: "#646CFF" }
};

function ProjectCard({ project, themeClass, renderIcon, isExpanded, onExpand, isGridMode, onPlayDemo }) {
  const handleCardClick = (e) => {
    if (e.target.closest('.project-links') || e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    onExpand();
  };

  return (
    <div
      className={`project-card-wrapper ${isExpanded ? "expanded" : ""} ${isGridMode ? "grid-card" : ""}`}
      onClick={handleCardClick}
    >
      <div className={`project-card ${themeClass}`}>

        {/* COLLAPSED STATE */}
        {(!isExpanded || isGridMode) && (
          <div className="project-vertical-title-view">
            <h2 className="vertical-title">{project.title}</h2>
            <div className="vertical-icon-wrapper">
              {renderIcon()}
            </div>
          </div>
        )}

        {/* EXPANDED REVEAL STATE */}
        {(isExpanded || isGridMode) && (
          <div className="project-expanded-view">
            <div className="project-header">
              <div className="project-title-container">
                <h2 className="project-title">{project.title} ({project.year})</h2>

                <div className="project-tech-badges">
                  {project.tech.map((techName, idx) => {
                    const techMeta = ProjectTechMap[techName] || { icon: null, color: "inherit" };
                    return (
                      <span key={idx} className="tech-badge">
                        <span className="tech-badge-icon" style={{ color: techMeta.color }}>
                          {techMeta.icon}
                        </span>
                        <span className="tech-badge-name">{techName}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="project-graphic-wrapper">
                {renderIcon()}
              </div>
            </div>

            <div className="project-desc-wrapper">
              <ul className="project-desc">
                {project.desc.map((item, i) => (
                  <li key={i} className="project-desc-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-footer">
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-btn github-btn">
                  <FaGithub className="btn-icon" />
                  <span>GitHub</span>
                </a>

                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-btn demo-btn">
                    <FaExternalLinkAlt className="btn-icon" />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.videoDemo && (
                  <button
                    className="project-btn play-demo-btn"
                    onClick={(e) => { e.stopPropagation(); onPlayDemo(project.videoDemo); }}
                  >
                    <FaPlay className="btn-icon" />
                    <span>Watch Demo</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function Projects() {
  const [isGridMode, setIsGridMode] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = (src) => setActiveVideo(src);
  const closeVideo = () => setActiveVideo(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") closeVideo(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      title: "AI Puzzle Lab",
      year: "March 2026",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Gemini AI"],
      desc: [
        "Interactive puzzle lab with Sudoku, Sliding Puzzle, Maze, and Color Sorter powered by Gemini AI hints",
        "Dual deployment as a full React/TypeScript web app and a standalone single-HTML version",
        "Modern UI with Tailwind CSS, Framer Motion animations, and Canvas Confetti effects"
      ],
      github: "https://github.com/Kishore-Krish19/AI_Puzzle_lab",
      demo: "https://ai-puzzle-lab.vercel.app",
      themeClass: "ai-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <rect x="25" y="25" width="70" height="70" rx="12" stroke="currentColor" strokeWidth="2" />
          <rect x="31" y="31" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
          <rect x="52" y="31" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
          <rect x="73" y="31" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
          <rect x="31" y="52" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
          <rect x="52" y="52" width="16" height="16" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="60" r="3" fill="currentColor" />
          <rect x="73" y="52" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
          <rect x="31" y="73" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
          <rect x="52" y="73" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Prompt Forge AI",
      year: "March 2026",
      tech: ["React.js", "Python", "NLP", "Machine Learning"],
      desc: [
        "Intelligent prompt optimization platform that analyzes intent and refines raw input for AI systems",
        "Multi-model benchmarking across Gemini, Groq, and Qwen with automatic best-output selection",
        "Multilingual speech-to-text input with real-time prompt enhancement and feedback"
      ],
      github: "https://github.com/Kishore-Krish19/Prompt_Forge_AI",
      demo: "https://prompt-forge-ai-v1.vercel.app",
      themeClass: "ai-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <rect x="25" y="25" width="70" height="70" rx="12" stroke="currentColor" strokeWidth="2" />
          <path d="M40 50h40M40 70h25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="80" cy="70" r="4" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "ChatBot Project",
      year: "December 2025",
      tech: ["Python", "React.js", "NLP", "Machine Learning"],
      desc: [
        "ML-powered intent classification chatbot using TensorFlow/Keras with NLTK preprocessing",
        "ChatGPT-style React UI with markdown rendering and dark/light theme toggle",
        "Dockerized full-stack deployment on Render with FAQ quick-prompts and Git LFS"
      ],
      github: "https://github.com/Kishore-Krish19/ChatBot-Project",
      demo: "https://chatbot-001-xyz.onrender.com",
      themeClass: "ai-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <rect x="20" y="28" width="68" height="48" rx="12" stroke="currentColor" strokeWidth="2" />
          <path d="M30 76l8 14 8-14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M36 48h36M36 60h22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="88" cy="38" r="12" stroke="currentColor" strokeWidth="2" />
          <path d="M84 38h8M88 34v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "EFFICACY website",
      year: "February 2026",
      tech: ["React.js", "HTML", "CSS", "JavaScript"],
      desc: [
        "National-level technical symposium website with event registration and payment integration",
        "Google Apps Script backend handling validation, Google Sheets storage, and email confirmations",
        "Responsive animated UI with countdown timers, QR codes, and downloadable event posters"
      ],
      github: "https://github.com/Kishore-Krish19/EFFICACY_website",
      demo: "https://gcee-efficacy26.vercel.app",
      themeClass: "web-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <rect x="25" y="25" width="70" height="70" rx="10" stroke="currentColor" strokeWidth="2" />
          <path d="M35 55l15-15 15 20 20-25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Social Media Monitor",
      year: "March 2026",
      tech: ["Java", "Spring Boot", "MySQL", "React.js"],
      desc: [
        "Java Enterprise backend managing scheduled multi-platform social media postings",
        "Interactive analytics dashboard tracking user engagement and growth metrics",
        "PostgreSQL database model handling high-frequency scheduler operations"
      ],
      github: "https://github.com/Muhammed-umer/socialMediaManagement",
      demo: null,
      themeClass: "java-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <circle cx="40" cy="40" r="12" stroke="currentColor" strokeWidth="2" />
          <circle cx="80" cy="40" r="12" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="80" r="12" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="48" x2="58" y2="70" stroke="currentColor" strokeWidth="2" />
          <line x1="70" y1="48" x2="62" y2="70" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Hanoi Arena",
      year: "January 2026",
      tech: ["Java", "React.js", "Data Structures", "Recursion"],
      desc: [
        "Multiplayer Tower of Hanoi platform optimized for 180+ concurrent players via Socket.IO",
        "Real-time leaderboards, tournament brackets, and admin dashboard controls",
        "Secure user authentication with session handling and cloud deployment"
      ],
      github: "https://github.com/Kishore-Krish19/Hanoi-Arena",
      demo: "https://hanoi-arena.vercel.app",
      themeClass: "game-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <line x1="30" y1="42" x2="30" y2="90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="42" x2="60" y2="90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="90" y1="42" x2="90" y2="90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <rect x="45" y="80" width="30" height="8" rx="3" stroke="currentColor" strokeWidth="2" />
          <rect x="40" y="70" width="40" height="8" rx="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "GCEE Website Redesign",
      year: "March 2026",
      tech: ["HTML", "CSS", "JavaScript", "React.js"],
      desc: [
        "Complete visual redesign of the Government College of Engineering web portal",
        "Modern fluid grid layout with high-performance academic information modules",
        "Optimized SEO meta tags, accessibility indices, and responsive design"
      ],
      github: "https://github.com/Kishore-Krish19/gcee.ac.in",
      demo: "https://gcee-ac-in-web.vercel.app",
      themeClass: "web-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <rect x="25" y="30" width="70" height="60" rx="8" stroke="currentColor" strokeWidth="2" />
          <line x1="25" y1="42" x2="95" y2="42" stroke="currentColor" strokeWidth="1.5" />
          <path d="M45 60h30M45 74h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "TripSync",
      year: "April 2026",
      tech: ["React.js", "Python", "Node.js", "MySQL"],
      desc: [
        "Real-time location tracking app that lets friends share live positions during group trips",
        "Interactive map displaying friend locations with live distance calculations between members",
        "One-tap emergency button that instantly alerts all nearby friends with your location"
      ],
      github: "https://github.com/Muhammed-umer/TripSync",
      demo: "https://tripsync-college-trip.web.app",
      themeClass: "web-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path d="M35 85V45a8 8 0 0 1 8-8h34a8 8 0 0 1 8 8v40" stroke="currentColor" strokeWidth="2" />
          <path d="M25 85h70M50 37V25h20v12" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="60" r="10" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Standup Formatter",
      year: "May 2026",
      tech: ["React.js", "JavaScript", "Node.js"],
      desc: [
        "AI-powered standup generator using Gemini with automatic Groq fallback",
        "Multiple tone presets: Professional, Casual, Short & Punchy, and Detailed",
        "One-click clipboard copy with Slack-ready markdown formatting"
      ],
      github: "https://github.com/Kishore-Krish19/Standup_Formatter",
      demo: "https://standup-formatter-nu.vercel.app",
      themeClass: "web-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <rect x="30" y="25" width="60" height="70" rx="8" stroke="currentColor" strokeWidth="2" />
          <path d="M45 45h30M45 60h30M45 75h15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "AI Data Analyst Agent",
      year: "March 2026",
      tech: ["Python", "Machine Learning", "NLP", "React.js"],
      desc: [
        "CLI-based AI assistant that auto-analyzes CSV datasets with statistical summaries and heatmaps",
        "Trains baseline RandomForest models and generates plain-English AI insights via Qwen LLM",
        "Conversational memory enabling contextual follow-up questions about uploaded data"
      ],
      github: "https://github.com/Kishore-Krish19/AI-Data-Analyst-Agent",
      demo: null,
      videoDemo: "videos/Data-Analyst-agent-demo.mp4",
      themeClass: "ai-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path d="M30 85h60M40 85V35l40 25-40 10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="80" cy="60" r="12" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Student Management Application",
      year: "June 2025",
      tech: ["Java", "JavaFX", "Spring Boot", "MySQL"],
      desc: [
        "JavaFX desktop application built with MVC architecture pattern",
        "Spring Boot REST APIs providing full CRUD operations",
        "Secure frontend-backend integration with remote MySQL database access"
      ],
      github: "https://github.com/Kishore-Krish19/Form",
      demo: null,
      themeClass: "java-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <rect x="35" y="20" width="50" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
          <rect x="35" y="44" width="50" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="90" cy="80" r="14" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Mini Web Projects",
      year: "March 2025",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: [
        "Collection of interactive browser apps: Paint Brush, Image Grayscale Converter, and To-Do List",
        "Pure HTML/CSS/JS with no backend — runs entirely in the browser",
        "Mobile and desktop friendly with easy-to-extend modular structure"
      ],
      github: "https://github.com/Kishore-Krish19/Mini_Projects_with_HTML_CSS_JS",
      demo: " https://kishore-krish19.github.io/Mini_Projects_with_HTML_CSS_JS",
      themeClass: "web-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <rect x="25" y="25" width="70" height="55" rx="6" stroke="currentColor" strokeWidth="2" />
          <line x1="25" y1="38" x2="95" y2="38" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Towers of Hanoi Solver",
      year: "December 2025",
      tech: ["Java", "React.js", "Data Structures", "Recursion"],
      desc: [
        "Interactive Tower of Hanoi game with click-based disk movement and auto-solve",
        "Dark/light theme toggle with sound effects, move counter, and timer tracking",
        "Configurable 3–7 disk difficulty with optimal solution visualization"
      ],
      github: "https://github.com/Kishore-Krish19/TowersOfHanoi",
      demo: "https://towers-of-hanoi-game.vercel.app",
      themeClass: "game-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <line x1="30" y1="42" x2="30" y2="90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="42" x2="60" y2="90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="90" y1="42" x2="90" y2="90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M20 90h80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "My Website",
      year: "August 2024",
      tech: ["HTML", "CSS"],
      desc: [
        "Sample advertisement website built for a personal mini business venture",
        "Created as a hands-on learning project while mastering HTML, CSS, and JavaScript",
        "Deployed via GitHub Pages with a clean, responsive, and accessible layout"
      ],
      github: "https://github.com/Kishore-Krish19/My_website",
      demo: "https://kishore-krish19.github.io/My_website/",
      themeClass: "web-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <rect x="20" y="25" width="80" height="70" rx="8" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="40" x2="100" y2="40" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="3" fill="currentColor" fillOpacity="0.6" />
          <circle cx="44" cy="32" r="3" fill="currentColor" fillOpacity="0.6" />
          <circle cx="56" cy="32" r="3" fill="currentColor" fillOpacity="0.6" />
          <path d="M35 58h50M35 70h35M35 82h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const totalProjects = projects.length;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalProjects - 1 : prev - 1));
    setIsPaused(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalProjects - 1 ? 0 : prev + 1));
    setIsPaused(true);
  };

  // Get index parameters for exactly 3 sequential cards
  const getVisibleIndices = () => {
    const leftIndex = (currentSlide - 1 + totalProjects) % totalProjects;
    const middleIndex = currentSlide;
    const rightIndex = (currentSlide + 1) % totalProjects;
    return [leftIndex, middleIndex, rightIndex];
  };

  const visibleIndices = getVisibleIndices();

  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 868);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    if (isPaused || isGridMode) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalProjects);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, isGridMode, totalProjects]);

  return (
    <section id="projects" className="projects-section">
      <div className="content-layer">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="projects-title section-heading">Code <span className="heading-gradient">Showcase</span></h1>
          <div className="projects-subtitle-underline section-heading-bar"></div>
        </motion.div>

        {/* CONTROLS DISPLAY OVERVIEW SWITCHER TOGGLE LINK */}
        <motion.div
          className="toggle-view-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <button className="view-toggle-btn" onClick={() => setIsGridMode(!isGridMode)}>
            <FaTh className="btn-icon" />
            <span>{isGridMode ? "Show Slideshow" : "Show All Projects"}</span>
          </button>
        </motion.div>

        {!isGridMode ? (
          /* LOOP CAROUSEL CONTAINER SLIDESHOW MODE */
          <div className="projects-carousel-wrapper">
            {!isMobile && (
              <button className="carousel-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous Project">
                <FaChevronLeft />
              </button>
            )}

            <div
              className="projects-flex-container"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={isMobile ? handleTouchStart : undefined}
              onTouchMove={isMobile ? handleTouchMove : undefined}
              onTouchEnd={isMobile ? handleTouchEnd : undefined}
            >
              {isMobile ? (
                /* Mobile View: Render only the active slide fully expanded */
                <ProjectCard
                  key={currentSlide}
                  project={projects[currentSlide]}
                  themeClass={projects[currentSlide].themeClass}
                  renderIcon={projects[currentSlide].renderIcon}
                  isExpanded={true}
                  onExpand={() => {}}
                  isGridMode={false}
                  onPlayDemo={openVideo}
                />
              ) : (
                /* Desktop View: Render exactly 3 visible slide cards */
                visibleIndices.map((projectIndex, positionIdx) => {
                  const p = projects[projectIndex];
                  const isMiddle = positionIdx === 1;

                  return (
                    <ProjectCard
                      key={projectIndex}
                      project={p}
                      themeClass={p.themeClass}
                      renderIcon={p.renderIcon}
                      isExpanded={isMiddle}
                      onExpand={() => {
                        if (positionIdx === 0) prevSlide();
                        if (positionIdx === 2) nextSlide();
                      }}
                      isGridMode={false}
                      onPlayDemo={openVideo}
                    />
                  );
                })
              )}
            </div>

            {!isMobile && (
              <button className="carousel-nav-btn next-btn" onClick={nextSlide} aria-label="Next Project">
                <FaChevronRight />
              </button>
            )}

            {isMobile && (
              /* Mobile Carousel navigation toolbar */
              <div className="mobile-carousel-controls">
                <button className="mobile-nav-btn" onClick={prevSlide} aria-label="Previous Project">
                  <FaChevronLeft />
                </button>
                <span className="mobile-carousel-indicator">
                  {currentSlide + 1} / {totalProjects}
                </span>
                <button className="mobile-nav-btn" onClick={nextSlide} aria-label="Next Project">
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* GRID LAYOUT GALLERY ALL PROJECTS SHOW MODE */
          <div className="projects-grid-container">
            {projects.map((p, index) => (
              <ProjectCard
                key={index}
                project={p}
                themeClass={p.themeClass}
                renderIcon={p.renderIcon}
                isExpanded={true}
                onExpand={() => { }}
                isGridMode={true}
                onPlayDemo={openVideo}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── VIDEO DEMO MODAL (Portal → document.body) ── */}
      {activeVideo && createPortal(
        <div className="video-modal-backdrop" onClick={closeVideo}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideo} aria-label="Close video">
              <FaTimes />
            </button>
            <video
              className="video-modal-player"
              src={activeVideo}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}