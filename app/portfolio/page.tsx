import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Mathematical and data animations built with Manim Community Edition.',
}

/* ─────────────────────────────────────────────────────────────────────────
   ADD YOUR VIDEOS HERE
   Each entry: { id, title, category, description }
   id = YouTube video ID (the part after "v=" or after "shorts/")
   ─────────────────────────────────────────────────────────────────────── */
const videos = [
  {
    id:          'ksvfU_CUmm0',
    title:       'Statistics Explained',
    category:    'Statistics',
    description: 'A visual introduction to statistical concepts using animated graphs and equations.',
    isShort:     true,
  },
  {
    id:          'ETFna9v6Yqc',
    title:       'Mathematical Animation',
    category:    'Mathematics',
    description: 'Mathematical concepts brought to life through programmatic animation.',
    isShort:     true,
  },
  {
    id:          'JIz67wRHTsA',
    title:       'Sum of Cubes is always a perfect square...',
    category:    'Mathematics',
    description: 'A visual proof of why the sum of the first n cubes is always a perfect square.',
    isShort:     true,
  },
  // ── ADD MORE VIDEOS BELOW THIS LINE ───────────────────────────────────
  // {
  //   id:      'YOUR_VIDEO_ID',
  //   title:   'Your Video Title',
  //   category: 'Category',
  //   description: 'Short description.',
  //   isShort: true,   // true for Shorts (portrait), false for regular (landscape)
  // },
]

const categoryColors: Record<string, string> = {
  Statistics:   'bg-electric/10 text-electric border-electric/20',
  Mathematics:  'bg-pink/10    text-pink    border-pink/20',
  Algorithms:   'bg-gold/10    text-gold    border-gold/20',
  Physics:      'bg-neon/10    text-neon    border-neon/20',
  Data:         'bg-electric/10 text-electric border-electric/20',
}

const defaultColor = 'bg-muted/10 text-muted border-muted/20'

export default function PortfolioPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-snow mb-4">
            Our Work
          </h1>
          <p className="text-muted text-xl">
            Mathematical and data animations built with Manim Community Edition.
          </p>
        </div>
      </section>

      {/* ── VIDEO GRID ───────────────────────────────────────────────────── */}
      <section className="py-16 px-6 pb-24">
        <div className="max-w-6xl mx-auto">

          {/* Live videos */}
          {videos.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
              {videos.map(({ id, title, category, description, isShort }) => (
                <div key={id} className="glow-card group">
                  {/* Video embed */}
                  <div
                    className={`phone-frame w-full ${
                      isShort ? 'aspect-[9/16]' : 'aspect-video'
                    } overflow-hidden`}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?controls=1&modestbranding=1&rel=0`}
                      className="w-full h-full"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={title}
                      loading="lazy"
                    />
                  </div>

                  {/* Meta */}
                  <div className="mt-4 px-1">
                    <span
                      className={`badge border mb-2 ${
                        categoryColors[category] ?? defaultColor
                      }`}
                    >
                      {category}
                    </span>
                    <h3 className="font-display font-semibold text-snow text-lg leading-snug">
                      {title}
                    </h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}

              {/* Coming-soon placeholder cards (fill to minimum of 3 visible slots) */}
              {[1, 2, 3].slice(0, Math.max(0, 3 - videos.length)).map(i => (
                <div
                  key={`placeholder-${i}`}
                  className="flex flex-col items-center justify-center aspect-[9/16] rounded-2xl border border-dashed border-border bg-card/40 text-center p-8"
                >
                  <Plus size={32} className="text-muted mb-4" />
                  <p className="text-muted text-sm font-medium">More coming soon</p>
                  <p className="text-muted/60 text-xs mt-1">
                    New videos added as projects complete
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Note for adding more */}
          <div className="text-center border border-dashed border-border rounded-2xl p-8 bg-card/20">
            <p className="text-muted text-sm mb-1">
              More work added regularly as NumeracyHQ grows.
            </p>
            <a
              href="https://www.youtube.com/@NumeracyHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric text-sm hover:underline inline-flex items-center gap-1"
            >
              Subscribe on YouTube for updates <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-snow mb-4">
            Want something like this?
          </h2>
          <p className="text-muted text-lg mb-8">
            We build custom animations for courses, channels, and presentations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-electric text-panel font-bold text-lg hover:bg-electric/80 transition-all shadow-lg shadow-electric/25"
          >
            Let&apos;s Talk <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
