import "./About.css";
import HomeButton from "./HomeButton";

export default function About() {
    return (
        <section id="about" className="about-section">

            <HomeButton />

            {/* About Me */}
            <h1>About Me</h1>

            <p>
                I am a passionate Software Developer with experience in building
                desktop and web applications using Java, React.js, JavaFX, and
                Spring Boot.
            </p>

            <p>
                I have hands-on experience in developing RESTful APIs, managing
                databases using MySQL and PostgreSQL, and working with Git-based
                workflows.
            </p>

            <p>
                I enjoy solving real-world problems through code and continuously
                improving my skills through projects and coding practice.
            </p>

            {/* Education */}
            <h2 className="about-subtitle">Education</h2>

            <div className="edu-timeline">

                <div className="edu-item">
                    <span>2023 – Present</span>

                    <h3>B.E. Computer Science and Engineering</h3>

                    <p>
                        Government College of Engineering, Erode<br />
                        CGPA: 8.58
                    </p>
                </div>

            </div>

            {/* Coding Profiles */}
            <h2 className="about-subtitle">Coding Profiles</h2>

            <div className="coding-profiles">

                {/* LeetCode */}
                <a
                    href="https://leetcode.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="profile-card"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill="currentColor"
                    >
                        <path d="M13.483 0a1.2 1.2 0 00-.844.36L3.21 9.79a1.2 1.2 0 000 1.7l9.43 9.43a1.2 1.2 0 001.7 0l1.48-1.48a1.2 1.2 0 000-1.7L7.08 10.64l6.74-6.74a1.2 1.2 0 00-.337-1.95A1.2 1.2 0 0013.483 0z" />
                        <path d="M20.79 10.64a1.2 1.2 0 00-1.7 0l-6.74 6.74a1.2 1.2 0 000 1.7l1.48 1.48a1.2 1.2 0 001.7 0l9.43-9.43a1.2 1.2 0 000-1.7L20.79 10.64z" />
                    </svg>

                    <div>
                        <h4>LeetCode</h4>
                        <p>Solved 100+ DSA Problems</p>
                    </div>
                </a>

                {/* HackerRank */}
                <a
                    href="https://www.hackerrank.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="profile-card"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill="currentColor"
                    >
                        <path d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm5.7 16.2h-2.4v-4.5h-2.4v4.5h-2.4V7.8h2.4v3.9h2.4V7.8h2.4v8.4z" />
                    </svg>

                    <div>
                        <h4>HackerRank</h4>
                        <p>5⭐ Rating in Java & SQL</p>
                    </div>
                </a>

            </div>

        </section>
    );
}
