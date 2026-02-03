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

// Storage Keys
const STORAGE_KEY = 'workshop_user_profile' // The DB - NEVER DELETE THIS
const SESSION_KEY = 'workshop_session_active' // The Flag

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check authentication status on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY)
      const sessionActive = localStorage.getItem(SESSION_KEY)
      
      console.log("AuthContext (Mount) | Profile from Storage:", stored)
      console.log("AuthContext (Mount) | Session State:", sessionActive)
      
      if (stored && sessionActive === 'true') {
        try {
          const profile = JSON.parse(stored)
          setUserProfile(profile)
          setIsAuthenticated(true)
          console.log("Auth | User authenticated via active session:", profile)
        } catch (error) {
          console.error('Auth | Failed to parse stored profile:', error)
          localStorage.removeItem(STORAGE_KEY)
          localStorage.removeItem(SESSION_KEY)
        }
      } else if (stored) {
        console.log("Auth | User profile exists but session is inactive")
      } else {
        console.log("Auth | No user profile found")
      }
    }
    setIsLoading(false)
  }, [])

  function login(profile: UserProfile) {
    console.log("AuthContext (Login) | Received user data:", profile)
    console.log("AuthContext (Login) | Current Profile Storage:", localStorage.getItem(STORAGE_KEY))
    console.log("AuthContext (Login) | Current Session State:", localStorage.getItem(SESSION_KEY))
    
    // Update State
    setUserProfile(profile)
    setIsAuthenticated(true)
    
    // Set session active flag (DO NOT write user profile here)
    localStorage.setItem(SESSION_KEY, 'true')
    console.log("Auth | Session activated, state updated:", profile)
  }

  function logout() {
    console.log("AuthContext (Logout) | Logging out user")
    
    // Update State
    setUserProfile(null)
    setIsAuthenticated(false)
    
    // ONLY remove session flag - DO NOT delete user profile
    localStorage.removeItem(SESSION_KEY)
    console.log("Auth | Session deactivated, user profile preserved")
  }

  function updateProfile(updates: Partial<UserProfile>) {
    if (!userProfile) {
      console.error("AuthContext (UpdateProfile) | No user profile found")
      return
    }

    const updatedProfile = { ...userProfile, ...updates }
    setUserProfile(updatedProfile)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile))
    console.log("AuthContext (UpdateProfile) | Profile updated:", updatedProfile)
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
