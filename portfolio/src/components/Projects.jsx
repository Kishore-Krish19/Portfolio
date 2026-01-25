import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "AI Chatbot",
      desc: "Intelligent chatbot using Python, NLTK, and ML.",
      tech: "Python, NLTK, ML",
      github: "https://github.com/yourusername/chatbot",
      demo: "#",
    },
    {
      title: "Student Management System",
      desc: "JavaFX + Spring Boot + MySQL desktop application.",
      tech: "Java, Spring Boot, MySQL",
      github: "https://github.com/yourusername/student-system",
      demo: "#",
    },
    {
      title: "Housing Price Prediction",
      desc: "ML regression using California Housing dataset.",
      tech: "Python, Scikit-learn",
      github: "https://github.com/yourusername/housing-ml",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">

            <h2>{p.title}</h2>
            <p className="desc">{p.desc}</p>

            <p className="tech">{p.tech}</p>

            <div className="links">
              <a href={p.github} target="_blank">GitHub</a>
              <a href={p.demo} target="_blank">Live</a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
