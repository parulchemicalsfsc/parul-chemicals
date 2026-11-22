'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FormDataState {
  name: string
  jobTitle: string
  company: string
  email: string
  country: string
  application: string
  currentProduct: string
  annualVolume: string
  sampleSize: string
  documentsNeeded: string[]
  message: string
}

const INITIAL_FORM: FormDataState = {
  name: '',
  jobTitle: '',
  company: '',
  email: '',
  country: '',
  application: '',
  currentProduct: '',
  annualVolume: '',
  sampleSize: '250 g',
  documentsNeeded: [],
  message: '',
}

const DOCUMENT_OPTIONS = [
  { id: 'ifra', label: 'IFRA Conformity Statement' },
  { id: 'allergen', label: 'EU Allergen Statement' },
  { id: 'reach', label: 'REACH Registration / OR Letter' },
  { id: 'halal', label: 'Halal Certificate' },
  { id: 'kosher', label: 'Star-K Kosher Certificate' },
  { id: 'questionnaire', label: 'Supplier Quality Questionnaire' },
]

const COUNTRY_OPTIONS = [
  'India',
  'United States',
  'France',
  'Germany',
  'Switzerland',
  'United Kingdom',
  'Indonesia',
  'Malaysia',
  'Singapore',
  'Spain',
  'Italy',
  'Argentina',
  'Brazil',
  'United Arab Emirates',
  'Japan',
  'Other',
]

const APPLICATION_OPTIONS = [
  'Fine fragrance (EDP, EDT, body mist)',
  'Personal-care fragrance (lotions, deodorants, hair care)',
  'Home and air care (diffusers, sprays)',
  'Flavours (beverages, confectionery, bakery)',
  'Other',
]

const CURRENT_PRODUCT_OPTIONS = [
  'Diethyl Phthalate (DEP)',
  'Triethyl Citrate (from another supplier)',
  'Other solvent (e.g., DPG, IPM, Benzyl Benzoate)',
  'New development / Not yet formulated',
]

const VOLUME_OPTIONS = [
  'Under 1 MT',
  '1 – 10 MT',
  '10 – 100 MT',
  'Over 100 MT',
  'Exploring / Not established yet',
]

const SAMPLE_SIZE_OPTIONS = [
  { value: '250 g', label: '250 g (Standard Lab Evaluation)' },
  { value: '500 g', label: '500 g (Extended Application Trials)' },
  { value: '1 kg', label: '1 kg (Pilot Formulation Trial)' },
]

export default function TECSampleForm() {
  const [formData, setFormData] = useState<FormDataState>(INITIAL_FORM)
  const [honeypot, setHoneypot] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isMock, setIsMock] = useState(false)

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) setError(null)
  }

  const handleCheckboxChange = (docLabel: string) => {
    setFormData((prev) => {
      const exists = prev.documentsNeeded.includes(docLabel)
      return {
        ...prev,
        documentsNeeded: exists
          ? prev.documentsNeeded.filter((d) => d !== docLabel)
          : [...prev.documentsNeeded, docLabel],
      }
    })
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Please provide your full name.')
      return false
    }
    if (!formData.jobTitle.trim()) {
      setError('Please provide your job title.')
      return false
    }
    if (!formData.company.trim()) {
      setError('Please provide your company or fragrance house name.')
      return false
    }
    if (!formData.email.trim()) {
      setError('Please provide your work email address.')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please provide a valid work email address.')
      return false
    }
    if (!formData.country) {
      setError('Please select your destination country.')
      return false
    }
    if (!formData.application) {
      setError('Please select your primary application sector.')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Honeypot check
    if (honeypot) {
      // Silently finish for automated bots
      setSuccess(true)
      return
    }

    if (!validateForm()) return

    setLoading(true)

    try {
      const response = await fetch('/api/sample-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json().catch(() => null)

      if (response.ok && data?.success) {
        setIsMock(Boolean(data?.mockMode))
        setSuccess(true)
      } else {
        setError(
          data?.error ||
            'Unable to process your request at this time. Please contact us directly at info@parulchemicals.in.'
        )
      }
    } catch (err: any) {
      console.error('Sample request submission error:', err)
      setError(
        'A network communication error occurred. Please check your connection or contact info@parulchemicals.in.'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setFormData(INITIAL_FORM)
    setHoneypot('')
    setIsMock(false)
    setSuccess(false)
    setError(null)
  }

  const INPUT_STYLE =
    'w-full bg-[#F4F6FA] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm text-[#0F1C33] placeholder-[#94A3B8] focus:outline-none focus:border-[#00C9A7] focus:ring-2 focus:ring-[#00C9A7]/15 transition-all'
  const LABEL_STYLE = 'block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2'

  return (
    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success-state"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="text-center py-8 sm:py-12"
          >
            <div className="w-20 h-20 rounded-full bg-[#E6F9F5] border border-[#00C9A7]/40 flex items-center justify-center mx-auto mb-6 text-[#00A88F] shadow-sm">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F1C33] mb-3">
              Sample Request Received!
            </h3>

            <p className="text-[#4A5568] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-6">
              Thank you. Our technical and export team will contact you within 24 hours to confirm your shipping
              address and any documents you need.
            </p>

            {/* Development Mock Mode Notification Banner */}
            {isMock && (
              <div className="max-w-lg mx-auto p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs text-left font-medium mb-6 flex items-start gap-2.5 shadow-xs">
                <span className="text-base leading-none">⚙️</span>
                <div>
                  <strong>Development Mock Mode:</strong> Submission simulated locally. No external network request was sent to the LMS and no live emails were dispatched.
                </div>
              </div>
            )}

            {/* Submission Summary Card */}
            <div className="max-w-lg mx-auto bg-white border border-[#E2E8F0] rounded-2xl p-6 text-left text-xs sm:text-sm text-[#4A5568] shadow-xs mb-8 space-y-2">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-[#0F1C33]">Recipient:</span>
                <span>{formData.name} ({formData.company})</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-[#0F1C33]">Sample Size:</span>
                <span className="font-semibold text-[#00A88F]">{formData.sampleSize}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-[#0F1C33]">Destination:</span>
                <span>{formData.country}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-[#0F1C33]">Standard Pack:</span>
                <span className="text-[#64748B]">Includes COA, TDS &amp; SDS</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="text-sm font-bold text-[#00A88F] hover:text-[#008f7a] hover:underline transition-colors"
            >
              Submit Another Sample Request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            {/* Honeypot field for bot mitigation (hidden from legitimate users) */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
              <input
                type="text"
                name="website_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Error banner */}
            {error && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Required Section 1: Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label htmlFor="name" className={LABEL_STYLE}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={handleTextChange}
                  className={INPUT_STYLE}
                  placeholder="e.g. Dr. Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className={LABEL_STYLE}>
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.jobTitle}
                  onChange={handleTextChange}
                  className={INPUT_STYLE}
                  placeholder="e.g. Senior Flavourist / Perfumer"
                />
              </div>

              <div>
                <label htmlFor="company" className={LABEL_STYLE}>
                  Company / Fragrance House <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  maxLength={120}
                  value={formData.company}
                  onChange={handleTextChange}
                  className={INPUT_STYLE}
                  placeholder="e.g. Fragrance Labs Inc."
                />
              </div>

              <div>
                <label htmlFor="email" className={LABEL_STYLE}>
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={120}
                  value={formData.email}
                  onChange={handleTextChange}
                  className={INPUT_STYLE}
                  placeholder="e.g. j.doe@fragrancelabs.com"
                />
              </div>

              <div>
                <label htmlFor="country" className={LABEL_STYLE}>
                  Destination Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleTextChange}
                  className={INPUT_STYLE}
                >
                  <option value="">— Select Country —</option>
                  {COUNTRY_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="application" className={LABEL_STYLE}>
                  Primary Application <span className="text-red-500">*</span>
                </label>
                <select
                  id="application"
                  name="application"
                  required
                  value={formData.application}
                  onChange={handleTextChange}
                  className={INPUT_STYLE}
                >
                  <option value="">— Select Application —</option>
                  {APPLICATION_OPTIONS.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Optional Section 2: Formulation & Volume Scope */}
            <div className="pt-4 border-t border-slate-200/80">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0EA5A0] mb-4">
                Evaluation &amp; Supply Scope (Optional)
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="currentProduct" className={LABEL_STYLE}>
                    Product Currently Used
                  </label>
                  <select
                    id="currentProduct"
                    name="currentProduct"
                    value={formData.currentProduct}
                    onChange={handleTextChange}
                    className={INPUT_STYLE}
                  >
                    <option value="">— Select Current Solvent —</option>
                    {CURRENT_PRODUCT_OPTIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="annualVolume" className={LABEL_STYLE}>
                    Estimated Annual Volume
                  </label>
                  <select
                    id="annualVolume"
                    name="annualVolume"
                    value={formData.annualVolume}
                    onChange={handleTextChange}
                    className={INPUT_STYLE}
                  >
                    <option value="">— Select Estimated Volume —</option>
                    {VOLUME_OPTIONS.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="sampleSize" className={LABEL_STYLE}>
                    Sample Size Needed
                  </label>
                  <select
                    id="sampleSize"
                    name="sampleSize"
                    value={formData.sampleSize}
                    onChange={handleTextChange}
                    className={INPUT_STYLE}
                  >
                    {SAMPLE_SIZE_OPTIONS.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Optional Section 3: Regulatory Documents Checkboxes */}
            <div className="pt-2">
              <label className={LABEL_STYLE}>
                Specific Documents Needed with Sample
              </label>
              <p className="text-xs text-[#64748B] mb-3">
                Standard COA, TDS, and SDS are automatically enclosed. Select any specialized compliance statements
                required:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {DOCUMENT_OPTIONS.map((doc) => {
                  const checked = formData.documentsNeeded.includes(doc.label)
                  return (
                    <label
                      key={doc.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all ${
                        checked
                          ? 'bg-[#E6F9F5] border-[#00C9A7] text-[#0F1C33]'
                          : 'bg-white border-[#E2E8F0] text-[#4A5568] hover:border-[#00C9A7]/40'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleCheckboxChange(doc.label)}
                        className="rounded border-slate-300 text-[#00A88F] focus:ring-[#00C9A7] h-4 w-4"
                      />
                      <span>{doc.label}</span>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Optional Section 4: Formulation Message */}
            <div className="pt-2">
              <label htmlFor="message" className={LABEL_STYLE}>
                Message / Technical Questions (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                maxLength={1000}
                value={formData.message}
                onChange={handleTextChange}
                className={INPUT_STYLE}
                placeholder="Share any specific aroma carrier challenges, target accord notes, or delivery timeline requirements..."
                style={{ resize: 'none' }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing Sample Request...</span>
                </>
              ) : (
                <>
                  <span>Send My Sample Request</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

