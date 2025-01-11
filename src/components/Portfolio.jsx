export default function Portfolio() {
  const images = [
    "/images/event1.jpg",
    "/images/event2.jpg",
    "/images/event3.jpg",
  ];

  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Nos Réalisations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Event ${index + 1}`}
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
