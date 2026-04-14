'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function DistributorCTA() {
  return (
    <section className="py-20 relative overflow-hidden topo-pattern">
      {/* Decorative designer lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="connectors" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="#4DA8DA" />
            <circle cx="100" cy="80" r="2" fill="#4DA8DA" />
            <line x1="10" y1="10" x2="100" y2="80" stroke="#4DA8DA" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#connectors)" />
        </svg>
      </div>

      {/* Subtle blue blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 accent-blue-blob" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4 accent-teal-blob" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ boxShadow: '0 12px 48px rgba(15,28,51,0.10)', border: '1px solid rgba(255,255,255,0.9)' }}>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ background: 'rgba(14,165,160,0.12)', border: '1px solid rgba(14,165,160,0.30)', color: '#0EA5A0' }}>
              Partner With Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F1C33] mb-3">
              Get in Touch for Bulk Orders
            </h2>
            <p className="text-[#4A5568] text-base max-w-lg mb-5">
              Join our growing network of trusted distributors across India and internationally. Get exclusive wholesale pricing, priority support, and an authorized distributor certificate.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Wholesale Pricing', 'Priority Delivery', 'Dedicated Manager', 'Free TDS & COA'].map(p => (
                <span key={p} className="text-xs font-semibold text-[#1F4E79] bg-white px-3 py-1.5 rounded-lg border border-[#E2E8F0] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5A0] shrink-0" />
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 min-w-[260px]"
          >
            <Link href="/contact"
              className="btn-primary w-full px-8 py-4 rounded-full text-base font-bold text-center flex items-center justify-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
