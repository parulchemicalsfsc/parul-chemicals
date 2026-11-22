import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import TECFAQAccordion from '@/components/tec-landing/TECFAQAccordion'
import TECSampleForm from '@/components/tec-landing/TECSampleForm'

export const metadata: Metadata = {
  title: 'Triethyl Citrate (TEC) for Fragrance & Flavour | CAS 77-93-0 | Parul Chemicals, India',
  description:
    'Odourless, phthalate-free Triethyl Citrate (TEC) for fine fragrance, personal-care fragrance and flavours. FCC/USP grade, Kosher, ISO 22000. Request a sample and full regulatory pack.',
  keywords:
    'Triethyl Citrate, TEC, fragrance solvent, flavour diluent, CAS 77-93-0, phthalate-free fixative, FEMA 3083, E1505, Parul Chemicals',
}

export default function TECFragranceFlavourPage() {
  return (
    <div className="bg-white text-[#0F1C33]">
      {/* ─────────────────────────────────────────────────────────
          1. HERO SECTION
      ───────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden text-white"
        style={{
          backgroundColor: '#0B1728',
          backgroundImage: 'linear-gradient(160deg, #07111E 0%, #0D2137 50%, #122B48 100%)',
        }}
      >
        {/* Subtle background ambient radial glows */}
        <div
          className="absolute top-1/4 -right-24 w-96 h-96 rounded-full opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00C9A7 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #4DA8DA 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Text & CTA */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C9A7]/15 border border-[#00C9A7]/40 text-[#00E5BE] text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#00E5BE] animate-pulse" />
                <span>For Perfumers, Flavourists &amp; Regulatory Teams</span>
              </div>

              {/* Headline (H1) */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold tracking-tight leading-[1.15] mb-6 text-white drop-shadow-sm">
                Odourless, phthalate-free <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5BE] via-[#4DA8DA] to-white">
                  Triethyl Citrate
                </span>{' '}
                for fragrance &amp; flavour
              </h1>

              {/* Subhead */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal drop-shadow-sm">
                Parul Chemicals manufactures high-purity TEC (CAS 77-93-0) in Gujarat, India, to FCC and USP standards.
                We supply the batch-to-batch consistency, documents, and dependable supply that global fragrance and
                flavour houses need to approve a supplier.
              </p>

              {/* Primary & Secondary Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8 sm:mb-10">
                <a
                  href="#sample-request"
                  className="btn-primary px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold shadow-lg shadow-amber-500/20 inline-flex items-center justify-center gap-2 text-white transition-transform hover:-translate-y-0.5"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                  <span>Request a Sample</span>
                </a>

                <a
                  href="#regulatory-pack"
                  className="px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm shadow-md"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <polyline points="9 15 12 12 15 15" />
                  </svg>
                  <span>Download Regulatory Pack</span>
                </a>
              </div>
            </div>

            {/* Right: Product Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-5 sm:p-6 bg-[#0F1C33]/80 backdrop-blur-md border border-white/15 shadow-2xl overflow-hidden">
                <div className="relative h-64 sm:h-72 lg:h-80 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
                  <Image
                    src="/products/triethylcitrate.webp"
                    alt="Triethyl Citrate TEC drum packaging, Parul Chemicals"
                    fill
                    className="object-contain p-4 transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#00C9A7]/30 border border-[#00C9A7] text-[#00E5BE] shadow-md backdrop-blur-sm">
                    FCC / USP Grade
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.07] border border-white/10">
                    <span className="text-slate-300 block font-medium mb-0.5">CAS Number</span>
                    <span className="font-mono font-bold text-white text-sm">77-93-0</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.07] border border-white/10">
                    <span className="text-slate-300 block font-medium mb-0.5">FEMA / E-Number</span>
                    <span className="font-mono font-bold text-white text-sm">FEMA 3083 · E1505</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.07] border border-white/10">
                    <span className="text-slate-300 block font-medium mb-0.5">EC / EINECS</span>
                    <span className="font-mono font-bold text-white text-sm">201-070-7</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.07] border border-white/10">
                    <span className="text-slate-300 block font-medium mb-0.5">Assay / Purity</span>
                    <span className="font-mono font-bold text-white text-sm">≥ 99.0% (GC)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            2. TRUST STRIP
        ───────────────────────────────────────────────────────── */}
        <div className="mt-12 lg:mt-16 pt-8 pb-5 border-t border-white/10 relative z-10 bg-white/[0.02] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
            <span className="text-[#00E5BE] tracking-widest uppercase text-[11px] font-bold mr-1 sm:mr-2 shrink-0">
              Verified Quality:
            </span>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-white font-medium shadow-sm hover:border-white/30 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#00E5BE] shadow-[0_0_8px_#00E5BE] shrink-0" />
              <span>ISO 9001:2015</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-white font-medium shadow-sm hover:border-white/30 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#00E5BE] shadow-[0_0_8px_#00E5BE] shrink-0" />
              <span>ISO 22000:2018</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-white font-medium shadow-sm hover:border-white/30 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#00E5BE] shadow-[0_0_8px_#00E5BE] shrink-0" />
              <span>GMP Compliant</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-white font-medium shadow-sm hover:border-white/30 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#00E5BE] shadow-[0_0_8px_#00E5BE] shrink-0" />
              <span>HACCP Certified</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-white font-medium shadow-sm hover:border-white/30 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#00E5BE] shadow-[0_0_8px_#00E5BE] shrink-0" />
              <span>Star-K Kosher</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-white font-medium shadow-sm hover:border-white/30 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#00E5BE] shadow-[0_0_8px_#00E5BE] shrink-0" />
              <span>US FDA Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. WHY TEC IN FRAGRANCE AND FLAVOUR
      ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0EA5A0] mb-2">Formulation Advantage</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1C33] mb-4">
              A clean base that lets your formula speak
            </h2>
            <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed">
              Triethyl Citrate is a citric acid ester that is practically odourless and colourless. In a fragrance or
              flavour it does its job quietly: it dissolves, carries and holds the aroma materials without adding a
              note of its own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#00C9A7]/40 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00C9A7]/10 flex items-center justify-center mb-6 text-[#00A88F] shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#0F1C33] mb-3 leading-snug">
                  Phthalate-free alternative to DEP
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  Brands and retailers are moving away from phthalates. TEC can replace Diethyl Phthalate as a solvent
                  and diluent in most fragrance concentrates. As makers of both DEP and TEC, we can help your team plan
                  the switch.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#4DA8DA]/40 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#4DA8DA]/10 flex items-center justify-center mb-6 text-[#4DA8DA] shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                    <path d="M12 6a6 6 0 0 0-6 6c0 2.21 1.79 4 4 4" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#0F1C33] mb-3 leading-snug">
                  Neutral odour, batch after batch
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  Every lot is checked for odour and colour before release, so your accord smells the same from the first
                  drum to the hundredth.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#F59E0B]/40 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center mb-6 text-[#F59E0B] shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#0F1C33] mb-3 leading-snug">
                  Helps fragrance last
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  TEC&apos;s low volatility slows the evaporation of top and middle notes, giving a more even scent over
                  time.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#10B981]/40 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6 text-[#10B981] shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#0F1C33] mb-3 leading-snug">
                  Approved for food use
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  TEC is a permitted food additive (E1505) and a FEMA GRAS flavour ingredient (FEMA 3083), so one
                  material can serve both your fragrance and flavour divisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. APPLICATIONS
      ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0EA5A0] mb-2">Target Sectors</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1C33] mb-4">
              Where our TEC goes to work
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed">
              Engineered specifically to solve solvency, evaporation profile, and regulatory hurdles across consumer
              formulations.
            </p>
          </div>

          <div className="border border-[#E2E8F0] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[540px]">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                    <th className="py-4 px-6 sm:px-8 text-xs font-bold uppercase tracking-wider text-[#0F1C33] w-2/5 sm:w-1/3">
                      Application
                    </th>
                    <th className="py-4 px-6 sm:px-8 text-xs font-bold uppercase tracking-wider text-[#0F1C33]">
                      What TEC does
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-sm sm:text-base">
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-5 px-6 sm:px-8 font-bold text-[#0F1C33] align-top">
                      Fine fragrance <br className="hidden sm:inline" />
                      <span className="text-xs font-normal text-[#64748B] block mt-0.5">(EDP, EDT, body mist)</span>
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-[#4A5568] leading-relaxed align-top">
                      Solvent and diluent for fragrance concentrates; fixative that evens out evaporation.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-5 px-6 sm:px-8 font-bold text-[#0F1C33] align-top">
                      Personal-care fragrance <br className="hidden sm:inline" />
                      <span className="text-xs font-normal text-[#64748B] block mt-0.5">(lotions, deodorants, hair care)</span>
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-[#4A5568] leading-relaxed align-top">
                      Phthalate-free carrier that blends well with cosmetic bases and personal care formulations.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-5 px-6 sm:px-8 font-bold text-[#0F1C33] align-top">
                      Home and air care <br className="hidden sm:inline" />
                      <span className="text-xs font-normal text-[#64748B] block mt-0.5">(reed diffusers, room sprays)</span>
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-[#4A5568] leading-relaxed align-top">
                      Low-volatility diluent that controls how fast the scent is released and stabilizes diffuser wicking.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-5 px-6 sm:px-8 font-bold text-[#0F1C33] align-top">
                      Flavours <br className="hidden sm:inline" />
                      <span className="text-xs font-normal text-[#64748B] block mt-0.5">(beverages, confectionery, bakery)</span>
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-[#4A5568] leading-relaxed align-top">
                      Carrier solvent for flavour concentrates and emulsions; whipping aid for egg-white products.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-5 px-6 sm:px-8 font-bold text-[#0F1C33] align-top">
                      Encapsulated fragrance &amp; flavour
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-[#4A5568] leading-relaxed align-top">
                      Plasticiser for film and coating systems, stabilizing delivery microcapsules.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#F0FDF9] border border-[#00C9A7]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm font-medium text-[#0F1C33]">
              Working on a different application or bespoke compound?
            </p>
            <Link
              href="/contact"
              className="text-xs font-bold uppercase tracking-wider text-[#00A88F] hover:text-[#008f7a] inline-flex items-center gap-1.5 shrink-0"
            >
              <span>Talk to our technical team</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. TYPICAL SPECIFICATION
      ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0EA5A0] mb-2">Quality &amp; Purity</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1C33] mb-4">
              Typical specification
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed">
              Standard release specifications adhering to Food Chemicals Codex (FCC) and United States Pharmacopeia
              (USP) requirements.
            </p>
          </div>

          {/* Chemical Identifiers Bar */}
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono text-[#0F1C33]">
            <span className="font-bold text-[#0EA5A0] uppercase tracking-wider font-sans text-xs">Identifiers:</span>
            <span>CAS 77-93-0</span>
            <span className="text-slate-300">·</span>
            <span>EC 201-070-7</span>
            <span className="text-slate-300">·</span>
            <span>FEMA 3083</span>
            <span className="text-slate-300">·</span>
            <span>E1505</span>
            <span className="text-slate-300">·</span>
            <span>Formula C₁₂H₂₀O₇</span>
            <span className="text-slate-300">·</span>
            <span>Molecular Weight 276.28 g/mol</span>
          </div>

          {/* Specification Table */}
          <div className="border border-[#E2E8F0] rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-sm mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                    <th className="py-3.5 px-6 font-bold uppercase tracking-wider text-xs text-[#0F1C33] w-1/3">Parameter</th>
                    <th className="py-3.5 px-6 font-bold uppercase tracking-wider text-xs text-[#0F1C33] w-5/12">Specification</th>
                    <th className="py-3.5 px-6 font-bold uppercase tracking-wider text-xs text-[#0F1C33]">Test Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[#0F1C33]">Appearance</td>
                    <td className="py-3.5 px-6 text-[#4A5568]">Clear, colourless, oily liquid</td>
                    <td className="py-3.5 px-6 font-mono text-xs text-[#64748B]">Visual</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3.5 px-6 font-medium text-[#0F1C33]">Odour</td>
                    <td className="py-3.5 px-6 text-[#4A5568]">Practically odourless</td>
                    <td className="py-3.5 px-6 font-mono text-xs text-[#64748B]">Sensory panel</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[#0F1C33]">Assay / Ester Content</td>
                    <td className="py-3.5 px-6 text-[#4A5568] font-bold">≥ 99.0%</td>
                    <td className="py-3.5 px-6 font-mono text-xs text-[#64748B]">Gas Chromatography (GC)</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3.5 px-6 font-medium text-[#0F1C33]">Colour (APHA/Hazen)</td>
                    <td className="py-3.5 px-6 text-[#4A5568]">≤ 50 APHA (Typical ≤ 15)</td>
                    <td className="py-3.5 px-6 font-mono text-xs text-[#64748B]">ASTM D1209</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[#0F1C33]">Acidity / Neutralization Value</td>
                    <td className="py-3.5 px-6 text-[#4A5568]">≤ 0.2 mg KOH/g (≤ 0.02% as citric acid)</td>
                    <td className="py-3.5 px-6 font-mono text-xs text-[#64748B]">USP / FCC</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3.5 px-6 font-medium text-[#0F1C33]">Water Content</td>
                    <td className="py-3.5 px-6 text-[#4A5568]">≤ 0.2% by weight</td>
                    <td className="py-3.5 px-6 font-mono text-xs text-[#64748B]">Karl Fischer</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[#0F1C33]">Specific Gravity @ 25 °C</td>
                    <td className="py-3.5 px-6 text-[#4A5568]">1.1350 – 1.1390</td>
                    <td className="py-3.5 px-6 font-mono text-xs text-[#64748B]">USP / FCC</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3.5 px-6 font-medium text-[#0F1C33]">Refractive Index @ 25 °C</td>
                    <td className="py-3.5 px-6 text-[#4A5568]">1.4390 – 1.4410</td>
                    <td className="py-3.5 px-6 font-mono text-xs text-[#64748B]">USP / FCC</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-[#0F1C33]">Shelf Life</td>
                    <td className="py-3.5 px-6 text-[#4A5568]">24 months in sealed original packaging</td>
                    <td className="py-3.5 px-6 font-mono text-xs text-[#64748B]">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick PDF Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/tds,coa,msds/TDS - Technical Data Sheet (1) (2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white border border-[#E2E8F0] shadow-sm text-xs sm:text-sm font-bold text-[#0F1C33] hover:border-[#00C9A7] hover:text-[#00A88F] transition-all flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span>Download TDS (PDF)</span>
            </a>

            <a
              href="/tds,coa,msds/MSDS - TEC 31.01.25 Revised (2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white border border-[#E2E8F0] shadow-sm text-xs sm:text-sm font-bold text-[#0F1C33] hover:border-[#00C9A7] hover:text-[#00A88F] transition-all flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span>Download SDS (PDF)</span>
            </a>

            <a
              href="/tds,coa,msds/COA for approval (1) (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white border border-[#E2E8F0] shadow-sm text-xs sm:text-sm font-bold text-[#0F1C33] hover:border-[#00C9A7] hover:text-[#00A88F] transition-all flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span>View Sample COA (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. REGULATORY AND COMPLIANCE DOCUMENTS
      ───────────────────────────────────────────────────────── */}
      <section id="regulatory-pack" className="py-20 lg:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0EA5A0] mb-2">Compliance Dossier</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1C33] mb-4">
              Everything your regulatory team will ask for, in one pack
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed">
              We know supplier approval runs on paperwork. Access verified documentation below or contact us for
              custom filings.
            </p>
          </div>

          <div className="border border-[#E2E8F0] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#0F1C33] w-5/12">Document</th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#0F1C33] w-4/12">Classification</th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#0F1C33] text-right">Action / Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0F1C33]">Technical Data Sheet (TDS)</td>
                    <td className="py-4 px-6 text-[#64748B]">Product specification &amp; handling</td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="/tds,coa,msds/TDS - Technical Data Sheet (1) (2).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F9F5] text-[#00A88F] border border-[#00C9A7]/30 hover:bg-[#00C9A7]/20 transition-colors"
                      >
                        <span>Download PDF</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-slate-50/50 hover:bg-slate-50/90 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0F1C33]">Safety Data Sheet (SDS)</td>
                    <td className="py-4 px-6 text-[#64748B]">GHS format safety data</td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="/tds,coa,msds/MSDS - TEC 31.01.25 Revised (2).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F9F5] text-[#00A88F] border border-[#00C9A7]/30 hover:bg-[#00C9A7]/20 transition-colors"
                      >
                        <span>Download PDF</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0F1C33]">Certificate of Analysis (COA)</td>
                    <td className="py-4 px-6 text-[#64748B]">Batch-specific analytical release</td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href="/tds,coa,msds/COA for approval (1) (1).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F9F5] text-[#00A88F] border border-[#00C9A7]/30 hover:bg-[#00C9A7]/20 transition-colors"
                      >
                        <span>View Sample COA</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-slate-50/50 hover:bg-slate-50/90 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0F1C33]">ISO 9001:2015, ISO 22000:2018, ISO 45001:2018</td>
                    <td className="py-4 px-6 text-[#64748B]">Management &amp; Food Safety Standards</td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href="/certifications"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF4FB] text-[#1F4E79] border border-[#4DA8DA]/30 hover:bg-[#4DA8DA]/20 transition-colors"
                      >
                        <span>View Certificates</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0F1C33]">GMP &amp; HACCP Certificates</td>
                    <td className="py-4 px-6 text-[#64748B]">Manufacturing hygiene &amp; hazard controls</td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href="/certifications"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF4FB] text-[#1F4E79] border border-[#4DA8DA]/30 hover:bg-[#4DA8DA]/20 transition-colors"
                      >
                        <span>View Certificates</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-slate-50/50 hover:bg-slate-50/90 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0F1C33]">Star-K Kosher Certificate</td>
                    <td className="py-4 px-6 text-[#64748B]">Kosher dietary compliance (TEC)</td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href="/certifications"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF4FB] text-[#1F4E79] border border-[#4DA8DA]/30 hover:bg-[#4DA8DA]/20 transition-colors"
                      >
                        <span>View Certificate</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0F1C33]">IFRA Conformity Statement</td>
                    <td className="py-4 px-6 text-[#64748B]">Fragrance standards dossier</td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                        Available on Request
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-slate-50/50 hover:bg-slate-50/90 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0F1C33]">EU Allergen Statement</td>
                    <td className="py-4 px-6 text-[#64748B]">Cosmetic allergen assessment</td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                        Available on Request
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0F1C33]">REACH Registration / OR Letter</td>
                    <td className="py-4 px-6 text-[#64748B]">European chemical compliance</td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                        Available on Request
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. SUPPLY RELIABILITY
      ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0EA5A0] mb-2">Dependable Partner</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1C33] mb-4">
              A supplier you can build a formula around
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed">
              Changing the solvent in an approved fragrance costs time and money, so you need a TEC source that won&apos;t
              let you down. Here is what you can count on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* 1. Traceability */}
            <div className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#00C9A7]/30 transition-all flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#00C9A7]/10 flex items-center justify-center mb-4 text-[#00A88F] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5v14M7 5v14M11 5v14M15 5v14M19 5v14M21 5v14" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#0F1C33] mb-2">
                End-to-End Traceability
              </h4>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Every drum carries a batch number linked to raw-material lots and in-process records for end-to-end
                traceability.
              </p>
            </div>

            {/* 2. Change Control */}
            <div className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#00C9A7]/30 transition-all flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#00C9A7]/10 flex items-center justify-center mb-4 text-[#00A88F] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#0F1C33] mb-2">
                Formal Change Control
              </h4>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Formal change control protocol: advance written notice before any modification to raw materials,
                process, or manufacturing site.
              </p>
            </div>

            {/* 3. Audits & Questionnaires */}
            <div className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#00C9A7]/30 transition-all flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#00C9A7]/10 flex items-center justify-center mb-4 text-[#00A88F] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#0F1C33] mb-2">
                Audits &amp; Questionnaires
              </h4>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                We welcome both on-site and remote audits and promptly complete your quality assurance questionnaires.
              </p>
            </div>

            {/* 4. Retained Samples */}
            <div className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#00C9A7]/30 transition-all flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#00C9A7]/10 flex items-center justify-center mb-4 text-[#00A88F] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 2v7.31L4.69 18.66A2 2 0 0 0 6.4 22h11.2a2 2 0 0 0 1.71-3.34L14 9.31V2" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#0F1C33] mb-2">
                Retained Control Samples
              </h4>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Retained control samples are securely stored for every manufactured lot across its entire shelf life.
              </p>
            </div>

            {/* 5. Packaging Flexibility */}
            <div className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#00C9A7]/30 transition-all flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#00C9A7]/10 flex items-center justify-center mb-4 text-[#00A88F] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#0F1C33] mb-2">
                Packaging Flexibility
              </h4>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Standard supply in 225 kg steel/HDPE drums and 1,125 kg IBCs. Custom packaging options available on
                request.
              </p>
            </div>

            {/* 6. Export Infrastructure */}
            <div className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#00C9A7]/30 transition-all flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#00C9A7]/10 flex items-center justify-center mb-4 text-[#00A88F] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-[#0F1C33] mb-2">
                Direct Global Export
              </h4>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Direct export handling from western Indian ports under FOB, CIF, or DAP terms, serving manufacturers in
                over 8 countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          8. SAMPLE REQUEST FORM
      ───────────────────────────────────────────────────────── */}
      <section id="sample-request" className="py-20 lg:py-24 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0EA5A0] mb-2">Evaluation Samples</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1C33] mb-4">
              Try our TEC in your own formula
            </h2>
            <p className="text-[#4A5568] text-base max-w-xl mx-auto leading-relaxed">
              Send us a few details and we&apos;ll ship a free sample with its COA, TDS and SDS directly to your lab.
            </p>
          </div>

          <TECSampleForm />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          9. FAQ (INTERACTIVE ACCORDION)
      ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0EA5A0] mb-2">Technical Guidance</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1C33] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#4A5568] text-base max-w-xl mx-auto leading-relaxed">
              Common questions answered by our application chemists regarding solubility, sensory profile, and compliance.
            </p>
          </div>

          <TECFAQAccordion />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          10. CLOSING CALL TO ACTION
      ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#07111E] via-[#0D2137] to-[#122B48] text-white relative overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00C9A7 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #4DA8DA 0%, transparent 70%)' }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Ready to qualify a new TEC source?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Talk directly to our technical and export team. We&apos;ll help with samples, documents and trial support,
            from first lab test to commercial supply.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#sample-request"
              className="btn-primary px-8 py-3.5 rounded-full text-sm sm:text-base font-bold shadow-lg shadow-amber-500/20 inline-flex items-center gap-2 text-white transition-transform hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              <span>Request a Sample</span>
            </a>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white border border-white/20 bg-white/10 hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Schedule a Technical Call</span>
            </Link>
            <a
              href="https://wa.me/919427784082"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#00E5BE] border border-[#00C9A7]/40 bg-[#00C9A7]/10 hover:bg-[#00C9A7]/20 transition-all inline-flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.761.897 2.796.897 3.182 0 5.768-2.587 5.769-5.766.001-3.187-2.578-5.884-5.769-5.884zm3.377 8.272c-.145.407-.747.748-1.028.793-.274.043-.625.061-1.019-.065-.242-.078-.553-.198-.958-.375-1.723-.75-2.846-2.502-2.932-2.617-.087-.116-.704-.937-.704-1.789 0-.852.448-1.271.607-1.445.16-.175.348-.219.465-.219.116 0 .232.001.334.006.107.005.25.04.385.367.145.349.494 1.207.537 1.294.044.088.073.19.015.306-.058.116-.087.189-.174.291-.088.102-.185.228-.263.306-.09.088-.184.184-.079.364.105.18.468.772 1.004 1.249.691.614 1.273.805 1.453.893.18.088.286.074.393-.05.107-.124.457-.531.579-.713.122-.182.244-.153.413-.09.17.063 1.077.508 1.262.6.185.093.308.138.353.216.044.078.044.45-.101.857z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 text-xs sm:text-sm text-white/60">
            Export Sales: <span className="text-white font-medium">+91 94277 84082</span> ·{' '}
            <span className="text-white font-medium">info@parulchemicals.in</span> · Monday to Saturday, 9:30–18:30 IST
          </div>
        </div>
      </section>
    </div>
  )
}
