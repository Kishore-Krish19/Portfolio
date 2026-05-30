<p align="center">
  <img src="portfolio/public/Icon.png" alt="Kishore E Portfolio" width="80" />
</p>

<h1 align="center">Kishore E — Personal Portfolio</h1>

<p align="center">
  <strong>A space-themed, fully animated portfolio built with React 19 + Vite + Framer Motion + Three.js</strong>
</p>

<p align="center">
  <a href="https://github.com/Kishore-Krish19/Portfolio"><img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white" /></a>
  <a href="https://github.com/Kishore-Krish19/Portfolio"><img src="https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white" /></a>
  <a href="https://github.com/Kishore-Krish19/Portfolio"><img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white" /></a>
  <a href="https://github.com/Kishore-Krish19/Portfolio"><img src="https://img.shields.io/badge/Three.js-0.184-000000?logo=three.js&logoColor=white" /></a>
  <a href="https://github.com/Kishore-Krish19/Portfolio"><img src="https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white" /></a>
</p>

---

## ✨ Highlights

| Feature | Description |
|---|---|
| 🌌 **Space Theme** | Deep-space galaxy background with multi-layer parallax scrolling and twinkling stars |
| 🔮 **3D Particle Field** | Interactive WebGL particle system via `@react-three/fiber` — 700 animated spheres reacting to cursor |
| 🎬 **Cinematic Home** | Sequenced intro — expanding neon line → rising hero image → sliding panels → corner nav buttons |
| 🖼️ **Crossfade Previews** | Hover navigation buttons to crossfade hero images with smooth dual-slot transitions |
| ⌨️ **Typing Effects** | Custom `TextType` component with typewriter cycling and `RotatingText` spring animations |
| 🪐 **Constellation Diagram** | SVG solar system with orbiting planets representing core tech skills (React, Node, Java, TensorFlow, AI APIs, Cloud) |
| 📜 **Laser Timeline** | Scroll-driven education timeline with animated laser beam, glowing nodes, and lerp-smoothed progress |
| 🎠 **Project Carousel** | Auto-playing 3-card slideshow with expand/collapse, grid toggle, tech badges, and video demo modals |
| 🏆 **Achievement Marquee** | Infinite-scroll marquee of award cards with gold/silver badge tiers + LeetCode heatmap integration |
| 📜 **Certificate Gallery** | Touch/drag-enabled carousel with auto-play, dot indicators, and credential verification links |
| 📬 **Contact Form** | EmailJS-powered contact form with email, WhatsApp, and social profile links |
| 📱 **Fully Responsive** | Optimized for all screen sizes with mobile-first touch interactions |

---

## 🛠️ Tech Stack

### Core
| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19.2 | UI framework with hooks-based architecture |
| [Vite](https://vite.dev) | 7.2 | Lightning-fast HMR dev server and build tool |
| [Framer Motion](https://www.framer.com/motion/) | 12.40 | Declarative animations, viewport transitions, spring physics |
| [Three.js](https://threejs.org) + `@react-three/fiber` | 0.184 | WebGL 3D particle background system |
| [Tailwind CSS](https://tailwindcss.com) | 4.1 | Utility-first styling (via `@tailwindcss/vite` plugin) |

### Libraries
| Library | Purpose |
|---|---|
| `emailjs-com` | Client-side email sending for the contact form |
| `react-icons` | Icon library (Font Awesome, Simple Icons, etc.) |
| `gsap` | Advanced animation toolkit |

### Fonts & Icons
- **Google Fonts**: Orbitron · Space Grotesk · Syncopate
- **Font Awesome 6.4** (CDN)
- **react-icons** (bundled)

---

## 📁 Project Structure

```
Portfolio/
├── README.md
├── .github/
│   └── appmod/
│
└── portfolio/                  # Vite + React application
    ├── index.html              # Entry HTML (meta, fonts, favicon)
    ├── vite.config.js          # Vite config (React + Tailwind plugins)
    ├── tailwind.config.js      # Tailwind CSS configuration
    ├── postcss.config.js       # PostCSS configuration
    ├── package.json            # Dependencies & scripts
    │
    ├── public/
    │   ├── Icon.png            # Favicon
    │   ├── resume.pdf          # Downloadable resume
    │   ├── certificates/       # Certificate PNG images (6 files)
    │   └── videos/             # Video demo files
    │
    ├── src/
    │   ├── main.jsx            # React DOM root entry
    │   ├── App.jsx             # Root component (parallax + layout)
    │   ├── App.css             # Global app styles
    │   ├── index.css            # Base styles & design tokens
    │   │
    │   ├── assets/             # Hero preview images
    │   │   ├── default.png
    │   │   ├── about.png
    │   │   ├── skills.png
    │   │   ├── projects.png
    │   │   └── contact.png
    │   │
    │   └── components/
    │       ├── Navbar.jsx / .css         # Responsive navigation bar
    │       ├── Home.jsx / .css           # Hero section with crossfade & typing
    │       ├── TextType.jsx / .css       # Typewriter text component
    │       ├── RotatingText.jsx / .css   # Spring-animated rotating text
    │       ├── Antigravity.jsx           # Three.js particle field (WebGL)
    │       ├── About.jsx / .css          # Bio, constellation, education timeline
    │       ├── Skills.jsx / .css         # Tech skills grid with directional pop-in
    │       ├── Projects.jsx / .css       # Project carousel & grid with video modals
    │       ├── Experience.jsx / .css     # Developer journey cards
    │       ├── Achievements.jsx / .css   # Awards marquee + coding profile stats
    │       ├── Certifications.jsx / .css # Certificate carousel with drag/swipe
    │       ├── Resume.jsx / .css         # Resume viewer (currently disabled)
    │       ├── Contact.jsx / .css        # Contact form + social links
    │       ├── HomeButton.jsx / .css     # Floating home navigation
    │       └── Footer.jsx / .css         # Footer with social icons
    │
    └── dist/                   # Production build output
```

---

## 📸 Sections Overview

### 🏠 Home
- Cinematic 6-step intro animation sequence
- Interactive navigation buttons with neon glow corners
- Crossfade image previews on hover (desktop) / tap (mobile)
- Typewriter-style name, traits, and role cycling
- Rotating "I Love to Design / Code / Innovate / Explore" text
- Social icon links: LinkedIn, GitHub, LeetCode, HackerRank, Email

### 👤 About
- Personal overview with role description and feature pills
- Animated metrics: 200+ DSA problems · 10+ projects · AI systems
- Interactive SVG constellation with 6 orbiting tech planets
- Scroll-driven education timeline with laser beam animation
- Education: B.E. CSE (CGPA 8.45) · 12th (87.5%) · 10th (90%)

### 🧠 Skills (25 Technologies)
- **Languages**: HTML, CSS, JavaScript, Java, Python, C
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, Spring Boot
- **Databases**: MySQL, MongoDB, PostgreSQL
- **DevOps**: AWS, Docker, Git, GitHub, Vercel, Render, Linux
- **AI/ML**: TensorFlow, Hugging Face, NLP
- **Tools**: Jira, Trello
- **Concepts**: OOP/MVC, DSA, Problem Solving

### 💼 Projects (14 Projects)

| # | Project | Tech | Links |
|---|---|---|---|
| 1 | **AI Puzzle Lab** | React, TypeScript, Tailwind, Gemini AI | [GitHub](https://github.com/Kishore-Krish19/AI_Puzzle_lab) · [Demo](https://ai-puzzle-lab.vercel.app) |
| 2 | **Prompt Forge AI** | React, Python, NLP, ML | [GitHub](https://github.com/Kishore-Krish19/Prompt_Forge_AI) · [Demo](https://prompt-forge-ai-v1.vercel.app) |
| 3 | **ChatBot Project** | Python, React, NLP, ML | [GitHub](https://github.com/Kishore-Krish19/ChatBot-Project) · [Demo](https://chatbot-001-xyz.onrender.com) |
| 4 | **EFFICACY Website** | React, HTML, CSS, JS | [GitHub](https://github.com/Kishore-Krish19/EFFICACY_website) · [Demo](https://gcee-efficacy26.vercel.app) |
| 5 | **Social Media Monitor** | Java, Spring Boot, MySQL, React | [GitHub](https://github.com/Muhammed-umer/socialMediaManagement) |
| 6 | **Hanoi Arena** | Java, React, Data Structures | [GitHub](https://github.com/Kishore-Krish19/Hanoi-Arena) · [Demo](https://hanoi-arena.vercel.app) |
| 7 | **GCEE Website Redesign** | HTML, CSS, JS, React | [GitHub](https://github.com/Kishore-Krish19/gcee.ac.in) · [Demo](https://gcee-ac-in-web.vercel.app) |
| 8 | **TripSync** | React, Python, Node.js, MySQL | [GitHub](https://github.com/Muhammed-umer/TripSync) · [Demo](https://tripsync-college-trip.web.app) |
| 9 | **Standup Formatter** | React, JS, Node.js | [GitHub](https://github.com/Kishore-Krish19/Standup_Formatter) · [Demo](https://standup-formatter-nu.vercel.app) |
| 10 | **AI Data Analyst Agent** | Python, ML, NLP, React | [GitHub](https://github.com/Kishore-Krish19/AI-Data-Analyst-Agent) · Video Demo |
| 11 | **Student Management App** | Java, JavaFX, Spring Boot, MySQL | [GitHub](https://github.com/Kishore-Krish19/Form) |
| 12 | **Mini Web Projects** | HTML, CSS, JS | [GitHub](https://github.com/Kishore-Krish19/Mini_Projects_with_HTML_CSS_JS) · [Demo](https://kishore-krish19.github.io/Mini_Projects_with_HTML_CSS_JS) |
| 13 | **Towers of Hanoi Solver** | Java, React, Data Structures | [GitHub](https://github.com/Kishore-Krish19/TowersOfHanoi) · [Demo](https://towers-of-hanoi-game.vercel.app) |
| 14 | **My Website** | HTML, CSS | [GitHub](https://github.com/Kishore-Krish19/My_website) · [Demo](https://kishore-krish19.github.io/My_website/) |

### 🚀 Experience
- AI Prompt Optimizer — published Edge Add-ons extension
- AgentVerse 2026 — Project Expo coordinator (30+ teams)
- Cloud Deployment — Render, Vercel, AWS (CI/CD pipelines)
- Class Seminars — Technical presentations & knowledge sharing

### 🏆 Achievements
- 1st Prize in Budget Battle (GCEE)
- Multiple 2nd Prize wins — coding contests, paper presentations, trust chain (Kongu Engineering College)
- Top 5th team in AgentVerse AI Project Expo (30+ teams)
- LeetCode heatmap integration with live stats
- HackerRank: 5★ Gold in Java, C, SQL · 4★ Silver in Python

### 📜 Certifications
- Crash Course on Python (Coursera)
- Programming Foundations with JS, HTML & CSS (Coursera)
- Python Basic (HackerRank)
- C Programming (Coursera)
- Problem Solving Basic (HackerRank)
- Java Basic (HackerRank)

### 📬 Contact
- Email integration via EmailJS
- WhatsApp direct message link
- Social profiles: LinkedIn, GitHub, LeetCode, HackerRank

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/Kishore-Krish19/Portfolio.git

# Navigate to the app directory
cd Portfolio/portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## 🔗 Connect

<p align="center">
  <a href="https://linkedin.com/in/kishore-e-241369279"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white&style=for-the-badge" /></a>
  <a href="https://github.com/Kishore-Krish19"><img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge" /></a>
  <a href="https://leetcode.com/u/Kishore__E"><img src="https://img.shields.io/badge/LeetCode-FFA116?logo=leetcode&logoColor=white&style=for-the-badge" /></a>
  <a href="https://www.hackerrank.com/profile/Kishore_krish_19"><img src="https://img.shields.io/badge/HackerRank-00EA64?logo=hackerrank&logoColor=white&style=for-the-badge" /></a>
  <a href="mailto:kishore.e.1908@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?logo=gmail&logoColor=white&style=for-the-badge" /></a>
</p>

---

<p align="center">
  Made with 💙 by <strong>Kishore E</strong>
</p>
