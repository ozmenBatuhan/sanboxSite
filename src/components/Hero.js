export default function Hero() {
  return (
    <section className="hero">
      <img src="/images/antalya-hero.jpg" alt="Antalya" className="hero-img" />
      <div className="hero-text">
        <h1>Bienvenue à Antalya</h1>
        <p>Découvrez la perle de la Méditerranée : soleil, histoire et mer cristalline.</p>
        <button onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}>
          Explorer Maintenant
        </button>
      </div>
    </section>
  );
}