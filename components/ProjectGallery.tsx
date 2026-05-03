"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GallerySlide } from "@/lib/gallery-items";

const AUTO_MS = 5500;

interface ProjectGalleryProps {
  slides: GallerySlide[];
}

export function ProjectGallery({ slides }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (count <= 1) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [count, go]);

  if (count === 0) return null;

  const slide = slides[index];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#e8e4dc] bg-white shadow-[0_24px_60px_-28px_rgba(31,27,22,0.18),0_0_0_1px_rgba(212,175,55,0.06)]">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl bg-[#f0ebe3]">
        <div key={index} className="absolute inset-0 animate-gallery-fade">
          {slide.type === "image" ? (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 896px"
              priority={index === 0}
            />
          ) : slide.src ? (
            slide.src.includes("youtube.com") || slide.src.includes("youtu.be") ? (
              <iframe
                title={slide.title}
                src={slide.src}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                className="absolute inset-0 h-full w-full object-cover object-center"
                controls
                playsInline
                preload="metadata"
              >
                <source src={slide.src} />
              </video>
            )
          ) : (
            <div className="flex h-full min-h-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#f8f5ef] to-[#f0ebe3] px-8 text-center">
              <div className="rounded-full border border-[#d4af37]/45 bg-white px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#b88a2a] shadow-sm">
                Video placeholder
              </div>
              <p className="max-w-lg text-lg font-medium text-[#1f1b16]">{slide.title}</p>
              {slide.caption ? (
                <p className="max-w-xl text-sm leading-relaxed text-[#5c534a]">{slide.caption}</p>
              ) : null}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-b-3xl border-t border-[#e8e4dc] bg-[#f8f5ef] px-4 py-3 sm:px-5">
        <button
          type="button"
          onClick={() => go(-1)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-[#e8e4dc] bg-white text-[#1f1b16] transition hover:border-[#d4af37]/45 hover:bg-[#fffefb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon />
        </button>

        <div className="flex flex-1 justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ease-out ${
                i === index
                  ? "w-8 bg-gradient-to-r from-[#e4c04d] via-[#d4af37] to-[#b88a2a] shadow-[0_0_12px_rgba(212,175,55,0.35)]"
                  : "w-2.5 bg-[#1f1b16]/18 hover:bg-[#1f1b16]/28"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-[#e8e4dc] bg-white text-[#1f1b16] transition hover:border-[#d4af37]/45 hover:bg-[#fffefb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]"
          aria-label="Next slide"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
