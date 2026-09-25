import Image from "next/image";
import Link from "next/link";
import type { Collection, Product } from "@/lib/content";
import { ButtonLink, Icon, cx } from "./ui";

/** Collection card. `detailed` adds the product count + "Explore Collection" row (collections page). */
export function CollectionCard({ collection, detailed = false }: { collection: Collection; detailed?: boolean }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group flex flex-col gap-5 self-start rounded-[4px] border border-line bg-cream p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(46,45,37,0.08)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px]">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          sizes="(min-width: 1024px) 330px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {detailed ? (
        <div className="flex w-full flex-col gap-[14px]">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-serif text-[24px] font-medium text-ink">{collection.name}</h3>
            <span className="whitespace-nowrap font-sans text-[12px] font-semibold uppercase text-gold">
              {collection.productCount} Products
            </span>
          </div>
          <p className="font-sans text-[14px] leading-[1.5] text-muted">{collection.description}</p>
          <span className="flex items-center gap-2">
            <span className="whitespace-nowrap font-sans text-[12px] font-semibold uppercase text-ink">Explore Collection</span>
            <Icon src="/icons/arrow-right-explore.svg" size={14} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-[10px]">
          <h3 className="font-serif text-[24px] font-medium text-ink">{collection.name}</h3>
          <p className="font-sans text-[14px] leading-[1.5] text-muted">{collection.description}</p>
        </div>
      )}
    </Link>
  );
}

/**
 * Product card.
 * - `link`: sand image tile + "Enquire →" text link (home Signature Pieces)
 * - `button`: cream bordered tile + outlined "Enquire Now" button (collection detail)
 */
export function ProductCard({ product, variant = "link" }: { product: Product; variant?: "link" | "button" }) {
  const enquireHref = `/contact?product=${encodeURIComponent(`${product.name} (${product.sku})`)}`;
  return (
    <article className="flex flex-col gap-6">
      <div
        className={cx(
          "flex aspect-square w-full items-center justify-center rounded-[2px] p-4",
          variant === "link" ? "bg-sand" : "border border-line bg-cream"
        )}
      >
        <div className="relative size-full">
          <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 341px, 100vw" className="object-cover" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-3">
        <div className="flex w-full flex-col gap-1">
          <p className="font-sans text-[12px] font-medium text-muted">SKU: {product.sku}</p>
          <h3 className="font-serif text-[28px] font-normal text-ink">{product.name}</h3>
        </div>
        {variant === "link" ? (
          <Link href={enquireHref} className="group flex items-center gap-2">
            <span className="font-sans text-[13px] font-semibold uppercase text-ink">Enquire</span>
            <Icon src="/icons/arrow-right.svg" size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <ButtonLink href={enquireHref} variant="outline" size="sm">
            Enquire Now
          </ButtonLink>
        )}
      </div>
    </article>
  );
}
