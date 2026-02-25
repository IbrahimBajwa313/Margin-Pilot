"use client"

import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface DynamicRowProps {
  id: string
  fields: {
    label: string
    value: string | number
    onChange: (value: string | number) => void
    type?: "text" | "number"
    placeholder?: string
  }[]
  onDelete: () => void
}

export function DynamicRow({ id, fields, onDelete }: DynamicRowProps) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-card border rounded-lg w-full min-w-0 md:flex-row md:items-center">
      {/* Delete button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onDelete}
        className="text-destructive flex-shrink-0 self-start md:self-center"
      >
        <Trash2 className="w-4 h-4" />
      </Button>

      {/* Input fields: full width on mobile, row on desktop */}
      {fields.map((field, idx) => (
        <div key={`${id}-field-${idx}`} className="flex flex-col w-full min-w-0 md:flex-1">
          {/* LABEL: Visible on mobile; desktop uses placeholder in input */}
          <span className="text-[10px] uppercase font-bold text-muted-foreground mb-1 block md:hidden">
            {field.label}
          </span>
          <Input
            type={field.type || "text"}
            placeholder={field.placeholder || field.label}
            value={String(field.value)}
            onChange={(e) => field.onChange(e.target.value)}
            className="w-full min-w-0"
          />
        </div>
      ))}
    </div>
  )
}
