'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PRODUCTS } from '@/lib/data'

export type Product = {
  id: string;
  name: string;
  abbr: string;
  cas: string;
  formula: string;
  badge: string;
  image: string;
  color: string;
  apps: string;
  desc: string;
  features: string[];
  industries: string[];
  identifiers: { key: string; val: string }[];
  techProps: { key: string; val: string }[];
  logistics: {
    packing: string;
    shelfLife: string;
    storage: string;
  };
  advantages: string[];
  detailedApps: string[];
  faqs: { q: string; a: string }[];
  msds?: string;
  tds?: string;
  coa?: string;
}

export default function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      <div className="absolute inset-0 bg-[#0D2137]/80 backdrop-blur-md" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#0F1C33] hover:bg-[#F4F6FA] transition-all border border-slate-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Left - Image & Basic Info */}
        <div className="md:w-[35%] relative min-h-[300px] bg-slate-50 border-r border-slate-100">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-8 right-8 text-white">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 inline-block" 
                  style={{ background: `${product.color}40`, border: `1px solid ${product.color}` }}>
              {product.badge}
            </span>
            <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
            <p className="text-sm font-mono opacity-90 mb-4">{product.abbr} | CAS {product.cas}</p>
            
            <div className="flex flex-col gap-3 mt-6">
              <a href={product.tds} className="flex items-center gap-3 text-xs font-bold hover:text-[#4DA8DA] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                </div>
                Detailed TDS
              </a>
              <a href={product.coa} className="flex items-center gap-3 text-xs font-bold hover:text-[#4DA8DA] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                Sample COA
              </a>
            </div>
          </div>
        </div>

        {/* Right - Detailed Info */}
        <div className="md:w-[65%] p-8 md:p-12 overflow-y-auto custom-scrollbar bg-white">
          <div className="space-y-12">
            {/* 01. Description */}
            <section>
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#4DA8DA] mb-4">01. Product Overview</h4>
              <p className="text-[#4A5568] text-base leading-relaxed mb-6">{product.desc}</p>
              <div className="flex flex-wrap gap-4">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.color }} />
                    <span className="text-xs font-bold text-[#0F1C33] tracking-wide">{f}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 02. Identifiers Table */}
            <section>
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#4DA8DA] mb-6">02. Chemical Identifiers</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                {product.identifiers.map((item, i) => (
                  <div key={i} className={`flex items-center py-4 px-6 border-b border-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}>
                    <span className="w-1/2 text-[10px] font-black text-slate-400 uppercase tracking-wider">{item.key}</span>
                    <span className="w-1/2 text-xs font-bold text-[#0F1C33] font-mono">{item.val}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 03. Technical Properties */}
            <section>
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#4DA8DA] mb-6">03. Technical Properties</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.techProps.map((prop, i) => (
                  <div key={i} className="flex flex-col p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{prop.key}</span>
                    <span className="text-sm font-bold text-[#0F1C33]">{prop.val}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 04. Logistics & Storage */}
            <section>
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#4DA8DA] mb-6">04. Logistics & Supply</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-300 uppercase italic mb-1">Packing Details</p>
                  <p className="text-xs font-bold text-[#4A5568] leading-tight">{product.logistics.packing}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-300 uppercase italic mb-1">Shelf Life</p>
                  <p className="text-xs font-bold text-[#4A5568] leading-tight">{product.logistics.shelfLife}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-300 uppercase italic mb-1">Storage</p>
                  <p className="text-xs font-bold text-[#4A5568] leading-tight">{product.logistics.storage}</p>
                </div>
              </div>
            </section>

            {/* 05. Advantages */}
            <section>
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#4DA8DA] mb-6">05. Key Advantages</h4>
              <div className="space-y-3">
                {product.advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border-l-4 border-[#4DA8DA]">
                    <div className="w-5 h-5 rounded-full bg-[#4DA8DA]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4DA8DA" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <p className="text-xs font-bold text-[#4A5568] leading-relaxed">{adv}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 06. Applications */}
            <section>
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#4DA8DA] mb-6">06. Detailed Applications</h4>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
                {product.detailedApps.map((app, i) => (
                  <div key={i} className="flex flex-row items-center gap-4 py-3 border-b border-slate-50">
                    <span className="text-[10px] font-black text-[#4DA8DA] min-w-[32px]">[{String(i + 1).padStart(2, '0')}]</span>
                    <p className="text-sm font-medium text-[#0F1C33]">{app}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 07. Technical Q&A */}
            <section>
              <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#4DA8DA] mb-6">07. Technical Q&A</h4>
              <div className="space-y-4">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="group cursor-default">
                    <p className="text-sm font-bold text-[#0F1C33] mb-2 group-hover:text-[#4DA8DA] transition-colors tracking-tight">Q: {faq.q}</p>
                    <div className="pl-4 border-l-2 border-slate-100 py-1">
                      <p className="text-sm text-[#4A5568] leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">In Stock | Quality Verified</span>
              </div>
              <p className="text-[10px] font-medium text-slate-300 uppercase italic">© Parul Chemicals quality assurance</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
