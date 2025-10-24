'use client';

import { useState, useMemo } from 'react';
import { portfolioItems, portfolioCategories } from '@/data/portfolio';
import { PortfolioCategory, PortfolioItem } from '@/types/portfolio';
import GalleryFilters from '@/components/gallery/GalleryFilters';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import Lightbox from '@/components/gallery/Lightbox';
import { PageContainer, Section } from '@/components/layout';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    PortfolioCategory | 'all'
  >('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const currentIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    }
  };

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < filteredItems.length - 1;

  return (
    <PageContainer>
      <Section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-text-primary">
              Portfolio
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl">
              Explore our collection of design work across web design, branding,
              mobile apps, and more. Each project represents a unique challenge
              and creative solution.
            </p>
          </div>

          <GalleryFilters
            categories={portfolioCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <GalleryGrid items={filteredItems} onItemClick={handleItemClick} />

          {selectedItem && (
            <Lightbox
              item={selectedItem}
              isOpen={isLightboxOpen}
              onClose={handleCloseLightbox}
              onNext={handleNext}
              onPrevious={handlePrevious}
              hasPrevious={hasPrevious}
              hasNext={hasNext}
            />
          )}
        </div>
      </Section>
    </PageContainer>
  );
}
