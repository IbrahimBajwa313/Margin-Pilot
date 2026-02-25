"use client"

import { useAppContext } from "@/lib/app-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function BranchFacilities() {
  const { data, updateData } = useAppContext()
  const workshopSize = data.workshopSize ?? 0
  const ramps = data.ramps ?? 0
  const techCount = data.technicians?.length ?? 0
  const rampsPerTech = techCount > 0 ? (ramps / techCount).toFixed(1) : "0.0"

  const handleUpdate = (field: "workshopSize" | "ramps", value: string) => {
    const num = Number(value) || 0
    updateData({ [field]: num })
  }

  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-base">Branch Facilities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-muted/50 border border-border">
            <Label htmlFor="workshop-size" className="text-xs text-muted-foreground mb-1 block">
              Workshop Size (sqft)
            </Label>
            <Input
              id="workshop-size"
              type="number"
              value={workshopSize}
              onChange={(e) => handleUpdate("workshopSize", e.target.value)}
              className="text-lg font-semibold text-foreground h-8"
              placeholder="0"
            />
          </div>

          <div className="p-3 rounded-lg bg-muted/50 border border-border">
            <Label htmlFor="ramps" className="text-xs text-muted-foreground mb-1 block">
              Ramps
            </Label>
            <Input
              id="ramps"
              type="number"
              value={ramps}
              onChange={(e) => handleUpdate('ramps', e.target.value)}
              className="text-lg font-semibold text-foreground h-8"
              placeholder="0"
            />
          </div>

          <div className="p-3 rounded-lg bg-muted/50 border border-border">
            <p className="text-xs text-muted-foreground mb-1">Technicians</p>
            <p className="text-lg font-semibold text-foreground">{techCount}</p>
            <p className="text-xs text-muted-foreground">From Business Data</p>
          </div>

          <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
            <p className="text-xs text-muted-foreground mb-1">Ramps per Tech</p>
            <p className="text-lg font-semibold text-primary">{rampsPerTech}</p>
            <p className="text-xs text-muted-foreground">Calculated</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
