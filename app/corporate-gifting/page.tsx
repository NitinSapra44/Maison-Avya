import type { Metadata } from "next";
import Link from "next/link";
import { ImageBanner, PageHero, TestimonialCard } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, Icon, SectionHeading } from "@/components/ui";
import { CONTACT, corporateSteps, corporateTestimonials, occasions, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bespoke Corporate Gifting",
  description: "Custom engraving, bespoke sets, branded packaging and bulk orders for weddings, Diwali and corporate occasions.",
};

export default function CorporateGiftingPage() {
  return (
    <>
      <PageHero
        image="/images/gifting.png"
        overlay={0.5}
        height="560"
        eyebrow="The Corporate Service"
        title="Bespoke Corporate Gifting"
        subtitle="We are here for your life's most cherished celebrations."
      />

      {/* Services */}
      <section id="services" className="scroll-mt-[90px] bg-sand py-[120px]">
        <Container className="flex flex-col gap-16">
          <SectionHeading eyebrow="Bespoke Options" title="Tailored Gifting Solutions" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="flex flex-col gap-4 self-start rounded-[4px] border border-line bg-cream p-8">
                <h3 className="font-serif text-[24px] font-medium text-ink">{s.title}</h3>
                <p className="font-sans text-[15px] leading-[1.6] text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-cream py-[120px]">
        <Container className="flex flex-col gap-16">
          <SectionHeading eyebrow="The Journey" title="Design & Crafting Process" align="center" />
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {corporateSteps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-5">
                <span className="font-serif text-[28px] font-light text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-[20px] font-medium text-ink">{step.title}</h3>
                <p className="font-sans text-[13px] leading-[1.5] text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Occasions */}
      <section id="occasions" className="scroll-mt-[90px] bg-sand py-[120px]">
        <Container className="flex flex-col gap-16">
          <SectionHeading eyebrow="Bespoke Occasions" title="We Customise For" align="center" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {occasions.map((o) => (
              <Link
                key={o}
                href={`/contact?occasion=${encodeURIComponent(o)}`}
                className="flex items-center justify-center rounded-[4px] border border-line bg-cream p-8 transition-colors hover:border-gold"
              >
                <span className="font-serif text-[24px] font-normal text-ink">{o}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-[120px]">
        <Container className="flex flex-col gap-16">
          <SectionHeading eyebrow="Client Reviews" title="What Corporate Leaders Say" align="center" />
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            {corporateTestimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} variant="corporate" />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <ImageBanner image="/images/cta.png" overlay={0.6} className="items-center justify-center">
        <Container className="flex flex-col items-center gap-8 py-[120px]">
          <div className="flex max-w-[800px] flex-col items-center gap-4 text-center">
            <Eyebrow>Partner with Us</Eyebrow>
            <h2 className="font-serif text-[36px] font-normal text-white md:text-[48px]">Start Your Corporate Gifting Journey</h2>
            <p className="font-serif text-[20px] text-white opacity-90">
              Let&apos;s design bespoke masterpieces suited to your brand&apos;s unique aesthetic footprint.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            <a href={CONTACT.phoneHref} className="flex items-center gap-[10px]">
              <Icon src="/icons/phone-cta.svg" size={18} />
              <span className="font-sans text-[18px] font-medium text-white">{CONTACT.phone}</span>
            </a>
            <ButtonLink href="/contact?occasion=Corporate%20Gifting" variant="white" className="font-semibold">
              Inquire Now
            </ButtonLink>
          </div>
        </Container>
      </ImageBanner>
    </>
  );
}
