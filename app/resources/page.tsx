import type { Metadata } from 'next'
import { Download, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources for Mathematics Teachers',
  description:
    'Teaching activities, research summaries, tools, and curated links for mathematics educators in Africa.',
}

const categories = [
  {
    name:        'Teaching Activities',
    description: 'Classroom-ready activities for mathematics teachers, organised by topic and level.',
    resources: [
      {
        title:    '[REPLACE: Activity title — e.g. "Visualising Fractions: A Concrete–Pictorial–Abstract Sequence for Grades 3–5"]',
        type:     'PDF Activity',
        level:    'Primary (Grades 3–6)',
        href:     '#',
        external: false,
      },
    ],
  },
  {
    name:        'Research Summaries',
    description: 'Accessible summaries of key research for busy teachers and programme designers.',
    resources: [
      {
        title:    '[REPLACE: Summary title — e.g. "What the Evidence Says About Worked Examples in Mathematics Teaching"]',
        type:     'PDF Summary',
        level:    'All levels',
        href:     '#',
        external: false,
      },
    ],
  },
  {
    name:        'Tools & Templates',
    description: 'Practical tools for lesson planning, classroom observation, and assessment.',
    resources: [
      {
        title:    '[REPLACE: Tool title — e.g. "Classroom Observation Protocol for Mathematics Lessons"]',
        type:     'Word / PDF',
        level:    'All levels',
        href:     '#',
        external: false,
      },
    ],
  },
  {
    name:        'External Links',
    description: 'Curated links to high-quality external resources I recommend.',
    resources: [
      {
        title:    'PASEC 2019 International Report — data on mathematics learning across Francophone Africa',
        type:     'External report',
        level:    'Research',
        href:     'https://www.pasec.confemen.org',
        external: true,
      },
      {
        title:    'SACMEQ — Southern and Eastern African Consortium for Monitoring Educational Quality',
        type:     'External resource',
        level:    'Research',
        href:     'http://www.sacmeq.org',
        external: true,
      },
      {
        title:    'Manim Community Edition — for educators interested in mathematical animation',
        type:     'Tool',
        level:    'All levels',
        href:     'https://www.manim.community',
        external: true,
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 px-6 border-b border-sand">
        <div className="max-w-4xl mx-auto">
          <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-4">Resources</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-navy mb-6">
            For mathematics teachers
          </h1>
          <p className="text-charcoal text-xl max-w-2xl leading-relaxed">
            Teaching activities, research summaries, tools, and curated links. This library is
            growing — subscribe to the newsletter to be notified when new resources are added.
          </p>
        </div>
      </section>

      {/* ── RESOURCE LIBRARY ─────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {categories.map(({ name, description, resources }) => (
            <div key={name}>
              <div className="mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-2">{name}</h2>
                <p className="text-stone text-sm">{description}</p>
              </div>
              <div className="space-y-3">
                {resources.map(({ title, type, level, href, external }) => {
                  const Icon = external ? ExternalLink : Download
                  return (
                    <a
                      key={title}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-5 p-5 rounded-xl border border-sand bg-white hover:bg-paper hover:border-terra/30 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-terra-subtle flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={16} className="text-terra" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-navy text-sm font-semibold mb-2 group-hover:text-terra transition-colors">
                          {title}
                        </h3>
                        <div className="flex gap-2">
                          <span className="tag">{type}</span>
                          <span className="tag">{level}</span>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SUGGEST ──────────────────────────────────────────────────────── */}
      <section className="py-12 px-6 bg-paper border-t border-sand">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-stone text-sm">
            Is there a resource or topic you would like to see here?{' '}
            <a href="/contact" className="text-terra font-semibold hover:underline">
              Get in touch
            </a>.
          </p>
        </div>
      </section>
    </>
  )
}
