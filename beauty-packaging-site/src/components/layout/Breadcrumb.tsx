'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="py-4" aria-label="Breadcrumb">
      <div className="container-custom">
        <ol className="flex items-center space-x-2 text-sm text-text">
          <li>
            <Link href="/" className="flex items-center text-secondary hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-neutral-light" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
