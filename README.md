# Maison AVYA — Next.js build of the Figma file

Built from Figma file `a9XvOv2ekpyiNFmrGar1r5` (6 frames): Home, Collections, Collection detail (Daisy Series), Corporate Gifting, About, Contact.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · `next/font` (Cormorant Garamond + Manrope)

## Setup

```bash
npm install
npm run fetch-assets   # downloads every image/icon from Figma into /public — do this first
npm run dev
```

> The Figma asset URLs expire around **2 Oct 2026** (7 days after export). If `fetch-assets` fails,
> re-export the images from Figma and save them under the file names listed in `scripts/fetch-figma-assets.mjs`.

## Structure

```
app/
  page.tsx                     Home (frame 2:4)
  collections/page.tsx         Collections overview (2:294)
  collections/[slug]/page.tsx  Collection detail, statically generated for all 6 (2:412)
  corporate-gifting/page.tsx   (2:532)
  about/page.tsx               (2:668)
  contact/page.tsx             (2:763) — reads ?occasion= and ?product= to prefill the form
  api/enquiry/route.ts         Validates enquiries (hook up Resend/Supabase at the TODO)
components/
  Header.tsx                   Sticky nav, active-page state, mobile menu
  Footer.tsx
  ContactForm.tsx              Client form → /api/enquiry
  cards.tsx                    CollectionCard, ProductCard
  sections.tsx                 ImageBanner, PageHero, Pillars, TestimonialCard
  ui.tsx                       Container, Eyebrow, SectionHeading, ButtonLink, Divider, Icon, Logo
lib/content.ts                 All copy, collections, products, services, testimonials
app/globals.css                Design tokens (colours + fonts) via Tailwind @theme
```

## Notes

- Design tokens: `ink #2e2d25`, `cream #faf8f5`, `sand #f3f0ec`, `line #e5e1db`, `sage #a39e82`, `gold #c4a265`, `muted #6b6a5e`, `olive #858066`.
- Desktop matches the 1440px frames (120px gutters); layouts collapse to tablet/mobile.
- Only the Daisy Series has products in the design; other collection pages render the header and gifting CTA until products are added to `lib/content.ts`.
- Every "Request Catalogue" / "Enquire" button deep-links into the contact form with the occasion or product prefilled.
- `/terms` (footer link) has no design yet.
