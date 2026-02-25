'use client'

import { cn } from '@/lib/utils'

interface Props {
  label: string
  items: { id: string; label: string }[]
  value: string
  onChange: (v: string) => void
}

export default function FilterGroup({ label, items, value, onChange }: Props) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">{label}</p>
      <div className="space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(value === item.id ? '' : item.id)}
            className={cn(
              'w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors',
              value === item.id
                ? 'bg-stone-900 text-white'
                : 'text-stone-600 hover:bg-stone-100'
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
