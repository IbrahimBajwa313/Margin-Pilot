"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface Calculation {
  id: string;
  name: string;
  dateCreated: string;
  staffCount: number;
  gpTarget: number;
  isActive: boolean;
}

export interface Branch {
  id: string;
  name: string;
  code: string;
  address?: string;
  postcode?: string;
  currency: string;
  managerName?: string;
  facilities: {
    size: number; // sq ft
    ramps: number;
    parking: number;
  };
  calculations: Calculation[];
}

export interface CompanyUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'manager' | 'staff';
  status: 'active' | 'invited' | 'inactive';
  lastActive?: string;
  createdAt: string;
}

export interface Company {
  id: string;
  name: string;
  logo?: string; // base64 string
  ownerName: string;
  address?: string;
  email: string;
  phone?: string;
  website?: string;
  multiLocation: boolean;
  branches: Branch[];
  users: CompanyUser[];
}

export type Role = "admin" | "manager" | "staff"

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  jobTitle?: string;
  linkedinUrl?: string;
  photo?: string; // public URL from Supabase Storage
  company: Company;
  /** Set when user is a member of another company (accepted invite). Role is in owner's company.users. */
  companyOwnerEmail?: string;
  /** Resolved by API: 'admin' | 'manager' | 'staff'. Owner = admin; members get role from company.users. */
  effectiveRole?: Role;
  /** Resolved by API: company to show (owner's company when member, else own company). */
  effectiveCompany?: Company;
  preferences: {
    darkMode: boolean;
    beginnerMode: boolean;
  };
  hasCompletedSetup: boolean;
  createdAt: string;
}

interface AuthContextType {
  isAuthenticated: boolean
  userProfile: UserProfile | null
  login: (profile: UserProfile) => Promise<void>
  logout: () => void
  updateProfile: (updates: Partial<UserProfile>) => void
  refreshProfile: () => Promise<void>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const SESSION_KEY = 'workshop_session_active'
const PROFILE_API = '/api/profile'
const LOGOUT_API = '/api/auth/logout'

const fetchOpts = { credentials: 'include' as RequestCredentials }

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Restore session: cookie identifies user, GET /api/profile returns their profile
  useEffect(() => {
    if (typeof window === 'undefined') return
    const sessionActive = localStorage.getItem(SESSION_KEY)
    if (sessionActive !== 'true') {
      setIsLoading(false)
      return
    }
    fetch(PROFILE_API, fetchOpts)
      .then((res) => {
        if (res.ok) return res.json()
        localStorage.removeItem(SESSION_KEY)
        return null
      })
      .then((profile: UserProfile | null) => {
        if (profile) {
          setUserProfile(profile)
          setIsAuthenticated(true)
        }
      })
      .catch(() => {
        localStorage.removeItem(SESSION_KEY)
      })
      .finally(() => setIsLoading(false))
  }, [])

  async function login(profile: UserProfile) {
    setUserProfile(profile)
    setIsAuthenticated(true)
    localStorage.setItem(SESSION_KEY, 'true')
    // Refetch full profile so invited users get effectiveRole + effectiveCompany (shared workspace)
    const res = await fetch(PROFILE_API, fetchOpts)
    if (res.ok) {
      const data = await res.json()
      setUserProfile(data)
    }
  }

  function logout() {
    setUserProfile(null)
    setIsAuthenticated(false)
    localStorage.removeItem(SESSION_KEY)
    fetch(LOGOUT_API, { method: 'POST', ...fetchOpts }).catch(() => {})
  }

  async function updateProfile(updates: Partial<UserProfile>): Promise<void> {
    if (!userProfile) return
    const updatedProfile = { ...userProfile, ...updates }
    setUserProfile(updatedProfile)
    const res = await fetch(PROFILE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProfile),
      credentials: 'include',
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error((err as { error?: string }).error ?? 'Failed to save profile')
    }
    const data = await res.json()
    setUserProfile(data)
  }

  async function refreshProfile(): Promise<void> {
    const res = await fetch(PROFILE_API, fetchOpts)
    if (res.ok) {
      const data = await res.json()
      setUserProfile(data)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userProfile, login, logout, updateProfile, refreshProfile, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
