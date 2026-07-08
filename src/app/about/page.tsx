import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTABanner } from "@/components/CTABanner";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: pageMetadata.about.description,
  openGraph: {
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
  },
};

const whyChooseUs = [
  {
    title: "Independent & Local",
    description:
      "We're a proud independent retailer rooted in Great Barr, Birmingham — not a faceless chain. Every customer matters to us.",
    icon: "heart" as const,
  },
  {
    title: "Quality Products",
    description:
      "We source carpets, flooring, and furniture that combine comfort, durability, and modern design — at prices that make sense.",
    icon: "lightbulb" as const,
  },
  {
    title: "Personalised Guidance",
    description:
      "Our team listens to your needs, offers honest recommendations, and helps you find the perfect match for your style and budget.",
    icon: "badge-pound" as const,
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us"
        title="A local, independent flooring & furniture showroom"
        description="Ambi Floors & Living is a family-run showroom in Great Barr, helping homeowners and businesses across Birmingham choose carpets, flooring, rugs and furniture — with honest advice and no pressure to buy."
        image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80"
        imageAlt="Ambi Floors & Living showroom"
        primaryCta={{ label: "Visit Our Showroom", href: "/contact" }}
        secondaryCta={{ label: "Request a Free Quote", href: "/contact" }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Our story"
              title="Helping you create spaces that feel like home"
              description="Based at 610 Walsall Road in Great Barr, we've built our reputation on three things: expert product knowledge, genuinely friendly service, and competitive pricing. Whether you're fitting a new carpet in the bedroom, laying LVT in the kitchen, or furnishing your living room, we're here to make the process simple and enjoyable."
              align="center"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="Why Ambi"
            title="What sets us apart"
            align="center"
          />
          <div className="mt-12">
            <FeatureGrid features={whyChooseUs} />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our expertise"
                title="Flooring specialists you can rely on"
                description="From luxury vinyl tile and laminate to plush carpets and vinyl sheet, our team understands the practical and aesthetic demands of every room. We offer a full supply-and-fit service, so you get quality products installed by experienced professionals."
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Beyond flooring"
                title="Furniture to complete the look"
                description="Our showroom doesn't stop at floors. Browse stylish beds, dining sets, sofas, and rugs to pull your room together — all with the same expert advice and competitive pricing you expect from us."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-12 text-background">
        <div className="mx-auto w-full max-w-3xl px-4 text-center lg:px-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-background/60">
            Visit us today
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium sm:text-4xl">
            We&apos;d love to welcome you to our showroom
          </h2>
          <p className="mt-4 text-background/70">
            Browse at your leisure, ask us anything, and leave with confidence in your choices.
            No pressure, no hard sell — just honest, helpful guidance.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
