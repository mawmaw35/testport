import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Photography Portfolio",
  description:
    "Get in touch with us for photography inquiries and collaborations",
};

export default function Contact() {
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
          Contact
        </h1>
        <div className="space-y-8">
          <p className="text-lg text-neutral-300">
            We&apos;d love to hear from you. Whether you&apos;re interested in
            booking a session, collaborating on a project, or just want to say
            hello, feel free to reach out.
          </p>
          <div className="space-y-4 text-neutral-300">
            <div>
              <h2 className="mb-2 text-xl font-semibold text-neutral-100">
                Email
              </h2>
              <a
                href="mailto:hello@example.com"
                className="text-accent hover:underline"
              >
                hello@example.com
              </a>
            </div>
            <div>
              <h2 className="mb-2 text-xl font-semibold text-neutral-100">
                Social
              </h2>
              <p>Follow us on social media for updates and new work.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
