import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Immersive Editorial Experience',
    blurb:
      'A scroll-told story with parallax imagery and type that breathes. Inspired by film titles and print magazines.',
    tags: ['React', 'Framer Motion', 'Art Direction'],
  },
  {
    title: 'Generative Visual Playground',
    blurb:
      'Explorations in motion, noise, and color. A space to iterate quickly and translate feelings into visuals.',
    tags: ['Canvas', 'Shaders', 'UX Experiments'],
  },
  {
    title: 'Human-Centered Design System',
    blurb:
      'A minimal, accessible component library focused on clarity and warmth. Built to scale without losing soul.',
    tags: ['Design System', 'Accessibility', 'Documentation'],
  },
];

export default function CreationsShowcase() {
  return (
    <section id="creations" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-teal-300" />
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Creations</h2>
        </div>

        <p className="max-w-3xl text-white/70">
          Projects woven into the narrative — what inspired them, what they taught me, and why they matter.
        </p>

        {/* Behind the Scenes inline section */}
        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="text-sm font-medium text-white/90">Behind the Scenes</h3>
          <p className="mt-2 text-sm text-white/70">
            My process is iterative and human. Sketch, prototype, test, refine. Favorite tools include Figma, Framer,
            Spline, and a notebook. Mindset: ship small, learn fast, keep it honest.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-400/10 blur-2xl transition-opacity group-hover:opacity-70" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <button className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 transition hover:bg-white/20">
                  Read the story
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
