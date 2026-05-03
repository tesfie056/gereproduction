import type { GallerySlide } from "@/lib/gallery-items";

/**
 * Full-screen hero slider — uses assets under /public/projects/.
 * Add a video slide with `type: "video"` and `src: "/projects/your.mp4"` when ready.
 */
export const heroSlides: GallerySlide[] = [
  {
    type: "image",
    src: "/projects/kitchen-before-after.png",
    alt: "Before and after — garage converted into a luxury modern kitchen with gold pendant lighting",
  },
  {
    type: "image",
    src: "/projects/basement-before-after.png",
    alt: "Before and after — unfinished basement finished as a premium living room with fireplace and built-ins",
  },
  {
    type: "image",
    src: "/projects/bathroom-before-after.png",
    alt: "Before and after — dated bathroom transformed into a bright modern bath with grey vanity and glass shower",
  },
  {
    type: "image",
    src: "/projects/kitchen-remodel-before-after.png",
    alt: "Before and after — dated kitchen remodeled into a bright space with white shaker cabinets, island, and brass lighting",
  },
];
