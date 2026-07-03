'use client'

import React, { useState } from 'react'

export default function FSCareerForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [currentAddress, setCurrentAddress] = useState('')
  const [permanentAddress, setPermanentAddress] = useState('')
  const [sameAddress, setSameAddress] = useState(false)
  const [experienceLevel, setExperienceLevel] = useState('Experienced')

  const handleSameAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSameAddress(e.target.checked)
    if (e.target.checked) {
      setPermanentAddress(currentAddress)
    }
  }

  const handleCurrentAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentAddress(e.target.value)
    if (sameAddress) {
      setPermanentAddress(e.target.value)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const formData = new FormData(e.currentTarget)
      
      formData.append('source', 'F.S. Calcival')
      formData.append('experienceLevel', experienceLevel)
      formData.append('currentAddress', currentAddress)
      if (permanentAddress) formData.append('permanentAddress', permanentAddress)

      const res = await fetch('/api/careers', {
        method: 'POST',
        body: formData
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit application')
      }

      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-10 mb-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-[#0F1C33]">Application Submitted Successfully!</h3>
        <p className="text-gray-600 max-w-lg mx-auto">Thank you for your interest in joining the F.S. Calcival team. Our recruitment team will carefully review your application and contact you if your profile matches our requirements.</p>
        <button onClick={() => setSuccess(false)} className="mt-6 px-6 py-2 text-[#4DA8DA] font-semibold hover:bg-[#4DA8DA]/10 rounded-full transition-colors">
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mt-10 mb-10">
      <h3 className="text-2xl font-bold mb-8 text-[#0F1C33] border-b pb-4">Job Application Form</h3>
      
      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Position Applied For */}
        <section>
          <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">POSITION APPLIED FOR *</label>
          <select required id="position" name="position" className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/20 outline-none bg-gray-50/50">
            <option value="">Select Position</option>
            <option value="Field Sales Officer">Field Sales Officer</option>
            <option value="Tele Caller">Tele Caller</option>
            <option value="Jr. R & D Executive">Jr. R & D Executive</option>
          </select>
        </section>

        {/* A. Personal Information */}
        <section>
          <h4 className="text-lg font-bold text-[#0D2137] mb-4 flex items-center gap-2"><span className="bg-[#4DA8DA] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">A</span> Personal Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input required type="text" name="name" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
              <input required type="tel" name="phone" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input required type="email" name="email" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
              <input required type="date" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender (Optional)</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none bg-white">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Address (Taluka, Dist, State) *</label>
              <textarea required rows={2} value={currentAddress} onChange={handleCurrentAddressChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none resize-none"></textarea>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">Permanent Address (Taluka, Dist, State) *</label>
                <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                  <input type="checkbox" checked={sameAddress} onChange={handleSameAddressChange} className="w-3.5 h-3.5 text-[#4DA8DA]" />
                  Same as Current
                </label>
              </div>
              <textarea required rows={2} value={permanentAddress} onChange={(e) => setPermanentAddress(e.target.value)} disabled={sameAddress} className={`w-full px-4 py-2.5 rounded-lg border outline-none resize-none ${sameAddress ? 'bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed' : 'border-gray-200 focus:border-[#4DA8DA]'}`}></textarea>
            </div>
          </div>
        </section>

        {/* B. Education */}
        <section>
          <h4 className="text-lg font-bold text-[#0D2137] mb-4 flex items-center gap-2"><span className="bg-[#4DA8DA] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">B</span> Education</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification *</label>
              <input required type="text" name="highestQualification" placeholder="e.g. BSc Agriculture, MBA" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">College / University *</label>
              <input required type="text" name="college" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year of Passing *</label>
              <input required type="text" name="passingYear" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Percentage / CGPA *</label>
              <input required type="text" name="percentage" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
            </div>
          </div>
        </section>

        {/* C. Employment Details */}
        <section>
          <h4 className="text-lg font-bold text-[#0D2137] mb-4 flex items-center gap-2"><span className="bg-[#4DA8DA] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">C</span> Employment Details</h4>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level *</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="exp_level" value="Fresher" checked={experienceLevel === 'Fresher'} onChange={(e) => setExperienceLevel(e.target.value)} className="w-4 h-4 text-[#4DA8DA]" />
                <span>Fresher</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="exp_level" value="Experienced" checked={experienceLevel === 'Experienced'} onChange={(e) => setExperienceLevel(e.target.value)} className="w-4 h-4 text-[#4DA8DA]" />
                <span>Experienced</span>
              </label>
            </div>
          </div>
          {experienceLevel === 'Experienced' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Company *</label>
                <input required type="text" name="currentCompany" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Designation *</label>
                <input required type="text" name="currentDesignation" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Experience (Years) *</label>
                <input required type="text" name="totalExperience" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Relevant Experience *</label>
                <input required type="text" name="relevantExperience" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Salary *</label>
                <input required type="text" name="currentSalary" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Expected Salary *</label>
                <input required type="text" name="expectedSalary" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notice Period *</label>
                <input required type="text" name="noticePeriod" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Job Change *</label>
                <input required type="text" name="reasonForChange" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Expected Salary *</label>
                <input required type="text" name="expectedSalary" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
              </div>
            </div>
          )}
        </section>

        {/* D. Preferred Location */}
        <section>
          <h4 className="text-lg font-bold text-[#0D2137] mb-4 flex items-center gap-2"><span className="bg-[#4DA8DA] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">D</span> Travel & Location</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Willing to Travel? *</label>
              <select required name="willingToTravel" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none bg-white">
                <option value="">Select</option><option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Have Two-Wheeler? *</label>
              <select required name="twoWheeler" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none bg-white">
                <option value="">Select</option><option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Valid Driving License? *</label>
              <select required name="drivingLicense" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 outline-none bg-white">
                <option value="">Select</option><option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>
          </div>
        </section>

        {/* E. Skills */}
        <section>
          <h4 className="text-lg font-bold text-[#0D2137] mb-4 flex items-center gap-2"><span className="bg-[#4DA8DA] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">E</span> Skills & Knowledge</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Languages Known (Gujarati Must) *</label>
              <input required type="text" name="languages" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" placeholder="e.g. Gujarati, Hindi, English" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Computer Skills</label>
              <input type="text" name="computerSkills" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" placeholder="e.g. MS Excel, Email, CRM" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sales Experience (Years/Details)</label>
              <input type="text" name="salesExperience" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Animal Husbandry/Dairy Exp.</label>
              <input type="text" name="animalHusbandryExp" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none" placeholder="If any" />
            </div>
          </div>
        </section>

        {/* F. Documents to Upload */}
        <section>
          <h4 className="text-lg font-bold text-[#0D2137] mb-4 flex items-center gap-2"><span className="bg-[#4DA8DA] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">F</span> Documents Upload</h4>
          <p className="text-sm text-gray-500 mb-4">Please prepare the following documents. You can upload them here or provide them during the interview stage.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Resume *', 'Passport Photo', 'Aadhaar Card', 'PAN Card', 'Driving License', 'Educational Certificates'].map((doc, i) => (
              <div key={i}>
                <label className="block text-xs font-semibold text-gray-600 mb-1">{doc}</label>
                <input type="file" name={doc.replace(/[^a-zA-Z]/g, '')} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#4DA8DA]/10 file:text-[#4DA8DA] hover:file:bg-[#4DA8DA]/20" />
              </div>
            ))}
          </div>
        </section>

        {/* G. Screening Questions */}
        <section>
          <h4 className="text-lg font-bold text-[#0D2137] mb-4 flex items-center gap-2"><span className="bg-[#4DA8DA] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">G</span> Screening Questions</h4>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-3 border-b pb-1">A. General Questions</h5>
              <div className="space-y-4">
                <div><label className="block text-sm text-gray-700 mb-1">Why do you want to join our company? *</label><textarea name="whyJoin" required rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none resize-none"></textarea></div>
                <div><label className="block text-sm text-gray-700 mb-1">What do you know about FSCALCIVAL? *</label><textarea name="whatKnowAboutUs" required rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none resize-none"></textarea></div>
                <div><label className="block text-sm text-gray-700 mb-1">Are you comfortable working in rural areas? *</label><select name="ruralAreas" required className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none"><option value="">Select</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-800 mb-3 border-b pb-1">B. Sales Questions</h5>
              <div className="space-y-4">
                <div><label className="block text-sm text-gray-700 mb-1">How do you convince a customer? *</label><textarea name="convinceCustomer" required rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none resize-none"></textarea></div>
                <div><label className="block text-sm text-gray-700 mb-1">How do you handle rejection? *</label><textarea name="handleRejection" required rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none resize-none"></textarea></div>
                <div><label className="block text-sm text-gray-700 mb-1">How do you plan your daily route? *</label><textarea name="planDailyRoute" required rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#4DA8DA] outline-none resize-none"></textarea></div>
              </div>
            </div>
          </div>
        </section>

        {/* Declaration */}
        <section className="bg-gray-50 p-5 rounded-xl border border-gray-200">
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input required type="checkbox" className="mt-1 w-4 h-4 text-[#4DA8DA] rounded border-gray-300" />
              <span className="text-sm text-gray-700">I certify that all information provided is true and correct.</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input required type="checkbox" className="mt-1 w-4 h-4 text-[#4DA8DA] rounded border-gray-300" />
              <span className="text-sm text-gray-700">I agree to the company's recruitment process.</span>
            </label>
          </div>
        </section>

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100 font-medium">
            {error}
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg text-lg ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0F1C33] hover:bg-[#4DA8DA] hover:shadow-[#4DA8DA]/20'
          }`}
        >
          {loading ? 'Submitting Application...' : 'Submit Application'}
        </button>
      </form>
    </div>
  )
}
