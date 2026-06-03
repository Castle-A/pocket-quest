'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { translations, langFlags, langNames, type Lang } from './translations'

type I18nContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
  flag: string
  name: string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('qp-lang', l) } catch { /* noop */ }
    document.documentElement.lang = l
  }, [])

  const t = useCallback((key: string): string => {
    return translations[lang]?.[key] || translations.en[key] || key
  }, [lang])

  const flag = langFlags[lang]
  const name = langNames[lang]

  return (
    <I18nContext.Provider value={{ lang, setLang, t, flag, name }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
