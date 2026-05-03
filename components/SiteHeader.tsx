"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/site-config";

const nav = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SCROLL_SOLID_AT = 56;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > SCROLL_SOLID_AT);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const overlayMode = !solid && !open;
  const linkBase =
    "rounded-lg px-3 py-2 text-sm font-medium transition lg:px-3.5 " +
    (overlayMode
      ? "text-white/92 hover:bg-white/10 hover:text-[#d4af37]"
      : "text-[#1f1b16] hover:bg-black/[0.04] hover:text-[#b88a2a]");

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
        solid || open
          ? "border-b border-[#e8e4dc] bg-[#f8f5ef]/96 shadow-[0_10px_40px_-18px_rgba(31,27,22,0.18)] backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="#top"
          onClick={close}
          className="rounded-lg outline-offset-4 transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d4af37]"
        >
          <BrandLogo variant="nav" priority />
          <span className="sr-only">{siteConfig.companyName}</span>
        </Link>

        <button
          type="button"
          className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border backdrop-blur-sm transition md:hidden ${
            overlayMode
              ? "border-white/35 text-white hover:border-[#d4af37]/55 hover:bg-white/10"
              : "border-[#d4af37]/22 text-[#1f1b16] hover:border-[#b88a2a]/45 hover:bg-black/[0.03]"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>

        <div className="hidden items-center gap-1 md:flex">
          <nav aria-label="Primary" className="flex items-center gap-0.5 lg:gap-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={linkBase}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="btn-gold ml-2 inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold lg:ml-3"
          >
            Call
          </a>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-[#e8e4dc] bg-[#f8f5ef]/98 backdrop-blur-xl md:hidden ${open ? "block shadow-lg" : "hidden"}`}
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-0.5 px-4 py-4 sm:px-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="rounded-lg px-4 py-3 text-base font-medium text-[#1f1b16] transition hover:bg-black/[0.04] hover:text-[#b88a2a]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${siteConfig.phoneTel}`}
            onClick={close}
            className="btn-gold mt-3 inline-flex items-center justify-center rounded-xl px-4 py-3 text-center text-base font-semibold"
          >
            Call {siteConfig.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
