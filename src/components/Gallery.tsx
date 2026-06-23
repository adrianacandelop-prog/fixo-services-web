"use client";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const categories = ["Todos", "Limpieza", "Mantenimiento", "Seguridad", "Transporte", "Airbnb"];

const images = [
  {
    src: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&q=80",
    alt: "Limpieza profesional apartamento",
    cat: "Limpieza",
    label: "Limpieza Profunda",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Pintura mantenimiento locativo",
    cat: "Mantenimiento",
    label: "Pintura y Acabados",
  },
  {
    src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
    alt: "Cámara de seguridad CCTV",
    cat: "Seguridad",
    label: "Sistema CCTV",
  },
  {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
    alt: "Transporte ejecutivo Cali",
    cat: "Transporte",
    label: "Transporte Ejecutivo",
  },
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    alt: "Apartamento Airbnb listo",
    cat: "Airbnb",
    label: "Airbnb Ready",
  },
  {
    src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    alt: "Limpieza de cocina profesional",
    cat: "Limpieza",
    label: "Limpieza de Cocina",
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
    alt: "Instalación drywall",
    cat: "Mantenimiento",
    label: "Drywall y Remodelación",
  },
  {
    src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
    alt: "Cerradura digital inteligente",
    cat: "Seguridad",
    label: "Cerradura Inteligente",
  },
  {
    src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    alt: "Van traslado aeropuerto",
    cat: "Transporte",
    label: "Traslado Aeropuerto",
  },
  {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    alt: "Habitación Airbnb impecable",
    cat: "Airbnb",
    label: "Habitación 5 Estrellas",
  },
  {
    src: "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=600&q=80",
    alt: "Limpieza de vidrios",
    cat: "Limpieza",
    label: "Limpieza de Ventanas",
  },
  {
    src: "https://images.unsplash.com/photo-1560185127-6a8dfbbae339?w=600&q=80",
    alt: "Sala de estar Airbnb",
    cat: "Airbnb",
    label: "Sala Check-In Listo",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("Todos");
  const [lightbox, setLightbox] = useState<null | (typeof images)[0]>(null);

  const filtered =
    active === "Todos" ? images : images.filter((i) => i.cat === active);

  return (
    <section id="galeria" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
            Galería
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Nuestro <span className="gradient-gold">trabajo habla</span> por
            nosotros
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Resultados reales en propiedades reales de Cali.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-[#c9a84c] text-black"
                  : "glass text-gray-400 hover:text-white hover:border-[#c9a84c]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img) => (
            <div
              key={img.src}
              className="group relative rounded-xl overflow-hidden cursor-pointer aspect-square"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xs font-semibold">
                      {img.label}
                    </span>
                    <ZoomIn size={16} className="text-[#c9a84c]" />
                  </div>
                </div>
              </div>
              {/* Category badge */}
              <div className="absolute top-2 left-2 bg-black/70 text-[#c9a84c] text-[10px] font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {img.cat}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 glass rounded-full"
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightbox.src.replace("w=600", "w=1200")}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-center text-gray-300 mt-4 font-medium">
                {lightbox.label}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
