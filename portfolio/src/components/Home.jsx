import { useState, useEffect } from "react";
import "./Home.css";

// Images
import aboutImg from "../assets/about.png";
import skillsImg from "../assets/skills.png";
import projectsImg from "../assets/projects.png";
import contactImg from "../assets/contact.png";
import defaultImg from "../assets/default.png";

export default function Home() {
    const [image, setImage] = useState(defaultImg);
    const [label, setLabel] = useState("Welcome to my Portfolio");
    const [fade, setFade] = useState(false);

    const [isMobile, setIsMobile] = useState(false);
    const [activeBtn, setActiveBtn] = useState(null);

    // Detect mobile
    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
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
        if (!isMobile) {
            updatePreview(img, text, btn);
        }
    };

    // Mobile tap
    const handleTap = (img, text, btn, id) => {
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
            className="section"
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
                    <div className="home-label">{label}</div>

                    {/* Image */}
                    <div className="image-glow-wrapper">
                        <img
                            src={image}
                            alt="Preview"
                            className={`home-image ${fade ? "fade" : ""}`}
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}
