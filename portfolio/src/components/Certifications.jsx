import { useState, useRef, useEffect } from "react";
import "./Certifications.css";

// 1. Update this array with your imported PNG paths
const certificates = [
  {
    title: "Java (Basic) Certificate",
    imgSrc: "src/assets/certificates/java.png", 
    verifyUrl: "https://www.hackerrank.com/certificates/verify"
  },
  {
    title: "Problem Solving (Basic) Certificate",
    imgSrc: "src/assets/certificates/problem_solving.png", 
    verifyUrl: "https://www.hackerrank.com/certificates/verify"
  },
  {
    title: "Programming Foundations with JS, HTML & CSS",
    imgSrc: "src/assets/certificates/html.png", 
    verifyUrl: "https://www.coursera.org/verify"
  },
  {
    title: " C Programming",
    imgSrc: "src/assets/certificates/c_progrgamming.png", 
    verifyUrl: "https://www.coursera.org/verify"
  },
  {
    title: "Crash Course on Python",
    imgSrc: "src/assets/certificates/python.png", 
    verifyUrl: "https://www.coursera.org/verify"
  }
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  // Touch and Mouse Drag / Swipe state variables
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  // AUTOMATIC SLIDESHOW EFFECT (Slides every 4 seconds unless hovered)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4000ms = 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Swipe / Drag Dragging logic
  const handleTouchStart = (e) => {
    setIsPaused(true);
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    prevTranslate.current = -currentIndex * trackRef.current.offsetWidth;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
    trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsPaused(false);
    const threshold = trackRef.current.offsetWidth * 0.2;
    const moved = currentTranslate.current - prevTranslate.current;

    if (moved < -threshold && currentIndex < certificates.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (moved > threshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(currentIndex);
    }
  };

  // Desktop Drag Support
  const handleMouseDown = (e) => {
    setIsPaused(true);
    isDragging.current = true;
    startX.current = e.clientX;
    prevTranslate.current = -currentIndex * trackRef.current.offsetWidth;
    trackRef.current.style.transition = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.clientX;
    const diff = currentX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
    trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsPaused(false);
    trackRef.current.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    const threshold = trackRef.current.offsetWidth * 0.2;
    const moved = currentTranslate.current - prevTranslate.current;

    if (moved < -threshold && currentIndex < certificates.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (moved > threshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(currentIndex);
    }
  };

  // Keep carousel snapped on resize
  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  return (
    <section id="certifications" className="section certifications-section scroll-3d">
      <div className="content-layer">
        
        {/* Title */}
        <h1 className="certifications-title">Certificates</h1>
        <div className="certifications-subtitle-underline"></div>

        {/* Carousel Container (pauses slideshow on hover) */}
        <div 
          className="carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Navigation Chevron Buttons */}
          <button className="carousel-nav-btn prev" onClick={prevSlide} aria-label="Previous certificate">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button className="carousel-nav-btn next" onClick={nextSlide} aria-label="Next certificate">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Interactive Slide Track */}
          <div 
            className="carousel-track" 
            ref={trackRef}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {certificates.map((cert, index) => (
              <div className="carousel-slide" key={index}>
                <div className="certificate-card">
                  
                  {/* Decorative glowing gradient border */}
                  <div className="cert-border-glow"></div>

                  {/* Clean PNG Image Wrapper */}
                  <div className="cert-image-wrapper">
                    <img 
                      src={cert.imgSrc} 
                      alt={cert.title} 
                      className="cert-png-image"
                      draggable="false" 
                    />
                    {cert.verifyUrl && (
                      <a href={cert.verifyUrl} target="_blank" rel="noreferrer" className="cert-verify-link-overlay">
                        Verify Credential →
                      </a>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Carousel indicator dots */}
        <div className="carousel-dots-container">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`carousel-dot ${currentIndex === index ? "active" : ""}`}
              aria-label={`Go to certificate ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}