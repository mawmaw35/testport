'use client';

import Image from 'next/image';
import { PortfolioItem } from '@/types/portfolio';

interface GalleryGridProps {
  items: PortfolioItem[];
  onItemClick: (item: PortfolioItem) => void;
}

export default function GalleryGrid({ items, onItemClick }: GalleryGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-text-secondary text-lg">
          No items found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="break-inside-avoid group cursor-pointer"
          onClick={() => onItemClick(item)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onItemClick(item);
            }
          }}
          aria-label={`View ${item.title}`}
        >
          <div className="relative overflow-hidden rounded-lg bg-surface-elevated shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative aspect-[4/3]">
              <Image
                src={item.thumbnailUrl || item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {item.tags?.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-surface text-text-tertiary text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {item.metadata.client && (
                <p className="mt-2 text-sm text-text-secondary">
                  {item.metadata.client}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
