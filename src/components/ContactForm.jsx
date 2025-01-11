export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Contactez-nous</h2>
        <form className="mt-8 space-y-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Nom"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
