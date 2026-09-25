import type { Metadata } from "next";
import { CollectionCard } from "@/components/cards";
import { PageHero } from "@/components/sections";
import { Container } from "@/components/ui";
import { collections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Collections",
  description: "Discover timeless silverware crafted with artistry and grace.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        image="/images/hero.png"
        overlay={0.55}
        height="380"
        eyebrow="Curated Masterpieces"
        title="Our Collections"
        subtitle="Discover timeless silverware crafted with artistry and grace."
        subtitleSize={22}
      />
      <section className="bg-sand pb-[140px] pt-[120px]">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c) => (
              <CollectionCard key={c.slug} collection={c} detailed />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
