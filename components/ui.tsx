/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cx(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

/** 1200px content column with the design's 120px desktop gutters */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-[1440px] px-6 md:px-12 xl:px-[120px]", className)}>{children}</div>;
}

export function Eyebrow({
  children,
  tone = "gold",
  size = 12,
  className,
}: {
  children: ReactNode;
  tone?: "gold" | "olive";
  size?: 11 | 12 | 14;
  className?: string;
}) {
  return (
    <p
      className={cx(
        "font-sans font-semibold uppercase",
        tone === "gold" ? "text-gold" : "text-olive",
        size === 11 ? "text-[11px]" : size === 14 ? "text-[14px]" : "text-[12px]",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Eyebrow + serif heading pair used at the top of most sections */
export function SectionHeading({
  eyebrow,
  title,
  tone = "gold",
  align = "left",
  size = 40,
  className,
}: {
  eyebrow: string;
  title: string;
  tone?: "gold" | "olive";
  align?: "left" | "center";
  size?: 40 | 48;
  className?: string;
}) {
  return (
    <div className={cx("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cx(
          "font-serif font-normal text-ink",
          size === 48 ? "text-[36px] leading-[1.1] md:text-[48px]" : "text-[32px] leading-[1.2] md:text-[40px]"
        )}
      >
        {title}
      </h2>
    </div>
  );
}

type ButtonVariant = "sage" | "outline" | "white";
const buttonStyles: Record<ButtonVariant, string> = {
  sage: "bg-sage text-white hover:bg-[#8f8a6f]",
  outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
  white: "bg-white text-ink hover:bg-cream",
};

export function ButtonLink({
  href,
  variant = "sage",
  size = "md",
  className,
  children,
  ...rest
}: Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center justify-center whitespace-nowrap rounded-[2px] font-sans uppercase transition-colors",
        buttonStyles[variant],
        size === "sm" && "px-6 py-3 text-[12px] font-semibold",
        size === "md" && "px-8 py-[14px] text-[13px] font-medium",
        size === "lg" && "px-9 py-4 text-[13px] font-semibold",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

/** Horizontal rule rendered from the Figma divider vector */
export function Divider({
  src = "/icons/divider.svg",
  width,
  className,
}: {
  src?: string;
  /** fixed px width; defaults to full width */
  width?: number;
  className?: string;
}) {
  return (
    <div
      className={cx("relative h-0 shrink-0", !width && "w-full", className)}
      style={width ? { width } : undefined}
      aria-hidden
    >
      <div className="absolute inset-[-1px_0_0_0]">
        <img alt="" src={src} className="block size-full max-w-none" />
      </div>
    </div>
  );
}

/** Fixed-size vector icon (keeps the SVG's own root width/height) */
export function Icon({ src, size, className }: { src: string; size: number; className?: string }) {
  return (
    <span className={cx("relative inline-block shrink-0", className)} style={{ width: size, height: size }} aria-hidden>
      <img alt="" src={src} className="absolute inset-0 block size-full max-w-none" />
    </span>
  );
}

export function Logo({ light = false, gap = 14 }: { light?: boolean; gap?: 12 | 14 }) {
  return (
    <Link href="/" className="flex items-center" style={{ gap }} aria-label="Maison AVYA home">
      <span className="relative h-[30px] w-10 shrink-0">
        <img alt="" src="/images/logo.png" className="absolute inset-0 size-full max-w-none object-cover" />
      </span>
      <span className={cx("whitespace-nowrap font-serif text-[22px] font-semibold", light ? "text-white" : "text-ink")}>
        MAISON AVYA
      </span>
    </Link>
  );
}
