import { Shield, Clock, Star, Users, Award, CheckCircle } from "lucide-react";

const trust = [
  { icon: Shield, text: "Personal verificado y asegurado" },
  { icon: Clock, text: "Respuesta en menos de 2 horas" },
  { icon: Star, text: "Calificación 4.97 promedio" },
  { icon: Users, text: "+500 propiedades atendidas" },
  { icon: Award, text: "Certificados en limpieza Airbnb" },
  { icon: CheckCircle, text: "Garantía de satisfacción 100%" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#0d1424] border-y border-[#1e2d47] py-4 overflow-hidden">
      <div className="flex animate-none">
        <div className="flex items-center gap-0 flex-nowrap w-full overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-0 min-w-max w-full justify-around px-4">
            {trust.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2.5 px-6 border-r border-[#1e2d47] last:border-r-0 flex-shrink-0"
              >
                <Icon size={15} className="text-[#2563eb] flex-shrink-0" />
                <span className="text-gray-400 text-xs font-semibold whitespace-nowrap">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
