import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function BackgroundMesh() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 35,
        y: (e.clientY / window.innerHeight - 0.5) * 35,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#06080e]">
      {/* Top Left Electric Cyan Orb */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ translateX: mousePos.x * 0.8, translateY: mousePos.y * 0.8 }}
        className="absolute -top-40 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-cyan-600/25 via-blue-600/30 to-indigo-900/40 blur-[140px]"
      />

      {/* Top Right Royal Blue / Cobalt Orb */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{ translateX: mousePos.x * -0.6, translateY: mousePos.y * -0.6 }}
        className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-sky-500/20 via-blue-700/25 to-blue-950/40 blur-[150px]"
      />

      {/* Bottom Center Cyber Teal/Cyan Orb */}
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        style={{ translateX: mousePos.x * 0.5, translateY: mousePos.y * 0.5 }}
        className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-indigo-900/35 blur-[140px]"
      />

      {/* Subtle Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#00a2ff 1.2px, transparent 1.2px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Glass Tint Layer */}
      <div className="absolute inset-0 bg-[#06080e]/60 backdrop-blur-[50px]" />
    </div>
  )
}
