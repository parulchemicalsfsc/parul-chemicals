'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { SITE } from '@/lib/data'

const INPUT = "w-full bg-[#F4F6FA] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F1C33] placeholder-[#94A3B8] focus:outline-none focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/15 transition-all"
const LABEL = "block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2"

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

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
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="bg-[#0F1C33]/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-[#4DA8DA] mb-4">CONTACT</p>
            <h1 className="font-display text-5xl font-bold text-white mb-5">Get In Touch</h1>
            <p className="text-white/80 text-lg max-w-lg mx-auto">Inquire about our products, request a quote, or download technical specifications.</p>
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

      <section className="py-20 bg-white relative overflow-hidden grid-pattern">
        {/* Subtle Designer Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] accent-blue-blob opacity-30 pointer-events-none" />
        <div className="absolute bottom-10 left-[5%] w-32 h-32 border border-[#4DA8DA]/10 rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#0F1C33] mb-6">Contact Details</h2>
              {[
                { icon: '📍', label: 'Our Address', value: SITE.address },
                { icon: '📞', label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
                { icon: '✉️', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: '🏷️', label: 'GSTIN', value: SITE.gstin },
              ].map(item => (
                <div key={item.label} className="flex gap-4 p-5 rounded-2xl bg-[#F4F6FA] border border-[#E2E8F0] hover:border-[#4DA8DA]/35 transition-all">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-[#0EA5A0] mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-[#4A5568] hover:text-[#1F4E79] transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm text-[#4A5568]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8" style={{ boxShadow: '0 8px 40px rgba(15,28,51,0.08)' }}>
                <h2 className="font-display text-2xl font-bold text-[#0F1C33] mb-6">Send an Inquiry</h2>

                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl"
                      style={{ background: 'rgba(14,165,160,0.12)', border: '1.5px solid rgba(14,165,160,0.30)' }}>✅</div>
                    <h3 className="text-xl font-bold text-[#0F1C33] mb-2">Message Sent!</h3>
                    <p className="text-[#4A5568]">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={LABEL}>Full Name *</label>
                        <input required className={INPUT} placeholder="Rajesh Patel" />
                      </div>
                      <div>
                        <label className={LABEL}>Email *</label>
                        <input required type="email" className={INPUT} placeholder="rajesh@example.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={LABEL}>Company</label>
                        <input className={INPUT} placeholder="Patel Traders" />
                      </div>
                      <div>
                        <label className={LABEL}>Product of Interest</label>
                        <select className={INPUT} style={{ background: '#F4F6FA' }}>
                          <option>— Select Product —</option>
                          <option>Diethyl Phthalate (DEP)</option>
                          <option>Triethyl Citrate (TEC)</option>
                          <option>Both Products</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className={LABEL}>Message *</label>
                      <textarea required rows={5} className={INPUT} placeholder="Hi, I'm interested in placing a bulk order for..." style={{ resize: 'none' }} />
                    </div>
                    <button type="submit" disabled={loading}
                      className="btn-navy w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2">
                      {loading ? (
                        <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Sending...</span></>
                      ) : (
                        <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg><span>Send Message</span></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
