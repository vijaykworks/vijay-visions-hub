import React from 'react'
import { motion } from 'framer-motion'

export default function FeaturedSpotlight({ product, onQuickView, onCopyLink }) {
  if (!product) return null

  const link = product.affiliateLink || product.affiliate_link || '#'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mb-8 overflow-hidden rounded-[2rem] p-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-[0_20px_50px_rgba(0,210,255,0.2)] group"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-6 sm:p-8 bg-[#090d18]/90 rounded-[1.9rem] backdrop-blur-2xl overflow-hidden">
        
        {/* Ambient Glow Aura Behind Banner */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl group-hover:bg-cyan-500/35 transition-all duration-700 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl group-hover:bg-purple-500/35 transition-all duration-700 pointer-events-none" />

        {/* Left Featured Image with 3D Depth Frame */}
        <div 
          onClick={() => onQuickView(product)}
          className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-white p-4 flex items-center justify-center shrink-0 border border-white/20 shadow-2xl cursor-pointer group-hover:scale-105 transition-transform duration-500"
        >
          <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-lg bg-slate-900/90 text-amber-400 text-[10px] font-black uppercase tracking-wider shadow-sm backdrop-blur-md border border-amber-400/30">
            ★ #1 Top Pick
          </span>
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content Details */}
        <div className="flex-1 text-center md:text-left min-w-0">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Spotlight Recommendation
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
              {product.category}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight font-heading leading-tight mb-2 group-hover:text-cyan-300 transition-colors">
            {product.title}
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm font-medium line-clamp-2 max-w-xl mb-4">
            Tested & verified gear recommendation by Vijay K. Top choice for build setup and daily productivity.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-cyan-500/30 transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12 animate-shine pointer-events-none" />
              <span>Claim Top Deal</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>

            <button
              onClick={() => onQuickView(product)}
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 text-xs sm:text-sm font-bold border border-white/10 transition-all cursor-pointer"
            >
              Quick Details
            </button>

            <button
              onClick={() => onCopyLink(link)}
              title="Copy Link"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  )
}
