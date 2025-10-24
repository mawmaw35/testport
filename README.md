# Photography Portfolio

A modern, responsive photography portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a hero section with photographer introduction and a featured gallery section with optimized image loading.

## Features

- **Hero Section**: Eye-catching introduction with photographer profile, call-to-action buttons, and dark theme optimized gradient background
- **Featured Gallery**: Responsive grid layout showcasing highlighted photography work with Next.js Image optimization
- **Dark Theme**: Optimized for dark mode with zinc color palette and smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Accessibility**: WCAG compliant with semantic HTML, ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Optimized image loading with Next.js Image component, lazy loading, and proper sizing

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono (via next/font/google)
- **Image Optimization**: Next.js Image component

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── favicon.ico
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Hero.tsx          # Hero section component
│   ├── FeaturedGallery.tsx # Gallery grid component
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer component
├── data/                  # Data models and content
│   └── galleryData.ts    # Gallery items data model
├── public/
│   └── images/           # Static image assets
└── next.config.ts        # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Responsive Breakpoints

- Mobile: < 640px (1 column grid)
- Tablet: 640px - 1024px (2 column grid)
- Desktop: > 1024px (3 column grid)

## Accessibility Features

- Semantic HTML5 elements (section, article, nav, etc.)
- ARIA labels and landmarks
- Keyboard navigation support
- Focus visible states for interactive elements
- Screen reader friendly with sr-only utility classes
- Descriptive alt text for all images
- Sufficient color contrast ratios

## Customization

### Update Gallery Content

Edit `/data/galleryData.ts` to add, remove, or modify gallery items. Each item includes:

- `id`: Unique identifier
- `title`: Image title
- `description`: Image description
- `imageUrl`: Path to image file
- `category`: Category tag
- `featured`: Boolean to show in featured section
- `width` & `height`: Original image dimensions

### Replace Images

Add your images to `/public/images/` and update the `imageUrl` paths in `galleryData.ts`.

### Modify Styling

All styling uses Tailwind CSS utility classes. The color scheme uses the zinc palette:

- Background: `zinc-900`, `zinc-950`
- Text: `zinc-300`, `zinc-400`
- Borders: `zinc-700`, `zinc-800`

## Performance Optimization

- Next.js Image component with automatic format optimization (WebP, AVIF)
- Lazy loading for images below the fold
- Responsive image sizing with srcset
- Optimized font loading with next/font
- Static page generation

## Browser Support

Supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.
