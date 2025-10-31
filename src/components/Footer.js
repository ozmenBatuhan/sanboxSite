export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <p>© 2025 Antalya Esperienza — Tutti i diritti riservati</p>
      <p>
        Seguici su{" "}
        <button
          onClick={() => alert("Instagram coming soon!")}
          className="text-blue-500 underline cursor-pointer bg-transparent border-none"
        >
          Instagram
        </button>{" "}
        |{" "}
        <button
          onClick={() => alert("Facebook coming soon!")}
          className="text-blue-500 underline cursor-pointer bg-transparent border-none"
        >
          Facebook
        </button>
      </p>
    </footer>
  );
}
