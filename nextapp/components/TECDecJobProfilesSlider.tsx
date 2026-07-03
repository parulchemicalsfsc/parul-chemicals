'use client'

import React, { useState } from 'react'

export default function TECDecJobProfilesSlider() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: 0, title: 'Quality Control (QC) Chemist' }
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

      <div className="min-h-[300px]">
        {activeTab === 0 && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="text-xl font-bold text-[#4DA8DA] border-b-2 border-[#4DA8DA]/20 pb-2 mb-4">1. Quality Control (QC) Chemist</h3>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-4">
                <p>A Quality Control (QC) Chemist ensures that raw materials, in-process samples, and finished goods meet strict safety, quality, and regulatory standards. They perform routine laboratory tests, operate complex analytical instrumentation (e.g., HPLC, GC), calibrate equipment, and maintain accurate documentation in compliance with Good Laboratory Practices (GLP).</p>
              </div>
              
              <div>
                <h4 className="font-bold text-[#0F1C33] mb-2">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Sample Testing:</strong> Conduct chemical and physical analyses on raw materials, intermediates, and final products to ensure they meet established specifications.</li>
                  <li><strong>Instrumentation:</strong> Operate, troubleshoot, and calibrate laboratory equipment such as HPLC, GC, UV-Vis, and titrators.</li>
                  <li><strong>Documentation:</strong> Record test data, maintain lab notebooks, and prepare Certificates of Analysis (COA) while adhering strictly to company SOPs and regulatory guidelines.</li>
                  <li><strong>Quality Investigations:</strong> Identify and report test deviations, non-conformities, and out-of-specification (OOS) results to supervisors.</li>
                  <li><strong>Compliance:</strong> Ensure a clean, safe laboratory environment compliant with cGMP/GLP, FDA, or ISO standards.</li>
                  <li><strong>Validation:</strong> Assist in test method validation, process validation, and stability studies.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
