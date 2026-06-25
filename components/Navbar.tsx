'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/videos',     label: 'Videos'      },
  { href: '/app',        label: 'The App'     },
  { href: '/about',      label: 'About'       },
  { href: '/resources',  label: 'Resources'   },
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

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-sand shadow-sm'
          : 'bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-xl text-navy tracking-tight hover:text-terra transition-colors"
        >
          NumeracyHQ
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active ? 'text-terra' : 'text-stone hover:text-navy'
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
          href="/#newsletter"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-lg bg-terra text-white font-semibold text-sm hover:bg-terra-hover transition-colors"
        >
          Get the lessons
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-stone hover:text-navy transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-b border-sand px-6 pb-6 pt-2 space-y-1">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active ? 'text-terra' : 'text-charcoal hover:text-navy'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <div className="pt-2">
            <Link
              href="/#newsletter"
              className="block text-center px-5 py-3 rounded-lg bg-terra text-white font-semibold text-sm hover:bg-terra-hover transition-colors"
            >
              Get the lessons
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
