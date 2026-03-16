import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Clock, RefreshCw, FileVideo, Code2, BarChart3, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Animation Services',
  description: 'Custom Manim animations for online courses, YouTube channels, and presentations. Delivered in days.',
}

const features = [
  'Fully custom scenes — not templates',
  'Mathematical notation via LaTeX',
  'Data-driven animations from your data',
  '1080p renders at 60fps',
  'Revisions included in every package',
  'Delivered as MP4 (or any format needed)',
  'Dark or light theme available',
  'NumeracyHQ brand or your own branding',
]

const packages = [
  {
    name:      'Starter',
    price:     '$39',
    length:    'Up to 30 seconds',
    revisions: '1 revision',
    delivery:  '3 business days',
    best:      false,
    features:  [
      'One concept, one scene',
      'Mathematical notation (LaTeX)',
      '1080p MP4 export',
      '1 revision round',
    ],
  },
  {
    name:      'Standard',
    price:     '$97',
    length:    'Up to 90 seconds',
    revisions: '2 revisions',
    delivery:  '5 business days',
    best:      true,
    features:  [
      'Multi-concept animation',
      'Data-driven visuals',
      'LaTeX equations + graphs',
      '1080p / 60fps MP4',
      '2 revision rounds',
      'Thumbnail frame export',
    ],
  },
  {
    name:      'Premium',
    price:     '$258',
    length:    'Up to 5 minutes',
    revisions: '3 revisions',
    delivery:  '10 business days',
    best:      false,
    features:  [
      'Full educational explainer',
      '3D scenes available',
      'Chapter-based structure',
      'Algorithm & data viz',
      '4K export available',
      '3 revision rounds',
      'Source files on request',
    ],
  },
]

const clients = [
  {
    icon:  GraduationCap,
    title: 'Online Course Creators',
    body:  'Udemy, Teachable, and Coursera instructors who need visual math for their courses.',
    color: 'text-electric',
    bg:    'bg-electric/10',
  },
  {
    icon:  BarChart3,
    title: 'YouTube Educators',
    body:  'Math, science, and data channels that want 3Blue1Brown-quality animation without the learning curve.',
    color: 'text-pink',
    bg:    'bg-pink/10',
  },
  {
    icon:  Code2,
    title: 'Edtech Companies',
    body:  'Platforms that produce animated lesson content at scale for students.',
    color: 'text-gold',
    bg:    'bg-gold/10',
  },
  {
    icon:  FileVideo,
    title: 'Academic & Research',
    body:  'Professors and labs that need journal-quality figure animations for papers and talks.',
    color: 'text-neon',
    bg:    'bg-neon/10',
  },
]

const steps = [
  { n: '01', title: 'Brief',   body: 'You tell us what to animate, your target audience, and your deadline.' },
  { n: '02', title: 'Script',  body: 'We plan the visual sequence and get your approval before animating.' },
  { n: '03', title: 'Animate', body: 'We build it in Manim and send you a low-quality preview for feedback.' },
  { n: '04', title: 'Deliver', body: 'Final 1080p render delivered as MP4. Revisions handled promptly.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-snow mb-6 leading-tight">
            Manim Animation{' '}
            <span className="gradient-text">for Educators</span>
          </h1>
          <p className="text-snow/70 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            We turn complex math and data into clear, beautiful animations — the kind
            that make students say &quot;oh, now I get it.&quot;
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-electric text-panel font-bold text-lg hover:bg-electric/80 transition-all shadow-lg shadow-electric/25"
          >
            Request a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ── WHAT YOU GET ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-snow text-center mb-12">
            What&apos;s Included in Every Project
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(f => (
              <div key={f} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <div className="w-6 h-6 rounded-full bg-neon/10 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-neon" />
                </div>
                <span className="text-snow/80 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-snow mb-4">Packages</h2>
            <p className="text-muted">Pick a package and get your animation delivered in days — not weeks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map(pkg => (
              <div
                key={pkg.name}
                className={`relative flex flex-col p-8 rounded-2xl border transition-all ${
                  pkg.best
                    ? 'bg-electric/5 border-electric shadow-lg shadow-electric/10'
                    : 'bg-card border-border'
                }`}
              >
                {pkg.best && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge bg-electric text-panel border-0 shadow-lg">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl text-snow mb-1">{pkg.name}</h3>
                  <div className="flex items-end gap-2">
                    <span className="font-display font-bold text-3xl text-electric">{pkg.price}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-snow/70 text-sm">
                    <FileVideo size={14} className="text-muted" /> {pkg.length}
                  </div>
                  <div className="flex items-center gap-2 text-snow/70 text-sm">
                    <RefreshCw size={14} className="text-muted" /> {pkg.revisions}
                  </div>
                  <div className="flex items-center gap-2 text-snow/70 text-sm">
                    <Clock size={14} className="text-muted" /> {pkg.delivery}
                  </div>
                </div>

                <ul className="space-y-2 flex-1 mb-8">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-snow/70">
                      <Check size={14} className="text-neon mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                    pkg.best
                      ? 'bg-electric text-panel hover:bg-electric/80 shadow-lg shadow-electric/20'
                      : 'border border-border text-snow hover:border-electric/50 hover:bg-electric/5'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-muted text-sm mt-8">
            Need something custom? Series pricing, retainers, and academic work available.{' '}
            <Link href="/contact" className="text-electric hover:underline">
              Contact us →
            </Link>
          </p>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-4xl text-snow text-center mb-12">
            Who We Work With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {clients.map(({ icon: Icon, title, body, color, bg }) => (
              <div key={title} className="glow-card flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}>
                  <Icon size={20} className={color} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-snow mb-1">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-4xl text-snow text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-electric/20 via-pink/20 to-electric/20" />

            {steps.map(({ n, title, body }) => (
              <div key={n} className="relative text-center">
                <div className="w-16 h-16 rounded-2xl bg-card border border-electric/30 flex items-center justify-center mx-auto mb-5 relative z-10">
                  <span className="font-display font-bold text-xl text-electric">{n}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-snow mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-card/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl text-snow mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted text-lg mb-8">
            Tell us what you need. We&apos;ll get back within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-electric text-panel font-bold text-lg hover:bg-electric/80 transition-all shadow-lg shadow-electric/25"
          >
            Request a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
