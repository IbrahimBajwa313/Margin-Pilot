"use client"

import { useAppContext } from "@/lib/app-context"
import { getEfficiencyColor, getEfficiencyLabel } from "@/components/shared"

export function useEfficiency() {
  const { efficiency } = useAppContext()

  return {
    ...efficiency,
    color: getEfficiencyColor(efficiency.requiredEfficiency),
    label: getEfficiencyLabel(efficiency.requiredEfficiency),
    breakevenColor: getEfficiencyColor(efficiency.breakevenEfficiency),
    breakevenLabel: getEfficiencyLabel(efficiency.breakevenEfficiency)
  }
}
