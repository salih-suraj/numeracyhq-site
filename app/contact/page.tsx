import type { Metadata } from 'next'
import { Mail, Youtube, Linkedin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch for consulting enquiries, speaking requests, research collaboration, or any other questions.',
}

const details = [
  {
    icon:  Mail,
    label: 'Email',
    value: 'surajabba650@gmail.com',
    href:  'mailto:surajabba650@gmail.com',
  },
  {
    icon:  Youtube,
    label: 'YouTube',
    value: '@NumeracyHQ',
    href:  'https://www.youtube.com/@NumeracyHQ',
  },
  {
    icon:  Linkedin,
    label: 'LinkedIn',
    value: '[REPLACE: LinkedIn display name]',
    href:  'https://www.linkedin.com/in/[REPLACE-linkedin-handle]',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 px-6 border-b border-sand">
        <div className="max-w-4xl mx-auto">
          <p className="text-terra text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-navy mb-6">
            Get in touch
          </h1>
          <p className="text-charcoal text-xl max-w-2xl leading-relaxed">
            For consulting enquiries, speaking requests, research collaboration, or anything else —
            I respond to all serious messages, usually within 48 hours.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 pb-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left: contact details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display font-bold text-xl text-navy mb-5">Contact details</h2>
              <div className="space-y-3">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 p-4 rounded-xl border border-sand bg-white">
                    <div className="w-10 h-10 rounded-lg bg-terra-subtle flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-terra" />
                    </div>
                    <div>
                      <p className="text-stone text-xs mb-0.5">{label}</p>
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-semibold text-navy hover:text-terra transition-colors"
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-paper border border-sand">
              <p className="text-stone text-xs leading-relaxed">
                <span className="text-navy font-semibold">For consulting enquiries:</span>{' '}
                Please describe your programme or project briefly — the context, the challenge you
                are trying to solve, and your approximate timeline. This helps me give you a useful
                first response.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-white border border-sand shadow-sm">
              <h3 className="font-display font-bold text-xl text-navy mb-6">Send a message</h3>
              <ContactForm />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
