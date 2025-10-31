import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-white/80 backdrop-blur-sm border-t border-gray-100 shadow-sm py-8 px-8 text-center font-sans"
    >
      {/* Marka adı — Header'daki font ve ton ile uyumlu */}
      <h3 className="text-2xl font-serif text-gray-800 mb-6">
        Expérience Antalya
      </h3>

      {/* Navigasyon bağlantıları — Header ile aynı hover efekti */}
      <nav className="flex justify-center space-x-6 mb-6 text-lg">
        <a
          href="#about"
          className="text-gray-600 hover:text-blue-600 transition duration-300"
        >
          À propos
        </a>
        <a
          href="#gallery"
          className="text-gray-600 hover:text-blue-600 transition duration-300"
        >
          Galerie
        </a>
        <a
          href="#contact"
          className="text-gray-600 hover:text-blue-600 transition duration-300"
        >
          Contact
        </a>
      </nav>

      {/* Alt telif hakkı satırı */}
      <div className="pt-6 mt-6 border-t border-gray-100">
        <p className="text-sm text-gray-500 mb-1">
          © {year} Expérience Antalya — Tous droits réservés
        </p>
        <p className="text-xs text-gray-400">Un projet conçu pour vous.</p>
      </div>
    </footer>
  );
}
