'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="page-loader"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg,#4DA8DA,#0EA5A0)' }}>
              <span className="text-white font-black text-lg">PC</span>
            </div>
            <p className="font-display text-3xl font-bold text-white mb-1">Parul Chemicals</p>
            <p className="text-sm text-[#4DA8DA] tracking-widest uppercase font-medium">Precision Chemistry</p>
          </motion.div>
          <div className="loader-bar">
            <div className="loader-fill" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
