import React from 'react'
import CareerForm from '@/components/CareerForm'

export const metadata = {
  title: 'Careers - Parul Chemicals',
  description: 'Join the team at Parul Chemicals. We are looking for talented individuals to help us lead in precision chemistry.',
}

export default function Careers() {
  return (
    <div className="pt-32 pb-20 bg-[#F8F9FA] text-[#0D2137] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-[#4DA8DA]">Careers at Parul Chemicals</h1>
        
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p>
            At <strong>PARUL CHEMICALS</strong>, we believe that our people are our greatest asset. As a leading manufacturer of high-purity Diethyl Phthalate (DEP) and Triethyl Citrate (TEC), we are constantly looking for passionate, innovative, and driven individuals to join our growing team.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#0D2137]">Why Work With Us?</h2>
          <p>
            We offer a dynamic and collaborative work environment where innovation thrives. Here is why you should consider a career with Parul Chemicals:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Global Impact:</strong> Be part of a company that exports to over 8 countries and serves top-tier pharmaceutical, food, and cosmetic industries worldwide.</li>
            <li><strong>Commitment to Quality:</strong> Work in a facility with ISO 9001:2015, ISO 22000:2018, HACCP, and GMP certifications, where excellence is the standard.</li>
            <li><strong>Continuous Growth:</strong> We invest in our employees' professional development through regular training, skill-building, and career advancement opportunities.</li>
            <li><strong>Safe &amp; Inclusive Environment:</strong> We prioritize occupational health and safety (ISO 45001:2018) and foster an inclusive workplace that values diversity and mutual respect.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#0D2137]">Current Openings</h2>
          <p>
            While we are always on the lookout for exceptional talent, we frequently have openings in the following departments:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Research &amp; Development (R&amp;D):</strong> Chemists and formulation scientists focused on innovative chemical solutions and green chemistry.</li>
            <li><strong>Quality Control &amp; Assurance:</strong> QA/QC professionals to ensure our products meet stringent global standards.</li>
            <li><strong>Production &amp; Manufacturing:</strong> Plant operators, supervisors, and engineers to manage our state-of-the-art distillation units.</li>
            <li><strong>Sales &amp; Marketing:</strong> Dynamic individuals to drive our domestic and international business growth.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500 italic">
            * Note: Specific job vacancies are posted on our official LinkedIn page and updated regularly.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#0D2137]">Equal Opportunity Employer</h2>
          <p>
            PARUL CHEMICALS is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. All employment decisions are based on business needs, job requirements, and individual qualifications, without regard to race, color, religion, age, gender, national origin, or disability status.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#0D2137]">How to Apply</h2>
          <p>
            Ready to take the next step in your career with Parul Chemicals? We would love to hear from you. Please fill out the job application form below.
          </p>
          
          <CareerForm />
          
          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-[#0D2137]">HR Department</h3>
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@parulchemicals.in" className="text-[#4DA8DA] hover:underline">info@parulchemicals.in</a></p>
            <p className="mb-2"><strong>Phone:</strong> +91-94277 84082, +91-98256 37101</p>
            <p><strong>Address:</strong><br />
              Parul Chemicals<br />
              C1B-336/29, Press Stamping Industries, Makarpura,<br />
              Industrial Estate Makarpura, Vadodara, Gujarat, 390010
            </p>
          </div>
          
          <p className="mt-8 text-sm text-gray-500">
            Our team will review your application and get in touch if your qualifications match our current requirements. We keep all applications strictly confidential as per our <a href="/privacy-policy" className="text-[#4DA8DA] hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
