import React from 'react'
import CareerForm from '@/components/CareerForm'

export const metadata = {
  title: 'Careers - TEC & DEP | Parul Chemicals',
  description: 'Join the team at Parul Chemicals. We are looking for talented individuals to help us lead in precision chemistry.',
}

export default function Careers() {
  return (
    <div className="pt-32 pb-20 bg-[#F8F9FA] text-[#0D2137] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0F1C33]">
          Careers in <span className="text-[#4DA8DA]">TEC & DEP</span>
        </h1>
        
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p className="text-xl leading-relaxed text-gray-600 border-l-4 border-[#4DA8DA] pl-6 mb-12 bg-white p-6 rounded-r-xl shadow-sm">
            At <strong>PARUL CHEMICALS</strong>, we believe that our people are our greatest asset. As a leading manufacturer of high-purity Diethyl Phthalate (DEP) and Triethyl Citrate (TEC), we are constantly looking for passionate, innovative, and driven individuals to join our growing team.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              
              {/* Why Work With Us Section */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-[#0F1C33]">Why Work With Us?</h2>
                <p className="mb-4">We offer a dynamic and collaborative work environment where innovation thrives. Here is why you should consider a career with our TEC & DEP division:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  
                  <div className="flex gap-4">
                    <div className="mt-1 text-[#4DA8DA]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
                    <div>
                      <h4 className="font-bold text-gray-800">Global Impact</h4>
                      <p className="text-sm text-gray-600 mt-1">Be part of a company that exports to over 8 countries and serves top-tier pharmaceutical, food, and cosmetic industries worldwide.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="mt-1 text-[#4DA8DA]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
                    <div>
                      <h4 className="font-bold text-gray-800">Commitment to Quality</h4>
                      <p className="text-sm text-gray-600 mt-1">Work in a facility with ISO 9001:2015, ISO 22000:2018, HACCP, and GMP certifications, where excellence is the standard.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 text-[#4DA8DA]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></div>
                    <div>
                      <h4 className="font-bold text-gray-800">Continuous Growth</h4>
                      <p className="text-sm text-gray-600 mt-1">We invest in our employees' professional development through regular training, skill-building, and career advancement opportunities.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 text-[#4DA8DA]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                    <div>
                      <h4 className="font-bold text-gray-800">Safe &amp; Inclusive Environment</h4>
                      <p className="text-sm text-gray-600 mt-1">We prioritize occupational health and safety (ISO 45001:2018) and foster an inclusive workplace that values diversity and mutual respect.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Equal Opportunity Section */}
              <div className="bg-[#4DA8DA]/5 p-8 rounded-2xl border border-[#4DA8DA]/20">
                <h2 className="text-xl font-bold mb-3 text-[#0F1C33]">Equal Opportunity Employer</h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  PARUL CHEMICALS is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. All employment decisions are based on business needs, job requirements, and individual qualifications, without regard to race, color, religion, age, gender, national origin, or disability status.
                </p>
              </div>

            </div>
            
            {/* Sidebar (Current Openings) */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-32">
                <h3 className="text-xl font-bold text-[#0F1C33] mb-4">Frequently Open Departments</h3>
                <div className="space-y-3">
                  {[
                    { title: 'Research & Development (R&D)', desc: 'Chemists and formulation scientists' },
                    { title: 'Quality Control & Assurance', desc: 'Ensuring stringent global standards' },
                    { title: 'Production & Manufacturing', desc: 'Plant operators, supervisors, and engineers' },
                    { title: 'Sales & Marketing', desc: 'Driving domestic and international growth' }
                  ].map((dept, idx) => (
                    <div key={idx} className="p-4 border border-gray-100 rounded-xl hover:border-[#4DA8DA] hover:shadow-md transition-all cursor-pointer group">
                      <div className="font-bold text-gray-800 group-hover:text-[#4DA8DA] transition-colors">{dept.title}</div>
                      <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        {dept.desc}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <p className="text-xs text-gray-500 italic leading-relaxed">
                    * Note: Specific job vacancies are posted on our official LinkedIn page and updated regularly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12" id="apply">
            <h2 className="text-2xl font-bold mb-6 text-[#0D2137]">How to Apply</h2>
            <p className="mb-6 text-gray-600">
              Ready to take the next step in your career with Parul Chemicals? We would love to hear from you. Please fill out the job application form below.
            </p>
            <CareerForm />
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-lg font-bold mb-2 text-[#0D2137]">HR Department</h3>
            <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:career.parulchemicals@gmail.com" className="text-[#4DA8DA] hover:underline">career.parulchemicals@gmail.com</a></p>
            <p className="text-gray-600 mt-1"><strong>Phone:</strong> +91-94277 84082, +91-98256 37101</p>
            <p className="text-gray-600 mt-4 text-sm max-w-md mx-auto">
              Parul Chemicals<br />
              C1B-336/29, Press Stamping Industries, Makarpura,<br />
              Industrial Estate Makarpura, Vadodara, Gujarat, 390010
            </p>
          </div>
          
          <p className="mt-8 text-sm text-gray-500 text-center max-w-2xl mx-auto">
            Our team will review your application and get in touch if your qualifications match our current requirements. We keep all applications strictly confidential as per our <a href="/privacy-policy" className="text-[#4DA8DA] hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
