/**
 * Replace image src values with your own files under /public/projects/.
 * Add or remove entries to change what appears in the Projects slider.
 */
export type GalleryImageSlide = {
  type: "image";
  src: string;
  alt: string;
};

export type GalleryVideoSlide = {
  type: "video";
  /** MP4 under /public/... or YouTube embed URL */
  src?: string;
  title: string;
  caption?: string;
};

export type GallerySlide = GalleryImageSlide | GalleryVideoSlide;

export const gallerySlides: GallerySlide[] = [
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

/*
 * When you have a walkthrough video, append one of these to `gallerySlides`:
 *
 * MP4 in /public/projects/:
 * {
 *   type: "video",
 *   src: "/projects/walkthrough.mp4",
 *   title: "Project walkthrough",
 * },
 *
 * YouTube (use the embed URL):
 * {
 *   type: "video",
 *   src: "https://www.youtube.com/embed/VIDEO_ID",
 *   title: "Project walkthrough",
 * },
 */
