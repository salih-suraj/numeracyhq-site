import type { Metadata } from 'next'
import { MousePointer2, Sliders, Download, Code2 } from 'lucide-react'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata: Metadata = {
  title: 'NumeracyHQ Studio',
  description: 'Create mathematical animations without code. A visual drag-and-drop tool powered by Manim. Coming 2027.',
}

const panels = [
  {
    icon:  MousePointer2,
    title: 'Drag & Drop Interface',
    body:  'Add math objects from a visual library. Position them on a canvas. No terminal. No Python. No Manim syntax to memorise.',
    color: 'text-electric',
    bg:    'bg-electric/10',
  },
  {
    icon:  Sliders,
    title: 'One-Click Animation',
    body:  'Select any object. Choose an animation from a panel. Adjust timing and easing with a slider. Preview instantly.',
    color: 'text-pink',
    bg:    'bg-pink/10',
  },
  {
    icon:  Download,
    title: 'Export Anywhere',
    body:  'Export as MP4, GIF, or image sequence. Manim-quality output — without the learning curve.',
    color: 'text-neon',
    bg:    'bg-neon/10',
  },
]

const perks = [
  'Beta access before public launch',
  'Lifetime discount on Studio Pro',
  'Vote on which features ship first',
  'Direct line to the founder',
]

export default function StudioPage() {
  return (
    <>
      {/* ── HERO — full screen ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-pink/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="badge bg-gold/10 text-gold border border-gold/30 mb-8">
            Development begins 2027
          </span>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6 text-snow">
            Create Mathematical Animations{' '}
            <span className="gradient-text">Without Code</span>
          </h1>

          <p className="text-snow/70 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            NumeracyHQ Studio is a visual animation tool for math educators.
            Drag, arrange, animate — powered by Manim under the hood.
            No Python. No terminal. No syntax errors.
          </p>

          <div className="flex justify-center mb-4">
            <WaitlistForm
              formName="studio-waitlist"
              buttonLabel="Join the Waitlist"
              accentColor="pink"
            />
          </div>
          <p className="text-muted text-xs">
            No spam. One email when we launch. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ── THE PROBLEM ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-card/20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Code2 size={20} className="text-electric" />
            <span className="text-muted text-sm font-medium uppercase tracking-wider">The Problem</span>
          </div>
          <blockquote className="font-display font-bold text-2xl sm:text-3xl text-snow leading-relaxed">
            &ldquo;Manim is the most powerful tool for mathematical animation in existence.
            But it requires Python. Most math educators are not programmers — so they
            use PowerPoint, markers, or Wacom tablets instead.&rdquo;
          </blockquote>
          <p className="text-electric font-semibold mt-6">
            NumeracyHQ Studio is the bridge.
          </p>
        </div>
      </section>

      {/* ── THE VISION ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-4xl text-snow text-center mb-16">
            The Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {panels.map(({ icon: Icon, title, body, color, bg }) => (
              <div key={title} className="glow-card flex flex-col p-8 rounded-2xl bg-card border border-border">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg} mb-6`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="font-display font-bold text-xl text-snow mb-3">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAITLIST PERKS ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="font-display font-bold text-4xl text-snow mb-4">
                Be part of the first release.
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Early waitlist members get exclusive access and direct input on what
                NumeracyHQ Studio becomes. This is your chance to shape a tool built
                for educators, by educators.
              </p>
              <ul className="space-y-3">
                {perks.map(perk => (
                  <li key={perk} className="flex items-center gap-3 text-snow/80 text-sm">
                    <span className="w-5 h-5 rounded-full bg-neon/10 text-neon text-xs flex items-center justify-center flex-shrink-0">
                      ✓
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-pink/20 shadow-lg shadow-pink/5">
              <h3 className="font-display font-bold text-xl text-snow mb-6">
                Join the Waitlist
              </h3>
              <WaitlistForm
                formName="studio-waitlist"
                buttonLabel="Reserve My Spot"
                placeholder="your@email.com"
                accentColor="pink"
              />
              <p className="text-muted text-xs mt-4">
                {/* Replace this number as your list grows */}
                Join educators who are already waiting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
