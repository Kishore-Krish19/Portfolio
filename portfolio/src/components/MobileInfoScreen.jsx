import React from "react";
import "./MobileInfoScreen.css";

const MobileInfoScreen = ({ isFadingOut }) => {
  return (
    <div className={`mobile-info-overlay ${isFadingOut ? "fade-out" : ""}`}>
      {/* Visual background layers */}
      <div className="mobile-info-stars"></div>
      <div className="mobile-info-glow"></div>
      <div className="mobile-info-glow-secondary"></div>

      <div className="mobile-info-card">
        {/* Futuristic Glowing Device Icon */}
        <div className="mobile-info-icon-wrapper">
          <svg
            className="mobile-info-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#iconGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            {/* Monitor outline */}
            <rect x="2" y="3" width="20" height="13" rx="2" />
            {/* Stand */}
            <path d="M12 16v4" />
            <path d="M8 20h8" />
            {/* Laptop base line */}
            <path d="M5 10h14" opacity="0.3" strokeDasharray="2 2" />
          </svg>
          <div className="mobile-info-pulse-ring"></div>
        </div>

        {/* Messaging with premium font colors and text-shadow */}
        <h1 className="mobile-info-heading">
          Use <span className="gradient-text">Desktop</span> or <span className="gradient-text">Laptop</span> <br />
          for Best Experience
        </h1>

        <p className="mobile-info-subheading">
          Loading the responsive mobile experience shortly...
        </p>

        {/* 2-Second Linear Progress Bar */}
        <div className="mobile-info-loader-track">
          <div className="mobile-info-loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileInfoScreen;
