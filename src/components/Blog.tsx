"use client";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "aumentar-calificaciones-airbnb",
    title: "Cómo aumentar las calificaciones de tu Airbnb en Cali",
    excerpt:
      "Descubre las estrategias que usan los Superhosts para mantener calificaciones de 4.9 o más: limpieza impecable, check-in ágil y detalles que marcan la diferencia.",
    category: "Airbnb",
    date: "15 Jun 2025",
    readTime: "5 min",
    color: "#c9a84c",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  },
  {
    slug: "checklist-limpieza-airbnb",
    title: "Checklist de limpieza profesional para Airbnb",
    excerpt:
      "La lista definitiva que usan los profesionales de FIXO CLEAN para garantizar que cada propiedad esté perfecta antes de la llegada de un nuevo huésped.",
    category: "Limpieza",
    date: "8 Jun 2025",
    readTime: "4 min",
    color: "#3b82f6",
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&q=80",
  },
  {
    slug: "ventajas-cerraduras-inteligentes",
    title: "5 ventajas de las cerraduras inteligentes para Airbnb",
    excerpt:
      "Automatiza el check-in, elimina las llaves físicas y controla el acceso remotamente. Las cerraduras digitales son el futuro de la gestión de propiedades.",
    category: "Seguridad",
    date: "1 Jun 2025",
    readTime: "6 min",
    color: "#8b5cf6",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
  },
  {
    slug: "preparar-propiedad-turistas",
    title: "Cómo preparar una propiedad para turistas internacionales",
    excerpt:
      "Guía completa para hacer que tu propiedad en Cali sea irresistible para visitantes de todo el mundo: amenities, comunicación y experiencia local.",
    category: "Airbnb",
    date: "25 May 2025",
    readTime: "7 min",
    color: "#10b981",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    slug: "transporte-ejecutivo-cali",
    title: "Guía de transporte ejecutivo en Cali para empresas",
    excerpt:
      "Todo lo que necesitas saber para contratar un servicio de transporte ejecutivo confiable en Cali: tarifas, rutas, aeropuerto y protocolo corporativo.",
    category: "Transporte",
    date: "18 May 2025",
    readTime: "5 min",
    color: "#f59e0b",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
            Blog & Recursos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Consejos para{" "}
            <span className="gradient-gold">maximizar tu propiedad</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Guías prácticas de nuestros expertos para anfitriones,
            administradores y propietarios.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Featured post */}
        <div className="mb-8 card-dark rounded-3xl overflow-hidden group">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit"
                style={{
                  backgroundColor: `${posts[0].color}15`,
                  color: posts[0].color,
                  border: `1px solid ${posts[0].color}30`,
                }}
              >
                {posts[0].category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                {posts[0].title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {posts[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {posts[0].readTime} lectura
                </span>
              </div>
              <a
                href={`/blog/${posts[0].slug}`}
                className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold text-sm hover:gap-3 transition-all"
              >
                Leer artículo completo
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Posts grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.slice(1).map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-dark rounded-2xl overflow-hidden group cursor-pointer block"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span
                  className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: `${post.color}20`,
                    color: post.color,
                    border: `1px solid ${post.color}40`,
                  }}
                >
                  {post.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white leading-tight mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-[10px] text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
