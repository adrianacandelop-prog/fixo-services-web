"use client";
import { Users, Zap, Shield, MapPin, FileImage, MessageCircle, Layers, Award } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Personal Certificado",
    desc: "Equipo uniformado, capacitado y verificado. Cada colaborador pasa por evaluación antes de ingresar.",
    accent: "#2563eb",
  },
  {
    icon: Zap,
    title: "Respuesta en 2 Horas",
    desc: "Sabemos que las propiedades Airbnb no esperan. Coordinamos con urgencia real.",
    accent: "#f59e0b",
  },
  {
    icon: Shield,
    title: "100% Confiable",
    desc: "Personal con referencias verificadas. Operamos con ética, responsabilidad y transparencia.",
    accent: "#8b5cf6",
  },
  {
    icon: MapPin,
    title: "Cobertura Total en Cali",
    desc: "Atendemos toda la ciudad, aeropuerto, Palmira, Jamundí y municipios del Valle del Cauca.",
    accent: "#10b981",
  },
  {
    icon: FileImage,
    title: "Reportes Fotográficos",
    desc: "Evidencia completa después de cada visita. Controla tu propiedad desde cualquier lugar.",
    accent: "#3b82f6",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp 24/7",
    desc: "Canal directo con nuestro equipo para coordinar, consultar y reportar en tiempo real.",
    accent: "#25D366",
  },
  {
    icon: Layers,
    title: "Un Solo Proveedor",
    desc: "Limpieza, mantenimiento, seguridad y transporte. Todo coordinado por FIXO SERVICES.",
    accent: "#2563eb",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    desc: "+500 propiedades. 4.97 promedio. 98% de clientes que nos recomiendan en Cali.",
    accent: "#2563eb",
  },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-24 bg-[#060912] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2563eb]/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#2563eb] text-xs font-bold tracking-[0.25em] uppercase bg-[#2563eb]/10 border border-[#2563eb]/20 px-4 py-2 rounded-full mb-4">
            Por Qué Elegirnos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 mb-4 leading-tight">
            La diferencia que{" "}
            <span className="gradient-blue">FIXO garantiza</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Construimos relaciones de largo plazo basadas en resultados, confianza y calidad premium.
          </p>
          <div className="section-divider mt-10 max-w-xs mx-auto" />
        </div>

        {/* Grid 8 items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="card-fixo rounded-2xl p-6 group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${r.accent}12`, border: `1px solid ${r.accent}25` }}
              >
                <r.icon size={21} style={{ color: r.accent }} />
              </div>
              <h3 className="font-bold text-white mb-2 text-sm">{r.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "500+", label: "Propiedades atendidas" },
            { value: "4.97★", label: "Calificación promedio" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "3+", label: "Años en el mercado" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 text-center border-[#2563eb]/10">
              <div className="text-3xl font-black gradient-blue stat-glow mb-2">{s.value}</div>
              <div className="text-gray-500 text-xs font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060912]/97 via-[#060912]/85 to-[#060912]/50" />
          <div className="relative p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                ¿Listo para transformar tu propiedad?
              </h3>
              <p className="text-gray-400">
                Cotización gratis · Sin compromiso · Respuesta en 2 horas
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-[#2563eb] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#1d4ed8] transition-all shadow-xl shadow-[#2563eb]/25 whitespace-nowrap"
              >
                Cotizar Gratis
              </a>
              <a
                href="https://wa.me/573019251001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#25D366]/40 text-[#25D366] font-bold px-7 py-3.5 rounded-xl hover:bg-[#25D366]/10 transition-all whitespace-nowrap"
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
