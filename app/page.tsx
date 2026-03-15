import Link from 'next/link'
import { ArrowRight, Play, Sparkles, BookOpen } from 'lucide-react'

/* ─── Hero sine-wave SVG ─────────────────────────────────────────────────── */
function SineWaveSVG() {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full opacity-60"
    >
      {/* Axes */}
      <line x1="10" y1="60" x2="390" y2="60" stroke="#2A2A5A" strokeWidth="1" />
      <line x1="20" y1="10" x2="20"  y2="110" stroke="#2A2A5A" strokeWidth="1" />
      {/* Sine wave */}
      <path
        d="M 20 60 C 40 60, 50 10, 70 10 S 100 110, 120 110 S 150 10, 170 10 S 200 110, 220 110 S 250 10, 270 10 S 300 110, 320 110 S 350 10, 370 10 S 390 60, 390 60"
        stroke="#00BFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="sine-path"
      />
      {/* Cosine overlay */}
      <path
        d="M 20 10 C 40 10, 50 60, 70 60 S 100 110, 120 60 S 150 10, 170 60 S 200 110, 220 60 S 250 10, 270 60 S 300 110, 320 60 S 350 10, 370 60"
        stroke="#E040FB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
        opacity="0.5"
      />
      {/* Labels */}
      <text x="380" y="55"  fill="#00BFFF" fontSize="9" fontFamily="monospace">sin</text>
      <text x="380" y="30"  fill="#E040FB" fontSize="9" fontFamily="monospace">cos</text>
    </svg>
  )
}

/* ─── What We Do cards ───────────────────────────────────────────────────── */
const services = [
  {
    icon: Play,
    title: 'Mathematical Animation',
    body: 'Custom Manim animations for your course, channel, or presentation. 30 seconds to 5 minutes. Delivered in days, not weeks.',
    href: '/services',
    cta: 'See Services',
    color: 'electric',
    glow: 'glow-card',
    border: 'border-electric/20',
    iconBg: 'bg-electric/10 text-electric',
  },
  {
    icon: BookOpen,
    title: 'NumeracyHQ for Kids',
    body: 'An interactive math learning app for children — counting, pattern matching, and number sense. Built for fun, designed for learning.',
    href: '/app',
    cta: 'Learn More',
    color: 'pink',
    glow: 'glow-card-pink',
    border: 'border-pink/20',
    iconBg: 'bg-pink/10 text-pink',
  },
]

/* ─── Featured portfolio videos ─────────────────────────────────────────── */
const featured = [
  {
    id:       'ksvfU_CUmm0',
    title:    'Statistics Explained',
    category: 'Math',
  },
  {
    id:       'ETFna9v6Yqc',
    title:    'Mathematical Animation',
    category: 'Math',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        {/* Blue glow blob */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric/30 bg-electric/5 text-electric text-xs font-medium mb-8">
              <Sparkles size={12} />
              Math animation for educators
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Math,{' '}
              <span className="gradient-text">Visualized.</span>
            </h1>

            <p className="text-snow/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
              We build animated mathematical explainers for educators, course creators,
              and content teams — the kind that make students say{' '}
              <em className="text-electric not-italic">&quot;oh, now I get it.&quot;</em>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-electric text-panel font-bold text-base hover:bg-electric/80 transition-all shadow-lg shadow-electric/25 hover:shadow-electric/40"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-snow font-semibold text-base hover:border-electric/50 hover:bg-electric/5 transition-all"
              >
                <Play size={16} />
                See Our Work
              </Link>
            </div>
          </div>

          {/* Right: animated visual */}
          <div className="flex flex-col items-center gap-6">
            {/* Phone frame with embedded YouTube Short */}
            <div className="phone-frame w-56 aspect-[9/16] animate-float">
              <iframe
                src="https://www.youtube.com/embed/ksvfU_CUmm0?autoplay=1&mute=1&loop=1&playlist=ksvfU_CUmm0&controls=0&modestbranding=1&rel=0"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="NumeracyHQ animation preview"
              />
            </div>
            {/* Sine wave beneath */}
            <div className="w-full max-w-sm">
              <SineWaveSVG />
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ─────────────────────────────────────────────── */}
      <section className="border-y border-border bg-card/40 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 text-muted text-sm">
          <span className="flex items-center gap-2">
            Built with <span className="text-snow font-medium">Manim CE</span>
          </span>
          <span className="hidden sm:block text-border">|</span>
          <span className="flex items-center gap-2">
            App on <span className="text-neon font-medium">Google Play</span>
          </span>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-snow mb-4">
              What We Do
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Three products. One mission: make mathematics beautiful and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, body, href, cta, glow, border, iconBg }) => (
              <div
                key={title}
                className={`${glow} relative flex flex-col p-8 rounded-2xl bg-card border ${border} transition-all duration-300`}
              >
<div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg} mb-6`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-xl text-snow mb-3">{title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-1 mb-6">{body}</p>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-electric hover:gap-2 transition-all"
                >
                  {cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-snow mb-2">
                Recent Work
              </h2>
              <p className="text-muted">Built with Manim Community Edition</p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1 text-electric text-sm font-semibold hover:gap-2 transition-all"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
            {featured.map(({ id, title, category }) => (
              <div key={id} className="glow-card group">
                <div className="phone-frame aspect-[9/16] w-full max-w-[220px] mx-auto">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?controls=1&modestbranding=1&rel=0`}
                    className="w-full h-full"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={title}
                  />
                </div>
                <div className="mt-4 px-1">
                  <span className="badge bg-electric/10 text-electric border border-electric/20 mb-2">
                    {category}
                  </span>
                  <h3 className="font-display font-semibold text-snow text-base">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
