'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function AdminPage() {
  const [distributors, setDistributors] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [flash, setFlash] = useState('')
  const [genDist, setGenDist] = useState<any>(null)
  const [filter, setFilter] = useState('all')

  const fetchDistributors = async () => {
    setLoading(true)
    const res = await fetch('/api/admin/distributors')
    const data = await res.json()
    setDistributors(data.distributors || [])
    setLoading(false)
  }

  useEffect(() => { fetchDistributors() }, [])

  const handleAction = async (action: string, id: string) => {
    const res = await fetch('/api/admin/action', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, id })
    })
    const data = await res.json()
    if (data.success) {
      if (action === 'approve') { setGenDist(data.distributor); setFlash('approved') }
      else if (action === 'reject') { setFlash('rejected'); setGenDist(null) }
      else if (action === 'delete') { setFlash('deleted'); setGenDist(null) }
      fetchDistributors()
    }
  }

  const filtered = filter === 'all' ? distributors : distributors.filter(d => d.status === filter)

  return (
    <div className="min-h-screen bg-[#F4F6FA] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-[#0F1C33] mb-1">Admin Dashboard</h1>
            <p className="text-[#4A5568] text-sm">Manage distributor applications and access.</p>
          </div>
          <div className="flex gap-2">
            {['all', 'pending', 'approved', 'rejected'].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${filter === f
                  ? 'bg-[#1F4E79] text-white shadow-md'
                  : 'bg-white text-[#4A5568] border border-[#E2E8F0] hover:border-[#4DA8DA]/40 hover:text-[#1F4E79]'
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Flash: Approved */}
        {flash === 'approved' && genDist && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-white border border-[#0EA5A0]/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ boxShadow: '0 4px 20px rgba(14,165,160,0.12)' }}>
            <div>
              <div className="text-[#0EA5A0] font-bold text-lg mb-1 flex items-center gap-2">✅ Application Approved!</div>
              <p className="text-[#4A5568] text-sm">Credentials have been generated for <strong className="text-[#0F1C33]">{genDist.name}</strong> ({genDist.company}).</p>
            </div>
            <div className="bg-[#F4F6FA] border border-[#E2E8F0] rounded-xl p-4 flex gap-6 shrink-0">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#4DA8DA] mb-1 font-bold">Login ID (Phone)</p>
                <code className="text-[#0F1C33] bg-white px-2 py-1 rounded text-sm select-all border border-[#E2E8F0]">{genDist.phone}</code>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#4DA8DA] mb-1 font-bold">Generated Password</p>
                <code className="text-[#0F1C33] bg-white px-2 py-1 rounded text-sm select-all border border-[#E2E8F0]">{genDist.password}</code>
              </div>
            </div>
          </motion.div>
        )}
        {flash === 'rejected' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-semibold">
            Application rejected.
          </motion.div>
        )}
        {flash === 'deleted' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 p-4 bg-[#F4F6FA] border border-[#E2E8F0] rounded-xl text-[#4A5568] text-sm font-semibold">
            Record deleted successfully.
          </motion.div>
        )}

        {/* Table */}
        {loading ? (
          <div className="text-center py-20 text-[#94A3B8] animate-pulse">Loading data...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#E2E8F0] rounded-3xl" style={{ boxShadow: '0 4px 20px rgba(15,28,51,0.06)' }}>
            <div className="text-4xl mb-3">📭</div>
            <p className="text-[#4A5568] text-base">No {filter === 'all' ? '' : filter} distributor requests found.</p>
          </div>
        ) : (
          <div className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden" style={{ boxShadow: '0 4px 32px rgba(15,28,51,0.08)' }}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F4F6FA] border-b border-[#E2E8F0]">
                    {['Date', 'Applicant', 'Details', 'Product Int.', 'Status', 'Actions'].map(h => (
                      <th key={h} className={`px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] ${h === 'Actions' ? 'text-right' : ''}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F6FA]">
                  {filtered.map(d => (
                    <tr key={d.id} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-6 py-5 align-top">
                        <div className="text-xs text-[#4A5568]">{new Date(d.appliedAt).toLocaleDateString()}</div>
                        <div className="text-[10px] text-[#94A3B8] truncate">{d.id.substring(0, 8)}</div>
                      </td>
                      <td className="px-6 py-5 align-top">
                        <div className="font-bold text-[#0F1C33] text-sm mb-1">{d.name}</div>
                        <div className="text-xs text-[#4DA8DA] font-mono">{d.phone}</div>
                        <div className="text-xs text-[#94A3B8]">{d.email}</div>
                      </td>
                      <td className="px-6 py-5 align-top">
                        <div className="font-medium text-[#0F1C33] text-sm mb-1">{d.company}</div>
                        <div className="text-xs text-[#4A5568]">📍 {d.location}</div>
                      </td>
                      <td className="px-6 py-5 align-top">
                        <div className="text-sm text-[#0F1C33] mb-1">{d.product}</div>
                        <div className="text-xs font-semibold text-[#4A5568] bg-[#F4F6FA] inline-block px-2 py-0.5 rounded border border-[#E2E8F0]">{d.quantity}</div>
                      </td>
                      <td className="px-6 py-5 align-top">
                        {d.status === 'pending'  && <span className="inline-flex px-2 py-1 bg-amber-50 text-amber-600 border border-amber-200 text-[10px] font-bold uppercase tracking-wider rounded-lg">Pending</span>}
                        {d.status === 'approved' && <span className="inline-flex px-2 py-1 bg-teal-50 text-teal-700 border border-teal-200 text-[10px] font-bold uppercase tracking-wider rounded-lg">Approved</span>}
                        {d.status === 'rejected' && <span className="inline-flex px-2 py-1 bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold uppercase tracking-wider rounded-lg">Rejected</span>}
                      </td>
                      <td className="px-6 py-5 align-top text-right">
                        <div className="flex justify-end gap-2">
                          {d.status === 'pending' && (
                            <>
                              <button onClick={() => handleAction('approve', d.id)} className="px-3 py-1.5 bg-teal-50 text-teal-700 hover:bg-teal-600 hover:text-white border border-teal-200 rounded-lg text-xs font-bold transition-all">Approve</button>
                              <button onClick={() => handleAction('reject', d.id)} className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white border border-red-200 rounded-lg text-xs font-bold transition-all">Reject</button>
                            </>
                          )}
                          <button onClick={() => handleAction('delete', d.id)} className="px-3 py-1.5 text-[#94A3B8] hover:text-red-500 rounded-lg transition-all text-sm" title="Delete">🗑️</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
