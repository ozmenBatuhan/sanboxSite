export default function Hero() {
  return (
    <section className="hero">
      <img src="/images/antalya-hero.jpg" alt="Antalya" className="hero-img" />
      <div className="hero-text">
        <h1>Benvenuti ad Antalya</h1>
        <p>Scopri la perla del Mediterraneo: sole, storia e mare cristallino.</p>
        <button onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}>
          Esplora Ora
        </button>
      </div>
    </section>
  );
}
