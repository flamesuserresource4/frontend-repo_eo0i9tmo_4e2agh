import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Milestone } from 'lucide-react';
import { useRef } from 'react';

const milestones = [
  {
    year: 'Origins',
    title: 'Curiosity sparks creation',
    desc:
      'Early experiments with art and code. Sketchbooks, small websites, late nights discovering the magic of building.',
  },
  {
    year: 'Path',
    title: 'Learning by doing',
    desc:
      'Courses, tutorials, and hands-on projects. From fundamentals to shipping my first real-world work.',
  },
  {
    year: 'Breakthrough',
    title: 'Finding my voice',
    desc:
      'Design systems, interaction patterns, and narrative-driven experiences that feel uniquely mine.',
  },
  {
    year: 'Now',
    title: 'Craft with intention',
    desc:
      'Balancing aesthetics and function—building things that resonate emotionally and work beautifully.',
  },
];

export default function JourneyTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="journey" ref={ref} className="relative w-full bg-[#0A0A0A] py-24 text-white">
      {/* Subtle parallax stars grid */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 opacity-50">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white" opacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <MapPin className="h-5 w-5 text-teal-300" />
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">The Journey</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`relative md:grid md:grid-cols-2 md:items-center md:gap-12 ${
                  idx % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                <div className={`${idx % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <div className="text-xs uppercase tracking-widest text-white/50">{m.year}</div>
                  <h3 className="mt-2 text-xl font-medium md:text-2xl">{m.title}</h3>
                  <p className="mt-3 text-white/70">{m.desc}</p>
                </div>

                <div className="md:col-start-2">
                  <div className={`relative mx-4 mt-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur md:mt-0 ${
                    idx % 2 === 0 ? 'md:mx-0' : ''
                  }`}>
                    <div className="absolute -left-9 top-6 hidden h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/70 md:flex">
                      <Milestone className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm text-white/80">
                      Key takeaway: momentum over perfection. Each chapter built clarity, craft, and confidence.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
