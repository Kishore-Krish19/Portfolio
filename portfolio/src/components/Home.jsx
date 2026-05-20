import { useState, useEffect } from "react";
import "./Home.css";

// Images
import aboutImg from "../assets/about.jpg";
import skillsImg from "../assets/skills.jpg";
import projectsImg from "../assets/projects.jpg";
import contactImg from "../assets/contact.jpg";
import defaultImg from "../assets/default.jpg";

export default function Home() {
    const [image, setImage] = useState(defaultImg);
    const [label, setLabel] = useState("Welcome to my Portfolio");
    const [fade, setFade] = useState(false);

    const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false);

    const [isMobile, setIsMobile] = useState(false);
    const [activeBtn, setActiveBtn] = useState(null);

    // Detect mobile
    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    useEffect(() => {
        const line = document.querySelector(".glowing-line");
        const wrapper = document.querySelector(".image-glow-wrapper");
        const textLabel = document.querySelector(".home-initial-label");

        if (!line || !wrapper || !textLabel) return;

        // Step 1: Expand Line
        setTimeout(() => {
            line.classList.add("expand");
        }, 100);

        // Step 2: Rise Image from line
        setTimeout(() => {
            wrapper.classList.add("rise");
        }, 600);

        // Step 3: Fade in Text
        setTimeout(() => {
            textLabel.classList.add("visible");
        }, 1600);

        // Step 4: Unlock interactions
        setTimeout(() => {
            setIsInitialAnimationComplete(true);
        }, 2000);
    }, []);

    // Animate image change
    const updatePreview = (img, text, btn) => {
        setFade(true);

        setTimeout(() => {
            setImage(img);
            setLabel(text);
            setFade(false);
            setActiveBtn(btn);
        }, 120);
    };

    // Reset to default
    const resetPreview = () => {
        updatePreview(defaultImg, "Welcome to my Portfolio", null);
    };

    // Desktop hover
    const handleHover = (img, text, btn) => {
        if (!isInitialAnimationComplete) return;
        if (!isMobile) {
            updatePreview(img, text, btn);
        }
    };

    // Mobile tap
    const handleTap = (img, text, btn, id) => {
        if (!isInitialAnimationComplete) return;
        if (!isMobile) {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            return;
        }

        // First tap = preview
        if (activeBtn !== btn) {
            updatePreview(img, text, btn);
        }

        // Second tap = navigate
        else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="section scroll-3d"
        >
            {/* CONTENT LAYER */}
            <div
                className="home-container content-layer"
                onClick={() => {
                    if (isMobile) resetPreview();
                }}
            >
                {/* Buttons Layer */}
                <div className="home-buttons">

                    {/* ABOUT */}
                    <button
                        className={`home-btn glow-btn top-left ${activeBtn === "about" ? "active" : ""
                            }`}
                        onMouseEnter={() =>
                            handleHover(aboutImg, "Know About Me", "about")
                        }
                        onMouseLeave={!isMobile ? resetPreview : null}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleTap(aboutImg, "Know About Me", "about", "about");
                        }}
                    >
                        About
                    </button>

                    {/* SKILLS */}
                    <button
                        className={`home-btn glow-btn top-right ${activeBtn === "skills" ? "active" : ""
                            }`}
                        onMouseEnter={() =>
                            handleHover(skillsImg, "Click to know about my Skills", "skills")
                        }
                        onMouseLeave={!isMobile ? resetPreview : null}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleTap(
                                skillsImg,
                                "Click to know about my Skills",
                                "skills",
                                "skills"
                            );
                        }}
                    >
                        Skills
                    </button>

                    {/* PROJECTS */}
                    <button
                        className={`home-btn glow-btn bottom-left ${activeBtn === "projects" ? "active" : ""
                            }`}
                        onMouseEnter={() =>
                            handleHover(projectsImg, "Click to see my Projects", "projects")
                        }
                        onMouseLeave={!isMobile ? resetPreview : null}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleTap(
                                projectsImg,
                                "Click to see my Projects",
                                "projects",
                                "projects"
                            );
                        }}
                    >
                        Projects
                    </button>

                    {/* CONTACT */}
                    <button
                        className={`home-btn glow-btn bottom-right ${activeBtn === "contact" ? "active" : ""
                            }`}
                        onMouseEnter={() =>
                            handleHover(
                                contactImg,
                                "Click for Contact Details",
                                "contact"
                            )
                        }
                        onMouseLeave={!isMobile ? resetPreview : null}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleTap(
                                contactImg,
                                "Click for Contact Details",
                                "contact",
                                "contact"
                            );
                        }}
                    >
                        Contact
                    </button>

                </div>

                {/* Center Content */}
                <div className="home-center">
                    {/* Label */}
                    <div className={`home-label home-initial-label ${fade ? "fade" : ""} ${isInitialAnimationComplete ? "visible" : ""}`}>
                        {label}
                    </div>

                    {/* Stage for Rising Animation */}
                    <div className="rising-stage">
                        {/* Mask */}
                        <div className="image-mask">
                            <div className={`image-glow-wrapper ${isInitialAnimationComplete ? "rise" : ""}`}>
                                <img
                                    src={image}
                                    alt="Preview"
                                    className={`home-image ${fade ? "fade" : ""}`}
                                />
                            </div>
                            {/* Glowing Line */}
                            <div className={`glowing-line ${isInitialAnimationComplete ? "expand" : ""}`}></div>
                        </div>

                        {/* Bottom Action Area (Moved inside center for vertical stacking) */}
                        <div className="home-bottom-action">
                            <a href="/Resume.pdf" download className="resume-btn glow-btn">
                                Download Resume
                            </a>
                            <div className="social-links">
                                <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                                <span className="dot-separator">•</span>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Left Intro */}
                <div className="home-left-intro hidden-mobile">
                    <h3 className="text-glow">Hi! I'm Kishore</h3>
                    <p>A developer who enjoys turning logic, creativity, and problem-solving into real-world applications using Java, Web Technologies, and AI/ML.</p>
                </div>

                {/* Right Skills */}
                <div className="home-right-skills hidden-mobile">
                    <h3 className="text-glow">Currently I'm</h3>
                    <ul>
                        <li>• Problem Solver</li>
                        <li>• Software Developer</li>
                        <li>• Tech Explorer</li>
                        <li>• Cloud & AI</li>
                    </ul>
                </div>

            </div>


        </section>
    );
}
