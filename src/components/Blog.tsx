import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "aumentar-calificaciones-airbnb",
    title: "Cómo aumentar las calificaciones de tu Airbnb en Cali",
    excerpt: "Las estrategias que usan los Superhosts para mantener 4.9+: limpieza impecable, check-in ágil y los detalles que marcan la diferencia para huéspedes internacionales.",
    category: "Airbnb",
    date: "15 Jun 2025",
    readTime: "5 min",
    accent: "#2563eb",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=85",
    featured: true,
  },
  {
    slug: "checklist-limpieza-airbnb",
    title: "Checklist de limpieza profesional para Airbnb",
    excerpt: "La lista que usan los profesionales de FIXO CLEAN para garantizar que cada propiedad esté perfecta antes del nuevo huésped.",
    category: "Limpieza",
    date: "8 Jun 2025",
    readTime: "4 min",
    accent: "#3b82f6",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=85",
    featured: false,
  },
  {
    slug: "ventajas-cerraduras-inteligentes",
    title: "5 ventajas de las cerraduras inteligentes para Airbnb",
    excerpt: "Automatiza el check-in, elimina las llaves físicas y controla el acceso desde tu celular. El futuro del Airbnb ya llegó a Cali.",
    category: "Seguridad",
    date: "1 Jun 2025",
    readTime: "6 min",
    accent: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=85",
    featured: false,
  },
  {
    slug: "preparar-propiedad-turistas",
    title: "Cómo preparar tu propiedad para turistas internacionales",
    excerpt: "Guía completa para hacer que tu propiedad en Cali sea irresistible para visitantes de todo el mundo.",
    category: "Airbnb",
    date: "25 May 2025",
    readTime: "7 min",
    accent: "#10b981",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=85",
    featured: false,
  },
  {
    slug: "transporte-ejecutivo-cali",
    title: "Guía de transporte ejecutivo en Cali para empresas",
    excerpt: "Todo lo que necesitas para contratar transporte ejecutivo confiable en Cali: tarifas, rutas y protocolo corporativo.",
    category: "Transporte",
    date: "18 May 2025",
    readTime: "5 min",
    accent: "#f59e0b",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=85",
    featured: false,
  },
];

export default function Blog() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section id="blog" className="py-24 bg-[#060912]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#2563eb] text-xs font-bold tracking-[0.25em] uppercase bg-[#2563eb]/10 border border-[#2563eb]/20 px-4 py-2 rounded-full mb-4">
            Blog & Recursos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 mb-4 leading-tight">
            Guías para{" "}
            <span className="gradient-blue">maximizar tu propiedad</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Consejos prácticos de nuestros expertos para anfitriones y propietarios en Cali.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Featured */}
        <div className="card-fixo rounded-3xl overflow-hidden mb-6 group">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 relative h-64 md:h-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111827]/40" />
              <span
                className="absolute top-4 left-4 text-xs font-black px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: `${featured.accent}15`,
                  color: featured.accent,
                  border: `1px solid ${featured.accent}30`,
                }}
              >
                DESTACADO · {featured.category}
              </span>
            </div>
            <div className="md:col-span-2 p-8 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3 leading-tight">
                {featured.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-gray-600 mb-6">
                <span className="flex items-center gap-1.5"><Calendar size={12} />{featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} />{featured.readTime} lectura</span>
              </div>
              <a
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 text-[#2563eb] font-bold text-sm group/link"
              >
                Leer artículo completo
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-fixo rounded-2xl overflow-hidden group block hover:no-underline"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent" />
                <span
                  className="absolute top-3 left-3 text-[9px] font-black px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: `${post.accent}20`,
                    color: post.accent,
                    border: `1px solid ${post.accent}35`,
                  }}
                >
                  {post.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-white leading-tight mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-[10px] text-gray-600">
                  <span className="flex items-center gap-1"><Calendar size={10} />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
