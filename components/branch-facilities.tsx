"use client"

import { useState, useEffect } from "react"
import { useAppContext } from "@/lib/app-context"
import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Branch } from "@/lib/auth-context"

export function BranchFacilities() {
  const { data: businessData } = useAppContext()
  const { userProfile, updateProfile } = useAuth()
  const company = userProfile?.effectiveCompany ?? userProfile?.company

  const [workshopSize, setWorkshopSize] = useState(0)
  const [ramps, setRamps] = useState(0)

  const getActiveBranchData = () => {
    if (!company?.branches?.length) {
      return { size: 0, ramps: 0 }
    }
    const activeBranch = company.branches[0]
    return {
      size: activeBranch.facilities?.size || 0,
      ramps: activeBranch.facilities?.ramps || 0
    }
  }
  
  // Initialize with branch data from User Profile
  useEffect(() => {
    const branchData = getActiveBranchData()
    setWorkshopSize(branchData.size)
    setRamps(branchData.ramps)
  }, [userProfile])
  
  // Handle updates and save to User Profile
  const handleUpdate = (field: 'size' | 'ramps', value: string) => {
    const newVal = Number(value) || 0;
    
    if (!company?.branches?.length) {
      console.error("No company or branches found")
      return
    }
    if (field === 'size') setWorkshopSize(newVal)
    else if (field === 'ramps') setRamps(newVal)

    const updatedBranches = [...company.branches]
    updatedBranches[0] = {
      ...updatedBranches[0],
      facilities: {
        ...updatedBranches[0].facilities,
        [field]: newVal
      }
    }
    updateProfile({
      company: { ...company, branches: updatedBranches }
    })
    
    console.log(`Updated ${field} in branch:`, newVal)
  }
  
  // Get tech count from Business Data context (technicians array)
  const techCount = businessData.technicians?.length || 0;
  
  // Calculate ramps per tech (handle division by zero)
  const rampsPerTech = techCount > 0 ? (ramps / techCount).toFixed(1) : "0.0";

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
              onChange={(e) => handleUpdate('size', e.target.value)}
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
