'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { STATS } from '@/lib/data'

export default function AboutPreview() {
  return (
    <section className="py-28 bg-white relative overflow-hidden dot-pattern">
      {/* Decorative designer elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] accent-blue-blob opacity-60 pointer-events-none" />
      <div className="absolute top-20 right-10 w-64 h-64 border border-[#4DA8DA]/10 rounded-full animate-pulse-slow pointer-events-none" />
      
      {/* Abstract bond lines (SVG) */}
      <div className="absolute top-40 right-[10%] opacity-20 pointer-events-none hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="4" fill="#4DA8DA" />
          <circle cx="150" cy="80" r="4" fill="#4DA8DA" />
          <circle cx="100" cy="150" r="4" fill="#4DA8DA" />
          <line x1="50" y1="50" x2="150" y2="80" stroke="#4DA8DA" strokeWidth="1" />
          <line x1="150" y1="80" x2="100" y2="150" stroke="#4DA8DA" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">        <p className="section-tag mb-2">WHO WE ARE</p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual card (matches reference site's image card with logo) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden relative shadow-xl bg-gray-100 border border-gray-200" style={{ minHeight: '420px', height: '100%' }}>
              <iframe 
                src="https://maps.google.com/maps?q=Parul%20Chemicals,%20Ranjan%20Society%202,%20Near%20Lions%20Hall,%20Race%20Course,%20Vadodara,%20Gujarat&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Est. badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between pointer-events-none">
                <div className="bg-[#0D2137] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg">
                  Est. 2009
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F1C33] mb-6 leading-tight">
              Welcome to<br />Parul Chemicals
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed mb-5">
              Parul Chemicals is committed to offering high-quality and innovative plasticizers to enrich all forms of life.
            </p>
            <p className="text-[#4A5568] text-base leading-relaxed mb-8">
              We want to be a global Innovative Solutions provider serving Pharmaceutical, Nutrition, Agrochemical, Consumer and Industrial customers with our customised products and solutions that are innovative, cost-effective and conforming to excellent quality standards.
            </p>

            <Link href="/about" className="btn-navy px-7 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2">
              Know More →
            </Link>

            {/* Stats row — reference site shows 3 / 27% / 6+ below button */}
            <div className="flex gap-10 mt-10 pt-8" style={{ borderTop: '1px solid #E2E8F0' }}>
              {STATS.map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-black text-[#1F4E79] tracking-tight">{s.val}</div>
                  <div className="text-xs text-[#94A3B8] font-medium mt-1 max-w-[80px] leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
