import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ByTheNumbers from "@/components/ByTheNumbers";
import WhyEnocX from "@/components/WhyEnocX";
import People from "@/components/People";
import CTA from "@/components/CTA";
import { defaultLocale, href, type Locale } from "@/lib/i18n";

export default function HomePage({ locale = defaultLocale }: { locale?: Locale }) {
  return (
    <div className="home-page overflow-x-clip bg-paper">
      <Hero />
      <Services showExtended={false} moreHref={href("/services", locale)} locale={locale} />
      <ByTheNumbers locale={locale} />
      <People limit={3} moreHref={href("/people", locale)} bg="bg-paper" locale={locale} />
      <WhyEnocX locale={locale} />
      <CTA locale={locale} />
    </div>
  );
}
