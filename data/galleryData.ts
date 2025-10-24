export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  featured: boolean;
  width: number;
  height: number;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Golden Hour Landscape",
    description: "A breathtaking sunset over mountain ranges",
    imageUrl: "/images/gallery-1.jpg",
    category: "landscape",
    featured: true,
    width: 1200,
    height: 800,
  },
  {
    id: "2",
    title: "Urban Architecture",
    description: "Modern cityscape with geometric patterns",
    imageUrl: "/images/gallery-2.jpg",
    category: "architecture",
    featured: true,
    width: 1200,
    height: 800,
  },
  {
    id: "3",
    title: "Portrait in Nature",
    description: "Natural light portrait photography",
    imageUrl: "/images/gallery-3.jpg",
    category: "portrait",
    featured: true,
    width: 800,
    height: 1200,
  },
  {
    id: "4",
    title: "Minimalist Interior",
    description: "Clean lines and natural lighting",
    imageUrl: "/images/gallery-4.jpg",
    category: "interior",
    featured: true,
    width: 1200,
    height: 800,
  },
  {
    id: "5",
    title: "Street Photography",
    description: "Candid moments in the city",
    imageUrl: "/images/gallery-5.jpg",
    category: "street",
    featured: true,
    width: 1200,
    height: 800,
  },
  {
    id: "6",
    title: "Coastal Serenity",
    description: "Peaceful coastal landscapes at dawn",
    imageUrl: "/images/gallery-6.jpg",
    category: "landscape",
    featured: true,
    width: 1200,
    height: 800,
  },
];

export function getFeaturedItems(): GalleryItem[] {
  return galleryItems.filter((item) => item.featured);
}
