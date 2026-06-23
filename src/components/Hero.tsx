"use client";
import Link from "next/link";
import { ArrowRight, MessageCircle, Star, Play } from "lucide-react";

const stats = [
  { value: "500+", label: "Propiedades atendidas" },
  { value: "4.97★", label: "Calificación promedio" },
  { value: "2h", label: "Tiempo de respuesta" },
  { value: "24/7", label: "Soporte disponible" },
];

const services = [
  { label: "Limpieza Airbnb", color: "#3b82f6" },
  { label: "Mantenimiento", color: "#2563eb" },
  { label: "Seguridad", color: "#1d4ed8" },
  { label: "Transporte Ejecutivo", color: "#60a5fa" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background: Team photo as hero */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=85')",
          }}
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060912]/96 via-[#060912]/80 to-[#060912]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060912] via-transparent to-[#060912]/60" />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      {/* Blue accent orbs */}
      <div className="absolute top-20 right-[5%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-[10%] w-[300px] h-[300px] rounded-full bg-[#1d4ed8]/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border-[#2563eb]/20">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-[#2563eb] fill-[#2563eb]" />
              ))}
            </div>
            <span className="text-sm text-gray-300 font-medium">
              Empresa #1 en servicios para Airbnb · Cali, Colombia
            </span>
          </div>

          {/* Service tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {services.map((s) => (
              <span
                key={s.label}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                style={{
                  color: s.color,
                  borderColor: `${s.color}30`,
                  backgroundColor: `${s.color}10`,
                }}
              >
                {s.label}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight mb-6">
            Todo lo que tu{" "}
            <span className="gradient-blue">propiedad</span>
            <br />
            necesita en un{" "}
            <span className="gradient-blue">solo lugar.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            Limpieza profesional, mantenimiento, seguridad inteligente y transporte ejecutivo en{" "}
            <strong className="text-white font-bold">Cali, Valle del Cauca.</strong>{" "}
            Respuesta en menos de 2 horas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#2563eb] text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-[#1d4ed8] transition-all duration-200 shadow-2xl shadow-[#2563eb]/30 hover:shadow-[#2563eb]/50 hover:-translate-y-0.5"
            >
              Solicitar Cotización Gratis
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/573019251001?text=Hola%2C%20me%20interesa%20conocer%20los%20servicios%20de%20FIXO%20para%20mi%20Airbnb."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] font-bold px-8 py-4 rounded-2xl text-base hover:bg-[#25D366]/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Hablar por WhatsApp
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-4 text-center border-[#2563eb]/10"
              >
                <div className="text-xl sm:text-2xl font-black gradient-blue stat-glow">
                  {s.value}
                </div>
                <div className="text-[11px] text-gray-500 mt-1 font-medium leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating service card — right side desktop */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="card-fixo rounded-3xl p-6 w-72 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#2563eb]/15 border border-[#2563eb]/30 flex items-center justify-center">
              <Star size={18} className="text-[#2563eb]" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Superhost Partner</div>
              <div className="text-gray-500 text-xs">Certificado Airbnb</div>
            </div>
          </div>
          <div className="space-y-2.5">
            {[
              { label: "Limpieza entre reservas", done: true },
              { label: "Check-In / Check-Out", done: true },
              { label: "Reportes fotográficos", done: true },
              { label: "Atención 24/7", done: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/40 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-300 text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-[#1e2d47]">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-xs">Calificación conseguida</span>
              <span className="font-black gradient-blue text-sm">4.97★</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-10 bg-gradient-to-b from-[#2563eb] to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-bounce" />
      </div>
    </section>
  );
}
