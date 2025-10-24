import { PortfolioItem } from '@/types/portfolio';

interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
}

export default function PortfolioCard({ item, className = '' }: PortfolioCardProps) {
  return (
    <article
      className={`bg-surface-elevated border border-border rounded-xl overflow-hidden hover:border-border-hover transition-colors duration-base group ${className}`}
    >
      <div className="aspect-video bg-background relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-text-tertiary">
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-wider text-accent-primary font-medium">
            {item.category.replace('-', ' ')}
          </span>
          <span className="text-sm text-text-tertiary">
            {item.metadata.year}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-text-primary group-hover:text-accent-primary transition-colors duration-base">
          {item.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {item.metadata.client && (
          <p className="text-xs text-text-tertiary mb-4">
            Client: {item.metadata.client}
          </p>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-background text-text-secondary rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
