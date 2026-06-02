'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface VideoEmbedProps {
  id: string
  title: string
  className?: string
}

export function VideoEmbed({ id, title, className = '' }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className={`aspect-video ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={title}
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={`relative w-full aspect-video group overflow-hidden ${className}`}
      aria-label={`Play: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-navy/25 group-hover:bg-navy/15 transition-colors flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
          <Play size={24} className="text-terra ml-1" fill="#B45309" />
        </div>
      </div>
    </button>
  )
}
