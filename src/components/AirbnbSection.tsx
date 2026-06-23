"use client";
import { CheckCircle2, MessageCircle, ArrowRight, TrendingUp, Star, Clock, Camera } from "lucide-react";

const benefits = [
  "Limpieza entre reservas con protocolo Airbnb",
  "Check-In y Check-Out profesional presencial",
  "Recepción personalizada de huéspedes",
  "Reportes fotográficos con evidencia completa",
  "Supervisión y control del inmueble",
  "Coordinación de mantenimiento urgente",
  "Inventarios antes y después de cada huésped",
  "Respuesta a novedades en menos de 2 horas",
];

const metrics = [
  { icon: Star, value: "4.97★", label: "Rating logrado", color: "#2563eb" },
  { icon: TrendingUp, value: "+35%", label: "Más reservas", color: "#10b981" },
  { icon: Clock, value: "2h", label: "Tiempo de respuesta", color: "#f59e0b" },
  { icon: Camera, value: "100%", label: "Reportes con fotos", color: "#8b5cf6" },
];

export default function AirbnbSection() {
  return (
    <section id="airbnb" className="py-24 bg-[#0d1424] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1d4ed8]/5 blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#2563eb] text-xs font-bold tracking-[0.25em] uppercase bg-[#2563eb]/10 border border-[#2563eb]/20 px-4 py-2 rounded-full mb-4">
            Especialistas Airbnb
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 mb-4 leading-tight">
            Tu aliado estratégico{" "}
            <span className="gradient-blue">para Airbnb</span> en Cali.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nos encargamos de todo para que tus huéspedes tengan una experiencia de 5 estrellas y
            tú maximices tus ingresos sin preocupaciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: images + metrics */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#2563eb]/10 border border-[#1e2d47]">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=85"
                alt="Apartamento Airbnb Cali gestionado por FIXO"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424]/80 to-transparent" />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-dark rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                    <Star size={20} className="text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-white font-black text-lg leading-none">4.97 / 5.0</div>
                    <div className="text-gray-400 text-xs mt-1">Calificación promedio de propiedades gestionadas</div>
                  </div>
                  <div className="ml-auto flex flex-col gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card — smart lock */}
            <div className="absolute -right-4 top-8 glass-dark rounded-2xl p-4 w-52 shadow-2xl border-[#2563eb]/20 hidden sm:block">
              <div className="text-[#25D366] text-xs font-bold mb-1">✓ Check-in completado</div>
              <div className="text-gray-400 text-[11px]">Huésped recibido · 14:30</div>
              <div className="text-gray-400 text-[11px] mt-1">Apartamento 1003 · Listo</div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              {metrics.map(({ icon: Icon, value, label, color }) => (
                <div key={label} className="card-fixo rounded-2xl p-4 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={17} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-black text-white text-base leading-none">{value}</div>
                    <div className="text-gray-500 text-[11px] mt-1">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: benefits */}
          <div>
            {/* FIXO HOST badge */}
            <div className="inline-flex items-center gap-2 bg-[#2563eb]/10 border border-[#2563eb]/25 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
              <span className="text-[#2563eb] text-xs font-bold tracking-wider uppercase">
                FIXO HOST — Gestión Integral Airbnb
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
              Conviértete en{" "}
              <span className="gradient-blue">Superhost</span>{" "}
              sin mover un dedo.
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Desde la limpieza entre reservas hasta la recepción de huéspedes y los reportes
              fotográficos. Nuestro equipo es tu extensión en Cali.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-10">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-[#2563eb]/15 border border-[#2563eb]/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#2563eb]/25 transition-colors">
                    <CheckCircle2 size={11} className="text-[#2563eb]" />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{b}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="glass rounded-2xl p-4 mb-8 border-[#2563eb]/15">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["MF", "RP", "JW", "CV"].map((init) => (
                    <div
                      key={init}
                      className="w-8 h-8 rounded-full bg-[#2563eb] flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#0d1424]"
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">+200 anfitriones satisfechos</div>
                  <div className="text-gray-500 text-xs">Nos recomiendan en Cali y el Valle</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2563eb] text-white font-bold px-6 py-4 rounded-2xl hover:bg-[#1d4ed8] transition-all shadow-xl shadow-[#2563eb]/25 hover:-translate-y-0.5"
              >
                Gestionar mi Airbnb
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/573019251001?text=Hola%2C%20soy%20anfitrión%20de%20Airbnb%20en%20Cali%20y%20me%20interesa%20FIXO%20HOST."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] font-bold px-6 py-4 rounded-2xl hover:bg-[#25D366]/20 transition-all"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
