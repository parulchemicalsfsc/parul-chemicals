'use client'
import { useEffect, useState, useRef } from 'react'

const LANGUAGES = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'hi', short: 'HI', label: 'Hindi' },
  { code: 'gu', short: 'GU', label: 'Gujarati' },
  { code: 'mr', short: 'MR', label: 'Marathi' },
]

export default function GoogleTranslate() {
  const [isClient, setIsClient] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    setIsClient(true)

    const initTranslate = async () => {
      // 1. Auto-detect region and set language if no preference exists
      let targetLang = 'en'
      const cookieMatch = document.cookie.match(/googtrans=\/en\/([a-z]{2})/)
      
      if (!document.cookie.includes('googtrans=')) {
        try {
          const browserLang = navigator.language.split('-')[0].toLowerCase()
          const supportedLangs = ['en', 'hi', 'gu', 'mr']
          
          if (supportedLangs.includes(browserLang)) {
            targetLang = browserLang
          } else {
            targetLang = 'en'
          }
          
          // Set cookie so Google Translate auto-translates on load
          document.cookie = `googtrans=/en/${targetLang}; path=/;`
          document.cookie = `googtrans=/en/${targetLang}; path=/; domain=${window.location.hostname};`
        } catch (error) {
          console.error("Could not detect browser language for auto-translation", error)
        }
      } else if (cookieMatch) {
        targetLang = cookieMatch[1]
      }

      setCurrentLang(targetLang)

      // 2. Load Google Translate Script
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script')
        script.id = 'google-translate-script'
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        script.async = true
        document.body.appendChild(script)
      }

      // 3. Initialize function
      ;(window as any).googleTranslateElementInit = () => {
        const element = document.getElementById('google_translate_element')
        if (element) {
          element.innerHTML = ''
        }
        
        if ((window as any).google && (window as any).google.translate) {
          new (window as any).google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,hi,gu,mr',
              layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
          )
        }
      }
    }

    initTranslate()
  }, [])

  const handleLanguageChange = (code: string) => {
    setCurrentLang(code)
    setIsOpen(false)
    
    // Set the cookie to the selected language
    document.cookie = `googtrans=/en/${code}; path=/;`
    document.cookie = `googtrans=/en/${code}; path=/; domain=${window.location.hostname};`
    
    // Force a reload to guarantee Google Translate applies the new language
    window.location.reload()
  }

  if (!isClient) return null

  return (
    <div className="inline-block">
      <style>{`
        /* Hide everything from Google Translate widget */
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        body { top: 0px !important; }
        .goog-logo-link { display: none !important; }
        .goog-te-gadget { display: none !important; }
        .goog-tooltip { display: none !important; }
        .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
        #google_translate_element { display: none !important; }
      `}</style>
      
      <div id="google_translate_element"></div>

      <div className="relative mb-6 notranslate inline-flex items-center bg-white rounded-full border border-gray-100 shadow-[0_2px_8px_rgb(0,0,0,0.04)] p-1">
        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 text-gray-400 mr-1 bg-gray-50 rounded-full border border-gray-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>
        <div className="flex items-center gap-1">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              title={lang.label}
              className={`flex-shrink-0 px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300
                ${currentLang === lang.code 
                  ? 'bg-[#4DA8DA] text-white shadow-sm' 
                  : 'text-gray-400 hover:bg-gray-100 hover:text-gray-700'}`}
            >
              {lang.short}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
