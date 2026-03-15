'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/services',  label: 'Services'  },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/app',       label: 'App'       },
  { href: '/about',     label: 'About'     },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-panel/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/nmchq-logo.jpg"
            alt="NumeracyHQ"
            width={160}
            height={52}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'text-electric bg-electric/10'
                      : 'text-muted hover:text-snow hover:bg-white/5'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-electric text-panel font-semibold text-sm hover:bg-electric/80 transition-all hover:shadow-lg hover:shadow-electric/20"
        >
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-muted hover:text-snow hover:bg-white/5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-b border-border px-6 pb-6 pt-2 space-y-1">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'text-electric bg-electric/10'
                    : 'text-snow hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              className="block text-center px-5 py-3 rounded-lg bg-electric text-panel font-semibold text-sm hover:bg-electric/80 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
