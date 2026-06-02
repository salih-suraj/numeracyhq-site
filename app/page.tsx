import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, Users, BarChart3 } from 'lucide-react'
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

const whatIDo = [
  {
    icon: Users,
    title: 'Teacher Development',
    body: 'Designing and evaluating professional development programmes for mathematics teachers across Sub-Saharan Africa, with a focus on classroom transfer and system-level change.',
  },
  {
    icon: BookOpen,
    title: 'Learning Science & Numeracy',
    body: 'Applying evidence from cognitive science and mathematics education research to curriculum design, instructional materials, and assessment — especially in under-resourced contexts.',
  },
  {
    icon: BarChart3,
    title: 'EdTech, Evaluated',
    body: 'Building, procuring, and critically reviewing education technology tools — with monitoring frameworks, data infrastructure, and evidence of impact built in from the start.',
  },
]

const featuredVideos = [
  { id: 'ksvfU_CUmm0', title: 'Statistics Explained Through Animation', topic: 'Statistics' },
  { id: 'ETFna9v6Yqc', title: 'Mathematical Visualization with Manim',  topic: 'Mathematics' },
  { id: '[REPLACE-VIDEO-ID]', title: '[REPLACE: Video 3 title]',         topic: '[REPLACE]'  },
]

const featuredWriting = [
  {
    title:   'Why Teacher Development, Not Technology, Is the Real EdTech Solution',
    date:    'June 2025',
    summary: 'The evidence is clear: tool adoption without teacher capacity is inert. What the research says about where to invest — and why PD almost always wins.',
  },
  {
    title:   'The Numeracy Gap: What the Data Says About Mathematics in Sub-Saharan Africa',
    date:    'April 2025',
    summary: 'A synthesis of PASEC, SACMEQ, and national assessments — what it reveals about where students lose ground, and what the patterns suggest for intervention design.',
  },
  {
    title:   'Designing PD Programmes that Actually Change Classroom Practice',
    date:    'February 2025',
    summary: 'Most teacher training does not transfer to the classroom. What design features predict classroom transfer — and how to build them in from the start.',
  },
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
              Mathematics Education · Teacher Development · Africa
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-navy mb-6">
              Helping African education systems teach mathematics better.
            </h1>
            <p className="text-charcoal text-lg leading-relaxed mb-10 max-w-xl">
              Combining learning science, teacher professional development, and the engineering
              to deliver it at scale — so that every child has access to a mathematics teacher
              who knows their subject and how to teach it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-terra text-white font-semibold text-base hover:bg-terra-hover transition-colors"
              >
                Subscribe to the newsletter
              </Link>
              <Link
                href="/consulting"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-sand text-navy font-semibold text-base hover:border-terra hover:text-terra transition-colors"
              >
                Work with me <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <CoordinateSVG />
          </div>
        </div>
      </section>

      {/* ── EXPERTISE STRIP ──────────────────────────────────────────────── */}
      <section className="border-y border-sand bg-paper py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          <span className="text-stone text-xs font-medium uppercase tracking-wider">Teacher Professional Development</span>
          <span className="text-sand hidden sm:block">·</span>
          <span className="text-stone text-xs font-medium uppercase tracking-wider">Learning Science</span>
          <span className="text-sand hidden sm:block">·</span>
          <span className="text-stone text-xs font-medium uppercase tracking-wider">Curriculum Design</span>
          <span className="text-sand hidden sm:block">·</span>
          <span className="text-stone text-xs font-medium uppercase tracking-wider">EdTech Strategy</span>
          <span className="text-sand hidden sm:block">·</span>
          <span className="text-stone text-xs font-medium uppercase tracking-wider">Monitoring & Evaluation</span>
          <span className="text-sand hidden sm:block">·</span>
          <span className="text-stone text-xs font-medium uppercase tracking-wider">Numeracy</span>
        </div>
      </section>

      {/* ── WHAT I DO ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">What I do</h2>
            <p className="text-stone text-lg max-w-2xl">
              Three overlapping areas of practice, each grounded in evidence and orientated toward what actually improves outcomes for learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatIDo.map(({ icon: Icon, title, body }) => (
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
            <Link href="/consulting" className="inline-flex items-center gap-1 text-terra text-sm font-semibold link-terra">
              See how I work with organisations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED VIDEOS ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-paper border-y border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-2">Mathematical animations</h2>
              <p className="text-stone">Visual explanations of mathematics, made with Manim Community Edition.</p>
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

      {/* ── FEATURED WRITING ─────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-2">Recent writing</h2>
              <p className="text-stone">Evidence-based thinking on mathematics education and teacher development.</p>
            </div>
            <Link href="/writing" className="inline-flex items-center gap-1 text-terra text-sm font-semibold">
              All writing <ArrowRight size={14} />
            </Link>
          </div>

          <div className="border border-sand rounded-xl overflow-hidden">
            {featuredWriting.map(({ title, date, summary }) => (
              <Link
                key={title}
                href="/writing"
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-6 bg-white border-b border-sand last:border-b-0 hover:bg-paper transition-colors group"
              >
                <div className="flex-shrink-0 text-stone text-sm pt-0.5 w-28">{date}</div>
                <div>
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

      {/* ── NEWSLETTER BAND ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 newsletter-band">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-terra-light text-xs font-semibold uppercase tracking-widest mb-4">
            The NumeracyHQ Newsletter
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-cream mb-4">
            One idea. One piece of evidence.<br className="hidden sm:block" /> One resource.
          </h2>
          <p className="text-cream/70 mb-8 text-base leading-relaxed">
            Every two weeks, for mathematics educators who want to teach better.
            No hype. No noise. Just substance.
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
                About Abba Suraj
              </h2>
              <div className="space-y-4 text-charcoal leading-relaxed">
                <p>
                  I am an education technologist and mathematics education specialist, working
                  on the problem of technology-enabled teacher development in Africa.
                </p>
                <p>
                  My background combines electrical engineering and information technology with
                  years of practical work in teacher professional development and EdTech deployment
                  across Sub-Saharan Africa. NumeracyHQ is the public face of that work.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 mt-8 text-terra font-semibold text-sm link-terra"
              >
                Read my full bio <ArrowRight size={14} />
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-60 h-60 rounded-2xl overflow-hidden border border-sand shadow-md">
                  <Image
                    src="/abba-suraj.png"
                    alt="Abba Suraj — Education Technologist"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg bg-white border border-sand shadow-sm">
                  <span className="text-stone text-xs font-medium">Mathematics Education · EdTech · Africa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
