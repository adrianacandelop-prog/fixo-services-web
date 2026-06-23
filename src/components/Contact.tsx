"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  "FIXO CLEAN — Limpieza profesional",
  "FIXO MAINTENANCE — Mantenimiento locativo",
  "FIXO SECURITY — Seguridad inteligente",
  "FIXO TOUR — Transporte ejecutivo",
  "FIXO HOST — Gestión Airbnb",
  "Paquete multiservicios",
  "Consulta general",
];

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+57 301 925 1001",
    href: "https://wa.me/573019251001",
    accent: "#25D366",
    desc: "Respuesta en minutos",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+57 301 925 1001",
    href: "tel:+573019251001",
    accent: "#2563eb",
    desc: "Lun–Sáb 6AM–8PM",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "fixoatencionalcliente@gmail.com",
    href: "mailto:fixoatencionalcliente@gmail.com",
    accent: "#2563eb",
    desc: "Respuesta en 24h",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Cali, Valle del Cauca",
    href: "#",
    accent: "#2563eb",
    desc: "Colombia",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const msg = encodeURIComponent(
      `Hola FIXO SERVICES, soy *${form.name}*.\n\n📞 Tel: ${form.phone}\n📧 Email: ${form.email}\n🔧 Servicio: ${form.service}\n\n💬 ${form.message || "Me interesa conocer más sobre sus servicios."}`
    );
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      window.open(`https://wa.me/573019251001?text=${msg}`, "_blank");
    }, 700);
  };

  return (
    <section id="contacto" className="py-24 bg-[#0d1424] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#1d4ed8]/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#2563eb] text-xs font-bold tracking-[0.25em] uppercase bg-[#2563eb]/10 border border-[#2563eb]/20 px-4 py-2 rounded-full mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 mb-4 leading-tight">
            Solicita tu{" "}
            <span className="gradient-blue">cotización gratis</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Sin compromisos. Respondemos en menos de 2 horas.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16">

          {/* Left — info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Contact cards */}
            {contactInfo.map(({ icon: Icon, label, value, href, accent, desc }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card-fixo rounded-2xl group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ backgroundColor: `${accent}12`, border: `1px solid ${accent}25` }}
                >
                  <Icon size={18} style={{ color: accent }} />
                </div>
                <div className="min-w-0">
                  <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-0.5">{label}</div>
                  <div className="text-white font-bold text-sm truncate">{value}</div>
                  <div className="text-gray-600 text-xs">{desc}</div>
                </div>
                <ArrowRight size={14} className="text-gray-700 ml-auto flex-shrink-0 group-hover:text-[#2563eb] transition-colors" />
              </a>
            ))}

            {/* Hours */}
            <div className="card-fixo rounded-2xl p-5">
              <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">
                Horario de atención
              </div>
              <div className="space-y-2.5 text-sm">
                {[
                  { day: "Lunes – Sábado", hours: "6:00 AM – 8:00 PM" },
                  { day: "Domingo", hours: "8:00 AM – 4:00 PM" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="text-gray-500">{day}</span>
                    <span className="text-white font-semibold text-xs">{hours}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2 border-t border-[#1e2d47]">
                  <span className="text-gray-500">Emergencias</span>
                  <span className="text-[#25D366] font-bold text-xs">24/7 WhatsApp</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/573019251001?text=Hola%20FIXO%20SERVICES%2C%20me%20interesa%20solicitar%20una%20cotización."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-black px-6 py-4 rounded-2xl hover:bg-[#20bb5a] transition-all shadow-xl shadow-green-500/20 hover:-translate-y-0.5 pulse-green"
            >
              <MessageCircle size={20} className="fill-white" />
              Escribir por WhatsApp
            </a>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="card-fixo rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-20 h-20 rounded-2xl bg-[#2563eb]/10 border border-[#2563eb]/20 flex items-center justify-center mb-6">
                  <CheckCircle2 size={36} className="text-[#2563eb]" />
                </div>
                <h3 className="text-2xl font-black mb-3 gradient-blue">¡Solicitud enviada!</h3>
                <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                  Te redirigimos a WhatsApp para continuar. Nuestro equipo responde en{" "}
                  <strong className="text-white">menos de 2 horas.</strong>
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[#2563eb] text-sm font-semibold hover:underline"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-fixo rounded-3xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3.5 rounded-xl text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">
                      WhatsApp / Teléfono *
                    </label>
                    <input
                      type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="+57 300 000 0000"
                      className="w-full px-4 py-3.5 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3.5 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">
                    Servicio requerido *
                  </label>
                  <select
                    name="service" required value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Selecciona el servicio que necesitas</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">
                    Cuéntanos más (opcional)
                  </label>
                  <textarea
                    name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder="Tipo de propiedad, ubicación, frecuencia del servicio, urgencia..."
                    className="w-full px-4 py-3.5 rounded-xl text-sm resize-none"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 bg-[#2563eb] text-white font-black px-6 py-4 rounded-2xl hover:bg-[#1d4ed8] transition-all shadow-xl shadow-[#2563eb]/25 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : <Send size={16} />}
                    {loading ? "Enviando..." : "Solicitar Cotización"}
                  </button>
                  <a
                    href="https://wa.me/573019251001?text=Hola%20FIXO%20SERVICES%2C%20me%20interesa%20solicitar%20una%20cotización."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 bg-[#25D366]/10 border-2 border-[#25D366]/40 text-[#25D366] font-black px-6 py-4 rounded-2xl hover:bg-[#25D366]/20 transition-all"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Directo
                  </a>
                </div>

                <p className="text-gray-600 text-xs text-center leading-relaxed">
                  Al enviar, aceptas que FIXO SERVICES te contacte para responder tu solicitud.
                  Tu información es confidencial y nunca se comparte con terceros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
