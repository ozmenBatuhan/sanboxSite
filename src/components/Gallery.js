const images = [
  { src: "/images/oldtown.jpg", caption: "Kaleiçi – le vieux cœur" },
  { src: "/images/beach.jpg", caption: "Plages dorées de Konyaaltı" },
  { src: "/images/waterfall.jpg", caption: "Chutes de Düden" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Galerie de Photos</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className="gallery-item">
            <img src={img.src} alt={img.caption} />
            <p>{img.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}