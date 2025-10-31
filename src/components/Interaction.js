import React, { useState } from "react";

export default function Interaction() {
  const [likes, setLikes] = useState(0);

  return (
    <section className="interaction">
      <h2>Ti piace Antalya?</h2>
      <p>
        Premi il cuore per mostrare il tuo amore per questa meravigliosa città!
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
