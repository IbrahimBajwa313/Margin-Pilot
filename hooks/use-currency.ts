"use client"

import { useAuth } from "@/lib/auth-context"
import { getCurrencySymbol } from "@/lib/utils"

export function useCurrency() {
  const { userProfile } = useAuth()
  
  // Get currency from the first branch (or default to EUR)
  const currencyCode = userProfile?.company?.branches?.[0]?.currency || "EUR"
  
  // Get the symbol for the currency
  const symbol = getCurrencySymbol(currencyCode)
  
  return {
    code: currencyCode,
    symbol,
    format: (amount: number) => `${symbol}${amount.toFixed(2)}`
  }
}
