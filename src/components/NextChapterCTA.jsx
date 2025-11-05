import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function NextChapterCTA() {
  return (
    <section id="next" className="relative w-full bg-[#0A0A0A] py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">The Next Chapter</h2>
          <p className="mt-4 text-white/70">
            Im focused on building meaningful products and immersive storytelling on the web. If the vision resonates,
            lets connect and explore what we can create together.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Mail className="h-4 w-4" />
              Say hello
            </a>
            <a
              href="#creations"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white/90 transition hover:bg-white/20"
            >
              Explore work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-10 text-xs text-white/50">
            Built with love, clarity, and curiosity. Responsive, fast, and accessible.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
