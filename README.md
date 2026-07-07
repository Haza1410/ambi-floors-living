# Ambi Floors & Living

Premium brochure website for Ambi Floors & Living — an independent flooring and home interiors retailer in Great Barr, Birmingham.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build for production

```bash
npm run build
npm start
```

## Project structure

- `src/app/` — Page routes (Home, About, Flooring, Carpets, Furniture, Gallery, Testimonials, FAQs, Contact)
- `src/components/` — Reusable UI components
- `src/lib/site.ts` — **Central config** for contact details, navigation, copy, and metadata
- `public/images/` — Logo and static assets

## Updating contact details

Edit `src/lib/site.ts` to update:

- Phone number and email
- Opening hours
- Address
- Site URL (for SEO/sitemap)

## Deploy to GitHub Pages

The site deploys automatically to GitHub Pages on every push to `main`.

**Live site:** [https://haza1410.github.io/ambi-floors-living/](https://haza1410.github.io/ambi-floors-living/)

The GitHub Actions workflow builds a static export and publishes it. To build locally for GitHub Pages:

```bash
npm run export
```

## Deploy to Vercel

1. Push the project to GitHub
2. Import the repository at [vercel.com](https://vercel.com)
3. Deploy — no environment variables required

Or use the Vercel CLI:

```bash
npx vercel
```

## Before going live

- [ ] Confirm phone number, email, and opening hours in `src/lib/site.ts`
- [ ] Update `siteConfig.url` to your real domain
- [ ] Replace gallery stock images with real showroom/installation photos
- [ ] Review placeholder testimonials with real customer quotes
- [ ] Add social media links if applicable

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React icons
