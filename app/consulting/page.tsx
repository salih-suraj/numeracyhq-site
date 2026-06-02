import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Work with me — Consulting & Advisory',
  description:
    'Programme design, teacher PD, EdTech strategy, MEL, and speaking. Working with ministries, donors, and international education organisations in Africa.',
}

const services = [
  {
    title: 'Programme Design & Implementation',
    body: 'End-to-end design of mathematics education programmes — from theory of change through implementation plan, resource development, and facilitator training. Experienced with both government-led and donor-funded programme structures.',
  },
  {
    title: 'Monitoring, Evaluation & Learning',
    body: 'MEL framework design, baseline and endline assessments, learning data systems, and programme evaluation. I am particularly interested in building evaluation into programmes from the start, not bolting it on at the end.',
  },
  {
    title: 'Teacher PD Design & Facilitation',
    body: 'Design of professional development curricula for mathematics teachers, grounded in learning science. Cascade model design, facilitator guides, classroom observation tools, and coaching frameworks.',
  },
  {
    title: 'EdTech Architecture, Strategy & Review',
    body: 'Independent review and strategic advice on EdTech investments — including product selection, implementation planning, and evidence review. I am not affiliated with any EdTech vendor.',
  },
  {
    title: 'Speaking & Advisory',
    body: 'Conference presentations, panel contributions, and advisory roles on topics spanning mathematics education, teacher development, learning science, and EdTech in African contexts.',
  },
]

const clientTypes = [
  'Ministries of Education',
  'Bilateral and multilateral donors (USAID, FCDO, GIZ, EU, World Bank, etc.)',
  'International NGOs and INGOs working in education',
  'EdTech organisations working in African markets',
  'Universities and research institutions',
  'Curriculum and assessment bodies',
]

export default function ConsultingPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 px-6 border-b border-sand">
        <div className="max-w-4xl mx-auto">
          <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-4">
            Work with me
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-navy mb-6">
            Consulting & Advisory
          </h1>
          <p className="text-charcoal text-xl leading-relaxed max-w-2xl">
            I work with organisations that are serious about improving mathematics education in
            Africa — ministries, donors, international agencies, and EdTech organisations that
            want their investments to actually work.
          </p>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-navy mb-12">Services</h2>
          <div className="border border-sand rounded-xl overflow-hidden">
            {services.map(({ title, body }) => (
              <div key={title} className="p-8 bg-white border-b border-sand last:border-b-0">
                <h3 className="font-display font-bold text-xl text-navy mb-3">{title}</h3>
                <p className="text-charcoal text-sm leading-relaxed max-w-2xl">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO I WORK WITH ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-paper border-y border-sand">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <div>
            <h2 className="font-display font-bold text-3xl text-navy mb-6">Who I work with</h2>
            <ul className="space-y-3">
              {clientTypes.map(type => (
                <li key={type} className="flex items-start gap-3 text-charcoal text-sm">
                  <span className="text-terra mt-0.5 flex-shrink-0">→</span>
                  {type}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-3xl text-navy mb-6">How I engage</h2>
            <div className="space-y-5 text-charcoal text-sm leading-relaxed">
              <p>
                I work on short-term consultancies, longer-term advisory retainers, and
                project-based engagements. I am based in Abuja and Kano, Nigeria, and work across
                Africa and with international partners remotely.
              </p>
              <p>
                I take on a limited number of projects at any time so I can do each one properly.
                If you have a programme or project in mind, the best first step is a brief
                conversation.
              </p>
              <p>
                I do not work on commission or referral arrangements with any EdTech vendor,
                curriculum publisher, or assessment provider — my advice is independent.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-lg bg-terra text-white font-semibold text-sm hover:bg-terra-hover transition-colors"
              >
                <Mail size={15} />
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-navy mb-3">Start a conversation</h2>
          <p className="text-stone text-sm mb-10 max-w-xl">
            Tell me about your programme, project, or question. I respond to all serious enquiries,
            usually within 48 hours.
          </p>
          <div className="p-8 rounded-2xl bg-white border border-sand shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
