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
  seo: [
    "Limpieza Airbnb Cali",
    "Transporte Ejecutivo Cali",
    "Cerraduras Inteligentes Cali",
    "Mantenimiento Locativo Cali",
    "Traslado Aeropuerto Cali",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#04060d] border-t border-[#1e2d47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#inicio" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[#2563eb] flex items-center justify-center shadow-lg shadow-[#2563eb]/30">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                  <path d="M4 6h7M4 12h5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  <path d="M14 6l6 12M20 6l-6 12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="font-black text-white text-base tracking-tight">FIXO</div>
                <div className="text-[#2563eb] font-bold text-[9px] tracking-[0.35em]">SERVICES</div>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Empresa multiservicios en Cali. Limpieza profesional, mantenimiento, seguridad inteligente
              y transporte ejecutivo con calidad premium.
            </p>

            {/* Social */}
            <div className="flex gap-2.5">
              <a
                href="https://wa.me/573019251001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/4 border border-[#1e2d47] flex items-center justify-center hover:border-[#2563eb]/30 hover:bg-[#2563eb]/5 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-pink-400 text-[10px] font-black">IG</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/4 border border-[#1e2d47] flex items-center justify-center hover:border-[#2563eb]/30 hover:bg-[#2563eb]/5 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-blue-400 text-[10px] font-black">FB</span>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-5">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-gray-600 text-sm hover:text-[#2563eb] transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-5">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-gray-600 text-sm hover:text-[#2563eb] transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-5">
              Contacto
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="https://wa.me/573019251001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-600 text-sm hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle size={13} className="flex-shrink-0" />
                  +57 301 925 1001
                </a>
              </li>
              <li>
                <a
                  href="tel:+573019251001"
                  className="flex items-center gap-2.5 text-gray-600 text-sm hover:text-[#2563eb] transition-colors"
                >
                  <Phone size={13} className="flex-shrink-0" />
                  +57 301 925 1001
                </a>
              </li>
              <li>
                <a
                  href="mailto:fixoatencionalcliente@gmail.com"
                  className="flex items-start gap-2.5 text-gray-600 text-sm hover:text-[#2563eb] transition-colors"
                >
                  <Mail size={13} className="flex-shrink-0 mt-0.5" />
                  <span className="break-all">fixoatencionalcliente@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-600 text-sm">
                <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                <span>Cali, Valle del Cauca, Colombia</span>
              </li>
            </ul>

            {/* Emergency badge */}
            <div className="mt-5 p-3.5 rounded-xl bg-[#2563eb]/5 border border-[#2563eb]/15">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-[#25D366] text-[10px] font-black uppercase tracking-wider">
                  Atención 24/7
                </span>
              </div>
              <div className="text-gray-600 text-xs leading-relaxed">
                Emergencias y urgencias por WhatsApp en cualquier momento.
              </div>
            </div>
          </div>
        </div>

        {/* SEO keywords row */}
        <div className="mt-12 pt-8 border-t border-[#1e2d47]">
          <div className="flex flex-wrap gap-2 mb-6">
            {footerLinks.seo.map((kw) => (
              <span
                key={kw}
                className="text-[10px] text-gray-700 border border-[#1e2d47] px-3 py-1 rounded-full font-medium"
              >
                {kw}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-700 text-xs">
              © 2025 FIXO SERVICES · Cali, Valle del Cauca, Colombia · Todos los derechos reservados
            </p>
            <p className="text-gray-700 text-xs">
              fixoatencionalcliente@gmail.com · +57 301 925 1001
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
