import { PortfolioItem, PortfolioCategoryInfo } from '@/types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'ecommerce-redesign',
    title: 'E-Commerce Platform Redesign',
    description: 'Complete redesign of a modern e-commerce platform with focus on user experience and conversion optimization.',
    category: 'web-design',
    imageUrl: '/images/portfolio/ecommerce-redesign.jpg',
    thumbnailUrl: '/images/portfolio/thumbnails/ecommerce-redesign.jpg',
    featured: true,
    metadata: {
      client: 'ShopHub Inc.',
      year: 2024,
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      role: 'Lead Designer & Developer',
      duration: '3 months',
    },
    tags: ['UI/UX', 'Responsive Design', 'E-Commerce'],
    caseStudyUrl: '/portfolio/ecommerce-redesign',
  },
  {
    id: 'brand-identity-startup',
    title: 'Tech Startup Brand Identity',
    description: 'Full brand identity design for an AI-powered analytics startup, including logo, color palette, and brand guidelines.',
    category: 'branding',
    imageUrl: '/images/portfolio/brand-identity-startup.jpg',
    thumbnailUrl: '/images/portfolio/thumbnails/brand-identity-startup.jpg',
    featured: true,
    metadata: {
      client: 'DataWise AI',
      year: 2024,
      role: 'Brand Designer',
      duration: '2 months',
    },
    tags: ['Logo Design', 'Brand Strategy', 'Visual Identity'],
    caseStudyUrl: '/portfolio/brand-identity-startup',
  },
  {
    id: 'fitness-tracking-app',
    title: 'Fitness Tracking Mobile App',
    description: 'Native mobile app for iOS and Android with real-time workout tracking, social features, and personalized coaching.',
    category: 'mobile-app',
    imageUrl: '/images/portfolio/fitness-tracking-app.jpg',
    thumbnailUrl: '/images/portfolio/thumbnails/fitness-tracking-app.jpg',
    featured: true,
    metadata: {
      client: 'FitLife Pro',
      year: 2023,
      technologies: ['React Native', 'Firebase', 'HealthKit', 'Google Fit'],
      role: 'UI/UX Designer',
      duration: '4 months',
    },
    tags: ['Mobile Design', 'Health & Fitness', 'User Interface'],
    externalUrl: 'https://fitlife-pro.example.com',
    caseStudyUrl: '/portfolio/fitness-tracking-app',
  },
  {
    id: 'restaurant-branding',
    title: 'Artisan Restaurant Branding',
    description: 'Comprehensive branding package for a farm-to-table restaurant including menu design, signage, and packaging.',
    category: 'branding',
    imageUrl: '/images/portfolio/restaurant-branding.jpg',
    thumbnailUrl: '/images/portfolio/thumbnails/restaurant-branding.jpg',
    featured: false,
    metadata: {
      client: 'Green Harvest Kitchen',
      year: 2023,
      role: 'Creative Director',
      duration: '6 weeks',
    },
    tags: ['Print Design', 'Brand Identity', 'Food & Beverage'],
    caseStudyUrl: '/portfolio/restaurant-branding',
  },
  {
    id: 'dashboard-saas',
    title: 'SaaS Analytics Dashboard',
    description: 'Complex data visualization dashboard for enterprise SaaS platform with customizable widgets and real-time updates.',
    category: 'ui-ux',
    imageUrl: '/images/portfolio/dashboard-saas.jpg',
    thumbnailUrl: '/images/portfolio/thumbnails/dashboard-saas.jpg',
    featured: false,
    metadata: {
      client: 'MetricsPro',
      year: 2023,
      technologies: ['React', 'D3.js', 'Material UI', 'WebSocket'],
      role: 'Senior UX Designer',
      duration: '5 months',
    },
    tags: ['Data Visualization', 'Dashboard Design', 'Enterprise'],
    caseStudyUrl: '/portfolio/dashboard-saas',
  },
  {
    id: 'editorial-illustrations',
    title: 'Tech Magazine Editorial Series',
    description: 'Series of digital illustrations for a technology magazine covering topics like AI, blockchain, and cybersecurity.',
    category: 'illustration',
    imageUrl: '/images/portfolio/editorial-illustrations.jpg',
    thumbnailUrl: '/images/portfolio/thumbnails/editorial-illustrations.jpg',
    featured: false,
    metadata: {
      client: 'TechInsights Magazine',
      year: 2024,
      role: 'Illustrator',
      duration: '2 months',
    },
    tags: ['Digital Illustration', 'Editorial', 'Technology'],
    caseStudyUrl: '/portfolio/editorial-illustrations',
  },
  {
    id: 'product-photography',
    title: 'Luxury Watch Product Photography',
    description: 'High-end product photography and retouching for luxury watch brand\'s e-commerce and marketing materials.',
    category: 'photography',
    imageUrl: '/images/portfolio/product-photography.jpg',
    thumbnailUrl: '/images/portfolio/thumbnails/product-photography.jpg',
    featured: false,
    metadata: {
      client: 'Timeless Watches',
      year: 2023,
      role: 'Product Photographer',
      duration: '3 weeks',
    },
    tags: ['Product Photography', 'Luxury Goods', 'Retouching'],
    caseStudyUrl: '/portfolio/product-photography',
  },
  {
    id: 'banking-app-redesign',
    title: 'Banking App UX Overhaul',
    description: 'Complete user experience redesign of a mobile banking app focusing on accessibility and simplified navigation.',
    category: 'ui-ux',
    imageUrl: '/images/portfolio/banking-app-redesign.jpg',
    thumbnailUrl: '/images/portfolio/thumbnails/banking-app-redesign.jpg',
    featured: true,
    metadata: {
      client: 'SecureBank',
      year: 2024,
      technologies: ['Figma', 'UserTesting', 'A/B Testing'],
      role: 'Lead UX Researcher & Designer',
      duration: '6 months',
    },
    tags: ['Mobile Banking', 'Accessibility', 'User Research'],
    caseStudyUrl: '/portfolio/banking-app-redesign',
  },
];

export const portfolioCategories: PortfolioCategoryInfo[] = [
  {
    id: 'web-design',
    name: 'Web Design',
    description: 'Responsive websites and web applications',
  },
  {
    id: 'branding',
    name: 'Branding',
    description: 'Brand identity and visual systems',
  },
  {
    id: 'mobile-app',
    name: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications',
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    description: 'User interface and experience design',
  },
  {
    id: 'illustration',
    name: 'Illustration',
    description: 'Digital and editorial illustrations',
  },
  {
    id: 'photography',
    name: 'Photography',
    description: 'Product and lifestyle photography',
  },
];

export const getFeaturedItems = () => portfolioItems.filter(item => item.featured);

export const getItemsByCategory = (category: string) =>
  portfolioItems.filter(item => item.category === category);

export const getItemById = (id: string) =>
  portfolioItems.find(item => item.id === id);
