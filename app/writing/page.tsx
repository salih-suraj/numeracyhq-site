import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Writing & Research',
  description:
    'Articles, essays, and research on mathematics education, teacher development, and EdTech in Africa.',
}

const articles = [
  {
    title:    'Why Teacher Development, Not Technology, Is the Real EdTech Solution',
    date:     'June 2025',
    category: 'Teacher Development',
    summary:  'The evidence is clear: tool adoption without teacher capacity is inert. A look at what the research says about where to invest in education systems — and why PD almost always wins.',
    href:     '#',
  },
  {
    title:    'The Numeracy Gap: What the Data Says About Mathematics in Sub-Saharan Africa',
    date:     'April 2025',
    category: 'Evidence & Data',
    summary:  'A synthesis of PASEC, SACMEQ, and national assessment data — what it reveals about where and when students lose ground in mathematics, and what the patterns suggest for intervention design.',
    href:     '#',
  },
  {
    title:    'Designing PD Programmes that Actually Change Classroom Practice',
    date:     'February 2025',
    category: 'Programme Design',
    summary:  'Most teacher training does not transfer to the classroom. An evidence-based look at what design features predict classroom transfer — and how to build them in from the start, not add them later.',
    href:     '#',
  },
  {
    title:    'What Cognitive Load Theory Means for Mathematics Teachers in Large Classes',
    date:     'November 2024',
    category: 'Learning Science',
    summary:  'Cognitive load research is robust and largely unknown in African teacher education. A practical introduction for teachers and PD designers working with classes of 50+ students.',
    href:     '#',
  },
  {
    title:    'The Promise and Limits of EdTech in Low-Resource Contexts',
    date:     'September 2024',
    category: 'EdTech',
    summary:  'Technology can accelerate good education and amplify poor education. A critical review of the evidence on EdTech in African school systems — what works, what does not, and what we still do not know.',
    href:     '#',
  },
]

const research = [
  {
    citation: 'Suraj, A. (2025). [REPLACE: Full paper title]. [REPLACE: Journal or report name]. [REPLACE: DOI or URL].',
    type:     'Journal article',
  },
  {
    citation: 'Suraj, A., & [REPLACE: co-author]. (2024). [REPLACE: Full report title]. [REPLACE: Organisation / funder]. [REPLACE: URL or DOI].',
    type:     'Technical report',
  },
  {
    citation: '[REPLACE: Add additional publications in APA or Chicago format. Prioritise peer-reviewed output and commissioned reports — this is what international agencies check.]',
    type:     'Working paper',
  },
]

export default function WritingPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 px-6 border-b border-sand">
        <div className="max-w-4xl mx-auto">
          <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-4">
            Writing & Research
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-navy mb-6">
            Ideas & evidence
          </h1>
          <p className="text-charcoal text-xl max-w-2xl leading-relaxed">
            Long-form thinking on mathematics education, teacher development, learning science,
            and EdTech in African contexts.
          </p>
        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-navy mb-10">Articles & essays</h2>
          <div className="border border-sand rounded-xl overflow-hidden">
            {articles.map(({ title, date, category, summary, href }) => (
              <Link
                key={title}
                href={href}
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-6 bg-white border-b border-sand last:border-b-0 hover:bg-paper transition-colors group"
              >
                <div className="flex-shrink-0 text-stone text-sm pt-0.5 w-28">{date}</div>
                <div>
                  <span className="tag mb-2 inline-flex">{category}</span>
                  <h3 className="font-display font-semibold text-navy text-lg mb-1 group-hover:text-terra transition-colors">
                    {title}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">{summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH & PUBLICATIONS ──────────────────────────────────────── */}
      <section className="py-20 px-6 bg-paper border-t border-sand">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-navy mb-3">
            Research & publications
          </h2>
          <p className="text-stone text-sm mb-10 max-w-xl">
            Peer-reviewed articles, technical reports, and commissioned briefs.
            [REPLACE: add your actual publications in order of recency.]
          </p>
          <div>
            {research.map(({ citation, type }, i) => (
              <div key={i} className="pub-item py-5 first:pt-0">
                <span className="tag mb-3 inline-flex">{type}</span>
                <p className="text-charcoal text-sm leading-relaxed">{citation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
