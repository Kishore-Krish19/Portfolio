import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";
import emailjs from "emailjs-com";
import { useState } from "react";
import HomeButton from "./components/HomeButton";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-gray-900 text-white p-10 pt-24 relative"
      >

        <HomeButton />

        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p>
          I am Kishore, a passionate software developer skilled in Java, Python,
          Web Development, and AI.
        </p>

      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-black text-white p-10 pt-24 relative">

        <HomeButton />

        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <p>Java, Python, React, Spring Boot, MySQL, ML</p>

      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gray-900 text-white p-10 relative">

        <HomeButton />

        <Projects />

      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen bg-gray-900 text-white p-10 pt-24 relative">

        <HomeButton />

        <Resume />

      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-black text-white p-10 pt-24 relative flex flex-col items-center"
      >

        <HomeButton />

        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

        <ContactForm />

      </section>

    </>
  );
}

export default App;
