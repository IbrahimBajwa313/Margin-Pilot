"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  LogOut,
  Home,
  Database,
  TrendingUp,
  Gauge,
  Target,
  Wrench,
  FileDown,
  Settings,
  ChevronLeft,
  ChevronRight,
  Building2,
  Users,
  Briefcase,
  UserCog,
  BookOpen,
  LifeBuoy,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import type { Role } from "@/lib/auth-context"

/** Routes restricted by role: only these roles can see the link. */
const SETTINGS_ACCESS: Record<string, Role[]> = {
  "/settings/branch": ["admin", "manager"],
  "/settings/company": ["admin", "manager"],
  "/settings/users": ["admin"],
  "/settings/profile": ["admin", "manager", "staff"],
}

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  /** Controlled mobile open state (e.g. from header menu button). If not provided, uses internal state. */
  isMobileOpen?: boolean
  setIsMobileOpen?: (open: boolean) => void
}

export function Sidebar({ isOpen, setIsOpen, isMobileOpen: controlledMobileOpen, setIsMobileOpen: setControlledMobileOpen }: SidebarProps) {
  const [internalMobileOpen, setInternalMobileOpen] = useState(false)
  const isMobileOpen = controlledMobileOpen ?? internalMobileOpen
  const setIsMobileOpen = setControlledMobileOpen ?? setInternalMobileOpen
  const { userProfile, logout } = useAuth()
  const pathname = usePathname()

  // Lock body scroll on mobile when sidebar is open; prevent background page from scrolling
  useEffect(() => {
    if (!isMobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [isMobileOpen])

  interface NavItem {
    icon?: any
    label?: string
    href?: string
    header?: string
  }

  const role: Role = userProfile?.effectiveRole || "admin"
  const canAccess = (href: string) => {
    const allowed = SETTINGS_ACCESS[href]
    if (!allowed) return true
    return allowed.includes(role)
  }

  const navItems: NavItem[] = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Database, label: "Data Inputs", href: "/data-inputs" },
    { icon: Target, label: "Gross Profit Target", href: "/gross-profit-target" },
    { icon: TrendingUp, label: "Simulator", href: "/simulator" },
    { icon: Gauge, label: "Efficiency Analysis", href: "/efficiency-analysis" },
    { icon: Wrench, label: "Tools", href: "/tools" },
    { icon: FileDown, label: "Data Export", href: "/data-export" },
    // Resources & support
    { header: "RESOURCES" },
    { icon: BookOpen, label: "Resources", href: "/resources" },
    { icon: LifeBuoy, label: "Help and Support", href: "/help-support" },
    { icon: Info, label: "About Us", href: "/about" },
    // Settings Section
    { header: "SETTINGS" },
    { icon: Building2, label: "Branch Settings", href: "/settings/branch" },
    { icon: Briefcase, label: "Company Settings", href: "/settings/company" },
    { icon: Users, label: "Company Users", href: "/settings/users" },
    { icon: UserCog, label: "My Settings", href: "/settings/profile" },
  ].filter((item) => !item.href || canAccess(item.href))

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!userProfile) return "U"
    return `${userProfile.firstName.charAt(0)}${userProfile.lastName.charAt(0)}`.toUpperCase()
  }

  // Get user display name
  const getUserDisplayName = () => {
    if (!userProfile) return "User"
    return `${userProfile.firstName} ${userProfile.lastName}`
  }

  return (
    <>
      {/* Mobile toggle - top-left (only when sidebar is closed or for quick access) */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-[55] h-10 w-10 rounded-xl mp-btn-ghost shadow-sm"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label={isMobileOpen ? "Close menu" : "Open menu"}
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Sidebar: sticky on desktop (in flow), fixed overlay on mobile */}
      <aside
        className={`h-screen border-r border-sidebar-border bg-sidebar transition-all duration-300 ease-in-out flex flex-col shadow-xl backdrop-blur-xl overflow-hidden
          fixed left-0 top-0 lg:sticky lg:top-0 lg:self-start
          w-64 ${isOpen ? "lg:w-64" : "lg:w-0"}
          ${isMobileOpen ? "z-[55] translate-x-0" : "z-40 -translate-x-full"} lg:z-[60] lg:translate-x-0`}
      >
        {/* Header / Logo (fixed at top of sidebar) - higher z on desktop so logo sits above navbar */}
        <div className="flex h-16 items-center px-4 lg:pr-5 border-b border-sidebar-border shrink-0 bg-sidebar/50 backdrop-blur-sm">
          <div className="flex items-center justify-between w-full min-w-0">
            <div className={`flex items-center gap-3 transition-opacity duration-200 min-w-0 flex-1 lg:pr-3 ${isOpen ? "opacity-100" : "opacity-0"}`}>
              <div className="relative w-40 h-10 rounded-lg overflow-hidden shrink-0">
                <Image
                  src="/logo for light screen.png"
                  alt="MarginPilot Logo"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/logo for dark screen.png"
                  alt="MarginPilot Logo"
                  fill
                  className="object-contain hidden dark:block"
                />
              </div>
            </div>
            {/* Desktop Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hidden lg:flex h-8 w-8 shrink-0"
            >
              {isOpen ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Scrollable menu area (only this section scrolls) */}
        <nav className="flex-1 overflow-y-auto min-h-0 py-4 px-3 space-y-2 no-scrollbar">
          {navItems.map((item, index) => {
            // Handle section headers
            if (item.header) {
              return (
                <div key={index} className="px-3 py-2 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider">
                  {item.header}
                </div>
              )
            }

            // Handle navigation items
            const { icon: Icon, label, href } = item
            if (!Icon || !label || !href) return null

            const isActive = pathname === href;

            return (
              <Link key={label} href={href}>
                <Button
                  variant="ghost"
                  className={`
                    w-full justify-start gap-3 rounded-lg transition-all duration-200 group
                    ${isActive
                      ? 'bg-[rgba(47,211,198,0.14)] text-[var(--mp-teal)] border border-[rgba(47,211,198,0.35)]'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    }
                    ${isOpen ? 'px-3' : 'px-2'}
                  `}
                >
                  <Icon className={`h-5 w-5 mr-3 transition-colors ${isActive ? 'text-[var(--mp-teal)]' : 'text-muted-foreground group-hover:text-[var(--mp-teal)]'}`} />
                  <span className={`text-sm transition-all duration-200 ${isOpen ? 'opacity-100 max-w-32' : 'opacity-0 max-w-0 overflow-hidden'}`}>
                    {label}
                  </span>
                </Button>
              </Link>
            )
          })}
        </nav>

        {/* Footer - extra bottom padding on mobile so user + Log Out stay above browser home bar */}
        <div className={`p-4 pb-24 lg:pb-4 border-t border-sidebar-border space-y-3 transition-all duration-200 bg-sidebar/50 backdrop-blur-sm shrink-0 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-[rgba(47,211,198,0.14)] flex items-center justify-center ring-2 ring-[rgba(47,211,198,0.2)] overflow-hidden shrink-0">
              {userProfile?.photo ? (
                <img
                  src={userProfile.photo}
                  alt={getUserDisplayName()}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xs font-bold text-[var(--mp-teal)]">{getUserInitials()}</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-sidebar-foreground truncate">{getUserDisplayName()}</p>
              <p className="text-xs text-sidebar-foreground/60 truncate">{(userProfile?.effectiveCompany ?? userProfile?.company)?.name || "Owner"}</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full justify-start gap-2 text-xs mp-btn-ghost"
            onClick={logout}
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </Button>
        </div>
      </aside>

      {/* Overlay for mobile: fades background, blocks scroll & interaction until sidebar is closed */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-[54] lg:hidden bg-black/60 backdrop-blur-sm touch-none"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
