"use client";
import Link from "next/link";
import { ArrowRight, MessageCircle, Star, Shield, Zap } from "lucide-react";

const stats = [
  { value: "500+", label: "Propiedades atendidas" },
  { value: "98%", label: "Satisfacción" },
  { value: "24/7", label: "Disponibilidad" },
  { value: "5★", label: "Calificación" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80')",
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        {/* Gold accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-[#c9a84c]/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-[#c9a84c]/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Star size={14} className="text-[#c9a84c] fill-[#c9a84c]" />
            <span className="text-sm text-gray-300">
              #1 en Servicios para Airbnb en Cali
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Todo lo que tu{" "}
            <span className="gradient-gold">propiedad</span>
            <br />
            necesita en un{" "}
            <span className="relative">
              <span className="gradient-gold">solo lugar.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 8"
                fill="none"
              >
                <path
                  d="M0 4 Q150 0 300 4"
                  stroke="#c9a84c"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Limpieza profesional, mantenimiento, seguridad inteligente y
            transporte ejecutivo en{" "}
            <strong className="text-white">Cali, Valle del Cauca.</strong>
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: Shield, text: "Personal certificado" },
              { icon: Zap, text: "Respuesta inmediata" },
              { icon: Star, text: "Garantía de calidad" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <Icon size={14} className="text-[#c9a84c]" />
                {text}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-black font-bold px-8 py-4 rounded-full text-base hover:bg-[#e8c97a] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40"
            >
              Solicitar Cotización
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="https://wa.me/573019251001?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20FIXO%20SERVICES."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] font-semibold px-8 py-4 rounded-full text-base hover:bg-[#25D366] hover:text-white transition-all duration-200"
            >
              <MessageCircle size={18} />
              Hablar por WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold gradient-gold">{s.value}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c] to-transparent" />
      </div>
    </section>
  );
}
