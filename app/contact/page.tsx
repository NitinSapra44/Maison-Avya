import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Container, Eyebrow, Icon } from "@/components/ui";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get in Touch",
  description: "Enquire about bespoke silverware, custom engraving and corporate gifting.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ occasion?: string; product?: string }>;
}) {
  const { occasion, product } = await searchParams;
  const defaultMessage = product ? `I'd like to enquire about: ${product}` : undefined;

  return (
    <>
      <section className="bg-cream py-[100px] lg:py-[120px]">
        <Container className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
          <div className="flex w-full flex-col gap-12 lg:flex-1">
            <div className="flex flex-col gap-4">
              <Eyebrow>Inquire</Eyebrow>
              <h1 className="font-serif text-[40px] font-normal text-ink md:text-[48px]">Get in Touch</h1>
              <p className="font-serif text-[22px] text-muted">Let&apos;s create something beautiful together.</p>
            </div>
            <ContactForm defaultOccasion={occasion} defaultMessage={defaultMessage} />
          </div>

          <aside className="flex w-full flex-col gap-8 lg:w-[540px] lg:shrink-0">
            <div className="relative h-[400px] w-full overflow-hidden rounded-[4px] md:h-[520px]">
              <Image src="/images/cta.png" alt="" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-[28px] font-normal text-ink">Maison AVYA Concierge</h2>
              <div className="flex flex-col gap-3">
                <a href={CONTACT.phoneHref} className="flex items-center gap-3">
                  <Icon src="/icons/phone-dark.svg" size={18} />
                  <span className="font-sans text-[15px] text-muted">{CONTACT.phone}</span>
                </a>
                <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Icon src="/icons/instagram-dark.svg" size={18} />
                  <span className="font-sans text-[15px] text-muted">{CONTACT.instagram}</span>
                </a>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-sand py-[120px]">
        <Container className="flex flex-col gap-3">
          <Eyebrow size={11}>Headquarters</Eyebrow>
          <h2 className="font-serif text-[32px] font-normal text-ink">New Delhi Showroom</h2>
          <p className="max-w-[600px] font-sans text-[16px] leading-[1.6] text-muted">
            Our private boutique is located in New Delhi, India. In-person consultations are arranged exclusively by
            appointment for private commissions and corporate selections.
          </p>
        </Container>
      </section>
    </>
  );
}
