# Gere Production — marketing site

Frontend-only informational site for **Gere Production**, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Brand logo lives in `public/gere-production-logo.png`. Configured for **static export** and **free hosting on Netlify**.

## Run locally

Prerequisites: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build (same command Netlify uses):

```bash
npm run build
```

Static files are written to the `out/` folder.

This project uses **static export**, so `next start` is not supported. After a build, preview the production files locally:

```bash
npm run start
```

That serves the `out/` folder (defaults to [http://localhost:3000](http://localhost:3000)). One-shot build + preview:

```bash
npm run preview
```

## Deploy free on Netlify

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In [Netlify](https://www.netlify.com/), choose **Add new site** → **Import an existing project**, connect the repo.
3. Netlify reads **`netlify.toml`**: build command `npm run build`, publish directory **`out`**.
4. Deploy. Netlify runs the install + build and serves the exported site.

**Site URL / SEO:** In `app/layout.tsx`, update `siteUrl` to your real Netlify URL (or custom domain) so Open Graph and `metadataBase` stay correct.

**Replace project photos:** Add images under `public/projects/` and update `src` strings in `lib/gallery-items.ts`.

**Video slide:** In `lib/gallery-items.ts`, set `src` on the video slide to an MP4 path (e.g. `/projects/walkthrough.mp4`) or a YouTube **embed** URL (`https://www.youtube.com/embed/...`).

## Project structure (high level)

| Path | Purpose |
|------|---------|
| `app/page.tsx` | Homepage sections |
| `app/layout.tsx` | Root layout + SEO metadata |
| `components/ProjectGallery.tsx` | Auto-advancing carousel (client) |
| `components/ContactForm.tsx` | Contact form (submit shows follow-up note) |
| `lib/site-config.ts` | Company name, phone, email, service area |
| `lib/gallery-items.ts` | Slider slides (easy to edit) |
| `netlify.toml` | Netlify build + publish settings |

---

Bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). See [Next.js documentation](https://nextjs.org/docs) for general framework topics.
