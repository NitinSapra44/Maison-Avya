/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { CollectionCard, ProductCard } from "@/components/cards";
import { ImageBanner, Pillars, TestimonialCard } from "@/components/sections";
import { ButtonLink, Container, Divider, Eyebrow, Icon, SectionHeading } from "@/components/ui";
import { CONTACT, collections, homeSteps, homeTestimonials, services, signaturePieces } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <ImageBanner image="/images/hero.png" overlay={0.35} priority className="min-h-[640px] items-end md:h-[780px]">
        <Container className="pb-20">
          <div className="flex max-w-[760px] flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Eyebrow size={14}>Maison AVYA</Eyebrow>
              <h1 className="font-serif text-[52px] font-light leading-[1.1] text-white md:text-[80px]">
                Timeless Silverware. Luxury Gifting.
              </h1>
            </div>
            <p className="font-serif text-[20px] leading-[1.4] text-white opacity-90 md:text-[24px]">
              Crafting poetry in metal since heritage — each piece born from timeless artistry, inspired by nature&apos;s
              grace.
            </p>
            <div className="pt-3">
              <ButtonLink href="/collections" variant="white" size="lg">
                Explore Collections
              </ButtonLink>
            </div>
          </div>
        </Container>
      </ImageBanner>

      {/* About */}
      <section className="bg-cream py-[100px] md:py-[140px]">
        <Container className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="relative h-[420px] w-full overflow-hidden rounded-[4px] lg:h-[600px] lg:flex-1">
            <Image src="/images/about.png" alt="Silver tea service on a table" fill sizes="(min-width: 1024px) 580px, 100vw" className="object-cover" />
          </div>
          <div className="flex w-full flex-col gap-10 lg:w-[540px] lg:shrink-0">
            <div className="flex flex-col gap-6">
              <Eyebrow tone="olive">Our Philosophy</Eyebrow>
              <h2 className="font-serif text-[36px] font-normal leading-[1.15] text-ink md:text-[48px]">
                From the House of AVYA to Yours
              </h2>
              <p className="font-sans text-[16px] leading-[1.7] text-muted">
                At Maison Avya, we craft more than silverware — we create poetry in metal. Each piece is born from timeless
                artistry, inspired by nature&apos;s grace and shaped to reflect modern elegance.
              </p>
              <p className="font-sans text-[16px] leading-[1.7] text-muted">
                Designed to be cherished, our collections transform everyday rituals into moments of beauty, warmth, and
                legacy.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="relative h-[22px] w-[30px] shrink-0">
                <img alt="" src="/images/logo.png" className="absolute inset-0 size-full max-w-none object-cover" />
              </span>
              <Divider src="/icons/line-accent.svg" width={60} />
              <p className="whitespace-nowrap font-serif text-[14px] text-muted">Bespoke Silver Artistry</p>
            </div>
          </div>
        </Container>
      </section>

      <Divider />

      {/* Collections */}
      <section className="bg-sand py-[100px] md:py-[140px]">
        <Container className="flex flex-col gap-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Curated Lines" title="Our Collections" tone="olive" size={48} className="md:w-[500px]" />
            <ButtonLink href="/contact?occasion=Catalogue%20Request" variant="outline" className="self-start md:self-auto">
              Request Catalogue
            </ButtonLink>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c) => (
              <CollectionCard key={c.slug} collection={c} />
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* Signature pieces */}
      <section className="bg-cream py-[100px] md:py-[140px]">
        <Container className="flex flex-col gap-16">
          <SectionHeading eyebrow="Masterpieces" title="Signature Pieces" tone="olive" size={48} align="center" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {signaturePieces.map((p) => (
              <ProductCard key={p.sku} product={p} variant="link" />
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* Corporate gifting */}
      <section className="bg-sand py-[100px] md:py-[140px]">
        <Container className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-col gap-12 lg:flex-1">
            <div className="flex flex-col gap-6">
              <Eyebrow tone="olive">The Corporate Service</Eyebrow>
              <h2 className="font-serif text-[36px] font-normal leading-[1.15] text-ink md:text-[48px]">
                Elevate Your Corporate Gifting
              </h2>
              <p className="font-sans text-[16px] leading-[1.7] text-muted">
                We are here for your most cherished celebrations. We customise for weddings, baby showers, Diwali gifting,
                corporate gifting &amp; more. From bespoke silverware sets to custom-engraved pieces, each gift is crafted to
                leave a lasting impression.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.title} className="flex flex-col gap-2 self-start">
                  <h3 className="font-serif text-[20px] font-medium text-ink">{s.title}</h3>
                  <p className="font-sans text-[14px] leading-[1.5] text-muted">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <ButtonLink href="/contact?occasion=Corporate%20Gifting">Get in Touch</ButtonLink>
            </div>
          </div>
          <div className="relative h-[480px] w-full overflow-hidden rounded-[4px] lg:h-[660px] lg:w-[540px] lg:shrink-0">
            <Image src="/images/gifting.png" alt="Boxed silver cutlery gift set" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <Divider />

      <Pillars variant="home" />

      <Divider />

      {/* Testimonials */}
      <section className="bg-sand py-[100px] md:py-[140px]">
        <Container className="flex flex-col items-center gap-16">
          <SectionHeading eyebrow="Affiliations" title="Trusted by India's Finest" tone="olive" align="center" />
          <div className="flex w-full flex-col gap-12 md:flex-row md:items-start">
            {homeTestimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} variant="home" />
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* Process */}
      <section className="bg-cream py-[100px] md:py-[140px]">
        <Container className="flex flex-col gap-20">
          <SectionHeading eyebrow="The Journey" title="How It Works" tone="olive" align="center" />
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {homeSteps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[32px] font-light text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <Divider src="/icons/step-line.svg" width={100} />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-[22px] font-medium text-ink">{step.title}</h3>
                  <p className="font-sans text-[14px] leading-[1.6] text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* CTA */}
      <ImageBanner image="/images/cta.png" overlay={0.55} className="min-h-[480px] items-center justify-center md:h-[520px]">
        <Container className="flex flex-col items-center gap-8 py-20">
          <div className="flex max-w-[800px] flex-col items-center gap-4 text-center">
            <Eyebrow>Begin a Legacy</Eyebrow>
            <h2 className="font-serif text-[40px] font-light leading-[1.15] text-white md:text-[56px]">
              Let&apos;s Create Something Beautiful Together
            </h2>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
              <a href={CONTACT.phoneHref} className="flex items-center gap-[10px]">
                <Icon src="/icons/phone-light.svg" size={18} />
                <span className="font-sans text-[16px] font-medium text-white">{CONTACT.phone}</span>
              </a>
              <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[10px]">
                <Icon src="/icons/instagram-light.svg" size={18} />
                <span className="font-sans text-[16px] font-medium text-white">{CONTACT.instagram}</span>
              </a>
            </div>
            <ButtonLink href="/contact?occasion=Catalogue%20Request" variant="white" size="lg">
              Request a Catalogue
            </ButtonLink>
          </div>
        </Container>
      </ImageBanner>
    </>
  );
}
