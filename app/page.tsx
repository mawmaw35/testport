import PageContainer from '@/components/layout/PageContainer';
import Section from '@/components/layout/Section';
import PortfolioCard from '@/components/PortfolioCard';
import { getFeaturedItems } from '@/data/portfolio';

export default function Home() {
  const featuredItems = getFeaturedItems();

  return (
    <>
      <Section spacing="xl" className="bg-background">
        <PageContainer>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-text-primary">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              I create beautiful digital experiences through design and development.
              Explore my featured work below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/portfolio"
                className="px-8 py-3 bg-accent-primary hover:bg-accent-primary-hover text-white font-medium rounded-lg transition-colors duration-base"
              >
                View All Work
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-border hover:border-border-hover text-text-primary font-medium rounded-lg transition-colors duration-base"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </PageContainer>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <PageContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
              Featured Projects
            </h2>
            <p className="text-lg text-text-secondary">
              A selection of my best work across various disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </PageContainer>
      </Section>

      <Section spacing="lg" className="bg-background">
        <PageContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            I&apos;m currently available for freelance projects and collaboration opportunities.
            Let&apos;s create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-primary hover:bg-accent-primary-hover text-white font-medium rounded-lg transition-colors duration-base"
          >
            Start a Conversation
          </a>
        </PageContainer>
      </Section>
    </>
  );
}
