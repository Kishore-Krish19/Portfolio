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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 11L12 3L20 11" />
        <path d="M6 10V20H18V10" />
        <path d="M9 20V14H15V20" />
      </svg> Home
    </button>
  );
}
