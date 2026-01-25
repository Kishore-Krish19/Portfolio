import "./Resume.css";
import HomeButton from "./HomeButton";

export default function Resume() {
  return (
    <section id="resume" className="resume-section">

      <HomeButton />

      <h1>My Resume</h1>

      <p>
        View or download my resume below.
      </p>

      {/* PDF Preview */}
      <div className="resume-viewer">
        <iframe
          src="/resume.pdf"
          title="Resume Preview"
          frameBorder="0"
        ></iframe>
      </div>

      {/* Download */}
      <a
        href="/resume.pdf"
        download
        className="resume-btn"
      >
        Download Resume
      </a>

    </section>
  );
}
