import { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const userPausedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.loop = true;

    // Sync UI state from real audio events
    const handlePlay  = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    audio.addEventListener("play",  handlePlay);
    audio.addEventListener("pause", handlePause);

    // Play on hovering over the home page
    const handleHomeHover = (e) => {
      const audioEl = audioRef.current;
      if (!audioEl || !audioEl.paused || userPausedRef.current) return;

      const homeEl = document.getElementById("home");
      if (homeEl && (e.target === homeEl || homeEl.contains(e.target))) {
        audioEl.muted = false;
        audioEl.play().catch((err) => {
          console.log("Play blocked on hover:", err);
        });
      }
    };

    document.addEventListener("mouseover", handleHomeHover);
    document.addEventListener("mousemove", handleHomeHover);

    return () => {
      audio.removeEventListener("play",  handlePlay);
      audio.removeEventListener("pause", handlePause);
      document.removeEventListener("mouseover", handleHomeHover);
      document.removeEventListener("mousemove", handleHomeHover);
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      userPausedRef.current = false;
      audio.muted = false;
      audio.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      audio.pause();
    }
  };

  return (
    <>
      {/* No autoPlay or muted props — controlled entirely via JS ref to avoid React's muted bug */}
      <audio
        ref={audioRef}
        src="/interstellar-chase-2.mp3"
        preload="auto"
      />

      <button
        id="music-player-btn"
        className={`music-player-btn ${isPlaying ? "playing" : "paused"}`}
        onClick={togglePlay}
        title={isPlaying ? "Pause music" : "Play music"}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        <span className="music-ring music-ring-1" />
        <span className="music-ring music-ring-2" />

        <span className="music-icon">
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </span>

        <span className="music-bars">
          <span className="bar bar-1" />
          <span className="bar bar-2" />
          <span className="bar bar-3" />
          <span className="bar bar-4" />
        </span>

        <span className="music-tooltip">
          {isPlaying ? "Pause Music" : "Play Music"}
        </span>
      </button>
    </>
  );
}
