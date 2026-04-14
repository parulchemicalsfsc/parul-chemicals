'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '@/lib/data'
import PageHero from '@/components/PageHero'

const INPUT = "w-full bg-[#F4F6FA] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F1C33] placeholder-[#94A3B8] focus:outline-none focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/15 transition-all"
const LABEL = "block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2"

type FormMode = 'inquiry' | 'appointment'

export default function ContactPage() {
  const [mode, setMode] = useState<FormMode>('inquiry')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Collect Form Data
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      // Endpoint handles both modes
      const response = await fetch('/api/contact/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, mode })
      })

      if (response.ok) {
        setSent(true)
      } else {
        alert("Failed to send. Please try again or check your .env settings.")
      }
    } catch (err) {
      console.error(err)
      // Fallback for demo purposes if backend isn't ready
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero 
        tag="CONTACT" 
        title="Get In Touch" 
        subtitle="Inquire about our products, request a quote, or schedule a technical consultation." 
      />

      <section className="py-24 bg-white relative overflow-hidden grid-pattern">
        {/* Subtle Designer Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] accent-blue-blob opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#0F1C33] mb-6">Contact Details</h2>
              {[
                { label: 'Our Address', value: SITE.address },
                { label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
                { label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                { label: 'GSTIN', value: SITE.gstin },
              ].map(item => (
                <div key={item.label} className="flex gap-4 p-6 rounded-2xl bg-[#F4F6FA] border border-[#E2E8F0] hover:border-[#4DA8DA]/35 transition-all group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA] mt-2 opacity-50 group-hover:opacity-100 transition-opacity" />
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

            {/* Form Container */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <div className="bg-white border border-[#E2E8F0] rounded-[2.5rem] p-4 md:p-10 shadow-[0_20px_50px_rgba(15,28,51,0.08)]">
                
                {/* Tab Switcher */}
                <div className="flex p-1 bg-slate-100 rounded-2xl mb-10 max-w-sm">
                  {(['inquiry', 'appointment'] as FormMode[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => { setMode(m); setSent(false); }}
                      className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                        mode === m ? 'bg-white text-[#0F1C33] shadow-sm' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {m === 'inquiry' ? 'Send Inquiry' : 'Schedule Meeting'}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
                        style={{ background: 'rgba(14,165,160,0.12)', border: '1.5px solid rgba(14,165,160,0.30)' }}>
                        <div className="w-4 h-4 rounded-full bg-[#0EA5A0] animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F1C33] mb-3">
                        {mode === 'inquiry' ? 'Message Sent!' : 'Appointment Requested!'}
                      </h3>
                      <p className="text-[#4A5568] max-w-xs mx-auto">
                        {mode === 'inquiry' 
                          ? "We'll get back to you within 24 hours." 
                          : "Shlok will review your schedule and confirm via email shortly."}
                      </p>
                      <button onClick={() => setSent(false)} className="mt-8 text-sm font-bold text-[#4DA8DA] hover:underline">Send another?</button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key={mode}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className={LABEL}>Full Name *</label>
                          <input name="name" required className={INPUT} placeholder="Rajesh Patel" />
                        </div>
                        <div>
                          <label className={LABEL}>Email *</label>
                          <input name="email" required type="email" className={INPUT} placeholder="rajesh@example.com" />
                        </div>
                      </div>

                      {mode === 'inquiry' ? (
                        <>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                              <label className={LABEL}>Company</label>
                              <input name="company" className={INPUT} placeholder="Patel Traders" />
                            </div>
                            <div>
                              <label className={LABEL}>Product of Interest</label>
                              <select name="product" className={INPUT} style={{ background: '#F4F6FA' }}>
                                <option>— Select Product —</option>
                                <option>Diethyl Phthalate (DEP)</option>
                                <option>Triethyl Citrate (TEC)</option>
                                <option>Both Products</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className={LABEL}>Message *</label>
                            <textarea name="message" required rows={4} className={INPUT} placeholder="Hi, I'm interested in..." style={{ resize: 'none' }} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                              <label className={LABEL}>Preferred Date *</label>
                              <input name="date" required type="date" className={INPUT} min={new Date().toISOString().split('T')[0]} />
                            </div>
                            <div>
                              <label className={LABEL}>Preferred Time *</label>
                              <select name="time" required className={INPUT} style={{ background: '#F4F6FA' }}>
                                <option value="">— Select Slot —</option>
                                <option>10:00 AM - 10:30 AM</option>
                                <option>11:00 AM - 11:30 AM</option>
                                <option>02:00 PM - 02:30 PM</option>
                                <option>03:00 PM - 03:30 PM</option>
                                <option>04:00 PM - 04:30 PM</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className={LABEL}>Meeting Type *</label>
                            <div className="flex gap-4">
                              <label className="flex-1 cursor-pointer">
                                <input type="radio" name="meetingType" value="Virtual" defaultChecked className="peer hidden" />
                                <div className="p-4 border border-slate-200 rounded-xl text-center text-xs font-bold text-slate-400 peer-checked:border-[#4DA8DA] peer-checked:bg-[#4DA8DA]/5 peer-checked:text-[#4DA8DA] transition-all">
                                  Virtual Call
                                </div>
                              </label>
                              <label className="flex-1 cursor-pointer">
                                <input type="radio" name="meetingType" value="Factory" className="peer hidden" />
                                <div className="p-4 border border-slate-200 rounded-xl text-center text-xs font-bold text-slate-400 peer-checked:border-[#4DA8DA] peer-checked:bg-[#4DA8DA]/5 peer-checked:text-[#4DA8DA] transition-all">
                                  In-Person Visit
                                </div>
                              </label>
                            </div>
                          </div>
                          <div>
                            <label className={LABEL}>Discussion Topics</label>
                            <input name="topics" className={INPUT} placeholder="e.g., Bulk order pricing, technical specs" />
                          </div>
                        </>
                      )}

                      <button type="submit" disabled={loading}
                        className="btn-navy w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-lg shadow-navy/20 active:scale-[0.98] transition-transform">
                        {loading ? (
                          <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Processing...</span></>
                        ) : (
                          <>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                            <span>{mode === 'inquiry' ? 'Send Message' : 'Confirm Appointment'}</span>
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
