import { useEffect, useRef, useState } from "react";

export default function RisingText({ text, delay = 80 }) {
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        } else {
          setActive(false); // 🔁 reset when out of view
        }
      },
      {
        threshold: 0.6, // trigger when mostly visible
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={containerRef} className="rise-line">
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`rise-word ${active ? "animate" : ""}`}
          style={{ animationDelay: `${index * delay}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}
