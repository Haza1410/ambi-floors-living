import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata, contact } from "@/lib/site";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Carpets",
  description: pageMetadata.carpets.description,
  openGraph: {
    title: pageMetadata.carpets.title,
    description: pageMetadata.carpets.description,
  },
};

const carpetBenefits = [
  "Unmatched comfort and warmth underfoot",
  "Excellent sound insulation for quieter rooms",
  "Huge range of colours, textures, and pile heights",
  "Suitable for bedrooms, living rooms, stairs, and landings",
  "Professional fitting for a perfect, long-lasting finish",
];

const roomGuide = [
  {
    room: "Bedrooms",
    advice:
      "Plush, deep-pile carpets create a cosy, luxurious feel. Consider softer textures in neutral tones for a calming retreat.",
  },
  {
    room: "Living rooms",
    advice:
      "Durable twist or loop pile carpets handle daily foot traffic while adding warmth and style to your main living space.",
  },
  {
    room: "Stairs & landings",
    advice:
      "Hard-wearing carpet with good grip is essential for safety. We'll help you choose the right weight and construction.",
  },
];

export default function CarpetsPage() {
  return (
    <>
      <Hero
        eyebrow="Carpets"
        title="Soft, stylish carpets for every room"
        description="From luxurious deep-pile bedroom carpets to durable options for stairs and living areas — explore our range and let our experts help you find the perfect match."
        image="/images/gallery/stair-runner-herringbone.jpg"
        imageAlt="Herringbone stair runner fitted by Ambi Floors & Living"
        primaryCta={{ label: "Visit Our Showroom", href: "/contact" }}
        secondaryCta={{ label: "Request a Free Quote", href: "/contact" }}
        phoneCta={{ label: `Call ${contact.phone}`, href: contact.phoneHref }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80"
                alt="Bedroom with soft grey fitted carpet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Why carpet"
                title="Comfort, warmth, and timeless style"
                description="Carpet remains one of the most popular flooring choices for good reason. It adds warmth, reduces noise, and creates a welcoming atmosphere in any room. At Ambi Floors & Living, we stock a wide selection of quality carpets to suit every taste and budget."
              />
              <ul className="mt-8 space-y-3">
                {carpetBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="Room guide"
            title="Choosing the right carpet for each space"
            align="center"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {roomGuide.map((item) => (
              <div key={item.room} className="border border-border bg-background p-8">
                <h3 className="font-serif text-xl font-medium">{item.room}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.advice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-3xl px-4 text-center lg:px-5">
          <SectionHeading
            eyebrow="Professional fitting"
            title="Expert carpet fitting included"
            description="Our skilled fitters ensure your new carpet is laid perfectly — with attention to seams, edges, and doorways. We take care of the details so you can simply enjoy your beautiful new floor."
            align="center"
          />
        </div>
      </section>

      <CTABanner
        title="Find your perfect carpet"
        description="Visit our showroom to see and feel our range, or call us to discuss your requirements and arrange a free quote."
      />
    </>
  );
}
