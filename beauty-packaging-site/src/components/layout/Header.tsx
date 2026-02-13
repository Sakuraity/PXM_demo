'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, Search, ChevronDown, ChevronRight, Mail, Globe } from 'lucide-react'
import { NavigationItem } from '@/types'

interface HeaderProps {
  navigation?: NavigationItem[]
}

export default function Header({ navigation }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeMegaCategory, setActiveMegaCategory] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleSubMenu = (title: string) => {
    setOpenSubMenu(openSubMenu === title ? null : title)
  }

  const handleMouseEnter = (title: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(title)
    // Set default mega category when opening Products
    const item = navigation?.find(n => n.title === title)
    if (item?.megaMenu && item.categories) {
      const defaultCat = item.categories.find(c => c.default) || item.categories[0]
      setActiveMegaCategory(defaultCat?.title || null)
    }
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      setActiveMegaCategory(null)
    }, 200)
  }

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  // Find the active dropdown item
  const activeItem = navigation?.find(item => item.title === activeDropdown)
  const isMegaMenuOpen = activeItem?.megaMenu && activeDropdown
  const isSimpleDropdownOpen = activeItem?.children && activeItem.children.length > 0 && !activeItem.megaMenu && activeDropdown

  // Get active mega category data
  const activeCategoryData = activeItem?.categories?.find(c => c.title === activeMegaCategory)

  // Calculate top offset based on whether top bar exists
  const navTopOffset = 'top-[110px]'

  return (
    <header className="sticky top-0 z-50">
      {/* Top Info Bar - dark navy */}
      <div className="bg-[#15294C] hidden lg:block border-b border-[#1e3561]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-center justify-between h-[40px]">
            {/* Left - Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/images/icons/logo.png.webp"
                alt="Jarsking Packaging"
                width={160}
                height={40}
                className="h-[28px] w-auto"
                priority
              />
            </Link>

            {/* Right - Info items */}
            <div className="flex items-center gap-6">
              {/* Email */}
              <a
                href="mailto:info@jarsking.com"
                className="flex items-center gap-2 text-[13px] text-[#ccc] hover:text-white transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <Mail className="w-3.5 h-3.5" />
                info@jarsking.com
              </a>

              {/* Language */}
              <div className="flex items-center gap-1 text-[13px] text-[#ccc] cursor-pointer hover:text-white transition-colors">
                <Globe className="w-3.5 h-3.5" />
                <span style={{ fontFamily: "'Poppins', sans-serif" }}>English</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - dark navy */}
      <div className="bg-[#15294C]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[50px]">
            {/* Mobile Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 lg:hidden">
              <Image
                src="/images/icons/logo-300x165.png.webp"
                alt="Jarsking"
                width={40}
                height={22}
                className="h-[22px] w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation?.map(item => {
                const hasDropdown = item.megaMenu || (item.children && item.children.length > 0)
                const isOpen = activeDropdown === item.title

                return (
                  <div
                    key={item.title}
                    onMouseEnter={() => hasDropdown ? handleMouseEnter(item.title) : undefined}
                    onMouseLeave={hasDropdown ? handleMouseLeave : undefined}
                  >
                    <Link
                      href={item.url}
                      className={`flex items-center gap-1 px-4 py-2 text-[14px] font-normal transition-colors duration-200 whitespace-nowrap ${
                        isOpen ? 'text-white' : 'text-[#ccc] hover:text-white'
                      }`}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <span>{item.title}</span>
                      {hasDropdown && (
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      )}
                    </Link>
                  </div>
                )
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Search */}
              <div className="hidden lg:flex items-center border border-[#3a5280] rounded-sm h-[32px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-[12px] text-white placeholder-[#6b82a6] outline-none w-[100px] h-full px-2.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                />
                <button className="h-full px-2 bg-[#2a6cb8] hover:bg-[#3578c4] transition-colors rounded-r-sm">
                  <Search className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

              {/* Contact & Quote Button */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center h-[32px] px-4 bg-[#E3664B] text-white text-[12px] font-medium rounded-sm hover:bg-[#d15a42] transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Contact & Quote
              </Link>

              {/* Mobile Search */}
              <button className="lg:hidden p-2 text-[#ccc] hover:text-white">
                <Search className="w-5 h-5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-[#ccc] hover:text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Desktop Mega Menu (Products) ===== */}
      {isMegaMenuOpen && activeItem?.categories && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-[90px] z-50"
          onMouseEnter={() => handleMouseEnter(activeDropdown!)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-[#15294C] shadow-2xl">
            <div className="max-w-[1440px] mx-auto flex">
              {/* Left sidebar - category tabs */}
              <div className="w-[260px] flex-shrink-0 bg-[#122240] py-8 px-6">
                <div className="space-y-1">
                  {activeItem.categories.map(cat => (
                    <button
                      key={cat.title}
                      onMouseEnter={() => setActiveMegaCategory(cat.title)}
                      className={`w-full text-left px-4 py-2.5 rounded text-[14px] transition-colors duration-150 ${
                        activeMegaCategory === cat.title
                          ? 'text-[#E3664B] bg-[#1a2d52]'
                          : 'text-[#E9E9E9] hover:text-[#E3664B] hover:bg-[#1a2d52]'
                      }`}
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right content - subcategories for active tab */}
              <div className="flex-1 py-8 px-10">
                {activeCategoryData && activeCategoryData.subcategories.length > 0 ? (
                  <div className="grid grid-cols-4 gap-8">
                    {activeCategoryData.subcategories.map(sub => (
                      <div key={sub.title}>
                        <Link
                          href={sub.url}
                          className="block text-[14px] font-semibold text-white mb-3 hover:text-[#E3664B] transition-colors"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {sub.title}
                        </Link>
                        {sub.items.length > 0 && (
                          <div className="space-y-2">
                            {sub.items.map(item => (
                              <Link
                                key={item.title}
                                href={item.url}
                                className="block text-[13px] text-[#B0B8C8] hover:text-[#E3664B] transition-colors"
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-[200px]">
                    <Link
                      href={activeCategoryData?.url || '#'}
                      className="text-[15px] text-[#B0B8C8] hover:text-[#E3664B] transition-colors flex items-center gap-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      View all {activeCategoryData?.title}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== Desktop Simple Dropdown (Categories, etc.) ===== */}
      {isSimpleDropdownOpen && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-[90px] z-50"
          onMouseEnter={() => handleMouseEnter(activeDropdown!)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-[#15294C] shadow-2xl">
            <div className="max-w-[1440px] mx-auto px-8 py-6">
              <div className="flex flex-wrap gap-x-10 gap-y-3">
                {activeItem!.children!.map(child => (
                  <Link
                    key={child.title}
                    href={child.url}
                    className="text-[14px] text-[#E9E9E9] hover:text-[#E3664B] transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== Mobile Navigation ===== */}
      <div
        className={`lg:hidden bg-[#15294C] overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="overflow-y-auto max-h-[calc(80vh-50px)] border-t border-[#1e3561]">
          {navigation?.map(item => {
            const hasChildren = item.megaMenu ? (item.categories && item.categories.length > 0) : (item.children && item.children.length > 0)

            return (
              <div key={item.title} className="border-b border-[#1e3561]">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.url}
                    className="flex-1 px-5 py-3 text-[14px] text-[#ccc] hover:text-white transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    onClick={() => !hasChildren && setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {hasChildren && (
                    <button
                      onClick={() => toggleSubMenu(item.title)}
                      className="px-4 py-3 text-[#ccc] hover:text-white"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSubMenu === item.title ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Mobile mega menu expansion */}
                {item.megaMenu && openSubMenu === item.title && item.categories && (
                  <div className="bg-[#122240] pb-2">
                    {item.categories.map(cat => (
                      <div key={cat.title}>
                        <Link
                          href={cat.url}
                          className="block px-8 py-2 text-[13px] text-[#E9E9E9] hover:text-[#E3664B] font-medium"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {cat.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}

                {/* Mobile simple dropdown expansion */}
                {!item.megaMenu && item.children && openSubMenu === item.title && (
                  <div className="bg-[#122240] pb-2">
                    {item.children.map(child => (
                      <Link
                        key={child.title}
                        href={child.url}
                        className="block px-8 py-2 text-[13px] text-[#E9E9E9] hover:text-[#E3664B]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          {/* Mobile Contact & Quote */}
          <div className="px-5 py-4">
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-3 bg-[#E3664B] text-white text-[13px] font-medium rounded hover:bg-[#d15a42] transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact & Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
