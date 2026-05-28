import { useRef, useState } from "react";
import { motion } from "framer-motion";
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

// 8 directional origins for the scatter pop-in effect
const directions = [
  { x: 0, y: -80 },    // top
  { x: 0, y: 80 },     // bottom
  { x: -100, y: 0 },   // left
  { x: 100, y: 0 },    // right
  { x: -80, y: -70 },  // top-left
  { x: 80, y: -70 },   // top-right
  { x: -80, y: 70 },   // bottom-left
  { x: 80, y: 70 },    // bottom-right
];

// Deterministic but varied direction per index (so it's consistent across re-renders)
const getDirection = (index) => directions[index % directions.length];

// Interactive Card Component with directional pop-in
const SkillCard = ({ name, icon, color, index }) => {
  const cardRef = useRef(null);
  const [landed, setLanded] = useState(false);
  const dir = getDirection(index);

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
    <motion.div
      className={`skill-card-wrapper ${landed ? "pop-animate" : ""}`}
      style={landed ? { animationDelay: `${(index % 8) * 0.5}s` } : undefined}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{
        opacity: 0,
        x: dir.x,
        y: dir.y,
        scale: 0.5,
        rotate: (dir.x > 0 ? 1 : -1) * (8 + (index % 3) * 4),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.8,
        delay: index * 0.07,
      }}
      viewport={{ once: false, amount: 0.1 }}
      onAnimationComplete={() => setLanded(true)}
      onViewportLeave={() => setLanded(false)}
    >
      <div className="skill-card-content">
        <div className="skill-icon" style={{ color: color }}>
          {icon}
        </div>
        <span className="skill-name">{name}</span>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const half = Math.ceil(skillsData.length / 2);
  const topRow = skillsData.slice(0, half);
  const bottomRow = skillsData.slice(half);

  return (
    <section id="skills" className="section skills-section">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="skills-header section-heading">
          Technical <span className="heading-gradient">Expertise</span>
        </h1>
        <div className="section-heading-bar"></div>
      </motion.div>

      {/* Two Stacked Lines Layout */}
      <div className="skills-stack-container">
        
        {/* Top Line */}
        <div className="skills-line">
          {topRow.map((skill, index) => (
            <SkillCard 
              key={skill.name} 
              name={skill.name} 
              icon={skill.icon} 
              color={skill.color}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Line */}
        <div className="skills-line">
          {bottomRow.map((skill, index) => (
            <SkillCard 
              key={skill.name} 
              name={skill.name} 
              icon={skill.icon} 
              color={skill.color}
              index={half + index}
            />
          ))}
        </div>

      </div>

    </section>
  );
}