import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Pillars } from "@/components/sections";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Legacy & Craft",
  description: "The Maison AVYA heritage — poetry in metal, shaped by generational silversmithing.",
};

const craft = [
  {
    image: "/images/gifting.png",
    title: "Designing Botanical Geometries",
    body: "Every creation starts as hand-sketched biological forms, mapped out in geometric symmetry before entering mold carving.",
  },
  {
    image: "/images/hero.png",
    title: "Generational Silversmithing",
    body: "Our master artisans temper, hammer, and forge pure sheets of raw silver into precise structural holloware.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero image="/images/hero.png" overlay={0.55} height="560" eyebrow="The Maison Heritage" title="Our Legacy & Craft" />

      {/* Story */}
      <section className="bg-cream py-[120px]">
        <Container className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-col items-start gap-8 lg:flex-1">
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2 className="font-serif text-[36px] font-normal leading-[1.1] text-ink md:text-[48px]">
              From the House of AVYA to Yours
            </h2>
            <p className="font-sans text-[16px] leading-[1.8] text-muted">
              At Maison Avya, we craft more than silverware — we create poetry in metal. Each piece is born from timeless
              artistry, inspired by nature&apos;s grace and shaped to reflect modern elegance.
            </p>
            <p className="font-sans text-[16px] leading-[1.8] text-muted">
              Designed to be cherished, our collections transform everyday rituals into moments of beauty, warmth, and
              legacy. Every artisan curve preserves generational technique.
            </p>
          </div>
          <div className="relative h-[360px] w-full overflow-hidden rounded-[4px] md:h-[440px] lg:w-[540px] lg:shrink-0">
            <Image src="/images/about.png" alt="Silver tea service" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <Pillars variant="about" />

      {/* Craft */}
      <section id="craft" className="scroll-mt-[90px] bg-cream py-[120px]">
        <Container className="flex flex-col gap-20">
          <SectionHeading eyebrow="Behind the Scenes" title="Artistry in the Making" align="center" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {craft.map((c) => (
              <article key={c.title} className="flex flex-col gap-5">
                <div className="relative h-[280px] w-full overflow-hidden rounded-[4px] md:h-[360px]">
                  <Image src={c.image} alt="" fill sizes="(min-width: 768px) 580px, 100vw" className="object-cover" />
                </div>
                <h3 className="font-serif text-[22px] font-normal text-ink">{c.title}</h3>
                <p className="font-sans text-[14px] leading-[1.5] text-muted">{c.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
