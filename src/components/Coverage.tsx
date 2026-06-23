"use client";
import { MapPin, Plane } from "lucide-react";

const zones = [
  { name: "Cali", desc: "Cobertura total", primary: true },
  { name: "Aeropuerto A.B.A.", desc: "Traslados 24/7", primary: false },
  { name: "Palmira", desc: "Servicios disponibles", primary: false },
  { name: "Jamundí", desc: "Servicios disponibles", primary: false },
  { name: "Buga", desc: "Bajo coordinación", primary: false },
  { name: "Lago Calima", desc: "Turismo y traslados", primary: false },
  { name: "Buenaventura", desc: "Transporte especial", primary: false },
];

export default function Coverage() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
              Cobertura
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Donde tu propiedad{" "}
              <span className="gradient-gold">está, nosotros</span>{" "}
              llegamos.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Operamos en Cali y el Valle del Cauca con cobertura en las
              principales zonas residenciales, empresariales y turísticas.
            </p>

            {/* Zones */}
            <div className="space-y-3">
              {zones.map((z) => (
                <div
                  key={z.name}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-200 ${
                    z.primary
                      ? "bg-[#c9a84c]/10 border border-[#c9a84c]/30"
                      : "glass hover:border-[#c9a84c]/20"
                  }`}
                >
                  {z.name === "Aeropuerto A.B.A." ? (
                    <Plane size={16} className="text-[#c9a84c] flex-shrink-0" />
                  ) : (
                    <MapPin size={16} className="text-[#c9a84c] flex-shrink-0" />
                  )}
                  <div>
                    <div
                      className={`font-semibold text-sm ${
                        z.primary ? "text-[#c9a84c]" : "text-white"
                      }`}
                    >
                      {z.name}
                      {z.primary && (
                        <span className="ml-2 text-[10px] bg-[#c9a84c] text-black px-2 py-0.5 rounded-full font-bold">
                          PRINCIPAL
                        </span>
                      )}
                    </div>
                    <div className="text-gray-500 text-xs">{z.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-sm mt-6">
              ¿Tu propiedad está en otra zona?{" "}
              <a
                href="https://wa.me/573019251001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] hover:underline"
              >
                Consúltanos por WhatsApp
              </a>
            </p>
          </div>

          {/* Right: Map embed */}
          <div className="rounded-3xl overflow-hidden border border-[#1f1f1f] shadow-2xl shadow-black/50 h-[450px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.16897700574!2d-76.64290945!3d3.43722185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1699000000000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cobertura FIXO SERVICES Cali"
            />
            <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-xl">
              <div className="text-[#c9a84c] font-bold text-sm">FIXO SERVICES</div>
              <div className="text-gray-400 text-xs">Cali, Valle del Cauca</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
