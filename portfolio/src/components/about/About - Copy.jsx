import "./About.css";

export default function About() {
    return (
        <section id="about" className="section about-section scroll-3d">

            <div className="content-layer">
                {/* About Me */}
                <h1 className="about-title">
                    About Me
                </h1>
                <ul className="about-points">
                    <li>
                        Passionate Software Developer with experience in building
                        desktop and web applications using Java, React.js, JavaFX, and
                        Spring Boot.
                    </li>
                    <li>
                        Hands-on experience in developing RESTful APIs, managing
                        databases using MySQL and PostgreSQL, and working with Git-based
                        workflows.
                    </li>
                    <li>
                        Enjoy solving real-world problems through code and continuously
                        improving my skills through projects and coding practice.
                    </li>
                </ul>
                {/* Education */}
                <h2 className="about-subtitle">
                    Education
                </h2>

                <div className="timeline-container">
                    {/* Decorative Timeline lines */}
                    <div className="timeline-line-bg"></div>
                    <div className="timeline-line-active"></div>

                    {/* College Education (Node 1) */}
                    <div className="timeline-item">
                        <div className="timeline-icon-box">
                            <div className="timeline-icon-circle">
                                <div className="timeline-icon-inner grad-purple-blue">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                                        <path d="M22 10v6" />
                                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-card">
                            <div className="timeline-card-header">
                                <h3 className="timeline-card-title">B.E. Computer Science and Engineering</h3>
                                <span className="timeline-card-date">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M8 2v4" />
                                        <path d="M16 2v4" />
                                        <rect width="18" height="18" x="3" y="4" rx="2" />
                                        <path d="M3 10h18" />
                                    </svg>
                                    2023 - Present
                                </span>
                            </div>
                            <div className="timeline-detail-row">
                                <svg className="timeline-detail-icon building-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 10h.01" />
                                    <path d="M12 14h.01" />
                                    <path d="M12 6h.01" />
                                    <path d="M16 10h.01" />
                                    <path d="M16 14h.01" />
                                    <path d="M16 6h.01" />
                                    <path d="M8 10h.01" />
                                    <path d="M8 14h.01" />
                                    <path d="M8 6h.01" />
                                    <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                                    <rect x="4" y="2" width="16" height="20" rx="2" />
                                </svg>
                                <p>Government College of Engineering, Erode</p>
                            </div>
                            <div className="timeline-award-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                                    <circle cx="12" cy="8" r="6" />
                                </svg>
                                <span>CGPA: 8.58</span>
                            </div>
                        </div>
                    </div>

                    {/* Schooling 12th Std (Node 2) */}
                    <div className="timeline-item">
                        <div className="timeline-icon-box">
                            <div className="timeline-icon-circle">
                                <div className="timeline-icon-inner grad-blue-cyan">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                                        <path d="M22 10v6" />
                                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-card">
                            <div className="timeline-card-header">
                                <h3 className="timeline-card-title">Higher Secondary Second Year (12th Std)</h3>
                                <span className="timeline-card-date">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M8 2v4" />
                                        <path d="M16 2v4" />
                                        <rect width="18" height="18" x="3" y="4" rx="2" />
                                        <path d="M3 10h18" />
                                    </svg>
                                    Completed in 2022
                                </span>
                            </div>
                            <div className="timeline-detail-row">
                                <svg className="timeline-detail-icon building-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 10h.01" />
                                    <path d="M12 14h.01" />
                                    <path d="M12 6h.01" />
                                    <path d="M16 10h.01" />
                                    <path d="M16 14h.01" />
                                    <path d="M16 6h.01" />
                                    <path d="M8 10h.01" />
                                    <path d="M8 14h.01" />
                                    <path d="M8 6h.01" />
                                    <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                                    <rect x="4" y="2" width="16" height="20" rx="2" />
                                </svg>
                                <p>[Enter Your 12th Higher Secondary School Name, City]</p>
                            </div>
                            <div className="timeline-award-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                                    <circle cx="12" cy="8" r="6" />
                                </svg>
                                <span>Percentage: [Enter Your Percentage]%</span>
                            </div>
                        </div>
                    </div>

                    {/* Schooling 10th Std (Node 3) */}
                    <div className="timeline-item">
                        <div className="timeline-icon-box">
                            <div className="timeline-icon-circle">
                                <div className="timeline-icon-inner grad-emerald-teal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                                        <path d="M22 10v6" />
                                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-card">
                            <div className="timeline-card-header">
                                <h3 className="timeline-card-title">Secondary School Leaving Certificate (10th Std)</h3>
                                <span className="timeline-card-date">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M8 2v4" />
                                        <path d="M16 2v4" />
                                        <rect width="18" height="18" x="3" y="4" rx="2" />
                                        <path d="M3 10h18" />
                                    </svg>
                                    Completed in 2020
                                </span>
                            </div>
                            <div className="timeline-detail-row">
                                <svg className="timeline-detail-icon building-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 10h.01" />
                                    <path d="M12 14h.01" />
                                    <path d="M12 6h.01" />
                                    <path d="M16 10h.01" />
                                    <path d="M16 14h.01" />
                                    <path d="M16 6h.01" />
                                    <path d="M8 10h.01" />
                                    <path d="M8 14h.01" />
                                    <path d="M8 6h.01" />
                                    <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                                    <rect x="4" y="2" width="16" height="20" rx="2" />
                                </svg>
                                <p>[Enter Your 10th High School Name, City]</p>
                            </div>
                            <div className="timeline-award-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                                    <circle cx="12" cy="8" r="6" />
                                </svg>
                                <span>Percentage: [Enter Your Percentage]%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
