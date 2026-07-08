import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryCard } from "@/components/CategoryCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TrustStrip } from "@/components/TrustStrip";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ShowroomVisit } from "@/components/ShowroomVisit";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/Button";
import {
  categories,
  testimonials,
  localTrust,
  fittingSteps,
  contact,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Great Barr, Birmingham"
        title="Choose your flooring with expert help — in person"
        description="An independent flooring and furniture showroom in Great Barr. Come and compare carpets, LVT, laminate and vinyl in person, take samples home, and let our team help you get it right — supply and fitting included."
        image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80"
        imageAlt="Warm living room with wood-effect flooring"
        primaryCta={{ label: "Visit Our Showroom", href: "/contact" }}
        secondaryCta={{ label: "Request a Free Quote", href: "/contact" }}
        phoneCta={{ label: `Call ${contact.phone}`, href: contact.phoneHref }}
        badges={[
          "Great Barr showroom",
          "Birmingham & West Midlands",
          "Supply + fitting available",
        ]}
        floatingCard={{
          title: "Free advice",
          text: "Bring your room measurements and we'll help you choose — no appointment needed.",
        }}
      />

      <section className="border-b border-border py-12 lg:py-14">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <TrustStrip items={localTrust} />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Our ranges"
              title="Have a browse — everything's under one roof"
              description="Flooring, carpets and furniture, all in one Great Barr showroom. Take your time, feel the difference, and ask us anything."
            />
            <Button href="/gallery" variant="outline">
              See the gallery
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.href} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="texture-warm bg-surface py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="How it works"
            title="From showroom to finished room"
            description="Buying flooring shouldn't be complicated. Here's how it works when you buy with fitting from us — simple, clear, and handled by a local team."
            align="center"
          />
          <div className="mt-12">
            <ProcessSteps steps={fittingSteps} />
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/flooring">Explore Our Flooring</Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What local customers say"
              title="Trusted by homeowners across Birmingham"
            />
            <Button href="/testimonials" variant="outline">
              Read all reviews
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <ShowroomVisit />

      <CTABanner />
    </>
  );
}
