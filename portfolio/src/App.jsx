import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import emailjs from "emailjs-com";
import { useState } from "react";
import HomeButton from "./components/HomeButton";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      {/* Home Section */}
      <Home />

      {/* About Section */}
        <About />

      {/* Skills Section */}
        <Skills />

      {/* Projects Section */}
        <Projects />

      {/* Resume Section */}
        <Resume />

      {/* Contact Section */}
      <Contact />

      <Footer />

    </>
  );
}

export default App;
