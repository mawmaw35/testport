import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Photography Portfolio",
  description: "Learn more about our photography journey and vision",
};

export default function About() {
  return (
    <div className="flex min-h-screen flex-col p-8">
      <main className="mx-auto w-full max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-neutral-400 transition-colors hover:text-neutral-100"
          >
            ← Back to Home
          </Link>
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
          About
        </h1>
        <div className="space-y-6 text-lg text-neutral-300">
          <p>
            Welcome to our photography portfolio. This is where we showcase our
            passion for capturing moments and telling stories through images.
          </p>
          <p>
            Our work focuses on finding beauty in the ordinary and
            extraordinary, combining technical skill with artistic vision to
            create compelling visual narratives.
          </p>
          <p>
            We specialize in various photography styles, from landscapes and
            portraits to urban exploration and abstract compositions.
          </p>
        </div>
      </main>
    </div>
  );
}
