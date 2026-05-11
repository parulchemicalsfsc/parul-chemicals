'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabase'

const ExitSurvey = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    insightful: '',
    product: '',
    knowCompany: '',
    duration: ''
  })

  useEffect(() => {
    // Show feedback survey automatically after 3 minutes
    const timer = setTimeout(() => {
      const lastShown = localStorage.getItem('exit_survey_last_shown');
      const now = Date.now();
      
      // Only show once every 12 hours to avoid being intrusive
      if (lastShown && now - parseInt(lastShown) < 12 * 60 * 60 * 1000) {
        return;
      }

      triggerSurvey();
    }, 180000); // 3 minute delay

    return () => clearTimeout(timer);
  }, [isVisible, isSubmitted])

  const triggerSurvey = () => {
    if (!isVisible && !isSubmitted) {
      setIsVisible(true);
      localStorage.setItem('exit_survey_last_shown', Date.now().toString());
    }
  };

  const handleClose = () => {
    setIsVisible(false)
    setStep(1)
    setIsSubmitted(false)
    // Clear all previously entered data
    setFormData({
      name: '',
      company: '',
      country: '',
      email: '',
      insightful: '',
      product: '',
      knowCompany: '',
      duration: ''
    })
  }

  const handleNext = () => {
    // If it's the knowCompany question and they say No, skip duration
    if (step === 7 && formData.knowCompany === 'No') {
      submitData()
    } else if (step === 8) {
      submitData()
    } else {
      setStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(prev => prev - 1)
  }

  const submitData = async () => {
    try {
      const response = await fetch('/api/exit-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(handleClose, 3000)
      }
    } catch (error) {
      console.error('Error submitting survey:', error)
    }
  }

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const steps = [
    {
      id: 1,
      question: "What's your name?",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      field: 'name',
      placeholder: 'Enter your name...'
    },
    {
      id: 2,
      question: "Which company are you from?",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      field: 'company',
      placeholder: 'Company name...'
    },
    {
      id: 3,
      question: "Which country are you from?",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      field: 'country',
      placeholder: 'Your country...'
    },
    {
      id: 4,
      question: "What is your Email Address?",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      field: 'email',
      placeholder: 'your@email.com'
    },
    {
      id: 5,
      question: "Did you find this website insightful?",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
          <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
      field: 'insightful',
      type: 'choice',
      options: ['Yes, very much', 'Somewhat', 'Not really']
    },
    {
      id: 6,
      question: "Which product were you interested in?",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      field: 'product',
      placeholder: 'e.g. Calcival, Phosphates...'
    },
    {
      id: 7,
      question: "Do you know this company??",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
          <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
      field: 'knowCompany',
      type: 'choice',
      options: ['Yes', 'No']
    },
    {
      id: 8,
      question: "From how long have you known us??",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      field: 'duration',
      placeholder: 'e.g. 2 years, Just heard...'
    }
  ]

  const currentStepData = steps.find(s => s.id === step)
  const totalSteps = formData.knowCompany === 'No' && step >= 7 ? 7 : 8

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            layout
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-[360px] h-auto min-h-[420px] flex flex-col overflow-hidden bg-white/[0.12] border border-white/40 rounded-[2.5rem] shadow-[0_40px_100px_-15px_rgba(255,255,255,0.1),0_20px_40px_-10px_rgba(0,0,0,0.3)] backdrop-blur-[60px]"
          >
            {/* Liquid glass reflections */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 via-transparent to-white/10 pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-blue-300/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-purple-300/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 z-30 backdrop-blur-md border border-white/10"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="relative flex-1 flex flex-col p-8 z-10">
              {!isSubmitted ? (
                <>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-2xl bg-white/20 border border-white/30 shadow-lg backdrop-blur-md">
                        {React.cloneElement(currentStepData?.icon as React.ReactElement, { width: 18, height: 18, className: "text-white" })}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">
                          STEP {step} OF {totalSteps}
                        </span>
                      </div>
                    </div>

                    {/* Luminous Progress Bar */}
                    <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden mb-8 border border-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(step / totalSteps) * 100}%` }}
                        className="h-full bg-gradient-to-r from-white/40 via-white to-white/40 bg-[length:200%_100%] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        transition={{ duration: 0.4 }}
                      />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h2 className="text-2xl font-bold text-white tracking-tight leading-tight mb-8 drop-shadow-md">
                        {currentStepData?.question}
                      </h2>

                      <div className="space-y-3">
                        {currentStepData?.type === 'choice' ? (
                          <div className="grid grid-cols-1 gap-3">
                            {currentStepData.options?.map((option) => (
                              <button
                                key={option}
                                onClick={() => {
                                  updateField(currentStepData.field, option)
                                  if (currentStepData.field === 'knowCompany' && option === 'No') {
                                    updateField('duration', 'N/A')
                                    setTimeout(submitData, 100)
                                  } else {
                                    handleNext()
                                  }
                                }}
                                className={`w-full p-4 text-left rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                                  formData[currentStepData.field as keyof typeof formData] === option
                                    ? 'bg-white/30 border-white/60 text-white shadow-xl scale-[1.02]'
                                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/15 hover:border-white/30 hover:text-white'
                                }`}
                              >
                                <span className="font-bold text-base relative z-10">{option}</span>
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="relative group">
                            <input
                              autoFocus
                              type="text"
                              value={formData[currentStepData?.field as keyof typeof formData]}
                              onChange={(e) => updateField(currentStepData?.field || '', e.target.value)}
                              onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                              placeholder={currentStepData?.placeholder}
                              className="w-full p-5 bg-white/5 border border-white/20 rounded-2xl text-white text-lg font-medium placeholder:text-white/20 focus:outline-none focus:bg-white/10 focus:border-white/50 transition-all shadow-inner"
                            />
                            <button
                              onClick={handleNext}
                              className="absolute right-2 top-2 bottom-2 px-6 bg-white text-black hover:bg-white/90 rounded-xl shadow-xl transition-all transform active:scale-95 flex items-center justify-center font-bold"
                            >
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.4em]">
                        PARUL CHEMICALS
                      </p>
                    </div>

                    {step > 1 && (
                      <button 
                        onClick={handleBack}
                        className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[11px] font-bold text-white/60 hover:text-white transition-all border border-white/20 backdrop-blur-md"
                      >
                        BACK
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-green-500/20">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Thank You!</h2>
                  <p className="text-gray-400 max-w-xs mx-auto">
                    We appreciate your feedback. It helps us serve you better.
                  </p>
                  
                  <div className="pt-4">
                    <Link 
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all text-sm font-bold shadow-lg shadow-blue-500/20"
                    >
                      Contact Us
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ExitSurvey
