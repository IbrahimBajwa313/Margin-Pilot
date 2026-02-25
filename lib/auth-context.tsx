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

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  jobTitle?: string;
  linkedinUrl?: string;
  photo?: string; // base64 string
  company: Company;
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
  login: (profile: UserProfile) => void
  logout: () => void
  updateProfile: (updates: Partial<UserProfile>) => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const SESSION_KEY = 'workshop_session_active'
const EMAIL_KEY = 'workshop_user_email'
const PROFILE_API = '/api/profile'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Restore session from API using stored email
  useEffect(() => {
    if (typeof window === 'undefined') return
    const sessionActive = localStorage.getItem(SESSION_KEY)
    const email = localStorage.getItem(EMAIL_KEY)
    if (sessionActive !== 'true' || !email) {
      setIsLoading(false)
      return
    }
    fetch(`${PROFILE_API}?email=${encodeURIComponent(email)}`)
      .then((res) => {
        if (res.ok) return res.json()
        localStorage.removeItem(SESSION_KEY)
        localStorage.removeItem(EMAIL_KEY)
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
        localStorage.removeItem(EMAIL_KEY)
      })
      .finally(() => setIsLoading(false))
  }, [])

  function login(profile: UserProfile) {
    setUserProfile(profile)
    setIsAuthenticated(true)
    localStorage.setItem(SESSION_KEY, 'true')
    localStorage.setItem(EMAIL_KEY, profile.email)
  }

  function logout() {
    setUserProfile(null)
    setIsAuthenticated(false)
    localStorage.removeItem(SESSION_KEY)
    localStorage.removeItem(EMAIL_KEY)
  }

  async function updateProfile(updates: Partial<UserProfile>) {
    if (!userProfile) return
    const updatedProfile = { ...userProfile, ...updates }
    setUserProfile(updatedProfile)
    try {
      const res = await fetch(PROFILE_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProfile),
      })
      if (!res.ok) throw new Error('Failed to save profile')
    } catch (e) {
      console.error('Auth | Failed to persist profile:', e)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userProfile, login, logout, updateProfile, isLoading }}>
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
