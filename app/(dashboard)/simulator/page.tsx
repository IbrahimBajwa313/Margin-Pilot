"use client"

import { SimulatorEngine } from "@/components/simulator-engine"

export default function SimulatorPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Simulator & Analysis</h1>
          <p className="text-muted-foreground">What-if analysis for profitability optimization</p>
        </div>
      </div>

      <SimulatorEngine />
    </div>
  )
}
