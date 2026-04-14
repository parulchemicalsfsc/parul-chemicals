'use client'
import { motion } from 'framer-motion'

const PARTNERS = [
  { name: 'PharmaTech Solutions', logo: 'PTS', color: '#0ea5e9' },
  { name: 'Global Logistics Corp', logo: 'GLC', color: '#6366f1' },
  { name: 'Industrial Biotics', logo: 'IB', color: '#10b981' },
  { name: 'Apex Agrochemicals', logo: 'AA', color: '#f59e0b' },
  { name: 'PureFlow Labs', logo: 'PFL', color: '#8b5cf6' },
  { name: 'Summit Healthcare', logo: 'SHC', color: '#06b6d4' },
]

export default function GlobalPartners() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid-pattern" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4DA8DA]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00C9A7]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Subtle floating particle */}
      <motion.div 
        animate={{ y: [0, -40, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-10 w-2 h-2 rounded-full bg-[#4DA8DA] blur-[1px]"
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <div className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[#4DA8DA]" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#4DA8DA]">
              Global Network
            </span>
            <div className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[#4DA8DA]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#0F1C33]"
          >
            Our Industry Partners
          </motion.h2>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl mx-auto">
            Strategic collaborations with leading organizations across the chemical and pharmaceutical landscape.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle Color Accent on Hover */}
              <div 
                className="absolute inset-x-0 top-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: partner.color }}
              />
              
              <div 
                className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${partner.color}08` }}
              >
                <span 
                  className="text-lg font-black transition-colors duration-300"
                  style={{ color: partner.color }}
                >
                  {partner.logo}
                </span>
              </div>
              <span className="text-[11px] font-bold text-slate-500 text-center uppercase tracking-wider group-hover:text-[#0F1C33] transition-colors">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
