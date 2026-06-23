"use client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda López",
    role: "Anfitriona Airbnb · 12 propiedades",
    avatar: "MF",
    color: "#3b82f6",
    rating: 5,
    text: "FIXO SERVICES transformó por completo la gestión de mis apartamentos. Desde que los contraté, mis calificaciones en Airbnb subieron de 4.6 a 4.95. El equipo de FIXO HOST coordina todo el check-in y la limpieza entre reservas. ¡Ahora genero más ingresos sin estrés!",
    platform: "Airbnb",
  },
  {
    name: "Ricardo Montoya",
    role: "Director de Operaciones · Constructora Montoya",
    avatar: "RM",
    color: "#c9a84c",
    rating: 5,
    text: "Contratamos FIXO MAINTENANCE para el mantenimiento de 8 apartamentos modelo. El trabajo de pintura, resanes y remodelación fue impecable. Terminaron en tiempo récord y la calidad superó nuestras expectativas. Los recomiendo ampliamente a cualquier constructora en Cali.",
    platform: "Empresa",
  },
  {
    name: "James Williams",
    role: "Turista Ejecutivo · New York, USA",
    avatar: "JW",
    color: "#10b981",
    rating: 5,
    text: "The FIXO TOUR team picked me up at Alfonso Bonilla Aragón airport on time, the vehicle was luxurious and clean, and the driver spoke excellent English. They helped me with all logistics during my 5-day stay in Cali. Absolutely professional service!",
    platform: "Transporte",
  },
  {
    name: "Carolina Vargas",
    role: "Propietaria · Apartamento en El Peñón",
    avatar: "CV",
    color: "#8b5cf6",
    rating: 5,
    text: "Necesitaba instalar cámaras de seguridad y una cerradura inteligente para mi apartamento en Airbnb. FIXO SECURITY instaló todo en un día, me enseñaron a usar la app y ahora monitoreo todo desde mi teléfono. El trabajo fue excelente y el precio muy competitivo.",
    platform: "Seguridad",
  },
  {
    name: "Andrés Patiño",
    role: "Administrador de propiedades · 20+ inmuebles",
    avatar: "AP",
    color: "#ef4444",
    rating: 5,
    text: "Llevo 2 años trabajando con FIXO SERVICES para la limpieza de más de 20 propiedades. Son puntuales, profesionales, y los reportes fotográficos que envían después de cada limpieza me permiten controlar todo remotamente. Sin duda el mejor servicio de limpieza en Cali.",
    platform: "Limpieza",
  },
  {
    name: "Isabella Torres",
    role: "Empresaria · Cali",
    avatar: "IT",
    color: "#f59e0b",
    rating: 5,
    text: "Usamos FIXO CLEAN para la limpieza semanal de nuestra oficina y FIXO TOUR para los traslados de clientes desde el aeropuerto. Poder tener ambos servicios con un solo proveedor nos simplifica la operación enormemente. ¡Altamente recomendados!",
    platform: "Empresa",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-[#c9a84c] fill-[#c9a84c]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Lo que dicen nuestros{" "}
            <span className="gradient-gold">clientes</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Stars count={5} />
            <span>4.97 promedio · Más de 200 reseñas</span>
          </div>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="card-dark rounded-2xl p-6 relative">
              {/* Quote icon */}
              <Quote
                size={32}
                className="absolute top-4 right-4 text-[#c9a84c]/10"
              />

              {/* Platform badge */}
              <span
                className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-4 uppercase tracking-wider"
                style={{
                  backgroundColor: `${t.color}15`,
                  color: t.color,
                  border: `1px solid ${t.color}30`,
                }}
              >
                {t.platform}
              </span>

              {/* Stars */}
              <Stars count={t.rating} />

              {/* Text */}
              <p className="text-gray-400 text-sm leading-relaxed my-4 line-clamp-5">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1f1f1f]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
