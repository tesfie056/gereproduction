import { BrandLogo } from "@/components/BrandLogo";
import { ContactForm } from "@/components/ContactForm";
import { HeroSlider } from "@/components/HeroSlider";
import { ProjectGallery } from "@/components/ProjectGallery";
import { SiteHeader } from "@/components/SiteHeader";
import { gallerySlides } from "@/lib/gallery-items";
import { heroSlides } from "@/lib/hero-slides";
import { siteConfig } from "@/lib/site-config";

const services = [
  "Remodeling",
  "Flooring",
  "Drywall",
  "Painting",
  "Roofing",
  "Concrete",
  "Decks",
  "General repairs",
];

const reasons = [
  {
    title: "Licensed & experienced",
    text: "Years of hands-on experience with residential projects, done safely and to code.",
  },
  {
    title: "Quality workmanship",
    text: "Clean job sites, careful detail work, and finishes built to hold up to everyday life.",
  },
  {
    title: "Honest pricing",
    text: "Straightforward estimates so you know what to expect before work begins.",
  },
  {
    title: "Local service",
    text: `Proud to serve ${siteConfig.serviceArea.toLowerCase()} with responsive communication.`,
  },
  {
    title: "Free estimates",
    text: "Tell us about your project—we’ll outline options and next steps at no obligation.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HeroSlider slides={heroSlides} />

      <main className="flex-1">
        {/* About */}
        <section
          id="about"
          className="border-b border-[#e8e4dc] bg-[#f8f5ef] py-16 sm:py-24"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                id="about-heading"
                className="text-3xl font-bold tracking-tight text-[#1f1b16] sm:text-4xl"
              >
                Owner-operated. Person-to-person.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#5c534a]">
                This is a small, owner-operated construction business: you work directly with the
                person overseeing your project from estimate to walkthrough. We focus on showing up
                when we say we will, respecting your home, and explaining choices in plain
                language—so you never feel left guessing.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#5c534a]">
                Whether it is a single-room refresh or a larger upgrade, we treat every job with the
                same care we would want at our own place.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="border-b border-[#e8e4dc] bg-[#f7f3ea] py-16 sm:py-24"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="services-heading"
                className="text-3xl font-bold tracking-tight text-[#1f1b16] sm:text-4xl"
              >
                Services
              </h2>
              <p className="mt-4 text-[#5c534a]">
                Residential construction and improvements tailored to your goals and budget.
              </p>
            </div>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((name) => (
                <li key={name}>
                  <div className="card-light card-light-hover flex h-full items-center gap-3 rounded-xl px-5 py-4">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#d4af37]/20 to-[#b88a2a]/25 text-[#b88a2a] shadow-inner"
                      aria-hidden
                    >
                      <CheckIcon />
                    </span>
                    <span className="font-medium text-[#1f1b16]">{name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects / Gallery */}
        <section
          id="gallery"
          className="border-b border-[#e8e4dc] bg-[#f8f5ef] py-16 sm:py-24"
          aria-labelledby="gallery-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="gallery-heading"
                className="text-3xl font-bold tracking-tight text-[#1f1b16] sm:text-4xl"
              >
                Projects
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-[#5c534a] leading-relaxed">
                A closer look at recent transformations — craftsmanship you can see before you invite us to your home.
              </p>
            </div>
            <div className="mt-12">
              <ProjectGallery slides={gallerySlides} />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          id="why-us"
          className="border-b border-[#e8e4dc] bg-[#f7f3ea] py-16 sm:py-24"
          aria-labelledby="why-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              id="why-heading"
              className="text-center text-3xl font-bold tracking-tight text-[#1f1b16] sm:text-4xl"
            >
              Why choose us
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r) => (
                <article key={r.title} className="card-light rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-[#b88a2a]">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-[#5c534a]">{r.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-[#f8f5ef] py-16 sm:py-24"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="contact-heading"
                className="text-3xl font-bold tracking-tight text-[#1f1b16] sm:text-4xl"
              >
                Contact
              </h2>
              <p className="mt-4 text-[#5c534a]">
                Reach out for a free estimate or to discuss your project.
              </p>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
              <div className="card-light space-y-8 rounded-2xl p-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#b88a2a]">
                    Phone
                  </h3>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="mt-2 block text-xl font-semibold text-[#1f1b16] transition hover:text-[#b88a2a]"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#b88a2a]">
                    Email
                  </h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 block text-lg text-[#5c534a] underline-offset-4 transition hover:text-[#b88a2a] hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#b88a2a]">
                    Service area
                  </h3>
                  <p className="mt-2 text-lg text-[#5c534a]">{siteConfig.serviceArea}</p>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e8e4dc] bg-[#f7f3ea] py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <BrandLogo variant="footer" />
          <p className="text-sm font-medium tracking-wide text-[#5c534a]">{siteConfig.serviceArea}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#5c534a]">
            <a href={`tel:${siteConfig.phoneTel}`} className="transition hover:text-[#b88a2a]">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[#b88a2a]">
              {siteConfig.email}
            </a>
          </div>
          <p className="text-sm font-semibold tracking-[0.14em] text-[#1f1b16]">
            © {new Date().getFullYear()} GERE PRODUCTION
          </p>
        </div>
      </footer>
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
