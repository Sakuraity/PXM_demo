'use client'

import { useState } from 'react'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface ProductTabsProps {
  description: string
  specsContent: React.ReactNode
}

export default function ProductTabs({ description, specsContent }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description')

  const tabs: Tab[] = [
    {
      id: 'description',
      label: 'Description',
      content: (
        <div className="prose max-w-none">
          <p className="text-secondary leading-relaxed">{description}</p>
        </div>
      ),
    },
    {
      id: 'specifications',
      label: 'Specifications',
      content: specsContent,
    },
    {
      id: 'reviews',
      label: 'Reviews',
      content: (
        <div className="text-center py-8 text-secondary">
          <p>Customer reviews will be displayed here.</p>
        </div>
      ),
    },
  ]

  return (
    <div className="mt-12">
      {/* Tab 导航 */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-secondary hover:text-primary hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab 内容 */}
      <div className="py-6">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}
