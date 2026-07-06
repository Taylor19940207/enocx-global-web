import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ByTheNumbers from "@/components/ByTheNumbers";
import WhyEnocX from "@/components/WhyEnocX";
import People from "@/components/People";
import Proof from "@/components/Proof";
import CTA from "@/components/CTA";
import SectionWave from "@/components/decorative/SectionWave";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionWave fill="#ffffff" />
      <Services showExtended={false} moreHref="/services" />
      <SectionWave fill="#14181a" flip />
      <ByTheNumbers />
      <SectionWave fill="#f7f9fa" />
      <People limit={3} moreHref="/people" />
      <WhyEnocX />
      <SectionWave fill="#ffffff" />
      <Proof />
      <CTA />
    </>
  );
}
