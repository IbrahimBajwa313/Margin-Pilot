"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppContext, calculateDailyStatus } from "@/lib/app-context"
import { useCurrency } from "@/hooks/use-currency"

interface AddDailyActualsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AddDailyActualsModal({ isOpen, onClose }: AddDailyActualsModalProps) {
  const { data, updateData, calculatedTargets } = useAppContext()
  const { symbol } = useCurrency()
  const [laborTaking, setLaborTaking] = useState<string>("")
  const [partsProfitInput, setPartsProfitInput] = useState<string>("")
  const [error, setError] = useState<string>("")

  // Force re-reading data every time modal opens
  useEffect(() => {
    if (isOpen) {
      console.log("Modal | Opened - Standard Daily Target:", calculatedTargets.standardDailyGpTarget);
      console.log("Modal | Full Context Data:", data);
    }
  }, [isOpen, data, calculatedTargets])

  // Use standardized daily target from new financial logic
  const dailyTarget = calculatedTargets.standardDailyGpTarget || 0

  console.log("Modal | Using Standard Daily Target:", dailyTarget)

  const handleSubmit = () => {
    setError("")

    const labor = Number.parseFloat(laborTaking)
    const parts = Number.parseFloat(partsProfitInput)

    if (isNaN(labor) || isNaN(parts) || labor < 0 || parts < 0) {
      setError("Please enter valid positive numbers")
      return
    }

    const actualGP = labor + parts
    const status = calculateDailyStatus(actualGP, dailyTarget)

    console.log("Submitting to Database:", {
      date: new Date(),
      labor: labor,
      parts: parts,
      total: actualGP,
      status: status,
    })

    updateData({
      todayActual: actualGP,
      dailyActualStatus: status,
    })

    // Reset form and close modal
    setLaborTaking("")
    setPartsProfitInput("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>End of Day Entry</DialogTitle>
          <DialogDescription>Enter today's labor taking and parts profit to calculate your daily GP.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Daily Target Reference */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Daily Target</p>
            {dailyTarget === 0 ? (
              <div className="text-2xl font-bold text-muted-foreground">
                {data.fixedExpenses && data.fixedExpenses.length > 0 ? "Loading..." : "No Target Set"}
              </div>
            ) : (
              <p className="text-2xl font-bold text-primary">{symbol}{dailyTarget.toFixed(2)}</p>
            )}
          </div>

          {/* Labor Taking Input */}
          <div className="space-y-2">
            <Label htmlFor="labor" className="text-sm font-medium">
              Labor Taking ({symbol})
            </Label>
            <Input
              id="labor"
              type="number"
              placeholder="0.00"
              value={laborTaking}
              onChange={(e) => setLaborTaking(e.target.value)}
              className="text-lg"
            />
          </div>

          {/* Parts Profit Input */}
          <div className="space-y-2">
            <Label htmlFor="parts" className="text-sm font-medium">
              Parts Profit ({symbol})
            </Label>
            <Input
              id="parts"
              type="number"
              placeholder="0.00"
              value={partsProfitInput}
              onChange={(e) => setPartsProfitInput(e.target.value)}
              className="text-lg"
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-sm text-destructive font-medium">{error}</div>}

          {laborTaking && partsProfitInput && !error && (
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Calculated Daily GP</p>
              <div className="text-2xl font-bold">
                {symbol}{(Number.parseFloat(laborTaking) + Number.parseFloat(partsProfitInput)).toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {dailyTarget === 0
                  ? "Set target first"
                  : Number.parseFloat(laborTaking) + Number.parseFloat(partsProfitInput) >= dailyTarget
                    ? "✓ On Target"
                    : `${(((Number.parseFloat(laborTaking) + Number.parseFloat(partsProfitInput)) / dailyTarget) * 100).toFixed(0)}% of target`}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Submit Entry
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
