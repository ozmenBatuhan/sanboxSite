export default function Hero() {
  return (
    <section id="hero" className="relative h-[calc(100vh-80px)] mt-[80px] flex items-center justify-center overflow-hidden">
      <img 
        src="/images/antalya-hero.jpg" 
        alt="Antalya" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />
      <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Gölge katmanı */}
      
      <div className="hero-text relative z-20 text-center text-white p-8 max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-tight mb-4 leading-tight drop-shadow-lg">
          Bienvenue à Antalya
        </h1>
        <p className="text-xl md:text-2xl font-light leading-relaxed drop-shadow-md">
          Découvrez la perle de la Méditerranée : soleil, histoire et mer cristalline.
        </p>
        <button 
          className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-full shadow-lg 
                     hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" })}
        >
          Explorer Maintenant
        </button>
      </div>
    </section>
  );
}