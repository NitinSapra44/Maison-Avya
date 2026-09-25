import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/cards";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { collections } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = collections.find((x) => x.slug === slug);
  return c ? { title: c.name, description: c.description } : {};
}

export default async function CollectionDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  return (
    <>
      {/* Breadcrumbs */}
      <Container className="pt-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 font-sans text-[12px]">
            <li><Link href="/" className="text-muted hover:text-ink">Home</Link></li>
            <li className="text-muted" aria-hidden>&gt;</li>
            <li><Link href="/collections" className="text-muted hover:text-ink">Collections</Link></li>
            <li className="text-muted" aria-hidden>&gt;</li>
            <li className="font-semibold text-ink" aria-current="page">{collection.name}</li>
          </ol>
        </nav>
      </Container>

      {/* Series header */}
      <section className="pb-20 pt-[60px]">
        <Container className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex w-full flex-col items-start gap-6 lg:flex-1">
            <Eyebrow>{collection.eyebrow ?? "Curated Line"}</Eyebrow>
            <h1 className="font-serif text-[44px] font-normal leading-[1.1] text-ink md:text-[56px]">{collection.name}</h1>
            <p className="font-sans text-[16px] leading-[1.7] text-muted">
              {collection.longDescription ?? collection.description}
            </p>
          </div>
          <div className="relative h-[280px] w-full overflow-hidden rounded-[4px] md:h-[320px] lg:w-[540px] lg:shrink-0">
            <Image src={collection.image} alt={collection.name} fill priority sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
          </div>
        </Container>
      </section>

      {/* Products */}
      {collection.products.length > 0 && (
        <section className="bg-sand pb-[120px] pt-20">
          <Container>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {collection.products.map((p) => (
                <ProductCard key={p.sku} product={p} variant="button" />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Corporate gifting CTA */}
      <section className="bg-cream px-6 py-[100px]">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <Eyebrow>The Custom Service</Eyebrow>
            <h2 className="font-serif text-[32px] font-light leading-[1.2] text-ink md:text-[40px]">
              Interested in this collection for corporate gifting?
            </h2>
            <p className="font-sans text-[16px] text-muted">
              We provide custom engraving, customized gift sets, and bespoke luxury packaging structures for high-volume
              orders.
            </p>
          </div>
          <ButtonLink
            href={`/contact?occasion=Corporate%20Gifting&product=${encodeURIComponent(collection.name)}`}
            size="lg"
          >
            Discuss Gifting Options
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
