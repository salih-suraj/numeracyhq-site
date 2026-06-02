'use client'

import { useState } from 'react'

const enquiryTypes = [
  'Consulting / programme design',
  'Teacher PD facilitation',
  'EdTech strategy & review',
  'Speaking / advisory',
  'Research collaboration',
  'Press / media',
  'Other',
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [form, setForm]     = useState({
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
        body: new URLSearchParams({ 'form-name': 'contact', ...form }).toString(),
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="text-center py-8">
        <p className="text-terra text-4xl mb-3">✓</p>
        <h3 className="font-display font-bold text-xl text-navy mb-2">Message received.</h3>
        <p className="text-stone text-sm">I will be in touch within 48 hours.</p>
      </div>
    )
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-cream border border-sand text-navy placeholder-stone text-sm focus:outline-none focus:ring-2 focus:ring-terra focus:border-terra transition-colors'

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
          <label className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
            Name
          </label>
          <input
            type="text" name="name" required value={form.name}
            onChange={e => update('name', e.target.value)}
            placeholder="Your name" className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
            Email
          </label>
          <input
            type="email" name="email" required value={form.email}
            onChange={e => update('email', e.target.value)}
            placeholder="your@email.com" className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
          Enquiry type
        </label>
        <select
          name="type" value={form.type}
          onChange={e => update('type', e.target.value)}
          className={`${inputClass} cursor-pointer`}
        >
          {enquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          name="message" required rows={5} value={form.message}
          onChange={e => update('message', e.target.value)}
          placeholder="Describe your project, programme, or question..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">
          Something went wrong. Email directly:{' '}
          <a href="mailto:surajabba650@gmail.com" className="underline">
            surajabba650@gmail.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 rounded-lg bg-terra text-white font-bold text-sm hover:bg-terra-hover transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="text-stone text-xs text-center">I respond within 48 hours.</p>
    </form>
  )
}
