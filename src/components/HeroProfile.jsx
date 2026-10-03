import React from 'react'
import { motion } from 'framer-motion'

export default function HeroProfile({ profile, totalProducts = 0 }) {
  if (!profile) return null

  const name = profile.name && profile.name !== 'Vijay' && profile.name !== 'Vijay Kumar' ? profile.name : 'Vijay K'

  const socialLinks = [
    {
      id: 'instagram',
      url: profile.instagram,
      label: 'Instagram',
      gradient: 'from-pink-500 via-rose-500 to-amber-500',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      id: 'youtube',
      url: profile.youtube,
      label: 'YouTube',
      gradient: 'from-red-600 to-rose-600',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
        </svg>
      )
    },
    {
      id: 'linkedin',
      url: profile.linkedin,
      label: 'LinkedIn',
      gradient: 'from-sky-500 to-blue-700',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    {
      id: 'facebook',
      url: profile.facebook,
      label: 'Facebook',
      gradient: 'from-blue-600 to-indigo-700',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
    {
      id: 'email',
      url: profile.email ? `mailto:${profile.email}` : null,
      label: 'Email',
      gradient: 'from-amber-500 to-orange-600',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ].filter(s => Boolean(s.url))

  const bioText = profile.bio || 'Tech Creator & Reviewer • Curating top phones, gadgets, & accessories'

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative mb-8 text-center flex flex-col items-center justify-center max-w-xl mx-auto px-4"
    >
      {/* Avatar with Animated Glow Ring */}
      <div className="relative mb-3.5 group">
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-500 opacity-75 blur-sm animate-pulse group-hover:opacity-100 transition duration-500" />
        <img
          src={profile.imageUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}
          alt={name}
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-2xl border-2 border-white/20 bg-slate-900"
        />
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-cyan-500 border-2 border-[#040509] rounded-full flex items-center justify-center shadow-md" title="Verified Creator">
          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
      </div>

      {/* Name & Badge */}
      <div className="flex items-center justify-center gap-2 mb-1">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight font-heading">
          {name}
        </h1>
        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-bold uppercase tracking-wider">
          Verified Creator
        </span>
      </div>

      {/* Simplified Bio */}
      <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-md leading-relaxed mb-3">
        {bioText}
      </p>

      {/* Creator Stats Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-semibold">
          ⚡ <strong className="text-white">{totalProducts || 50}+</strong> Curated Items
        </span>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-semibold">
          ✓ <strong className="text-cyan-400">100%</strong> Verified Deals
        </span>
      </div>

      {/* Social Media Buttons */}
      <div className="flex items-center justify-center gap-2.5">
        {socialLinks.map((social) => (
          <motion.a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.label}
            className="relative group/social w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 text-slate-300 hover:text-white flex items-center justify-center shadow-md overflow-hidden transition-all"
          >
            <div className={`absolute inset-0 bg-gradient-to-tr ${social.gradient} opacity-0 group-hover/social:opacity-100 transition-opacity duration-300`} />
            <span className="relative z-10 block">
              {social.icon}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
