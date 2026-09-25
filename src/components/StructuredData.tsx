import { getContent } from "@/lib/content";
import { canonicalUrl, localeTags, OG_IMAGE, SITE_URL, type Locale } from "@/lib/i18n";

/**
 * Organization data for search engines.
 *
 * A consultancy with six offices has facts a crawler cannot infer from prose:
 * which legal entity the site belongs to, where it operates, and what languages
 * it works in. `sameAs` is deliberately absent — there are no verified profile
 * URLs to point at, and inventing them would be worse than omitting the field.
 */
export default function StructuredData({ locale }: { locale: Locale }) {
  const { site, offices, presenceCities } = getContent(locale);
  const head = offices[0];

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    legalName: site.nameJp,
    url: canonicalUrl("/", locale),
    logo: `${SITE_URL}/media/top-logo.png`,
    image: SITE_URL + OG_IMAGE.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: head.address,
      addressCountry: "JP",
    },
    areaServed: presenceCities.map((city) => ({ "@type": "City", name: city })),
    availableLanguage: ["ja", "en", "zh"],
    inLanguage: localeTags[locale].html,
    contactPoint: offices
      .filter((office) => office.tel)
      .map((office) => ({
        "@type": "ContactPoint",
        contactType: office.role,
        telephone: office.tel,
        areaServed: office.en,
      })),
  };

  return (
    <script
      type="application/ld+json"
      // Serialised JSON, not user input; `<` is escaped so the string can
      // never close the script element early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
