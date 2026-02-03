"use client"

import { useAppContext } from "@/lib/app-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCurrency } from "@/hooks/use-currency"

export function TodaysActualCard() {
  const { data } = useAppContext()
  const { symbol } = useCurrency()

  const getStatusStyles = () => {
    switch (data.dailyActualStatus) {
      case "green":
        return {
          borderColor: "border-green-500",
          textColor: "text-green-600",
          badgeBg: "bg-green-50 dark:bg-green-950",
          badgeText: "text-green-700 dark:text-green-300",
          label: "On Target ✓",
        }
      case "amber":
        return {
          borderColor: "border-amber-500",
          textColor: "text-amber-600",
          badgeBg: "bg-amber-50 dark:bg-amber-950",
          badgeText: "text-amber-700 dark:text-amber-300",
          label: "Close to Target ⚠",
        }
      case "red":
        return {
          borderColor: "border-red-500",
          textColor: "text-red-600",
          badgeBg: "bg-red-50 dark:bg-red-950",
          badgeText: "text-red-700 dark:text-red-300",
          label: "Below Target",
        }
      default:
        return {
          borderColor: "border-border",
          textColor: "text-muted-foreground",
          badgeBg: "bg-muted",
          badgeText: "text-muted-foreground",
          label: "No entry yet",
        }
    }
  }

  const styles = getStatusStyles()

  return (
    <Card className={`${styles.borderColor} border-2 transition-all hover:shadow-lg hover:scale-[1.02]`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">Today's Actual</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className={`text-3xl font-bold ${styles.textColor}`}>
          {data.todayActual > 0 ? `${symbol}${data.todayActual.toFixed(2)}` : "—"}
        </div>
        {data.dailyActualStatus && (
          <div
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${styles.badgeBg} ${styles.badgeText}`}
          >
            {styles.label}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
