import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import People from "@/components/People";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "専門家チーム",
  description:
    "税理士・国税OB税理士・司法書士・社会保険労務士・行政書士・弁護士など、有資格の実務家がチームとして日中の越境案件を支援します。",
};

export default function PeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="People"
        title="有資格の専門家が、直接あなたの課題に向き合う。"
        mobileTitleLines={["有資格の専門家が、", "直接あなたの課題に", "向き合う。"]}
        desktopTitleLines={["有資格の専門家が、", "直接あなたの課題に向き合う。"]}
        lead="税理士・国税OB・司法書士・弁護士など、各分野の実務家がチームとして越境案件を支えます。"
        crumbs={[{ label: "Home", href: "/" }, { label: "専門家" }]}
      />
      <People withHeading={false} bg="bg-paper" />
      <CTA />
    </>
  );
}
