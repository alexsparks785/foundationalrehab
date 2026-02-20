import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Foundational Rehab",
  description:
    "Evidence-based articles on back pain recovery, exercises, and rehabilitation. Learn the foundational approach to lasting relief.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="text-amber-400">Foundational</span> Rehab
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-white font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-zinc-400 hover:text-white transition">
              About
            </Link>
            <Link
              href="https://app.foundationalrehab.com"
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-4 py-2 rounded-lg transition"
            >
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-zinc-400 text-lg">
            Evidence-based guides on back pain recovery, exercises, and the foundational approach to lasting relief.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-12 text-zinc-500">
              <p>No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition group"
                >
                  <div className="flex items-center gap-3 text-sm text-zinc-500 mb-3">
                    <time>{new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}</time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition">
                    {post.title}
                  </h2>
                  <p className="text-zinc-400">{post.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-500 text-sm">
            © 2026 Foundational Rehab. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/blog" className="text-zinc-400 hover:text-white transition">
              Blog
            </Link>
            <Link href="/about" className="text-zinc-400 hover:text-white transition">
              About
            </Link>
            <Link href="/privacy" className="text-zinc-400 hover:text-white transition">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
