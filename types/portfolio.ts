export type PortfolioCategory = 
  | 'web-design'
  | 'branding'
  | 'mobile-app'
  | 'illustration'
  | 'photography'
  | 'ui-ux';

export interface PortfolioMetadata {
  client?: string;
  year: number;
  technologies?: string[];
  role?: string;
  duration?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  imageUrl: string;
  thumbnailUrl?: string;
  featured: boolean;
  metadata: PortfolioMetadata;
  tags?: string[];
  externalUrl?: string;
  caseStudyUrl?: string;
}

export interface PortfolioCategoryInfo {
  id: PortfolioCategory;
  name: string;
  description: string;
}
