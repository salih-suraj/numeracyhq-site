import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NumeracyHQ — Mathematical Animations for Educators',
    template: '%s | NumeracyHQ',
  },
  description:
    'Custom Manim animations for online courses, YouTube channels, and educational content. Built by Salix Systems.',
  keywords: [
    'manim animation',
    'math animation service',
    'mathematical animation',
    'educational animation',
    'manim explainer video',
    'NumeracyHQ',
    'Salix Systems',
  ],
  authors: [{ name: 'Abba Suraj', url: 'https://numeracyhq.com' }],
  creator: 'Salix Systems',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://numeracyhq.com',
    siteName: 'NumeracyHQ',
    title: 'NumeracyHQ — Mathematical Animations for Educators',
    description:
      'Custom Manim animations for online courses, YouTube channels, and educational content.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NumeracyHQ — Mathematical Animations for Educators',
    description: 'Custom Manim animations for educators and content creators.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-panel text-snow antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
