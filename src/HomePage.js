import React from "react";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 bg-white shadow-md fixed top-0 w-full z-50">
        <img src="/logo.png" alt="Nijs Solutions Group Logo" className="h-12" />
        <nav className="space-x-6 hidden md:flex">
          <a href="#diensten" className="text-gray-700 hover:text-green-600 font-medium transition">Diensten</a>
          <a href="#overons" className="text-gray-700 hover:text-green-600 font-medium transition">Over ons</a>
          <a href="#projecten" className="text-gray-700 hover:text-green-600 font-medium transition">Projecten</a>
          <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition">Contact</a>
        </nav>
      </header>

      {/* Hero met animatie */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/hero-smart-living.jpg')" }}>
        <div className="bg-black bg-opacity-60 backdrop-blur-sm text-white p-10 rounded-xl text-center max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Slimme automatisering, zonder grenzen.</h1>
          <p className="text-2xl mb-8">Ontdek hoe Nijs Solutions gebouwen tot leven brengt met Loxone technologie.</p>
          <a href="#contact" className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full transition">Gratis kennismaking</a>
        </div>
      </section>

      {/* Golvende overgang */}
      <div className="bg-white -mt-1">
        <svg viewBox="0 0 1440 100" className="block w-full" preserveAspectRatio="none">
          <path fill="#f9fafb" d="M0,96L1440,0L1440,320L0,320Z" />
        </svg>
      </div>

      {/* Diensten */}
      <section id="diensten" className="py-24 px-6 md:px-24 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Onze oplossingen</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white p-8 text-center rounded-2xl shadow hover:shadow-xl transition group">
            <img src="/icons/building.svg" alt="Automatisering" className="h-14 mx-auto mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-2">Gebouwautomatisering</h3>
            <p>Verlichting, HVAC, beveiliging — alles slim gekoppeld.</p>
          </div>
          <div className="bg-white p-8 text-center rounded-2xl shadow hover:shadow-xl transition group">
            <img src="/icons/energy.svg" alt="Energy" className="h-14 mx-auto mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-2">Energy Management</h3>
            <p>Realtime verbruik en optimalisatie voor duurzaamheid.</p>
          </div>
          <div className="bg-white p-8 text-center rounded-2xl shadow hover:shadow-xl transition group">
            <img src="/icons/service.svg" alt="Onderhoud" className="h-14 mx-auto mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-2">Onderhoud & Service</h3>
            <p>Snelle ondersteuning en continue opvolging.</p>
          </div>
        </div>
      </section>

      {/* Projecten */}
      <section id="projecten" className="bg-white py-24 px-6 md:px-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Recente realisaties</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="/project1.jpg" alt="Project 1" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Villa met volledige automatisering</h3>
              <p className="text-gray-600">Een smart home van A tot Z: verlichting, audio, beveiliging en energiebeheer.</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="/project2.jpg" alt="Project 2" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Kantoor met energiedashboard</h3>
              <p className="text-gray-600">Efficiënt energiebeheer en slimme toegangscontrole via Loxone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-24 px-6 md:px-24 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Wat onze klanten zeggen</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <blockquote className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-lg italic mb-4">“Dankzij Nijs Solutions is ons gebouw future-proof. Alles werkt perfect samen.”</p>
            <cite className="text-sm text-gray-500">— Bouwheer uit Brugge</cite>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-lg italic mb-4">“We besparen nu tot 30% op ons energieverbruik. Support is ook top!”</p>
            <cite className="text-sm text-gray-500">— Kantoor in Antwerpen</cite>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 md:px-24 bg-green-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Klaar om te automatiseren?</h2>
        <p className="mb-6 text-lg">Vraag vrijblijvend een offerte aan of plan een gesprek in.</p>
        <a href="mailto:info@nijs.tech" className="bg-white text-green-600 font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition">
          Contacteer ons
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8 px-4 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Nijs Solutions Group</p>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Privacybeleid</a>
            <a href="mailto:info@nijs.tech" className="hover:underline">info@nijs.tech</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
