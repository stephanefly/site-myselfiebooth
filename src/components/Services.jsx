export default function Services() {
  const services = [
    { title: "Mariages", description: "Photobooths élégants pour célébrer vos unions." },
    { title: "Anniversaires", description: "Faites briller vos invités avec des souvenirs uniques." },
    { title: "Corporate", description: "Boostez vos événements d'entreprise avec nos services." },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
