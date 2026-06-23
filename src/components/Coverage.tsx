import { MapPin, Plane, Navigation } from "lucide-react";

const zones = [
  { name: "Cali", desc: "Cobertura total · Sede principal", main: true, icon: Navigation },
  { name: "Aeropuerto Alfonso B. Aragón", desc: "Traslados 24/7 — Palmira", main: false, icon: Plane },
  { name: "Palmira", desc: "Servicios disponibles", main: false, icon: MapPin },
  { name: "Jamundí", desc: "Servicios disponibles", main: false, icon: MapPin },
  { name: "Buga", desc: "Bajo coordinación previa", main: false, icon: MapPin },
  { name: "Lago Calima", desc: "Turismo y traslados", main: false, icon: MapPin },
  { name: "Buenaventura", desc: "Transporte especial", main: false, icon: MapPin },
];

export default function Coverage() {
  return (
    <section className="py-24 bg-[#0d1424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block text-[#2563eb] text-xs font-bold tracking-[0.25em] uppercase bg-[#2563eb]/10 border border-[#2563eb]/20 px-4 py-2 rounded-full mb-6">
              Cobertura
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
              Donde tu propiedad{" "}
              <span className="gradient-blue">está, FIXO llega.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Operamos en Cali y todo el Valle del Cauca. Cubrimos zonas residenciales,
              empresariales y turísticas con la misma calidad premium.
            </p>

            {/* Zones */}
            <div className="space-y-2.5">
              {zones.map(({ name, desc, main, icon: Icon }) => (
                <div
                  key={name}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                    main
                      ? "bg-[#2563eb]/10 border border-[#2563eb]/25"
                      : "card-fixo hover:-translate-y-0 hover:border-[#2563eb]/25"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      main ? "bg-[#2563eb]/20 border border-[#2563eb]/40" : "bg-[#1e2d47]"
                    }`}
                  >
                    <Icon size={15} className={main ? "text-[#2563eb]" : "text-gray-500"} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-sm ${main ? "text-[#2563eb]" : "text-white"}`}>
                        {name}
                      </span>
                      {main && (
                        <span className="text-[9px] bg-[#2563eb] text-white px-2 py-0.5 rounded-full font-black tracking-wider">
                          SEDE PRINCIPAL
                        </span>
                      )}
                    </div>
                    <div className="text-gray-500 text-xs">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 glass rounded-xl border-[#2563eb]/10">
              <p className="text-gray-500 text-sm">
                ¿Tu propiedad está en otra zona?{" "}
                <a
                  href="https://wa.me/573019251001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563eb] font-semibold hover:underline"
                >
                  Consúltanos por WhatsApp
                </a>{" "}
                y evaluamos la cobertura sin costo.
              </p>
            </div>
          </div>

          {/* Right: Map */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-[#1e2d47] shadow-2xl shadow-[#2563eb]/5 h-[520px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.16897700574!2d-76.64290945!3d3.43722185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1699000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) saturate(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cobertura FIXO SERVICES - Cali Valle del Cauca"
              />
            </div>
            {/* Map overlay badge */}
            <div className="absolute bottom-5 left-5 glass-dark rounded-2xl px-5 py-3 border-[#2563eb]/20 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2563eb] animate-pulse" />
                <div>
                  <div className="text-white font-black text-sm">FIXO SERVICES</div>
                  <div className="text-gray-400 text-[11px]">Cali, Valle del Cauca · Colombia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
