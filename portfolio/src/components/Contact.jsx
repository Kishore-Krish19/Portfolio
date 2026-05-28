import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        setStatus("Sending...");

        emailjs
            .send(
                "service_inejnvi",
                "template_g934lim",
                form,
                "b2kbXf8F9ex-BmD1e"
            )
            .then(
                () => {
                    setStatus("Message sent successfully ✅");
                    setForm({ name: "", email: "", subject: "", message: "" });
                },
                () => {
                    setStatus("Failed to send message ❌");
                }
            );
    };
    const contactRef = useRef(null);

    return (
        <section id="contact" className="section contact-section">
            <div className="content-layer">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h1 className="contact-title section-heading">Get In <span className="heading-gradient">Touch</span></h1>
                    <div className="contact-subtitle-underline section-heading-bar"></div>
                </motion.div>

                <div className="contact-grid">
                    {/* Left Column: Connect Info Panel */}
                    <motion.div
                        className="contact-info-panel"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <h2 className="panel-title">Let's Connect</h2>
                        <p className="panel-desc">
                            Prefer reaching out directly? You can drop me an email or send a quick message on WhatsApp. I'm highly responsive on both!
                        </p>

                        <div className="direct-contact-bars">
                            {/* Email Bar */}
                            <div className="contact-bar-item email-bar">
                                <div className="iso-pro gmail-item">
                                    <span />
                                    <span />
                                    <span />
                                    <a href="mailto:kishore.e.1908@gmail.com">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="svg"
                                        >
                                            <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </a>
                                </div>
                                <a href="mailto:kishore.e.1908@gmail.com" className="bar-text">kishore.e.1908@gmail.com</a>
                            </div>

                            {/* WhatsApp Bar */}
                            <div className="contact-bar-item whatsapp-bar">
                                <div className="iso-pro whatsapp-item">
                                    <span />
                                    <span />
                                    <span />
                                    <a href="https://wa.me/918903664244" target="_blank" rel="noreferrer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            fill="currentColor"
                                            className="svg"
                                        >
                                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                        </svg>
                                    </a>
                                </div>
                                <a href="https://wa.me/918903664244" target="_blank" rel="noreferrer" className="bar-text">+91 8903664244</a>
                            </div>
                        </div>

                        <div className="social-profiles-section">
                            <h3 className="social-label">SOCIAL PROFILES</h3>
                            <ul className="iso-list">
                                {/* LinkedIn */}
                                <li className="iso-pro linkedin-item">
                                    <span />
                                    <span />
                                    <span />
                                    <a
                                        href="https://linkedin.com/in/kishore-e-241369279"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="svg"
                                        >
                                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.35-1.86 3.58 0 4.24 2.36 4.24 5.43v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
                                        </svg>
                                    </a>
                                    <div className="text-tooltip">LinkedIn</div>
                                </li>

                                {/* GitHub */}
                                <li className="iso-pro github-item">
                                    <span />
                                    <span />
                                    <span />
                                    <a
                                        href="https://github.com/Kishore-Krish19"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="svg"
                                        >
                                            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.57.24 2.73.12 3.02.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.21 0 .31.21.68.8.56 4.56-1.53 7.85-5.86 7.85-10.97C23.5 5.74 18.27.5 12 .5z" />
                                        </svg>
                                    </a>
                                    <div className="text-tooltip">GitHub</div>
                                </li>

                                {/* LeetCode */}
                                <li className="iso-pro leetcode-item">
                                    <span />
                                    <span />
                                    <span />
                                    <a
                                        href="https://leetcode.com/u/Kishore__E/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="svg"
                                        >
                                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                        </svg>
                                    </a>
                                    <div className="text-tooltip">LeetCode</div>
                                </li>

                                {/* HackerRank */}
                                <li className="iso-pro hackerrank-item">
                                    <span />
                                    <span />
                                    <span />
                                    <a
                                        href="https://www.hackerrank.com/profile/Kishore_krish_19"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="svg"
                                        >
                                            <path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95c-.061 0-.111-.05-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 0 1-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 0 1-.11.112h-5.78a.11.11 0 0 1-.11-.11V8.111c0-.06.05-.11.11-.11z" />
                                        </svg>
                                    </a>
                                    <div className="text-tooltip">HackerRank</div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form Panel */}
                    <motion.form
                        className="contact-form-panel"
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="form-row-two-col">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Full Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Job Opportunity / Project Idea"
                                value={form.subject}
                                onChange={handleChange}
                                autoComplete="off"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Hi Kishore, I would like to discuss..."
                                value={form.message}
                                onChange={handleChange}
                                autoComplete="off"
                                required
                            ></textarea>
                        </div>

                        <button className="send-btn bounce-item" type="submit">
                            <span>Send Message</span>
                            <svg className="send-paper-plane-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor" />
                            </svg>
                        </button>

                        {status && <p className="status">{status}</p>}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
