"use client";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

const benefits = [
  "Limpieza entre reservas con estándares Airbnb",
  "Check-In y Check-Out profesional",
  "Atención personalizada a huéspedes",
  "Reportes fotográficos detallados",
  "Supervisión continua de propiedades",
  "Mantenimiento preventivo programado",
  "Soluciones rápidas 24/7",
  "Coordinación de cerraduras inteligentes",
];

const metrics = [
  { value: "4.95★", label: "Calificación promedio lograda" },
  { value: "-40%", label: "Reducción de quejas" },
  { value: "+30%", label: "Más reservas con mejor rating" },
  { value: "24h", label: "Tiempo de respuesta" },
];

export default function AirbnbSection() {
  return (
    <section
      id="airbnb"
      className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d] relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#c9a84c]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#c9a84c]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image + metrics */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#c9a84c]/10">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
                alt="Apartamento Airbnb Cali"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Floating card - top left */}
            <div className="absolute -top-4 -left-4 glass rounded-2xl p-4 shadow-xl">
              <div className="text-2xl font-bold gradient-gold">4.95★</div>
              <div className="text-xs text-gray-400">Superhost Rating</div>
            </div>

            {/* Floating card - bottom right */}
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 shadow-xl max-w-[180px]">
              <div className="text-[#25D366] text-sm font-semibold mb-1">
                ✓ Check-in completado
              </div>
              <div className="text-xs text-gray-400">
                Huésped recibido · 14:30
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {metrics.map((m) => (
                <div key={m.label} className="glass rounded-xl p-4 text-center">
                  <div className="text-xl font-bold gradient-gold">{m.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: content */}
          <div>
            <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
              Para Anfitriones
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
              Tu aliado estratégico{" "}
              <span className="gradient-gold">para Airbnb</span> en Cali.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Nos encargamos de todo para que tus huéspedes vivan una
              experiencia 5 estrellas y tú maximices tus ingresos sin
              preocuparte por los detalles.
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-10">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#c9a84c] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-300 text-sm">{b}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-black font-bold px-7 py-3.5 rounded-full hover:bg-[#e8c97a] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20"
              >
                Gestionar mi Airbnb
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/573019251001?text=Hola%2C%20soy%20anfitrión%20de%20Airbnb%20y%20me%20interesa%20FIXO%20HOST."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] font-semibold px-7 py-3.5 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-200"
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
