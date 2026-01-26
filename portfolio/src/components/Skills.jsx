import "./Skills.css";
import HomeButton from "./HomeButton";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      <HomeButton />

      <h1>Technical Skills</h1>

      <div className="skills-grid">

        <div className="skill-box">
          <h3>Languages</h3>
          <p>Java, C, Python</p>
        </div>

        <div className="skill-box">
          <h3>Web & Application Development</h3>
          <p>HTML, CSS, JavaScript, React.js, JavaFX</p>
        </div>

        <div className="skill-box">
          <h3>Frameworks & Backend</h3>
          <p>Spring Boot, Node.js, Express.js</p>
        </div>

        <div className="skill-box">
          <h3>Databases</h3>
          <p>MySQL, PostgreSQL, MongoDB</p>
        </div>

        <div className="skill-box">
          <h3>Tools</h3>
          <p>Git, GitHub, Docker, Postman, Jira, Trello</p>
        </div>

        <div className="skill-box">
          <h3>Concepts</h3>
          <p>OOP, DSA, MVC Architecture</p>
        </div>
        <div className="skill-box">
          <h3>Cloud & OS</h3>
          <p>AWS, IBM Cloud, Linux</p>
        </div>
      </div>
      {/* Certifications */}
      <h2 className="skills-subtitle">Certifications</h2>

      <ul className="cert-list">

        <li>Java – HackerRank (2025)</li>
        <li>Problem Solving – HackerRank (2025)</li>
        <li>Programming Foundations with JavaScript, HTML & CSS by Duke University – Coursera (2025)</li>
        <li>Crash Course on Python by Google– Coursera (2025)</li>

      </ul>

    </section>
  );
}
