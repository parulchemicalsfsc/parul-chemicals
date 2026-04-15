'use client'
import { useRef, useCallback, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { PRODUCTS } from '@/lib/data'
import PageHero from '@/components/PageHero'
import ProductModal, { Product } from '@/components/products/ProductModal'

/* ── Products Page ─────────────────── */

function ProductDetailCard({ product, index, onOpen }: { product: Product; index: number; onOpen: (p: Product) => void }) {
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
        onClick={() => onOpen(product)}
        className="product-card-wrap bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden cursor-pointer group"
        style={{ transition: 'transform 0.08s ease, box-shadow 0.3s ease', boxShadow: '0 4px 32px rgba(15,28,51,0.08)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-72 lg:h-full min-h-[320px]"
            style={{ background: 'linear-gradient(135deg,#EEF4FB 0%,#E8F6F6 100%)' }}>
            <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
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
            <h2 className="font-display text-3xl font-bold text-[#0F1C33] mb-1 group-hover:text-[#4DA8DA] transition-colors">{product.name}</h2>
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

            <div className="flex gap-3 flex-wrap">
              <button
                className="btn-navy px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
              >
                View Technical Specs & Q&A
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

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
          {PRODUCTS.map((p, i) => <ProductDetailCard key={p.id} product={p as Product} index={i} onOpen={setSelectedProduct} />)}
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </>
  )
}
