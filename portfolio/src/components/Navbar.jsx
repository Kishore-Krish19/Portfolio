import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight * 0.6) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    {
      id: "home",
      label: "Home",
      color: "#18d9e0",
      // 🏠 Cyan — home star beacon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g-home" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#18d9e0" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path d="M4 11L12 3L20 11" stroke="url(#g-home)" strokeWidth="2" />
          <path d="M6 10V20H18V10" stroke="url(#g-home)" strokeWidth="2" />
          <path d="M9 20V14H15V20" stroke="url(#g-home)" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "about",
      label: "About",
      color: "#a78bfa",
      // 👤 Violet — nebula persona
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g-about" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="url(#g-about)" strokeWidth="1.8" />
          <circle cx="12" cy="7" r="4" stroke="url(#g-about)" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      id: "skills",
      label: "Skills",
      color: "#38bdf8",
      // </> Sky blue — code signal
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g-skills" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <polyline points="16 18 22 12 16 6" stroke="url(#g-skills)" strokeWidth="2" />
          <polyline points="8 6 2 12 8 18" stroke="url(#g-skills)" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "projects",
      label: "Projects",
      color: "#fb923c",
      // 📁 Orange — solar flare energy
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g-projects" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <path d="M3 7h5l2 3h11v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="url(#g-projects)" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "experience",
      label: "Experience",
      color: "#34d399",
      // 💼 Emerald — aurora work trail
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g-exp" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="url(#g-exp)" strokeWidth="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="url(#g-exp)" strokeWidth="2" />
          <line x1="8" y1="12" x2="16" y2="12" stroke="url(#g-exp)" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "achievements",
      label: "Achievements",
      color: "#fbbf24",
      // 🏆 Gold — supernova glory
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g-ach" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke="url(#g-ach)" strokeWidth="2" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="url(#g-ach)" strokeWidth="2" />
          <path d="M4 22h16" stroke="url(#g-ach)" strokeWidth="2" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" stroke="url(#g-ach)" strokeWidth="2" />
          <path d="M12 2a5 5 0 0 0-5 5v3c0 2.2 1.8 4 4 4h2c2.2 0 4-1.8 4-4V7a5 5 0 0 0-5-5z" stroke="url(#g-ach)" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "certifications",
      label: "Certifications",
      color: "#f472b6",
      // ✅ Pink — pulsar badge
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g-cert" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="url(#g-cert)" strokeWidth="2" />
          <path d="m9 12 2 2 4-4" stroke="url(#g-cert)" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "contact",
      label: "Contact",
      color: "#818cf8",
      // ✉️ Indigo — deep-space signal
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="g-contact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="url(#g-contact)" strokeWidth="2" />
          <polyline points="22,6 12,13 2,6" stroke="url(#g-contact)" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <nav className={`navbar ${show ? "show" : ""}`}>
      {/* <h2 className="logo">Kishore E</h2> */}

      <div className="nav-links">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="nav-btn"
            style={{
              animationDelay: `${0.5 + index * 0.07}s`,
              "--icon-color": item.color,
            }}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-tooltip" style={{ borderColor: `${item.color}55`, color: item.color, boxShadow: `0 0 12px ${item.color}33` }}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
