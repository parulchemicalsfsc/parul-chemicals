'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { CERTIFICATIONS } from '@/lib/data'

export default function CertificationsPage() {
  const [selected, setSelected] = useState<typeof CERTIFICATIONS[0] | null>(null)

  return (
    <>
      {/* Page Hero */}
      <div className="relative min-h-[75vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
        {/* 3D Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/Chemical_Product_Video_Generation.mp4"
        />
        {/* Dark Blue Transparent Overlay */}
        <div className="absolute inset-0 bg-[#060F1E]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137]/60 via-transparent to-[#0D2137]/30" />
        <div className="absolute inset-0 hex-bg opacity-10 blur-[1px]" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="bg-[#0F1C33]/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-[#4DA8DA] mb-4">CERTIFICATIONS</p>
            <h1 className="font-display text-5xl font-bold text-white mb-5">Quality Certifications</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Every batch meets the highest international standards. Certified by globally recognized bodies.
            </p>
          </motion.div>
        </div>

        {/* Premium Wave Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[1px]">
          <svg className="relative block w-full h-[60px] md:h-[100px] lg:h-[140px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" className="fill-white" opacity=".1"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-51.05V120H0Z" className="fill-white" opacity=".25"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V120H0Z" className="fill-white"></path>
          </svg>
        </div>
      </div>

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
                <div className="relative h-52 overflow-hidden bg-[#F4F6FA]">
                  <Image src={cert.image} alt={cert.name} fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{cert.icon}</span>
                    <h3 className="text-lg font-bold text-[#0F1C33]">{cert.name}</h3>
                  </div>
                  <p className="text-sm text-[#4A5568]">{cert.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#4DA8DA]">
                    <span>View Certificate</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
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
              onClick={e => e.stopPropagation()} className="relative">
              <Image src={selected.image} alt={selected.name} width={900} height={700}
                className="cert-lightbox-img bg-white" style={{ objectFit: 'contain' }} />
              <button onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#4DA8DA] transition-all text-xl">
                ×
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="px-4 py-2 rounded-full bg-black/70 text-white text-sm font-bold">{selected.name}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
