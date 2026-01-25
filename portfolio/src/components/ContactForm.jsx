import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

export default function ContactForm() {
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
    <form className="contact-form" onSubmit={sendEmail}>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Send Message</button>

      {status && <p className="status">{status}</p>}

    </form>
  );
}
