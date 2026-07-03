import React from 'react'
import FSCareerForm from '@/components/FSCareerForm'
import GoogleTranslate from '@/components/GoogleTranslate'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at F.S. Calcival | Parul Chemicals',
  description: 'Join the F.S. Calcival team. Parul Chemicals is a leading manufacturer of animal feed supplements. We are committed to improving dairy farmers\' profitability.',
}

export default function FSCalcivalCareers() {
  return (
    <div className="pt-32 pb-20 bg-[#F8F9FA] text-[#0D2137] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F1C33]">
            Careers at <span className="text-[#4DA8DA]">F.S. Calcival</span>
          </h1>
          <GoogleTranslate />
        </div>
        
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p className="text-xl leading-relaxed text-gray-600 border-l-4 border-[#4DA8DA] pl-6 mb-12 bg-white p-6 rounded-r-xl shadow-sm">
            <strong>Parul Chemicals</strong> is a leading manufacturer and marketer of Animal Feed Supplements under the <strong>FS CALCIVAL</strong> brand. We are committed to improving dairy farmers' profitability through quality nutritional solutions and strong field support.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              
              {/* Job Info Section */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-[#0F1C33] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#4DA8DA]/10 flex items-center justify-center text-[#4DA8DA]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  Information for Job Vacancies
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-[#0D2137] mb-3">A. Job Overview</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-600">
                      <li><strong>Job Title:</strong> Variable</li>
                      <li><strong>Department:</strong> Field Sales / R&amp;D</li>
                      <li><strong>Reporting Manager:</strong> Area Sales Manager</li>
                      <li><strong>Employment Type:</strong> Full-time / Permanent</li>
                      <li><strong>Location:</strong> Variable (Field/HQ)</li>
                      <li><strong>Travel Requirement:</strong> High (For Sales)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0D2137] mb-3">B. Job Summary (Example - Field Sales Officer)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                      <li>Generate sales in assigned territory.</li>
                      <li>Visit villages daily.</li>
                      <li>Meet dairy farmers and societies.</li>
                      <li>Conduct product demonstrations.</li>
                      <li>Collect market intelligence.</li>
                      <li>Maintain daily reports.</li>
                      <li>Build distributor relationships.</li>
                      <li>Achieve monthly targets.</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#0D2137] mb-2">C. Education</h3>
                      <p className="text-sm text-gray-600">Any Graduate / Diploma / Agriculture / Veterinary / Dairy Technology / MBA (Marketing)</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0D2137] mb-2">D. Qualification</h3>
                      <p className="text-sm text-gray-600">Experience / Fresher Welcome OR 1–3 Years Preferred</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#0D2137] mb-3">E. Required Skills</h3>
                      <ul className="list-disc pl-5 text-sm text-gray-600 grid grid-cols-2 gap-1">
                        <li>Communication Skills</li>
                        <li>Sales Skills</li>
                        <li>Negotiation</li>
                        <li>MS Excel</li>
                        <li>Reporting</li>
                        <li>Relationship Building</li>
                        <li>Problem Solving</li>
                        <li>Teamwork</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0D2137] mb-3">F. Requirements</h3>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Two-wheeler</li>
                        <li>Driving License</li>
                        <li>Smartphone</li>
                        <li>Willing to travel</li>
                        <li>Ready for village visits</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#4DA8DA]/5 p-5 rounded-xl border border-[#4DA8DA]/20">
                    <h3 className="text-lg font-bold text-[#0F1C33] mb-3">G. Perks &amp; Benefits</h3>
                    <p className="text-sm text-gray-600 mb-4">Instead of only salary, we provide a comprehensive benefits package:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Competitive Salary', 'Performance Incentives', 'Travel Allowance', 'Training Programs', 'Career Growth', 'Employee Recognition', 'Paid Leave'].map(perk => (
                        <span key={perk} className="px-3 py-1 bg-white border border-[#4DA8DA]/30 rounded-full text-xs font-semibold text-[#4DA8DA]">{perk}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Work With Us Section */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-[#0F1C33]">Why Work With Us</h2>
                <p className="mb-4">At Parul Chemicals, we believe that our people are the driving force behind our success. We are building more than a team—we are creating future leaders who are passionate about making a positive impact in the livestock and dairy industry.</p>
                <p className="mb-8">Whether you are a fresh graduate beginning your career or an experienced professional looking for new opportunities, we provide the training, support, and growth needed to help you succeed.</p>

                <h3 className="text-xl font-bold text-[#0D2137] mb-6">What You Can Expect</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="flex gap-4">
                    <div className="mt-1 text-green-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div>
                      <h4 className="font-bold text-gray-800">Structured Training &amp; Development</h4>
                      <p className="text-sm text-gray-600 mt-1">Receive professional training in product knowledge, sales techniques, customer relationship management, and leadership skills.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="mt-1 text-green-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div>
                      <h4 className="font-bold text-gray-800">Career Growth Opportunities</h4>
                      <p className="text-sm text-gray-600 mt-1">We believe in promoting talent from within. Your performance and commitment can lead to exciting career advancement opportunities.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 text-green-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div>
                      <h4 className="font-bold text-gray-800">Performance-Based Rewards</h4>
                      <p className="text-sm text-gray-600 mt-1">Your hard work is recognized through competitive incentives, awards, appreciation programs, and career progression.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 text-green-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div>
                      <h4 className="font-bold text-gray-800">Meaningful Work</h4>
                      <p className="text-sm text-gray-600 mt-1">Help improve livestock health and farmers' livelihoods by promoting high-quality animal feed supplements that make a real difference.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 text-green-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div>
                      <h4 className="font-bold text-gray-800">Supportive Team Culture</h4>
                      <p className="text-sm text-gray-600 mt-1">Work alongside experienced professionals in a collaborative environment that values learning, innovation, integrity, and teamwork.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 text-green-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div>
                      <h4 className="font-bold text-gray-800">Learning Every Day</h4>
                      <p className="text-sm text-gray-600 mt-1">Gain exposure to sales, marketing, dairy cooperatives, veterinary professionals, distributors, and rural markets.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 text-green-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div>
                      <h4 className="font-bold text-gray-800">Stability with Growth</h4>
                      <p className="text-sm text-gray-600 mt-1">Join a growing organization with ambitious expansion plans across India, offering long-term career opportunities.</p>
                    </div>
                  </div>

                </div>

                <div className="mt-8 p-5 bg-[#0F1C33] text-white rounded-xl">
                  <p className="text-sm leading-relaxed">
                    Be part of a team dedicated to improving animal health, supporting farmers, and building a stronger future for India's livestock industry. If you are passionate about learning, committed to excellence, and ready to grow your career, we would love to hear from you.
                  </p>
                </div>
              </div>

            </div>
            
            {/* Sidebar (Current Openings) */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-32">
                <h3 className="text-xl font-bold text-[#0F1C33] mb-4">Current Open Vacancies</h3>
                <div className="space-y-3">
                  {['Field Sales Officer', 'Tele Caller', 'Jr. R & D Executive'].map((job, idx) => (
                    <div key={idx} className="p-4 border border-gray-100 rounded-xl hover:border-[#4DA8DA] hover:shadow-md transition-all cursor-pointer group">
                      <div className="font-bold text-gray-800 group-hover:text-[#4DA8DA] transition-colors">{job}</div>
                      <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Various Locations
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-sm text-gray-800 mb-2">About F.S. Calcival</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    F.S. Calcival is not just calcium; it's a multi-vitamin and calcium formulation that enhances energy and bolsters immunity in animals. Join us in our mission to maximize productivity in the dairy industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12" id="apply">
            <FSCareerForm />
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-lg font-bold mb-2 text-[#0D2137]">HR Department</h3>
            <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:career.parulchemicals@gmail.com" className="text-[#4DA8DA] hover:underline">career.parulchemicals@gmail.com</a></p>
            <p className="text-gray-600 mt-1"><strong>Phone:</strong> +91-94277 84082, +91-98256 37101</p>
          </div>
        </div>
      </div>
    </div>
  )
}
