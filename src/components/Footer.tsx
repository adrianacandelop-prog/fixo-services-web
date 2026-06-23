import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "FIXO CLEAN", href: "#servicios" },
    { label: "FIXO MAINTENANCE", href: "#servicios" },
    { label: "FIXO SECURITY", href: "#servicios" },
    { label: "FIXO TOUR", href: "#servicios" },
    { label: "FIXO HOST", href: "#airbnb" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Galería", href: "#galeria" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm gradient-gold-bg flex items-center justify-center">
                <span className="text-black font-black text-sm">F</span>
              </div>
              <span className="font-bold text-lg">
                <span className="gradient-gold">FIXO</span>{" "}
                <span className="text-white">SERVICES</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empresa multiservicios en Cali. Limpieza, mantenimiento, seguridad
              inteligente y transporte ejecutivo con calidad premium.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/573019251001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <span className="text-pink-400 text-xs font-bold">IG</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <span className="text-blue-400 text-xs font-bold">FB</span>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.servicios.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-gray-500 text-sm hover:text-[#c9a84c] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-gray-500 text-sm hover:text-[#c9a84c] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/573019251001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 text-sm hover:text-[#25D366] transition-colors"
                >
                  <Phone size={14} />
                  +57 301 925 1001
                </a>
              </li>
              <li>
                <a
                  href="mailto:fixoatencionalcliente@gmail.com"
                  className="flex items-start gap-2 text-gray-500 text-sm hover:text-[#c9a84c] transition-colors"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0" />
                  fixoatencionalcliente@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-500 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                Cali, Valle del Cauca, Colombia
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-xl bg-[#c9a84c]/5 border border-[#c9a84c]/20">
              <div className="text-[10px] text-[#c9a84c] font-semibold uppercase tracking-wider mb-1">
                Atención 24/7
              </div>
              <div className="text-gray-400 text-xs">
                Emergencias por WhatsApp en cualquier momento.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © 2025 FIXO SERVICES · Cali, Colombia · Todos los derechos reservados
          </p>
          <p className="text-gray-600 text-xs">
            Gerardo Salcedo & Adriana Candelo
          </p>
        </div>
      </div>
    </footer>
  );
}
