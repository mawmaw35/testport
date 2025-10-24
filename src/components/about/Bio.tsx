function Bio() {
  return (
    <section className="section-padding bg-dark-surface">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">About Me</h2>
            <div className="space-y-4 text-body">
              <p>
                With over a decade of experience in design and development, I've had 
                the privilege of working with startups, agencies, and Fortune 500 
                companies to bring their visions to life.
              </p>
              <p>
                My journey began with a fascination for how design and technology 
                intersect to create meaningful experiences. Today, I specialize in 
                building scalable web applications that prioritize both aesthetics 
                and performance.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, 
                contributing to open-source projects, or mentoring aspiring developers 
                in the community.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-dark-border flex items-center justify-center">
              <svg
                className="w-32 h-32 text-dark-text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
