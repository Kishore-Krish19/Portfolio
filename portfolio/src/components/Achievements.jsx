import { useState } from "react";
import { motion } from "framer-motion";
import "./Achievements.css";

// Unique achievements data

const track1Unique = [
  {
    title: "1st Prize in Budget Battle",
    date: "September 2025",
    desc: "Secured 1st prize in budget battle.",
    badge: "1st Prize",
    badgeType: "gold",
    icon: "medal",
    location: "Government College Of Engineering Erode"
  },
  {
    title: "2nt Prize in Technical Game",
    date: "November 2024",
    desc: "Secured 2nd prize in technical game.",
    badge: "2nd Prize",
    badgeType: "silver",
    icon: "medal",
    location: "Government College Of Engineering Erode"
  },
   {
    title: "2nd Prize in The Trust Chain",
    date: "Feb 2026",
    desc: "Secured 2nd Prize among 50+ participants from various colleges.",
    badge: "2nd Prize",
    badgeType: "silver",
    icon: "medal",
    location: "Kongu Engineering College"
  },
  {
    title: "2nd Prize in Inter College Coding Contest",
    date: "Feb 2026",
    desc: "Secured 2nd Prize among 50+ participants from various colleges.",
    badge: "2nd Prize",
    badgeType: "silver",
    icon: "medal",
    location: "Kongu Engineering College"
  },
  {
    title: "Top 5th team among 30+ teams (Project Expo)",
    date: "March 2026",
    desc: "Participated in hackathon with my team and secured 5th position among 30 plus teams in AgentVerse AI Project Expo.",
    badge: "5th Place",
    badgeType: "silver",
    icon: "trophy",
    location: "Government College Of Engineering Erode"
  },
  {
    title: "2nd Prize Paper Presentation",
    date: "Feb 2026",
    desc: "Presented a paper on Hallucination-Free AI using RAG among 50+ participants.",
    badge: "2nd Prize",
    badgeType: "silver",
    icon: "paper",
    location: "Kongu Engineering College"
  }
];

// All combined unique achievements for the 'Show All' grid view
const allUniqueAchievements = [...track1Unique];

export default function Achievements() {
  const [viewMode, setViewMode] = useState("marquee"); // "marquee" | "grid"

  const handleMarqueeClick = () => {
    if (window.innerWidth <= 768) {
      setViewMode("grid");
    }
  };

  // Helper to render inline SVG icons dynamically
  const renderIcon = (iconName, badgeType) => {
    const isGold = badgeType === "gold";
    const colorClass = isGold ? "gold" : "";

    switch (iconName) {
      case "trophy":
        return (
          <div className={`ach-icon-wrapper ${colorClass}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
              <path d="M12 2a5 5 0 0 0-5 5v3c0 2.2 1.8 4 4 4h2c2.2 0 4-1.8 4-4V7a5 5 0 0 0-5-5z" />
            </svg>
          </div>
        );
      case "star":
        return (
          <div className={`ach-icon-wrapper ${colorClass}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        );
      case "paper":
        return (
          <div className={`ach-icon-wrapper ${colorClass}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
        );
      case "medal":
      default:
        return (
          <div className={`ach-icon-wrapper ${colorClass}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
              <path d="M8.21 13.89 7 2.3l5 3.7 5-3.7-1.21 11.59" />
              <circle cx="12" cy="15" r="3" />
            </svg>
          </div>
        );
    }
  };

  const renderCard = (ach, index) => {
    // Determine badge styling tier dynamically
    const badgeType = ach.badgeType || "gold"; // fallback to gold if undefined

    // Dynamically render the trophy/medal icon based on the badge type
    const renderBadgeIcon = () => {
      if (badgeType === "top4") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="9" x2="6" y2="21" />
            <line x1="18" y1="9" x2="18" y2="21" />
            <path d="M6 9h12a3 3 0 0 0 3-3V3H3v3a3 3 0 0 0 3 3Z" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
          </svg>
        );
      }
      // Default elegant medal/award icon for 1st and 2nd Prizes
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    };

    return (
      <div key={index} className="achievement-card">
        {/* Container Content Area */}
        <div>

          {/* NEW HEADER LAYOUT: Pushes details left, and your pill badge right */}
          <div className="ach-card-header-row">
            <div className="ach-card-top">
              {renderIcon(ach.icon, ach.badgeType)}
              <div className="ach-header-details">
                <h3 className="ach-card-title">{ach.title}</h3>
                <p className="ach-card-date">{ach.date}</p>
              </div>
            </div>

            {/* New Premium Oval/Pill Badge */}
            <div className={`achievement-pill-badge ${badgeType}`}>
              {renderBadgeIcon()}
              <span>{ach.badge}</span>
            </div>
          </div>

          <p className="ach-card-desc">{ach.desc}</p>
        </div>

        {/* Footer */}
        <div className="ach-card-footer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span title={ach.location}>{ach.location}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="achievements" className="section achievements-section scroll-3d">
      <div className="content-layer">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="achievements-title section-heading">Elite <span className="heading-gradient">Highlights</span></h1>
          <div className="achievements-subtitle-underline section-heading-bar"></div>
        </motion.div>

        {/* ==================== TOP CODING PROFILE CARDS ==================== */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: false, amount: 0.15 }}
        >
          {/* LeetCode stats card */}
          <div className="stat-card-wrapper">
            <a
              href="https://leetcode.com/u/Kishore__E/"
              target="_blank"
              rel="noopener noreferrer"
              className="stat-card leetcode"
            >
              {/* Background gradient on hover */}
              <div className="card-glow-bg"></div>
              {/* Premium Shimmer effect */}
              <div className="shimmer-overlay">
                <div className="shimmer-wave"></div>
              </div>

              {/* Terminal-like Header for LeetCode */}
              <div className="lc-terminal-header z-10 w-full flex items-center justify-between mb-2 pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500/80 shadow-[0_0_8px_#ef4444]"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80 shadow-[0_0_8px_#eab308]"></span>
                  <span className="w-2 h-2 rounded-full bg-green-500/80 shadow-[0_0_8px_#22c55e]"></span>
                  <span className="ml-2 text-[10px] tracking-wider text-gray-500 font-mono">leetcode_profile.sh</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-orange-500/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
                  <span>SYNCING LIVE</span>
                </div>
              </div>

              {/* Dynamic LeetCode heat map card */}
              <div className="relative w-full h-full flex items-center justify-center z-10">
                <img
                  src="https://leetcard.jacoblin.cool/Kishore__E?theme=dark&font=Inter&ext=heatmap"
                  alt="LeetCode Heatmap Card"
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    // Fallback to logo display if leetcard API fails
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback layout */}
                <div style={{ display: "none" }} className="flex flex-col items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    fill="#F97316"
                  >
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                  <h4 className="text-xl font-bold">LeetCode Coding Profile</h4>
                  <p className="text-gray-400 text-sm">Kishore E - Solved 100+ Questions</p>
                </div>
              </div>
            </a>
          </div>

          {/* HackerRank stats card */}
          <div className="stat-card-wrapper">
            <a
              href="https://www.hackerrank.com/profile/Kishore_krish_19"
              target="_blank"
              rel="noopener noreferrer"
              className="stat-card hackerrank"
            >
              <div className="card-glow-bg"></div>
              <div className="shimmer-overlay">
                <div className="shimmer-wave"></div>
              </div>

              {/* Premium customized content matching 2x2 grid mockup */}
              <div className="hackerrank-card-content">
                <div className="hackerrank-header">
                  <div className="hr-logo-bg relative">
                    <span className="absolute inset-0 rounded-2xl bg-emerald-500/20 animate-ping"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="relative z-10"
                    >
                      <path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95c-.061 0-.111-.05-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 01-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 01-.11.112h-5.78a.11.11 0 01-.11-.11V8.111c0-.06.05-.11.11-.11z" />
                    </svg>
                  </div>
                  <div className="hr-header-text">
                    <h3>HackerRank</h3>
                    <p className="hr-username">@Kishore_krish_19</p>
                  </div>
                  {/* Glowing Sync Badge */}
                  <div className="ml-auto flex items-center gap-1.5 font-mono text-[9px] text-emerald-400/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* 2x2 Hexagonal Sub-cards Grid */}
                <div className="hackerrank-hex-grid">

                  {/* Hexagon 1: Java */}
                  <div className="hr-hexagon gold">
                    <svg viewBox="0 0 100 115" className="hr-hex-svg">
                      <defs>
                        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFE066" />
                          <stop offset="100%" stopColor="#F59E0B" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 55.2 5 L 89.8 25 Q 95 28, 95 34 L 95 76 Q 95 82, 89.8 85 L 55.2 105 Q 50 108, 44.8 105 L 10.2 85 Q 5 82, 5 76 L 5 34 Q 5 28, 10.2 25 L 44.8 5 Q 50 2, 55.2 5 Z" 
                        fill="url(#gold-grad)" 
                        stroke="#D97706"
                        strokeWidth="3"
                      />
                    </svg>
                    <div className="hr-hex-content">
                      <div className="hr-hex-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 3c0 2-2 2-2 4" />
                          <path d="M12 2c0 2-2 2-2 5" />
                          <path d="M15 3c0 2-2 2-2 4" />
                          <path d="M5 9h12v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
                          <path d="M17 11h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
                          <path d="M3 21h16" />
                        </svg>
                      </div>
                      <span className="hr-hex-title">Java</span>
                      <div className="hr-hex-stars">{"★".repeat(5)}</div>
                    </div>
                  </div>

                  {/* Hexagon 2: Python */}
                  <div className="hr-hexagon silver">
                    <svg viewBox="0 0 100 115" className="hr-hex-svg">
                      <defs>
                        <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F1F5F9" />
                          <stop offset="100%" stopColor="#CBD5E1" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 55.2 5 L 89.8 25 Q 95 28, 95 34 L 95 76 Q 95 82, 89.8 85 L 55.2 105 Q 50 108, 44.8 105 L 10.2 85 Q 5 82, 5 76 L 5 34 Q 5 28, 10.2 25 L 44.8 5 Q 50 2, 55.2 5 Z" 
                        fill="url(#silver-grad)" 
                        stroke="#94A3B8"
                        strokeWidth="3"
                      />
                    </svg>
                    <div className="hr-hex-content">
                      <div className="hr-hex-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.87 2c-2.29 0-4.22 1.5-4.52 3.63L7.3 6h4.57V7H5.2c-1.76 0-3.2 1.44-3.2 3.2v2.7c0 1.76 1.44 3.2 3.2 3.2h1.6v-1.9c0-1.76 1.44-3.2 3.2-3.2h4.57v-1c0-2.29-1.93-4.2-4.22-4.2h-.98V5.2a1.2 1.2 0 0 0-1.2-1.2H11.87V2zm-1.8 1.5c.44 0 .8.36.8.8s-.36.8-.8.8-.8-.36-.8-.8.36-.8.8-.8z"/>
                          <path d="M12.13 22c2.29 0 4.22-1.5 4.52-3.63l.05-.37h-4.57v-1H18.8c1.76 0 3.2-1.44 3.2-3.2v-2.7c0-1.76-1.44-3.2-3.2-3.2h-1.6v1.9c0 1.76-1.44 3.2-3.2 3.2h-4.57v1c0 2.29 1.93 4.2 4.22 4.2h.98v.6a1.2 1.2 0 0 0 1.2 1.2h.48v2zm1.8-1.5c-.44 0-.8-.36-.8-.8s.36-.8.8-.8.8.36.8.8-.36.8-.8.8z"/>
                        </svg>
                      </div>
                      <span className="hr-hex-title">Python</span>
                      <div className="hr-hex-stars">{"★".repeat(4)}</div>
                    </div>
                  </div>

                  {/* Hexagon 3: SQL */}
                  <div className="hr-hexagon gold">
                    <svg viewBox="0 0 100 115" className="hr-hex-svg">
                      <path 
                        d="M 55.2 5 L 89.8 25 Q 95 28, 95 34 L 95 76 Q 95 82, 89.8 85 L 55.2 105 Q 50 108, 44.8 105 L 10.2 85 Q 5 82, 5 76 L 5 34 Q 5 28, 10.2 25 L 44.8 5 Q 50 2, 55.2 5 Z" 
                        fill="url(#gold-grad)" 
                        stroke="#D97706"
                        strokeWidth="3"
                      />
                    </svg>
                    <div className="hr-hex-content">
                      <div className="hr-hex-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <ellipse cx="12" cy="5" rx="8" ry="2.5" />
                          <path d="M4 5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
                          <path d="M4 10v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" />
                          <path d="M4 15v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" />
                        </svg>
                      </div>
                      <span className="hr-hex-title">Sql</span>
                      <div className="hr-hex-stars">{"★".repeat(5)}</div>
                    </div>
                  </div>

                  {/* Hexagon 4: C */}
                  <div className="hr-hexagon gold">
                    <svg viewBox="0 0 100 115" className="hr-hex-svg">
                      <path 
                        d="M 55.2 5 L 89.8 25 Q 95 28, 95 34 L 95 76 Q 95 82, 89.8 85 L 55.2 105 Q 50 108, 44.8 105 L 10.2 85 Q 5 82, 5 76 L 5 34 Q 5 28, 10.2 25 L 44.8 5 Q 50 2, 55.2 5 Z" 
                        fill="url(#gold-grad)" 
                        stroke="#D97706"
                        strokeWidth="3"
                      />
                    </svg>
                    <div className="hr-hex-content">
                      <div className="hr-hex-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M 16.5 7.5 A 6 6 0 1 0 16.5 16.5" />
                        </svg>
                      </div>
                      <span className="hr-hex-title">C language</span>
                      <div className="hr-hex-stars">{"★".repeat(5)}</div>
                    </div>
                  </div>

                </div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* ==================== CONTROL CONTROLLER PANEL ==================== */}
        <motion.div
          className="action-controls"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <button
            onClick={() => setViewMode(viewMode === "marquee" ? "grid" : "marquee")}
            className={`control-btn ${viewMode === "grid" ? "active" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="btn-icon"
            >
              <rect x="3" y="3" width="7" height="9" />
              <rect x="14" y="3" width="7" height="5" />
              <rect x="14" y="12" width="7" height="9" />
              <rect x="3" y="16" width="7" height="5" />
            </svg>
            {viewMode === "grid" ? "Infinite Scroll Carousel" : "Show All Achievements"}
          </button>

        </motion.div>

        {/* ==================== MAIN DISPLAY INTERACTIVE CONTENT ==================== */}

        {/* VIEW MODE 1: Infinite Marquee Carousel */}
        {viewMode === "marquee" && (
          <div className="marquee-container-wrapper" onClick={handleMarqueeClick}>
            {/* Track 1: Leftward Infinite Marquee */}
            <div className="marquee-track-container">
              <div className="marquee-track direction-left">
                {/* 4 identical loops render total of 20 elements for a seamless 45s loop */}
                {[...track1Unique, ...track1Unique, ...track1Unique, ...track1Unique].map((ach, idx) =>
                  renderCard(ach, `t1-${idx}`)
                )}
              </div>
            </div>


          </div>
        )}

        {/* VIEW MODE 2: Beautiful static flex/grid of all achievements */}
        {viewMode === "grid" && (
          <div className="achievements-static-grid">
            {allUniqueAchievements.map((ach, idx) =>
              renderCard(ach, `grid-${idx}`)
            )}
          </div>
        )}


      </div>
    </section>
  );
}
