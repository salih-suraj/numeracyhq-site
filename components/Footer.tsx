import Link from 'next/link'
import { Youtube, Mail } from 'lucide-react'

// TikTok icon (not in lucide)
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

const products = [
  { href: '/app',       label: 'NumeracyHQ App' },
  { href: '/services',  label: 'Animation Services' },
]

const company = [
  { href: '/portfolio', label: 'Portfolio'  },
  { href: '/about',     label: 'About'      },
  { href: '/contact',   label: 'Contact'    },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-3">
              <span className="font-display font-bold text-xl text-electric">
                NumeracyHQ
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-2">
              Mathematical animations for educators, researchers, and content creators.
            </p>
            <p className="text-muted text-xs">by Salix Systems</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-snow text-sm mb-4 uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-3">
              {products.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted text-sm hover:text-electric transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-snow text-sm mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted text-sm hover:text-electric transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold text-snow text-sm mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.youtube.com/@NumeracyHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted text-sm hover:text-electric transition-colors"
                >
                  <Youtube size={15} />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@numeracyhq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted text-sm hover:text-pink transition-colors"
                >
                  <TikTokIcon size={15} />
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="mailto:surajabba@gmail.com"
                  className="flex items-center gap-2 text-muted text-sm hover:text-neon transition-colors"
                >
                  <Mail size={15} />
                  surajabba@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Salix Systems. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            numeracyhq.com
          </p>
        </div>
      </div>
    </footer>
  )
}
