import { useEffect, useCallback, useRef } from "react";

/**
 * useDesktopScale — counter-scales browser zoom so the page always looks
 * like the 100 % design, regardless of zoom level (110-175 %).
 *
 * How it works:
 *   1. Temporarily set CSS zoom = 1 on <html> so measurements are clean.
 *   2. Compare screen.availWidth with window.innerWidth.
 *      At 100 % zoom in a maximized window: ratio ≈ 1.00 – 1.02 (scrollbar).
 *      At 125 % zoom: ratio ≈ 1.25.
 *   3. Snap the ratio to the nearest standard zoom level.
 *   4. Apply CSS zoom = 1 / detectedZoom on <html>.
 *   5. Correct --vh for full-viewport sections.
 *
 * Mobile (screen width ≤ 768 px) is never touched.
 */

// Standard browser zoom levels and their counter-scales
const ZOOM_LEVELS = [
  { zoom: 1.00, counter: 0.9000, label: "100%" },
  { zoom: 1.10, counter: 0.8182, label: "110%" },
  { zoom: 1.25, counter: 0.7200, label: "125%" },
  { zoom: 1.50, counter: 0.6000, label: "150%" },
  { zoom: 1.75, counter: 0.5143, label: "175%" },
  { zoom: 2.00, counter: 0.4500, label: "200%" },
];

/**
 * Snap a raw ratio to the nearest known zoom level.
 * Returns { counter, zoom } of the best match, or null if no match
 * is close enough (within ±4 % of a known level).
 */
function detectZoomLevel(ratio) {
  let best = null;
  let bestDist = Infinity;

  for (const level of ZOOM_LEVELS) {
    const dist = Math.abs(ratio - level.zoom);
    if (dist < bestDist) {
      bestDist = dist;
      best = level;
    }
  }

  // Accept match if within 4 % of the snapped value
  if (best && bestDist <= best.zoom * 0.04) {
    return best;
  }

  return null;
}

export function useDesktopScale() {
  const prevCounter = useRef(null);

  const applyScale = useCallback(() => {
    // ── Mobile guard (never touch mobile) ──────────────────────────
    const screenW = window.screen.availWidth || window.screen.width;
    if (screenW <= 768) {
      document.documentElement.style.zoom = "";
      document.documentElement.style.removeProperty("--desktop-scale");
      document.documentElement.style.setProperty("--vh", "100vh");
      prevCounter.current = null;
      return;
    }

    // ── Step 1: Reset CSS zoom so innerWidth is clean ──────────────
    document.documentElement.style.zoom = "1";
    void document.documentElement.offsetWidth; // synchronous reflow

    const rawW = window.innerWidth;
    const rawH = window.innerHeight;

    // ── Step 2: Compute zoom ratio ─────────────────────────────────
    // screen.availWidth is the OS-reported CSS-px screen width.
    // At 100 % zoom + maximized window: rawW ≈ screenW (−17 px scrollbar).
    // At 125 % zoom + maximized window: rawW ≈ screenW / 1.25.
    //
    // Scrollbar is hidden (scrollbar-width: none) so no compensation needed.
    const adjustedW = rawW;
    const ratio = screenW / adjustedW;

    // ── Step 3: Snap to known zoom level ───────────────────────────
    const detected = detectZoomLevel(ratio);

    let counterZoom;
    if (!detected) {
      // Unrecognised → default to 90% target scale (0.9)
      counterZoom = 0.9;
    } else {
      counterZoom = detected.counter;
    }

    // Round to 4 dp
    const rounded = Math.round(counterZoom * 10000) / 10000;

    // ── Step 4: Apply ──────────────────────────────────────────────
    if (rounded === 1) {
      document.documentElement.style.zoom = "";
      document.documentElement.style.removeProperty("--desktop-scale");
      document.documentElement.style.setProperty("--vh", "100vh");
      document.documentElement.removeAttribute("data-zoom-compensated");
    } else {
      document.documentElement.style.zoom = String(rounded);
      document.documentElement.style.setProperty(
        "--desktop-scale",
        String(rounded)
      );
      // Correct viewport height for the scaled coordinate space
      const correctedVh = rawH / rounded;
      document.documentElement.style.setProperty("--vh", `${correctedVh}px`);
      // Flag so CSS can guard desktop breakpoints from firing under zoom
      document.documentElement.setAttribute("data-zoom-compensated", "");
    }

    prevCounter.current = rounded;
  }, []);

  useEffect(() => {
    applyScale();
    window.addEventListener("resize", applyScale);
    return () => {
      window.removeEventListener("resize", applyScale);
      document.documentElement.style.zoom = "";
      document.documentElement.style.removeProperty("--desktop-scale");
      document.documentElement.style.removeProperty("--vh");
      document.documentElement.removeAttribute("data-zoom-compensated");
    };
  }, [applyScale]);
}
