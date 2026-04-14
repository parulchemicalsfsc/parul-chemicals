'use client'
import { motion } from 'framer-motion'

interface PageHeroProps {
  tag: string
  title: string | JSX.Element
  subtitle: string
}

export default function PageHero({ tag, title, subtitle }: PageHeroProps) {
  return (
    <div className="relative min-h-[75vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* 3D Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/Chemical_Product_Video_Generation.mp4"
      />
      
      {/* Dark Blue Transparent Overlay */}
      <div className="absolute inset-0 bg-[#060F1E]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137]/60 via-transparent to-[#0D2137]/30" />
      <div className="absolute inset-0 hex-bg opacity-10 blur-[1px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            className="bg-[#0F1C33]/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#4DA8DA] mb-4">{tag}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              {title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">{subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Premium Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[1px]">
        <svg className="relative block w-full h-[60px] md:h-[100px] lg:h-[140px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" className="fill-white" opacity=".1"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-51.05V120H0Z" className="fill-white" opacity=".25"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V120H0Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  )
}
