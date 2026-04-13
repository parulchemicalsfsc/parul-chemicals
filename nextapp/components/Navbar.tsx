'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On all pages, the hero is now dark/video, so links should be white when not scrolled
  const linksWhite = !scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-scrolled' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img 
              src="/parul_logo.webp" 
              alt="Parul Chemicals" 
              className="h-10 w-auto object-contain drop-shadow-md" 
            />
          </Link>

          {/* Desktop Nav in Glass Pill */}
          <nav className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${
            linksWhite ? 'bg-[#0F1C33]/40 backdrop-blur-md border border-white/10 shadow-2xl' : ''
          }`}>
            {NAV.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 relative group ${
                  linksWhite
                    ? 'text-white/85 hover:text-white hover:bg-white/10'
                    : 'text-[#4A5568] hover:text-[#0F1C33] hover:bg-black/5'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-4 right-4 h-[3px] bg-[#4DA8DA] rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/buy"
              className="btn-primary px-5 py-2.5 text-sm font-bold tracking-wide flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
                <line x1="19" y1="8" x2="19" y2="14"/>
                <line x1="22" y1="11" x2="16" y2="11"/>
              </svg>
              Buy Product →
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Menu"
          >
            <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className={`block w-5 h-0.5 rounded transition-colors ${linksWhite ? 'bg-white' : 'bg-[#0F1C33]'}`}/>
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }}
              className={`block w-5 h-0.5 rounded transition-colors ${linksWhite ? 'bg-white' : 'bg-[#0F1C33]'}`}/>
            <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className={`block w-5 h-0.5 rounded transition-colors ${linksWhite ? 'bg-white' : 'bg-[#0F1C33]'}`}/>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8 shadow-2xl"
          >
            {NAV.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-2xl font-semibold text-[#0F1C33] hover:text-[#4DA8DA] border-b border-[#E2E8F0] transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/buy"
              onClick={() => setOpen(false)}
              className="btn-primary mt-8 px-6 py-4 rounded-2xl text-lg font-bold text-center"
            >
              Buy Product →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
