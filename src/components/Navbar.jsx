import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogoClick = (e) => {
    // 3 rapid clicks triggers secret admin login
    if (e.detail === 3) {
      e.preventDefault()
      navigate('/admin/login')
    }
  }

  const isAdminPage = location.pathname.startsWith('/admin')

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-40 w-full glass-nav px-4 sm:px-8 py-2.5 flex justify-between items-center"
    >
      {/* Brand Logo with Triple-Click Trapdoor */}
      <Link
        to="/"
        onClick={handleLogoClick}
        title="Triple-click for Admin Access"
        className="group flex items-center gap-3 select-none focus:outline-none"
      >
        <div className="relative w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-300">
          <img
            src="/logo.png"
            alt="Vijay Visions Official Logo"
            className="w-full h-full rounded-full object-cover bg-black"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight font-heading group-hover:text-cyan-400 transition-colors">
            Vijay <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">Visions</span>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400/80 -mt-1 hidden sm:block">
            Official Gear Hub
          </span>
        </div>
      </Link>

      {/* Right Navbar Controls */}
      <div className="flex items-center gap-3">
        {/* Status Live Pulse */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00a2ff]" />
          <span>Curated Gear Live</span>
        </div>

        {isAdminPage ? (
          <Link
            to="/"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/15 flex items-center gap-1.5"
          >
            <span>← Back to Store</span>
          </Link>
        ) : (
          <Link
            to="/"
            className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-bold transition-all border border-cyan-500/30 shadow-xs"
          >
            Home
          </Link>
        )}
      </div>
    </motion.header>
  )
}