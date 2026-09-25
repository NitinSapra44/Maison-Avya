import Link from "next/link";
import { CONTACT } from "@/lib/content";
import { Container, Divider, Logo } from "./ui";

const maisonLinks = [
  { label: "Collections", href: "/collections" },
  { label: "Our Legacy", href: "/about" },
  { label: "Craftsmanship", href: "/about#craft" },
  { label: "Concierge Service", href: "/contact" },
];

const giftingLinks = [
  { label: "Corporate Gifting", href: "/corporate-gifting" },
  { label: "Custom Engraving", href: "/corporate-gifting#services" },
  { label: "Occasion Registry", href: "/corporate-gifting#occasions" },
  { label: "Bespoke Collaborations", href: "/contact" },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col items-start gap-4 whitespace-nowrap">
      <p className="font-sans text-[12px] font-semibold uppercase text-gold">{title}</p>
      {links.map((l) => (
        <Link key={l.label} href={l.href} className="font-sans text-[14px] text-white opacity-80 transition-opacity hover:opacity-100">
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pb-[60px] pt-[100px]">
      <Container className="flex flex-col gap-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between">
          <div className="flex flex-col items-start gap-6 lg:w-[320px]">
            <Logo light gap={12} />
            <p className="font-sans text-[14px] leading-[1.6] text-line opacity-80">
              A prestigious silverware and custom corporate gifting house, dedicated to legacy, natural geometry, and
              timeless handcrafted artistry.
            </p>
          </div>
          <LinkColumn title="The Maison" links={maisonLinks} />
          <LinkColumn title="Gifting Services" links={giftingLinks} />
          <div className="flex flex-col items-start gap-4 lg:w-[260px]">
            <p className="font-sans text-[12px] font-semibold uppercase text-gold">Inquiries</p>
            <div className="flex flex-col gap-3 font-sans text-[14px] text-white">
              <a href={CONTACT.phoneHref} className="opacity-80 hover:opacity-100">{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="opacity-80 hover:opacity-100">{CONTACT.email}</a>
              <p className="opacity-80">{CONTACT.location}</p>
            </div>
          </div>
        </div>

        <Divider src="/icons/footer-line.svg" />

        <div className="flex flex-col gap-4 font-sans text-[13px] text-white md:flex-row md:items-center md:justify-between">
          <p className="opacity-40">Copyright © 2025 Maison AVYA. All rights reserved.</p>
          <div className="flex gap-6 whitespace-nowrap">
            <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100">
              Instagram
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100">
              Pinterest
            </a>
            <Link href="/terms" className="opacity-60 hover:opacity-100">Terms &amp; Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
