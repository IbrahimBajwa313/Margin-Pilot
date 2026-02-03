"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface WorkshopLoaderProps {
  size?: "small" | "medium" | "large"
  loadingText?: string
  showPercentage?: boolean
  percentage?: number
  className?: string
  exiting?: boolean
}

const sizeMap = {
  small: {
    logo: 60,
    text: "text-sm",
    spacing: "space-y-2",
  },
  medium: {
    logo: 100,
    text: "text-base",
    spacing: "space-y-3",
  },
  large: {
    logo: 140,
    text: "text-lg",
    spacing: "space-y-4",
  },
}

export function WorkshopLoader({
  size = "medium",
  loadingText = "Loading...",
  showPercentage = false,
  percentage,
  className,
  exiting = false,
}: WorkshopLoaderProps) {
  const [mounted, setMounted] = useState(false)
  const [displayPercentage, setDisplayPercentage] = useState(0)

  const dimensions = sizeMap[size]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (showPercentage && percentage !== undefined) {
      const interval = setInterval(() => {
        setDisplayPercentage((prev) => {
          if (prev >= percentage) {
            clearInterval(interval)
            return percentage
          }
          return Math.min(prev + 2, percentage)
        })
      }, 30)
      return () => clearInterval(interval)
    }
  }, [showPercentage, percentage])

  if (!mounted) {
    return null
  }

  const logoSize = dimensions.logo
  const progressRadius = logoSize / 2 + 10
  const progressCircumference = 2 * Math.PI * progressRadius
  const containerSize = logoSize + 30

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        dimensions.spacing,
        exiting && "animate-out fade-out zoom-out-95 duration-300",
        className
      )}
    >
      {/* Logo with Rotating Progress Ring */}
      <div className="relative" style={{ width: containerSize, height: containerSize }}>
        {/* Rotating Progress Ring */}
        <svg
          className="absolute inset-0 -rotate-90 animate-spin"
          width={containerSize}
          height={containerSize}
          style={{
            animationDuration: "2s",
          }}
        >
          {/* Background circle */}
          <circle
            cx={containerSize / 2}
            cy={containerSize / 2}
            r={progressRadius}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-primary/20"
          />
          {/* Animated progress circle */}
          <circle
            cx={containerSize / 2}
            cy={containerSize / 2}
            r={progressRadius}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${progressCircumference * 0.25} ${progressCircumference * 0.75}`}
            className="text-primary"
          />
        </svg>

        {/* Logo Image - Centered */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            padding: "15px",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/logo for light screen.png"
              alt="MarginPilot Logo"
              fill
              className="object-contain animate-pulse dark:hidden"
              style={{
                animationDuration: "2s",
              }}
              priority
            />
            <Image
              src="/logo for dark screen.png"
              alt="MarginPilot Logo"
              fill
              className="object-contain animate-pulse hidden dark:block"
              style={{
                animationDuration: "2s",
              }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Loading Text */}
      {loadingText && (
        <p
          className={cn(
            "font-semibold text-foreground text-center animate-pulse",
            dimensions.text
          )}
          style={{
            animationDuration: "2s",
          }}
        >
          {loadingText}
        </p>
      )}

      {/* App Name */}
      <p
        className={cn(
          "font-bold text-primary text-center tracking-wide",
          dimensions.text
        )}
      >
        MarginPilot
      </p>

      {/* Percentage Display */}
      {showPercentage && (
        <p
          className={cn(
            "font-mono text-muted-foreground text-center tabular-nums",
            size === "small" ? "text-xs" : "text-sm"
          )}
        >
          {displayPercentage}%
        </p>
      )}
    </div>
  )
}