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
    let lastY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Track velocity: if moving upwards quickly towards the top
      const velocity = lastY - e.clientY;
      lastY = e.clientY;

      if (e.clientY < 50 && velocity > 10) {
        triggerSurvey();
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      // Traditional exit intent: mouse leaves the window through the top
      if (!e.relatedTarget && e.clientY <= 5) {
        triggerSurvey();
      }
    };

    const handleVisibilityChange = () => {
      // Trigger if user switches tabs
      if (document.visibilityState === 'hidden') {
        triggerSurvey();
      }
    };

    const triggerSurvey = () => {
      // Always show if not already visible or submitted in this specific instance
      if (!isVisible && !isSubmitted) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [])

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
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden bg-[#0F1C33]/90 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl"
          >
            {/* Close Button - Moved slightly higher and more right */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 group z-10"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-300">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="p-8 md:p-10 pt-12"> {/* Increased top padding */}
              {!isSubmitted ? (
                <>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5">
                          {currentStepData?.icon}
                        </div>
                        <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">
                          Step {step} of {totalSteps}
                        </span>
                      </div>
                      
                      {step > 1 && (
                        <button 
                          onClick={handleBack}
                          className="text-xs font-medium text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                          BACK
                        </button>
                      )}
                    </div>

                    {/* Progress Bar - Repositioned below step info */}
                    <div className="w-full h-1 bg-white/5 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(step / totalSteps) * 100}%` }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white pt-2">
                      {currentStepData?.question}
                    </h2>

                    <div className="mt-8">
                      {currentStepData?.type === 'choice' ? (
                        <div className="grid grid-cols-1 gap-3">
                          {currentStepData.options?.map((option) => (
                            <button
                              key={option}
                              onClick={() => {
                                updateField(currentStepData.field, option)
                                if (currentStepData.field === 'knowCompany' && option === 'No') {
                                  updateField('duration', 'N/A')
                                  // Wait for state to update then submit
                                  setTimeout(submitData, 100)
                                } else {
                                  handleNext()
                                }
                              }}
                              className={`w-full p-4 text-left rounded-xl border transition-all duration-300 ${
                                formData[currentStepData.field as keyof typeof formData] === option
                                  ? 'bg-blue-600/20 border-blue-500 text-white'
                                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="relative">
                          <input
                            autoFocus
                            type="text"
                            value={formData[currentStepData?.field as keyof typeof formData]}
                            onChange={(e) => updateField(currentStepData?.field || '', e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                            placeholder={currentStepData?.placeholder}
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                          />
                          <button
                            onClick={handleNext}
                            className="absolute right-2 top-2 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="mt-10 text-xs text-gray-500 text-center uppercase tracking-widest">
                    PARUL CHEMICALS • FEEDBACK SYSTEM
                  </p>
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
