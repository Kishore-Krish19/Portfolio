import "./Experience.css";

const experiences = [
  {
    id: "exp-1",
    role: "Event Coordinator",
    category: "Leadership & Management",
    icon: "event",
    gradient: "violet",
    date: "2024 – Present",
    highlights: [
      "Organised and coordinated technical & cultural events for inter-college competitions",
      "Managed end-to-end logistics, registrations, and team scheduling",
      "Led cross-functional volunteer teams to ensure seamless execution",
    ],
    tags: ["Planning", "Leadership", "Coordination"],
  },
  {
    id: "exp-2",
    role: "Published Browser Extension",
    category: "Open-Source & Product",
    icon: "extension",
    gradient: "cyan",
    date: "2025",
    highlights: [
      "Designed, developed and shipped a browser extension to the Chrome Web Store",
      "Built with JavaScript, HTML & CSS following Manifest V3 standards",
      "Achieved live publication accessible to public users worldwide",
    ],
    tags: ["Chrome Extension", "JavaScript", "MV3"],
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

const renderIcon = (icon) => {
  switch (icon) {
    case "event": return <IconEvent />;
    case "extension": return <IconExtension />;
    case "cloud": return <IconCloud />;
    case "seminar": return <IconSeminar />;
    default: return <IconEvent />;
  }
};

export default function Experience() {
  return (
    <section id="experience" className="section experience-section scroll-3d">
      <div className="content-layer">
        {/* Header */}
        <h1 className="exp-title">Developer Journey</h1>
        <div className="exp-subtitle-underline" />
        <p className="exp-subtitle-text">
          A snapshot of key experiences that shaped my technical and leadership journey.
        </p>

        {/* Cards */}
        <div className="exp-cards-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className={`exp-card exp-card--${exp.gradient}`}>
              {/* Glow */}
              <div className="exp-card-glow" />

              {/* Header row */}
              <div className="exp-card-header">
                <div className={`exp-icon-wrapper exp-icon--${exp.gradient}`}>
                  {renderIcon(exp.icon)}
                </div>
                <div className="exp-header-text">
                  <span className="exp-category">{exp.category}</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
