import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <div key={image.src} className="group relative aspect-[4/3] overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/20" />
          <span className="absolute bottom-4 left-4 bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-wider">
            {image.category}
          </span>
        </div>
      ))}
    </div>
  );
}
