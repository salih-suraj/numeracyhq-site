import type { Metadata } from 'next'
import { VideoEmbed } from '@/components/VideoEmbed'

export const metadata: Metadata = {
  title: 'Videos — Mathematical Animations',
  description:
    'Mathematical animations and visual explanations made with Manim Community Edition, organised by topic.',
}

const series: { name: string; videos: { id: string; title: string; description: string }[] }[] = [
  {
    name: 'Statistics',
    videos: [
      {
        id:          'ksvfU_CUmm0',
        title:       'Statistics Explained Through Animation',
        description: 'A visual walkthrough of key statistical concepts — mean, variance, and distribution — using Manim-based animation.',
      },
    ],
  },
  {
    name: 'Mathematics',
    videos: [
      {
        id:          'ETFna9v6Yqc',
        title:       'Mathematical Visualization with Manim',
        description: 'Exploring how Manim Community Edition can be used to bring mathematical ideas to life for learners at any level.',
      },
      {
        id:          '[REPLACE-VIDEO-ID]',
        title:       '[REPLACE: Video title]',
        description: '[REPLACE: Short description of what this video covers and who it is for.]',
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
          <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-4">Videos</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-navy mb-6">
            Mathematical animations
          </h1>
          <p className="text-charcoal text-xl max-w-2xl leading-relaxed">
            Visual explanations of mathematics, made with Manim Community Edition. Organised by
            topic — click any thumbnail to play.
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
