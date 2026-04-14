'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const trail = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let trailX = 0, trailY = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot.current) {
        dot.current.style.left = mouseX + 'px'
        dot.current.style.top  = mouseY + 'px'
      }
    }

    const animate = () => {
      // Standard ring following
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      
      // Secondary trail dot for "molecular" feel
      trailX += (ringX - trailX) * 0.12
      trailY += (ringY - trailY) * 0.12

      if (ring.current) {
        ring.current.style.left = ringX + 'px'
        ring.current.style.top  = ringY + 'px'
      }
      if (trail.current) {
        trail.current.style.left = trailX + 'px'
        trail.current.style.top  = trailY + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // Only show on non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover:none)').matches) return null

  return (
    <>
      <div ref={dot}   className="cursor-dot  hidden lg:block" />
      <div ref={ring}  className="cursor-ring hidden lg:block" />
      <div ref={trail} className="w-2 h-2 rounded-full bg-[#4DA8DA]/30 fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] hidden lg:block border border-[#4DA8DA]/20" />
    </>
  )
}
