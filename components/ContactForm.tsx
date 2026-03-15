'use client'

import { useState } from 'react'

const enquiryTypes = [
  'Animation Services',
  'NumeracyHQ App',
  'NumeracyHQ Studio',
  'Partnership',
  'Other',
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [form,   setForm]   = useState({
    name: '', email: '', type: enquiryTypes[0], message: '',
  })

  const update = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...form,
        }).toString(),
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="p-8 rounded-2xl bg-card border border-neon/30 text-center">
        <p className="text-4xl mb-4">✓</p>
        <h3 className="font-display font-bold text-xl text-neon mb-2">
          Message received.
        </h3>
        <p className="text-muted text-sm">
          We typically respond within 24 hours. Check your inbox.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-panel border border-border text-snow placeholder-muted text-sm focus:outline-none focus:border-electric transition-colors'

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={e => update('name', e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={e => update('email', e.target.value)}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
          Enquiry type
        </label>
        <select
          name="type"
          value={form.type}
          onChange={e => update('type', e.target.value)}
          className={`${inputClass} cursor-pointer`}
        >
          {enquiryTypes.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={e => update('message', e.target.value)}
          placeholder="Tell us what you need — topic, length, deadline, any reference videos you like..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">
          Something went wrong. Email us directly:{' '}
          <a href="mailto:surajabba@gmail.com" className="underline">
            surajabba@gmail.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 rounded-xl bg-electric text-panel font-bold text-base hover:bg-electric/80 transition-all shadow-lg shadow-electric/20 disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="text-muted text-xs text-center">
        We respond within 24 hours.
      </p>
    </form>
  )
}
