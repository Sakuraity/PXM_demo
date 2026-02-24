import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Language, LocalizedString } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function t(str: LocalizedString, lang: Language): string {
  return str[lang] || str.en
}
