import Image from "next/image";
import type { ReactNode } from "react";
import { pillars, type PillarIcon } from "@/lib/content";
import { Container, Eyebrow, Icon, SectionHeading, cx } from "./ui";

/** Full-bleed photographic banner with a dark overlay */
export function ImageBanner({
  image,
  overlay,
  className,
  children,
  priority,
}: {
  image: string;
  overlay: number;
  className?: string;
  children: ReactNode;
  priority?: boolean;
}) {
  return (
    <section className={cx("relative isolate flex w-full overflow-hidden", className)}>
      <Image src={image} alt="" fill priority={priority} sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: `rgba(46,45,37,${overlay})` }} />
      {children}
    </section>
  );
}

/** Centred eyebrow + light serif title + optional subtitle, used by the inner-page heroes */
export function PageHero({
  image,
  overlay,
  eyebrow,
  title,
  subtitle,
  height,
  subtitleSize = 24,
}: {
  image: string;
  overlay: number;
  eyebrow: string;
  title: string;
  subtitle?: string;
  height: "380" | "560";
  subtitleSize?: 22 | 24;
}) {
  return (
    <ImageBanner
      image={image}
      overlay={overlay}
      priority
      className={cx(
        "items-center justify-center",
        height === "380" ? "min-h-[320px] md:h-[380px]" : "min-h-[420px] md:h-[560px] md:pb-[120px]"
      )}
    >
      <Container className="flex flex-col items-center gap-5 py-20 text-center md:gap-6">
        <Eyebrow size={14}>{eyebrow}</Eyebrow>
        <h1 className="font-serif text-[44px] font-light leading-[1.15] text-white md:text-[64px]">{title}</h1>
        {subtitle && (
          <p
            className={cx(
              "font-serif font-normal leading-[1.4] text-white opacity-90",
              subtitleSize === 22 ? "text-[20px] md:text-[22px]" : "text-[20px] md:text-[24px]"
            )}
          >
            {subtitle}
          </p>
        )}
      </Container>
    </ImageBanner>
  );
}

const pillarIcons: Record<"home" | "about", Record<PillarIcon, string>> = {
  home: { "hand-helping": "/icons/hand-helping.svg", "tree-palm": "/icons/tree-palm.svg", gift: "/icons/gift.svg" },
  about: {
    "hand-helping": "/icons/hand-helping-about.svg",
    "tree-palm": "/icons/tree-palm-about.svg",
    gift: "/icons/gift-about.svg",
  },
};

/** "The Hallmarks of Maison AVYA" — three pillars. Home uses a pill badge, About a full circle. */
export function Pillars({ variant }: { variant: "home" | "about" }) {
  const home = variant === "home";
  return (
    <section className={home ? "bg-cream py-[120px]" : "bg-sand py-[120px]"}>
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Our Standards"
          title="The Hallmarks of Maison AVYA"
          tone={home ? "olive" : "gold"}
          align="center"
        />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col items-center gap-6">
              <div
                className={cx(
                  "flex items-center justify-center rounded-[32px]",
                  home ? "h-6 w-16 bg-sand" : "size-16 bg-cream"
                )}
              >
                <Icon src={pillarIcons[variant][p.icon]} size={24} />
              </div>
              <div className={cx("flex w-full flex-col gap-3", home ? "text-center" : "items-start text-left")}>
                <h3 className="font-serif text-[24px] font-medium text-ink">{p.title}</h3>
                <p className={"font-sans text-[14px] leading-[1.6] text-muted"}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
  variant,
}: {
  quote: string;
  name: string;
  role: string;
  variant: "home" | "corporate";
}) {
  const home = variant === "home";
  return (
    <figure
      className={cx(
        "flex flex-1 flex-col rounded-[4px] p-10",
        home ? "gap-8 border border-line bg-cream" : "gap-6 bg-sand"
      )}
    >
      <blockquote className={cx("font-serif font-normal leading-[1.6] text-ink", home ? "text-[20px] md:text-[22px]" : "text-[20px]")}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="flex flex-col gap-1">
        <span className="font-sans text-[14px] font-semibold text-ink">{name}</span>
        <span className={cx("font-sans text-muted", home ? "text-[12px]" : "text-[13px]")}>{role}</span>
      </figcaption>
    </figure>
  );
}
