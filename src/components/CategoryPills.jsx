import React from 'react'
import { motion } from 'framer-motion'

export default function CategoryPills({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="relative mb-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-center gap-2 min-w-max">
        {categories.map((category) => {
          const isActive = activeCategory === category

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-colors duration-300 focus:outline-none select-none cursor-pointer ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-lg shadow-cyan-500/25 border border-cyan-400/40"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              
              {!isActive && (
                <div className="absolute inset-0 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-all" />
              )}

              <span className="relative z-10 flex items-center gap-2">
                {category}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
