import { useRef } from "react";
import "./Skills.css";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava,
  FaGitAlt, FaGithub, FaAws, FaLinux, FaBrain, FaSitemap,
  FaNodeJs, FaDocker, FaJira, FaTrello, FaLightbulb
} from "react-icons/fa";
import {
  SiC, SiSpringboot, SiExpress, SiMysql, SiPostgresql,
  SiMongodb, SiTailwindcss, SiHuggingface, SiVercel, SiRender
} from "react-icons/si";

// Custom Python Icon (Official shape with 3D gradients)
const CustomPythonIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" width="48px" height="48px">
    <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"/><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"/>
  </svg>
);

const skillsData = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "Java", icon: <FaJava />, color: "#982130" },
  { name: "Python", icon: <CustomPythonIcon />, color: "inherit" },
  { name: "C", icon: <SiC />, color: "#3A44C4" },
  { name: "React.js", icon: <FaReact />, color: "#08defd" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339939" },
  { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "Linux", icon: <FaLinux />, color: "#FCC624" },
  { name: "Jira", icon: <FaJira />, color: "#2684FF" },
  { name: "Trello", icon: <FaTrello />, color: "#2684FF" },
  { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
  { name: "Render", icon: <SiRender />, color: "#FFFFFF" },
  { name: "Hugging Face", icon: <SiHuggingface />, color: "#FFD21E" },
  { name: "OOP / MVC", icon: <FaSitemap />, color: "#3B82F6" },
  { name: "DSA", icon: <FaBrain />, color: "#A855F7" },
  { name: "Problem Solving", icon: <FaLightbulb />, color: "#FFD700" }
];

// ... (Keep all your imports and the skillsData array exactly the same) ...

// Interactive Card Component with animation delay prop added
const SkillCard = ({ name, icon, color, delay }) => {
  const cardRef = useRef(null);

  // Mouse tracking logic for the hover glow
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div 
      className="skill-card-wrapper pop-animate" 
      style={{ animationDelay: `${delay}s` }} // Staggers the pop-up effect
      ref={cardRef} 
      onMouseMove={handleMouseMove}
    >
      <div className="skill-card-content">
        <div className="skill-icon" style={{ color: color }}>
          {icon}
        </div>
        <span className="skill-name">{name}</span>
      </div>
    </div>
  );
};

export default function Skills() {
  // Split the skills array exactly in half to force 2 lines
  const half = Math.ceil(skillsData.length / 2);
  const topRow = skillsData.slice(0, half);
  const bottomRow = skillsData.slice(half);

  return (
    <section id="skills" className="section skills-section">
      
      <h1 className="skills-header">
        My <span className="highlight-text">Skills</span>
      </h1>

      {/* Two Stacked Lines Layout */}
      <div className="skills-stack-container">
        
        {/* Top Line */}
        <div className="skills-line">
          {topRow.map((skill, index) => (
            <SkillCard 
              key={`top-${index}`} 
              name={skill.name} 
              icon={skill.icon} 
              color={skill.color}
              delay={index * 0.2} // 0.2s delay cascade
            />
          ))}
        </div>

        {/* Bottom Line */}
        <div className="skills-line">
          {bottomRow.map((skill, index) => (
            <SkillCard 
              key={`bottom-${index}`} 
              name={skill.name} 
              icon={skill.icon} 
              color={skill.color}
              delay={(index * 0.2) + 0.1} // Offset slightly from the top row
            />
          ))}
        </div>

      </div>

      <h2 className="skills-subtitle">Certifications</h2>
      <ul className="cert-list">
        <li>Java – HackerRank (2025)</li>
        <li>Problem Solving – HackerRank (2025)</li>
        <li>Programming Foundations with JavaScript, HTML & CSS by Duke University – Coursera (2025)</li>
        <li>Crash Course on Python by Google – Coursera (2025)</li>
      </ul>

    </section>
  );
}