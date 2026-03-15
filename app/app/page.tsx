import type { Metadata } from 'next'
import { Gamepad2, BrainCircuit, TrendingUp, Users } from 'lucide-react'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata: Metadata = {
  title: 'NumeracyHQ App',
  description: 'An interactive math learning app for children — counting, patterns, and number sense. Now in testing on Android.',
}

const features = [
  {
    icon:  Gamepad2,
    title: 'Counting Games',
    body:  'Engaging games that teach counting from 0 to 100 through play, not rote repetition.',
    color: 'text-electric',
    bg:    'bg-electric/10',
  },
  {
    icon:  BrainCircuit,
    title: 'Pattern Recognition',
    body:  'Visual challenges that train the brain to spot sequences, shapes, and mathematical patterns.',
    color: 'text-pink',
    bg:    'bg-pink/10',
  },
  {
    icon:  TrendingUp,
    title: 'Number Matching',
    body:  'Activities that connect numerals, quantities, and words — building true number sense.',
    color: 'text-gold',
    bg:    'bg-gold/10',
  },
  {
    icon:  Users,
    title: 'Parent Tracking',
    body:  'Simple progress insights so parents and teachers know exactly where a child needs support.',
    color: 'text-neon',
    bg:    'bg-neon/10',
  },
]

export default function AppPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left */}
          <div>
            <span className="badge bg-neon/10 text-neon border border-neon/30 mb-6">
              Now in Testing — Android
            </span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-snow leading-tight mb-6">
              Math for{' '}
              <span className="gradient-text">Little Minds</span>
            </h1>
            <p className="text-snow/70 text-lg leading-relaxed mb-8">
              NumeracyHQ is an interactive app that helps children build number sense
              through games, pattern matching, and guided activities. Built for fun.
              Designed for learning.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-muted text-sm mb-3">
                  Be first when we launch on Google Play:
                </p>
                <WaitlistForm
                  formName="app-waitlist"
                  buttonLabel="Get Early Access"
                  placeholder="parent@email.com"
                  accentColor="neon"
                />
              </div>
            </div>
          </div>

          {/* Right — phone mockup placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-56 aspect-[9/16] rounded-[2rem] bg-card border-2 border-border shadow-2xl shadow-black/50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-b from-electric/10 to-pink/10" />
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4">🔢</div>
                  <p className="font-display font-bold text-electric text-2xl mb-1">
                    NumeracyHQ
                  </p>
                  <p className="text-muted text-xs mb-6">for Kids</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[1,2,3,4,5,6,7,8,9].map(n => (
                      <div
                        key={n}
                        className="w-10 h-10 rounded-xl bg-card/80 border border-border flex items-center justify-center text-snow font-bold text-sm"
                      >
                        {n}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 px-4 py-2 rounded-xl bg-electric/20 border border-electric/30">
                    <span className="text-electric text-xs font-semibold">Count to 10 →</span>
                  </div>
                </div>
              </div>

              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-card border border-gold/30 flex items-center justify-center text-2xl animate-float">
                ✨
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl bg-card border border-pink/30 flex items-center justify-center text-xl animate-float" style={{ animationDelay: '2s' }}>
                🎯
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-4xl text-snow text-center mb-4">
            Built Around How Children Learn
          </h2>
          <p className="text-muted text-center text-lg mb-16 max-w-xl mx-auto">
            Not flashcards. Not rote memorisation. Activities designed around how
            children actually develop number sense.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, body, color, bg }) => (
              <div key={title} className="glow-card flex items-start gap-5 p-7 rounded-2xl bg-card border border-border">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}>
                  <Icon size={22} className={color} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-snow mb-2">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAITLIST CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl text-snow mb-4">
            Be First on Google Play
          </h2>
          <p className="text-muted text-lg mb-8">
            The app is in closed testing. Leave your email and we&apos;ll notify you
            the moment it&apos;s available.
          </p>
          <div className="flex justify-center">
            <WaitlistForm
              formName="app-waitlist"
              buttonLabel="Notify Me at Launch"
              placeholder="your@email.com"
              accentColor="neon"
            />
          </div>
          <p className="text-muted text-xs mt-3">
            Android first. iOS coming later.
          </p>
        </div>
      </section>
    </>
  )
}
