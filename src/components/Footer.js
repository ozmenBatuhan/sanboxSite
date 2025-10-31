export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <p>© 2025 Expérience Antalya — Tous droits réservés</p>
      <p>
        Suivez-nous sur{" "}
        <span
          role="button"
          tabIndex={0}
          onClick={() => alert("Instagram à venir !")}
          onKeyDown={(e) => e.key === "Enter" && alert("Instagram à venir !")}
          className="text-blue-500 underline cursor-pointer"
        >
          Instagram
        </span>{" "}
        |{" "}
        <span
          role="button"
          tabIndex={0}
          onClick={() => alert("Facebook à venir !")}
          onKeyDown={(e) => e.key === "Enter" && alert("Facebook à venir !")}
          className="text-blue-500 underline cursor-pointer"
        >
          Facebook
        </span>
      </p>
    </footer>
  );
}