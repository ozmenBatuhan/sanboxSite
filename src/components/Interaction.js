import React, { useState } from "react";

export default function Interaction() {
  const [likes, setLikes] = useState(0);

  return (
    <section className="interaction">
      <h2>Aimez-vous Antalya ?</h2>
      <p>
        Appuyez sur le cœur pour montrer votre amour pour cette ville
        merveilleuse !
      </p>
      <button
        className="like-btn"
        onClick={() => setLikes(likes + 1)}
        style={{
          backgroundColor: likes > 0 ? "#ff6b81" : "#eee",
          transition: "0.3s",
        }}
      >
        ❤️ {likes}
      </button>
    </section>
  );
}