import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface KPICardProps {
  title: string
  value: string | number
  subtitle?: string
  badge?: ReactNode
  trend?: "up" | "down" | "neutral"
  className?: string
}

export function KPICard({ title, value, subtitle, badge, trend, className = "" }: KPICardProps) {
  return (
    <Card className={`${className} hover:shadow-lg hover:border-primary/20 transition-all duration-300 border-border/50 group`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-2xl lg:text-3xl font-bold text-foreground bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text group-hover:from-primary group-hover:to-accent transition-all duration-300">{value}</div>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        {badge && <div className="pt-2">{badge}</div>}
      </CardContent>
    </Card>
  )
}
