import { useState, useEffect } from "react";
import "./Projects.css";

// React Icons matching your exact Skills module ecosystem
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava,
  FaBrain, FaSitemap, FaNodeJs, FaLightbulb, FaGithub, FaExternalLinkAlt,
  FaChevronLeft, FaChevronRight, FaTh
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

function ProjectCard({ project, themeClass, renderIcon, isExpanded, onExpand, isGridMode }) {
  const handleCardClick = (e) => {
    if (e.target.closest('.project-links') || e.target.closest('a')) {
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      title: "AI Puzzle Lab",
      year: "2026",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Gemini AI"],
      desc: [
        "Interactive multi-game lab featuring classic puzzles with intelligent AI hint generation and automated solving",
        "Dual-deployment architecture supporting a full-featured React/TypeScript web app and a lightweight standalone HTML version",
        "Engaging animations and responsive UI built with Tailwind CSS, Framer Motion, and Canvas Confetti"
      ],
      github: "https://github.com/Kishore-Krish19/AI_Puzzle_lab",
      demo: "https://ai-puzzle-lab.vercel.app/",
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
      year: "2025",
      tech: ["React.js", "Python", "NLP", "Machine Learning"],
      desc: [
        "Advanced prompt engineering platform for creating and optimizing complex AI prompts",
        "Interactive testing suite with full token and cost analytical metrics",
        "Seamless history and iteration tracking for multi-agent orchestrations"
      ],
      github: "https://github.com/Kishore-Krish19/Prompt_Forge_AI",
      demo: "https://prompt-forge.vercel.app",
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
      title: "EFFICACY website",
      year: "2024",
      tech: ["React.js", "HTML", "CSS", "JavaScript"],
      desc: [
        "Dynamic workflow analyzer visualising task stats and tracking daily efficiency indices",
        "Polished dark-mode analytics panels with smooth micro-animations",
        "Optimized layout ensuring 100% responsiveness and fluid transitions"
      ],
      github: "https://github.com/Kishore-Krish19/EFFICACY_website",
      demo: "https://efficacy-track.vercel.app",
      themeClass: "web-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <rect x="25" y="25" width="70" height="70" rx="10" stroke="currentColor" strokeWidth="2" />
          <path d="M35 55l15-15 15 20 20-25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Social Media Management",
      year: "2025",
      tech: ["Java", "Spring Boot", "MySQL", "React.js"],
      desc: [
        "Java Enterprise core back-end managing scheduled multi-platform postings",
        "Interactive analytics dashboard tracking user engagements and growth metrics",
        "Robust database model built with MySQL to handle high-frequency scheduler operations"
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
      year: "2025",
      tech: ["Java", "React.js", "Data Structures", "Recursion"],
      desc: [
        "Dynamic mathematical arena visualizing solving iterations of Towers of Hanoi",
        "Interactive recursive execution with custom disc counts and custom speed parameters",
        "Strengthened conceptual core structures covering call stacks and algorithmic paths"
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
      year: "2024",
      tech: ["HTML", "CSS", "JavaScript", "React.js"],
      desc: [
        "A premium visual facelift redesign of the Government College of Engineering web portal",
        "Modern fluid grid system supporting high-performance academic information modules",
        "Optimized SEO tags, meta-descriptors and accessibility indices"
      ],
      github: "https://github.com/Kishore-Krish19/gcee.ac.in",
      demo: "https://gcee-redesign.vercel.app",
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
      year: "2025",
      tech: ["React.js", "Python", "Node.js", "MySQL"],
      desc: [
        "Collaborative social trip scheduling engine syncing group travel plans seamlessly",
        "Intelligent cost-splitting matrix with built-in multicurrency ledger features",
        "Interactive travel itinerary timelines with robust automated routing recommendations"
      ],
      github: "https://github.com/Muhammed-umer/TripSync",
      demo: "https://tripsync-app.vercel.app",
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
      year: "2026",
      tech: ["React.js", "JavaScript", "Node.js"],
      desc: [
        "Tailored developer tool formatting unstructured notes into sleek, bulleted standup formats",
        "Integrated template presets for Agile developers, remote teams, and managers",
        "Instant one-click clipboard copy with standardized markdown rendering layouts"
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
      year: "2026",
      tech: ["Python", "Machine Learning", "NLP", "React.js"],
      desc: [
        "Autonomous analytical pipeline parsing dataset sheets to yield insight trends",
        "Generates clean data summaries and plots automatically using neural intelligence",
        "Conversational NLP queries enabling non-technical users to analyze statistics"
      ],
      github: "https://github.com/Kishore-Krish19/AI-Data-Analyst-Agent",
      demo: null,
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
      year: "2025",
      tech: ["Java", "JavaFX", "Spring Boot", "MySQL"],
      desc: [
        "JavaFX-based desktop application using MVC architecture",
        "Spring Boot REST APIs with full CRUD operations",
        "Secure integration between frontend and backend with remote database access"
      ],
      github: "https://github.com/yourusername/student-management",
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
      year: "2024",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: [
        "Built multiple mini web applications",
        "Focused on responsive and user-friendly UI design"
      ],
      github: "https://github.com/yourusername/mini-projects",
      demo: "https://your-live-link.com/web-projects",
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
      year: "2025",
      tech: ["Java", "React.js", "Data Structures", "Recursion"],
      desc: [
        "Console and graphical visualizer for mathematical Hanoi puzzles",
        "Recursive algorithmic execution showcasing complete call-stack iterations",
        "Interactive peg and disk configurations for custom puzzle levels"
      ],
      github: "https://github.com/Kishore-Krish19/TowersOfHanoi",
      demo: "https://hanoi-visualizer.vercel.app",
      themeClass: "game-theme",
      renderIcon: () => (
        <svg className="project-graphic-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
          <line x1="30" y1="42" x2="30" y2="90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="42" x2="60" y2="90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <line x1="90" y1="42" x2="90" y2="90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M20 90h80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
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
        <h1 className="projects-title">Projects</h1>
        <div className="projects-subtitle-underline"></div>
        
        {/* CONTROLS DISPLAY OVERVIEW SWITCHER TOGGLE LINK */}
        <div className="toggle-view-container">
          <button className="view-toggle-btn" onClick={() => setIsGridMode(!isGridMode)}>
            <FaTh className="btn-icon" />
            <span>{isGridMode ? "Show Slideshow" : "Show All Projects"}</span>
          </button>
        </div>

        {!isGridMode ? (
          /* LOOP CAROUSEL CONTAINER SLIDESHOW MODE */
          <div className="projects-carousel-wrapper">
            <button className="carousel-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous Project">
              <FaChevronLeft />
            </button>

            <div
              className="projects-flex-container"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {visibleIndices.map((projectIndex, positionIdx) => {
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
                  />
                );
              })}
            </div>

            <button className="carousel-nav-btn next-btn" onClick={nextSlide} aria-label="Next Project">
              <FaChevronRight />
            </button>
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
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}