import React, { useState } from "react";

export default function Interaction() {
  const [likes, setLikes] = useState(0);

  return (
    <section className="interaction py-16 px-8 bg-blue-50 text-center font-sans">
      <h2 className="text-3xl font-serif text-gray-800 mb-4">Aimez-vous Antalya ?</h2>
      <p className="text-lg text-gray-700 mb-6">
        Appuyez sur le cœur pour montrer votre amour pour cette ville merveilleuse !
      </p>
      <button
        className="like-btn flex items-center justify-center gap-2 px-6 py-3 rounded-full shadow-lg 
                   text-white text-xl font-bold transform transition duration-300 hover:scale-105"
        onClick={() => setLikes(likes + 1)}
        style={{
          backgroundColor: likes > 0 ? "#ef4444" : "#a8a8a8", // Kırmızı ve gri tonları
        }}
      >
        ❤️ <span className="text-2xl">{likes}</span>
      </button>
    </section>
  );
}