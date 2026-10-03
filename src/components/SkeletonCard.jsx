import React from 'react'
import { motion } from 'framer-motion'

export default function SkeletonCard({ count = 8 }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-5 w-full">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.1 }}
          className="rounded-2xl p-4 bg-[#0d1220]/80 border border-cyan-500/20 flex flex-col justify-between h-[280px]"
        >
          <div className="flex justify-between items-center mb-3">
            <div className="w-16 h-4 rounded-lg bg-white/10" />
            <div className="w-6 h-6 rounded-lg bg-white/10" />
          </div>
          <div className="aspect-square rounded-xl bg-white/10 mb-3" />
          <div className="space-y-2">
            <div className="h-4 rounded-lg bg-white/10 w-full" />
            <div className="h-4 rounded-lg bg-white/10 w-2/3" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
