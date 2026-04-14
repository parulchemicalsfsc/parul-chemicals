'use client'
import { motion } from 'framer-motion'

const REVIEWS = [
  {
    name: 'Dr. Arpit Mehta',
    role: 'Procurement Head, Pharma Solutions',
    text: "The purity levels of DEP from Parul Chemicals are consistently superior. Their reliability in delivery schedules has made them our preferred partner for over 5 years.",
    avatar: 'AM'
  },
  {
    name: 'Suresh Prajapati',
    role: 'R&D Director, Agrochemicals Ltd',
    text: "Parul's Triethyl Citrate is world-class. Being food-safe and biodegradable, it met all our stringent regulatory requirements for our new product line.",
    avatar: 'SP'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Supply Chain Manager, Global Fragrances',
    text: "Scaling our production for the EU market required partners with ISO and REACH compliance. Parul Chemicals delivered beyond expectations.",
    avatar: 'ER'
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0D2137] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="hex-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M25 0 L50 15 L50 35 L25 50 L0 35 L0 15 Z" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#4DA8DA]"
          >
            Voice of our Partners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mt-3"
          >
            Global Client Reviews
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 relative group hover:bg-white/[0.08] transition-all"
            >
              <div className="absolute top-6 right-8 text-6xl font-serif text-[#4DA8DA]/10 select-none group-hover:text-[#4DA8DA]/20 transition-all">
                “
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4DA8DA] to-[#0EA5A0] flex items-center justify-center text-sm font-bold text-white shadow-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{review.name}</h4>
                  <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider">{review.role}</p>
                </div>
              </div>

              <p className="text-white/70 text-base leading-relaxed italic">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
