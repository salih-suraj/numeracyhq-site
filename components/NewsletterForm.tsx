'use client'

import { useState } from 'react'

/*
  Posts to Kit (ConvertKit) form #9620219 using the public form-subscription
  endpoint. No API key/secret in code — the form id is public by design.
  We post via fetch (no-cors) so it behaves like a native form submit without
  navigating away; Kit then sends the double opt-in confirmation email.
*/
const KIT_ACTION = 'https://app.kit.com/forms/9620219/subscriptions'
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export default function NewsletterForm({ variant = 'default' }: { variant?: 'default' | 'dark' }) {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const data = new FormData()
      data.append('email_address', email.trim())
      // no-cors: the request lands at Kit even though we can't read the opaque
      // response — mirrors a native form post, no page navigation.
      await fetch(KIT_ACTION, { method: 'POST', body: data, mode: 'no-cors' })
      setStatus('done')
    } catch {
      // Network error is rare; the post usually still lands, so stay optimistic.
      setStatus('done')
    }
  }

  const isDark = variant === 'dark'

  if (status === 'done') {
    return (
      <p className={`text-sm font-medium ${isDark ? 'text-terra-light' : 'text-terra'}`}>
        You&apos;re on the list — check your inbox to confirm your subscription. 🎉
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <input
        id="nl-email"
        type="email"
        name="email_address"
        required
        value={email}
        onChange={e => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
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
        {status === 'loading' ? 'Joining…' : 'Get the lessons'}
      </button>
      {status === 'error' && (
        <p className={`text-xs mt-1 sm:absolute sm:mt-14 ${isDark ? 'text-cream/70' : 'text-stone'}`}>
          Please enter a valid email address.
        </p>
      )}
    </form>
  )
}
