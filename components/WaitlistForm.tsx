'use client'

import { useState } from 'react'

interface WaitlistFormProps {
  formName: string         // e.g. "studio-waitlist" or "app-waitlist"
  buttonLabel?: string
  placeholder?: string
  accentColor?: 'electric' | 'pink' | 'gold' | 'neon'
}

const accentMap = {
  electric: 'bg-electric hover:bg-electric/80 text-panel shadow-electric/20',
  pink:     'bg-pink    hover:bg-pink/80    text-panel shadow-pink/20',
  gold:     'bg-gold    hover:bg-gold/80    text-panel shadow-gold/20',
  neon:     'bg-neon    hover:bg-neon/80    text-panel shadow-neon/20',
}

export default function WaitlistForm({
  formName,
  buttonLabel = 'Notify Me',
  placeholder = 'your@email.com',
  accentColor = 'electric',
}: WaitlistFormProps) {
  const [email,     setEmail]     = useState('')
  const [status,    setStatus]    = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': formName, email }).toString(),
      })
      setStatus('done')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <p className="text-neon font-medium text-sm py-2">
        ✓ You&apos;re on the list. We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
    >
      <input type="hidden" name="form-name" value={formName} />
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-4 py-3 rounded-lg bg-panel border border-border text-snow placeholder-muted text-sm focus:outline-none focus:border-electric transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all shadow-lg ${accentMap[accentColor]} disabled:opacity-60`}
      >
        {status === 'loading' ? 'Saving…' : buttonLabel}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-1 w-full">
          Something went wrong. Email us directly: surajabba@gmail.com
        </p>
      )}
    </form>
  )
}
