"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Airbnb", href: "#airbnb" },
  { label: "Galería", href: "#galeria" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060912]/97 backdrop-blur-xl shadow-xl shadow-black/60 border-b border-[#1e2d47]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            {/* SVG Logo replicating FIXO brand */}
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-[#2563eb] flex items-center justify-center shadow-lg shadow-[#2563eb]/30">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                  <path d="M4 6h7M4 12h5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  <path d="M14 6l6 12M20 6l-6 12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="leading-none">
              <div className="font-black text-white text-lg tracking-tight">FIXO</div>
              <div className="text-[#2563eb] font-bold text-[10px] tracking-[0.3em]">SERVICES</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/573019251001?text=Hola%20FIXO%20SERVICES%2C%20me%20interesa%20conocer%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#25D366] border border-[#25D366]/30 px-4 py-2.5 rounded-xl hover:bg-[#25D366]/10 transition-all duration-200 font-semibold"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <Link
              href="#contacto"
              className="flex items-center gap-1.5 text-sm bg-[#2563eb] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#1d4ed8] transition-all duration-200 shadow-lg shadow-[#2563eb]/25"
            >
              Cotizar Gratis
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#060912]/98 backdrop-blur-xl border-t border-[#1e2d47]">
          <div className="px-4 py-6 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium text-sm"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-[#1e2d47] grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/573019251001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-[#25D366] border border-[#25D366]/40 px-4 py-3.5 rounded-xl font-semibold"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <Link
                href="#contacto"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center text-sm bg-[#2563eb] text-white px-4 py-3.5 rounded-xl font-bold shadow-lg shadow-[#2563eb]/25"
              >
                Cotizar Gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
