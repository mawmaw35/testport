export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-zinc-900"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 mb-8">
            Interested in working together or have a project in mind? 
            I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@photographer.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-white bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              aria-label="Send an email"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
