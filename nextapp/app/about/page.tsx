'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TIMELINE, STATS } from '@/lib/data'

export default function AboutPage() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && lineRef.current) lineRef.current.classList.add('drawn')
    }, { threshold: 0.1 })
    if (lineRef.current) observer.observe(lineRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Page Hero */}
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
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}
              className="bg-[#0F1C33]/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl">
              <p className="text-xs font-bold tracking-widest uppercase text-[#4DA8DA] mb-4">ABOUT PARUL CHEMICALS</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Our Story of<br />
                <span className="text-[#4DA8DA]">
                  Chemical Excellence
                </span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Since 2009, Parul Chemicals has been committed to producing the highest purity specialty chemicals, serving industries that demand nothing less than perfection.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
              className="grid grid-cols-2 gap-4">
              {STATS.map(s => (
                <div key={s.label} className="bg-[#0F1C33]/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center shadow-2xl">
                  <div className="text-3xl font-black text-white mb-1">{s.val}</div>
                  <div className="text-xs text-[#4DA8DA] font-semibold">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
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

      {/* About Content */}
      <section className="py-20 bg-white relative overflow-hidden dot-pattern">
        <div className="absolute top-0 left-0 w-full h-[300px] accent-blue-blob opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl font-bold text-[#0F1C33] mb-5">Who We Are</h2>
              <div className="space-y-4 text-[#4A5568] text-base leading-relaxed">
                <p>Parul Chemicals is a Vadodara-based specialty chemical manufacturer, focused on producing high-purity Diethyl Phthalate (DEP) and Triethyl Citrate (TEC) for global industrial applications.</p>
                <p>Our manufacturing facility adheres to strict GMP guidelines, ISO certifications, and HACCP protocols, ensuring every batch meets the precise specifications required by pharmaceutical, food, cosmetics, and agrochemical industries.</p>
                <p>With 15+ years of experience, 9 international certifications, and clients in 8+ countries, we bring reliability and consistency to chemical manufacturing.</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: '🏭', title: 'State-of-Art Facility', desc: 'Modern GMP-compliant plant in Vadodara' },
                  { icon: '🔬', title: 'Quality Labs', desc: 'In-house testing for every batch' },
                  { icon: '🌱', title: 'Eco-Conscious', desc: 'Environmentally responsible processes' },
                  { icon: '🌍', title: 'Global Reach', desc: 'Exporting to 8+ countries worldwide' },
                ].map(item => (
                  <div key={item.title} className="p-4 rounded-xl bg-[#F4F6FA] border border-[#E2E8F0] hover:border-[#4DA8DA]/35 transition-all">
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <p className="text-sm font-bold text-[#0F1C33] mb-1">{item.title}</p>
                    <p className="text-xs text-[#4A5568]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why us */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 className="font-display text-3xl font-bold text-[#0F1C33] mb-5">Why Choose Us</h2>
              <div className="space-y-4">
                {[
                  { title: 'Consistent High Purity', desc: '99%+ purity guaranteed across all batches with in-house quality testing.' },
                  { title: 'Regulatory Compliance', desc: 'ISO, GMP, HACCP, Kosher certified — meeting global pharmaceutical and food standards.' },
                  { title: 'Flexible Packaging', desc: 'Available from 1L to bulk 200L drums, shipped pan-India and internationally.' },
                  { title: 'Technical Support', desc: 'Expert team available for formulation assistance and product specifications.' },
                  { title: 'Competitive Pricing', desc: 'Direct manufacturer pricing with volume discounts for distributors.' },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#4DA8DA]/35 hover:bg-[#F4F6FA] transition-all">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black shrink-0 mt-0.5"
                      style={{ background: 'linear-gradient(135deg,#4DA8DA,#0EA5A0)' }}>
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-[#0F1C33] text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-[#4A5568] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 hex-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="section-tag mb-3">OUR JOURNEY</p>
            <h2 className="font-display text-4xl font-bold text-[#0F1C33]">Milestones &amp; Growth</h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto" style={{ minHeight: '600px' }}>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E2E8F0] -translate-x-1/2" />
            <div ref={lineRef} className="timeline-line -translate-x-1/2" />

            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  className={`relative flex items-center mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 hover:border-[#4DA8DA]/35 hover:shadow-card transition-all duration-300"
                      style={{ boxShadow: '0 4px 20px rgba(15,28,51,0.06)' }}>
                      <div className="text-2xl font-black text-[#4DA8DA] mb-1">{item.year}</div>
                      <h3 className="text-lg font-bold text-[#0F1C33] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#4A5568] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-10"
                    style={{ background: '#4DA8DA', boxShadow: '0 0 0 3px rgba(77,168,218,0.25)' }} />
                  <div className="w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
