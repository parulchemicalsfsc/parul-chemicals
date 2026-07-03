'use client'

import React, { useState } from 'react'

export default function JobProfilesSlider() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: 0, title: 'Field Sales Officer' },
    { id: 1, title: 'R&D, QC & QA' },
    { id: 2, title: 'Telecaller' }
  ]

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-[#0F1C33] flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#4DA8DA]/10 flex items-center justify-center text-[#4DA8DA]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        Detailed Job Profiles
      </h2>
      
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-t-lg font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-[#4DA8DA] text-white shadow-md'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-[#4DA8DA]'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="min-h-[400px]">
        {activeTab === 0 && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="text-xl font-bold text-[#4DA8DA] border-b-2 border-[#4DA8DA]/20 pb-2 mb-4">1. Field Sales Officer</h3>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p><strong>Onboarding Training:</strong> Product knowledge and software training will be provided at the office premises; allowance will be provided for this day.</p>
              <p><strong>Technology Knowledge:</strong> Must be aware of social media (WhatsApp) and use of android phone. Daily reports and attendance are managed through BIZ Analyst Software.</p>
              <p><strong>Assigned Region:</strong> An employee must be local and familiar to their district or Taluka which is allocated by the company.</p>
              <p><strong>Daily Reporting:</strong> He/she has to submit reports at the end-of-day to their reporting manager.</p>
              <p><strong>Training Period:</strong> Initial 1 month of training with no targets.</p>
              <p><strong>Product Promotion:</strong> Visit assigned villages to provide detailed information about the company’s products.</p>
              <p><strong>Marketing &amp; Advertising:</strong> The employee has to spread awareness of our product using different methods like Banners, Pamphlets, testimonials videos, etc.</p>
              <p><strong>Relationship with Customers:</strong> Maintain healthy relationships with customers (secretary of dairy) and handle any circumstances. Take feedback and update the reporting manager timely.</p>
              <p><strong>Product Demo:</strong> Schedule a product demonstration once a month to generate maximum potential leads from that specific location (Dairy).</p>
              <p><strong>Targets:</strong> Employees are expected to achieve their assigned sales targets. If an employee exceeds their target, they will receive additional performance incentives. If the target is not achieved, penalties will be applied on a per-liter basis as per company policy.</p>
              <p><strong>Payment Collection:</strong> Entirely liable for timely collection of payments into the company’s account; non-compliance will lead to legal action.</p>
              <p><strong>Cheque Collection:</strong> Collect cheque payments based on customer orders, along with required documents (Aadhar Card, PAN, bank details, photo, light bill, references).</p>
              <p><strong>Security Deposit:</strong> Submit a cheque as a security deposit against every order. It will be returned once payment is received. Responsible to maintain stock and update regularly.</p>
              <p><strong>Sales Order:</strong> Responsible from getting orders till payment collection. Verify delivered orders with the invoice copy.</p>
              <p><strong>Payment Receipt:</strong> Share the payment receipt to the customer once the payment has been made.</p>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="text-xl font-bold text-[#4DA8DA] border-b-2 border-[#4DA8DA]/20 pb-2 mb-4">2. R&amp;D, QC &amp; QA</h3>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>This is a full-time, on-site role as a Junior Research and Development (R&amp;D) Officer based in Vadodara. The Jr. R&amp;D Officer will engage in research and development activities to support innovation for industrial products, applying laboratory techniques to develop and test new formulations. The role includes conducting experiments, analysing chemical compositions, maintaining detailed records, and collaborating with cross-functional teams to optimize processes and ensure high-quality outputs.</p>
              <div>
                <h4 className="font-bold text-[#0F1C33] mb-2">Responsibilities &amp; Requirements:</h4>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Oversee and monitor daily operations in the production department to ensure quality, efficiency, and compliance with company standards.</li>
                  <li>Research and Development (R&amp;D), and Analytical Skills.</li>
                  <li>Proficiency in Laboratory Skills, including the use of specialized equipment.</li>
                  <li>Excellent Communication skills to collaborate with cross-functional teams.</li>
                  <li>Attention to detail and the ability to analyse data and write scientific reports.</li>
                  <li>Basic knowledge of chemical formulations and processes is a plus.</li>
                  <li>Bachelor's or Master's degree in Chemistry, Chemical Engineering, or a related field.</li>
                  <li>Prior experience in an R&amp;D environment in relevant industries is an advantage.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="text-xl font-bold text-[#4DA8DA] border-b-2 border-[#4DA8DA]/20 pb-2 mb-4">3. Telecaller</h3>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 mb-4">
                <div><strong className="text-gray-900">Department:</strong> Sales &amp; Marketing</div>
                <div><strong className="text-gray-900">Reporting To:</strong> Sales Representative / Sales Manager</div>
                <div className="sm:col-span-2"><strong className="text-gray-900">Work Type:</strong> Remote / Full-Time / Part-Time</div>
              </div>
              
              <p><strong>Job Summary:</strong> Responsible for contacting Sabhasads (members), Pashu Palaks (livestock farmers) across assigned villages and talukas to promote the company’s animal feed supplement products. The role involves generating awareness, collecting detailed information, maintaining accurate records, and supporting the field sales team through lead generation and reporting.</p>
              
              <div>
                <h4 className="font-bold text-[#0F1C33] mb-2">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>System Operations:</strong> Operate and manage the company's software systems efficiently for daily business operations.</li>
                  <li><strong>Promotional Activities:</strong> Make outbound promotional calls to Sabhasads and livestock farmers. Explain benefits, ongoing schemes, and awareness campaigns. Generate interest and schedule follow-up calls for field officers.</li>
                  <li><strong>Data Collection &amp; Documentation:</strong> Collect and verify detailed information of Sabhasads, Mantrys, dairy societies, and farmers. Accurately complete prescribed data collection forms and update profiles in the database.</li>
                  <li><strong>Reporting &amp; Record Management:</strong> Prepare daily call reports and activity summaries. Maintain records of leads generated and follow-up actions. Coordinate with management for report analysis.</li>
                  <li><strong>Coordination &amp; Support:</strong> Work closely with Field Sales Officers and Marketing teams. Share qualified leads and assist in organizing farmer meetings and campaigns.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-bold text-[#0F1C33] mb-2">Skills &amp; Qualifications:</h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Must have an Android smartphone with wireless Bluetooth connectivity.</li>
                    <li>Must have Laptop/Computer and internet facilities.</li>
                    <li>Graduate / Undergraduate in any discipline.</li>
                    <li>Good communication and convincing skills. Ability to communicate in Gujarati and Hindi.</li>
                    <li>Basic computer knowledge, data entry skills, and professional telephone etiquette.</li>
                    <li>Experience in telecalling, customer service, sales, agriculture, or rural marketing preferred.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#0F1C33] mb-2">Key Performance Indicators (KPIs):</h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Number of calls made per day.</li>
                    <li>Number of Sabhasad and Pashu Palak records collected.</li>
                    <li>Data accuracy and completeness percentage.</li>
                    <li>Leads generated for the sales team.</li>
                    <li>Timely submission of reports and database updates.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
