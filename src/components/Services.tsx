"use client";
import Link from "next/link";
import {
  Sparkles,
  Wrench,
  ShieldCheck,
  Car,
  Home,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "clean",
    icon: Sparkles,
    color: "#3b82f6",
    name: "FIXO CLEAN",
    tagline: "Limpieza profesional para hogares, oficinas y Airbnb.",
    items: [
      "Limpieza de apartamentos",
      "Turnover Airbnb",
      "Limpieza post obra",
      "Limpieza profunda",
      "Oficinas y cocinas",
    ],
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&q=80",
  },
  {
    id: "maintenance",
    icon: Wrench,
    color: "#f59e0b",
    name: "FIXO MAINTENANCE",
    tagline: "Soluciones rápidas de mantenimiento y reparación.",
    items: [
      "Pintura y resanes",
      "Drywall y rodapiés",
      "Plomería básica",
      "Electricidad básica",
      "Remodelaciones menores",
    ],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
  },
  {
    id: "security",
    icon: ShieldCheck,
    color: "#8b5cf6",
    name: "FIXO SECURITY",
    tagline: "Cámaras, cerraduras inteligentes y control de acceso.",
    items: [
      "CCTV y videovigilancia",
      "Cerraduras inteligentes",
      "Control de acceso",
      "Domótica residencial",
      "Monitoreo de accesos",
    ],
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
  },
  {
    id: "tour",
    icon: Car,
    color: "#10b981",
    name: "FIXO TOUR",
    tagline: "Transporte ejecutivo y experiencias turísticas.",
    items: [
      "Traslados aeropuerto",
      "Transporte corporativo",
      "City Tours Cali",
      "Conductor privado",
      "Transporte para eventos",
    ],
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
  },
  {
    id: "host",
    icon: Home,
    color: "#c9a84c",
    name: "FIXO HOST",
    tagline: "Gestión integral para anfitriones Airbnb.",
    items: [
      "Check-In y Check-Out",
      "Recepción de huéspedes",
      "Supervisión del inmueble",
      "Inventarios y reportes",
      "Coordinación total",
    ],
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Soluciones <span className="gradient-gold">integrales</span> para tu
            propiedad
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cinco divisiones especializadas para cubrir cada necesidad de tu
            hogar, empresa o propiedad de Airbnb.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((svc) => (
            <ServiceCard key={svc.id} {...svc} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:px-24">
          {services.slice(3).map((svc) => (
            <ServiceCard key={svc.id} {...svc} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#c9a84c] text-black font-bold px-8 py-4 rounded-full hover:bg-[#e8c97a] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20"
          >
            Ver todos los servicios
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  color,
  name,
  tagline,
  items,
  image,
}: (typeof services)[0]) {
  return (
    <div className="card-dark rounded-2xl overflow-hidden group cursor-pointer">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div
          className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}20`, border: `1px solid ${color}40` }}
        >
          <Icon size={20} style={{ color }} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-1" style={{ color }}>
          {name}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{tagline}</p>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-4 border-t border-[#1f1f1f]">
          <a
            href="#contacto"
            className="flex items-center gap-1 text-sm font-semibold"
            style={{ color }}
          >
            Solicitar servicio
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
