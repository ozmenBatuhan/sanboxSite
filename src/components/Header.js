import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-sm shadow-sm py-4 px-8 flex justify-between items-center font-sans">
      <h2 className="text-2xl font-serif font-bold text-gray-800">
        <a href="#hero" className="hover:text-blue-600 transition duration-300">Expérience Antalya</a>
      </h2>
      <nav className="space-x-6">
        <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300 text-lg">À propos</a>
        <a href="#gallery" className="text-gray-600 hover:text-blue-600 transition duration-300 text-lg">Galerie</a>
        <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300 text-lg">Contact</a>
      </nav>
    </header>
  );
}