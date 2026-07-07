import { Button } from "./Button";
import { Container } from "./Container";
import { contact } from "@/lib/site";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export function CTABanner({
  title = "Ready to transform your space?",
  description = "Visit our Great Barr showroom, call for expert advice, or request a free no-obligation quote today.",
}: CTABannerProps) {
  return (
    <section className="bg-surface py-12">
      <Container className="text-center">
        <h2 className="font-serif text-3xl font-medium sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact">Request a Free Quote</Button>
          <Button href="/contact" variant="outline">
            Visit Our Showroom
          </Button>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center justify-center border border-foreground px-6 py-3 text-sm font-medium tracking-wide transition-colors hover:bg-foreground hover:text-background"
          >
            Call {contact.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
