'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: '🧪',
    title: 'Uncompromising Purity',
    desc: 'Our chemicals meet USP, BP and food-grade purity standards with rigorous in-process QC at every batch.',
    color: '#4DA8DA',
  },
  {
    icon: '🏅',
    title: 'Quality Assurance',
    desc: 'ISO 9001:2015, GMP & HACCP certified operations — compliance with global quality standards is non-negotiable.',
    color: '#0EA5A0',
  },
  {
    icon: '🌍',
    title: 'Global Supply',
    desc: 'Reliable supply chain serving manufacturers in 8+ countries with consistent lead times and competitive pricing.',
    color: '#1F4E79',
  },
  {
    icon: '📋',
    title: '9+ Certifications',
    desc: 'Kosher, Halal, ISO 22000, ISO 45001, ISO 9235 — our certifications open doors to regulated industries worldwide.',
    color: '#F59E0B',
  },
]

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
                {/* Icon block — matches reference site's dark icon squares */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${f.color}25`, border: `1px solid ${f.color}45` }}>
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
            {[
              { icon: '🏅', name: 'ISO 9001:2015' },
              { icon: '🍃', name: 'ISO 22000:2018' },
              { icon: '⚕️', name: 'ISO 45001:2018' },
              { icon: '🌿', name: 'ISO 9235:2013' },
              { icon: '🏭', name: 'GMP' },
              { icon: '🔬', name: 'HACCP' },
              { icon: '✡️', name: 'Kosher (TEC)' },
              { icon: '✡️', name: 'Kosher (DEP)' },
              { icon: '📋', name: 'Registration' },
            ].map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="cert-card bg-white border border-[#E2E8F0] rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-[#4DA8DA]/40"
                style={{ boxShadow: '0 2px 12px rgba(15,28,51,0.06)' }}
              >
                <span className="text-2xl">{cert.icon}</span>
                <span className="text-xs font-bold text-[#1F4E79] text-center leading-tight">{cert.name}</span>
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
