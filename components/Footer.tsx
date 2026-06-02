import Link from 'next/link'
import { Youtube, Mail, Linkedin } from 'lucide-react'

const nav = [
  { href: '/about',      label: 'About'        },
  { href: '/consulting', label: 'Work with me'  },
  { href: '/writing',    label: 'Writing'       },
  { href: '/videos',     label: 'Videos'        },
  { href: '/resources',  label: 'Resources'     },
  { href: '/newsletter', label: 'Newsletter'    },
  { href: '/contact',    label: 'Contact'       },
]

export default function Footer() {
  return (
    <footer className="border-t border-sand">

      {/* Newsletter band */}
      <div className="newsletter-band text-cream py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-terra-light text-xs font-semibold uppercase tracking-widest mb-3">
            The NumeracyHQ Newsletter
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-cream mb-3">
            One idea. One piece of evidence. One resource.
          </h2>
          <p className="text-cream/70 mb-8 text-base">
            Every two weeks, for mathematics educators who want to teach better.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center px-7 py-3 rounded-lg bg-terra text-white font-semibold text-sm hover:bg-terra-hover transition-colors"
          >
            Subscribe — it&apos;s free
          </Link>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-paper">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Brand */}
            <div>
              <Link href="/" className="font-display font-bold text-xl text-navy hover:text-terra transition-colors">
                NumeracyHQ
              </Link>
              <p className="text-stone text-sm mt-3 leading-relaxed">
                Helping African education systems teach mathematics better — through learning science, teacher development, and the engineering to deliver it at scale.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-navy text-xs font-semibold uppercase tracking-wider mb-4">Pages</h3>
              <ul className="space-y-2">
                {nav.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-stone text-sm hover:text-terra transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-navy text-xs font-semibold uppercase tracking-wider mb-4">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.youtube.com/@NumeracyHQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone text-sm hover:text-terra transition-colors"
                  >
                    <Youtube size={15} />
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/[REPLACE-linkedin-handle]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone text-sm hover:text-terra transition-colors"
                  >
                    <Linkedin size={15} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:surajabba650@gmail.com"
                    className="flex items-center gap-2 text-stone text-sm hover:text-terra transition-colors"
                  >
                    <Mail size={15} />
                    surajabba650@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-sand mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-stone text-xs">
              © {new Date().getFullYear()} NumeracyHQ · Abba Suraj. All rights reserved.
            </p>
            <p className="text-stone text-xs italic">
              Technology-enabled mathematics teacher development in Africa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
