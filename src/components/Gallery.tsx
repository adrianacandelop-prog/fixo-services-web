"use client";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const categories = ["Todos", "Limpieza", "Mantenimiento", "Seguridad", "Transporte", "Airbnb"];

const images = [
  { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=85", cat: "Limpieza", label: "Limpieza Profunda Apartamento" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85", cat: "Mantenimiento", label: "Pintura Interior Premium" },
  { src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=700&q=85", cat: "Seguridad", label: "Sistema CCTV Instalado" },
  { src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=700&q=85", cat: "Transporte", label: "Traslado Ejecutivo Aeropuerto" },
  { src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&q=85", cat: "Airbnb", label: "Airbnb 5 Estrellas Listo" },
  { src: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=700&q=85", cat: "Limpieza", label: "Cocina Impecable" },
  { src: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=700&q=85", cat: "Mantenimiento", label: "Remodelación y Drywall" },
  { src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=700&q=85", cat: "Seguridad", label: "Cerradura Digital Airbnb" },
  { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=700&q=85", cat: "Transporte", label: "Van Ejecutiva Cali" },
  { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=85", cat: "Airbnb", label: "Habitación 5 Estrellas" },
  { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=85", cat: "Limpieza", label: "Limpieza Post Obra" },
  { src: "https://images.unsplash.com/photo-1560185127-6a8dfbbae339?w=700&q=85", cat: "Airbnb", label: "Sala Check-In Ready" },
];

const accentByCategory: Record<string, string> = {
  Limpieza: "#3b82f6",
  Mantenimiento: "#f59e0b",
  Seguridad: "#8b5cf6",
  Transporte: "#10b981",
  Airbnb: "#2563eb",
};

export default function Gallery() {
  const [active, setActive] = useState("Todos");
  const [lightbox, setLightbox] = useState<null | (typeof images)[0]>(null);

  const filtered = active === "Todos" ? images : images.filter((i) => i.cat === active);

  return (
    <section id="galeria" className="py-24 bg-[#0d1424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#2563eb] text-xs font-bold tracking-[0.25em] uppercase bg-[#2563eb]/10 border border-[#2563eb]/20 px-4 py-2 rounded-full mb-4">
            Galería de Trabajos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 mb-4 leading-tight">
            Nuestro trabajo{" "}
            <span className="gradient-blue">habla por sí solo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Resultados reales en propiedades reales de Cali, Valle del Cauca.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/25"
                  : "glass text-gray-400 hover:text-white border-[#1e2d47] hover:border-[#2563eb]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img, i) => (
            <div
              key={img.src + i}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#1e2d47] hover:border-[#2563eb]/40 transition-all duration-300 ${
                i % 5 === 0 ? "aspect-[4/5]" : "aspect-square"
              }`}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300" />
              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={24} className="text-white mb-2" />
                <span className="text-white text-xs font-bold text-center px-3">{img.label}</span>
              </div>
              {/* Category pill */}
              <div
                className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundColor: `${accentByCategory[img.cat]}20`,
                  color: accentByCategory[img.cat],
                  border: `1px solid ${accentByCategory[img.cat]}40`,
                }}
              >
                {img.cat}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-[100] bg-black/97 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 glass rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={18} />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightbox.src.replace("w=700", "w=1400")}
                alt={lightbox.label}
                className="w-full max-h-[80vh] object-contain rounded-2xl border border-[#1e2d47]"
              />
              <p className="text-center text-gray-400 mt-4 font-semibold text-sm">
                {lightbox.label}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
