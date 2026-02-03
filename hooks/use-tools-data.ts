"use client"

import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "workshop_tools_data"

export interface MarginStrategy {
  id: string
  category: string
  markup: number
  margin: number
}

export interface WorkshopToolsData {
  marginCalc: {
    cost: number
    price: number
    markup: number
    margin: number
    strategies: MarginStrategy[]
  }
  vatCalc: {
    amount: number
    rate: number
    mode: "add" | "remove"
    customRate?: number
  }
  labourRateCalc: {
    rows: { id: string; name: string; rate: number; pct: number }[]
  }
  loanCalc: {
    amount: number
    rate: number
    term: number
    startDate: string
    type: "standard" | "interest-only" | "balloon"
    savedLoans: {
      id: string
      bankName: string
      amount: number
      rate: number
      term: number
      startDate: string
      type: string
      monthlyPayment: number
    }[]
  }
  corpTaxCalc: {
    profits: number
  }
  dividendTaxCalc: {
    dividendIncome: number
    otherIncome: number
  }
}

const defaultData: WorkshopToolsData = {
  marginCalc: {
    cost: 0,
    price: 0,
    markup: 0,
    margin: 0,
    strategies: [],
  },
  vatCalc: {
    amount: 0,
    rate: 20,
    mode: "add",
    customRate: undefined,
  },
  labourRateCalc: {
    rows: [{ id: "1", name: "Service", rate: 0, pct: 0 }],
  },
  loanCalc: {
    amount: 0,
    rate: 0,
    term: 0,
    startDate: new Date().toISOString().slice(0, 10),
    type: "standard",
    savedLoans: [],
  },
  corpTaxCalc: {
    profits: 0,
  },
  dividendTaxCalc: {
    dividendIncome: 0,
    otherIncome: 0,
  },
}

function loadStored(): WorkshopToolsData {
  if (typeof window === "undefined") return defaultData
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultData
    const parsed = JSON.parse(raw) as Partial<WorkshopToolsData>
    return {
      marginCalc: { ...defaultData.marginCalc, ...parsed.marginCalc },
      vatCalc: { ...defaultData.vatCalc, ...parsed.vatCalc },
      labourRateCalc: { ...defaultData.labourRateCalc, ...parsed.labourRateCalc },
      loanCalc: { ...defaultData.loanCalc, ...parsed.loanCalc },
      corpTaxCalc: { ...defaultData.corpTaxCalc, ...parsed.corpTaxCalc },
      dividendTaxCalc: { ...defaultData.dividendTaxCalc, ...parsed.dividendTaxCalc },
    }
  } catch {
    return defaultData
  }
}

export function useToolsData() {
  const [data, setData] = useState<WorkshopToolsData>(defaultData)

  useEffect(() => {
    setData(loadStored())
  }, [])

  const persist = useCallback((next: WorkshopToolsData) => {
    setData(next)
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    }
  }, [])

  const update = useCallback(
    <K extends keyof WorkshopToolsData>(
      key: K,
      value:
        | Partial<WorkshopToolsData[K]>
        | ((prev: WorkshopToolsData[K]) => WorkshopToolsData[K])
    ) => {
      setData((prev) => {
        const next = { ...prev }
        const nextValue =
          typeof value === "function"
            ? value(prev[key])
            : { ...prev[key], ...value }
        ;(next as Record<K, WorkshopToolsData[K]>)[key] =
          nextValue as WorkshopToolsData[K]
        if (typeof window !== "undefined") {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        }
        return next
      })
    },
    []
  )

  return { data, update, persist }
}
