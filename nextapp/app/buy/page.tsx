'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const INPUT = "w-full bg-[#F4F6FA] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F1C33] placeholder-[#94A3B8] focus:outline-none focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/15 transition-all"
const LABEL = "block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2"
const PERKS = [
  { icon: '💰', text: 'Competitive wholesale pricing' },
  { icon: '🚚', text: 'Priority delivery & logistics support' },
  { icon: '📋', text: 'Dedicated account manager' },
  { icon: '📄', text: 'Access to full TDS & COA documents' },
  { icon: '🏅', text: 'Authorized distributor certificate' },
  { icon: '📞', text: '24/7 technical support' },
]
const PRODUCTS_LIST = ['Diethyl Phthalate (DEP)', 'Triethyl Citrate (TEC)', 'Both Products']

export default function BuyPage() {
  const [tab, setTab] = useState<'register' | 'login'>('register')
  const [success, setSuccess] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [regError, setRegError] = useState('')
  const [loadingReg, setLoadingReg] = useState(false)
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [showPwd, setShowPwd] = useState(false)

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setLoadingReg(true); setRegError('')
    const form = new FormData(e.currentTarget)
    const res = await fetch('/api/buy/register', { method: 'POST', body: form })
    const data = await res.json(); setLoadingReg(false)
    if (data.error === 'phone_exists') { setRegError('A registration with this phone number already exists.'); return }
    if (data.success) setSuccess(true)
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setLoadingLogin(true); setLoginError('')
    const form = new FormData(e.currentTarget)
    const res = await fetch('/api/buy/login', { method: 'POST', body: form })
    const data = await res.json(); setLoadingLogin(false)
    if (data.error) { setLoginError(data.error); return }
    if (data.redirect) window.location.href = data.redirect
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
            <p className="text-xs font-bold tracking-widest uppercase text-[#4DA8DA] mb-4">DISTRIBUTOR PORTAL</p>
            <h1 className="font-display text-5xl font-bold text-white mb-5">Buy Parul Chemicals Products</h1>
            <p className="text-white/80 text-lg">Register as an authorized distributor or login with your approved credentials.</p>
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

      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Tabs */}
          <div className="flex gap-1 bg-[#F4F6FA] border border-[#E2E8F0] rounded-2xl p-1 mb-10 max-w-sm">
            {(['register', 'login'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${tab === t
                  ? 'bg-[#1F4E79] text-white shadow-md'
                  : 'text-[#4A5568] hover:text-[#0F1C33]'
                }`}>
                {t === 'register' ? '🙋 Register' : '🔐 Login'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* REGISTER */}
            {tab === 'register' && (
              <motion.div key="register" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                {success ? (
                  <div className="max-w-lg mx-auto text-center py-16 bg-white border border-[#E2E8F0] rounded-3xl px-8"
                    style={{ boxShadow: '0 8px 40px rgba(15,28,51,0.08)' }}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl"
                      style={{ background: 'rgba(14,165,160,0.10)', border: '1.5px solid rgba(14,165,160,0.30)' }}>✅</div>
                    <h2 className="font-display text-3xl font-bold text-[#0F1C33] mb-3">Application Submitted!</h2>
                    <p className="text-[#4A5568] mb-6">Your distributor application has been received. Our admin team will review it within <strong className="text-[#0F1C33]">24–48 hours</strong>.</p>
                    <p className="text-sm text-[#94A3B8]">Once approved, your Login ID will be your <strong className="text-[#4DA8DA]">phone number</strong> and a secure password will be shared.</p>
                    <button onClick={() => setSuccess(false)} className="mt-8 px-6 py-3 rounded-xl border border-[#E2E8F0] text-[#4A5568] hover:text-[#0F1C33] hover:border-[#4DA8DA]/40 text-sm font-semibold transition-all">
                      Register Another
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Left info */}
                    <div className="lg:col-span-2">
                      <h2 className="font-display text-3xl font-bold text-[#0F1C33] mb-3">Become an Authorized Distributor</h2>
                      <p className="text-[#4A5568] text-base leading-relaxed mb-6">Join our trusted distributor network and get exclusive access to wholesale pricing, priority logistics, and full technical support.</p>
                      <div className="space-y-3">
                        {PERKS.map(p => (
                          <div key={p.text} className="flex items-center gap-3 text-sm text-[#4A5568]">
                            <span className="text-xl shrink-0">{p.icon}</span>
                            <span>{p.text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 rounded-xl bg-[#EEF4FB] border border-[#4DA8DA]/25">
                        <p className="text-sm text-[#4A5568]">🔐 <strong className="text-[#0F1C33]">After approval:</strong> Your <strong className="text-[#4DA8DA]">Login ID = Phone Number</strong>. A secure password will be generated and shared with you.</p>
                      </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">
                      {regError && (
                        <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">{regError}</div>
                      )}
                      <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8" style={{ boxShadow: '0 8px 40px rgba(15,28,51,0.08)' }}>
                        <form onSubmit={handleRegister} className="space-y-4">
                          <p className="text-xs font-bold tracking-widest uppercase text-[#4DA8DA] mb-4">Personal Information</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={LABEL}>Full Name *</label><input name="name" required className={INPUT} placeholder="Rajesh Patel" /></div>
                            <div>
                              <label className={LABEL}>Phone Number * <small className="text-[#4DA8DA] normal-case tracking-normal">(Your Login ID)</small></label>
                              <input name="phone" type="tel" required className={INPUT} placeholder="+91 98765 43210" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={LABEL}>Email *</label><input name="email" type="email" required className={INPUT} placeholder="rajesh@example.com" /></div>
                            <div><label className={LABEL}>Company Name *</label><input name="company" required className={INPUT} placeholder="Patel Traders" /></div>
                          </div>
                          <p className="text-xs font-bold tracking-widest uppercase text-[#4DA8DA] pt-2">Business Details</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label className={LABEL}>City / State *</label><input name="location" required className={INPUT} placeholder="Ahmedabad, Gujarat" /></div>
                            <div>
                              <label className={LABEL}>Product Interest *</label>
                              <select name="product" required className={INPUT} style={{ background: '#F4F6FA' }}>
                                <option value="">— Select —</option>
                                {PRODUCTS_LIST.map(p => <option key={p}>{p}</option>)}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className={LABEL}>Expected Monthly Quantity *</label>
                            <input name="quantity" required className={INPUT} placeholder="e.g. 500 Litres/month" />
                          </div>
                          <button type="submit" disabled={loadingReg} className="btn-navy w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 mt-2">
                            {loadingReg ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Submitting...</span></> : <span>Submit Registration Request</span>}
                          </button>
                          <p className="text-center text-xs text-[#94A3B8] mt-2">
                            Already approved? <button type="button" onClick={() => setTab('login')} className="text-[#4DA8DA] font-semibold hover:underline">Login here →</button>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* LOGIN */}
            {tab === 'login' && (
              <motion.div key="login" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8" style={{ boxShadow: '0 8px 40px rgba(15,28,51,0.08)' }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl"
                      style={{ background: '#EEF4FB' }}>🔐</div>
                    <h2 className="font-display text-2xl font-bold text-[#0F1C33] text-center mb-1">Distributor Login</h2>
                    <p className="text-[#4A5568] text-sm text-center mb-6">Enter your approved credentials to access the portal.</p>
                    {loginError && (
                      <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
                        {loginError === 'invalid_credentials' && 'Invalid phone or password.'}
                        {loginError === 'pending' && 'Your application is still pending admin approval.'}
                        {loginError === 'rejected' && 'Your application was not approved. Contact us for info.'}
                      </div>
                    )}
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div><label className={LABEL}>Phone Number (Login ID) *</label><input name="phone" type="tel" required className={INPUT} placeholder="+91 98765 43210" /></div>
                      <div className="relative">
                        <label className={LABEL}>Password *</label>
                        <input name="password" type={showPwd ? 'text' : 'password'} required className={`${INPUT} pr-12`} placeholder="••••••••" />
                        <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-4 top-8 text-[#94A3B8] hover:text-[#4A5568] transition-colors">
                          {showPwd ? '🙈' : '👁️'}
                        </button>
                      </div>
                      <button type="submit" disabled={loadingLogin} className="btn-navy w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2">
                        {loadingLogin ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Logging in...</span></> : <span>Login to Portal</span>}
                      </button>
                    </form>
                    <div className="flex items-center gap-4 my-5">
                      <div className="flex-1 h-px bg-[#E2E8F0]" />
                      <span className="text-xs text-[#94A3B8]">Don't have an account?</span>
                      <div className="flex-1 h-px bg-[#E2E8F0]" />
                    </div>
                    <button onClick={() => setTab('register')} className="w-full py-3 rounded-xl text-sm font-bold border border-[#E2E8F0] text-[#4A5568] hover:border-[#4DA8DA]/40 hover:text-[#1F4E79] transition-all">
                      Register as Distributor
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-[#0F1C33] mb-6">Distributor Benefits</h3>
                  {[
                    { icon: '📦', title: 'Bulk Order Access', desc: 'Place large quantity orders with negotiated pricing.' },
                    { icon: '🚀', title: 'Priority Processing', desc: 'Your orders get processed before retail customers.' },
                    { icon: '📊', title: 'Order Tracking', desc: 'Track your order history and monthly volumes.' },
                    { icon: '🤝', title: 'Dedicated Support', desc: 'Direct line to your personal account manager.' },
                  ].map(b => (
                    <div key={b.title} className="flex gap-4 mb-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#4DA8DA]/35 hover:bg-[#F4F6FA] transition-all">
                      <span className="text-2xl shrink-0">{b.icon}</span>
                      <div>
                        <p className="font-bold text-[#0F1C33] text-sm mb-1">{b.title}</p>
                        <p className="text-xs text-[#4A5568]">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
