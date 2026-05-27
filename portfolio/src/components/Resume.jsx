import { useState } from "react";
import "./Resume.css";

export default function Resume() {

    const [showPreview, setShowPreview] = useState(false);

    return (
        <section id="resume" className="section resume-section">

            <h1>My Resume</h1>

            <p>
                View or download my resume below.
            </p>

            {/* Buttons */}
            <div className="resume-actions">

                {/* Download */}
                <button
                    className="resume-btn"
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/resume.pdf";
                        link.download = "Kishore_Resume.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                >
                    Download Resume
                </button>

                {/* View */}
                <button
                    className="resume-btn view-btn"
                    onClick={() => setShowPreview((prev) => !prev)}
                >
                    {showPreview ? "Hide Resume" : "View Resume"}
                </button>

            </div>


            {/* PDF Preview (Conditional) */}
            {showPreview && (
                <div className="resume-viewer">
                    <iframe
                        src="/resume.pdf"
                        title="Resume Preview"
                        frameBorder="0"
                    ></iframe>
                </div>
            )}

        </section>
    );
}
