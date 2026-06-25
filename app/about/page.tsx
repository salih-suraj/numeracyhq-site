import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'About — Abba Suraj',
  description:
    'I’m Abba Suraj — a mathematician and engineer who makes animated math lessons that finally make sense. The story behind NumeracyHQ.',
}

const expertise = [
  'Mathematical animation and visual explanation (Manim)',
  'Making hard ideas intuitive — fractions, negative numbers, the leap into algebra',
  'Lesson and curriculum design grounded in learning science',
  'Mastery-based learning that adapts to the learner',
  'Number sense and early mathematics — how understanding actually forms',
  'Building the software that delivers all of it',
]

export default function AboutPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 px-6 border-b border-sand">
        <div className="max-w-4xl mx-auto">
          <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-4">About</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-navy">Abba Suraj</h1>
        </div>
      </section>

      {/* ── BIO & PHOTO ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Photo & details */}
          <div className="flex flex-col items-start gap-6">
            <div className="w-full max-w-[260px] rounded-2xl overflow-hidden border border-sand shadow-sm">
              <Image
                src="/abba-suraj.png"
                alt="Abba Suraj — founder of NumeracyHQ"
                width={260}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-navy text-sm font-semibold">Abba Suraj</p>
              <p className="text-stone text-sm">Founder, NumeracyHQ</p>
              <p className="text-stone text-sm">Mathematician &amp; Engineer</p>
              <p className="text-stone text-sm">Abuja · Kano, Nigeria</p>
            </div>
            <Link
              href="/#newsletter"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-terra text-white font-semibold text-sm hover:bg-terra-hover transition-colors"
            >
              Get the lessons <ArrowRight size={15} />
            </Link>
          </div>

          {/* Bio */}
          <div className="lg:col-span-2 space-y-6 text-charcoal leading-relaxed text-base">
            <p>
              I’m Abba Suraj. I build NumeracyHQ — animated math lessons that try to do one
              stubborn thing: make math actually <em>make sense</em>.
            </p>
            <p>
              My background is in electrical engineering and information technology. I came to
              math the way a lot of people do — through building things, not through the academy.
              That shaped how I think about it: I’m as interested in the picture as the proof,
              in what actually makes an idea click inside someone’s head.
            </p>
            <p>
              And I kept meeting the same person. Smart, capable, quietly convinced they were
              “just bad at math.” Almost none of them were. They’d been handed rules without
              reasons — flip and multiply, two negatives make a positive, just memorise it —
              until math stopped being something you understand and became something you fear.
            </p>
            <p>
              So I make every lesson by hand, frame by frame, with the same animation tools the
              best math explainers use. Because the right picture can do in fifteen seconds what
              a thousand worksheets never will. NumeracyHQ is where those lessons live.
            </p>

            <blockquote className="pull-quote py-2 text-navy font-display text-xl font-medium italic">
              &ldquo;The problem was almost never the student. It was almost always the
              explanation.&rdquo;
            </blockquote>

            <p>
              Today I’m building NumeracyHQ into the place math finally clicks — starting with
              the concepts people get stuck on most: fractions, negative numbers, and the leap
              into algebra. One clear picture at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-paper border-y border-sand">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-terra text-xs font-semibold uppercase tracking-widest mb-5">Mission</p>
          <p className="font-display text-2xl sm:text-3xl text-navy font-medium leading-snug">
            Nobody should grow up believing they’re “just bad at math.” Almost no one is. The
            goal is simple — make the ideas visible, so they make sense the first time.
          </p>
        </div>
      </section>

      {/* ── EXPERTISE & WHY IT MATTERS ───────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <h2 className="font-display font-bold text-3xl text-navy mb-8">What I do</h2>
            <ul className="space-y-3">
              {expertise.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-terra flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-3xl text-navy mb-8">Why this matters</h2>
            <div className="space-y-5 text-charcoal text-sm leading-relaxed">
              <p>
                Math is a gatekeeper subject. Fall behind early and it quietly closes doors —
                in school, in confidence, in the kinds of work and study that stay open to you.
              </p>
              <p>
                But most people who struggle aren’t short on ability. They’re short on a good
                explanation. Somewhere along the way they were taught the <em>steps</em> and never
                the <em>why</em> — and once math becomes memorisation, it becomes forgettable and
                frightening at the same time.
              </p>
              <p>
                Visual, intuition-first teaching fixes that. When you can <em>see</em> why something
                works, you don’t have to memorise it — and you don’t forget it. That’s the entire
                idea behind everything I make.
              </p>
              <p>
                Get that right, at scale, and you change how a lot of people feel about a subject
                they were told they’d never be good at. That’s the problem I work on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-paper border-t border-sand">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-navy mb-3">Follow along</h2>
          <p className="text-stone mb-6 text-sm leading-relaxed">
            The NumeracyHQ newsletter goes out every week — one idea that makes math click,
            beautifully explained. Free.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
