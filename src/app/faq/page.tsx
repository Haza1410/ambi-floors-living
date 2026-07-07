import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { faqs, pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description: pageMetadata.faq.description,
  openGraph: {
    title: pageMetadata.faq.title,
    description: pageMetadata.faq.description,
  },
};

export default function FAQPage() {
  return (
    <>
      <Hero
        eyebrow="FAQs"
        title="Frequently asked questions"
        description="Got a question about our products, fitting services, or showroom? Find answers below — or get in touch and we'll be happy to help."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
        imageAlt="Flooring showroom"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-3xl px-4 lg:px-5">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner
        title="Still have questions?"
        description="Our friendly team is here to help. Call us, email us, or visit our showroom for personalised advice."
      />
    </>
  );
}
