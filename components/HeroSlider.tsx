"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GallerySlide } from "@/lib/gallery-items";
import { siteConfig } from "@/lib/site-config";

const AUTO_MS = 6500;

interface HeroSliderProps {
  slides: GallerySlide[];
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = useCallback(
    (delta: number) => {
      if (count === 0) return;
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (count <= 1) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [count, go]);

  if (count === 0) {
    return (
      <section
        className="relative flex h-[100dvh] min-h-[520px] w-full items-center justify-center bg-[#2a241c]"
        aria-label="Featured projects"
      >
        <p className="text-white/70">Add slides in lib/hero-slides.ts</p>
      </section>
    );
  }

  return (
    <section
      id="top"
      className="relative h-[100dvh] min-h-[520px] w-full overflow-hidden bg-[#1f1b16]"
      aria-label="Featured projects"
    >
      {slides.map((slide, i) => (
        <div
          key={`hero-slide-${i}`}
          className={`absolute inset-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            i === index ? "z-[1] opacity-100" : "z-0 opacity-0 pointer-events-none"
          }`}
          aria-hidden={i !== index}
        >
          <SlideMedia slide={slide} active={i === index} priority={i === 0} />
        </div>
      ))}

      {/* Readable overlay — dark bottom, lighter top (logo-style contrast) */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#1f1b16]/92 via-[#1f1b16]/45 to-[#1f1b16]/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-black/35 via-transparent to-black/35"
        aria-hidden
      />

      <div className="absolute inset-0 z-[3] flex flex-col items-center justify-center px-4 pb-28 pt-[calc(5.5rem+env(safe-area-inset-top))] text-center sm:pb-32 sm:pt-28 md:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#d4af37] drop-shadow-sm sm:text-sm">
          {siteConfig.companyName}
        </p>
        <h1 className="mt-5 max-w-4xl text-balance font-bold leading-tight tracking-tight text-[#f8f5ef] drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
          Built right.{" "}
          <span className="bg-gradient-to-r from-[#f2e6c3] via-[#d4af37] to-[#c9a227] bg-clip-text text-transparent">
            On schedule.
          </span>{" "}
          With pride.
        </h1>
        <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="btn-gold inline-flex min-h-12 items-center justify-center rounded-xl px-10 text-base font-semibold"
          >
            Call Now
          </a>
          <a
            href="#contact"
            className="btn-hero-outline inline-flex min-h-12 items-center justify-center rounded-xl px-10 text-base font-semibold"
          >
            Request Free Estimate
          </a>
        </div>
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 z-[4] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition hover:border-[#d4af37]/55 hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] sm:left-6 sm:h-14 sm:w-14"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 z-[4] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition hover:border-[#d4af37]/55 hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] sm:right-6 sm:h-14 sm:w-14"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </>
      ) : null}

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-[4] flex -translate-x-1/2 flex-col items-center gap-1 text-[#f8f5ef]/85 transition hover:text-[#d4af37]"
        aria-label="Scroll to About"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Explore</span>
        <span className="animate-bounce rounded-full border border-white/30 bg-black/20 p-2 backdrop-blur-sm">
          <ChevronDown />
        </span>
      </a>
    </section>
  );
}

function SlideMedia({
  slide,
  active,
  priority,
}: {
  slide: GallerySlide;
  active: boolean;
  priority?: boolean;
}) {
  if (slide.type === "image") {
    return (
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={priority}
        draggable={false}
      />
    );
  }

  if (slide.src?.includes("youtube.com") || slide.src?.includes("youtu.be")) {
    return active ? (
      <iframe
        title={slide.title}
        src={slide.src}
        className="absolute inset-0 h-full w-full scale-[1.02]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ) : (
      <div className="absolute inset-0 bg-[#2a241c]" aria-hidden />
    );
  }

  if (slide.src) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay={active}
        muted
        playsInline
        loop
        preload="metadata"
      >
        <source src={slide.src} />
      </video>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a241c] to-[#1f1b16]">
      <p className="px-6 text-center text-sm text-white/55">{slide.caption ?? slide.title}</p>
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M14 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M10 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 10l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
