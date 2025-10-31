export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <p>© 2025 Antalya Esperienza — Tutti i diritti riservati</p>
      <p>
        Seguici su{" "}
        <span
          role="button"
          tabIndex={0}
          onClick={() => alert("Instagram in arrivo!")}
          onKeyDown={(e) => e.key === "Enter" && alert("Instagram in arrivo!")}
          className="text-blue-500 underline cursor-pointer"
        >
          Instagram
        </span>{" "}
        |{" "}
        <span
          role="button"
          tabIndex={0}
          onClick={() => alert("Facebook in arrivo!")}
          onKeyDown={(e) => e.key === "Enter" && alert("Facebook in arrivo!")}
          className="text-blue-500 underline cursor-pointer"
        >
          Facebook
        </span>
      </p>
    </footer>
  );
}
