import Link from "next/link";

export default function Home() {
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Rebuild Your Back<br />
            <span className="text-amber-400">From the Ground Up</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Most rehab fails because it skips the foundation. We start from first principles — 
            rewiring your brain-muscle connection, rebuilding strength progressively, 
            and restoring pain-free movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.foundationalrehab.com"
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-lg text-lg transition"
            >
              Start Your Recovery — Free
            </Link>
            <Link
              href="#methodology"
              className="border border-zinc-700 hover:border-zinc-500 text-white px-8 py-4 rounded-lg text-lg transition"
            >
              Learn the Method
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Most Back Rehab <span className="text-red-400">Doesn&apos;t Work</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">Skips the Basics</h3>
              <p className="text-zinc-400 text-sm">
                Jumping straight to &quot;strengthening exercises&quot; when your nervous system 
                can&apos;t even activate the right muscles properly.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2">Expects Quick Fixes</h3>
              <p className="text-zinc-400 text-sm">
                &quot;5 stretches to fix back pain&quot; treats symptoms, not causes. 
                Real recovery takes consistent work over weeks and months.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
              <div className="text-3xl mb-4">📉</div>
              <h3 className="font-semibold mb-2">No Progression</h3>
              <p className="text-zinc-400 text-sm">
                Random exercises without structure. No way to know when to advance 
                or how to build on your progress systematically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            The <span className="text-amber-400">Foundational</span> Method
          </h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            A systematic approach to rebuilding your back, starting from first principles 
            and progressing only when your body is ready.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rewire the Connection</h3>
                <p className="text-zinc-400">
                  Before strengthening, you need to restore the brain-muscle connection. 
                  Simple activation exercises teach your nervous system to fire the right muscles again.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Build the Foundation</h3>
                <p className="text-zinc-400">
                  Ultra-basic movements that feel &quot;too easy&quot; are exactly where you need to start. 
                  Master stability and control before adding load or complexity.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Progress Systematically</h3>
                <p className="text-zinc-400">
                  Each exercise has easier and harder variations. You advance only when you&apos;ve 
                  mastered the current level — no rushing, no skipping steps.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Stay Consistent</h3>
                <p className="text-zinc-400">
                  This isn&apos;t a 7-day fix. It&apos;s a program designed for sustainable, long-term results. 
                  Small daily efforts compound into lasting change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Everything You Need to Recover
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-amber-400">✦</span> Personalized Programs
              </h3>
              <p className="text-zinc-400 text-sm">
                Tell us your condition, pain level, and goals. Get a structured program 
                built specifically for where you&apos;re starting.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-amber-400">✦</span> Video-Guided Workouts
              </h3>
              <p className="text-zinc-400 text-sm">
                Every exercise demonstrated with clear form cues. Follow along 
                with timed routines like a personal trainer in your pocket.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-amber-400">✦</span> Progressive Difficulty
              </h3>
              <p className="text-zinc-400 text-sm">
                Start with the basics and advance when you&apos;re ready. The program 
                adapts to your progress over weeks and months.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-amber-400">✦</span> Track Your Journey
              </h3>
              <p className="text-zinc-400 text-sm">
                Log workouts, track consistency, and see your progress over time. 
                Visual proof that the work is paying off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Rebuild?
          </h2>
          <p className="text-zinc-400 mb-8">
            Start your recovery today. No credit card required. No gimmicks. 
            Just a proven method and the consistency to follow it.
          </p>
          <Link
            href="https://app.foundationalrehab.com"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-lg text-lg transition"
          >
            Start Free — No Account Needed
          </Link>
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
