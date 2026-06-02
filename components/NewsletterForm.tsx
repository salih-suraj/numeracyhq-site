'use client'

import { useState } from 'react'

/*
  [REPLACE: Swap the fetch() call below with your newsletter provider.
   - Beehiiv: POST to https://api.beehiiv.com/v2/publications/{pub_id}/subscriptions
     with Authorization: Bearer {api_key} and body { email }
   - ConvertKit: use their JS embed or replace the form action with your form URL
   - Simplest: paste your provider's raw embed HTML inside a <div dangerouslySetInnerHTML>
     and remove the <form> below entirely.
  ]
*/

export default function NewsletterForm({ variant = 'default' }: { variant?: 'default' | 'dark' }) {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      // [REPLACE: point this to your newsletter provider's API]
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'newsletter', email }).toString(),
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  const isDark = variant === 'dark'

  if (status === 'done') {
    return (
      <p className={`text-sm font-medium ${isDark ? 'text-terra-light' : 'text-terra'}`}>
        You&apos;re on the list. Check your inbox to confirm.
      </p>
    )
  }

  return (
    <form
      name="newsletter"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <input
        id="nl-email"
        type="email"
        name="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        className={`flex-1 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-terra border ${
          isDark
            ? 'bg-white/10 border-white/20 text-cream placeholder-cream/50'
            : 'bg-white border-sand text-navy placeholder-stone'
        }`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 rounded-lg bg-terra text-white font-semibold text-sm hover:bg-terra-hover transition-colors disabled:opacity-60 flex-shrink-0"
      >
        {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className={`text-xs mt-1 ${isDark ? 'text-cream/60' : 'text-stone'}`}>
          Something went wrong. Try emailing directly.
        </p>
      )}
    </form>
  )
}
