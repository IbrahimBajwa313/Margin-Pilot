'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

const progressFillVariants = {
  targets: 'mp-progress-fill-targets',
  milestones: 'mp-progress-fill-milestones',
  costs: 'mp-progress-fill-costs',
} as const

function Progress({
  className,
  value,
  variant = 'milestones',
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  /** Semantic meaning: targets (green), milestones (teal), costs (amber) */
  variant?: keyof typeof progressFillVariants
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'mp-progress-track relative h-2 w-full overflow-hidden',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(progressFillVariants[variant], 'h-full w-full flex-1 transition-all')}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress, progressFillVariants }
