import React, { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SearchBar({ searchQuery, setSearchQuery, totalResults }) {
  const inputRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        setSearchQuery('')
        inputRef.current?.blur()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setSearchQuery])

  return (
    <div className="relative mb-5 w-full">
      <div className="relative flex items-center w-full">
        {/* Search Icon */}
        <div className="absolute left-4 pointer-events-none text-cyan-400">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search gear, gadgets, accessories..."
          className="w-full pl-11 sm:pl-12 pr-24 sm:pr-28 py-3 sm:py-3.5 rounded-2xl bg-[#0d1220]/90 border border-cyan-500/25 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:bg-[#11172a] focus:ring-4 focus:ring-cyan-500/15 transition-all text-xs sm:text-sm font-semibold shadow-inner"
        />

        {/* Right Actions */}
        <div className="absolute right-3 flex items-center gap-2">
          <AnimatePresence>
            {searchQuery ? (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSearchQuery('')}
                className="p-1 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all text-xs font-semibold"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </motion.button>
            ) : (
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                <kbd>Ctrl</kbd>+<kbd>K</kbd>
              </span>
            )}
          </AnimatePresence>

          {/* Results Badge */}
          <span className="px-2.5 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 text-xs font-extrabold border border-cyan-500/30">
            {totalResults}
          </span>
        </div>
      </div>
    </div>
  )
}
