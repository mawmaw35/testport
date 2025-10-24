export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"
      aria-label="Hero section with photographer introduction"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6bS00LTh2Mmgydl0yaC0yem00IDB2Mmgydl0yaC0yem0tNCA0djJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-zinc-700 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 text-zinc-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Capturing Moments
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl text-zinc-300 mb-6 font-light">
              Through the Lens of Creativity
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Professional photographer specializing in landscape, portrait, and architectural photography. 
            Each image tells a unique story, frozen in time with passion and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#gallery"
              className="group inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-white bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-900 w-full sm:w-auto"
              aria-label="View featured gallery"
            >
              View Gallery
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-zinc-300 bg-transparent hover:bg-zinc-800 rounded-lg transition-all duration-300 border-2 border-zinc-700 hover:border-zinc-600 focus:outline-none focus:ring-4 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-900 w-full sm:w-auto"
              aria-label="Contact the photographer"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg
          className="w-6 h-6 text-zinc-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
