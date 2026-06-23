"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573019251001?text=Hola%20FIXO%20SERVICES%2C%20me%20interesa%20solicitar%20una%20cotización."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-green-500/30 hover:scale-110 transition-transform duration-200">
          <MessageCircle size={26} className="text-white fill-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#1f1f1f]">
          Chatea con nosotros
        </div>
      </div>
    </a>
  );
}
