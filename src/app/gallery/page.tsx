import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTABanner } from "@/components/CTABanner";
import { galleryImages, pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: pageMetadata.gallery.description,
  openGraph: {
    title: pageMetadata.gallery.title,
    description: pageMetadata.gallery.description,
  },
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Gallery"
        title="Inspiration for your next project"
        description="Browse our gallery of flooring, carpets, and furniture installations. Visit our showroom to see our full range and discuss your own project."
        image="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200&q=80"
        imageAlt="Flooring gallery inspiration"
        primaryCta={{ label: "Visit Our Showroom", href: "/contact" }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <p className="mb-8 text-center text-sm text-muted">
            Images shown are representative examples. Visit our showroom to see our
            current ranges and discuss your project.
          </p>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <CTABanner
        title="Ready to start your project?"
        description="Bring your inspiration to life — visit our showroom or call us for expert advice and a free quote."
      />
    </>
  );
}
