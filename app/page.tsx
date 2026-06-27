import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Film, Lightbulb, BarChart3 } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'

function CoordinateSVG() {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-sm opacity-90"
    >
      {/* Faint grid */}
      {[55, 110, 165].map(y => (
        <line key={`h${y}`} x1="20" y1={y} x2="300" y2={y} stroke="#0F172A" strokeWidth="0.5" opacity="0.07" />
      ))}
      {[70, 130, 190, 250].map(x => (
        <line key={`v${x}`} x1={x} y1="20" x2={x} y2="200" stroke="#0F172A" strokeWidth="0.5" opacity="0.07" />
      ))}
      {/* Axes */}
      <line x1="20" y1="155" x2="300" y2="155" stroke="#0F172A" strokeWidth="1.5" opacity="0.2" />
      <line x1="50" y1="20"  x2="50"  y2="200" stroke="#0F172A" strokeWidth="1.5" opacity="0.2" />
      {/* Arrowheads */}
      <polyline points="296,151 300,155 296,159" stroke="#0F172A" strokeWidth="1.5" opacity="0.2" />
      <polyline points="46,24 50,20 54,24"       stroke="#0F172A" strokeWidth="1.5" opacity="0.2" />
      {/* Parabola curve */}
      <path
        d="M 30 180 C 60 180, 100 25, 160 25 S 260 180, 290 180"
        stroke="#B45309"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="draw-path"
      />
      {/* Labels */}
      <text x="280" y="148" fill="#0F172A" fontSize="11" fontFamily="serif" fontStyle="italic" opacity="0.35">x</text>
      <text x="55"  y="24"  fill="#0F172A" fontSize="11" fontFamily="serif" fontStyle="italic" opacity="0.35">y</text>
      <text x="258" y="50"  fill="#B45309" fontSize="11" fontFamily="serif" fontStyle="italic">f(x)</text>
      {/* Origin dot */}
      <circle cx="50" cy="155" r="2.5" fill="#0F172A" opacity="0.25" />
    </svg>
  )
}

const whyItClicks = [
  {
    icon: Film,
    title: 'Animation-first',
    body: 'We don’t just tell you the rule — we show you the picture that makes it obvious. Every concept is built frame by frame to create one unforgettable “oh, THAT’s why” moment.',
  },
  {
    icon: Lightbulb,
    title: 'Intuition before rules',
    body: 'Understand why something works and the how sticks for good. No more memorising steps that fall out of your head by next week — the picture stays with you.',
  },
  {
    icon: BarChart3,
    title: 'Mastery, not cramming',
    body: 'Short lessons that adapt to you and only move on once a concept has truly landed. Quiet, steady progress you can actually see.',
  },
]

const featuredVideos = [
  { id: 'khRu2-baG1U', title: 'Why “flip and multiply” actually works', topic: 'Fractions' },
  { id: 'Rn-PYOqOJ2A', title: 'Why negative × negative = positive',      topic: 'Algebra'   },
  { id: 'NEgGdDi6LBw', title: 'Why × can make a number smaller',          topic: 'Fractions' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 graph-grid pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* Copy */}
          <div>
            <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-6">
              Animated math that finally clicks
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-navy mb-6">
              You weren’t bad at math. You were taught it wrong.
            </h1>
            <p className="text-charcoal text-lg leading-relaxed mb-10 max-w-xl">
              Animated lessons that build real intuition — so the rules finally make sense
              instead of just getting memorised. For anyone who’s ever felt stuck, and for
              the parents helping a kid through it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#newsletter"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-terra text-white font-semibold text-base hover:bg-terra-hover transition-colors"
              >
                Get the lessons
              </Link>
              <Link
                href="/videos"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-sand text-navy font-semibold text-base hover:border-terra hover:text-terra transition-colors"
              >
                Watch a lesson <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <CoordinateSVG />
          </div>
        </div>
      </section>

      {/* ── CONCEPTS STRIP ───────────────────────────────────────────────── */}
      <section className="border-y border-sand bg-paper py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          <span className="text-stone text-xs font-medium uppercase tracking-wider">Fractions</span>
          <span className="text-sand hidden sm:block">·</span>
          <span className="text-stone text-xs font-medium uppercase tracking-wider">Negative Numbers</span>
          <span className="text-sand hidden sm:block">·</span>
          <span className="text-stone text-xs font-medium uppercase tracking-wider">Algebra</span>
          <span className="text-sand hidden sm:block">·</span>
          <span className="text-stone text-xs font-medium uppercase tracking-wider">Number Sense</span>
          <span className="text-sand hidden sm:block">·</span>
          <span className="text-stone text-xs font-medium uppercase tracking-wider">Order of Operations</span>
          <span className="text-sand hidden sm:block">·</span>
          <span className="text-stone text-xs font-medium uppercase tracking-wider">Place Value</span>
        </div>
      </section>

      {/* ── WHY IT CLICKS ────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">See the idea. Then you never forget it.</h2>
            <p className="text-stone text-lg max-w-2xl">
              Most math apps are dressed-up worksheets. We’re the opposite — every concept is an animation built to make one idea click and stay clicked.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyItClicks.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card-hover p-8 rounded-xl bg-white border border-sand">
                <div className="w-10 h-10 rounded-lg bg-terra-subtle flex items-center justify-center mb-6">
                  <Icon size={20} className="text-terra" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-3">{title}</h3>
                <p className="text-charcoal text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="#newsletter" className="inline-flex items-center gap-1 text-terra text-sm font-semibold link-terra">
              Get the lessons that make it click <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED VIDEOS ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-paper border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-2">Watch a “wait, THAT’s why?!” moment</h2>
              <p className="text-stone">This is how we teach everything — visual explanations made frame by frame with Manim.</p>
            </div>
            <Link href="/videos" className="inline-flex items-center gap-1 text-terra text-sm font-semibold">
              All videos <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map(({ id, title, topic }) => (
              <a
                key={id}
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group block rounded-xl overflow-hidden border border-sand bg-white"
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                      <svg viewBox="0 0 24 24" fill="#B45309" className="w-6 h-6 ml-1">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <span className="tag tag-terra mb-2 inline-flex">{topic}</span>
                  <h3 className="font-display font-semibold text-navy text-base">{title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-6">Sound familiar?</p>
          <div className="pull-quote space-y-5">
            <p className="font-display text-2xl sm:text-3xl text-navy leading-snug">
              “Flip and multiply.” “A negative times a negative is a positive.” “Just memorise PEMDAS.”
            </p>
            <p className="text-charcoal text-lg leading-relaxed">
              You learned the tricks. Nobody ever showed you <em>why</em> they work — so math
              became a pile of rules to fear instead of something that makes sense.
            </p>
            <p className="text-charcoal text-lg leading-relaxed">
              That’s not your fault. It’s a teaching problem. And it’s fixable — about five
              minutes a concept, one clear picture at a time.
            </p>
          </div>
          <div className="mt-8">
            <Link href="#newsletter" className="inline-flex items-center gap-1 text-terra text-base font-semibold link-terra">
              Start with the lessons that make it click <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER BAND ──────────────────────────────────────────────── */}
      <section id="newsletter" className="py-20 px-6 newsletter-band scroll-mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-terra-light text-xs font-semibold uppercase tracking-widest mb-4">
            The NumeracyHQ Newsletter
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-cream mb-4">
            One idea that makes math click.<br className="hidden sm:block" /> Every week.
          </h2>
          <p className="text-cream/70 mb-8 text-base leading-relaxed">
            For anyone who wants to finally <em>understand</em> math — not just survive it.
            One beautifully explained idea at a time. No hype. No noise.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="dark" />
          </div>
          <p className="text-cream/40 text-xs mt-4">Free. No spam. Unsubscribe any time.</p>
        </div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-5">
                Who’s behind this
              </h2>
              <div className="space-y-4 text-charcoal leading-relaxed">
                <p>
                  I’m Abba Suraj — a mathematician and engineer who got tired of watching sharp,
                  capable people walk around believing they’re “just bad at math.”
                </p>
                <p>
                  Almost nobody is. They were handed rules without reasons. So I make every lesson
                  by hand, frame by frame, with the same animation tools the best math explainers
                  use — because the right picture can do what a thousand worksheets can’t.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 mt-8 text-terra font-semibold text-sm link-terra"
              >
                More about me <ArrowRight size={14} />
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-60 h-60 rounded-2xl overflow-hidden border border-sand shadow-md">
                  <Image
                    src="/abba-suraj.png"
                    alt="Abba Suraj — founder of NumeracyHQ"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg bg-white border border-sand shadow-sm">
                  <span className="text-stone text-xs font-medium">Mathematics · Animation · Built by hand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
