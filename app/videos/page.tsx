import type { Metadata } from 'next'
import { VideoEmbed } from '@/components/VideoEmbed'

export const metadata: Metadata = {
  title: 'Lessons — Animated math that clicks',
  description:
    'Short, animated math lessons that make one idea click — fractions, negatives, algebra, and more. New ones every week.',
}

const series: { name: string; videos: { id: string; title: string; description: string }[] }[] = [
  {
    name: 'Fractions',
    videos: [
      {
        id:          'khRu2-baG1U',
        title:       'Why “flip and multiply” actually works',
        description: 'Dividing fractions isn’t a trick — it’s just asking “how many of these fit into that?” Here’s the picture your teacher skipped.',
      },
      {
        id:          'NEgGdDi6LBw',
        title:       'Why multiplying can make a number SMALLER',
        description: '“×” never meant “make bigger” — it means “take this much of.” Take half of something and of course it shrinks.',
      },
    ],
  },
  {
    name: 'Algebra',
    videos: [
      {
        id:          'Rn-PYOqOJ2A',
        title:       'Why negative × negative = positive',
        description: 'Multiplying by a negative means “flip direction.” Flip twice and you’re facing forward again — that’s the whole secret.',
      },
    ],
  },
]

export default function VideosPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 px-6 border-b border-sand">
        <div className="max-w-4xl mx-auto">
          <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-4">Lessons</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-navy mb-6">
            Math, finally explained so it clicks
          </h1>
          <p className="text-charcoal text-xl max-w-2xl leading-relaxed">
            Short, animated lessons that make one idea click — built frame by frame. New ones
            every week. Tap any thumbnail to play.
          </p>
          <a
            href="https://www.youtube.com/@NumeracyHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-6 text-terra text-sm font-semibold link-terra"
          >
            Subscribe on YouTube →
          </a>
        </div>
      </section>

      {/* ── VIDEO GRID ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {series.map(({ name, videos }) => (
            <div key={name}>
              <h2 className="font-display font-bold text-2xl text-navy mb-8 pb-4 border-b border-sand">
                {name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map(({ id, title, description }) => (
                  <div key={id} className="card-hover rounded-xl overflow-hidden border border-sand bg-white">
                    <VideoEmbed id={id} title={title} />
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-navy text-base mb-1">{title}</h3>
                      <p className="text-stone text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
