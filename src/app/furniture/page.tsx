import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Furniture",
  description: pageMetadata.furniture.description,
  openGraph: {
    title: pageMetadata.furniture.title,
    description: pageMetadata.furniture.description,
  },
};

const furnitureRanges = [
  {
    title: "Sofas",
    description:
      "Comfortable, stylish sofas in a range of fabrics and configurations. The centrepiece of any living room.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    title: "Beds",
    description:
      "Quality beds and frames to create a restful bedroom. Pair with our carpets and rugs for a complete look.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
  },
  {
    title: "Dining",
    description:
      "Dining tables and chairs to bring family and friends together. Modern and classic styles available.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    title: "Rugs",
    description:
      "Beautiful rugs to add texture, warmth, and personality to any room — the perfect finishing touch.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
  },
];

export default function FurniturePage() {
  return (
    <>
      <Hero
        eyebrow="Furniture"
        title="Furniture to finish off your rooms"
        description="Alongside our floors, the showroom has a handpicked range of beds, dining sets, sofas and rugs — so you can bring the whole room together in one visit."
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
        imageAlt="Stylish home furniture"
        primaryCta={{ label: "Visit Our Showroom", href: "/contact" }}
        phoneCta={{ label: `Call ${contact.phone}`, href: contact.phoneHref }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="Complete the look"
            title="Flooring and furniture, perfectly paired"
            description="New flooring deserves furniture to match. Visit our Great Barr showroom to browse coordinated ranges and get expert advice on creating a cohesive look throughout your home."
            align="center"
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="grid gap-8 sm:grid-cols-2">
            {furnitureRanges.map((item) => (
              <div key={item.title} className="group overflow-hidden border border-border">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto w-full max-w-3xl px-4 text-center lg:px-5">
          <SectionHeading
            eyebrow="Showroom experience"
            title="See it, touch it, take it home"
            description="Our furniture displays are set alongside our flooring ranges so you can visualise how everything works together. Our team is on hand to help you coordinate colours, textures, and styles."
            align="center"
          />
        </div>
      </section>

      <CTABanner
        title="Come and try the furniture in person"
        description="Pop into our Great Barr showroom to see the range, or call us for availability and pricing."
      />
    </>
  );
}
