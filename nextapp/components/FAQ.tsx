'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: "What are the primary applications of Diethyl Phthalate (DEP)?",
    a: "Our pharma-grade DEP is primarily used as a solvent in fragrance fixatives, an incense stick binder, and as a specialized plasticizer in pharmaceutical coatings and cosmetic formulations."
  },
  {
    q: "Is your Triethyl Citrate (TEC) approved for food contact?",
    a: "Yes, our Triethyl Citrate is food-safe and manufactured to USP/BP/IP standards. It is widely used in food flavors, soft drinks, and pharmaceutical film coatings due to its non-toxic and biodegradable nature."
  },
  {
    q: "Which international quality certifications do you hold?",
    a: "Parul Chemicals is ISO 9001:2015, ISO 22000:2018 (Food Safety), ISO 45001:2018 (OH&S), and ISO 9235 certified. We also hold GMP, HACCP, and Kosher certifications for our key products."
  },
  {
    q: "Do you offer export services outside of India?",
    a: "Yes, we currently export to over 8 countries across multiple continents. We provide comprehensive export documentation, including TDS, COA, and MSDS for all international shipments."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none dot-pattern" />
      <div className="absolute top-0 right-0 w-80 h-80 accent-blue-blob opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#4DA8DA]"
          >
            Resources & support
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#0F1C33] mt-3"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border transition-all ${
                openIndex === i ? 'border-[#4DA8DA] bg-slate-50' : 'border-slate-200 bg-white hover:border-[#4DA8DA]/50'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className={`font-bold transition-colors ${openIndex === i ? 'text-[#0F1C33]' : 'text-[#4A5568]'}`}>
                  {faq.q}
                </span>
                <span className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={openIndex === i ? 'text-[#4DA8DA]' : 'text-slate-300'}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-[#4A5568] text-base leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
