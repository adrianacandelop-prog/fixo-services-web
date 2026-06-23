import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AirbnbSection from "@/components/AirbnbSection";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Coverage from "@/components/Coverage";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AirbnbSection />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Coverage />
      <Blog />
      <Contact />
    </>
  );
}
