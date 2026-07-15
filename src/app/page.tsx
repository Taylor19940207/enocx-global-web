import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ByTheNumbers from "@/components/ByTheNumbers";
import WhyEnocX from "@/components/WhyEnocX";
import People from "@/components/People";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="home-page overflow-hidden bg-paper">
      <Hero />
      <Services showExtended={false} moreHref="/services" />
      <ByTheNumbers />
      <People limit={3} moreHref="/people" bg="bg-paper" />
      <WhyEnocX />
      <CTA />
    </div>
  );
}
