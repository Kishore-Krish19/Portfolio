import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    id: "exp-intern",
    role: "React Native Developer Intern",
    company: "FeOS Technologies",
    category: "Internship Experience",
    icon: "reactnative",
    gradient: "cyan",
    date: "June 2026 – Present",
    certificate: "/certificates/Kishore Internship Certificate.webp",
    certificateBadge: "Internship Certificate",
    highlights: [
      "Developing a service marketplace mobile application using React Native.",
      "Building reusable and responsive mobile UI components.",
      "Integrating React Native frontend with Node.js REST APIs.",
      "Implementing authentication, onboarding, profile management, and navigation flows.",
      "Improving application performance, debugging issues, and enhancing user experience.",
    ],
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "REST API",
      "Android",
      "Mobile Development",
    ],
  },
  {
    id: "exp-1",
    role: "AI Prompt Optimizer Extension",
    category: "Open-Source & AI Product",
    icon: "aiprompt",
    gradient: "sky",
    date: "May 2026",
    certificate: "/certificates/Extension-published.webp",
    certificateBadge: "Published Extension",
    highlights: [
      "Designed and published an AI-powered browser extension on the Microsoft Edge Add-ons Store",
      "Built a system that transforms rough prompts into structured, high-quality AI prompts",
      "Successfully completed public deployment and live publishing on the Edge Add-ons platform",
    ],
    tags: ["AI Tools", "Edge Extension", "Prompt Engineering", "JavaScript"],
  },
  {
    id: "exp-2",
    role: "AgentVerse 2026 – Project Expo Coordinator",
    category: "Experience & Leadership",
    icon: "agentverse",
    gradient: "rose",
    date: "March 2026",
    certificate: "/certificates/AgentVerse-26_Certificate.webp",
    certificateBadge: "Event Coordinator",
    highlights: [
      "Coordinated and managed AgentVerse 2026, a college-level project expo featuring 30+ participating teams",
      "Handled complete event execution including team coordination, scheduling, registrations, and stage management",
      "Participated as a project presenter while simultaneously managing core event responsibilities",
    ],
    tags: ["AgentVerse", "Event Management", "Leadership", "Coordination"],
  },
  {
    id: "exp-3",
    role: "Cloud Deployment Engineer",
    category: "DevOps & Infrastructure",
    icon: "cloud",
    gradient: "emerald",
    date: "2024 – Present",
    highlights: [
      "Built and deployed multiple full-stack projects on cloud platforms (Render, Vercel, AWS)",
      "Configured CI/CD pipelines, environment variables and production-grade deployments",
      "Managed containerised workloads and monitored live app performance",
    ],
    tags: ["AWS", "Vercel", "Render", "CI/CD"],
  },
  {
    id: "exp-4",
    role: "Class Seminars",
    category: "Communication & Knowledge Sharing",
    icon: "seminar",
    gradient: "orange",
    date: "2023 – Present",
    highlights: [
      "Delivered technical seminars to classmates on emerging topics in computer science",
      "Prepared structured presentations covering concepts, demos, and Q&A sessions",
      "Strengthened public speaking, research, and knowledge-communication skills",
    ],
    tags: ["Presenting", "Research", "Public Speaking"],
  },
];

const IconEvent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
  </svg>
);

const IconExtension = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4a2 2 0 0 0-2 2v4h1.5a2.5 2.5 0 0 1 0 5H2v4a2 2 0 0 0 2 2h4v-1.5a2.5 2.5 0 0 1 5 0V21h4a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z" />
  </svg>
);

const IconCloud = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
);

const IconSeminar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    <path d="M3 21h18" />
  </svg>
);

const IconAgentVerse = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconAIPrompt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.57-3.25 3.92" />
    <path d="M8.56 13.44a4 4 0 0 0 6.88 0" />
    <path d="M12 18v4" />
    <path d="M7 22h10" />
    <circle cx="12" cy="10" r="1" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 6.34l1.41-1.41" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
  </svg>
);

const IconReactNative = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />
    <ellipse cx="12" cy="10" rx="4" ry="1.5" transform="rotate(30 12 10)" />
    <ellipse cx="12" cy="10" rx="4" ry="1.5" transform="rotate(-30 12 10)" />
    <circle cx="12" cy="10" r="1" />
  </svg>
);

const renderIcon = (icon) => {
  switch (icon) {
    case "event": return <IconEvent />;
    case "extension": return <IconExtension />;
    case "cloud": return <IconCloud />;
    case "seminar": return <IconSeminar />;
    case "agentverse": return <IconAgentVerse />;
    case "aiprompt": return <IconAIPrompt />;
    case "reactnative": return <IconReactNative />;
    default: return <IconEvent />;
  }
};

const renderCardContent = (exp) => (
  <>
    {/* Glow */}
    <div className="exp-card-glow" />

    {/* Header row */}
    <div className="exp-card-header">
      <div className={`exp-icon-wrapper exp-icon--${exp.gradient}`}>
        {renderIcon(exp.icon)}
      </div>
      <div className="exp-header-text">
        <span className="exp-category">
          {exp.category}
          {exp.company && <span className="exp-company-separator"> • </span>}
          {exp.company && <span className="exp-company-name">{exp.company}</span>}
        </span>
        <h3 className="exp-role">{exp.role}</h3>
      </div>
      <span className="exp-date">{exp.date}</span>
    </div>

    {/* Divider */}
    <div className={`exp-divider exp-divider--${exp.gradient}`} />

    {/* Highlights */}
    <ul className="exp-highlights">
      {exp.highlights.map((h, i) => (
        <li key={i} className="exp-highlight-item">
          <span className={`exp-bullet exp-bullet--${exp.gradient}`} />
          {h}
        </li>
      ))}
    </ul>

    {/* Tags */}
    <div className="exp-tags">
      {exp.tags.map((tag) => (
        <span key={tag} className={`exp-tag exp-tag--${exp.gradient}`}>{tag}</span>
      ))}
    </div>
  </>
);

export default function Experience() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="experience" className="section experience-section scroll-3d">
      <div className="content-layer">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="exp-title section-heading">Developer <span className="heading-gradient">Journey</span></h1>
          <div className="exp-subtitle-underline section-heading-bar" />
        </motion.div>
        <motion.p
          className="exp-subtitle-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          A snapshot of key experiences that shaped my technical and leadership journey.
          <span className="exp-hint-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '5px', marginTop: '-2px', color: '#06b6d4' }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            Tip: Hover on cards to view certificate!
          </span>
        </motion.p>

        {/* Cards Grid */}
        <div className="exp-cards-grid">
          {experiences.map((exp, i) => {
            const hasCertificate = !!exp.certificate;

            if (hasCertificate) {
              return (
                <motion.div
                  key={exp.id}
                  className={`exp-card-flip exp-card-flip--${exp.gradient}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={i}
                  viewport={{ once: false, amount: 0.15 }}
                  tabIndex={0}
                  aria-label={`${exp.role} at ${exp.company} experience card. Hover or focus to view the certificate.`}
                >
                  <div className="exp-card-inner">
                    {/* Front Side */}
                    <div className="exp-card-front">
                      <div className={`exp-card exp-card--${exp.gradient}`}>
                        {renderCardContent(exp)}
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="exp-card-back">
                      <div className={`exp-cert-badge exp-cert-badge--${exp.gradient}`}>
                        {exp.certificateBadge || "Certificate"}
                      </div>
                      <img
                        src={exp.certificate}
                        alt={`${exp.role} ${exp.company ? `Certificate from ${exp.company}` : "Certificate"}`}
                        className="exp-cert-img"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={exp.id}
                className={`exp-card exp-card--${exp.gradient}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: false, amount: 0.15 }}
              >
                {renderCardContent(exp)}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
