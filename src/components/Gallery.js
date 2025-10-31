const images = [
  { src: "/images/oldtown.jpg", caption: "Kaleiçi – il cuore antico" },
  { src: "/images/beach.jpg", caption: "Spiagge dorate di Konyaaltı" },
  { src: "/images/waterfall.jpg", caption: "Cascate di Düden" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Galleria Fotografica</h2>
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
