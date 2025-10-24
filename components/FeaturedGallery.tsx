import Image from "next/image";
import { getFeaturedItems, type GalleryItem } from "@/data/galleryData";

export default function FeaturedGallery() {
  const featuredItems = getFeaturedItems();

  return (
    <section
      id="gallery"
      className="py-16 sm:py-20 md:py-24 bg-zinc-950"
      aria-labelledby="gallery-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Featured Work
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            A curated selection of my finest captures, showcasing diverse styles and subjects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article
      className="group relative overflow-hidden rounded-lg bg-zinc-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] focus-within:ring-4 focus-within:ring-zinc-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950"
      role="article"
      aria-label={`Gallery item: ${item.title}`}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-zinc-800">
        <Image
          src={item.imageUrl}
          alt={item.description}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={false}
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span
            className="inline-block px-3 py-1 text-xs font-semibold text-white bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700"
            aria-label={`Category: ${item.category}`}
          >
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 group-hover:text-zinc-300 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          {item.description}
        </p>
      </div>

      <a
        href={`/gallery/${item.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View details for ${item.title}`}
      >
        <span className="sr-only">View details for {item.title}</span>
      </a>
    </article>
  );
}
