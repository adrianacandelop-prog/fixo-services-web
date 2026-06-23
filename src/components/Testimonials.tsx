import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda López",
    role: "Anfitriona Airbnb · 12 propiedades en Cali",
    initials: "MF",
    accent: "#2563eb",
    rating: 5,
    text: "FIXO SERVICES transformó por completo la gestión de mis apartamentos. Desde que los contraté, mis calificaciones subieron de 4.6 a 4.97. El equipo de FIXO HOST coordina todo el check-in, la limpieza y los reportes. Ahora genero más ingresos sin ningún estrés.",
    tag: "FIXO HOST",
  },
  {
    name: "Ricardo Montoya",
    role: "Director de Operaciones · Constructora Montoya",
    initials: "RM",
    accent: "#f59e0b",
    rating: 5,
    text: "Contratamos FIXO MAINTENANCE para el mantenimiento de 8 apartamentos modelo. Pintura, resanes y remodelación: trabajo impecable en tiempo récord. La calidad superó nuestras expectativas. Los recomiendo a cualquier constructora en Cali.",
    tag: "FIXO MAINTENANCE",
  },
  {
    name: "James Williams",
    role: "Business Executive · New York, USA",
    initials: "JW",
    accent: "#10b981",
    rating: 5,
    text: "The FIXO TOUR team picked me up at Alfonso Bonilla Aragón airport right on time. The vehicle was immaculate, the driver spoke excellent English and helped me with all my logistics during 5 days in Cali. Absolutely world-class service.",
    tag: "FIXO TOUR",
  },
  {
    name: "Carolina Vargas",
    role: "Propietaria · Apartamento El Peñón, Cali",
    initials: "CV",
    accent: "#8b5cf6",
    rating: 5,
    text: "FIXO SECURITY instaló cámaras y una cerradura digital en mi Airbnb en un día. Ahora monitoreo todo desde mi celular y mis huéspedes hacen check-in solos. La instalación fue perfecta y el precio muy competitivo.",
    tag: "FIXO SECURITY",
  },
  {
    name: "Andrés Patiño",
    role: "Administrador de propiedades · 20+ inmuebles",
    initials: "AP",
    accent: "#3b82f6",
    rating: 5,
    text: "Llevo 2 años con FIXO CLEAN para más de 20 propiedades. Son puntuales, profesionales, y los reportes fotográficos que envían me permiten controlar todo remotamente. Sin duda el mejor servicio de limpieza para Airbnb en Cali.",
    tag: "FIXO CLEAN",
  },
  {
    name: "Isabella Torres",
    role: "Empresaria · Cali, Valle del Cauca",
    initials: "IT",
    accent: "#2563eb",
    rating: 5,
    text: "FIXO CLEAN limpia nuestra oficina y FIXO TOUR traslada a nuestros clientes desde el aeropuerto. Tener ambos servicios con un solo proveedor nos simplifica todo. Responden siempre rápido y el trabajo es excelente.",
    tag: "Multiservicios",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-[#2563eb] fill-[#2563eb]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-[#060912] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#2563eb] text-xs font-bold tracking-[0.25em] uppercase bg-[#2563eb]/10 border border-[#2563eb]/20 px-4 py-2 rounded-full mb-4">
            Testimonios Reales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 mb-4 leading-tight">
            Clientes que{" "}
            <span className="gradient-blue">confían en FIXO</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <Stars count={5} />
            <span className="text-gray-400 text-sm font-medium">
              4.97 promedio · +200 reseñas verificadas
            </span>
          </div>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="card-fixo rounded-2xl p-6 relative flex flex-col">
              {/* Quote watermark */}
              <Quote size={40} className="absolute top-4 right-4 text-[#2563eb]/6" />

              {/* Tag */}
              <span
                className="inline-block text-[10px] font-black px-3 py-1 rounded-full mb-4 w-fit tracking-wider uppercase"
                style={{
                  backgroundColor: `${t.accent}12`,
                  color: t.accent,
                  border: `1px solid ${t.accent}25`,
                }}
              >
                {t.tag}
              </span>

              {/* Stars */}
              <Stars count={t.rating} />

              {/* Text */}
              <p className="text-gray-400 text-sm leading-relaxed my-4 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1e2d47]">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.accent}aa)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-gray-600 text-[11px]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-5">
            Únete a más de 500 propietarios que ya confían en FIXO SERVICES.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#2563eb] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#1d4ed8] transition-all shadow-xl shadow-[#2563eb]/25 hover:-translate-y-0.5"
          >
            Solicitar mi cotización gratis
          </a>
        </div>
      </div>
    </section>
  );
}
