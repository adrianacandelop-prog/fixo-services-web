import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "FIXO SERVICES | Limpieza, Mantenimiento, Seguridad y Transporte en Cali",
  description:
    "Servicios profesionales para Airbnb, limpieza de apartamentos, mantenimiento locativo, cerraduras inteligentes y transporte ejecutivo en Cali, Valle del Cauca. Cotización gratis.",
  keywords: [
    "limpieza Airbnb Cali",
    "limpieza apartamentos Cali",
    "servicios Airbnb Cali",
    "transporte ejecutivo Cali",
    "traslado aeropuerto Cali",
    "mantenimiento locativo Cali",
    "instalación cámaras Cali",
    "cerraduras inteligentes Cali",
    "servicios para Airbnb Cali",
    "FIXO SERVICES Cali",
    "limpieza profesional Cali",
    "gestión Airbnb Cali Colombia",
  ],
  openGraph: {
    title: "FIXO SERVICES | Todo lo que tu propiedad necesita",
    description:
      "Limpieza profesional, mantenimiento, seguridad inteligente y transporte ejecutivo en Cali.",
    siteName: "FIXO SERVICES",
    locale: "es_CO",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "FIXO SERVICES",
              description:
                "Empresa multiservicios en Cali: limpieza profesional para Airbnb, mantenimiento locativo, seguridad inteligente y transporte ejecutivo.",
              url: "https://fixoservices.com",
              telephone: "+573019251001",
              email: "fixoatencionalcliente@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cali",
                addressRegion: "Valle del Cauca",
                addressCountry: "CO",
              },
              geo: { "@type": "GeoCoordinates", latitude: 3.4516, longitude: -76.532 },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "06:00", closes: "20:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "08:00", closes: "16:00" },
              ],
              sameAs: ["https://wa.me/573019251001"],
              priceRange: "$$",
              areaServed: ["Cali", "Valle del Cauca", "Palmira", "Jamundí"],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#060912] text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
