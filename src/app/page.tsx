import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CategoryCard } from "@/components/CategoryCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/Button";
import {
  siteConfig,
  trustPillars,
  categories,
  testimonials,
} from "@/lib/site";
import { Wrench, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Great Barr, Birmingham"
        title="Flooring & interiors that transform every room"
        description="Discover premium carpets, LVT, laminate, vinyl flooring, rugs, and stylish home furniture — with expert advice, professional fitting, and prices you'll love."
        image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80"
        imageAlt="Modern home interior with premium flooring"
        primaryCta={{ label: "Visit Our Showroom", href: "/contact" }}
        secondaryCta={{ label: "Request a Free Quote", href: "/contact" }}
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="Why choose us"
            title="Expert advice, exceptional service, unbeatable value"
            description="As an independent retailer, we take the time to understand your needs and help you find the perfect flooring and furnishings for your home or business."
            align="center"
          />
          <div className="mt-12">
            <FeatureGrid features={trustPillars} />
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="Our ranges"
            title="Everything you need under one roof"
            description="From luxurious carpets to hard-wearing LVT and stylish furniture — browse our collections in store."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.href} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Supply & fit"
                title="Professional fitting you can trust"
                description="We don't just supply beautiful flooring — our experienced fitters deliver a flawless finish in your home or commercial property. From free home measures to final installation, we handle every detail."
              />
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-4">
                  <Wrench className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-medium">Expert installation</p>
                    <p className="text-sm text-muted">
                      Carpets, LVT, laminate, and vinyl fitted to the highest standard.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-medium">Serving the West Midlands</p>
                    <p className="text-sm text-muted">
                      {siteConfig.serviceArea} — showroom visits and home fitting available.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button href="/flooring">Explore Our Flooring</Button>
              </div>
            </div>
            <div className="border border-border bg-surface p-8 lg:p-12">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Our promise
              </p>
              <p className="mt-4 font-serif text-2xl font-medium leading-snug">
                Quality products, honest advice, and fitting you can rely on — every time.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Whether you&apos;re refreshing a single room or transforming your entire home,
                our friendly team is here to guide you from first browse to finished floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Customer reviews"
              title="Trusted by homeowners across Birmingham"
            />
            <Button href="/testimonials" variant="outline">
              Read All Reviews
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 text-center lg:px-5">
          <SectionHeading
            eyebrow="Visit us"
            title="Your local flooring & furniture showroom"
            description="Pop in to browse our full range, feel the quality for yourself, and chat with our team. No appointment needed — just friendly, expert advice when you need it."
            align="center"
          />
          <div className="mt-8">
            <Button href="/contact">Find Us & Get Directions</Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
