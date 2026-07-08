import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";
import { flooringTypes, pageMetadata, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Flooring",
  description: pageMetadata.flooring.description,
  openGraph: {
    title: pageMetadata.flooring.title,
    description: pageMetadata.flooring.description,
  },
};

export default function FlooringPage() {
  return (
    <>
      <Hero
        eyebrow="Flooring"
        title="LVT, laminate & vinyl for every lifestyle"
        description="Hard-wearing, beautiful flooring solutions for kitchens, bathrooms, living rooms, and commercial spaces — supplied and professionally fitted across Birmingham and the West Midlands."
        image="/images/gallery/living-room-wood-floor.jpg"
        imageAlt="Living room with warm wood-effect flooring"
        primaryCta={{ label: "Book a Free Home Measure", href: "/contact" }}
        secondaryCta={{ label: "Visit the Showroom", href: "/contact" }}
        phoneCta={{ label: `Call ${contact.phone}`, href: contact.phoneHref }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="Our ranges"
            title="Find the perfect floor for your space"
            description="Whether you need water-resistant LVT for a busy kitchen, affordable laminate for the living room, or versatile vinyl for a utility space — we have options to suit every taste and budget."
            align="center"
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-screen-2xl space-y-20 px-4 lg:px-5">
          {flooringTypes.map((type, index) => (
            <ProductSection
              key={type.title}
              title={type.title}
              description={type.description}
              features={type.features}
              image={type.image}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto w-full max-w-3xl px-4 text-center lg:px-5">
          <SectionHeading
            eyebrow="Supply & fit"
            title="From showroom to installed — we handle it all"
            description="Our experienced fitters take care of everything, including subfloor preparation where needed. We'll visit your property, provide a free measure and quote, and schedule installation at a time that suits you."
            align="center"
          />
        </div>
      </section>

      <CTABanner
        title="Ready for new flooring?"
        description="Visit our showroom to explore samples, or contact us to arrange a free home measure and quote."
      />
    </>
  );
}
