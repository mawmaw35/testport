import Hero from "@/components/Hero";
import FeaturedGallery from "@/components/FeaturedGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <FeaturedGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
