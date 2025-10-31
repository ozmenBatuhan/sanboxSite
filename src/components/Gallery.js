const images = [
  { src: "/images/oldtown.jpg", caption: "Kaleiçi – Le charme d'antan" }, // Daha açıklayıcı
  { src: "/images/beach.jpg", caption: "Plages dorées de Konyaaltı" },
  { src: "/images/waterfall.jpg", caption: "Cascades de Düden – La nature en ville" }, // Daha açıklayıcı
  { src: "/images/antalya-hero.jpg", caption: "Vues imprenables sur la Méditerranée" }, // Hero görselini de ekleyebiliriz
  // İsterseniz daha fazla görsel ekleyebilirsiniz
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery p-12 md:p-24 bg-gray-100">
      <h2 className="text-4xl font-serif text-center text-gray-800 mb-16 relative">
        Galerie de Photos
        <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-400"></span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="gallery-item relative overflow-hidden rounded-lg shadow-xl group cursor-pointer 
                       transform transition duration-500 hover:scale-103 hover:shadow-2xl"
          >
            <img 
              src={img.src} 
              alt={img.caption} 
              className="w-full h-64 object-cover object-center transform transition duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-medium">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}