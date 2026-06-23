"use client";
import Link from "next/link";
import { Sparkles, Wrench, ShieldCheck, Car, Home, ArrowRight } from "lucide-react";

const services = [
  {
    id: "clean",
    icon: Sparkles,
    accent: "#3b82f6",
    name: "FIXO CLEAN",
    tagline: "Limpieza profesional para Airbnb, hogares y oficinas.",
    items: ["Turnover Airbnb", "Limpieza profunda", "Post obra", "Cocinas y neveras", "Oficinas"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=85",
    cta: "Solicitar limpieza",
  },
  {
    id: "maintenance",
    icon: Wrench,
    accent: "#f59e0b",
    name: "FIXO MAINTENANCE",
    tagline: "Mantenimiento preventivo y correctivo con garantía.",
    items: ["Pintura y resanes", "Drywall", "Plomería básica", "Electricidad", "Remodelaciones"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85",
    cta: "Solicitar mantenimiento",
  },
  {
    id: "security",
    icon: ShieldCheck,
    accent: "#8b5cf6",
    name: "FIXO SECURITY",
    tagline: "Seguridad inteligente: cámaras, domótica y acceso.",
    items: ["CCTV y videovigilancia", "Cerraduras digitales", "Control de acceso", "Domótica Airbnb", "Monitoreo remoto"],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=85",
    cta: "Proteger mi propiedad",
  },
  {
    id: "tour",
    icon: Car,
    accent: "#10b981",
    name: "FIXO TOUR",
    tagline: "Transporte ejecutivo y traslados para huéspedes.",
    items: ["Traslados aeropuerto", "Transporte corporativo", "City Tours Cali", "Conductor privado", "Eventos"],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=700&q=85",
    cta: "Reservar transporte",
  },
  {
    id: "host",
    icon: Home,
    accent: "#2563eb",
    name: "FIXO HOST",
    tagline: "Gestión integral 360° para anfitriones Airbnb.",
    items: ["Check-In y Check-Out", "Recepción huéspedes", "Supervisión inmueble", "Inventarios", "Reportes fotográficos"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=85",
    cta: "Gestionar mi Airbnb",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#060912] relative">
      {/* Top fade from trust bar */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0d1424] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#2563eb] text-xs font-bold tracking-[0.25em] uppercase bg-[#2563eb]/10 border border-[#2563eb]/20 px-4 py-2 rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 mb-4 leading-tight">
            Cinco divisiones.{" "}
            <span className="gradient-blue">Una sola llamada.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones profesionales para propietarios, anfitriones Airbnb, empresas y turistas en Cali.
          </p>
          <div className="section-divider mt-10 max-w-xs mx-auto" />
        </div>

        {/* Grid — first 3 */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((svc) => (
            <ServiceCard key={svc.id} {...svc} />
          ))}
        </div>
        {/* Last 2 centered */}
        <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {services.slice(3).map((svc) => (
            <ServiceCard key={svc.id} {...svc} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-sm mb-5">¿Necesitas más de un servicio? Tenemos paquetes especiales.</p>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#2563eb] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#1d4ed8] transition-all duration-200 shadow-xl shadow-[#2563eb]/25 hover:-translate-y-0.5"
          >
            Ver paquetes y precios
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, accent, name, tagline, items, image, cta }: (typeof services)[0]) {
  return (
    <div className="card-fixo rounded-2xl overflow-hidden group">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/30 to-transparent" />
        {/* Icon badge */}
        <div
          className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm"
          style={{ backgroundColor: `${accent}20`, border: `1px solid ${accent}40` }}
        >
          <Icon size={18} style={{ color: accent }} />
        </div>
        {/* Name overlay */}
        <div className="absolute bottom-3 left-4">
          <span className="font-black text-white text-sm tracking-wide">{name}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{tagline}</p>
        <ul className="space-y-2 mb-5">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: accent }}
              />
              {item}
            </li>
          ))}
        </ul>
        <div className="pt-4 border-t border-[#1e2d47]">
          <a
            href="#contacto"
            className="flex items-center gap-1.5 text-sm font-bold group/link"
            style={{ color: accent }}
          >
            {cta}
            <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
