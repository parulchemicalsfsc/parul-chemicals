'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import { FS_CALCIVAL_DATA } from '@/lib/data'

export default function FSCalcivalPage() {
  const [selectedPack, setSelectedPack] = useState<string | null>(null)

  return (
    <div className="bg-white">
      <PageHero 
        tag="ANIMAL NUTRITION" 
        title={<>F. S. <span className="text-[#F59E0B]">Calcival</span></>} 
        subtitle={FS_CALCIVAL_DATA.tagline} 
      />

      {/* Intro Section */}
      <section className="py-24 bg-gradient-to-br from-white to-[#FFFBEB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-[#0F1C33] mb-8"
              >
                Welcome to a New Era in <br/>
                <span className="text-[#F59E0B]">Animal Nutrition</span>
              </motion.h2>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
                {FS_CALCIVAL_DATA.description}
              </p>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-10">
                {FS_CALCIVAL_DATA.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                {FS_CALCIVAL_DATA.brochures.map(b => (
                  <a 
                    key={b.lang}
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white border border-[#F59E0B]/25 text-sm font-bold text-[#0F1C33] hover:bg-[#F59E0B] hover:text-white hover:border-[#F59E0B] transition-all duration-200 shadow-sm hover:shadow-md group"
                  >
                    <svg 
                      className="w-4 h-4 text-[#F59E0B] group-hover:text-white transition-colors duration-200 shrink-0" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="12" y1="18" x2="12" y2="12"/>
                      <line x1="9" y1="15" x2="12" y2="18"/>
                      <line x1="15" y1="15" x2="12" y2="18"/>
                    </svg>
                    <span>{b.lang} Brochure</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative flex justify-center items-center">
              <div className="flex flex-col gap-4 max-w-md w-full">
                <div className="flex gap-4">
                  <div className="w-1/2 relative rounded-[2rem] overflow-hidden shadow-xl border-2 border-white">
                    <img src="/f.s calcival/healthy cow.webp" alt="Healthy Cow" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-1/2 flex flex-col gap-4">
                    <div className="relative rounded-[1.5rem] overflow-hidden shadow-lg border-2 border-white aspect-[3/2]">
                      <img src="/f.s calcival/majestic horse.webp" alt="Majestic Horse" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative rounded-[1.5rem] overflow-hidden shadow-lg border-2 border-white aspect-[3/2]">
                      <img src="/f.s calcival/feeding.webp" alt="Feeding" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-lg border-2 border-white">
                  <img src="/f.s calcival/Proven result.webp" alt="Proven Results" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-[#0D2137] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#F59E0B] font-black tracking-widest text-xs uppercase mb-4">THE SUPERIOR CHOICE</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Why Choose F.S. Calcival?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FS_CALCIVAL_DATA.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-10 rounded-[3rem] bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold mb-4">Unlocking the Energy of Calcium</h3>
                <p className="opacity-90 leading-relaxed mb-6">
                  While traditional calcium supplements can lead to issues like weight loss and irregular heat cycles, F.S. Calcival stands apart. Our formulation contains essential multivitamins, herbs, and minerals, ensuring increased food intake and superior milk production.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">Trusted</span>
                  <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">Verified</span>
                  <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">Proven</span>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-sm opacity-80 mb-2 uppercase tracking-widest font-bold">Monthly Profit Potential</p>
                <p className="text-6xl font-black">₹1,500+</p>
                <p className="text-xs opacity-70 mt-2">Up to ₹5,988 in summer months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Selection Section */}
      <section className="py-24 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-tag mb-4">OUR PACKAGING</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F1C33]">Available Variants</h2>
          </div>

          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {FS_CALCIVAL_DATA.packaging.map((pack, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPack(`${pack.size} ${pack.type}`)}
                className={`w-[260px] md:w-[240px] lg:w-auto lg:flex-1 shrink-0 snap-center p-6 rounded-[2.5rem] border-2 transition-all cursor-pointer text-center group ${
                  selectedPack === `${pack.size} ${pack.type}` 
                  ? 'border-[#F59E0B] bg-[#FFFBEB] shadow-xl shadow-orange-500/10' 
                  : 'border-slate-100 hover:border-[#F59E0B]/30 hover:bg-slate-50'
                }`}
              >
                <div className="aspect-[4/5] rounded-3xl bg-white mb-6 p-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={pack.image} 
                    alt={pack.size} 
                    className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/400x500?text=FS+Calcival'
                    }}
                  />
                </div>
                <h4 className="font-black text-[#0F1C33] text-lg">{pack.size}</h4>
                <p className="text-xs font-bold text-[#4A5568] uppercase tracking-widest mt-1">{pack.type}</p>
                
                {selectedPack === `${pack.size} ${pack.type}` && (
                  <Link 
                    href={`/contact?product=FS+Calcival&variant=${pack.size}+${pack.type}`}
                    className="mt-6 block py-3 rounded-2xl bg-[#F59E0B] text-white text-xs font-bold uppercase tracking-widest animate-pulse"
                  >
                    Select & Inquire
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dosage Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <p className="section-tag mb-4">RECOMMENDED USAGE</p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F1C33] mb-8">Dosage Pattern</h2>
              <div className="space-y-6">
                {FS_CALCIVAL_DATA.dosage.map((d, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-[#F59E0B] mb-3">{d.stage}</h3>
                    <p className="text-[#4A5568] leading-relaxed">{d.instruction}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-2xl border border-blue-100 bg-blue-50/50 flex items-start gap-4">
                <div className="text-blue-500 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                </div>
                <p className="text-sm text-blue-800 italic">
                  Always consult your local animal doctor for personalized advice and get ready to witness the difference with F.S. Calcival.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 bg-[#0D2137] rounded-[3rem] p-12 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Your Livestock Deserves the Best</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                F.S. Calcival is more than a calcium supplement; it’s a game-changer for livestock. Invest in their health, and watch your profits and production soar.
              </p>
              <Link 
                href="/contact"
                className="w-full py-5 rounded-2xl bg-[#F59E0B] text-white text-center font-bold text-lg hover:bg-[#D97706] transition-all shadow-xl shadow-orange-500/20"
              >
                Contact Now to Order
              </Link>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center sm:items-start">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-4 text-center sm:text-left">
                  Visit Our F.S. Calcival Social Media Sites
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/company/f-s-calcival/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit F.S. Calcival on LinkedIn"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs font-medium text-white/90 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://www.instagram.com/fscalcival/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit F.S. Calcival on Instagram"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs font-medium text-white/90 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.facebook.com/fscalcival/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit F.S. Calcival on Facebook"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs font-medium text-white/90 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
