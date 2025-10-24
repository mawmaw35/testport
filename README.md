# Portfolio Website

A modern, responsive portfolio website with dark theme aesthetics built with React, TypeScript, and Tailwind CSS.

## Features

### About Page
- Hero section with compelling introduction
- Bio section with personal background and supporting imagery
- Approach section highlighting work methodology
- Client highlights with testimonials and statistics

### Contact Page
- Validated contact form with name, email, and message fields
- Client-side validation with error messages
- Placeholder success state after form submission
- Contact information sidebar
- Social media links
- Response time indicator

### Design
- Dark theme aesthetics throughout
- Fully responsive design for all screen sizes
- Reusable layout components and shared styles
- Smooth transitions and hover effects
- Professional typography and spacing

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── about/
│   │   ├── Hero.tsx
│   │   ├── Bio.tsx
│   │   ├── Approach.tsx
│   │   └── ClientHighlights.tsx
│   └── contact/
│       ├── ContactForm.tsx
│       └── ContactInfo.tsx
├── layouts/
│   └── Layout.tsx
├── pages/
│   ├── About.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Form Validation

The contact form includes comprehensive client-side validation:

- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Message**: Required, minimum 10 characters

## Customization

### Colors

The dark theme colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  dark: {
    bg: '#0a0a0a',
    surface: '#1a1a1a',
    border: '#2a2a2a',
    text: {
      primary: '#ffffff',
      secondary: '#a1a1a1',
    },
  },
}
```

### Content

Update the content in the component files to match your personal information, projects, and contact details.
