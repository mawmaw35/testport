import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex max-w-4xl flex-col items-center gap-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Photography Portfolio
        </h1>
        <p className="text-xl text-neutral-400">
          Welcome to our photography portfolio. Explore stunning visual stories
          captured through the lens.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-3 font-medium transition-colors hover:bg-neutral-800"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-3 font-medium transition-colors hover:bg-neutral-800"
          >
            Contact
          </Link>
        </div>
      </main>
    </div>
  );
}
