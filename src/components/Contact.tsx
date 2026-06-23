"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";

const services = [
  "FIXO CLEAN – Limpieza profesional",
  "FIXO MAINTENANCE – Mantenimiento",
  "FIXO SECURITY – Seguridad inteligente",
  "FIXO TOUR – Transporte ejecutivo",
  "FIXO HOST – Gestión Airbnb",
  "Paquete multiservicios",
  "Otro / Consulta general",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Build WhatsApp message as fallback + form submission
    const msg = encodeURIComponent(
      `Hola FIXO SERVICES, soy ${form.name}.\n\n📞 Tel: ${form.phone}\n📧 Email: ${form.email}\n🔧 Servicio: ${form.service}\n\n💬 ${form.message}`
    );

    // Simulate brief delay then redirect to WhatsApp
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      window.open(`https://wa.me/573019251001?text=${msg}`, "_blank");
    }, 800);
  };

  return (
    <section id="contacto" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#c9a84c]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#c9a84c]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Solicita tu{" "}
            <span className="gradient-gold">cotización gratis</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Respondemos en menos de 2 horas. Sin compromisos.
          </p>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-6 gradient-gold">
                Hablemos hoy
              </h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/573019251001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 glass rounded-xl hover:border-[#25D366]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      WhatsApp
                    </div>
                    <div className="text-gray-400 text-sm group-hover:text-[#25D366] transition-colors">
                      +57 301 925 1001
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+573019251001"
                  className="flex items-start gap-4 p-4 glass rounded-xl hover:border-[#c9a84c]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      Teléfono
                    </div>
                    <div className="text-gray-400 text-sm group-hover:text-[#c9a84c] transition-colors">
                      +57 301 925 1001
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:fixoatencionalcliente@gmail.com"
                  className="flex items-start gap-4 p-4 glass rounded-xl hover:border-[#c9a84c]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      Correo
                    </div>
                    <div className="text-gray-400 text-xs group-hover:text-[#c9a84c] transition-colors break-all">
                      fixoatencionalcliente@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 glass rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      Ubicación
                    </div>
                    <div className="text-gray-400 text-sm">
                      Cali, Valle del Cauca, Colombia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Owners */}
            <div className="glass rounded-2xl p-5">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">
                Propietarios
              </div>
              <div className="space-y-3">
                {["Gerardo Salcedo", "Adriana Candelo"].map((name) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full gradient-gold-bg flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-xs">
                        {name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-white text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="glass rounded-2xl p-5">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">
                Horario de atención
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Lun – Sáb</span>
                  <span className="text-white font-medium">6:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Domingo</span>
                  <span className="text-white font-medium">8:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Emergencias</span>
                  <span className="text-[#25D366] font-medium">24/7 WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="glass rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center mb-6">
                  <CheckCircle2 size={36} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  ¡Solicitud enviada!
                </h3>
                <p className="text-gray-400 mb-6 max-w-sm">
                  Te hemos redirigido a WhatsApp para continuar la
                  conversación. Nuestro equipo te responderá en menos de 2
                  horas.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[#c9a84c] text-sm hover:underline"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+57 300 000 0000"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-2">
                    Servicio requerido *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-2">
                    Mensaje / Detalles
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe brevemente qué necesitas: tipo de propiedad, ubicación, frecuencia del servicio, etc."
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all resize-none"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#c9a84c] text-black font-bold px-6 py-4 rounded-xl hover:bg-[#e8c97a] transition-all duration-200 shadow-lg shadow-[#c9a84c]/20 disabled:opacity-70"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {loading ? "Enviando..." : "Solicitar Cotización"}
                  </button>
                  <a
                    href="https://wa.me/573019251001?text=Hola%20FIXO%20SERVICES%2C%20me%20interesa%20solicitar%20una%20cotización."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] font-semibold px-6 py-4 rounded-xl hover:bg-[#25D366] hover:text-white transition-all duration-200"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Directo
                  </a>
                </div>

                <p className="text-gray-500 text-xs text-center">
                  Al enviar, aceptas que nos contactemos contigo para responder
                  tu solicitud. Tu información es confidencial.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
