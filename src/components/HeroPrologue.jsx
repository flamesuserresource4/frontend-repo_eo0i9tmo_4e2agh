import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function HeroPrologue() {
  // Cursor reactive spotlight and subtle parallax
  const sectionRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 30 });
  const sy = useSpring(my, { stiffness: 200, damping: 30 });
  const parallaxX = useTransform(sx, [0, 1], [-10, 10]);
  const parallaxY = useTransform(sy, [0, 1], [-10, 10]);

  function handleMouseMove(e) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    mx.set(x);
    my.set(y);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <Spline
          // Auto-enhanced Spline asset (interactive, purple/blue futuristic)
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability gradient that does not block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/* Cursor spotlight (follows mouse) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          left: useTransform(sx, (v) => `calc(${v * 100}% )`),
          top: useTransform(sy, (v) => `calc(${v * 100}% )`),
          width: 380,
          height: 380,
          background:
            'radial-gradient(closest-side, rgba(124,58,237,0.35), rgba(99,102,241,0.22) 40%, rgba(0,0,0,0) 70%)',
        }}
      />

      {/* Content with subtle parallax based on cursor */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
            style={{ x: parallaxX, y: parallaxY }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-xs tracking-wide text-white/80">A story-driven portfolio</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Prologue: A Creative In Motion
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              I craft thoughtful experiences that blend design, code, and emotion. Move your cursor, explore the scene,
              and scroll to begin — a cinematic narrative of origins, inspirations, challenges, and future horizons.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="#journey" variant="primary">
                Begin the journey <Rocket className="h-4 w-4" />
              </MagneticButton>
              <span className="text-xs text-white/60">Interactive • Parallax • Smooth motion</span>
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

function MagneticButton({ href, children, variant = 'primary' }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(x, { stiffness: 300, damping: 20 });
  const ry = useSpring(y, { stiffness: 300, damping: 20 });

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.2);
    y.set(dy * 0.2);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition will-change-transform';
  const styles =
    variant === 'primary'
      ? 'bg-white text-black hover:bg-white/90'
      : 'border border-white/15 bg-white/10 text-white/90 hover:bg-white/20';

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: rx, y: ry }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}
