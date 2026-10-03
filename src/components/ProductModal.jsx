import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProductModal({ product, onClose, onCopyLink }) {
  if (!product) return null

  const link = product.affiliateLink || product.affiliate_link || '#'

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06080e]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative z-10 w-full max-w-2xl bg-[#0d1220] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden glass-card"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-2xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/10 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Product Image */}
            <div className="aspect-square rounded-2xl bg-white p-6 flex items-center justify-center border border-white/10 shadow-inner">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between h-full space-y-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                  {product.category}
                </span>

                <h2 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight mb-3">
                  {product.title}
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Recommended gear item from Vijay Visions hub. Verified for quality and performance.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-center shadow-lg shadow-cyan-500/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get Deal / Check Store</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>

                <button
                  onClick={() => onCopyLink(link)}
                  className="w-full py-3 px-6 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-sm border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                  <span>Copy Affiliate Link</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
