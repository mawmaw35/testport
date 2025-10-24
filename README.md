# Photography Portfolio

A modern photography portfolio website built with Next.js 16 App Router, TypeScript, and Tailwind CSS featuring a sleek dark theme.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **React 19** - UI library
- **Geist Font** - Modern typography

## Features

- 🌙 Dark theme optimized for photography
- 📱 Fully responsive design
- ⚡ Server-side rendering with App Router
- 🎨 Custom Tailwind configuration
- 📝 TypeScript for type safety
- 🔍 SEO-optimized with metadata
- 💅 Prettier and ESLint configured

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with fonts and metadata
├── page.tsx            # Home page
├── globals.css         # Global styles and dark theme
├── about/
│   └── page.tsx        # About page
└── contact/
    └── page.tsx        # Contact page
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Customization

### Colors

Edit the color variables in `app/globals.css` to customize the dark theme:

```css
:root {
  --background: #0a0a0a;
  --foreground: #f5f5f5;
  --accent: #3b82f6;
  --muted: #404040;
  --border: #262626;
}
```

### Typography

The project uses Geist Sans and Geist Mono fonts. You can change fonts in `app/layout.tsx`.

### Metadata

Update site metadata in `app/layout.tsx` for SEO optimization.

## License

MIT
