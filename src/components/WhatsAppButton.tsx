"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="whatsapp-float flex flex-col items-end gap-3">
      {/* Label chip */}
      <div className="bg-[#060912] border border-[#1e2d47] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-xl flex items-center gap-2 animate-bounce">
        <span className="w-2 h-2 rounded-full bg-[#25D366] flex-shrink-0" />
        Chatea ahora · Respuesta inmediata
      </div>

      {/* Button */}
      <a
        href="https://wa.me/573019251001?text=Hola%20FIXO%20SERVICES%2C%20me%20interesa%20solicitar%20una%20cotización."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="pulse-green w-16 h-16 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 hover:shadow-green-500/60 transition-all duration-200"
      >
        <MessageCircle size={28} className="text-white fill-white" />
      </a>
    </div>
  );
}
