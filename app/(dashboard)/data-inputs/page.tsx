"use client"

import { DataInputForm } from "@/components/data-input-form"
import { LiveTargetPreview } from "@/components/live-target-preview"

export default function DataInputsPage() {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-3 min-w-0">
      {/* Main form - full width on mobile, 2 cols on desktop */}
      <div className="min-w-0 lg:col-span-2">
        <DataInputForm />
      </div>

      {/* Right sidebar - full width on mobile, 1 col on desktop */}
      <div className="min-w-0 lg:col-span-1">
        <LiveTargetPreview />
      </div>
    </div>
  )
}
