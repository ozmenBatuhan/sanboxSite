export default function About() {
  return (
    <section id="about" className="about p-12 md:p-24 bg-gradient-to-br from-white to-blue-50">
      <h2 className="text-4xl font-serif text-center text-gray-800 mb-16 relative">
        Qui est Antalya ?
        <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-400"></span>
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 text-gray-700">
          <p className="text-xl font-light leading-relaxed mb-6">
            Située sur la côte sud de la Turquie, Antalya est célèbre pour ses
            plages dorées, ses couchers de soleil à couper le souffle et son riche
            patrimoine historique. C'est une destination où la nature rencontre l'histoire
            dans une harmonie parfaite.
          </p>
          <p className="text-xl font-light leading-relaxed">
            Promenez-vous dans les ruelles pavées et fleuries de Kaleiçi,
            le cœur historique de la ville, dégustez la cuisine locale raffinée et
            laissez-vous enchanter par l'atmosphère méditerranéenne intemporelle
            qui émane de chaque coin de rue. Une expérience inoubliable vous attend.
          </p>
        </div>
        <div className="lg:w-1/2 relative">
          <img 
            src="/images/oldtown.jpg" // Kaleiçi görseli için uygun
            alt="Détail de Kaleiçi" 
            className="w-full h-auto object-cover rounded-lg shadow-2xl transform hover:scale-105 transition duration-500"
          />
          <p className="absolute -bottom-8 left-0 text-sm italic text-gray-500">
            Kaleiçi, le quartier historique d'Antalya.
          </p>
        </div>
      </div>
    </section>
  );
}