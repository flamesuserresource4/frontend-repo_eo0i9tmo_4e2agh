import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function HeroPrologue() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient for readability (does not block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-xs tracking-wide text-white/80">A story-driven portfolio</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Prologue: A Creative In Motion
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              I craft thoughtful experiences that blend design, code, and emotion. Scroll to begin the journey—
              a cinematic narrative of origins, inspirations, challenges, and future horizons.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#journey"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Begin the journey
                <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <span className="text-xs text-white/60">Smooth scroll • Parallax • Subtle motion</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
          className="flex flex-col items-center text-white/70"
        >
          <div className="h-6 w-[1px] bg-white/40" />
          <span className="mt-2 text-xs tracking-widest">SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}
