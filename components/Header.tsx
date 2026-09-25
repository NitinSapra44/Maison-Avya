"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink, Container, Logo, cx } from "./ui";

const NAV = [
  { href: "/collections", label: "Collections" },
  { href: "/corporate-gifting", label: "Corporate Gifting" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream">
      <Container className="flex h-[90px] items-center justify-between">
        <Logo />

        <nav className="hidden items-start gap-10 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cx(
                "whitespace-nowrap font-sans text-[13px] uppercase text-ink transition-opacity hover:opacity-70",
                isActive(item.href) ? "font-bold" : "font-medium"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ButtonLink href="/contact?occasion=Catalogue%20Request" className="hidden lg:inline-flex">
          Request Catalogue
        </ButtonLink>

        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cx("h-px w-6 bg-ink transition-transform", open && "translate-y-[3.5px] rotate-45")} />
          <span className={cx("h-px w-6 bg-ink transition-transform", open && "-translate-y-[3.5px] -rotate-45")} />
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-cream lg:hidden">
          <Container className="flex flex-col gap-6 py-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cx("font-sans text-[13px] uppercase text-ink", isActive(item.href) ? "font-bold" : "font-medium")}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact?occasion=Catalogue%20Request" className="self-start">
              Request Catalogue
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
