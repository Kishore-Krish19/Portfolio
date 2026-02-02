import RisingText from "./RisingText";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section line-reveal">

      <h1> <RisingText text="Technical Skills" /></h1>

      <div className="skills-grid">

        <div className="skill-box">
          <h3><RisingText text="Languages" /></h3>
          <p className="line-reveal">Java, C, Python</p>
        </div>

        <div className="skill-box">
          <h3><RisingText text="Web & Application Development" /></h3>
          <p className="line-reveal">HTML, CSS, JavaScript, React.js, JavaFX</p>
        </div>

        <div className="skill-box">
          <h3><RisingText text="Frameworks & Backend" /></h3>
          <p className="line-reveal">Spring Boot, Node.js, Express.js</p>
        </div>

        <div className="skill-box">
          <h3><RisingText text="Databases" /></h3>
          <p className="line-reveal">MySQL, PostgreSQL, MongoDB</p>
        </div>

        <div className="skill-box">
          <h3><RisingText text="Tools" /></h3>
          <p className="line-reveal">Git, GitHub, Docker, Postman, Jira, Trello</p>
        </div>

        <div className="skill-box">
          <h3><RisingText text="Concepts" /></h3>
          <p className="line-reveal">OOP, DSA, MVC Architecture</p>
        </div>
        <div className="skill-box">
          <h3><RisingText text="Cloud & OS" /></h3>
          <p className="line-reveal">AWS, IBM Cloud, Linux</p>
        </div>
      </div>
      {/* Certifications */}
      <h2 className="skills-subtitle"><RisingText text="Certifications" /></h2>

      <ul className="cert-list line-reveal">

        <li className="line-reveal">Java – HackerRank (2025)</li>
        <li className="line-reveal">Problem Solving – HackerRank (2025)</li>
        <li className="line-reveal">Programming Foundations with JavaScript, HTML & CSS by Duke University – Coursera (2025)</li>
        <li className="line-reveal">Crash Course on Python by Google– Coursera (2025)</li>

      </ul>

    </section>
  );
}
