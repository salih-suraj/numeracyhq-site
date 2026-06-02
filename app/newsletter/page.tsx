import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Subscribe to the NumeracyHQ Newsletter',
  description:
    'One teaching idea, one piece of evidence, one resource. Every two weeks, for mathematics educators who want to teach better.',
}

const whatToExpect = [
  'One teaching idea from learning science or mathematics education research',
  'One piece of evidence — a study, report, or data point worth knowing about',
  'One resource — a tool, activity, or link you can actually use',
  'Occasional longer essays on topics I am thinking about carefully',
]

const forWhom = [
  'Mathematics teachers at any level — primary, junior secondary, senior secondary',
  'Teacher educators and PD facilitators working in mathematics',
  'Programme designers and curriculum developers',
  'Education researchers and policy professionals',
  'Anyone who thinks mathematics education in Africa deserves better',
]

export default function NewsletterPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-20 px-6 newsletter-band text-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-terra-light text-xs font-semibold uppercase tracking-widest mb-4">
            The NumeracyHQ Newsletter
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-cream mb-6 leading-tight">
            One idea. One piece of evidence. One resource.
          </h1>
          <p className="text-cream/70 text-xl leading-relaxed mb-10">
            Every two weeks, for mathematics educators who want to teach — and think — better.
            No hype. No noise. Just substance.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="dark" />
          </div>
          <p className="text-cream/40 text-xs mt-4">Free. No spam. Unsubscribe any time.</p>
        </div>
      </section>

      {/* ── WHAT TO EXPECT / WHO IT IS FOR ───────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <h2 className="font-display font-bold text-2xl text-navy mb-8">
              What every issue contains
            </h2>
            <ul className="space-y-4">
              {whatToExpect.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-terra flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 rounded-xl bg-paper border border-sand">
              <p className="text-stone text-xs leading-relaxed">
                <span className="text-navy font-semibold">Frequency:</span>{' '}
                Every two weeks, on [REPLACE: day of week, e.g. Tuesday]. Issues are between 500
                and 900 words — long enough to be useful, short enough to read in five minutes.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-2xl text-navy mb-8">Who it is for</h2>
            <ul className="space-y-4">
              {forWhom.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-terra mt-1 flex-shrink-0 text-sm font-bold">→</span>
                  <span className="text-charcoal text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── HONEST PITCH ─────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-paper border-y border-sand">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-navy mb-5">An honest pitch</h2>
          <div className="space-y-4 text-charcoal text-sm leading-relaxed">
            <p>
              There are many newsletters. Most of them are not worth your time. I am aware of this,
              and I am committed to only sending you something when I have something worth saying.
            </p>
            <p>
              The NumeracyHQ newsletter is not a content marketing exercise. It is how I share the
              evidence and ideas I find most useful — written for people who actually work in
              classrooms and with teachers, not for people who want to feel informed without doing
              the reading.
            </p>
            <p>
              If I stop having things worth saying, I will stop sending issues. The list is yours
              to leave whenever you want.
            </p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-navy mb-4">Ready to subscribe?</h2>
          <p className="text-stone mb-8">Free. No spam. You can unsubscribe any time.</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
