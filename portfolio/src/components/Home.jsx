import { useState, useEffect, useRef, useCallback } from "react";
import "./Home.css";
import TextType from "./TextType";
import RotatingText from "./RotatingText";

// Images
import aboutImg from "../assets/about.png";
import skillsImg from "../assets/skills.png";
import projectsImg from "../assets/projects.png";
import contactImg from "../assets/contact.png";
import defaultImg from "../assets/default.png";

// Corner brackets helper rendered inside every glow-btn
function BtnCorners() {
    return (
        <>
            <span className="btn-corner tl" />
            <span className="btn-corner tr" />
            <span className="btn-corner bl" />
            <span className="btn-corner br" />
        </>
    );
}

export default function Home() {
    // Crossfade: two slots (A and B) alternate as active
    const [slotA, setSlotA] = useState({ image: defaultImg, label: "Welcome to My Digital Space" });
    const [slotB, setSlotB] = useState({ image: defaultImg, label: "Welcome to My Digital Space" });
    const [activeSlot, setActiveSlot] = useState("A"); // which slot is currently visible

    const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false);

    const [isMobile, setIsMobile] = useState(false);
    const [activeBtn, setActiveBtn] = useState(null);
    const [buttonsVisible, setButtonsVisible] = useState(false);

    // Detect mobile — synced with CSS @media (max-width: 900px)
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const line = document.querySelector(".glowing-line");
        const wrapper = document.querySelector(".image-glow-wrapper");
        const textLabel = document.querySelector(".home-initial-label");
        const leftIntro = document.querySelector(".home-left-intro");
        const rightSkills = document.querySelector(".home-right-skills");
        if (!line || !wrapper || !textLabel) return;

        // Step 1: Expand Line
        setTimeout(() => {
            line.classList.add("expand");
        }, 100);

        // Step 2: Rise Image from line
        setTimeout(() => {
            wrapper.classList.add("rise");
        }, 600);

        // Step 3: Slide in left & right panels
        setTimeout(() => {
            leftIntro?.classList.add("visible");
            rightSkills?.classList.add("visible");
        }, 1200);

        // Step 4: Fade in Text
        setTimeout(() => {
            textLabel.classList.add("visible");
        }, 1600);

        // Step 5: Pop up corner buttons (after everything else)
        setTimeout(() => {
            setButtonsVisible(true);
        }, 2000);

        // Step 6: Unlock interactions
        setTimeout(() => {
            setIsInitialAnimationComplete(true);
        }, 2600);
    }, []);

    // Crossfade image change — load new content into the hidden slot, then flip
    const updatePreview = useCallback((img, text, btn) => {
        setActiveBtn(btn);
        setActiveSlot((prev) => {
            const next = prev === "A" ? "B" : "A";
            // Load the new content into the currently-hidden slot
            if (next === "A") {
                setSlotA({ image: img, label: text });
            } else {
                setSlotB({ image: img, label: text });
            }
            return next;
        });
    }, []);

    // Reset to default
    const resetPreview = useCallback(() => {
        updatePreview(defaultImg, "Welcome to My Digital Space", null);
    }, [updatePreview]);

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
                {/* LEFT SIDE OVERLAY */}
                <div className="home-left-intro">
                    <h2 className="intro-title"> Hi, I'm</h2>
                    <h1 className="intro-name">Kishore</h1>
                    <p className="intro-subtitle">
                        <TextType
                            as="span"
                            text={['_ Creative', '_ Passionate', '_ Hardworking', '_ Skilled', '_ Professional']}
                            typingSpeed={50}
                            deletingSpeed={45}
                            pauseDuration={2700}
                            showCursor={true}
                            cursorCharacter="|"
                            cursorClassName="intro-cursor"
                            loop={true}
                        />
                    </p>
                    <p className="intro-designation">
                        <TextType
                            as="span"
                            text={['Software Developer', 'Web Developer', 'Problem Solver', 'Backend Developer', 'Frontend Developer', 'MERN Stack Developer']}
                            typingSpeed={80}
                            deletingSpeed={45}
                            pauseDuration={2200}
                            initialDelay={500}
                            showCursor={true}
                            cursorCharacter="|"
                            cursorClassName="intro-cursor designation-cursor"
                            loop={true}
                        />
                    </p>
                </div>

                {/* RIGHT SIDE OVERLAY */}
                <div className="home-right-skills">
                    {/* LOVE TAGLINE */}
                    <div className="love-tagline">
                        <span className="love-static">I Love to</span>
                        <RotatingText
                            texts={['Design', 'Code', 'Innovate', 'Explore']}
                            splitBy="characters"
                            staggerFrom="first"
                            initial={{ y: '100%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '-120%', opacity: 0 }}
                            staggerDuration={0.03}
                            splitLevelClassName="overflow-hidden"
                            transition={{ type: 'spring', damping: 28, stiffness: 380 }}
                            rotationInterval={2000}
                            mainClassName="love-rotating"
                            elementLevelClassName="love-rotating-char"
                        />
                    </div>
                    <div className="social-icons-row">
                        {/* LinkedIn */}
                        <div className="home-iso-pro linkedin-item">
                            <span /><span /><span />
                            <a href="https://linkedin.com/in/kishore-e-241369279" target="_blank" rel="noreferrer" className="icon-link linkedin">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <div className="home-iso-tooltip">LinkedIn</div>
                        </div>
                        {/* GitHub */}
                        <div className="home-iso-pro github-item">
                            <span /><span /><span />
                            <a href="https://github.com/Kishore-Krish19" target="_blank" rel="noreferrer" className="icon-link github">
                                <i className="fab fa-github"></i>
                            </a>
                            <div className="home-iso-tooltip">GitHub</div>
                        </div>
                        {/* LeetCode */}
                        <div className="home-iso-pro leetcode-item">
                            <span /><span /><span />
                            <a href="https://leetcode.com/u/Kishore__E" className="icon-link leetcode">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                </svg>
                            </a>
                            <div className="home-iso-tooltip">LeetCode</div>
                        </div>
                        {/* HackerRank */}
                        <div className="home-iso-pro hackerrank-item">
                            <span /><span /><span />
                            <a href="https://www.hackerrank.com/profile/Kishore_krish_19" className="icon-link hackerrank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                    <path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95c-.061 0-.111-.05-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 0 1-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 0 1-.11.112h-5.78a.11.11 0 0 1-.11-.11V8.111c0-.06.05-.11.11-.11z" />
                                </svg>
                            </a>
                            <div className="home-iso-tooltip">HackerRank</div>
                        </div>
                        {/* Email */}
                        <div className="home-iso-pro email-item">
                            <span /><span /><span />
                            <a href="mailto:kishore.e.1908@gmail.com" className="icon-link email">
                                <i className="fas fa-envelope"></i>
                            </a>
                            <div className="home-iso-tooltip">Email</div>
                        </div>
                    </div>
                    <div className="action-buttons-row">
                        <div className="home-iso-pro resume-item">
                            <span /><span /><span />
                            <button className="btn-action btn-get-resume">
                                GET RESUME &nbsp;<i className="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* NAV BUTTONS */}
                <div className="home-buttons">

                    {/* ABOUT */}
                    <button
                        className={`home-btn glow-btn bottom-left ${buttonsVisible ? "visible" : ""} ${activeBtn === "about" ? "active" : ""}`}
                        onMouseEnter={() => handleHover(aboutImg, "Meet the Developer", "about")}
                        onMouseLeave={!isMobile ? resetPreview : null}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleTap(aboutImg, "Meet the Developer", "about", "about");
                        }}
                    >
                        <BtnCorners />
                        About
                    </button>

                    {/* SKILLS */}
                    <button
                        className={`home-btn glow-btn top-right ${buttonsVisible ? "visible" : ""} ${activeBtn === "skills" ? "active" : ""}`}
                        onMouseEnter={() => handleHover(skillsImg, "Skills Behind the Code", "skills")}
                        onMouseLeave={!isMobile ? resetPreview : null}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleTap(skillsImg, "Skills Behind the Code", "skills", "skills");
                        }}
                    >
                        <BtnCorners />
                        Skills
                    </button>

                    {/* PROJECTS */}
                    <button
                        className={`home-btn glow-btn top-left ${buttonsVisible ? "visible" : ""} ${activeBtn === "projects" ? "active" : ""}`}
                        onMouseEnter={() => handleHover(projectsImg, "Crafted with Code", "projects")}
                        onMouseLeave={!isMobile ? resetPreview : null}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleTap(projectsImg, "Crafted with Code", "projects", "projects");
                        }}
                    >
                        <BtnCorners />
                        Projects
                    </button>

                    {/* CONTACT */}
                    <button
                        className={`home-btn glow-btn bottom-right ${buttonsVisible ? "visible" : ""} ${activeBtn === "contact" ? "active" : ""}`}
                        onMouseEnter={() => handleHover(contactImg, "Let's Get in Touch", "contact")}
                        onMouseLeave={!isMobile ? resetPreview : null}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleTap(contactImg, "Let's Get in Touch", "contact", "contact");
                        }}
                    >
                        <BtnCorners />
                        Contact
                    </button>

                </div>

                {/* CENTER CONTENT */}
                <div className="home-center">
                    {/* Crossfade Labels */}
                    <div className="home-label-container home-initial-label">
                        <div className={`home-label home-label-slot ${activeSlot === "A" ? "active" : ""}`}>
                            {slotA.label}
                        </div>
                        <div className={`home-label home-label-slot ${activeSlot === "B" ? "active" : ""}`}>
                            {slotB.label}
                        </div>
                    </div>

                    {/* Rising Animation Stage */}
                    <div className="rising-stage">
                        <div className="image-mask">
                            <div className={`image-glow-wrapper ${isInitialAnimationComplete ? "rise" : ""}`}>
                                <div className="glow-halo" />
                                <div className="home-image-crossfade">
                                    <img
                                        src={slotA.image}
                                        alt="Preview"
                                        className={`home-image home-image-slot ${activeSlot === "A" ? "active" : ""}`}
                                    />
                                    <img
                                        src={slotB.image}
                                        alt="Preview"
                                        className={`home-image home-image-slot ${activeSlot === "B" ? "active" : ""}`}
                                    />
                                </div>
                            </div>
                            {/* Thruster line */}
                            <div className={`glowing-line ${isInitialAnimationComplete ? "expand" : ""}`}></div>
                        </div>

                        {/* Bottom Action Area (commented out as in original) */}
                        {/* <div className="home-bottom-action">
                            <button
                                className="resume-btn glow-btn"
                                onClick={() => {
                                    const link = document.createElement("a");
                                    link.href = "/resume.pdf";
                                    link.download = "Kishore_E_Resume.pdf";
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                            >
                                Download Resume
                            </button>
                            <div className="social-links">
                                <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                                <span className="dot-separator">•</span>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                            </div>
                        </div> */}
                    </div>

                    {/* Hover hint */}
                    <div className={`home-hover-hint ${isInitialAnimationComplete ? "visible" : ""}`}>
                        <span className="hint-arrow">↑</span>
                        {isMobile
                            ? "Tap a button twice to explore"
                            : "Hover over the buttons to explore"}
                        <span className="hint-arrow">↑</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
