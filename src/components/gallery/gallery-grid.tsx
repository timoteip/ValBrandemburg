"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "radix-ui";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { PlaceholderPanel } from "@/components/common/placeholder-panel";
import { galleryCategories, galleryItems, type GalleryItem } from "@/content/gallery";
import { cn } from "@/lib/utils";

const filters = ["All", ...galleryCategories] as const;
type Filter = (typeof filters)[number];

/**
 * The interactive gallery: category filtering plus a lightbox. A Client
 * Component (see conventions.md) because it owns filter state, the open
 * lightbox, and keyboard navigation. The lightbox is a Radix Dialog, so focus
 * trapping, Escape-to-close, and scroll locking are handled accessibly.
 *
 * Tiles currently render the shared placeholder panel; once real project photos
 * replace the placeholders in the content layer, they render as next/image with
 * no change here.
 */
export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible =
    filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);
  const current = openIndex !== null ? visible[openIndex] : null;

  const step = (delta: number) =>
    setOpenIndex((i) => (i === null ? i : (i + delta + visible.length) % visible.length));

  return (
    <div>
      {/* Category filter */}
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {filters.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            aria-pressed={filter === option}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === option
                ? "border-gold-strong bg-gold-strong text-white"
                : "border-border/60 bg-card hover:border-gold-strong/40",
            )}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Grid */}
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="focus-visible:ring-ring group block w-full rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Tile
                item={item}
                className="transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="sr-only">View {item.image.alt}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      <Dialog.Root
        open={openIndex !== null}
        onOpenChange={(open) => {
          if (!open) setOpenIndex(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
          <Dialog.Content
            aria-describedby={undefined}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") step(-1);
              if (e.key === "ArrowRight") step(1);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 focus:outline-none sm:p-8"
          >
            {current && (
              <div className="relative w-full max-w-3xl">
                <Dialog.Title className="sr-only">{current.image.alt}</Dialog.Title>

                <Tile item={current} className="w-full" priority />

                <p className="mt-4 text-center text-sm text-white/85">
                  <span className="text-gold font-medium">{current.category}</span>
                  <span className="mx-2 text-white/40">—</span>
                  {current.image.alt}
                </p>

                {visible.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => step(-1)}
                      aria-label="Previous project"
                      className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:-left-14"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      aria-label="Next project"
                      className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:-right-14"
                    >
                      <ChevronRight className="size-6" />
                    </button>
                  </>
                )}

                <Dialog.Close
                  aria-label="Close"
                  className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:-top-2 sm:-right-14"
                >
                  <X className="size-6" />
                </Dialog.Close>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

function Tile({
  item,
  className,
  priority = false,
}: {
  item: GalleryItem;
  className?: string;
  priority?: boolean;
}) {
  if (item.image.placeholder) {
    return (
      <PlaceholderPanel
        label={item.image.alt}
        className={cn("aspect-[4/3] w-full rounded-xl", className)}
      >
        <span className="text-gold-strong/80 text-sm font-medium tracking-[0.15em] uppercase">
          {item.category}
        </span>
      </PlaceholderPanel>
    );
  }

  return (
    <div className={cn("relative aspect-[4/3] w-full overflow-hidden rounded-xl", className)}>
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
    </div>
  );
}
