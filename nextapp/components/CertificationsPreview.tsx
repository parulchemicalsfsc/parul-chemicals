'use client'
import type { JSX } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    title: 'Uncompromising Purity',
    desc: 'Our chemicals meet USP, BP and food-grade purity standards with rigorous in-process QC at every batch.',
    color: '#3ABEF9', // Brighter Cyan
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Quality Assurance',
    desc: 'ISO 9001:2015, GMP & HACCP certified operations — compliance with global quality standards is non-negotiable.',
    color: '#4ADE80', // Brighter Green
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
    title: 'Global Supply',
    desc: 'Reliable supply chain serving manufacturers in 8+ countries with consistent lead times and competitive pricing.',
    color: '#60A5FA', // Light Blue
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: '9+ Certifications',
    desc: 'Kosher, Halal, ISO 22000, ISO 45001, ISO 9235 — our certifications open doors to regulated industries worldwide.',
    color: '#FBBF24', // Brighter Amber
  },
]

const CERT_ICONS: Record<string, JSX.Element> = {
  'ISO 9001:2015': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  'ISO 22000:2018': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 2l1.5 1.5M12 2v3M21 2l-1.5 1.5M7 7a5 5 0 0010 0M5 21h14M12 12v9"/>
    </svg>
  ),
  'ISO 45001:2018': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  'ISO 9235:2013': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  'GMP': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-4 0v2M8 7V5a2 2 0 014 0"/>
    </svg>
  ),
  'HACCP': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
  'Kosher (TEC)': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  'Kosher (DEP)': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  'Registration': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
    </svg>
  ),
}

export default function CertificationsPreview() {
  return (
    <>
      {/* ── WHY CHOOSE US — dark navy section (matches reference site) ── */}
      <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0D2137 0%, #1F4E79 100%)' }}>
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(77,168,218,0.6) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #4DA8DA, #0EA5A0, #4DA8DA)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-tag text-[#4DA8DA] mb-3">WHY CHOOSE US</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              The Parul Chemicals<br />Advantage
            </h2>
            <p className="text-white/60 text-lg max-w-lg mx-auto">
              From precision manufacturing to on-time delivery — here is why leading companies trust us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="feature-card p-7 rounded-2xl group"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(12px)' }}
              >
                {/* Icon block */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-lg"
                  style={{ background: f.color, color: 'white' }}>
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
                {/* Bullet points — matches reference site's teal dot list */}
                <ul className="space-y-1.5">
                  {f.desc.split(' — ').map((part, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/65 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: '#4DA8DA' }} />
                      {part}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS STRIP — light section ── */}
      <section className="py-20 hex-bg relative overflow-hidden grid-pattern">
        {/* Floating Molecule Decor */}
        <div className="absolute top-10 left-[10%] opacity-[0.05] pointer-events-none">
          <svg width="120" height="120" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="15" fill="none" stroke="#4DA8DA" strokeWidth="1"/>
            <circle cx="50" cy="20" r="5" fill="#4DA8DA" />
            <circle cx="80" cy="50" r="5" fill="#4DA8DA" />
            <line x1="50" y1="35" x2="50" y2="25" stroke="#4DA8DA" strokeWidth="1"/>
            <line x1="65" y1="50" x2="75" y2="50" stroke="#4DA8DA" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-[15%] opacity-[0.05] pointer-events-none">
          <svg width="100" height="100" viewBox="0 0 100 100" className="animate-spin-slow">
            <rect x="35" y="35" width="30" height="30" fill="none" stroke="#0EA5A0" strokeWidth="1" />
            <circle cx="35" cy="35" r="3" fill="#0EA5A0" />
            <circle cx="65" cy="65" r="3" fill="#0EA5A0" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="section-tag mb-3">CERTIFICATIONS</p>
            <h2 className="font-display text-4xl font-bold text-[#0F1C33] mb-3">
              International Quality Standards
            </h2>
            <p className="text-[#4A5568] text-base max-w-lg mx-auto">
              Certified by globally recognized bodies ensuring product purity, food safety and occupational health.
            </p>
          </motion.div>

          {/* Cert grid — white glass cards on light bg */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {['ISO 9001:2015','ISO 22000:2018','ISO 45001:2018','ISO 9235:2013','GMP','HACCP','Kosher (TEC)','Kosher (DEP)','Registration'].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="cert-card bg-white border border-[#E2E8F0] rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-[#4DA8DA]/40"
                style={{ boxShadow: '0 2px 12px rgba(15,28,51,0.06)' }}
              >
                <span className="text-[#1F4E79]">{CERT_ICONS[name]}</span>
                <span className="text-xs font-bold text-[#1F4E79] text-center leading-tight">{name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/certifications"
              className="px-8 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2 transition-all duration-300 border-2 border-[#4DA8DA] text-[#1F4E79] hover:bg-[#4DA8DA] hover:text-white"
            >
              View All Certifications
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
