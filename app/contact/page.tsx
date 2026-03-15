import type { Metadata } from 'next'
import { Mail, Youtube, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact NumeracyHQ',
  description: 'Get in touch to request an animation, ask about the app, or just say hi. We respond within 24 hours.',
}

const details = [
  {
    icon:  Mail,
    label: 'Email',
    value: 'surajabba@gmail.com',
    href:  'mailto:surajabba@gmail.com',
    color: 'text-electric',
    bg:    'bg-electric/10',
  },
  {
    icon:  Youtube,
    label: 'YouTube',
    value: '@NumeracyHQ',
    href:  'https://www.youtube.com/@NumeracyHQ',
    color: 'text-pink',
    bg:    'bg-pink/10',
  },
  {
    icon:  Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href:  null,
    color: 'text-neon',
    bg:    'bg-neon/10',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-snow leading-tight mb-4">
            Let&apos;s{' '}
            <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-snow/70 text-xl leading-relaxed">
            Animation enquiry, app feedback, or just want to say hi —
            I&apos;m happy to hear from you.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-16 px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display font-bold text-2xl text-snow mb-2">
                  Get in Touch
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  For animation projects, please describe your concept, target audience,
                  and ideal delivery date. For everything else — just say hi.
                </p>
              </div>

              <div className="space-y-3">
                {details.map(({ icon: Icon, label, value, href, color, bg }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}>
                      <Icon size={18} className={color} />
                    </div>
                    <div>
                      <p className="text-muted text-xs mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`text-sm font-semibold ${color} hover:underline`}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-snow text-sm font-semibold">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* TikTok */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gold/10">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gold">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-muted text-xs mb-0.5">TikTok</p>
                  <a
                    href="https://www.tiktok.com/@numeracyhq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gold hover:underline"
                  >
                    @NumeracyHQ
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-electric/5 border border-electric/20">
                <p className="text-snow/70 text-xs leading-relaxed">
                  <span className="text-electric font-semibold">Animation projects:</span>{' '}
                  Include your concept, audience, video length, and deadline in your message
                  for the fastest turnaround.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-card border border-border shadow-xl shadow-black/20">
                <h3 className="font-display font-bold text-xl text-snow mb-6">
                  Send a Message
                </h3>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
