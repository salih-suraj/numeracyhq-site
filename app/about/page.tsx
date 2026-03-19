import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Rocket, Heart, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About NumeracyHQ',
  description: 'NumeracyHQ is a product of Salix Systems — building math education tools and animated content for the next generation of learners.',
}

const products = [
  {
    name:    'Animation Services',
    status:  'Live',
    color:   'text-neon',
    badge:   'bg-neon/10 text-neon border-neon/30',
    desc:    'Custom Manim-powered mathematical animations for educators, course creators, and content teams worldwide.',
    href:    '/services',
  },
  {
    name:    'NumeracyHQ App',
    status:  'Live on Android',
    color:   'text-electric',
    badge:   'bg-electric/10 text-electric border-electric/30',
    desc:    'An interactive math learning app for children — counting, pattern recognition, and number sense. Available on Android.',
    href:    '/app',
  },
  {
    name:    'NumeracyHQ Studio',
    status:  'Coming 2027',
    color:   'text-gold',
    badge:   'bg-gold/10 text-gold border-gold/30',
    desc:    'A no-code drag-and-drop tool that lets any educator create beautiful Manim-quality animations without writing a single line of Python.',
    href:    '/studio',
  },
]

const values = [
  {
    icon:  Rocket,
    title: 'Make Math Accessible',
    body:  'Abstract concepts become clear when you can see them move. Every product we build is aimed at closing the gap between confusion and understanding.',
    color: 'text-electric',
    bg:    'bg-electric/10',
  },
  {
    icon:  Heart,
    title: 'Built for Learners',
    body:  "Whether you're five years old learning to count or a PhD student visualising a proof, our tools are designed to meet you where you are.",
    color: 'text-pink',
    bg:    'bg-pink/10',
  },
  {
    icon:  Target,
    title: 'Quality Over Quantity',
    body:  'We would rather ship one exceptional animation than ten mediocre ones. Every frame is deliberate. Every project is delivered with care.',
    color: 'text-gold',
    bg:    'bg-gold/10',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="badge bg-electric/10 text-electric border border-electric/30 mb-6">
            Salix Systems
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-snow leading-tight mb-6">
            Making Math{' '}
            <span className="gradient-text">Beautiful</span>
          </h1>
          <p className="text-snow/70 text-xl leading-relaxed max-w-2xl mx-auto">
            NumeracyHQ is a product suite by Salix Systems — a one-person studio on a mission
            to make mathematical ideas accessible to everyone through animation, apps, and tools.
          </p>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Avatar placeholder */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 rounded-3xl border border-electric/20 overflow-hidden shadow-2xl shadow-electric/10">
                  <Image
                    src="/abba-suraj.png"
                    alt="Abba Suraj — Founder, Salix Systems"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-card border border-neon/30 shadow-lg">
                  <span className="text-neon text-xs font-semibold">Manim · Python · EdTech</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-display font-bold text-4xl text-snow mb-6">
                Hi, I&apos;m Abba Suraj
              </h2>
              <div className="space-y-4 text-snow/70 leading-relaxed">
                <p>
                  I founded Salix Systems with one belief: that the biggest barrier to
                  understanding mathematics isn&apos;t intelligence — it&apos;s the lack of
                  good visual explanations.
                </p>
                <p>
                  I build with Manim Community Edition to create animations that show
                  how numbers, patterns, and equations actually behave — not just what
                  they look like written on a page.
                </p>
                <p>
                  NumeracyHQ started as a TikTok channel. It&apos;s grown into a suite of
                  products: an animation studio for hire, a kids&apos; learning app, and a
                  no-code animation tool in development for math educators worldwide.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-electric text-panel font-bold text-sm hover:bg-electric/80 transition-all shadow-lg shadow-electric/25"
                >
                  Work With Me <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-snow font-semibold text-sm hover:border-electric/50 hover:bg-electric/5 transition-all"
                >
                  Say Hello
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-4xl text-snow text-center mb-16">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, body, color, bg }) => (
              <div key={title} className="glow-card flex flex-col p-8 rounded-2xl bg-card border border-border">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg} mb-6`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="font-display font-bold text-xl text-snow mb-3">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-4xl text-snow text-center mb-4">
            The NumeracyHQ Suite
          </h2>
          <p className="text-muted text-center text-lg mb-16 max-w-xl mx-auto">
            Three products. One mission.
          </p>

          <div className="space-y-4">
            {products.map(({ name, status, badge, desc, href }) => (
              <div
                key={name}
                className="glow-card flex flex-col sm:flex-row sm:items-center gap-5 p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-lg text-snow">{name}</h3>
                    <span className={`badge border text-xs ${badge}`}>{status}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-electric hover:gap-2 transition-all flex-shrink-0"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl text-snow mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-muted text-lg mb-8">
            Whether you need an animation, have a question, or just want to say hi —
            my inbox is always open.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-electric text-panel font-bold text-lg hover:bg-electric/80 transition-all shadow-lg shadow-electric/25"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
