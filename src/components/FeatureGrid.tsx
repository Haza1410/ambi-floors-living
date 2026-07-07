import { Lightbulb, Heart, BadgePoundSterling, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  heart: Heart,
  "badge-pound": BadgePoundSterling,
};

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <div
      className={`grid gap-8 ${
        columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {features.map((feature) => {
        const Icon = iconMap[feature.icon] ?? Lightbulb;
        return (
          <div key={feature.title} className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center border border-border">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl font-medium">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}
