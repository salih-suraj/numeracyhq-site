import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'About — Abba Suraj',
  description:
    'Education technologist and mathematics education specialist working on technology-enabled teacher development in Africa.',
}

const expertise = [
  'Mathematics teacher professional development — design, facilitation, and evaluation',
  'Curriculum alignment and instructional materials development',
  'Learning science and cognitive science applied to mathematics education',
  'Monitoring, evaluation, and learning (MEL) frameworks for education programmes',
  'EdTech strategy, architecture, and independent evidence-based review',
  'Numeracy and early mathematics — assessment, pedagogy, and intervention design',
  'Programme design for large-scale and donor-funded education initiatives',
  'Mathematical visualization and animated content production (Manim)',
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
                alt="Abba Suraj — Education Technologist"
                width={260}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-navy text-sm font-semibold">Abba Suraj</p>
              <p className="text-stone text-sm">Education Technologist</p>
              <p className="text-stone text-sm">Mathematics Education Specialist</p>
              <p className="text-stone text-sm">[REPLACE: Location, Nigeria]</p>
            </div>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-terra text-white font-semibold text-sm hover:bg-terra-hover transition-colors"
            >
              Work with me <ArrowRight size={15} />
            </Link>
          </div>

          {/* Bio */}
          <div className="lg:col-span-2 space-y-6 text-charcoal leading-relaxed text-base">
            <p>
              I am an education technologist and mathematics education specialist, working at the
              intersection of learning science, teacher professional development, and the engineering
              required to deliver educational change at scale — specifically in Sub-Saharan Africa.
            </p>
            <p>
              My background is in electrical engineering and information technology. I came to
              education through practice, not through the academy — and that has shaped how I
              approach the field. I am as interested in the plumbing as the theory: what actually
              reaches teachers, what actually changes classrooms, what evidence we have for any of it.
            </p>
            <p>
              Over the past [REPLACE: X years], I have worked on teacher professional development
              programmes, curriculum design projects, and EdTech deployments across
              [REPLACE: specific countries or regions]. Through that work, I have developed a deep
              conviction that mathematics teacher development — done well, at scale, with a clear
              theory of change and proper evaluation — is one of the highest-leverage investments
              any education system can make.
            </p>
            <p>
              NumeracyHQ is the public face of that conviction. It is a platform for the ideas,
              evidence, and tools I find most useful — and a way of building a community of
              mathematics educators who are serious about improving their practice.
            </p>

            <blockquote className="pull-quote py-2 text-navy font-display text-xl font-medium italic">
              &ldquo;The bottleneck is not the curriculum. It is not the textbook. It is not the
              technology. It is almost always the teacher — and the systems that support them.&rdquo;
            </blockquote>

            <p>
              My work spans programme design, monitoring and evaluation, EdTech strategy, and content
              production. I write, make mathematical animations, consult for organisations working in
              African education systems, and think publicly about the evidence base for mathematics
              education and teacher development.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-paper border-y border-sand">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-terra text-xs font-semibold uppercase tracking-widest mb-5">Mission</p>
          <p className="font-display text-2xl sm:text-3xl text-navy font-medium leading-snug">
            Every child in Africa deserves a mathematics teacher who knows their subject and knows
            how to teach it. The question is how to get there — at scale, with evidence, and sustainably.
          </p>
        </div>
      </section>

      {/* ── EXPERTISE & WHY IT MATTERS ───────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <h2 className="font-display font-bold text-3xl text-navy mb-8">Areas of expertise</h2>
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
            <h2 className="font-display font-bold text-3xl text-navy mb-8">Why this work matters</h2>
            <div className="space-y-5 text-charcoal text-sm leading-relaxed">
              <p>
                Mathematics is a gatekeeper subject. Students who do not develop strong numeracy and
                mathematical reasoning by the end of primary school are systematically disadvantaged —
                in secondary school, in higher education, and in economic participation.
              </p>
              <p>
                Across Sub-Saharan Africa, the data is stark. PASEC, SACMEQ, and national assessments
                consistently show that significant proportions of students finish primary school without
                functional numeracy. This is not primarily a question of student ability — it is a
                question of instructional quality.
              </p>
              <p>
                Teacher professional development is not the only solution, but it is the
                highest-multiplier intervention at scale. A well-designed PD programme — grounded in
                learning science, delivered with fidelity, and evaluated honestly — reaches every
                student that teacher will ever teach.
              </p>
              <p>
                The challenge is designing and delivering PD that actually transfers to classroom
                practice. Most does not. Getting that right — at scale, in resource-constrained
                contexts, with technology as an enabler rather than a distraction — is the central
                problem I work on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-paper border-t border-sand">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-navy mb-3">Follow the work</h2>
          <p className="text-stone mb-6 text-sm leading-relaxed">
            The NumeracyHQ newsletter goes out every two weeks — one teaching idea, one piece of
            evidence, one resource. Free.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
