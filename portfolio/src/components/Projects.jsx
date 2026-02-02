import "./Projects.css";
import RisingText from "./RisingText";
import { useEffect } from "react";

export default function Projects() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            // 👇 THIS enables repeat animation
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.25 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Student Management Application (2025)",
      tech: "Java | JavaFX | Spring Boot | MySQL",
      desc: [
        "JavaFX-based desktop application using MVC architecture",
        "Spring Boot REST APIs with full CRUD operations",
        "Secure integration between frontend and backend with remote database access",
      ],
      github: "https://github.com/yourusername/student-management",
      demo: null, // ❌ No live demo
    },

    {
      title: "AI Chatbot Project (2025)",
      tech: "React.js | Python | NLP | Machine Learning | NLTK",
      desc: [
        "Developed an intelligent chatbot using Python and Natural Language Processing",
        "Implemented intent classification and response generation using ML models",
        "Integrated chatbot into a web interface for real-time interaction",
      ],
      github: "https://github.com/yourusername/ai-chatbot",
      demo: "https://your-live-link.com/chatbot", // ✅ Replace
    },

    {
      title: "Towers of Hanoi Game (2025)",
      tech: "Java | React.js | Data Structures | Recursion",
      desc: [
        "Implemented recursive algorithms with rule-based disk validation",
        "Strengthened algorithmic thinking and problem-solving skills",
      ],
      github: "https://github.com/yourusername/towers-of-hanoi",
      demo: "https://your-live-link.com/hanoi", // ✅ Replace
    },

    {
      title: "Mini Web Projects (2024)",
      tech: "HTML | CSS | JavaScript",
      desc: [
        "Built multiple mini web applications",
        "Focused on responsive and user-friendly UI design",
      ],
      github: "https://github.com/yourusername/mini-projects",
      demo: "https://your-live-link.com/web-projects", // ✅ Replace
    },
  ];


  return (
    <section id="projects" className="section projects-section">

      <h1><RisingText text="Projects" /></h1>

      <div className="projects-grid">

        {projects.map((p, index) => (
          <div key={index} className="project-card reveal">

            <h2 className="line-reveal"><RisingText text={p.title} /></h2>

            <p className="project-tech line-reveal"><RisingText text={p.tech} /></p>

            <ul className="project-desc">
              {p.desc.map((item, i) => (
                <li className="line-reveal" key={i}>
                  {item}
                </li>
              ))}
            </ul>

            <div className="project-links">
              <a href={p.github} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>

              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>

          </div>
        ))}

      </div>

    </section>

  );
}
