'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  q: string
  a: string
}

const FAQS: FAQItem[] = [
  {
    q: 'Can TEC replace DEP in my fragrance?',
    a: 'In most fragrance concentrates, yes. TEC dissolves most common aroma chemicals and essential oils. A few very non-polar materials can dissolve differently, so we recommend a stability and solubility check on your formula. We can send samples of both DEP and TEC for side-by-side trials.'
  },
  {
    q: 'Does your TEC have any odour?',
    a: 'It is practically odourless. Every batch passes an odour and colour check against a reference standard before release to ensure zero sensory interference with delicate notes.'
  },
  {
    q: 'Is your TEC suitable for flavours and food?',
    a: 'Yes. Our food grade meets FCC requirements. TEC is a permitted food additive (E1505) and is FEMA GRAS (FEMA 3083). Check local regulatory rules on use levels in your specific target market.'
  },
  {
    q: 'Do you provide an IFRA certificate?',
    a: 'Yes, we provide an IFRA conformity statement and fragrance allergen documentation on request for qualified manufacturing formulations.'
  },
  {
    q: 'Can you supply customers in the EU?',
    a: 'Yes. Our supply chain is structured to support European Union regulatory requirements, including REACH registration and Only Representative (OR) documentation.'
  },
  {
    q: 'What is your minimum order quantity?',
    a: 'Standard commercial trial starts from single drums (200–225 kg). Larger containerized orders and annual supply contracts receive customized volume pricing.'
  },
  {
    q: 'Will you complete our supplier questionnaire and allow an audit?',
    a: 'Yes. Send us your quality questionnaire and our regulatory department will complete and return it. Both on-site and remote facility audits are welcome.'
  },
  {
    q: 'How do you notify changes?',
    a: 'We operate under strict change control procedures and provide formal advance written notification before any change to raw materials, production processes, or manufacturing site.'
  }
]

export default function TECFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index
        const headerId = `faq-header-${index}`
        const panelId = `faq-panel-${index}`

        return (
          <div
            key={index}
            className={`border rounded-2xl bg-white overflow-hidden transition-all duration-200 ${
              isOpen
                ? 'border-[#00C9A7]/60 shadow-md ring-1 ring-[#00C9A7]/20'
                : 'border-[#E2E8F0] shadow-sm hover:border-[#00C9A7]/40'
            }`}
          >
            <button
              id={headerId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg transition-colors group"
            >
              <span className={isOpen ? 'text-[#00A88F]' : 'text-[#0F1C33] group-hover:text-[#00A88F]'}>
                {faq.q}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isOpen ? 'bg-[#00C9A7]/15 text-[#00A88F]' : 'bg-[#F4F6FA] text-[#0F1C33] group-hover:bg-[#E6F9F5]'
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#4A5568] leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

