import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${show ? "show" : ""}`}>
      <h2 className="logo">Kishore</h2>

      <div className="nav-links">
        <button onClick={() => scrollTo("home")}>Home</button>
        <button onClick={() => scrollTo("about")}>About</button>
        <button onClick={() => scrollTo("skills")}>Skills</button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <button onClick={() => scrollTo("resume")}>Resume</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>
      </div>
    </nav>
  );
}
