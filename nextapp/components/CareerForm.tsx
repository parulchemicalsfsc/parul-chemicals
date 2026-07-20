'use client'

import React, { useState } from 'react'

export default function CareerForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    linkedin: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const formPayload = new FormData()
      Object.entries(formData).forEach(([key, value]) => formPayload.append(key, value))
      formPayload.append('source', 'TEC & DEP')
      
      const res = await fetch('/api/careers', {
        method: 'POST',
        body: formPayload
      })

      let data;
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        await res.text();
        if (res.status === 413) {
           throw new Error("Payload too large. Please reduce the size of your input.");
        }
        throw new Error(`Unexpected server response: ${res.status} ${res.statusText}`);
      }

      if (!res.ok) {
        throw new Error(data?.error || 'Failed to submit application')
      }

      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', role: '', linkedin: '', message: '' })
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mt-10 mb-10">
      <h3 className="text-2xl font-bold mb-6 text-[#0F1C33]">Submit Your Application</h3>
      
      {success ? (
        <div className="p-6 bg-green-50 text-green-700 rounded-xl border border-green-200">
          <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            Application Submitted!
          </h4>
          <p>Thank you for your interest in Parul Chemicals. Our HR team will review your application and get in touch with you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/20 outline-none transition-all bg-gray-50/50" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/20 outline-none transition-all bg-gray-50/50" placeholder="john@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/20 outline-none transition-all bg-gray-50/50" placeholder="+91 98765 43210" />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-1">Role Applying For</label>
              <select id="role" name="role" value={formData.role} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/20 outline-none transition-all bg-gray-50/50 appearance-none">
                <option value="">Select a role</option>
                <option value="Research & Development">Research & Development</option>
                <option value="Quality Control & Assurance">Quality Control & Assurance</option>
                <option value="Production & Manufacturing">Production & Manufacturing</option>
                <option value="Sales & Marketing">Sales & Marketing</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="linkedin" className="block text-sm font-semibold text-gray-700 mb-1">LinkedIn Profile or Portfolio URL</label>
            <input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/20 outline-none transition-all bg-gray-50/50" placeholder="https://linkedin.com/in/johndoe" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Cover Letter / Additional Information</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/20 outline-none transition-all bg-gray-50/50 resize-y" placeholder="Tell us why you are a great fit for this role..."></textarea>
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0F1C33] hover:bg-[#4DA8DA] hover:shadow-[#4DA8DA]/20'
            }`}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      )}
    </div>
  )
}
