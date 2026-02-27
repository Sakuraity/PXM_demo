'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { motion } from 'framer-motion'

type InquiryType = 'general' | 'wholesale' | 'support' | 'compliance'

export default function ContactClient() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '', type: 'wholesale' as InquiryType })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  const contactInfo = [
    { icon: Mail, label: t('contact.emailLabel'), value: t('contact.emailValue') },
    { icon: Phone, label: t('contact.phoneLabel'), value: t('contact.phoneValue') },
    { icon: MapPin, label: t('contact.office'), value: t('contact.address') },
    { icon: Clock, label: t('contact.hoursLabel'), value: t('contact.hoursValue') },
  ]

  const inquiryTypes: { value: InquiryType; label: string }[] = [
    { value: 'wholesale', label: t('contact.typeWholesale') },
    { value: 'general', label: t('contact.typeGeneral') },
    { value: 'support', label: t('contact.typeSupport') },
    { value: 'compliance', label: t('contact.typeCompliance') },
  ]

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <section className="relative pt-32 pb-20 border-b border-[#1a1a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">{t('contact.title')}</h1>
            <p className="text-[#888] font-medium tracking-wider uppercase text-sm">{t('contact.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          
          {/* Left — Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
            className="space-y-12"
          >
            <div className="space-y-10">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-5 group">
                  <div className="w-10 h-10 border border-[#222] bg-[#050505] flex items-center justify-center flex-shrink-0 group-hover:border-white transition-colors duration-300">
                    <Icon className="w-4 h-4 text-[#666] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-[#666] uppercase tracking-[0.2em] mb-1">{label}</div>
                    <div className="text-sm font-bold text-white tracking-wide">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Wholesale highlight */}
            <div className="p-8 bg-[#050505] border-l-2 border-[#d4af37]">
              <div className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-3">{t('contact.b2bTitle')}</div>
              <p className="text-xs text-[#888] font-medium leading-relaxed uppercase tracking-wider">
                {t('contact.b2bDesc')}
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="h-full min-h-[400px] flex items-center justify-center p-12 bg-[#050505] border border-[#1a1a1a]">
                <div className="text-center">
                  <div className="w-20 h-20 bg-black border border-[#222] flex items-center justify-center mx-auto mb-8">
                    <Send className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">{t('contact.success')}</h3>
                  <p className="text-[#888] font-medium uppercase tracking-widest text-xs">{t('contact.replyTime')}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#050505] border border-[#1a1a1a] p-10 space-y-10">
                {/* Inquiry type */}
                <div>
                  <label className="block text-[10px] font-black text-[#666] uppercase tracking-[0.2em] mb-6">
                    {t('contact.type')}
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {inquiryTypes.map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, type: value }))}
                        className={`py-4 px-6 text-xs font-bold tracking-widest uppercase border transition-all text-left ${
                          form.type === value
                            ? 'bg-white border-white text-black'
                            : 'bg-black border-[#1a1a1a] text-[#888] hover:text-white hover:border-[#333]'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-[#1a1a1a] w-full" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {/* Name */}
                  <div className="relative group">
                    <input
                      required
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="peer w-full py-2 bg-transparent border-b border-[#333] text-white focus:outline-none focus:border-white transition-colors"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute left-0 top-2 text-xs font-bold uppercase tracking-widest text-[#666] transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      {t('contact.name')} *
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <input
                      required
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="peer w-full py-2 bg-transparent border-b border-[#333] text-white focus:outline-none focus:border-white transition-colors"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-0 top-2 text-xs font-bold uppercase tracking-widest text-[#666] transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      {t('contact.email')} *
                    </label>
                  </div>

                  {/* Company */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="company"
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      className="peer w-full py-2 bg-transparent border-b border-[#333] text-white focus:outline-none focus:border-white transition-colors"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="company" 
                      className="absolute left-0 top-2 text-xs font-bold uppercase tracking-widest text-[#666] transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      {t('contact.company')}
                    </label>
                  </div>

                  {/* Subject */}
                  <div className="relative group">
                    <input
                      required
                      type="text"
                      id="subject"
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="peer w-full py-2 bg-transparent border-b border-[#333] text-white focus:outline-none focus:border-white transition-colors"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="subject" 
                      className="absolute left-0 top-2 text-xs font-bold uppercase tracking-widest text-[#666] transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      {t('contact.subject')} *
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="relative group mt-10">
                  <textarea
                    required
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="peer w-full py-2 bg-transparent border-b border-[#333] text-white focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 top-2 text-xs font-bold uppercase tracking-widest text-[#666] transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    {t('contact.message')} *
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-5 bg-white disabled:bg-[#333] disabled:text-[#666] text-black font-black tracking-widest uppercase hover:bg-[#e5e5e5] transition-colors flex items-center justify-center gap-3"
                  >
                    {submitting ? t('contact.sending') : t('contact.send')}
                    {!submitting && <Send className="w-5 h-5" />}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
