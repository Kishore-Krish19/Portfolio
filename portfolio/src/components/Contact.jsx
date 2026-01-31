import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
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
                    setForm({ name: "", email: "", message: "" });
                },
                () => {
                    setStatus("Failed to send message ❌");
                }
            );
    };

    return (
        <section id="contact" className="section contact-section">

            <div className="content-layer">

                <h1>Contact Me</h1>

                <p className="contact-desc">
                    Feel free to reach out for opportunities, projects, or collaboration.
                </p>
                {/* Contact Info */}
                <div className="contact-info">

                    {/* Location */}
                    <div className="info-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                        </svg>
                        <span>Kaveripattinam, Tamil Nadu</span>
                    </div>

                    {/* Gmail */}
                    <div className="info-item">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>

                        <a href="mailto:kishore.e.1908@gmail.com">
                            kishore.e.1908@gmail.com
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div className="info-item">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.35-1.86 3.58 0 4.24 2.36 4.24 5.43v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
                        </svg>

                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn Profile
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="info-item">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.57.24 2.73.12 3.02.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.21 0 .31.21.68.8.56 4.56-1.53 7.85-5.86 7.85-10.97C23.5 5.74 18.27.5 12 .5z" />
                        </svg>

                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub Profile
                        </a>
                    </div>

                </div>
                {/* Contact Form */}
                <form className="contact-form" onSubmit={sendEmail}>

                    <h2 className="contact-form-title">
                        Or Reach me by sending your name and email 👇
                    </h2>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                    />
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                    />
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    ></textarea>


                    <button type="submit">Send Message</button>

                    {status && <p className="status">{status}</p>}

                </form>

            </div>
        </section>
    );
}
