import Image from "next/image";
import { Button } from "./Button";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
}

export function Hero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${compact ? "py-12" : "py-0"}`}>
      <div className={`grid lg:grid-cols-2 ${compact ? "gap-8" : ""}`}>
        <div
          className={`flex flex-col justify-center px-4 lg:px-5 ${
            compact ? "py-0" : "py-10 lg:py-14"
          }`}
        >
          <div className="mx-auto w-full lg:mx-0">
            {eyebrow && (
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {eyebrow}
              </p>
            )}
            <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {primaryCta && (
                  <Button href={primaryCta.href}>{primaryCta.label}</Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="outline">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className={`relative ${compact ? "h-64" : "h-72 lg:h-auto"} min-h-[280px]`}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
