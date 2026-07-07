import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col border border-border bg-background p-8">
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="mt-6 flex-1 text-sm leading-relaxed text-muted">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-6 border-t border-border pt-6">
        <cite className="not-italic">
          <span className="font-medium">{testimonial.name}</span>
          <span className="text-muted"> — {testimonial.location}</span>
        </cite>
      </footer>
    </blockquote>
  );
}
