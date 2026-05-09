'use client'
import { motion } from 'framer-motion'

const PARTNERS = [
  { name: 'PharmaTech Solutions', logo: '/COMPANY LOGO/pharmatech.webp', color: '#0ea5e9' },
  { name: 'Global Logistics Corp', logo: '/COMPANY LOGO/globallogistic.webp', color: '#6366f1' },
  { name: 'Industrial Biotics', logo: '/COMPANY LOGO/industrialbiotics.webp', color: '#10b981' },
  { name: 'Apex Agrochemicals', logo: '/COMPANY LOGO/apexagrochemicals.webp', color: '#f59e0b' },
  { name: 'PureFlow Labs', logo: '/COMPANY LOGO/pureflowlabs.webp', color: '#8b5cf6' },
  { name: 'Summit Healthcare', logo: '/COMPANY LOGO/summithealthcare.webp', color: '#06b6d4' },
]

export default function GlobalPartners() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="partners">
      {/* Premium Background: Dot Grid & Decorative Circle */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0F1C33 1px, transparent 0)', backgroundSize: '32px 32px' }} 
      />
      <div className="absolute top-1/4 -right-24 w-96 h-96 border border-slate-100 rounded-full opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-10 h-px bg-slate-200" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#4DA8DA]">
              Global Network
            </span>
            <div className="w-10 h-px bg-slate-200" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F1C33] tracking-tight mb-6"
          >
            Our Industry Partners
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Strategic collaborations with leading organizations across the chemical and pharmaceutical landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="flex flex-col items-center justify-center p-6 sm:p-12 bg-white rounded-[2rem] sm:rounded-[3rem] border border-slate-50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 group relative"
            >
              <div 
                className="w-16 h-16 sm:w-28 sm:h-28 rounded-[1rem] sm:rounded-[1.5rem] flex items-center justify-center mb-6 sm:mb-8 transition-all duration-500 group-hover:scale-110 shadow-inner border border-white/80 p-2"
                style={{ backgroundColor: `${partner.color}08`, color: partner.color }}
              >
                {partner.logo.startsWith('/') ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-full object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(77,168,218,0.4)]"
                  />
                ) : (
                  <span className="text-xl sm:text-3xl font-black tracking-tight group-hover:drop-shadow-[0_0_10px_rgba(77,168,218,0.3)]">
                    {partner.logo}
                  </span>
                )}
              </div>
              <span className="text-[9px] sm:text-[10px] font-black text-slate-400 text-center uppercase tracking-widest leading-normal sm:leading-loose group-hover:text-[#0F1C33] transition-colors max-w-[120px]">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
