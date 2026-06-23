"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
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
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-sm gradient-gold-bg flex items-center justify-center">
              <span className="text-black font-black text-sm">F</span>
            </div>
            <span className="font-bold text-lg tracking-wider">
              <span className="gradient-gold">FIXO</span>{" "}
              <span className="text-white">SERVICES</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-300 hover:text-[#c9a84c] transition-colors duration-200 font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/573019251001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#c9a84c] border border-[#c9a84c]/40 px-4 py-2 rounded-full hover:bg-[#c9a84c] hover:text-black transition-all duration-200 font-medium"
            >
              <Phone size={14} />
              WhatsApp
            </a>
            <Link
              href="#contacto"
              className="text-sm bg-[#c9a84c] text-black px-5 py-2 rounded-full font-semibold hover:bg-[#e8c97a] transition-all duration-200"
            >
              Cotizar
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black/98 backdrop-blur-md border-t border-[#1f1f1f]">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-[#c9a84c] transition-colors font-medium py-1"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#1f1f1f] flex flex-col gap-3">
              <a
                href="https://wa.me/573019251001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm text-[#c9a84c] border border-[#c9a84c]/40 px-4 py-3 rounded-full font-medium"
              >
                WhatsApp
              </a>
              <Link
                href="#contacto"
                onClick={() => setOpen(false)}
                className="text-center text-sm bg-[#c9a84c] text-black px-4 py-3 rounded-full font-semibold"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
