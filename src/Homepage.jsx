import React from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Building2, Zap, Puzzle } from "lucide-react";

export default function Homepage() {
  return (
    <div className="bg-[#0e141e] text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold">
          <img src="/nijs-logo-cropped.png" alt="Nijs Logo" className="h-20" />
        </div>
        <nav className="space-x-6 text-sm text-white/80">
          <a href="#diensten">Diensten</a>
          <a href="#over">Over ons</a>
          <a href="#projecten">Projecten</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center px-4" style={{ backgroundImage: "url('/hero-nijs.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Slimme oplossingen<br />voor slimme gebouwen</h1>
          <a href="#contact">
            <Button className="mt-4 bg-[#5fd68b] hover:bg-[#4cc27a] text-black text-lg px-6 py-3 rounded-xl">Neem contact op</Button>
          </a>
        </div>
      </section>

      {/* Diensten */}
      <section id="diensten" className="bg-white text-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">Onze diensten</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow text-center border">
            <div className="flex justify-center mb-4"><Building2 className="w-10 h-10 text-[#0e141e]" /></div>
            <h3 className="font-semibold text-lg mb-2">Gebouwautomatisering</h3>
            <p className="text-sm text-gray-600">Verlichting, zonwering, klimaatcontrole, aanwezigheidssensoren en meer.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow text-center border">
            <div className="flex justify-center mb-4"><Zap className="w-10 h-10 text-[#0e141e]" /></div>
            <h3 className="font-semibold text-lg mb-2">Energiebeheer</h3>
            <p className="text-sm text-gray-600">Slimme meters en optimalisatie van energieverbruik via monitoring en sturing.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow text-center border">
            <div className="flex justify-center mb-4"><Puzzle className="w-10 h-10 text-[#0e141e]" /></div>
            <h3 className="font-semibold text-lg mb-2">Loxone partner</h3>
            <p className="text-sm text-gray-600">Integraties en maatwerkoplossingen met Loxone-systemen.</p>
          </div>
        </div>
      </section>

      {/* Over ons */}
      <section id="over" className="bg-[#0e141e] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img src="/office-interior.jpg" alt="Kantoorinterieur" className="rounded-xl shadow" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Over ons</h2>
            <p className="text-white/80 text-lg">Van advies tot realisatie: wij bieden innovatieve oplossingen voor slimmer en duurzamer gebouwbeheer.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-black">Contact</h2>
          <p className="mb-6 text-gray-700">Neem gerust contact met ons op voor meer informatie of een adviesgesprek.</p>
          <form className="grid gap-4">
            <Input placeholder="Naam" className="bg-gray-100" />
            <Input type="email" placeholder="E-mailadres" className="bg-gray-100" />
            <Input placeholder="Bericht" className="bg-gray-100" />
            <Button className="bg-[#5fd68b] hover:bg-[#4cc27a] text-black rounded-xl">Verzenden</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
