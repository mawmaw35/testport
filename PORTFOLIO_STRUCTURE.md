# Portfolio Structure Documentation

## Overview

This document describes the portfolio data structure, shared layout components, and design system used throughout the application.

## Data Structure

### Portfolio Types (`types/portfolio.ts`)

#### PortfolioCategory
Available categories for portfolio items:
- `web-design` - Responsive websites and web applications
- `branding` - Brand identity and visual systems
- `mobile-app` - Native and cross-platform mobile applications
- `illustration` - Digital and editorial illustrations
- `photography` - Product and lifestyle photography
- `ui-ux` - User interface and experience design

#### PortfolioMetadata
Additional information about each portfolio item:
```typescript
{
  client?: string;         // Client name
  year: number;           // Year of completion
  technologies?: string[]; // Tech stack used
  role?: string;          // Your role in the project
  duration?: string;      // Project duration
}
```

#### PortfolioItem
Complete structure for a portfolio item:
```typescript
{
  id: string;                      // Unique identifier
  title: string;                   // Project title
  description: string;             // Project description
  category: PortfolioCategory;     // Project category
  imageUrl: string;                // Main image URL
  thumbnailUrl?: string;           // Optional thumbnail URL
  featured: boolean;               // Featured on homepage?
  metadata: PortfolioMetadata;     // Project metadata
  tags?: string[];                 // Project tags
  externalUrl?: string;            // Live project URL
  caseStudyUrl?: string;           // Case study page URL
}
```

### Portfolio Data (`data/portfolio.ts`)

Sample portfolio items are provided with:
- 8 diverse portfolio items across different categories
- 4 featured items (displayed on homepage)
- Helper functions for data access:
  - `getFeaturedItems()` - Returns featured portfolio items
  - `getItemsByCategory(category)` - Returns items by category
  - `getItemById(id)` - Returns a specific item by ID

### Adding New Portfolio Items

1. Add image files to `/public/images/portfolio/`
2. Add thumbnail images to `/public/images/portfolio/thumbnails/`
3. Add new item to `portfolioItems` array in `data/portfolio.ts`
4. Set `featured: true` to display on homepage

## Layout Components

### Navigation (`components/layout/Navigation.tsx`)
- Fixed header with logo and navigation links
- Responsive with mobile menu toggle
- Dark theme styling with backdrop blur
- Smooth color transitions

### MobileMenu (`components/layout/MobileMenu.tsx`)
- Full-screen mobile navigation
- Backdrop overlay with blur effect
- Body scroll lock when open
- Touch-optimized interaction

### Footer (`components/layout/Footer.tsx`)
- Three-column layout (responsive)
- Quick links and social media icons
- Copyright and legal links
- Consistent spacing and typography

### PageContainer (`components/layout/PageContainer.tsx`)
- Responsive container with padding
- Configurable max-width options:
  - `sm` (640px)
  - `md` (768px)
  - `lg` (1024px)
  - `xl` (1280px) - default
  - `2xl` (1536px)
  - `full` (no max-width)

### Section (`components/layout/Section.tsx`)
- Consistent vertical spacing
- Responsive padding options:
  - `sm` - 8/12 (mobile/desktop)
  - `md` - 12/16 (mobile/desktop) - default
  - `lg` - 16/24 (mobile/desktop)
  - `xl` - 24/32 (mobile/desktop)

## Design System

### Design Tokens (`styles/tokens.css`)

#### Colors (Dark Theme)
- Background colors: `--color-background`, `--color-surface`, `--color-surface-elevated`
- Border colors: `--color-border`, `--color-border-hover`
- Text colors: `--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary`
- Accent colors: `--color-accent-primary`, `--color-accent-primary-hover`, `--color-accent-secondary`

#### Typography Scale
- Font sizes: `xs` (12px) to `6xl` (60px)
- Font weights: `normal`, `medium`, `semibold`, `bold`
- Line heights: `tight`, `normal`, `relaxed`

#### Spacing Scale
- Range: `--spacing-1` (4px) to `--spacing-24` (96px)
- Consistent increments for layout harmony

#### Border Radius
- Options: `sm`, `md`, `lg`, `xl`, `2xl`, `full`

#### Shadows
- Elevation levels: `sm`, `md`, `lg`, `xl`
- Dark theme optimized

#### Z-Index Scale
- Layering system for overlays and modals
- Range: `dropdown` (1000) to `tooltip` (1070)

#### Transitions
- Speed options: `fast` (150ms), `base` (250ms), `slow` (350ms)
- Consistent easing function

### Using Design Tokens

In CSS/Tailwind classes:
```css
.element {
  background: var(--color-surface);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  transition: var(--transition-base);
}
```

In Tailwind (custom classes defined in globals.css):
```jsx
<div className="bg-surface text-text-primary p-4 rounded-md">
  Content
</div>
```

## Global Styles

### Typography
- Headings: Automatic sizing and spacing
- Body text: 16px base, 1.5 line-height
- Responsive heading sizes for mobile/desktop

### Layout
- Flexbox-based layout with sticky footer
- Main content area with top padding for fixed nav
- Smooth scroll behavior

## Best Practices

1. **Consistent Spacing**: Use spacing tokens instead of arbitrary values
2. **Component Composition**: Wrap content in PageContainer > Section for consistency
3. **Responsive Design**: Test all breakpoints (mobile, tablet, desktop)
4. **Accessibility**: Include proper ARIA labels and semantic HTML
5. **Performance**: Optimize images and use lazy loading where appropriate
6. **Dark Theme**: All components styled for dark mode by default

## Example Usage

```jsx
import { PageContainer, Section } from '@/components/layout';
import { portfolioItems } from '@/data/portfolio';

export default function PortfolioPage() {
  return (
    <Section spacing="lg">
      <PageContainer maxWidth="xl">
        <h1 className="text-4xl font-bold mb-8 text-text-primary">
          My Work
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item) => (
            <article key={item.id} className="bg-surface p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-text-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
```
