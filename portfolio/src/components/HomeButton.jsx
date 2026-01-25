import "./HomeButton.css";

export default function HomeButton() {
  return (
    <button
      className="home-nav-btn"
      onClick={() =>
        document
          .getElementById("home")
          .scrollIntoView({ behavior: "smooth" })
      }
    >
      ⬅ Home
    </button>
  );
}
