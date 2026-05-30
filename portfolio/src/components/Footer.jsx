import { useEffect, useState } from "react";
import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "achievements", label: "Achievements" },
        { id: "certifications", label: "Certifications" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <footer className="footer content-layer">
            <div className="footer-container">
                {/* Main Minimal Row */}
                <div className="footer-main-row">
                    {/* Left: Brand & Tagline */}
                    <div className="footer-brand-block">
                        <span className="footer-logo" onClick={scrollToTop}>
                            KISHORE E<span className="logo-dot">.</span>
                        </span>
                        <span className="footer-divider-vertical"></span>
                        <p className="footer-catchy-phrase">
                            Defying gravity through <span className="phrase-gradient-1">elegant code</span> & <span className="phrase-gradient-2">stellar experiences</span>
                        </p>
                    </div>

                    {/* Right: Quick Links in a single line */}
                    <nav className="footer-nav">
                        {navItems.map((item, idx) => (
                            <span key={item.id} className="footer-nav-item-wrapper">
                                <button onClick={() => scrollTo(item.id)} className="footer-nav-link">
                                    {item.label}
                                </button>
                                {idx < navItems.length - 1 && <span className="footer-nav-separator">•</span>}
                            </span>
                        ))}
                    </nav>
                </div>

                {/* Sub Minimal Row */}
                <div className="footer-sub-row">
                    {/* Left: Socials - Clean, borderless */}
                    <div className="footer-icons">
                        <a href="https://github.com/Kishore-Krish19" target="_blank" rel="noreferrer" className="footer-icon-link" title="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.57.24 2.73.12 3.02.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.21 0 .31.21.68.8.56 4.56-1.53 7.85-5.86 7.85-10.97C23.5 5.74 18.27.5 12 .5z" /></svg>
                        </a>
                        <a href="https://linkedin.com/in/kishore-e-241369279" target="_blank" rel="noreferrer" className="footer-icon-link" title="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.35-1.86 3.58 0 4.24 2.36 4.24 5.43v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" /></svg>
                        </a>
                        <a href="mailto:kishore.e.1908@gmail.com" className="footer-icon-link" title="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        </a>
                    </div>

                    {/* Center: Copyright & Credits */}
                    <div className="footer-copyright-block">
                        <span className="copyright">© {year} Kishore. All rights reserved.</span>
                        <span className="credit-dot">•</span>
                        <span className="credit">Designed & Coded with <span className="heart-icon">💙</span> By Kishore</span>
                    </div>

                    {/* Right: Back to Top */}
                    <button onClick={scrollToTop} className="footer-back-to-top" title="Back to Top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="top-arrow-icon">
                            <line x1="12" y1="19" x2="12" y2="5"></line>
                            <polyline points="5 12 12 5 19 12"></polyline>
                        </svg>
                        <span className="top-text">Top</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}