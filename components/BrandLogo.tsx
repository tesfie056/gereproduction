import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const LOGO_SRC = "/logo.png";

type BrandLogoProps = {
  /** Navbar: compact. Hero: larger, crisp scaling. */
  variant?: "nav" | "hero" | "footer";
  priority?: boolean;
};

/**
 * Gold-on-white official mark — uses intrinsic aspect ratio (no stretching).
 */
export function BrandLogo({ variant = "nav", priority }: BrandLogoProps) {
  const isHero = variant === "hero";
  const isFooter = variant === "footer";

  const shell =
    "inline-flex shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_0_0_1px_rgba(212,175,55,0.25)] ring-1 ring-white";

  const heroGlow =
    "relative before:pointer-events-none before:absolute before:inset-[-28px] before:rounded-[2rem] before:bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.35)_0%,transparent_68%)] before:blur-2xl before:content-['']";

  if (isHero) {
    return (
      <div className={`mx-auto ${heroGlow}`}>
        <span className={`${shell} relative px-4 py-3 sm:px-5 sm:py-4`}>
          <Image
            src={LOGO_SRC}
            alt={`${siteConfig.companyName} logo`}
            width={320}
            height={115}
            priority={priority}
            className="h-auto w-[min(100%,280px)] max-w-[92vw] object-contain sm:w-[min(100%,320px)]"
            sizes="(max-width: 640px) 92vw, 320px"
          />
        </span>
      </div>
    );
  }

  const compact =
    variant === "nav"
      ? "rounded-lg px-1.5 py-1 sm:rounded-xl sm:px-2 sm:py-1.5"
      : "rounded-xl px-2 py-1.5 sm:px-3 sm:py-2";

  return (
    <span className={`${shell} ${compact}`}>
      <Image
        src={LOGO_SRC}
        alt={`${siteConfig.companyName} logo`}
        width={200}
        height={72}
        priority={priority}
        className={
          isFooter
            ? "h-auto max-h-14 w-auto object-contain sm:max-h-16"
            : "h-8 w-auto object-contain sm:h-10"
        }
        sizes={isFooter ? "(max-width: 640px) 160px, 200px" : "(max-width: 640px) 120px, 160px"}
      />
    </span>
  );
}
