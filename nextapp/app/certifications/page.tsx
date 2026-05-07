'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { CERTIFICATIONS } from '@/lib/data'
import PageHero from '@/components/PageHero'

export default function CertificationsPage() {
  const [selected, setSelected] = useState<typeof CERTIFICATIONS[0] | null>(null)

  return (
    <>
      <PageHero 
        tag="CERTIFICATIONS" 
        title="Quality Certifications" 
        subtitle="Every batch meets the highest international standards. Certified by globally recognized bodies." 
      />

      {/* Grid */}
      <section className="py-20 bg-white relative overflow-hidden dot-pattern">
        {/* Subtle Decorative Hexagon Overlay */}
        <div className="absolute top-10 right-[-50px] opacity-[0.05] pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100">
            <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" stroke="#4DA8DA" strokeWidth="0.5" />
            <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="#4DA8DA" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelected(cert)}
                className="cert-card bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden group cursor-pointer"
                style={{ boxShadow: '0 4px 20px rgba(15,28,51,0.06)' }}
              >
                {/* Thumbnail */}
                <div className="relative h-52 overflow-hidden bg-[#F4F6FA] flex items-center justify-center">
                  <Image 
                    src={cert.image || '/parul_logo.webp'} 
                    alt={cert.name} 
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" 
                  />
                  {!cert.image && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#F4F6FA] text-[#4DA8DA]">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#0F1C33] mb-2">{cert.name}</h3>
                  <p className="text-sm text-[#4A5568]">{cert.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#4DA8DA]">
                      <span>View Image</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                    {cert.pdf && (
                      <a 
                        href={cert.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F4F6FA] text-[#0F1C33] text-[10px] font-bold rounded-lg hover:bg-[#4DA8DA] hover:text-white transition-all uppercase tracking-wider"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="12" y1="18" x2="12" y2="12" />
                          <polyline points="9 15 12 12 15 15" />
                        </svg>
                        PDF
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="cert-lightbox-overlay" onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }} transition={{ type: 'spring', damping: 20 }}
              onClick={e => e.stopPropagation()} className="relative flex flex-col items-center">
              <div className="relative group">
                <Image src={selected.image} alt={selected.name} width={900} height={700}
                  className="cert-lightbox-img bg-white" style={{ objectFit: 'contain' }} />
                
                {selected.pdf && (
                  <a 
                    href={selected.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-white text-[#0F1C33] rounded-full shadow-lg font-bold text-sm hover:bg-[#4DA8DA] hover:text-white transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    View Official PDF
                  </a>
                )}
              </div>

              <button onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#4DA8DA] transition-all text-xl">
                ×
              </button>
              <div className="mt-4 text-center">
                <span className="px-6 py-2 rounded-full bg-black/70 text-white text-sm font-bold">{selected.name}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
