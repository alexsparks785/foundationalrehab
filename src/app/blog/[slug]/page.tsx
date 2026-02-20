import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Foundational Rehab",
    };
  }

  return {
    title: `${post.title} | Foundational Rehab`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="text-amber-400">Foundational</span> Rehab
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-zinc-400 hover:text-white transition">
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

      {/* Article */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-zinc-400 hover:text-white mb-6 transition"
            >
              <span className="mr-2">←</span> Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-zinc-400 mb-6">{post.description}</p>
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <span>{post.author}</span>
              <span>•</span>
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-zinc-300 prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-amber-400 prose-code:bg-zinc-800 prose-code:px-1 prose-code:rounded">
            {/* MDX content would be rendered here */}
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Start Your Recovery?</h3>
            <p className="text-zinc-400 mb-6">
              Get a personalized rehab program built for your specific condition and goals.
            </p>
            <Link
              href="https://app.foundationalrehab.com"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              Start Free — No Account Needed
            </Link>
          </div>
        </div>
      </article>

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
