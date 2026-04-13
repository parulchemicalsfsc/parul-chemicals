'use client'
import { useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PRODUCTS } from '@/lib/data'
import DistributorCTA from '@/components/DistributorCTA'

/* ── Shared page header used across all inner pages ─────────────────── */
function PageHero({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) {
  return (
    <div className="relative min-h-[75vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* 3D Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/Chemical_Product_Video_Generation.mp4"
      />
      {/* Dark Blue Transparent Overlay */}
      <div className="absolute inset-0 bg-[#060F1E]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137]/60 via-transparent to-[#0D2137]/30" />
      <div className="absolute inset-0 hex-bg opacity-10 blur-[1px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="bg-[#0F1C33]/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl">
          <p className="text-xs font-bold tracking-widest uppercase text-[#4DA8DA] mb-4">{tag}</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">{title}</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>

      {/* Premium Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[1px]">
        <svg className="relative block w-full h-[60px] md:h-[100px] lg:h-[140px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" className="fill-white" opacity=".1"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-51.05V120H0Z" className="fill-white" opacity=".25"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V120H0Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  )
}

function ProductDetailCard({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current; if (!card) return
    const rect = card.getBoundingClientRect()
    const rotateX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -5
    const rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 5
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`
  }, [])
  const resetTilt = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)'
  }, [])

  return (
    <motion.div id={product.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.15 }} className="scroll-mt-24">
      <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={resetTilt}
        className="product-card-wrap bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden"
        style={{ transition: 'transform 0.08s ease, box-shadow 0.3s ease', boxShadow: '0 4px 32px rgba(15,28,51,0.08)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-72 lg:h-full min-h-[320px]"
            style={{ background: 'linear-gradient(135deg,#EEF4FB 0%,#E8F6F6 100%)' }}>
            <Image src={product.image} alt={product.name} fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg,${product.color}18 0%,transparent 70%)` }} />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: `${product.color}18`, color: product.color, border: `1.5px solid ${product.color}40` }}>
                {product.badge}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="p-8 lg:p-10">
            <h2 className="font-display text-3xl font-bold text-[#0F1C33] mb-1">{product.name}</h2>
            <p className="font-mono font-bold text-lg mb-5" style={{ color: product.color }}>{product.abbr}</p>

            <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl" style={{ background: '#F4F6FA', border: '1px solid #E2E8F0' }}>
              <div>
                <p className="text-xs text-[#94A3B8] mb-1">CAS Number</p>
                <p className="font-mono text-sm text-[#0F1C33] font-bold">{product.cas}</p>
              </div>
              <div>
                <p className="text-xs text-[#94A3B8] mb-1">Formula</p>
                <p className="font-mono text-sm text-[#0F1C33] font-bold">{product.formula}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-[#94A3B8] mb-1">Applications</p>
                <p className="text-sm text-[#4A5568] font-medium">{product.apps}</p>
              </div>
            </div>

            <p className="text-[#4A5568] text-sm leading-relaxed mb-6">{product.desc}</p>

            {/* Features */}
            <div className="mb-6">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: product.color }}>Key Features</p>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: product.color }} />
                    <span className="text-sm text-[#4A5568]">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="mb-8">
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-[#94A3B8]">Industries Served</p>
              <div className="flex flex-wrap gap-2">
                {product.industries.map(ind => (
                  <span key={ind} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#F4F6FA] text-[#4A5568] border border-[#E2E8F0]">{ind}</span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="btn-navy px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2">
                Request Quote
              </Link>
              {product.msds && (
                <a href={product.msds} target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-bold border border-[#E2E8F0] text-[#4A5568] hover:border-[#4DA8DA]/50 hover:text-[#1F4E79] transition-all flex items-center gap-2">
                  Download MSDS
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductsPage() {
  return (
    <>
      <PageHero tag="OUR PRODUCTS" title="Chemical Products" subtitle="High-purity specialty plasticizers manufactured to international standards." />
      <section className="py-20 bg-white relative overflow-hidden dot-pattern">
        {/* Subtle Chemical Line Decor */}
        <div className="absolute top-40 right-10 opacity-[0.05] pointer-events-none">
          <svg width="300" height="300" viewBox="0 0 100 100">
            <path d="M10 50 L30 50 M70 50 L90 50 M50 10 L50 30 M50 70 L50 90" stroke="#4DA8DA" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="#4DA8DA" strokeWidth="1" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 space-y-12 relative z-10">
          {PRODUCTS.map((p, i) => <ProductDetailCard key={p.id} product={p} index={i} />)}
        </div>
      </section>
      <DistributorCTA />
    </>
  )
}
