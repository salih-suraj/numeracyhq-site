import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NumeracyHQ — Math, finally explained so it clicks',
    template: '%s | NumeracyHQ',
  },
  description:
    'Animated math lessons that build real intuition. You weren’t bad at math — you were taught it wrong. Get the lessons that finally make it click.',
  keywords: [
    'learn math',
    'animated math lessons',
    'understand math',
    'math intuition',
    'fractions explained',
    'algebra explained',
    'math anxiety',
    'NumeracyHQ',
  ],
  authors: [{ name: 'Abba Suraj', url: 'https://numeracyhq.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://numeracyhq.com',
    siteName: 'NumeracyHQ',
    title: 'You weren’t bad at math. You were taught it wrong.',
    description:
      'Animated math lessons that build real intuition — the ones that finally make it click.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'You weren’t bad at math. You were taught it wrong.',
    description: 'Animated math lessons that finally make it click.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="bg-cream text-navy antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Analytics — Plausible (privacy-friendly, no cookie banner needed).
            Only records once numeracyhq.com is added in a Plausible account.
            FREE SWAP if cost is an issue: replace this with Cloudflare Web
            Analytics' beacon snippet (free forever, just needs your token). */}
        <Script
          defer
          data-domain="numeracyhq.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
