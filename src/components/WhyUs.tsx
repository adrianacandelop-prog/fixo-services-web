"use client";
import {
  Users,
  Zap,
  Shield,
  MapPin,
  FileText,
  MessageCircle,
  Layers,
  Award,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Personal Capacitado",
    desc: "Equipo certificado, uniformado y con experiencia verificada en cada servicio.",
    color: "#3b82f6",
  },
  {
    icon: Zap,
    title: "Atención Rápida",
    desc: "Respondemos en menos de 2 horas. Sabemos que tu tiempo y el de tus huéspedes es valioso.",
    color: "#f59e0b",
  },
  {
    icon: Shield,
    title: "Servicio Confiable",
    desc: "Contamos con personal de confianza, seguros y procesos auditables en cada visita.",
    color: "#8b5cf6",
  },
  {
    icon: MapPin,
    title: "Cobertura en Cali",
    desc: "Atendemos toda la ciudad y el Valle del Cauca, incluyendo aeropuerto y municipios cercanos.",
    color: "#10b981",
  },
  {
    icon: FileText,
    title: "Reportes Digitales",
    desc: "Recibes reportes fotográficos después de cada servicio con evidencia completa.",
    color: "#c9a84c",
  },
  {
    icon: MessageCircle,
    title: "Atención WhatsApp",
    desc: "Canal directo para coordinar, consultar o reportar novedades en tiempo real.",
    color: "#25D366",
  },
  {
    icon: Layers,
    title: "Soluciones Integrales",
    desc: "Un solo proveedor para limpieza, mantenimiento, seguridad y transporte.",
    color: "#ef4444",
  },
  {
    icon: Award,
    title: "Experiencia Premium",
    desc: "Más de 500 propiedades atendidas con 98% de satisfacción comprobada.",
    color: "#c9a84c",
  },
];

export default function WhyUs() {
  return (
    <section
      id="nosotros"
      className="py-24 bg-[#0d0d0d] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
            Por Qué Elegirnos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            La diferencia que{" "}
            <span className="gradient-gold">marca FIXO</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Construimos relaciones de confianza a largo plazo con resultados
            que hablan por sí solos.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="card-dark rounded-2xl p-6 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-200"
                style={{
                  backgroundColor: `${r.color}15`,
                  border: `1px solid ${r.color}30`,
                }}
              >
                <r.icon size={22} style={{ color: r.color }} />
              </div>
              <h3 className="font-bold text-white mb-2">{r.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#c9a84c]/20 to-[#c9a84c]/5" />
          <div className="relative glass p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              ¿Listo para transformar tu propiedad?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Solicita una cotización gratuita hoy y descubre por qué somos la
              empresa de servicios más confiable de Cali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-black font-bold px-8 py-3.5 rounded-full hover:bg-[#e8c97a] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20"
              >
                Cotización Gratis
              </a>
              <a
                href="https://wa.me/573019251001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                +57 301 925 1001
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
