'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ShieldAlert, Zap } from 'lucide-react'

const STORAGE_KEY = 'vape-age-verified'

export default function AgeVerifyModal() {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const [denied, setDenied] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true)
      const verified = sessionStorage.getItem(STORAGE_KEY)
      if (!verified) {
        setShow(true)
      }
    }, 0)
    
    return () => clearTimeout(timer)
  }, [])

  const handleConfirm = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setShow(false)
  }

  const handleDeny = () => {
    setDenied(true)
  }

  if (!isMounted || !show) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300">
      <div className="relative w-full max-w-md mx-4 bg-[#050505] border border-[#333] p-10 shadow-2xl">
        {/* Logo Placeholder */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-white flex items-center justify-center border border-[#333]">
            <Zap className="w-8 h-8 text-black" />
          </div>
        </div>

        {!denied ? (
          <>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter">
                {t('ageVerify.title')}
              </h2>
              <p className="text-[#888] text-sm mb-6 font-medium">
                {t('ageVerify.subtitle')}
              </p>
              <div className="py-4 border-y border-[#1a1a1a]">
                <p className="text-white font-bold text-lg uppercase tracking-wide">
                  {t('ageVerify.question')}
                </p>
              </div>
              <p className="text-[10px] text-[#444] mt-4 font-bold tracking-widest uppercase">
                {t('ageVerify.legal')}
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleConfirm}
                className="w-full py-4 bg-white hover:bg-[#e5e5e5] text-black font-black uppercase tracking-widest transition-colors"
              >
                {t('ageVerify.confirm')}
              </button>
              <button
                onClick={handleDeny}
                className="w-full py-4 bg-transparent border border-[#333] hover:border-white text-white font-bold uppercase tracking-widest transition-colors"
              >
                {t('ageVerify.deny')}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <ShieldAlert className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
              {t('ageVerify.warning')}
            </h2>
            <p className="text-[#888] text-sm font-medium">
              {t('ageVerify.nicotineNotice')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
