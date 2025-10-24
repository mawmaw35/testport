'use client';

import { PortfolioCategoryInfo, PortfolioCategory } from '@/types/portfolio';

interface GalleryFiltersProps {
  categories: PortfolioCategoryInfo[];
  selectedCategory: PortfolioCategory | 'all';
  onCategoryChange: (category: PortfolioCategory | 'all') => void;
}

export default function GalleryFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: GalleryFiltersProps) {
  return (
    <div
      className="flex flex-wrap gap-3 mb-12"
      role="group"
      aria-label="Filter portfolio by category"
    >
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          selectedCategory === 'all'
            ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/25'
            : 'bg-surface-elevated text-text-secondary hover:bg-border hover:text-text-primary'
        }`}
        aria-pressed={selectedCategory === 'all'}
      >
        All Work
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            selectedCategory === category.id
              ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/25'
              : 'bg-surface-elevated text-text-secondary hover:bg-border hover:text-text-primary'
          }`}
          aria-pressed={selectedCategory === category.id}
          title={category.description}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
