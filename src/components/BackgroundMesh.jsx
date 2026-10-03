import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function BackgroundMesh() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 45,
        y: (e.clientY / window.innerHeight - 0.5) * 45,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#040509]">
      {/* Top Left Neon Cyan Aurora Orb */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        style={{ translateX: mousePos.x * 0.9, translateY: mousePos.y * 0.9 }}
        className="absolute -top-44 -left-36 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/30 to-purple-700/20 blur-[150px]"
      />

      {/* Top Right Electric Violet / Fuchsia Orb */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -50, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ translateX: mousePos.x * -0.7, translateY: mousePos.y * -0.7 }}
        className="absolute top-1/4 -right-44 w-[750px] h-[750px] rounded-full bg-gradient-to-br from-purple-600/25 via-pink-600/20 to-indigo-900/35 blur-[160px]"
      />

      {/* Bottom Center Solar Amber / Sunset Coral Orb */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        style={{ translateX: mousePos.x * 0.6, translateY: mousePos.y * 0.6 }}
        className="absolute -bottom-48 left-1/3 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-amber-500/15 via-rose-600/20 to-cyan-600/25 blur-[150px]"
      />

      {/* Floating Glowing Particle Stars */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/6 left-1/5 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#00d2ff] animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b] animate-ping" />
        <div className="absolute top-2/3 right-1/5 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_15px_#3b82f6] animate-pulse" />
      </div>

      {/* Cyber Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient Glass Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#040509]/40 to-[#040509]/90 backdrop-blur-[40px]" />
    </div>
  )
}
