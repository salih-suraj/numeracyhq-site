import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
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
    default: 'NumeracyHQ — Mathematics Education & Teacher Development in Africa',
    template: '%s | NumeracyHQ',
  },
  description:
    'Technology-enabled mathematics teacher development in Africa. Evidence-based resources, research, and practitioner insights from the field.',
  keywords: [
    'mathematics education Africa',
    'teacher professional development',
    'numeracy Africa',
    'EdTech Africa',
    'mathematics teacher training',
    'NumeracyHQ',
    'Abba Suraj',
    'learning science',
  ],
  authors: [{ name: 'Abba Suraj', url: 'https://numeracyhq.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://numeracyhq.com',
    siteName: 'NumeracyHQ',
    title: 'NumeracyHQ — Mathematics Education & Teacher Development in Africa',
    description:
      'Technology-enabled mathematics teacher development in Africa. Evidence-based resources, research, and practitioner insights.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NumeracyHQ — Mathematics Education & Teacher Development in Africa',
    description: 'Technology-enabled mathematics teacher development in Africa.',
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
      </body>
    </html>
  )
}
