import { useEffect } from "react";

// LinkedIn Badge
export default function LinkedInBadge() {
    useEffect(() => {
        const renderBadge = () => {
            if (window.LIRenderAll) {
                try {
                    window.LIRenderAll();
                } catch (e) {
                    console.error("Error rendering LinkedIn Badge: ", e);
                }
            }
        };

        // Check if script is already present in document
        const existingScript = document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]');
        
        if (existingScript) {
            renderBadge();
        } else {
            const script = document.createElement("script");
            script.src = "https://platform.linkedin.com/badges/js/profile.js";
            script.async = true;
            script.defer = true;
            script.onload = renderBadge;
            document.body.appendChild(script);
        }

        // Delayed check to ensure badge renders after DOM is completely ready
        const timeoutId = setTimeout(renderBadge, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="kishore-e-dev"
            data-version="v1"
        >
            <a
                className="badge-base__link LI-simple-link"
                href="https://www.linkedin.com/in/kishore-e-dev"
            >
                Kishore E
            </a>
        </div>
    );
}